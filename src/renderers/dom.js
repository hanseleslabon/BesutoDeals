import React from 'react';
import ReactDOM from 'react-dom';

import App from '../components/AppWrapper';
import StateApi from '../state-api';

import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../theme/theme';
import CssBaseline from '@material-ui/core/CssBaseline';

const initialData = new StateApi(window.initialData);

function Main() {
    React.useEffect(() => {
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <App initialData={initialData} />
        </ThemeProvider>
    );
}


ReactDOM.hydrate(
    <Main />,
    document.getElementById('root'),
);
