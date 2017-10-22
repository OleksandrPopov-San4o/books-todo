import React from 'react';
import { Component } from 'react';
import { Nav, NavItem} from 'reactstrap';
import {NavLink} from 'react-router-dom';

const navs = [{Home: '/'}, {Books:'/books'}, {'My lists':'/lists'}];

export default class Navigation extends Component {
    render() {
        const listItems = navs.map(nav => {
            let arr = Object.entries(nav)[0];
            let [k, val] = [arr[0], arr[1]];

            return <NavItem key={k}>                
                      <NavLink exact={true} activeClassName="active" to={val}>{k}</NavLink>               
                  </NavItem>
        });
        
        return (<Nav pills>{listItems}</Nav>);
    }    
}