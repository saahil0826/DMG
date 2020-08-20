import React from 'react';
import Home from './HomeComponent';
import Header from './HeaderComponent';


class Main extends React.Component{
    render(){
        return(
            <div className = 'container-fluid'>
                <Header/>
                <Home/>
            </div>
        )
    }
}

export default Main;