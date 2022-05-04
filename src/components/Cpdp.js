import React from "react";
import Parser from "html-react-parser";
import ProductItem from "./ProductItem";
// apollo
import { Query } from "react-apollo";
import { prdQuery } from "../controls/queries";
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
    handleImg = ( i, id ) => {
        this.props.updtImag([ i, id ]);
    }

    render() {
    return (
        <Query query={ prdQuery } variables={{ product: this.props.selProduct[0] }}>
        {({ data, loading, error }) => {
            if( loading ) return <div>Loading...</div>;
            if( error ) return <div>(
                <>
                <Header></Header>
                <Header><Link to="/"><BtnVCC>SELECT A PRODUCT</BtnVCC></Link></Header>
                </>
                )</div>;
            
            return(<> <Header/>
                <BodyBoxCardClient>
                <BBCenterCardClient>
                <CardBoxViewClient>
        
                    <ContainerBoxVC>
                        { data.product.gallery.map(( i, index ) =>
                        <ImgViewCLMin key={ index } onClick={() => this.handleImg( i, data.product.id )} url={ i }></ImgViewCLMin>
                        )}
                    </ContainerBoxVC>
                    
                    <ContainerViewClient>
                        <ImgViewClient url={ data.product.id === this.props.updImg[0][1] ? this.props.updImg[0][0] : data.product.gallery[0] }>
                        </ImgViewClient>
        
                        <ContainerBoxTx>
                        <BoxLR2><TxTittle><b>{ data.product.name }</b></TxTittle></BoxLR2>
                        <BoxLR><TxTittle2>{ data.product.brand }</TxTittle2></BoxLR>
                        
                        <BoxLRModalInput>
                            { data.product.category === "tech" ? <>
                                <TxTittle3>MEMORY:</TxTittle3>
                                <div className="contInput">
                                    <label>
                                    <div className="sizeVw">
                                        <input type="radio" name={ data.product.name } value="XS"/><div className="ipt">8</div>
                                    </div>
                                    </label>
                                    <label>
                                    <div className="sizeVw">
                                        <input type="radio" name={ data.product.name } value="S"/><div className="ipt">16</div>
                                    </div>
                                    </label>
                                    <label>
                                    <div className="sizeVw">
                                        <input type="radio" name={ data.product.name } value="M"/><div className="ipt">32</div>
                                    </div>
                                    </label>
                                </div>
                            </> : <>
                                <TxTittle3>SIZE:</TxTittle3>
                                <div className="contInput">
                                    { data.product.name === "Nike Air Huarache Le" ? null :
                                    <label>
                                    <div className="sizeVw">
                                        <input type="radio" name={ data.product.name } value="XS"/><div className="ipt">XS</div>
                                    </div>
                                    </label>
                                    }
                                    <label>
                                    <div className="sizeVw">
                                        <input type="radio" name={ data.product.name } value="S"/><div className="ipt">S</div>
                                    </div>
                                    </label>
                                    <label>
                                    <div className="sizeVw">
                                        <input type="radio" name={ data.product.name } value="M"/><div className="ipt">M</div>
                                    </div>
                                    </label>
                                    { data.product.name === "Nike Air Huarache Le" ? null :
                                    <label>
                                    <div className="sizeVw">
                                        <input type="radio" name={ data.product.name } value="L"/><div className="ipt">L</div>
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
                                    <input type="radio" name={`color ${ data.product.name }`} value="a"/>
                                    <div className={ `clr ${ data.product.category === "clothes" ? data.product.id === "huarache-x-stussy-le" ? "gray" : "black" : "white" }`}>C</div>
                                </div>
                                </label>
                                <label>
                                <div className="colors">
                                    <input type="radio" name={`color ${ data.product.name }`} value="b"/>
                                    <div className={ `clr ${ data.product.category === "clothes" ? data.product.id === "huarache-x-stussy-le" ? "black" : "skyblue" : "gray" }`}>C</div>
                                </div>
                                </label>
                                <label>
                                <div className="colors">
                                    <input type="radio" name={`color ${ data.product.name }`} value="c"/>
                                    <div className={ `clr ${ data.product.category === "clothes" ? data.product.id === "huarache-x-stussy-le" ? "musgo" : "orange" : "black" }`}>C</div>
                                </div>
                                </label>
                            </div>
                        </BoxLRModalInput>
        
                        <BoxLR2>
                        <BoxLRModalInput>{ }
                        <TxTittle3>PRICE:</TxTittle3>
                            <TxTittle4><b>
                            { this.props.currency[2] == "$" ? "$" : this.props.currency[0][2]} { data.product.prices[this.props.currency[0][1] == null ? 0 : this.props.currency[0][1]].amount.toFixed(2)}</b>
                            </TxTittle4>
                        </BoxLRModalInput>
                        </BoxLR2>
                        
                        {
                        data.product.inStock === true ?
                        <BoxNR><BtnVCC onClick={() => { this.props.updtBasket( data.product )}}><b>ADD TO CARD</b></BtnVCC></BoxNR> :
                        <BoxNR><BtnVCCFalse><b>IN STOCK</b></BtnVCCFalse></BoxNR>
                        }
                        
                        <BoxLR><InfoTextTittle>{ Parser( data.product.description )}</InfoTextTittle></BoxLR>
                        </ContainerBoxTx>
                    </ContainerViewClient>
                
                </CardBoxViewClient>
                </BBCenterCardClient>
                </BodyBoxCardClient>
            </>)
        }}
        </Query>
    )
    }
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