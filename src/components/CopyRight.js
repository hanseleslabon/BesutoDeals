import React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import config from '../config';

const CopyRight = () => {

    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href={config.url}>
                {config.name}
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
};


export default CopyRight;