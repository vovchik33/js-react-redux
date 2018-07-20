var expect = require('expect');
var redux = require('redux');

function counter(state, action) {
    var newState = state?state:0;
    switch(action.type) {
        case "INCREMENT":
            newState +=1;    
        break;
        case "DECREMENT":
            newState -=1;    
        break;
    }
    return newState;
}

var store = redux.createStore(counter);
store.subscribe(function() {
    console.log("State was changed: "+store.getState());
})
store.dispatch({type: "INCREMENT"})

expect(
    counter(0, {type: ""})
).toEqual(0);

expect(
    counter(0, {type: "INCREMENT"})
).toEqual(1);

expect(
    counter(1, {type: "DECREMENT"})
).toEqual(0);

expect(
    counter(store.getState(), {type: "INCREMENT"})
).toEqual(store.getState()+1);

expect(
    counter(store.getState(), {type: "DECREMENT"})
).toEqual(store.getState()-1);

console.log("Counter state:"+store.getState());
console.log("Tests passed!");