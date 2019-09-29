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

      return { ...country };
    }

    return state;
  }

  onInputChange = (name, value) => {
    this.setState({ [name]: value });
  }

  onSubmit = (e) => {
    const { onSubmit } = this.props;
    e.preventDefault();

    //  TODO: for now we can just spread state, as we don't have non-country
    //  props keys in it
    onSubmit({ ...this.state });
  }

  onDelete = () => {
    const { country, onDelete } = this.props;

    //  ask for confirmation using browser native window
    const isConfirmed = window.confirm(`Are you sure you want to delete ${country.name}`);

    if (isConfirmed) {
      onDelete(country.code);
    }
  }

  render() {
    const { name, population } = this.state;

    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="input"
          name="name"
          value={name}
          onChange={e => this.onInputChange('name', e.target.value)}
        />
        <input
          type="input"
          name="population"
          value={population}
          onChange={e => this.onInputChange('population', +e.target.value)}
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
  country: PropTypes.shape({
    code: PropTypes.string,
    name: PropTypes.string,
    population: PropTypes.number,
  }),
  onSubmit: PropTypes.func,
  onDelete: PropTypes.func,
};

Editor.defaultProps = {
  country: null,
  onSubmit: () => {},
  onDelete: () => {},
};

export default Editor;
