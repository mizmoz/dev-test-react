import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components/macro';

import { Button } from 'components/button';
import { Error } from 'components/error';
import { FieldGroup, Form, FormRow, Input } from 'components/form';
import { Loading } from 'components/loading';
import { Table, TD, TH, TR } from 'components/table';
import { CountryContext } from 'providers/country';
import { SPACING, getSpacing } from 'styles/dimensions';

// These could be broken out into separate components but in this use case
// it's accpetable and early abstraction can cause more issues down the line

const Wrapper = styled.div`
	display: grid;
	grid-template-rows: min-content 1fr;
	grid-gap: ${getSpacing(SPACING.large)};
	align-items: baseline;
	min-height: 100%;
`;

export function Home() {
	const { state, sortByPopulation, updatePopulation } = useContext(
		CountryContext
	);
	const [countries, setCountries] = useState(state.countries);
	const [formData, setFormData] = useState({
		country: '0',
		population: '',
	});

	const handleChange = e => {
		const id = e.target.id;
		const value = e.target.value;

		if (id === 'country') {
			if (value === '0') {
				// rset the form data
				setFormData({
					country: value,
					population: '',
				});
			} else {
				// grab stored data
				setFormData({
					country: value,
					population: countries[value].population,
				});
			}

			return;
		}

		// update the population for a selected country
		setFormData({
			...formData,
			[id]: value,
		});
	};

	const handleSubmit = e => {
		e.preventDefault();

		updatePopulation(formData);
	};

	const handleClear = (country, population) => {
		updatePopulation({ country, population });
	};

	useEffect(() => {
		setCountries(state.countries);
	}, [state.countries]);

	if (state.isFetching) {
		return <Loading />;
	}

	if (state.hasError) {
		return <Error />;
	}

	return (
		<Wrapper>
			<Form onSubmit={handleSubmit}>
				<FieldGroup>
					<FormRow>
						<label htmlFor="country">Country:</label>
						<select
							id="country"
							name="country"
							value={formData.country}
							onChange={handleChange}
						>
							<option value="0">Select a country</option>
							{Object.keys(countries).map(country => (
								<option key={country} value={country}>
									{countries[country].name}
								</option>
							))}
						</select>
					</FormRow>
					<FormRow>
						<label htmlFor="population">Population</label>
						<Input
							disabled={formData.country === '0'}
							id="population"
							name="population"
							type="number"
							value={formData.population}
							onChange={handleChange}
						/>
					</FormRow>
					<FormRow>
						<Button
							disabled={formData.country === '0'}
							level="primary"
							type="submit"
						>
							Update
						</Button>
					</FormRow>
				</FieldGroup>
			</Form>

			<Table>
				<thead>
					<TR>
						<TH>Name</TH>
						<TH>
							Population{' '}
							<Button
								level="secondary"
								type="button"
								onClick={sortByPopulation}
							>
								Sort
							</Button>
						</TH>
					</TR>
				</thead>

				<tbody>
					{Object.keys(countries).map(country => (
						<TR key={country}>
							<TD>{countries[country].name}</TD>
							<TD>
								{countries[country].population}
								{countries[country].population && (
									<Button
										level="secondary"
										type="button"
										onClick={() => {
											handleClear(country, '');
										}}
									>
										Delete
									</Button>
								)}
							</TD>
						</TR>
					))}
				</tbody>
			</Table>
		</Wrapper>
	);
}
