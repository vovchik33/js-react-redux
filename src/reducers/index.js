import * as Actions from "../actions";

const initialState = {
    value: 10
}

export default function (state=initialState, action) {
    console.log("REDUCER"+action.type);
    switch (action.type) {
        case Actions.COUNTER_INCREMENT:
            console.log("Action: " + Actions.COUNTER_INCREMENT);
            let newState = Object.assign(state, {value:state.value+action.value});
            console.log("State: " + JSON.stringify(newState));
            return newState;
        return 
        case Actions.COUNTER_DECREMENT:
            console.log("Action: " + Actions.COUNTER_DECREMENT)
            return Object.assign(state, {value:state.counter>0?state.value+1:0});
        case Actions.COUNTER_RESET:
            console.log("Action: " + Actions.COUNTER_RESET)
            return Object.assign(state, {value:0});
        default:
            return state;
    }
    return state;
}