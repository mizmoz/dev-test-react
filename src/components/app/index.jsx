
import React, {Component} from 'react';
import { Provider } from 'react-redux';
import Theme from '../theme';
import createStore from '../../store';
import Layout from '../layout';
import H1 from './H1';
import ApiCountry from '../../api/country';
import CountryList from './country-list/country-list';
import {
  fetchLoad,
  fetchComplete,
  fetchFail,
  fetchSomething,
  editPopulation
} from '../../store/actions/action-api-results';
const store = createStore();
class Index extends Component{
  constructor(props) {
    super(props);

    this.countryEdited.bind(this);

    this.state = {
      dataFetched: null
    }

    store.subscribe(() => {
      console.log('YEAAa???');
    })
    store.dispatch(fetchLoad());
    ApiCountry()
    .then((d) => {
      var dictFetched = {}
      d.map((d, i) => {
        dictFetched[d.name] = i;
      })
      store.dispatch(fetchComplete(d));
      this.setState({
        dataFetched: dictFetched
      })
    })
    .catch((e) => {
      store.dispatch(fetchFail(e));
      this.setState({
        dataFetched: -1
      })
    });
  }

  countryEdited(country, value) {
    console.log(':: this ', this);
    
    console.log(this.state.dataFetched[country], value);
    console.log(':: --> Country ', country);
    console.log(':: --> value ', value);
    
    store.dispatch(editPopulation(this.state.dataFetched[country], value));
  }
  render() {
    console.log(':::: RENDER ::::')
    return (
      <Provider store={store}>
        <Theme>
          <Layout>
            <H1>
              COUNTRY by POPULATION
            </H1>
            {
                (store.getState().apiResults.items.length <= 0)
                ? (store.getState().apiResults.error === 'error: no data')
                  ? <div>ERROR</div>
                  : <div>FETCHING</div>
                : 
                  <div className="country-list-container">
                    <CountryList
                      drop={false}
                      onChange={(d) => {                        
                        this.countryEdited(d.currentTarget.getAttribute('data-id'), d.currentTarget.value)
                      }}
                      list={store.getState().apiResults.items}>
                    </CountryList>
                    <CountryList
                      drop={true}
                      onChange={(d) => {                        
                        this.countryEdited(d.currentTarget.getAttribute('data-id'), d.currentTarget.value)
                      }}
                      list={store.getState().apiResults.items}>
                    </CountryList>
                  </div>
              }
          </Layout>
        </Theme>
      </Provider>
    )
  }
}
export default Index;