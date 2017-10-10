import React from 'react';
import { Component } from 'react';
import Navigation from './components/Nav/NavComponent.jsx'

export default class App extends Component {
    render() {
        return (
            <div>
                <Navigation/>
                <h1>Hello World!!! {this.props.name}</h1>
            </div>
        );
    }
}