import gql from "graphql-tag";

export const ctgQuery = gql`
query category( $ctg: String! ) {
  category( input: { title: $ctg }) {
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
  }
}}`

export const prdQuery = gql`
query product( $product: String! ) {
  product( id: $product ) {
    id
    name
    inStock
    gallery
    description
    category
    attributes {
      id
      name
      type
      items {
        displayValue
        value
        id
      }
    }
    prices {
      currency {
        label
        symbol
      }
      amount
    }
    brand
  }
}`

export const currency = gql`{
  currencies {
    label
    symbol
}}`