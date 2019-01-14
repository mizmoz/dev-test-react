import React, {Component} from 'react';
import Item from './country-item/country-item';

import TweenMax from 'gsap/TweenMax';
var countryListElement
class CountryList extends Component{

  constructor(props) {
    super(props);
    this.state = {
      listOpened: false
    }
  }
  componentDidMount() {
    countryListElement = document.getElementsByClassName('drop')[0];
    if (this.props.drop) {
      TweenMax.set(countryListElement, {
        top: -countryListElement.offsetHeight
      });
    }
  }
  listClick() {
    if (this.state.listOpened) {
      this.setState({
        listOpened: false
      });
      TweenMax.to(countryListElement, 1, {
        top: -countryListElement.offsetHeight
      });
    } else {
      this.setState({
        listOpened: true
      });
      TweenMax.to(countryListElement, 1, {
        top: 0
      });
    }
    
  }
  render() {
    let listItems = <div></div>;
    listItems  = this.props.list.map((item, index) => {
      //** default is false. we check on their index */
      let selected = false;
      if (this.props.companySelected === index) {
        selected = true;
      }
      return (
        <Item
          selected={selected}
          onChange={this.props.onChange}
          key={index}
          index={index}
          item={item}>
        </Item>
      );
    });
    let styleCountry = 'country-list';
    if (this.props.drop) {
      styleCountry = 'country-list drop';
    }
    return (
      <div>
        {this.props.drop 
          ? 
          <button
            onClick={this.listClick.bind(this)}
            className='drop-button'>list of countries
          </button>
          : <div></div>
        }
        <div 
          className="box-country-list">
          <ul
            className={styleCountry}>
            {listItems}
          </ul>
        </div>
        </div>
    );
  }
}
export default CountryList;