import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import styled from "styled-components";
import actions from "../../actions";
import {Button, Select, Input, Table, TableHead, TableData} from "../ui";
import {style} from "../../configs/theme";

const FormWrapper = styled.form`
    width: 100%;
    max-width: ${style("width.mid")};
    margin: auto;
`;

const ErrorWrapper = styled.div`
    background: ${style("color.secondary")};
    border-radius: ${style("radius")};
    box-shadow: ${style("shadow.small")};
    color: ${style("color.secondaryAlt")};
    cursor: pointer;
    font-family: ${style("headerFontFamily")};
    margin: auto;
    max-width: ${style("width.min")};
    padding: ${style("paddingHalf")};
    text-align: center;
    width: 100%;
`;

export class CountryForm extends PureComponent {

    constructor(props) {

        super(props);

        this.addPopulation = this.addPopulation.bind(this);
        this.deletePopulation = this.deletePopulation.bind(this);

        this.country = React.createRef();
        this.population = React.createRef();
    }

    componentDidMount() {
        
        this.props.fetchCountries();
    }

    addPopulation(e) {

        // I prefer to use form submit event to support Enter key
        e.preventDefault();

        const population = this.population.current.value;
        this.population.current.value = "";

        // Simple value check
        if (population % 1 !== 0 || population < 0 || population === "") {
            return;
        }

        const country = this.country.current.options[this.country.current.selectedIndex].text;
        const code = this.country.current.value;

        this.props.addPopulation({country, code, population});
    }

    deletePopulation(code) {
        
        this.props.deletePopulation(code);
    }

    render() {

        return (
            <div>
                {
                    this.props.error ? (
                        <ErrorWrapper onClick={this.props.fetchCountries}>
                            Error: County Api Failed
                            <br/>
                            Click to retry.
                        </ErrorWrapper>
                    ) : null
                }
                {
                    !this.props.error && this.props.countries && this.props.countries.length
                        ? (
                            <FormWrapper onSubmit={this.addPopulation}>
                                <Select innerRef={this.country} options={this.props.countries} text="name" value="code" keyProp="code"/>
                                <Input type="number" innerRef={this.population} placeholder="Population"/>
                                <Button type="submit" label="Save"/>
                            </FormWrapper>
                            
                        ) : null
                }
                {
                    this.props.population && this.props.population.length 
                        ? (
                            <Table color="quaternary">
                                <thead>
                                    <tr>
                                        <TableHead>
                                            Country
                                        </TableHead>
                                        <TableHead>
                                            Population
                                        </TableHead>
                                        <TableHead>
                                            Action
                                        </TableHead>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        this.props.population.map((record) => (
                                            <tr key={record.code}>
                                                <TableData width="50%">{record.country}</TableData>
                                                <TableData>{record.population}</TableData>
                                                <TableData width="10%">
                                                    <Button color="quaternaryAlt" label="Delete" onClick={() => this.deletePopulation(record.code)}/>
                                                </TableData>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </Table>
                        ) : null
                }
            </div>
        );
    }
}

CountryForm.propTypes = {
    countries: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            code: PropTypes.string.isRequired
        })
    ),
    population: PropTypes.arrayOf(
        PropTypes.shape({
            country: PropTypes.string.isRequired,
            code: PropTypes.string.isRequired,
            population: PropTypes.string.isRequired
        })
    ),
    error: PropTypes.bool.isRequired,
    fetchCountries: PropTypes.func.isRequired,
    addPopulation: PropTypes.func.isRequired,
    deletePopulation: PropTypes.func.isRequired
};

const mapStateToProps = (reducer) => ({
    countries: reducer.countries,
    population: reducer.population,
    error: reducer.error
});

const mapDispatchToProps = {
    fetchCountries: actions.fetchCountries,
    addPopulation: actions.addPopulation,
    deletePopulation: actions.deletePopulation
};

export default connect(mapStateToProps, mapDispatchToProps)(CountryForm);
