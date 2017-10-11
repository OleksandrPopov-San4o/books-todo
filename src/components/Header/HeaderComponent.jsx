import React from 'react';
import { Component } from 'react';
import Navigation from '../Nav/NavComponent.jsx';

require('./header.css')

export default class Header extends Component {

    render() {
        return (
            <header>
               <div className="row">
                   <div className="col-sm-2 logo">BookListChecker</div>
                   <div className="col-sm-8 nav-justified">
                       <Navigation/>
                   </div>
                   <div className="col-sm-2 user">Albina</div>
               </div>
            </header>
        )
    }
}
