import React from 'react';
import { Component } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const navs = ['home', 'books', 'My lists'];

export default class Navigation extends Component {
    render() {
        const listItems = navs.map((nav) =>
            <NavItem key={nav}>
                <NavLink href="#">{nav}</NavLink>
            </NavItem>
        );

        return (
            <Nav pills>{listItems}</Nav>
        );

    }
}