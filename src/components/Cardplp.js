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

            const allPrd = data.category.products.filter(( i ) => i.category === this.props.selPage[0]);
            const allPrdData = this.props.selPage[0] === "all" ? data.category.products : allPrd;

            return <>
                <Header><b>{ this.props.selPage === "all" ? this.props.selPage.toUpperCase() : this.props.selPage[0].toUpperCase()}</b></Header>
                <BodyBox><ProductItem data={ this.props.selPage === "all" ? data.category.products : allPrdData }/></BodyBox>
            </>
        }}
        </Query>
    )}
}

// redux
const mapStateToProps = state => {
    return {
        selPage: state.selPage,
        selProduct: state.selProduct
    }
}

export default connect(
    mapStateToProps,
    null
)( Cardplp );