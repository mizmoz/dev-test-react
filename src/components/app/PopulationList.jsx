import React from 'react';
import { connect } from 'react-redux';
import { deletePopulation } from '../../store/actions';
import Button from './Button';
import styled from 'styled-components';
import { style } from '../../configs/theme';

const List = styled.ul`
  list-style-type: none;
`;

const ListItem = styled.li`
  margin: 15px;
`;

const StyledRadio = styled(Button)`
  border-radius: ${style('radiusLarge')};
`;

export class PopulationList extends React.Component {
  state = { currSortOrder: '' };

  onDeletePopulation = currCountryCode => {
    const { dispatch, deletePopulation } = this.props;
    dispatch(deletePopulation(currCountryCode));
  };

  orderByAscending = () => {
    this.setState({ currSortOrder: 'ASC' });
  };
  orderByDescending = () => {
    this.setState({ currSortOrder: 'DESC' });
  };
  generatePopulationList = countryPopulationMap => {
    let populationElements = [];
    const { currSortOrder } = this.state;
    let sortedMap = countryPopulationMap;
    if (currSortOrder === 'DESC') {
      sortedMap = new Map(
        [...countryPopulationMap.entries()].sort(
          (a, b) => b[1].population - a[1].population
        )
      );
    }
    if (currSortOrder === 'ASC') {
      sortedMap = new Map(
        [...countryPopulationMap.entries()].sort(
          (a, b) => a[1].population - b[1].population
        )
      );
    }

    sortedMap.forEach(element => {
      populationElements.push(
        <ListItem key={element.name}>
          {element.name} : {element.population}
          <Button
            type="button"
            onClick={e => {
              this.onDeletePopulation(element.code);
            }}
            label="Delete"
          />
        </ListItem>
      );
    });
    return populationElements;
  };

  render() {
    const { currSortOrder } = this.state;
    return (
      <div>
        <div>
          List of populated countries :: order by ::{' '}
          <StyledRadio
            label="asc"
            onClick={this.orderByAscending}
            disabled={currSortOrder === 'ASC'}
          />
          <StyledRadio
            label="desc"
            onClick={this.orderByDescending}
            disabled={currSortOrder === 'DESC'}
          />
        </div>
        <List>
          {this.generatePopulationList(this.props.countryPopulationMap)}
        </List>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    countries: state.countries,
    countryPopulationKeys: state.countryPopulationMap.keys(),
    countryPopulationMap: state.countryPopulationMap
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch,
    deletePopulation
  };
};

const PopulationListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PopulationList);

export default PopulationListContainer;
