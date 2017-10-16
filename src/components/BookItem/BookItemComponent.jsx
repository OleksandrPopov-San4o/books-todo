import React from 'react';
import { Component } from 'react';
import { Row, Col } from 'reactstrap';

export default class BookItem extends Component {
    render() {
        return (
             <Row className="book-item">
                <Col xs="8" sm="10">{this.props.title} by {this.props.author} </Col>
                <Col xs="4" sm="2">{this.props.status===1 ? 'not started': this.props.status===2? 'in progress': 'read'} </Col>
            </Row>         
        )
    }
}