import React from 'react';

const Catalog = () => {
    return (
        <div class="catalog">
            <div class="header">
                <h1>Recommended Products</h1>
            </div>
            <div class="sort">
                <div class="filter">
                    <span>Selected Filter:</span>
                    <div class="drp">
                        <span>Continental</span>
                        <img src="./resources/delete.png" alt="" />
                    </div>
                </div>
                <div class="filter">
                    <span>Sort By:</span>
                    <div class="drp" id="trigger1">
                        <span>Popularity</span>
                        <img src="./resources/arr.png" alt="" id="arr" />
                    </div>
                    {/* <button type="button" name="button">Popularity</button> */}

                    <div class="dropdown-content1 shadow">
                        <a href="#" id="Popularity"
                        >Popularity <img src="./resources/arr1.png" alt="" id="arr"
                            /></a>
                        <a href="#">Lowest Price</a>
                        <a href="#">Most Stock</a>
                        <a href="#">Model A-Z</a>
                        <a href="#">Code No.</a>
                    </div>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Catalog;