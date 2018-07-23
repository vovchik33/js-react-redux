import * as Actions from "../actions";

const initialState = {
    value: 10
}

export default function (state=initialState, action) {
    console.log("REDUCER Action="+action.type);
    switch (action.type) {
        case Actions.COUNTER_INCREMENT:
            return Object.assign({}, state, {value:state.value+action.value});
        return 
        case Actions.COUNTER_DECREMENT:
            return Object.assign({}, state, {value:state.value>0?state.value-action.value:0});
        case Actions.COUNTER_RESET:
            return Object.assign({}, state, {value:0});
        default:
            return state;
    }
    return state;
}