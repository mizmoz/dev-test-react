
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { removeCountry, editCountry } from '../../store/actions'

import { ButtonAction, Table, TableWrapper } from './Table';

class CountryList extends PureComponent {
    handleDelete = (code) => {
        this.props.removeCountry(code);
    }

    handleUpdate = (code) => {
        this.props.editCountry(code);
    }

    render() {
        const { countryPopulations } = this.props;
        return (
            <TableWrapper>
                <Table>
                    <thead>
                        <tr>
                            <th>Code</th>
                            <th>Country</th>
                            <th>Population</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {countryPopulations.length > 0 ? (
                            countryPopulations.sort((a, b) => a.population - b.population).map((countryPopulation, index) => (
                                <tr key={index}>
                                    <td>{countryPopulation.country.code.toUpperCase()}</td>
                                    <td>{countryPopulation.country.name}</td>
                                    <td>{Number(countryPopulation.population).toLocaleString()}</td>
                                    <td>
                                        <ButtonAction label="edit" color="primary" onClick={() => this.handleUpdate(countryPopulation.country.code)} />{' '}
                                        <ButtonAction label="delete" color="quaternary" onClick={() => this.handleDelete(countryPopulation.country.code)} />
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4}>No Entries Found...</td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </TableWrapper>
        );
    };
};

CountryList.propTypes = {
    countryPopulations: PropTypes.array.isRequired,
    removeCountry: PropTypes.func.isRequired,
    editCountry: PropTypes.func.isRequired,
};
  
export default connect(
    (state) => ({
        countryPopulations: state.countryPopulations,
    }),
    {
        removeCountry,
        editCountry
    }
)(CountryList);
