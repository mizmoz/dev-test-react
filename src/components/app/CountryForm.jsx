
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { loadCountries, upsertCountry } from '../../store/actions'

import Button from './Button'
import { ErrorMessage, ErrorWrapper } from './Error';
import { Form, FormControl, FormWrapper, Label, Select, Input } from './Form';

class CountryForm extends PureComponent {
    state = {
        form: {
            country: '',
            population: ''
        },
        countries: []
    }
    
    constructor(props) {
        super(props);
        const interval = setInterval(() => {
            if (this.state.countries.length <= 0) {
                this.handleLoadCountries();
            } else {
                clearInterval(interval);
            }
        }, 1000)
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.countries !== prevState.countries) {
            this.setState({
                form: {
                    ...this.state.form,
                    country: this.state.countries[0].code,
                }
            });
        }

        if (this.props.countryPopulations !== prevProps.countryPopulations) {
            this.setState({ form: {
                country: this.state.countries[0].code,
                population: ''
            } });
        }

        if (this.props.currentlyEditing && (this.props.currentlyEditing !== prevProps.currentlyEditing)) {
            this.setState({ form: {
                ...this.state.form,
                country: this.props.currentlyEditing 
            } });
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        let val = value;

        this.setState({ form: {
            ...this.state.form,
            [name]: val
        }})
    }

    handleLoadCountries = () => {
        this.props.loadCountries().then(countries => countries ? this.setState({ countries }) : [] );
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.saveForm();
    }

    saveForm = () => {
        const { form: data } = this.state;
        const countryObj = this.state.countries.filter(country => country.code === data.country)[0];
        const newData = {
            ...data,
            country: countryObj
        };
        this.props.upsertCountry(newData);
    }

    render() {
        const { countries } = this.state;
        const { error, isLoading } = this.props;
        
        return (
            <>
                {!error ? (
                    <FormWrapper>
                        <Form onSubmit={this.handleSubmit}>
                            <FormControl>
                                <Label htmlFor="country">Country</Label>
                                <Select name="country" onChange={this.handleChange} value={this.state.form.country}>
                                    {countries.map(country => (
                                        <option value={country.code} key={country.code}>{country.name}</option>
                                    ))}
                                </Select>
                            </FormControl>
                            <FormControl>
                                <Label htmlFor="population">Population</Label>
                                <Input name="population" type="number" onChange={this.handleChange} value={this.state.form.population} min="0" />
                            </FormControl>
                        </Form>
                        <Button label="Submit" type="submit" onClick={this.saveForm} disabled={!this.state.form.population}/>
                    </FormWrapper>
                ) : (
                    <ErrorWrapper>
                        <ErrorMessage>{error.message}</ErrorMessage>
                        <Button color="quaternary" label={'Loading...'} onClick={this.handleLoadCountries}/>
                    </ErrorWrapper>
                )}
            </>
        );
    };
};

CountryForm.propTypes = {
    countryPopulations: PropTypes.array.isRequired,
    currentlyEditing: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.object,
    loadCountries: PropTypes.func.isRequired,
    upsertCountry: PropTypes.func.isRequired,
};

export default connect(
    (state) => ({
        error: state.error,
        isLoading: state.isLoading,
        countryPopulations: state.countryPopulations,
        currentlyEditing: state.currentlyEditing
    }),
    {
        loadCountries,
        upsertCountry
    }
)(CountryForm);
