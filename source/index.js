var expect = require('expect');

function counter(state, action) {
    var newState = state;
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

expect(
    counter(0, {type: ""})
).toEqual(0);

expect(
    counter(0, {type: "INCREMENT"})
).toEqual(1);

expect(
    counter(1, {type: "DECREMENT"})
).toEqual(0);

console.log("Tests passed!");