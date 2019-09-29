import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Editor extends Component {
  state = {
    code: '',
    name: '',
    population: 0,
  }

  static getDerivedStateFromProps(props, state) {
    //  country code has changed
    const { country } = props;
    if (country.code !== state.code) {
      //  we've changed country, update state
      //  make sure we have some population
      if (!country.population) {
        country.population = 0;
      }

      return {...country};
    }

    return state;
  }

  onInputChange = (name, value) => {
    this.setState({ [name]: value });
  }

  onSubmit = (e) => {
    e.preventDefault();

    //  TODO: for now we can just spread state, as we don't have non-country
    //  props keys in it
    this.props.onSubmit({...this.state});
  }

  onDelete = () => {
    console.log('onDelete');
    const { country, onDelete } = this.props;

    //  ask for confirmation using browser native window
    const isConfirmed = confirm(`Are you sure you want to delete ${country.name}`);

    if (isConfirmed) {
      this.props.onDelete(country.code);  
    }
  }

  render() {
    const { code, name, population } = this.state;
    
    return (
      <form onSubmit={this.onSubmit}>
          <input
            type="input"
            name="name"
            value={name}
            onChange={(e) => this.onInputChange('name', e.target.value)}
          />
          <input
            type="input"
            name="population"
            value={population}
            onChange={(e) => this.onInputChange('population', +e.target.value)}
          />
          <button type="submit">Update</button>
          <input
            type="button"
            value="Delete"
            onClick={this.onDelete}
          />
      </form>
    );
  }
}

Editor.propTypes = {
  code: PropTypes.string,
  name: PropTypes.string,
  population: PropTypes.number,
  onSubmit: PropTypes.func,
  onDelete: PropTypes.func,
};

Editor.defaultProps = {
  code: '',
  name: '',
  population: 0,
  onSubmit: () => {},
  onDelete: () => {},
};

export default Editor;
