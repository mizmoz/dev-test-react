import { connect } from 'react-redux'
import Form from '../components/app/Form'
import { selectCountry, setPopulation } from '../store/actions'

const mapStateToProps = state => ({
  countries: state.countries,
  countrySelected: state.countrySelected
})

const mapDispatchToProps = dispatch => ({
  onCountryChange: event => dispatch(selectCountry(event.target.value)),
  onUpdatePopulation: (event, country, population) => {
    event.preventDefault();
    dispatch(setPopulation(country, population))
  },
  onDeletePopulation: (event, country) => {
    event.preventDefault();
    dispatch(setPopulation(country))
  },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form)