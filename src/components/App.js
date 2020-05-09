import React, { useState } from 'react';
import ItemList from './ItemList';
import store from '../stores/configureStore';
import { useSelector } from 'react-redux'

const App = () => {
    const counter = useSelector(state => state.counter)

    const handleClick = (e) => {
        store.dispatch(
            {
                type: 'AddCounter'
            }
        );
    }
    return (

        <div>
            <ItemList amount={counter} />
            <br />
            <button onClick={handleClick}>{counter}</button>
        </div>
    );
};

export default App;