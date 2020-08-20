import React, { Component } from 'react';
import { data } from '../data';
import Product from './Product';
import ProductHero from './ProductHeroComponent';
import Catalog from './CatalogComponent';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: data
        }
    }


    render() {
        const product = this.state.data;
        return (
            <div className = 'container mt-5 pt-5'>
                <div className = ' row'>
                    {
                        product.filter(item => item.featured === true).map((item, index) => {
                            return(
                                <ProductHero product = {item} key = {index}/>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}



// {
//     this.state.data.filter(product => product.featured === true).map((product, index) => {
//         return (

//             <ProductHero
//                 product={product}
//                 key={index}
//             />

//         )
//     })
// }

// {
//     this.state.data.map((product, index) => {
//         if (!product.featured) {
//             return (
//                 <Product
//                     product={product}
//                     key={index}
//                 />

//             )
//         }

//     })

// }
export default Home;