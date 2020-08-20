import React, { useState, useEffect } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, Input, InputGroupAddon, InputGroup, Collapse, NavbarToggler } from 'reactstrap';
import { Tune, ShoppingCart, Receipt, AccountBox, Search } from '@material-ui/icons';
import { IconButton, InputBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const Header = () => {

    const [collapsed, setCollapsed] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);
    const classes = useStyles();

    const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
    };

    const toggleNavbar = () => {
        setCollapsed(!collapsed);
    }

    useEffect(() => {
        window.addEventListener("resize", handleWindowSizeChange)
        return () => {
            // unsubscribe event
            window.removeEventListener("resize", handleWindowSizeChange);
          };
    })
    


    let mobile;
    if (width <= 768) {
        mobile = true
    }
    else {
        mobile = false
    }

    if (!mobile) {
        return (
            <Navbar light style={{ color: 'white', padding: 0 }} fixed='top' expand='md'>
                <NavbarBrand>
                    <IconButton>
                        <Tune fontSize='large' />
                    </IconButton>
                </NavbarBrand>
                <NavItem style={{ width: '60%', paddingBottom: 12 }}>
                    <InputGroup>
                        <Input type='text' placeholder='search' style={{ marginLeft: 40, border: 0, marginTop: 10, paddingLeft: 20 }} />
                        <InputGroupAddon addonType="append">
                            <IconButton>
                                <Search fontSize='large' color='yellow' />
                            </IconButton>
                        </InputGroupAddon>
                    </InputGroup>
                </NavItem>
                <Nav navbar style={{ position: 'absolute', right: '1em' }}>
                    <NavItem >
                        <IconButton classes={{ label: classes.iconButtonLabel }}>
                            <AccountBox fontSize='small' />
                            <p className={classes.text}>Account</p>
                        </IconButton>
                    </NavItem>
                    <NavItem>
                        <IconButton classes={{ label: classes.iconButtonLabel }}>
                            <Receipt fontSize='small' />
                            <p className={classes.text}>Order</p>
                        </IconButton>
                    </NavItem>
                    <NavItem>
                        <IconButton classes={{ label: classes.iconButtonLabel }}>
                            <ShoppingCart fontSize='small' />
                            <p className={classes.text}>Cart</p>
                        </IconButton>
                    </NavItem>
                </Nav>
            </Navbar>
        )
    }
    else {
        return (
            <Navbar light fixed='top' style={{ backgroundColor: 'white' }} >
                <NavbarBrand>
                    <IconButton>
                        <Tune fontSize='large' />
                    </IconButton>
                </NavbarBrand>
                <NavbarToggler onClick={toggleNavbar} className="mr-2">
                    <AccountBox fontSize='large' />
                </NavbarToggler>
                <Collapse isOpen={collapsed} navbar>
                    <Nav navbar>
                        <NavItem >
                            <IconButton onClick={toggleNavbar}>
                                <AccountBox fontSize='small' />
                            Account
                        </IconButton>
                        </NavItem>
                        <NavItem>
                            <IconButton onClick={toggleNavbar} >
                                <Receipt fontSize='small' />
                            Order
                        </IconButton>
                        </NavItem>
                        <NavItem>
                            <IconButton onClick={toggleNavbar} >
                                <ShoppingCart fontSize='small' />
                            Cart
                        </IconButton>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }


}

const useStyles = makeStyles(theme => ({
    iconButtonLabel: {
        display: 'flex',
        flexDirection: 'column',
        padding: 0
    },
    text: {
        fontSize: '20px'
    }
}));

export default Header;