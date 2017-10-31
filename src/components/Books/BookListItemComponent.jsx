import React from 'react';
import { Component } from 'react';
import { Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';

export default class BookListItem extends Component {
    render() {
        return (
             <Row className="book-item">
                <Col xs="8" sm="10">
                    <Link to={`/books/${this.props.id}`}>{this.props.title}</Link> by <Link to={`/author/${this.props.author}`}>{this.props.author}</Link>
                 </Col>
                <Col xs="4" sm="2">{this.props.status===1 ? 'not started': this.props.status === 2 ? 'in progress': 'read'} </Col>
            </Row>         
        )
    }
}