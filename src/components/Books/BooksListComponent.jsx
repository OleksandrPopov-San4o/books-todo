import React from 'react';
import { Component } from 'react';
import {ListGroup, ListGroupItem, Button, Row, Col} from 'reactstrap';
import BookItem from '../BookItem/BookItemComponent.jsx';
import StatusFilter from '../Filter/StatusFilterComponent.jsx';

require('./booklist.css');

const booksMocked = [{
    title: 'Atlas Shrugged ',
    author: 'Ayn Rand',
    status: 3,
    id: 1
},{
    title: 'Anthem',
    author: 'Ayn Rand',
    status: 1,
    id: 2
}, {
    title: 'American Gods',
    author: 'Neil Gaiman',
    status: 3,
    id: 3
}, {
    title: 'Coraline ',
    author: 'Neil Gaiman',
    status: 1,
    id: 4
},{
    title: 'A Hat Full of Sky',
    author: 'Terry Patchett',
    status: 2,
    id: 4
}];

export default class BooksList extends Component {
    render() {
        const listItems = booksMocked.map((book, index) =>  
            <ListGroupItem key={index}>
                <BookItem {...book}/>
            </ListGroupItem>
        );            
       
        return (
            <div className="book-list">
                <Row>
                    <Col xs="12"> 
                        <h3 className="component-header">Books</h3>   
                    </Col>  
                    <Col xs="12" className="align-right">                   
                        <Button color="primary">Add new book</Button>
                    </Col>
                    <Col xs="12">
                        <StatusFilter filters={Object.keys(booksMocked[0])} />                                                       
                        <ListGroup className="book-list-items">{listItems}</ListGroup>
                    </Col>
                </Row>
            </div>           
        );
    }
}