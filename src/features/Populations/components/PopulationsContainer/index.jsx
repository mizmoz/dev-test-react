import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import P from 'components/app/P';
import {
  selectCountriesByCode, selectCountriesByPopulationArray, selectError, selectLoading,
} from '../../selectors';
import { getCountries, setCountryPopulation, deleteCountryPopulation } from '../../actions';
import PopulationsForm from '../PopulationsForm';

class PopulationsContainer extends React.Component {
  componentDidMount() {
    const { getCountriesDispatch } = this.props;
    getCountriesDispatch();
  }

  renderLoading = () => (
    <P>Loading...</P>
  )

  renderError = () => (
    <React.Fragment>
      <P>Oops, something went wrong.</P>
      <P>Please refresh your browser to try again.</P>
    </React.Fragment>
  )

  render = () => {
    const {
      error,
      loading,
      countriesByCode,
      countriesByPopulationArray,
      setCountryPopulationDispatch,
      deleteCountryPopulationDispatch,
    } = this.props;
    if (loading) return this.renderLoading();
    if (error) return this.renderError();
    return (
      <PopulationsForm
        countriesByCode={countriesByCode}
        countriesByPopulationArray={countriesByPopulationArray}
        setCountryPopulationDispatch={setCountryPopulationDispatch}
        deleteCountryPopulationDispatch={deleteCountryPopulationDispatch}
      />
    );
  }
}

PopulationsContainer.propTypes = {
  countriesByCode: PropTypes.shape().isRequired,
  countriesByPopulationArray: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    population: PropTypes.string.isRequired,
  })).isRequired,
  deleteCountryPopulationDispatch: PropTypes.func.isRequired,
  error: PropTypes.bool.isRequired,
  getCountriesDispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  setCountryPopulationDispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  error: selectError(state),
  loading: selectLoading(state),
  countriesByCode: selectCountriesByCode(state),
  countriesByPopulationArray: selectCountriesByPopulationArray(state),
});

const mapDispatchToProps = dispatch => ({
  deleteCountryPopulationDispatch: countryCode => dispatch(deleteCountryPopulation(countryCode)),
  getCountriesDispatch: () => dispatch(getCountries()),
  setCountryPopulationDispatch: (countryCode, population) => dispatch(setCountryPopulation(countryCode, population)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PopulationsContainer);
