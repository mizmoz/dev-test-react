import React, { Component } from 'react';
import styled from 'styled-components';
import { fetchCountries } from '~/api/countries';
import { Loader } from '~/components/Loader';
import { Select, SelectItem } from '~/components/Select';
import { Input } from '~/components/Input';
import { Button, PrimaryButton, DestructiveButton } from '~/components/buttons';
import {
	Table,
	TableHead,
	TableBody,
	TableRow,
	TableHeaderCell,
	TableCell,
} from '~/components/Table';

// I would abstract this to utils *when* it is reused elsewhere
const findIndexByProp = (prop, arr) => {
	return value => arr.findIndex(item => item[prop] === value);
};

// I have purposefully avoided using Redux (or any other kind of store for
// state management) as this is too small an app and feel that would be
// overengineering. I only introduce abstractions when they're necessary.
export class App extends Component {
	populationInputRef = React.createRef();

	state = {
		isLoading: true,
		hasError: false,
		// I do not mutate countries data with population state to keep back-end data and view data
		// separate. This data might be maintained in a separate store in a larger application
		// while populations could remain as local state till saved.
		countries: undefined,
		activeCountry: undefined,
		populationsById: {},
	};

	componentDidMount() {
		this.fetchCountries();
	}

	componentWillUnmount() {
		// I would usually use a cancellable fetch/promise for retrieving data
		// so that I could cancel the fetch here.
	}

	componentDidUpdate(prevProps, prevState) {
		const { activeCountry } = this.state;
		const hasActiveCountryChanged = activeCountry !== prevState.activeCountry;

		if (hasActiveCountryChanged) {
			const input = this.populationInputRef.current;
			input.select();
		}
	}

	fetchCountries() {
		fetchCountries()
			.then(countries => this.setState({ countries }))
			.catch(error => this.setState({ hasError: true }))
			.finally(() => this.setState({ isLoading: false }));
	}

	sortCountriesByPopulation = (countries = []) => {
		const { populationsById } = this.state;
		const populations = Object.keys(populationsById).map(countryCode => ({
			value: populationsById[countryCode],
			id: countryCode,
		}));

		if (populations.length) {
			const sortedPopulations = populations.sort((a, b) => a.value - b.value);
			const findPopulationIndexById = findIndexByProp('id', sortedPopulations);

			return [...countries].sort((countryA, countryB) => {
				const aPopulationIndex = findPopulationIndexById(countryA.code);
				const bPopulationIndex = findPopulationIndexById(countryB.code);
				return bPopulationIndex - aPopulationIndex;
			});
		}

		return countries;
	};

	handleCountryChange = event => {
		const activeCountry = event.target.value;
		this.setState({ activeCountry });
	};

	handleRowClick = countryCode => {
		this.setState({ activeCountry: countryCode });
	};

	handleRemovePopulationClick = (event, countryCode) => {
		event.stopPropagation();

		this.setState(state => ({
			populationsById: {
				...state.populationsById,
				[countryCode]: undefined,
			},
		}));
	};

	handlePopulationChange = event => {
		const value = Number(event.target.value);

		this.setState(state => ({
			populationsById: {
				...state.populationsById,
				[state.activeCountry]: value || undefined,
			},
		}));
	};

	handleFormSubmit = event => {
		event.preventDefault();
		// POST population?
	};

	handleTryAgainClick = () => {
		this.setState({ isLoading: true, hasError: false });
		this.fetchCountries();
	};

	render() {
		const { isLoading, hasError, countries, activeCountry, populationsById } = this.state;
		const activePopulation = populationsById[activeCountry];
		// Sorting every render as I only worry about performance when performance
		// becomes an issue in order to follow YAGNI and KISS principles
		const sortedCountries = this.sortCountriesByPopulation(countries);

		// Apart from the usual primitives, I tend to only create shared components when
		// view/logic is reused or requires more isolated state, so some of the presentation
		// components in this view are defined below this component definition (YAGNI & KISS).
		return (
			<Container>
				{isLoading ? (
					<Loader>Loading&hellip;</Loader>
				) : hasError ? (
					<ErrorMessage>
						There was a problem requesting countries
						<DestructiveButton type="button" onClick={this.handleTryAgainClick}>
							Try again
						</DestructiveButton>
					</ErrorMessage>
				) : (
					<>
						<Form onSubmit={this.handleFormSubmit}>
							<fieldset>
								<Legend>Update country population</Legend>
								<Select onChange={this.handleCountryChange} value={activeCountry}>
									<SelectItem>Select a country&hellip;</SelectItem>
									{countries.map(country => (
										<SelectItem value={country.code} key={country.code}>
											{country.name}
										</SelectItem>
									))}
								</Select>
								{activeCountry && (
									<PopulationLabel>
										Population
										<PopulationInput
											type="number"
											value={activePopulation || ''}
											onChange={this.handlePopulationChange}
											ref={this.populationInputRef}
											autoFocus
										/>
									</PopulationLabel>
								)}
							</fieldset>
						</Form>
						<Table>
							<TableHead>
								<TableRow>
									<TableHeaderCell>Country</TableHeaderCell>
									<TableHeaderCell isRightAlign>Population</TableHeaderCell>
								</TableRow>
							</TableHead>
							<TableBody>
								{sortedCountries.map(country => {
									const population = populationsById[country.code];

									return (
										<TableRow key={country.code} onClick={() => this.handleRowClick(country.code)}>
											<TableCell>{country.name}</TableCell>
											<TableCell isRightAlign>
												{population}
												{population && (
													<PrimaryButton
														type="button"
														onClick={event => this.handleRemovePopulationClick(event, country.code)}
													>
														Clear
													</PrimaryButton>
												)}
											</TableCell>
										</TableRow>
									);
								})}
							</TableBody>
						</Table>
					</>
				)}
			</Container>
		);
	}
}

// I would usually use ThemeProvider from Styled Components for things
// like colors, spacing, border-radius etc. in a larger application
// with dynamic theming. Otherwise, some imported static JSON would
// suffice to maintain consistency in the codebase.
const Container = styled.div`
	width: 50vw;
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	border: 1px solid #ddd;
	border-width: 1px 1px 0;

	${Button} {
		margin-left: 15px;
	}
`;

const ErrorMessage = styled.div`
	background-color: #e8a4a4;
	padding: 10px;
	padding-left: 20px;
	border: 1px solid #c00;
	color: #c00;
	display: flex;
	align-items: center;
	border-radius: 3px;
	margin: auto;
`;

const Form = styled.form`
	flex: 0 0 auto;
	background: #eee;
	border-bottom: 1px solid #ddd;
	padding: 20px 30px;
`;

const Legend = styled.legend`
	font-size: 20px;
	margin-bottom: 15px;
`;

const PopulationLabel = styled.label`
	display: inline-flex;
	align-items: center;
	margin-left: 20px;
`;

const PopulationInput = styled(Input)`
	width: 80px;
	margin-left: 10px;
`;
