import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import {Container, Row, Col} from 'reactstrap';
import Header from './components/Header/HeaderComponent.jsx';
import Footer from './components/Footer/FooterComponent.jsx';
import Home from './components/Home/HomeComponent.jsx';
import BooksList from './components/Books/BooksListComponent.jsx';
import UserLists from './components/Lists/ListComponent.jsx';
import createBrowserHistory from 'history/createBrowserHistory'

require ('./main.css');
const history = createBrowserHistory()

ReactDOM.render (
    <Router history={history}>
        <Container>
            <Row>
                <Col xs="12">
                    <Header/>
                </Col>
                <Col xs="12" className="main-content"> 
                    <main>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/books" component={BooksList}/>
                            <Route path="/lists" component={UserLists}/>
                        </Switch>
                    </main>
                </Col>
                <Col xs="12"> 
                    <Footer/>
                </Col>
            </Row>
        </Container>
    </Router>,
    document.getElementById('app'));

