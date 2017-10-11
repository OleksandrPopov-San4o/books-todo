import React from 'react';
import { Component } from 'react';

require('./footer.css')

export default class Footer extends Component {

    render() {
        return (
            <footer>BookListChecker &copy;Albina Kremlovska  {new Date().getFullYear()}</footer>
        )
    }
}
