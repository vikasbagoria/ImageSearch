import React from 'react';
import Search from './components/Search';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => {
    return (
        <MuiThemeProvider>
           <Search />
        </MuiThemeProvider>
    )
}

export default App
