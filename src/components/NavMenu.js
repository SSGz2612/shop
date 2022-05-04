import React from "react";
// apollo
import { Query } from "react-apollo";
import { ctgQuery } from "../controls/queries";
// redux
import { selectPage } from "../redux";
import { connect } from "react-redux";
// browser
import { Link } from "react-router-dom";

class NavMenu extends React.Component {
    selOption = ( i ) => {
        this.props.selectPage( i );
    }

    render() {
    return(
        <Query query={ ctgQuery } variables={{ ctg: "all" }}>
        {({ data, loading, error }) => {
            if( loading ) return <div>Loading...</div>;
            if( error ) return <div>Error :(</div>;
            
            const allCtg = "all";
            const fCtg = data.category.products.map(( x ) => x.category );
            const listCtg = fCtg.filter(( i, index ) => { return fCtg.indexOf( i ) === index });
            
            const list = [ allCtg ].concat( listCtg );
            
            return <>{
                list.map(( i, index ) => (
                <div key={ index }>
                <Link
                    className="BtnNavMenu"
                    onClick={() => this.selOption( i )}
                    to="/"
                >
                { i.toUpperCase() }
                </Link>
                    
                </div>
                ))
            }</>
        }}
        </Query>
    )}
}

// redux
const mapStateToProps = state => {
    return {
        selPage: state.selPage,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        selectPage: ( data ) => dispatch( selectPage( data ))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)( NavMenu );