import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { addPopulation } from "../../store/actions";

const InputSection = styled.div`
  align-items: center;
  margin-bottom: 20px;
  
  
  select, input[type="number"] {
    height: 40px;
    background: white;
    border: grey 1px solid;
    display: block;
    width: 100%;
  }
  
  input[type="submit"] {
    width: 100%;
    background: blue;
    color: white;
    padding: 10px;
    border-radius: 5px;
  }
`;

const Error = styled.span`
  color: red;
`;
Error.displayName = 'Error';


export class PopulationForm extends React.PureComponent {

  state = {
    country: this.props.countryList[0].name,
    population: '',
    error: '',
  };

  componentDidMount () {

  }

  handleChange = (event) => {
    const stateKey = event.target.getAttribute('name');
    const stateVal = event.target.value;
    this.setState(() => ({
      [stateKey] : stateVal,
    }));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { country, population } = this.state;
    if(!country || !population){
      this.setState(() => ({error: 'please complete form'}));
      return;
    }

    this.props.addPopulation({country, population});
    this.resetState();
  }

  resetState = () => {
    this.setState(() => ({
      country: this.props.countryList[0].name,
      population: '',
      error: '',
    }))
  }

  render () {
    const { country, population, error } = this.state;
    const { countryList } = this.props;
    return (
      <form onSubmit={this.handleSubmit}>
        <InputSection>
          <label htmlFor="country">Country</label>
          <select
            value={country}
            id="country"
            name="country"
            onChange={this.handleChange}
          >
            {countryList.map(({name, code}) => (
              <option key={code}>{name}</option>
            ))}
          </select>
        </InputSection>

        <InputSection>
          <label htmlFor="population">Population</label>
          <input
            name="population"
            id="population"
            type="number"
            placeholder="population"
            value={population}
            onChange={this.handleChange}
          />
        </InputSection>

        <InputSection>
          <input type="submit" value="Add Population"/>
        </InputSection>
        <Error>{error}</Error>

      </form>
    )
  }
}

const mapStateToProps = (state) => ({
  countryList: state.countryList,
});

const mapDispatchToProps = (dispatch) => ({
  addPopulation: (country) => dispatch(addPopulation(country))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PopulationForm)
