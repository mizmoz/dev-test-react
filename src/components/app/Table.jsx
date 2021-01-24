import React, { Component } from "react";
import { Button, Table } from "react-bootstrap";
import shortid from "shortid";
import { connect } from "react-redux";

class CsTable extends Component {
  constructor(props) {
    super(props);
  }

  selectEvent = (e) => {
    this.props.selectEmitted(e.target.id);
  };

  cancelEvent = (e) => {
    this.props.cancelEmitted(e.target.id);
  };

  deleteEvent = (e) => {
    this.props.deleteEmitted(e.target.id);
  };

  tableBody() {
    const { data, selected } = this.props.data;
    return data && data.length
      ? data.map((d) => (
          <tr key={shortid.generate()}>
            <td>
              {!selected ? (
                <Button variant="primary" id={d.id} onClick={this.selectEvent}>
                  Select
                </Button>
              ) : null}
              {selected && selected.id === d.id ? (
                <Button
                  variant="secondary"
                  id={d.id}
                  onClick={this.cancelEvent}
                >
                  Cancel
                </Button>
              ) : null}
              {!selected ? (
                <Button variant="danger" id={d.id} onClick={this.deleteEvent}>
                  Delete
                </Button>
              ) : null}
            </td>
            <td key={shortid.generate()}>{d.country}</td>
            <td key={shortid.generate()}>{d.population}</td>
          </tr>
        ))
      : null;
  }

  tableHeader() {
    const { headerData } = this.props.data;
    return headerData.length
      ? headerData.map((d) => <th key={shortid.generate()}>{d}</th>)
      : null;
  }

  renderTable() {
    return (
      <React.Fragment>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>{this.tableHeader()}</tr>
          </thead>
          <tbody>{this.tableBody()}</tbody>
        </Table>
      </React.Fragment>
    );
  }

  render() {
    return this.renderTable();
  }
}

export default connect(null, {})(CsTable);
