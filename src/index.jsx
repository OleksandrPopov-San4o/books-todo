import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import bookApp from './reducers'
import 'bootstrap/dist/css/bootstrap.css';
import Header from './components/Header/HeaderComponent.jsx';
import Footer from './components/Footer/FooterComponent.jsx';

let store = createStore(bookApp)

ReactDOM.render (
    <Provider store={store}>
        <div className="container">
            <Header/>
            <main><h1>Hello World!!!</h1></main>
            <Footer/>
        </div>
    </Provider>,
    document.getElementById('app'));