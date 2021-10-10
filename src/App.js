import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './config/theme';
import Home from './components/pages/Home';
import Routes from './Routes'
import Navbar from './Navbar'

const App = () => {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline/>
            <Navbar />
   <Routes />
            <Home/>
        </MuiThemeProvider>
    );
};

export default App;