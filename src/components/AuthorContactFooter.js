import React from 'react';
import config from '../config';
import Link from '@material-ui/core/Link';

const AuthorContactFooter = () => {
    return (
        <div>
            {`${config.name} is made by ${config.author}`}<br />
            {`Get in touch with me for any reason at `}
            <Link color="inherit" href={`mailto:${config.authorEmail}`}>
                {config.authorEmail}
            </Link>
        </div>
    );
};

export default AuthorContactFooter;