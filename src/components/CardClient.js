import React from "react";
// styled
import {
    AddItem, AddItemCardClient, BBCenterCardClient, BoxLRModalInput, BodyBoxCardClient,
    BoxLR, BoxNR, BtnVCC, BoxLR2, CardBoxCardClient, ContainerBoxButtonCardClient,
    ContainerBoxLR, ContainerIMG, HeaderCardClient, HeaderCardClient2, ImgCardClient,
    TxTittle, TxTittle3
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
        <TxTittle> <span><b>CART</b></span> </TxTittle>
        </HeaderCardClient>
        
        <BodyBoxCardClient>
        <BBCenterCardClient>
        { this.props.basket?.map(( id, index ) =>
        
        <CardBoxCardClient key={ index }>
        <ContainerBoxLR>
            <BoxLR><TxTittle><b>{ id.name }</b></TxTittle></BoxLR>
            <BoxLR><TxTittle>{ id.brand }</TxTittle></BoxLR>
            <BoxLR2>
                <TxTittle><b>
                { this.props.currency[2] == "$" ? "$" : this.props.currency[0][2]} {( id.prices[this.props.currency[0][1] == null ? 0
                : this.props.currency[0][1]].amount ).toFixed(2)}</b>
                </TxTittle>
            </BoxLR2>
            <BoxLRModalInput>
                {/* just for paint in the overlay */}
                { id.category === "tech" ? <>
                    <TxTittle3>MEMORY:</TxTittle3>
                    <div className="contInput">
                        <label>
                        <div className="sizeCl">
                            <input type="radio" name={ id.name } value="XS"/><div className="ipt">8</div>
                        </div>
                        </label>
                        <label>
                        <div className="sizeCl">
                            <input type="radio" name={ id.name } value="S"/><div className="ipt">16</div>
                        </div>
                        </label>
                        <label>
                        <div className="sizeCl">
                            <input type="radio" name={ id.name } value="M"/><div className="ipt">32</div>
                        </div>
                        </label>
                    </div>
                </> : <>
                    <TxTittle3>SIZE:</TxTittle3>
                    <div className="contInput">
                        { id.name === "Nike Air Huarache Le" ? null :
                        <label>
                        <div className="sizeCl">
                            <input type="radio" name={ id.name } value="XS"/><div className="ipt">XS</div>
                        </div>
                        </label>
                        }
                        <label>
                        <div className="sizeCl">
                            <input type="radio" name={ id.name } value="S"/><div className="ipt">S</div>
                        </div>
                        </label>
                        <label>
                        <div className="sizeCl">
                            <input type="radio" name={ id.name } value="M"/><div className="ipt">M</div>
                        </div>
                        </label>
                        { id.name === "Nike Air Huarache Le" ? null :
                        <label>
                        <div className="sizeCl">
                            <input type="radio" name={ id.name } value="L"/><div className="ipt">L</div>
                        </div>
                        </label>
                        }
                    </div>
                    </>
                }
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
                <AddItemCardClient onClick={() => this.changeImgL( id.id )}>{"<"}</AddItemCardClient>
                <AddItemCardClient onClick={() => this.changeImgD( id.id )}>{">"}</AddItemCardClient>
                </ContainerBoxButtonCardClient>

            </ImgCardClient>
            </ContainerBoxLR>
        </ContainerIMG>
        </CardBoxCardClient>
        )}

        <HeaderCardClient2>
        <TxTittle><b>Tax: $15.00</b></TxTittle>
        </HeaderCardClient2>
        <HeaderCardClient2>
        <TxTittle><b>Qty: { this.props.aCard}</b></TxTittle>
        </HeaderCardClient2>

        <HeaderCardClient2>
        <TxTittle>
            <b>
            Total { this.props.currency[2] == "$" ? "$" : this.props.currency[0][2]} {( this.props.basket.map(( total ) =>
            total.prices[this.props.currency[0][1] == null ? 0
            : this.props.currency[0][1]].amount * total.quantity ).reduce(( sum, value ) =>
            sum + value, 0 )).toFixed(2)}
            </b>
        </TxTittle>
        </HeaderCardClient2>

        <Link to="/"><BtnVCC>ORDER</BtnVCC></Link>        
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