import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Cardplp from './components/Cardplp';
import Cpdp from './components/Cpdp';
import CardClient from './components/CardClient';
// apollo
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
// redux
import { Provider } from 'react-redux';
import store from './redux/store';
// browser
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const client = new ApolloClient({
  uri: 'http://localhost:4000/'
});

class App extends React.Component {
  render() {
  return (
    <BrowserRouter>
    <ApolloProvider client={ client }>
    <Provider store={ store }>
    
    <Nav/>
    
    <Switch>
      <Route exact path="/" component={ Cardplp }/>
      <Route path="/cpdp/:id" component={ Cpdp }/>
      <Route path="/cardclient" component={ CardClient }/>
    </Switch>

    </Provider>
    </ApolloProvider>
    </BrowserRouter>
  )}
}

export default App;