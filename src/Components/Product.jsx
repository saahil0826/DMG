import React from 'react';
import withCounter from './withCounter';

const Product = (props) => {

    const { name, id, stock, price, approved, vehicleType } = props.product
    const { quantity, total } = props;
    
    return (
        <div>
            <div class="rows lg">
                <div class="name">
                    <h1>{name}</h1>
                </div>
                <div class="text">
                    {
                        approved ?
                            <img src="approved.jpg" alt="img_src" />
                            :
                            'Not Approved'
                    }
                </div>
                <div class="text">
                    <span>{id}</span>
                    <span>{vehicleType}</span>
                </div>
                <div class="text row">
                    {
                        props.stockRemaining(stock)
                    }
                </div>
                <div class="text">
                    <span>Price ₪{price}</span>
                </div>
                <div class="counter" id="main">
                    <span class="incre" onClick={() => props.decrement()}>-</span>
                    <span class="number">{ quantity }</span>
                    <span class="incre" onClick={() => props.increment()}>+</span>
                </div>
                <div class="text">
                    <p>Total <span class="bold">₪{ total }</span></p>
                </div>
                <div class="adc" id="icononly">
                    <img src="adc.png" id="adc" alt="" />
                    <span>Add to cart</span>
                </div>
            </div>
        </div>
    )

}

export default withCounter(Product);