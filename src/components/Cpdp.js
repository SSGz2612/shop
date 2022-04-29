import React from "react";
import Parser from "html-react-parser";
// styled
import {
    BBCenterCardClient, BodyBoxCardClient, BoxLR, BoxLR2, BoxNR, BtnVCC,
    BtnVCCFalse, CardBoxViewClient, ContainerBoxTx, ContainerBoxVC,
    ContainerViewClient, Header, ImgViewCLMin, InfoTextTittle,
    ImgViewClient, TxTittle, TxTittle2, TxTittle3, TxTittle4, BoxLRModalInput
} from "../controls/Styled";
// redux
import { connect } from "react-redux";
import { updtBasket, selectProduct, updtImage } from "../redux";
import { Link } from "react-router-dom";

class Cpdp extends React.Component {
    addToBasket = () => {
        if( this.props.selProduct[0].inStock === true ) {
            this.props.updtBasket( this.props.selProduct[0])
        }        
    }

    handleImg = ( i, id ) => {
        this.props.updtImag([ i, id ]);
    }

    render() {
    return( this.props.selProduct[0] === undefined ?
        <>
        <Header></Header>
        <Header><Link to="/"><BtnVCC>SELECT A PORDUCT</BtnVCC></Link></Header>
        </> :
        <>
        <Header/>
        <BodyBoxCardClient>
        <BBCenterCardClient>
        <CardBoxViewClient>

            <ContainerBoxVC>
                { this.props.selProduct[0].gallery.map(( i, index ) =>
                <ImgViewCLMin key={ index } onClick={ () => this.handleImg( i, this.props.selProduct[0].id )} url={ i }></ImgViewCLMin>
                )}
            </ContainerBoxVC>
            
            <ContainerViewClient>
                <ImgViewClient url={ this.props.selProduct[0].id === this.props.updImg[0][1] ? this.props.updImg[0][0] : this.props.selProduct[0].gallery[0] }>
                </ImgViewClient>

                <ContainerBoxTx>
                <BoxLR2><TxTittle><b>{ this.props.selProduct[0].name }</b></TxTittle></BoxLR2>
                <BoxLR><TxTittle2>{ this.props.selProduct[0].brand }</TxTittle2></BoxLR>
                
                <BoxLRModalInput>
                    {/* just for paint in the overlay */}
                    { this.props.selProduct[0].category === "tech" ? <>
                        <TxTittle3>MEMORY:</TxTittle3>
                        <div className="contInput">
                            <label>
                            <div className="sizeVw">
                                <input type="radio" name={ this.props.selProduct[0].name } value="XS"/><div className="ipt">8</div>
                            </div>
                            </label>
                            <label>
                            <div className="sizeVw">
                                <input type="radio" name={ this.props.selProduct[0].name } value="S"/><div className="ipt">16</div>
                            </div>
                            </label>
                            <label>
                            <div className="sizeVw">
                                <input type="radio" name={ this.props.selProduct[0].name } value="M"/><div className="ipt">32</div>
                            </div>
                            </label>
                        </div>
                    </> : <>
                        <TxTittle3>SIZE:</TxTittle3>
                        <div className="contInput">
                            { this.props.selProduct[0].name === "Nike Air Huarache Le" ? null :
                            <label>
                            <div className="sizeVw">
                                <input type="radio" name={ this.props.selProduct[0].name } value="XS"/><div className="ipt">XS</div>
                            </div>
                            </label>
                            }
                            <label>
                            <div className="sizeVw">
                                <input type="radio" name={ this.props.selProduct[0].name } value="S"/><div className="ipt">S</div>
                            </div>
                            </label>
                            <label>
                            <div className="sizeVw">
                                <input type="radio" name={ this.props.selProduct[0].name } value="M"/><div className="ipt">M</div>
                            </div>
                            </label>
                            { this.props.selProduct[0].name === "Nike Air Huarache Le" ? null :
                            <label>
                            <div className="sizeVw">
                                <input type="radio" name={ this.props.selProduct[0].name } value="L"/><div className="ipt">L</div>
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
                            <input type="radio" name={`color ${ this.props.selProduct[0].name }`} value="a"/>
                            <div className={ `clr ${ this.props.selProduct[0].category === "clothes" ? this.props.selProduct[0].id === "huarache-x-stussy-le" ? "gray" : "black" : "white" }`}>C</div>
                        </div>
                        </label>
                        <label>
                        <div className="colors">
                            <input type="radio" name={`color ${ this.props.selProduct[0].name }`} value="b"/>
                            <div className={ `clr ${ this.props.selProduct[0].category === "clothes" ? this.props.selProduct[0].id === "huarache-x-stussy-le" ? "black" : "skyblue" : "gray" }`}>C</div>
                        </div>
                        </label>
                        <label>
                        <div className="colors">
                            <input type="radio" name={`color ${ this.props.selProduct[0].name }`} value="c"/>
                            <div className={ `clr ${ this.props.selProduct[0].category === "clothes" ? this.props.selProduct[0].id === "huarache-x-stussy-le" ? "musgo" : "orange" : "black" }`}>C</div>
                        </div>
                        </label>
                    </div>
                </BoxLRModalInput>

                <BoxLR2>
                <BoxLRModalInput>
                <TxTittle3>PRICE:</TxTittle3>
                <TxTittle4><b>
                { this.props.currency[2] == "$" ? "$" : this.props.currency[0][2]} { this.props.selProduct[0].prices[this.props.currency[0][1] == null ? 0 : this.props.currency[0][1]].amount.toFixed(2)}</b>
                </TxTittle4>
                </BoxLRModalInput>
                </BoxLR2>
                
                {
                this.props.selProduct[0].inStock === true ?
                <BoxNR><BtnVCC onClick={ this.addToBasket }><b>ADD TO CARD</b></BtnVCC></BoxNR> :
                <BoxNR><BtnVCCFalse><b>IN STOCK</b></BtnVCCFalse></BoxNR>
                }
                
                <BoxLR><InfoTextTittle>{ Parser( this.props.selProduct[0].description )}</InfoTextTittle></BoxLR>
                </ContainerBoxTx>
            </ContainerViewClient>
        
        </CardBoxViewClient>
        </BBCenterCardClient>
        </BodyBoxCardClient>
        </>
    )}
}

// redux
const mapStateToProps = state => {
    return {
        selProduct: state.selProduct,
        basket: state.basket,
        updImg: state.updtImage,
        currency: state.currency
    }
}

const mapDispatchToProps = dispatch => {
    return {
        updtBasket: ( data ) => dispatch( updtBasket( data )),
        updtImag: ( data ) => dispatch( updtImage( data )),
        selectProduct: ( data ) => dispatch( selectProduct( data ))
    }
}

export default connect( mapStateToProps, mapDispatchToProps )( Cpdp );