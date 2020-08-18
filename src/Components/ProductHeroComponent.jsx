import React, { Component } from 'react'
import withCounter from './withCounter';

const ProductHero = (props) => {

    const { name, id, stock, price, approved, vehicleType } = props.product
    const { quantity, total } = props;
    return (
        <div class="main">
            <div class="img">
                <img src="./tyre.jpg" alt="tyre" id="main-img" />
            </div>
            <div class="info">
                <div class="container">
                    <div class="heading">
                        <h1>{name}</h1>
                    </div>
                    <div class="details">
                        <div class="approved">
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
                        <div class="text">
                            <div class="icon">
                                <span>{props.stockRemaining(stock)} </span>
                            </div>
                            <span>Price ₪{price}</span>
                        </div>
                        <div class="text">
                            <span>Total</span>
                            <span class="bold">₪{total}</span>
                        </div>
                    </div>
                    <div class="quantity">
                        <div class="counter">
                            <span class="incre" onClick={() => props.decrement()}>-</span>
                            <span class="number">{quantity}</span>
                            <span class="incre" onClick={() => props.increment()}>+</span>
                        </div>

                        <div class="adc">
                            <img src="./adc.png" id="adc" alt="" />
                            <span>Add to cart</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default withCounter(ProductHero);
