import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import fetchCountries from '../../api/dao';
import {
  updateCountries,
  updateCountry,
  deleteCountry,
} from '../../store/actions';
import Dropdown from './Dropdown';

class Container extends PureComponent {
  componentDidMount() {
    fetchCountries()
      .then((countries) => {
        this.props.updateCountries(countries);
      })
      .catch(console.error);
  }

  render() {
    const { countries } = this.props;

    return (
      <div>
        <Dropdown items={countries} />
      </div>
    );
  }
}

Container.propTypes = {
  countries: PropTypes.array,
  updateCountries: PropTypes.func.isRequired,
  updateCountry: PropTypes.func.isRequired,
  deleteCountry: PropTypes.func.isRequired,
};

Container.defaultProps = {
  countries: [],
};

export const mapStateToProps = ({ countries }) => {
  console.log('mapStateToProps', countries);
  return { countries };
}

export const mapDispatchToProps = {
  updateCountries, updateCountry, deleteCountry,
};

export default connect(mapStateToProps, mapDispatchToProps)(Container);
