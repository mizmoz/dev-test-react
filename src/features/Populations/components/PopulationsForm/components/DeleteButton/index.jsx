import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/app/Button';

class DeleteButton extends React.Component {
  handleDelete = () => {
    const { countryCode, onDelete } = this.props;
    onDelete(countryCode);
  }

  render = () => (
    <Button label="Delete" onClick={this.handleDelete} />
  )
}

DeleteButton.propTypes = {
  countryCode: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
