import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import fetchCountries from '../../api/dao';
import {
  updateCountries,
  updateCountry,
  deleteCountry,
  selectCountry,
} from '../../store/actions';
import Dropdown from './Dropdown';
import Editor from './Editor';

class Container extends PureComponent {
  componentDidMount() {
    fetchCountries()
      .then((countries) => {
        this.props.updateCountries(countries); /* eslint-disable-line react/destructuring-assignment */
      })
      .catch(console.error);
  }

  onCountrySelected = (countryId) => {
    this.props.selectCountry(countryId); /* eslint-disable-line react/destructuring-assignment */
  }

  onCountryUpdated = (country) => {
    this.props.updateCountry(country); /* eslint-disable-line react/destructuring-assignment */
  }

  onCountryDeleted = (countryId) => {
    this.props.deleteCountry(countryId); /* eslint-disable-line react/destructuring-assignment */
  }

  render() {
    const { countries, selectedCountry } = this.props;

    const isLoading = countries.length === 0;
    if (isLoading) {
      return <div>Loading countries...</div>;
    }

    return (
      <div>
        <Dropdown
          items={countries}
          onChange={this.onCountrySelected}
        />
        {selectedCountry && (
          <Editor
            country={selectedCountry}
            onSubmit={this.onCountryUpdated}
            onDelete={this.onCountryDeleted}
          />
        )}
      </div>
    );
  }
}

Container.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.object),
  selectedCountry: PropTypes.shape({
    code: PropTypes.string,
    name: PropTypes.string,
    population: PropTypes.number,
  }),
  updateCountries: PropTypes.func.isRequired,
  updateCountry: PropTypes.func.isRequired,
  deleteCountry: PropTypes.func.isRequired,
  selectCountry: PropTypes.func.isRequired,
};

Container.defaultProps = {
  countries: [],
  selectedCountry: null,
};

export const mapStateToProps = ({ countries }) => {
  //  find selected country
  const selectedCountry = countries.find(c => c.isSelected);

  return { countries, selectedCountry };
};

export const mapDispatchToProps = {
  updateCountries, updateCountry, deleteCountry, selectCountry,
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
