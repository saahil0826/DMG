import React, { Component } from 'react'
import withCounter from './withCounter';

const ProductHero = (props) => {

    const { name, id, stock, price, approved, vehicleType } = props.product
    const { quantity, total } = props;
    console.log(props);
    return (
        <div className='col-md-6'>
            <div className='m-3' id='hero-container'>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div id='hero-image' className='mr-5'>
                        <img src='./tyre.jpg' />
                    </div>
                    <div className='hero-details'>
                        <div className='hero-name'>
                            {name}
                        </div>
                        <div className='hero-specs'>
                            {
                                approved ?
                                    <img src='./approved.jpg' />
                                    :
                                    'Not approved'
                            }
                            <div>
                                {id}
                                <p>
                                    {vehicleType}
                                </p>
                            </div>
                            <div>
                                {props.stockRemaining(stock)}
                                <p>
                                    Price ₪ {price}
                                </p>
                            </div>
                            <div>
                                Total
                            <p>
                                    {total}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default withCounter(ProductHero);
