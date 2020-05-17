import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import DataApi from '../state-api';

var defaultState = {
    loading: false,
    loaded: false,
    data: [],
    error: '',
    switch_games_list: {},
};


const amount = (state = defaultState, action) => {
    if (action.type === 'AddCounter') {
        //Object spread operator to create a new copy of state object
        return {
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === 'Request_Raw_Data_List') {
        return {
            ...state,
            loading: true,
            loaded: false
        }
    }
    if (action.type === 'Request_Raw_Data_List_SUCCESS') {
        return {
            ...state,
            data: action.data.data,
            loading: false,
            loaded: true,
            error: null
        }
    }
    if (action.type === 'Request_Raw_Data_List_FAILURE') {
        return {
            ...state,
            loading: false,
            loaded: true,
            error: action.data.data
        }
    }
    if (action.type === 'Request_Switch_Data_List') {
        return {
            ...state,
            loading: true,
            loaded: false
        }
    }
    if (action.type === 'Request_Switch_Data_List_SUCCESS') {
        const api = new DataApi(action.data.data.data);
        return {
            ...state,
            data: api.getSwitchGames(),
            loading: false,
            loaded: true,
            error: null
        }
    }
    if (action.type === 'Request_Switch_Data_List_FAILURE') {
        return {
            ...state,
            loading: false,
            loaded: true,
            error: action.data.data
        }
    }
    return state;
}

var logger = createLogger({
    collapsed: true,
})
var store = createStore
    (
        amount,
        applyMiddleware(thunk, logger),
    );

export default store;
