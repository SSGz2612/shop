import React from "react";
import "../App.css";
import NavMenu from "./NavMenu";
import SelectCurrency2 from "./SelectCurrency2";
import Modal from "./Modal";
// styled
import {
    NavPr, NavBox, ElNav, ElCard, CountCard, ContainerCountCard, Select2
} from "../controls/Styled";
// redux
import { connect } from "react-redux";
// browser
import { Link } from "react-router-dom";

class Nav extends React.Component {
    state = {
        initModal: false,
        initCurrn: false
    }

    showModal = () => {
        this.setState({ initModal: true })
    }

    showCurrn = () => {
        this.setState({ initCurrn: true })
    }

    handleCancel = () => {
        this.setState({ initModal: false });
        this.setState({ initCurrn: false });
    }

    stopPropagation = ( e ) => {
    e.stopPropagation();
    }

    render() {
    return (
        <NavPr>
        
        <SelectCurrency2
            initCurrn={ this.state.initCurrn }
            handleCancel={ this.handleCancel }
        />

        <NavBox>
            <ElNav>
                <NavMenu/>
            </ElNav>

            <ElNav>
            <Link to="/">
                <div className="logo"/>
            </Link>
            </ElNav>

            <ElNav>
            <div onClick={ this.showCurrn }>
                <Select2>{ this.props.currency[2] == "$" ? "$" : this.props.currency[0][2]} <div className="v"></div> </Select2>
            </div>
            
            <div onClick={ this.showModal }>
                <ElCard className="shopCar">
                {
                this.props.basket.length ?
                <ContainerCountCard>
                    <CountCard><b>{ this.props.aCard }</b></CountCard>
                </ContainerCountCard> : false
                }                
                </ElCard>
            </div>
            </ElNav>
        </NavBox>

        <Modal
            initModal={ this.state.initModal }
            handleCancel={ this.handleCancel }
            stopProp={ this.stopPropagation }
        >
        </Modal>
        </NavPr>
    )}
}

// redux
const mapStateToProps = state => {
    return {
        basket: state.basket,
        aCard: state.aCard,
        currency: state.currency
    }
}

export default connect( mapStateToProps, null )( Nav );