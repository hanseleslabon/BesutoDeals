import React from 'react';
import Copyright from './Copyright';
import AuthorContactFooter from './AuthorContactFooter';

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    backgroundColor: theme.palette.error.main,
    color: '#fff'
}));


const Footer = () => {
    const classes = useStyles();
    return (
        <div  >
            <Container maxWidth="lg">
                <Box>
                    <AuthorContactFooter />
                    <Copyright />
                </Box>
            </Container>
        </div>

    );
};

export default Footer;