import React, { Component } from 'react'
import withCounter from './withCounter';

const ProductHero = () => {
    return (
        
            <div class="main">
                <div class="img">
                    <img src="./tyre.jpg" alt="tyre" id="main-img" />
                </div>
                <div class="info">
                    <div class="container">
                        <div class="heading">
                            <h1></h1>
                        </div>
                        <div class="details">
                            <div class="approved">
                                <img src=".approved.jpg" alt="" />
                            </div>
                            <div class="text">
                                <span>205/55 R16 H</span>
                                <span>SUV</span>
                            </div>
                            <div class="text">
                                <div class="icon">
                                    <span>Stock </span>
                                    <img src="./green.png" alt="" />
                                </div>
                                <span>Price ₪340</span>
                            </div>
                            <div class="text">
                                <span>Total</span>
                                <span class="bold">₪1360</span>
                            </div>
                        </div>
                        <div class="quantity">
                            <div class="counter">
                                <span class="incre">-</span>
                                <span class="number">4</span>
                                <span class="incre">+</span>
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
