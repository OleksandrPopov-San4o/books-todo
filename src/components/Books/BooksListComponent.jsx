import React from 'react';
import { Component } from 'react';
import { Switch, Route, NavLink} from 'react-router-dom';
import {ListGroup, ListGroupItem, Button, Row, Col} from 'reactstrap';
import BookListItem from './BookListItemComponent.jsx';
import Book from './BookComponent.jsx';
import NewBook from './NewBookComponent.jsx'
import StatusFilter from '../Filter/StatusFilterComponent.jsx';
import MockedData from '../../MockedData.js';


require('./booklist.css');

const booksMocked = new MockedData().getAllBooks();

class ExactList extends Component{
     render() {
    const listItems = booksMocked.map((book, index) =>  
            <ListGroupItem key={index}>
                <BookListItem {...book}/>
            </ListGroupItem>
        );      
   return ( <div className="book-list">
                <Row>
                    <Col xs="12"> 
                        <h3 className="component-header">Books</h3>   
                    </Col>  
                    <Col xs="12" className="align-right">                   
                        <Button color="primary">
                            <NavLink className="no-link" to={"/books/create"}>Add new book</NavLink>
                        </Button>
                    </Col>
                    <Col xs="12">
                        <StatusFilter filters={Object.keys(booksMocked[0])} />                                                       
                        <ListGroup className="book-list-items">{listItems}</ListGroup>
                    </Col>
                </Row>
    </div> ); 
     }     
}

export default class BooksList extends Component {
    render() {             
       
        return (
             <Switch>
                <Route exact path='/books/' component={ExactList}/>
                <Route path='/books/create' component={NewBook}/>
                <Route path='/books/:number' component={Book}/>                
            </Switch>                
        );
    }
}