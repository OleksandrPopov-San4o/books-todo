import React from 'react';
import { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { getBook } from '../../reducers/books.js';
import { connect } from 'react-redux';

const mapStateToProps = (state) => ({
  books: state.books
  
})

class Book extends Component {
    render() {
        console.log(this.props)
       const book = this.props.books.find(b => b.id === Number(this.props.match.params.number));

        return (
             <Row className="book-item">
                <Col xs="12"> 
                    <h3 className="component-header text-center">{book.title}</h3>
                    <p>by {book.author}</p>  
                </Col>                
                <Col xs="12">Here should be some desc, image, rate etc</Col>
            </Row>         
        )
    }
}

export default connect(mapStateToProps)(Book);