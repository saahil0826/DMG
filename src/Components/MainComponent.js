import React, {Component} from 'react'
import axios from 'axios';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

class MainComponent extends Component {
    constructor(props){
        super(props)
        this.state = {
            url : window.location.hostname
        }
    }

    componentDidMount(){}

    render(){
        return(

            // <BrowserRouter>
            //     <Switch>
            //         <Route path = '/' component = {(props) => <Component {...props}/>}/>
            //     </Switch>
            // </BrowserRouter>
            
            <div className='container-fluid'>
                Working
            </div>
        );
    }
}

export default MainComponent;