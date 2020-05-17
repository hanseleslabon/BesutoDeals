import React, { useEffect } from 'react';
import ItemList from './ItemList';
import { useSelector, connect } from 'react-redux';
import * as  actions from '../actions/actions';


const App = (props) => {
    const counter = useSelector(state => state.counter)
    const items = useSelector(state => state.data)
    //Component did mount
    useEffect(() => {
        props.dispatch(actions.getSwitchData());

    }, []);

    return (
        <div>
            <ItemList amount={counter} items={items} />

        </div>
    );
};

export default connect(function maptStateToProps(state, props) {
    return {
        items: state.data,
    }
})(App);