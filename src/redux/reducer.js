export const initialState = {
    basket: [],
    selProduct: [],
    aCard: 0,
    currency: [["USD"],[0],["$"]]
}

export const updtBasket = ( data ) => {
    return {
        type: "UPDATE_BASKET",
        payload: data
    }
}

export const selectProduct = ( data ) => {
    return {
        type: "SELECT_PRODUCT",
        payload: data
    }
}

export const delProduct = ( data ) => {
    return {
        type: "DELETE_PRODUCT",
        payload: data
    }
}

export const changeCurrency = ( data ) => {
    return {
        type: "CHANGE_CURRENCY",
        payload: data
    }
}

export const sumImage = ( data ) => {
    return {
        type: "SUM_IMAGE",
        payload: data
    }
}

export const restImage = ( data ) => {
    return {
        type: "REST_IMAGE",
        payload: data
    }
}

const reducer = ( state = initialState, action ) => {
    switch( action.type ) {
        case "UPDATE_BASKET":
        // let it = state.basket.find(( item ) => item.id === action.payload.id );
        // return it ? {
        //     ...state,
        //     basket: state.basket.map(( item ) => item.id === action.payload.id ?
        //     { ...item, quantity: item.quantity + 1 } : item ),
        //     aCard: state.aCard + 1
        // } : {
        //     ...state,
        //     basket: [ ...state.basket, { ...action.payload, quantity: 1, numImg: 0 }],
        //     aCard: state.aCard + 1
        // }
        

        // case "UPDATE_BASKET":
        // return {
        // ...state,
        // basket: [ ...state.basket, action.payload ]
        // }


        case "SELECT_PRODUCT":
        // return {
        //     ...state,
        //     selProduct: [ action.payload ]
        // }
        case "DELETE_PRODUCT":
        // let dl = state.basket.find(( item ) => item.id === action.payload.id );
        // return dl.quantity > 1 ? {
        //     ...state,
        //     basket: state.basket.map(( item ) => item.id === action.payload.id ? {
        //         ...item, quantity: item.quantity - 1
        //     } : item ),
        //     aCard: state.aCard - 1
        // } : {
        //     ...state,
        //     basket: state.basket.filter(( item ) => item.id !== action.payload.id ),
        //     aCard: state.aCard - 1
        // }
        case "CHANGE_CURRENCY":
        // return {
        //     ...state,
        //     currency: [ action.payload ]
        // }
        case "SUM_IMAGE":
        // return {
        //     ...state,
        //     basket: state.basket.map(( item ) => item.id === action.payload ?
        //     { ...item, numImg: item.numImg < state.basket.find(( x ) => x.id === action.payload ).gallery.length - 1
        //     ? item.numImg + 1 : item.numImg = 0 } : item ),
        // }
        case "REST_IMAGE":
        // return {
        //     ...state,
        //     basket: state.basket.map(( item ) => item.id === action.payload ?
        //     { ...item, numImg: item.numImg <= 0 ? item.numImg = state.basket.find(( x ) =>
        //     x.id === action.payload ).gallery.length - 1 : item.numImg - 1 } : item ),
        // }
        default: return state
    }
}

export default reducer;