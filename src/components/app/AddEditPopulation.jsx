import React from 'react';
import { connect } from 'react-redux';
import Button from './Button';

export class AddEditPopulation extends React.Component {
  state = {
    currPopulation: 0
  };

  onPopulationChange = event => {
    const newPopulation = event.target.value;
    this.setState({ currPopulation: newPopulation });
  };

  onPopulationSave = () => {
    const { onSave, countryCode, currentCountryName } = this.props;
    onSave(countryCode, currentCountryName, this.state.currPopulation);
  };

  onPopulationDelete = () => {
    const { onDelete, countryCode } = this.props;
    onDelete(countryCode);
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.population !== this.props.population) {
      this.setState({ currPopulation: nextProps.population });
    }
  }
  render() {
    return (
      <div>
        <div>Add / update selected country's population here:</div>
        <div>
          <input
            type="text"
            value={this.state.currPopulation}
            onChange={this.onPopulationChange}
          />
          <Button type="button" onClick={this.onPopulationSave} label="Save" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  };
};

const AddEditPopulationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddEditPopulation);

export default AddEditPopulationContainer;
