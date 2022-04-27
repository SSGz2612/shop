import React from "react";
// styled
import {
    AddItem2, AddItemBox, CardBox, ImgBox, Img, ImgBlock, InternBox, TextTittle
} from "../controls/Styled";
// redux
import { selectProduct, updtBasket } from "../redux";
import { connect } from "react-redux";
// browser
import { Link } from "react-router-dom";

class ProductItem extends React.Component {
    addToBasket = ( i ) => {
        const toBsk = this.props.data.find(( x ) => x.id === i );
        this.props.updtBasket( toBsk );
    }

    openView = ( i ) => {
        const selP = this.props.data.find(( x ) => x.id === i );
        this.props.selectProduct( selP );
        console.log( selP );
    }
    
    render() {
    return <>
        { this.props.data.map(( i ) => (
        <CardBox key={ i.id }>
            <InternBox>

            <Link to={{ pathname:`/cpdp/${ i.id }` }} onClick={() => this.openView( i.id )}>
            <ImgBox>
            { i.inStock === false ?
            <Img url={ i.gallery[0]}>
                <ImgBlock className="nn">
                <b>OUT OF STOCK</b>
                </ImgBlock>
            </Img> : <Img url={ i.gallery[0]}/>
            }
            </ImgBox>
            </Link>
            
            <AddItemBox>
            { i.inStock === true ?
                <AddItem2 onClick={() => this.addToBasket( i.id )}>
            <div className="shopCar2"></div>
                </AddItem2>
            : null }
            </AddItemBox>
            
            <TextTittle>{ i.name }</TextTittle>
            <TextTittle>
                <b>
                {/* { this.props.currency[2] == "$" ? "$" : this.props.currency[0][2]} */}
                { i.prices[0
                    // this.props.currency[0][1] == null ? 0 : this.props.currency[0][1]
                ].amount.toFixed(2)}
                </b>
            </TextTittle>

            </InternBox>
        </CardBox>
        ))}</>
    }
}

// redux
const mapStateToProps = state => {
    return {
        basket: state.basket,
        currency: state.currency,
        selProduct: state.selProduct
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updtBasket: ( data ) => dispatch( updtBasket( data )),
        selectProduct: ( data ) => dispatch( selectProduct( data ))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)( ProductItem );

