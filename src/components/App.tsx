import React from 'react';
import './App.css';
import {Provider} from 'react-redux'
import store from '../redux/store'
import Form from '../components/Form'



const App = ()=>{
  return (
    <Provider store={store}>
    <div className="App">
    <Form />
    </div>
    </Provider>
  )
}

export default App;
