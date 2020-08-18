import React from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';


class Main extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Header/>
                <Home/>
            </React.Fragment>
        )
    }
}

export default Main;