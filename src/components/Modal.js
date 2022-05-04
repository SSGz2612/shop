import React from "react";
// styled
import {
    AddItem, AddItemCardClient, BoxLRModal, BoxNR, BtnContainer, BtnVCC2, BtnVCCModal,
    BoxLR, BoxLRModalInput, CardBoxModal, ContainerBoxButtonCardClient, ContainerBoxLR,
    ContainerIMG, ImgCardClient, Overview, OvwContainer, TxTittle, TxTittle2, TxTittle3
} from "../controls/Styled";
// redux
import { connect } from "react-redux";
import { delProduct, restImage, sumImage, updtBasket, selectAttribute } from "../redux";
// browser
import { Link } from "react-router-dom";

class Modal extends React.Component {
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
        <Overview onClick={ this.props.handleCancel }>
        <OvwContainer onClick={ this.props.stopProp }>

        <BtnContainer>
        <TxTittle>
            <span><b>My Bag, </b>{`${ this.props.aCard <= 1 ? this.props.aCard + " Item" : this.props.aCard + " Items" }`}</span>
        </TxTittle>
        </BtnContainer>

        { this.props.basket?.map(( id, index ) =>
        
        <CardBoxModal key={ index }>

        <ContainerBoxLR>
            <BoxLRModal><TxTittle><b>{ id.name }</b></TxTittle></BoxLRModal>
            <BoxLRModal><TxTittle>{ id.brand }</TxTittle></BoxLRModal>
            
            <BoxLRModal>
            <TxTittle><b>
            { this.props.currency[2] == "$" ? "$" : this.props.currency[0][2]} {( id.prices[this.props.currency[0][1] == null ? 0 : this.props.currency[0][1]].amount ).toFixed(2)}</b>
            </TxTittle>
            </BoxLRModal>

            <BoxLRModalInput>
                { id.attributes[0] === undefined ? null : <>
                <TxTittle3>{( id.attributes[0].name ).toUpperCase() }</TxTittle3>
                <div className="contInput">
                { id.attributes[0].items.map(( v ) =>(
                    <label key={ v.id }>
                    <div className="size">
                        <input
                            type="radio"
                            name={ id.name }
                            value={ v.displayValue } 
                        />
                        <div className="ipt">{ v.value }</div>
                    </div>
                    </label>
                ))}
                </div>
                </>}
            </BoxLRModalInput>

            <BoxLRModalInput>
                <TxTittle3>COLOR:</TxTittle3>
                <div className="contInput">
                    <label>
                    <div className="colors">
                        <input type="radio" name={`color ${ id.name }`} value="a"/>
                        <div className={ `clr ${ id.category === "clothes" ? id.id === "huarache-x-stussy-le" ? "gray" : "black" : "white" }`}>C</div>
                    </div>
                    </label>
                    <label>
                    <div className="colors">
                        <input type="radio" name={`color ${ id.name }`} value="b"/>
                        <div className={ `clr ${ id.category === "clothes" ? id.id === "huarache-x-stussy-le" ? "black" : "skyblue" : "gray" }`}>C</div>
                    </div>
                    </label>
                    <label>
                    <div className="colors">
                        <input type="radio" name={`color ${ id.name }`} value="c"/>
                        <div className={ `clr ${ id.category === "clothes" ? id.id === "huarache-x-stussy-le" ? "musgo" : "orange" : "black" }`}>C</div>
                    </div>
                    </label>
                </div>
            </BoxLRModalInput>
            {/* {(( id.prices[this.props.currency[0][1] == null ? 0 : this.props.currency[0][1]].amount ) * ( this.props.basket[ index ].quantity )).toFixed(2)} */}

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
            <BoxLR><b>Total</b></BoxLR>
            
            <BoxLR><b>
                { this.props.currency[2] == "$" ? "$" : this.props.currency[0][2]}
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
        aCard: state.aCard,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        ab_dispatch: ( data ) => dispatch( updtBasket( data )),
        dl_dispatch: ( data ) => dispatch( delProduct( data )),

        ch_dispatch: ( data ) => dispatch( sumImage( data )),
        rs_dispatch: ( data ) => dispatch( restImage( data )),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)( Modal );