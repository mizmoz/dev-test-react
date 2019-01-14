
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
  editPopulation
} from '../../store/actions/action-api-results';
const store = createStore();
class Index extends Component{
  constructor(props) {
    super(props);
    //** bind function  */
    this.countryEdited.bind(this);

    //** set initial state */
    this.state = {
      dataFetched: null
    }

    //** start fetch. pass to store the fecthig state */
    store.dispatch(fetchLoad());
    ApiCountry()
    .then((d) => {
      //** all donw. let's store the label in a dictionary, and tell store we are done */
      var dictFetched = {}
      d.map((d, i) => {
        dictFetched[d.name] = i;
      })
      store.dispatch(fetchComplete(d));
      this.setState({
        dataFetched: dictFetched
      })
    })
    //** in case something goes wrong */
    .catch((e) => {
      store.dispatch(fetchFail(e));
      this.setState({
        dataFetched: -1
      })
    });
  }

  //** re-update the component when store is updated */
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });
  }
  //** everytime a population entry is changed */
  countryEdited(country, value) {
    store.dispatch(editPopulation(this.state.dataFetched[country], value));
  }
  render() {
    //** re-order items based on population */
    const itemsOrdered = [...store.getState().apiResults.items]
    itemsOrdered.sort((a,b) => {
        let av = Number(a.value)
        let bv = Number(b.value)
        return (av - bv) ;
      });
    return (
      <Provider store={store}>
        <Theme>
          <Layout>
            <H1>
              COUNTRY by POPULATION
            </H1>
            {
              //** verify if error in api, or we have data */
                (store.getState().apiResults.items.length <= 0)
                ? (store.getState().apiResults.error === 'error: no data')
                  ? <div>ERROR</div>
                  : <div>FETCHING</div>
                : 
                  <div className="country-list-container">
                  {
                    //** left results. empty at the beginning
                  }
                    <CountryList
                      drop={false}
                      onChange={(d) => {                        
                        this.countryEdited(d.currentTarget.getAttribute('data-id'), d.currentTarget.value)
                      }}
                      list={itemsOrdered}>
                    </CountryList>
                  {
                    //** right results. press the button to display the list
                  }
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