import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../shared/Button';
import {
  TableStyled,
  TableHeadStyled,
  TableDataStyled,
  TableRowStyled
} from './styled';

export default class CountryList extends Component {
  static propTypes = {
    countriesWithPop: PropTypes.array.isRequired,
    deleteHandler: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
  }

  renderList = () => {
    //TODO - would extract this to a reusable utility function in a bigger app
    const sortedCountries = this.props.countriesWithPop.sort(
      (a, b) => b.population - a.population
    );

    return sortedCountries.map(({ name, population }) => (
      <TableRowStyled key={name}>
        <TableDataStyled>{`${name}`}</TableDataStyled>
        <TableDataStyled>{`${population}`}</TableDataStyled>
        <TableDataStyled>
          <Button
            value={name}
            label={'Delete'}
            onClick={this.props.deleteHandler}
            color={'quaternary'}
          />
        </TableDataStyled>
      </TableRowStyled>
    ));
  };

  render() {
    return (
      this.props.countriesWithPop.length > 0 && (
        <TableStyled>
          <tbody>
            <tr>
              <TableHeadStyled>Country</TableHeadStyled>
              <TableHeadStyled>Population</TableHeadStyled>
            </tr>
            {this.renderList()}
          </tbody>
        </TableStyled>
      )
    );
  }
}
