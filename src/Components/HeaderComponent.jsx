import React from 'react';

const Header = () => {
    return (
        <div class="nav shadow">
            <div class="icon-nav">
                <img src="./first.png" alt="" />
            </div>
            <div class="search">
                <input type="text" placeholder="Search" />
                <img src="./srch.png" id="srch" alt="" />
            </div>
            <div class="right-links">
                <div class="icon-nav" id="srchsmall">
                    <img src="./srch.png" id="srch" alt="" />
                </div>
                <div class="dropdown">
                    <div id="trigger" class="icon-nav">
                        <img src="./account.png" alt="" />
                        <a class="dropbtn">Account</a>
                    </div>
                    <div class="dropdown-content">
                        <a href="#">Account</a>
                        <a href="#">Help</a>
                        <a href="#">Give Feedback</a>
                        <a href="#">Log Out</a>
                    </div>
                </div>
                <div class="icon-nav">
                    <img src="./orders.png" alt="" />
                    <a href="#contact">Order</a>
                </div>
                <div class="icon-nav">
                    <img src="./cart.png" alt="" />
                    <a href="#contact">Cart</a>
                </div>
            </div>
        </div>
    )
}

export default Header;