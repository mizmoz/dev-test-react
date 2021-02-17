import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/actions';
import Button from './Button';
import Input from './Input';
import Select from './Select';
import styled from 'styled-components';

class Form extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			countryId: -1,
			population: ''
		};
	}

	onChangeCountry = (event) => {
		const { countries } = this.props;
		const id = Number(event.target.value);
		const country = this.getCountry(id);
		this.setState({ countryId: id, population: country.population });
	};

	onChangePopulation = (event) => {
		this.setState({ population: event.target.value });
	};

	onClickUpdate = (event) => {
		const { countryId, population } = this.state;

		let country = Object.assign({}, this.getCountry(countryId));
		country.population = Number(population);

		this.props.actions.setPopulation(country);
	};

	onClickDelete = (event) => {
		const { countryId } = this.state;
		this.props.actions.deleteCountry(countryId);

		this.setState({ population: 0 });
	};

	getCountry = (id) => {
		const { countries } = this.props;

		return countries.find((country) => {
			return id === country.id;
		});
	};

	render() {
		const { isLoading, countries } = this.props;

		if (isLoading) {
			return (
				<span>
					<i>Loading...</i>
				</span>
			);
		} else {
			return (
				<div>
					<Select name="country" id="country" value={this.state.country} onChange={this.onChangeCountry}>
						<option value="">Please select a country</option>
						{countries.map((country) => (
							<option key={country.id} value={country.id}>
								{country.name}
							</option>
						))}
					</Select>
					<Input
						id="population"
						type="number"
						pattern="[0-9]*"
						placeholder="Enter population"
						value={this.state.population}
						onChange={this.onChangePopulation}
					/>
					<Button label="Update" onClick={this.onClickUpdate} />
					<Button label="Delete" onClick={this.onClickDelete} />
				</div>
			);
		}
	}
}

const mapDispatchToProps = (dispatch) => {
	return { actions: bindActionCreators(actions, dispatch) };
};

const mapStateToProps = (state) => {
	let sortedCountries = [];
	if (!state.isLoading) {
		sortedCountries = [ ...state.countries ];
		sortedCountries.sort((a, b) => a.population - b.population);
	}

	return {
		countries: sortedCountries,
		isLoading: state.isLoading
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
