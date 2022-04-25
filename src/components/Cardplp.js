import React from "react";
import ProductItem from "./ProductItem";
// apollo
import { Query } from "react-apollo";
import gql from "graphql-tag";
// styled
import { BodyBox, Header, Img, ImgBlock } from "../controls/Styled";

class Cardplp extends React.Component {
    render() {
    return(
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
            
            return <>
            <Header><b>ALL</b></Header>
            { console.log( data )}
            <BodyBox>{ data.category.products.map(( id, index ) => (
            <ProductItem
                key={ index }
                id={ id.id }
                name={ id.name }
                inStock={ id.inStock }
                galleryStock={ id.inStock === false ?
                    <Img url={ id.gallery[0]}>
                        <ImgBlock className="nn">
                        <b>OUT OF STOCK</b>
                        </ImgBlock>
                    </Img> : <Img url={ id.gallery[0]}/> }
                gallery={ id.gallery }
                description={ id.description }
                category={ id.category }
                prices={ id.prices }
                brand={ id.brand }
            />
            ))}
            </BodyBox>
            </>
        }}
        </Query>
    )}
}

export default Cardplp;