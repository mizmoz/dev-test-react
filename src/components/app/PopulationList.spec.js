import React from 'react';
import { shallow } from 'enzyme';
import { PopulationList } from './PopulationList';

describe('PopulationList',  () => {

  let props;

  beforeAll(() => {
    props = {
      populationList: [
        { country: 'France', population: '13000' }
      ],
      deletePopulation: jest.fn()
    };
  })

  it('should display a country and population for each item in the populationList', () => {
    const wrapper = shallow(<PopulationList {...props}/>);

    expect(wrapper.find('li').at(0).text()).toMatch(/France/);
    expect(wrapper.find('li').at(0).text()).toMatch(/13000/);
  });

  it('should call deletePopulation when delete is clicked', () => {
    const wrapper = shallow(<PopulationList {...props}/>)
    wrapper.find('DeleteButton').simulate('click');
    expect(props.deletePopulation).toHaveBeenCalled();
    expect(props.deletePopulation).toHaveBeenCalledWith('France');
  });

  it('should display the country and population in order of population', () => {
     props = {
      populationList: [
        { country: 'France', population: '10' },
        { country: 'England', population: '40' },
        { country: 'Germany', population: '20' },
        { country: 'Sweden', population: '30' },
      ],
      deletePopulation: jest.fn()
    }
    const wrapper = shallow(<PopulationList {...props} />);
    expect(wrapper.find('li').at(0).text()).toMatch(/France/);
    expect(wrapper.find('li').at(1).text()).toMatch(/Germany/);
    expect(wrapper.find('li').at(2).text()).toMatch(/Sweden/);
    expect(wrapper.find('li').at(3).text()).toMatch(/England/);
  })

});

