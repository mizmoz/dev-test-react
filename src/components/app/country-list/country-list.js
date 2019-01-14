import React, {Component} from 'react';
import Item from './country-item/country-item';

import TweenMax from 'gsap/TweenMax';

let countryListElement;
let boxCountryListElement;
class CountryList extends Component{

  constructor(props) {
    super(props);
    this.state = {
      listOpened: false
    }
  }
  componentDidMount() {
    countryListElement = document.getElementsByClassName('drop')[0];
    boxCountryListElement = document.getElementsByClassName('box-drop')[0];
    console.log('boxCountryListElement ', boxCountryListElement);
    if (this.props.drop) {
      TweenMax.set(countryListElement, {
        top: -countryListElement.offsetHeight
      });
      TweenMax.set(boxCountryListElement, {
        height: 0
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
      TweenMax.to(boxCountryListElement, 1, {
        height: 0
      });
    } else {
      this.setState({
        listOpened: true
      });
      TweenMax.to(countryListElement, 1, {
        top: 0
      });
      TweenMax.to(boxCountryListElement, 1, {
        height: countryListElement.offsetHeight
      });
    }
    
  }
  render() {
    let listItems = <div></div>;
    listItems  = this.props.list.map((item, index) => {
      //** default is false. we check on their index */
      if (!this.props.drop) {
        if (item.value) {
          return (
            <Item
              onChange={this.props.onChange}
              key={index}
              index={index}
              item={item}>
            </Item>
          );
        }
      } else {
        return (
          <Item
            onChange={this.props.onChange}
            key={index}
            index={index}
            item={item}>
          </Item>
        );
      }
    });
    let styleBoxCountry = 'box-country-list';
    let styleCountry = 'country-list';
    if (this.props.drop) {
      styleCountry = 'country-list drop';
      styleBoxCountry = 'box-country-list box-drop';
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
          className={styleBoxCountry}>
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