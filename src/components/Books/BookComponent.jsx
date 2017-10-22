import React from 'react';
import { Component } from 'react';
import { Row, Col } from 'reactstrap';
import MockedData from '../../MockedData.js';

export default class Book extends Component {
    render() {
       const book = new MockedData().getBook(this.props.match.params.number);

        return (
             <Row className="book-item">
                <Col xs="12"><h2>{book.title}</h2></Col>
                <Col xs="12"> by {book.author}</Col>
                <Col xs="12">Here should be some desc, image, rate etc</Col>
            </Row>         
        )
    }
}