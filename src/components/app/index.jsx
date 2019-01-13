
import React, {Component} from 'react';
import { Provider } from 'react-redux';
import Theme from '../theme';
import createStore from '../../store';
import Layout from '../layout';
import H1 from './H1';
import ApiCountry from './../../api/country';
import CountryList from './country-list/country-list';
import {
  fetchLoad,
  fetchComplete,
  fetchFail,
  fetchSomething
} from './../../store/actions/action-api-results';
const store = createStore();
class Index extends Component{
  constructor(props) {
    super(props);

    this.state = {
      dataFetched: null
    }
    store.dispatch(fetchLoad());
    ApiCountry()
    .then((d) => {
      store.dispatch(fetchComplete(d));
      this.setState({
        dataFetched: 1
      })
      // store.getState().map((d) => {
      //   console.log('d ', d);
        
      // })
    })
    .catch((e) => {
      store.dispatch(fetchFail(e));
      console.log('store getState', store.getState());
      this.setState({
        dataFetched: -1
      })
    });
  }
  
  

  render() {
    console.log('*** ', store.getState().apiResults.items);
    
    return (
      <Provider store={store}>
        <Theme>
          <Layout>
            <H1>
              {
                (store.getState().apiResults.items.length <= 0)
                ? (store.getState().apiResults.error === 'error: no data')
                  ? <div>ERROR</div>
                  : <div>FETCHING</div>
                : <CountryList></CountryList>
              }
            </H1>
          </Layout>
        </Theme>
      </Provider>
    )
  }
}
export default Index;
// // create the redux store
// const store = createStore();

// store.dispatch(fetchLoad());
// ApiCountry()
//   .then((d) => {
//     store.dispatch(fetchComplete(d));
    
//     // store.getState().map((d) => {
//     //   console.log('d ', d);
      
//     // })
//   })
//   .catch((e) => {
//     store.dispatch(fetchFail(e));
//     console.log('store getState', store.getState());
    
//   });

// export default () => (
  
// );

// // function addPopulation
