import React from "react";
// apollo
import { Query } from "react-apollo";
import { currency } from "../controls/queries";
// styled
import { ContCurrency, CurrencyBox, ContCurrencyBox } from "../controls/Styled";
// redux
import { connect } from "react-redux";
import { changeCurrency } from "../redux";

class SelectCurrency2 extends React.Component {
    render() {
    return(
    <Query query={ currency }>
    {({ data, loading, error }) => {
        if( loading ) return <div>Loading...</div>;
        if( error ) return <div>Error :(</div>;

        const selectedCurrency = ( e ) => {
            let valIndex = data.currencies.findIndex(( x ) => x.label === e );
            let symbolIndex = data.currencies[ data.currencies.findIndex(( x ) => x.label === e )].symbol;

            this.props.changeCurrency([ e, valIndex, symbolIndex ]);
        }
        
        return(
            <>
            { this.props.initCurrn &&
            <ContCurrency onClick={ this.props.handleCancel }>
            
            <ContCurrencyBox>
            { data.currencies.map(( currency, index ) =>
                <CurrencyBox onClick={() => selectedCurrency( currency.label )} className="optionCurrency" key={ index }>
                    <div>{ currency.symbol }</div>
                    <div>{ currency.label }</div>
                </CurrencyBox>
            )}
            </ContCurrencyBox>

            </ContCurrency>
            }
            </>
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

export default connect( null, mapDispatchToProps )( SelectCurrency2 );