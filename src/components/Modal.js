import React from "react";
// styled
import {
    AddItem, AddItemCardClient, BoxLRModal, BoxNR, BtnContainer,
    BtnModal, BtnVCC2, BtnVCCModal, BoxLR, CardBoxModal,
    ContainerBoxButtonCardClient, ContainerBoxLR, ContainerIMG,
    ImgCardClient, Lit, Overview, OvwContainer, TxTittle, TxTittle2
} from "../controls/Styled";
// redux
import { connect } from "react-redux";
import { delProduct, restImage, sumImage, updtBasket } from "../redux";
// browser
import { Link } from "react-router-dom";

class Modal extends React.Component {
    state = { i: 0 }

    handleClickRes = ( e ) => {
        let bkt = this.props.basket.find(( bkt ) => bkt.id === e );
        this.props.dl_dispatch( bkt );
    }

    handleClickSum = ( e ) => {
        let bkt = this.props.basket.find(( bkt ) => bkt.id === e );
        this.props.ab_dispatch( bkt );
    }

    changeImgL = ( id ) => {
        this.props.rs_dispatch( id );
    }

    changeImgD = ( id ) => {
        this.props.ch_dispatch( id );
    }

    render() {
    return(
        <>
        { this.props.initModal &&
        <Overview>
        <OvwContainer>

        <BtnContainer>
        <TxTittle>
            <span><b>My BAG </b>{ this.props.basket.length } Items</span>
        </TxTittle>
        <BtnModal onClick={ this.props.handleCancel }><b>x</b></BtnModal>
        </BtnContainer>

        { this.props.basket?.map(( id, index ) =>
        
        <CardBoxModal key={ index }>

            <ContainerBoxLR>
                <BoxLRModal><TxTittle><b>{ id.name }</b></TxTittle></BoxLRModal>
                <BoxLRModal><TxTittle>{ id.brand }</TxTittle></BoxLRModal>
                <BoxLRModal>
                    <TxTittle>
                    {( id.prices[this.props.currency[0][1] == null ? 0
                    : this.props.currency[0][1]].amount ).toFixed(2)} { this.props.currency[0][0] }
                    </TxTittle>
                </BoxLRModal>
                <BoxLRModal>
                    <TxTittle>
                    {(( id.prices[this.props.currency[0][1] == null ? 0 : this.props.currency[0][1]].amount )
                    * ( this.props.basket[ index ].quantity )).toFixed(2)} { this.props.currency[2] == "$" ? "$" : this.props.currency[0][2]}
                    <Lit> x { this.props.basket[ index ].quantity } </Lit>
                    </TxTittle>
                </BoxLRModal>
            </ContainerBoxLR>
            
            <ContainerIMG>
                <ContainerBoxLR>
                <AddItem onClick={() => this.handleClickRes( id.id )}>-</AddItem>
                <BoxNR><b>{ this.props.basket[ index ].quantity }</b></BoxNR>
                <AddItem onClick={() => this.handleClickSum( id.id )}>+</AddItem>
                </ContainerBoxLR>

                <ContainerBoxLR>
                    <ImgCardClient url={ this.props.basket.find(( x ) => x.id === id.id ).gallery[ this.props.basket.find(( x ) =>
                    x.id === id.id ).numImg ]}>
                    <ContainerBoxButtonCardClient>
                    <AddItemCardClient onClick={() => this.changeImgL( id.id )}>{"<"}</AddItemCardClient>
                    <AddItemCardClient onClick={() => this.changeImgD( id.id )}>{">"}</AddItemCardClient>
                    </ContainerBoxButtonCardClient>
                    </ImgCardClient>
                </ContainerBoxLR>
            </ContainerIMG>

        </CardBoxModal>
        
        )}

        <BtnContainer>
        <TxTittle2>
            <BoxLR><b>TOTAL</b></BoxLR>
            
            <BoxLR><b>
                { this.props.currency[2] === "$" ? "$" : this.props.currency[0][2]}
                {( this.props.basket.map(( total ) =>
                total.prices[this.props.currency[0][1] == null ? 0
                : this.props.currency[0][1]].amount * total.quantity ).reduce(( sum, value ) =>
                sum + value, 0 )).toFixed(2)}
            </b></BoxLR>
        </TxTittle2>
        </BtnContainer>

        <BtnContainer>
        <Link to="/cardclient"><BtnVCC2 onClick={ this.props.handleCancel }><b>VIEW BAG</b></BtnVCC2></Link>
        <Link to="/"><BtnVCCModal onClick={ this.props.handleCancel }><b>CHECK OUT</b></BtnVCCModal></Link>
        </BtnContainer>
    
        </OvwContainer>
        </Overview>
        }
        </>
    )}
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
        ab_dispatch: ( data ) => dispatch( updtBasket( data )),
        dl_dispatch: ( data ) => dispatch( delProduct( data )),

        ch_dispatch: ( data ) => dispatch( sumImage( data )),
        rs_dispatch: ( data ) => dispatch( restImage( data ))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)( Modal );