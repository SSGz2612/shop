import React from 'react';
import './App.css';
// apollo
import ApolloClient from 'apollo-boost';
import { ApolloProvider, Query } from 'react-apollo';
import gql from 'graphql-tag';

const client = new ApolloClient({
  uri: 'http://localhost:4000/'
});

class App extends React.Component {
  render() {
  return (
    <ApolloProvider client={ client }>
    <Query query={ gql`{
      category {
      products {
        id
        name
        inStock
        gallery
        description
        category
        prices {
          amount
        }
        brand
      }}}`
    }>
      {({ data, loading, error }) => {
        if( loading ) return <div>Loading...</div>;
        if( error ) return <div>Error :(</div>;
        
        return( data.category.products.map( x => <div>{ x.name }</div> ));
      }}
    </Query>
    </ApolloProvider>
  )}
}

export default App;
