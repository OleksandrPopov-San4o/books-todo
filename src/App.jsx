import React from 'react';
import { Component } from 'react';
import Nav from './NavComponent/NavComponent.jsx'

export default class App extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <h1>Hello World!!! {this.props.name}</h1>
            </div>
        );
    }
}