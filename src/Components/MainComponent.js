import React, {Component} from 'react'
import axios from 'axios';

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
            <div className='container-fluid'>
                Working
            </div>
        );
    }
}

export default MainComponent;