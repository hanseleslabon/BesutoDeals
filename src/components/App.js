import React, { useState, useEffect } from 'react';
import ItemList from './ItemList';
import { useSelector, connect } from 'react-redux';
import * as  actions from '../actions/actions';
import Footer from './Footer';
import NavBar from './NavBar';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';



const App = (props) => {
    const items = useSelector(state => state.switchGames.data)
    //Component did mount
    useEffect(() => {
        props.dispatch(actions.getSwitchData());
    }, []);

    return (
        <React.Fragment>
            <NavBar />
            <Container maxWidth="lg">
                <Box my={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        Switch Games
                 </Typography>
                    <div >
                        <ItemList items={items} />
                    </div>
                    <Footer />
                </Box>
            </Container>
        </React.Fragment>
    );
};



export default connect(function maptStateToProps(state, props) {
    return {
        items: state.switchGames.data,
    }
})(App);