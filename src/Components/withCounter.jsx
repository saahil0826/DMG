import React from 'react';
import { Warning, Error, CheckCircle } from '@material-ui/icons';

const withCounter = (Product) => {
    class ProductWithCounter extends React.Component{
        constructor(props){
            super(props);
            this.state = {
                quantity: 0,
                total : 0,
                price : this.props.product.price || 99
            } 
        }

        // increase
        increment = () => {
            this.setState(prevState => {
                return ({
                    quantity: prevState.quantity + 1,
                    total: prevState.total + prevState.price
                })
            })
        }
    
        // decrease quantity
        decrement = () => {
            if (this.state.quantity > 0) {
                this.setState(prevState => {
                    return ({
                        quantity: prevState.quantity - 1,
                        total: prevState.total - prevState.price
                    })
                })
            }
        }
        
        // rendet stock remaining
        stockRemaining = (stock) => {
            if (stock > 10) {
                return (
                    <React.Fragment>
                        <div class="icon">
                            <span> Stock </span>
                            <CheckCircle fontSize='small' 
                                style = {{color : 'green'}}
                            />
                        </div>
                    </React.Fragment>
    
                )
            }
            else if (stock < 10 && stock > 0) {
                return (
                    <React.Fragment>
                        <div class="icon">
                            <span> Stock </span>
                            <Warning fontSize='small' 
                                style = {{color : 'yellow'}}
                            />
                        </div>
                        <span>
                            Only {stock} left!
                    </span>
                    </React.Fragment>
    
                )
            }
            else {
                return (
                    <React.Fragment>
                        <div class="icon">
                            <span> Stock </span>
                            <Error fontSize='small' 
                                style = {{color : 'red'}}
                            />
                        </div>
                        <span>
                            None left!
                        </span>
                    </React.Fragment>
                )
            }
        }

        
        render(){
            return(
                <Product 
                    stockRemaining = {this.stockRemaining}
                    increment = {this.increment}
                    decrement = {this.decrement}
                    quantity = {this.state.quantity}
                    total = {this.state.total}
                    { ...this.props }
                />
            )
        }
    }
    return ProductWithCounter;
}

export default withCounter;