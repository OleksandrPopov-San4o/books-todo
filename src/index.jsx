import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header/HeaderComponent.jsx';
import Footer from './components/Footer/FooterComponent.jsx';

ReactDOM.render (
    <div className="container">
        <Header/>
        <main><h1>Hello World!!!</h1></main>
        <Footer/>
    </div>,
    document.getElementById('app'));