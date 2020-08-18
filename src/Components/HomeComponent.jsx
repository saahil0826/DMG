import React, { Component } from 'react';
import { data } from '../data';
import Product from './Product';
import ProductHero from './ProductHeroComponent';
import { prettyDOM } from '@testing-library/react';
import Catalog from './CatalogComponent';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: data
        }
    }


    render() {
        return (
            <div className = 'bg'>
                <Catalog/>
                <div class="content">
                    {
                        this.state.data.filter(product => product.featured === true).map((product, index) => {
                            return (
                                
                                    <ProductHero
                                        product={product}
                                        key={index}
                                    />
                                
                            )
                        })
                    }
                </div>
                <div class="row-container">
                    {
                        this.state.data.map((product, index) => {
                            if (!product.featured) {
                                return (

                                    <Product
                                        product={product}
                                        key={index}
                                    />

                                )
                            }

                        })
                    }
                </div>
            </div>
        );
    }
}

export default Home;