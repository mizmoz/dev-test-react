import React from 'react';
import { mount } from 'enzyme';
import { PopulationForm } from './PopulationForm';

describe('PopulationForm', () => {

  let props;

  beforeEach(() => {
    props = {
      countryList: [
        {name: 'england', code: 'gb'},
        {name: 'france', code: 'fr'},
      ],
      addPopulation: jest.fn()
    }
  })

  it('should call props.AddPopulation with country and population onSubmit', () => {
    const wrapper = mount(<PopulationForm {...props}/>);
    const handleSubmitSpy = jest.spyOn(wrapper.instance(), 'handleSubmit');
    wrapper.find('select').simulate('change', {target : { value : 'france', getAttribute:() => 'country'}});
    wrapper.find('input[type="number"]').simulate('change', {target : { value : 1234, getAttribute:() => 'population'}});
    expect(wrapper.state().country).toEqual('france');
    expect(wrapper.state().population).toEqual(1234);
    expect(wrapper.state().error).toEqual('');

    wrapper.find('input[type="submit"]').simulate('submit');
    expect(handleSubmitSpy).toHaveBeenCalled();
    expect(props.addPopulation).toHaveBeenCalledWith({country: 'france', population: 1234});
  });

  it('should not call props.AddPopulation if the country or population is missing', () => {
    const wrapper = mount(<PopulationForm {...props}/>);
    wrapper.find('select').simulate('change', {target : { value : 'France', getAttribute:() => 'country'}});
    wrapper.find('input[type="submit"]').simulate('submit');
    expect(props.addPopulation).not.toHaveBeenCalled();
  });

  it('should use the first item in the country list as the default country', () => {
    const wrapper = mount(<PopulationForm {...props}/>);
    wrapper.find('input[type="number"]').simulate('change', {target : { value : 1234, getAttribute:() => 'population'}});
    wrapper.find('input[type="submit"]').simulate('submit');
    expect(props.addPopulation).toHaveBeenCalledWith({country: props.countryList[0].name, population: 1234});
  });

  it('should display an error message if the country or population is missing', () => {
    const wrapper = mount(<PopulationForm {...props}/>);
    wrapper.find('select').simulate('change', {target : { value : 'France', getAttribute:() => 'country'}});
    wrapper.find('input[type="submit"]').simulate('submit');
    expect(wrapper.state().error).toEqual('please complete form');
    expect(wrapper.find('Error span').text('please complete form'));
  });




})
