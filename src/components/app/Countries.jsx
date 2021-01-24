import React, { Component } from "react";
import getCountry from "../../api/country";
import { Button, Form, Spinner, Jumbotron } from "react-bootstrap";
import shortid from "shortid";
import promiseRetry from "promise-retry";
import CsTable from "./Table";
import styled from "styled-components";
import {
  addCountry,
  selectCountry,
  updateCountry,
  deleteCountry,
} from "../../store/actions";
import { connect } from "react-redux";

class Countries extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headerData: ["", "Country", "Population"],
      population: "",
      countryDdData: [],
      country: "AFGHANISTAN",
      sort: "ascending",
      data: [],
      selected: null,
      isLoading: false,
    };
  }

  componentDidMount() {
    promiseRetry((retry, number) => {
      if (number !== 1) {
        this.setState({
          isLoading: true,
        });
      }

      return getCountry()
        .then((data) => {
          this.setState({
            countryDdData: data,
            isLoading: false,
          });
        })
        .catch(retry);
    });
  }

  save = (event) => {
    event.preventDefault();
    const { population, country, data } = this.state;
    const newData = {
      population: population,
      country: country,
      id: data.length + 1,
    };

    this.props.addCountry(newData);
  };

  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  delete = (e) => {
    this.props.deleteCountry(parseInt(e));
  };

  select = (e) => {
    this.props.selectCountry(parseInt(e));
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.countries.selected !== this.state.selected) {
      const { population, country } = nextProps.countries.selected;
      const newState = {
        ...this.state,
        population,
        country,
        selected: nextProps.countries.selected,
      };
      this.setState(newState);
    }

    if (nextProps.countries.data !== this.state.data) {
      const { data } = nextProps.countries;
      const newState = {
        ...this.state,
        data,
        selected: null,
      };
      this.setState(newState);
    }
  }

  update = () => {
    const { population, country, selected } = this.state;
    this.props.updateCountry({
      data: { population, country },
      id: selected.id,
    });
  };

  cancel = () => {
    this.setState({
      selected: null,
      country: "",
      population: "",
    });
  };

  sortByPopulation = () => {
    const { data, sort } = this.state;
    let sortData, sortVal;

    if (sort === "ascending") {
      sortData = data.sort((a, b) => {
        return a.population - b.population;
      });
      sortVal = "descending";
    } else {
      sortData = data.sort((a, b) => {
        return b.population - a.population;
      });
      sortVal = "ascending";
    }

    this.setState({
      data: sortData,
      sort: sortVal,
    });
  };

  render() {
    const { countryDdData, isLoading, sort } = this.state;

    const ButtonGroup = styled.div`
      padding: 10px 15px;
    `;
    const Margin = styled.span`
      margin: 10px 15px;
    `;

    return (
      <React.Fragment>
        <Jumbotron>
          <div className="container">
            <form onSubmit={this.save}>
              <div className="row">
                <div className="col-md-3">
                  <Form.Group>
                    <Form.Label>Select Country</Form.Label>
                    <Form.Control
                      as="select"
                      value={this.state.country}
                      name="country"
                      onChange={this.changeHandler}
                    >
                      {countryDdData.length
                        ? countryDdData.map((c) => (
                            <option key={shortid.generate()}>{c.name}</option>
                          ))
                        : null}
                    </Form.Control>
                    {isLoading ? (
                      <Form.Text className="text-muted">
                        Fetching Data...
                        <Spinner animation="border" role="status" size="sm">
                          <span className="sr-only">Loading...</span>
                        </Spinner>
                      </Form.Text>
                    ) : null}
                  </Form.Group>
                </div>
                <div className="col-md-3">
                  <Form.Group>
                    <Form.Label>Population</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Enter Population"
                      name="population"
                      onChange={this.changeHandler}
                      value={this.state.population}
                    />
                  </Form.Group>
                </div>
                <div className="col-md-6">
                  {!this.state.selected ? (
                    <ButtonGroup>
                      <Button variant="primary" type="submit">
                        Enter Data
                      </Button>
                      <Button variant="primary" onClick={this.sortByPopulation}>
                        Sort Population by {sort}
                      </Button>
                    </ButtonGroup>
                  ) : null}
                  {this.state.selected ? (
                    <ButtonGroup>
                      <Button variant="primary" onClick={this.update}>
                        Update
                      </Button>
                    </ButtonGroup>
                  ) : null}
                </div>
              </div>
            </form>
            <Margin>
              <h1>List of Countries</h1>
              <Margin>
                <CsTable
                  striped
                  bordered
                  hover
                  data={this.state}
                  selectEmitted={this.select}
                  cancelEmitted={this.cancel}
                  deleteEmitted={this.delete}
                ></CsTable>
              </Margin>
            </Margin>
          </div>
        </Jumbotron>
      </React.Fragment>
    );
  }
}

export default connect(
  (state) => ({
    countries: state.countries,
  }),
  {
    addCountry,
    selectCountry,
    updateCountry,
    deleteCountry,
  }
)(Countries);
