import React, { useEffect } from 'react';
import ItemList from './ItemList';
import { useSelector, connect } from 'react-redux';
import * as  actions from '../actions/actions';


const App = (props) => {
    const items = useSelector(state => state.switchGames.data)
    //Component did mount
    useEffect(() => {
        props.dispatch(actions.getSwitchData());

    }, []);

    return (
        <div>
            <ItemList items={items} />

        </div>
    );
};

export default connect(function maptStateToProps(state, props) {
    return {
        items: state.switchGames.data,
    }
})(App);