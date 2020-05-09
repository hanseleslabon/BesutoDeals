import { createStore } from 'redux';

var defaultState = {
    counter: 0
};

const amount = (state = defaultState, action) => {
    if (action.type === 'AddCounter') {
        //Object spread operator to create a new copy of state object
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    return state;
}

var store = createStore(amount);

export default store;
