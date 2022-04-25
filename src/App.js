import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Cardplp from './components/Cardplp';
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
    </Switch>

    </Provider>
    </ApolloProvider>
    </BrowserRouter>
  )}
}

export default App;