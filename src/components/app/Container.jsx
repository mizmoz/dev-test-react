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
        this.props.updateCountries(countries);
      })
      .catch(console.error);
  }

  onCountrySelected = (countryId) => {
    this.props.selectCountry(countryId);
  }

  onCountryUpdated = (country) => {
    this.props.updateCountry(country);
  }

  onCountryDeleted = (countryId) => {
    this.props.deleteCountry(countryId);
  }

  render() {
    const { countries, selectedCountry } = this.props;

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
  countries: PropTypes.array,
  selectedCountry: PropTypes.object,
  updateCountries: PropTypes.func.isRequired,
  updateCountry: PropTypes.func.isRequired,
  deleteCountry: PropTypes.func.isRequired,
};

Container.defaultProps = {
  countries: [],
  selectedCountry: null,
};

export const mapStateToProps = ({ countries }) => {
  console.log('mapStateToProps', countries);
  const selectedCountry = countries.find((c) => c.isSelected);

  return { countries, selectedCountry };
}

export const mapDispatchToProps = {
  updateCountries, updateCountry, deleteCountry, selectCountry,
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
