import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Clients } from './components/Clients/Clients';
import './custom.css'

export default class App extends Component {
  static displayName = App.name;  
  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/clients' component={Clients} />
      </Layout>
    );
  }
}
