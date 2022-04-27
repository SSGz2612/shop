import React from "react";
// styled
import {
    AddItem, BoxLR, BoxNR, BtnVCC, Lit, TxTittle, ContainerBoxLR, ContainerIMG, HeaderCardClient,
    BodyBoxCardClient, BBCenterCardClient, CardBoxCardClient, ImgCardClient, ContainerBoxButtonCardClient,
    AddItemCardClient
} from "../controls/Styled";
// redux
import { connect } from "react-redux";
import { delProduct, restImage, sumImage, updtBasket } from "../redux";
// browser
import { Link } from "react-router-dom";

class CardClient extends React.Component {
    handleClickRes = ( e ) => {
        let resultBasket = this.props.basket.find(( basket ) => basket.id === e );
        this.props.delProduct( resultBasket );
    }

    handleClickSum = ( e ) => {
        let resultBasket = this.props.basket.find(( basket ) => basket.id === e );
        this.props.updtBasket( resultBasket );
    }

    changeImgL = ( id ) => {
        this.props.restImage( id );
    }

    changeImgD = ( id ) => {
        this.props.sumImage( id );
    }

    render() {
    return <>
        <HeaderCardClient>
            <TxTittle>
            <span><b>My BAG </b>{ this.props.basket.length } Items</span>
            </TxTittle>

            <TxTittle>
            <b>
            TOTAL {( this.props.basket.map(( total ) =>
            total.prices[this.props.currency[0][1] == null ? 0
            : this.props.currency[0][1]].amount * total.quantity ).reduce(( sum, value ) =>
            sum + value, 0 )).toFixed(2)} { this.props.currency[2] === "$" ? "$" : this.props.currency[0][2]}
            </b>
            </TxTittle>
        </HeaderCardClient>
        
        <BodyBoxCardClient>
        <BBCenterCardClient>
        { this.props.basket?.map(( id, index ) =>
        
        <CardBoxCardClient key={ index }>
        <ContainerBoxLR>
            <BoxLR><TxTittle><b>{ id.name }</b></TxTittle></BoxLR>
            <BoxLR><TxTittle>{ id.brand }</TxTittle></BoxLR>
            <BoxLR>
                <TxTittle>
                {( id.prices[this.props.currency[0][1] == null ? 0
                : this.props.currency[0][1]].amount ).toFixed(2)} { this.props.currency[0][0] }
                </TxTittle>
            </BoxLR>
            <BoxLR>
                <TxTittle>
                {(( id.prices[this.props.currency[0][1] == null ? 0 : this.props.currency[0][1]].amount )
                * ( this.props.basket[ index ].quantity )).toFixed(2)} { this.props.currency[2] == "$" ? "$" : this.props.currency[0][2]}
                <Lit> x { this.props.basket[ index ].quantity } </Lit>
                </TxTittle>
            </BoxLR>
        </ContainerBoxLR>
        
        <ContainerIMG>
            <ContainerBoxLR>
            <AddItem onClick={() => this.handleClickRes( id.id )}>-</AddItem>
            <BoxNR><b>{ this.props.basket[ index ].quantity }</b></BoxNR>
            <AddItem onClick={() => this.handleClickSum( id.id )}>+</AddItem>
            </ContainerBoxLR>

            <ContainerBoxLR>
            <ImgCardClient
                url={ this.props.basket.find(( x ) => x.id === id.id ).gallery[ this.props.basket.find(( x ) => x.id === id.id ).numImg ]}
            >
                <ContainerBoxButtonCardClient>
                
                <AddItemCardClient onClick={() =>
                    this.changeImgL( id.id )}>{"<"}</AddItemCardClient>

                <AddItemCardClient onClick={() =>
                    this.changeImgD( id.id )}>{">"}</AddItemCardClient>
                </ContainerBoxButtonCardClient>

            </ImgCardClient>
            </ContainerBoxLR>
        </ContainerIMG>
        </CardBoxCardClient>
        
        )}
        <Link to="/"><BtnVCC>CHECK OUT</BtnVCC></Link>
        </BBCenterCardClient>
        </BodyBoxCardClient>
    </>}
}

// redux
const mapStateToProps = state => {
    return {
        basket: state.basket,
        total: state.total,
        currency: state.currency,
        aCard: state.aCard
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updtBasket: ( data ) => dispatch( updtBasket( data )),
        delProduct: ( data ) => dispatch( delProduct( data )),

        sumImage: ( data ) => dispatch( sumImage( data )),
        restImage: ( data ) => dispatch( restImage( data ))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)( CardClient );