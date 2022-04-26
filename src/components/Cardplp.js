import React from "react";
import ProductItem from "./ProductItem";
// apollo
import { Query } from "react-apollo";
import { ctgQuery } from "../controls/queries";
// styled
import { BodyBox, Header } from "../controls/Styled";
// redux
import { connect } from "react-redux";

class Cardplp extends React.Component {
    render() {
        return(
            <Query query={ ctgQuery }>
            {({ data, loading, error }) => {
                if( loading ) return <div>Loading...</div>;
                if( error ) return <div>Error :(</div>;

                console.log( this.props.selProduct );    
                console.log( data.category.products.filter(( i ) => i.category === this.props.selProduct[0] ))

                return <>
                    <Header><b></b></Header>
                    <BodyBox> <ProductItem
                        data={ data.category.products.filter(( i ) => i.category === this.props.selProduct[0])}
                    />
                    </BodyBox>
                </>
            }}
            </Query>
        )}
}

// redux
const mapStateToProps = state => {
    return {
        selProduct: state.selProduct
    }
}

export default connect(
    mapStateToProps,
    null
)( Cardplp );