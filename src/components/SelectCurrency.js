import React from "react";
// apollo
import { Query } from "react-apollo";
import { currency } from "../controls/queries";
// styled
import { Select } from "../controls/Styled";
// redux
import { connect } from "react-redux";
import { changeCurrency } from "../redux";

class SelectCurrency extends React.Component {
    render() {
    return(
        <Query query={ currency }>
        {({ data, loading, error }) => {
            if( loading ) return <div>Loading...</div>;
            if( error ) return <div>Error :(</div>;

            const selectedCurrency = ( e ) => {
                let val = e.target.value;
                let valIndex = data.currencies.findIndex(( x ) => x.label === val );
                let symbolIndex = data.currencies[ data.currencies.findIndex(( x ) => x.label === val )].symbol;
        
                this.props.changeCurrency([ val, valIndex, symbolIndex ]);
            }
            
            return(
                <Select onChange={ selectedCurrency }>
                { data.currencies.map(( currency, index ) =>
                    <option className="optionCurrency" key={ index } value={ currency.label }>
                        { currency.symbol }
                    </option>
                )}
                </Select>
            )
        }}
        </Query>
    )}
}

// redux
const mapDispatchToProps = dispatch => {
    return {
        changeCurrency: ( data ) => dispatch( changeCurrency( data ))
    }
}

export default connect( null, mapDispatchToProps )( SelectCurrency );