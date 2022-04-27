import React from "react";
import "../App.css";
import NavMenu from "./NavMenu";
import Modal from "./Modal";
// import NavMenu from "./NavMenu";
// import SelectCurrency from "./SelectCurrency";
// import Modal from "./Modal";
// styled
import {
    NavPr, NavBox, ElNav, ElCard, CountCard, ContainerCountCard
} from "../controls/Styled";
// redux
import { connect } from "react-redux";
// browser
import { Link } from "react-router-dom";

class Nav extends React.Component {
    state = { initModal: false }

    showModal = () => {
        this.setState({ initModal: true })
    }

    handleCancel = () => {
        this.setState({ initModal: false })
    }

    render() {
    return (
        <NavPr>
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
            {/* <SelectCurrency/> */}
            
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
        >
        </Modal>
        </NavPr>
    )}
}

// redux
const mapStateToProps = state => {
    return {
        basket: state.basket,
        aCard: state.aCard
    }
}

export default connect( mapStateToProps, null )( Nav );