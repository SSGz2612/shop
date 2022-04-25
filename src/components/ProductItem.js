import React from "react";
// styled
import {
    AddItem2, AddItemBox, CardBox, ImgBox, InternBox, TextTittle
} from "../controls/Styled";
// redux
import { selectProduct, updtBasket } from "../redux";
import { connect } from "react-redux";
// browser
import { Link } from "react-router-dom";

class ProductItem extends React.Component {
    // addToBasket = () => {
    //     this.props.ab_dispatch({
    //         id: this.props.id,
    //         name: this.props.name,
    //         inStock: this.props.inStock,
    //         gallery: this.props.gallery,
    //         description: this.props.description,
    //         prices: this.props.prices,
    //         brand: this.props.brand
    //     })
    // }

    // openView = () => {
    //     this.props.viw_product({
    //         id: this.props.id,
    //         name: this.state.name,
    //         inStock: this.props.inStock,
    //         gallery: this.props.gallery,
    //         description: this.props.description,
    //         prices: this.props.prices,
    //         brand: this.props.brand
    //     });
    // }
    
    render() {
    return(
        <CardBox key={ this.props.id }>
            <InternBox>
            <Link to="/cpdp"
            // onClick={ this.openView }
            >
            <ImgBox>{ this.props.galleryStock }</ImgBox>
            </Link>
            
            <AddItemBox>
            { this.props.inStock === true ? <AddItem2
            // onClick={ this.addToBasket }
            >
            <div className="shopCar2"></div>
            </AddItem2> : null }
            </AddItemBox>
            
            <TextTittle>{ this.props.name }</TextTittle>
            <TextTittle>
                <b>
                {/* { this.props.currency[2] == "$" ? "$" : this.props.currency[0][2]} */}
                { this.props.prices[0
                    // this.props.currency[0][1] == null ? 0 : this.props.currency[0][1]
                ].amount.toFixed(2)}
                </b>
            </TextTittle>
            </InternBox>
        </CardBox>
    )}
}

// redux
// const mapStateToProps = state => {
//     return {
//         basket: state.basket,
//         currency: state.currency
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         ab_dispatch: ( data ) => dispatch( updtBasket( data )),
//         viw_product: ( data ) => dispatch( selectProduct( data ))
//     }
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps
// )( ProductItem );

export default ProductItem;

