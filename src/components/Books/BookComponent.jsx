import React from 'react';
import { Component } from 'react';
import { Row, Col, ButtonGroup, Button} from 'reactstrap';
import { getBook } from '../../reducers/books.js';
import { connect } from 'react-redux';
import { changeBookStatus } from '../../actions';

const mapStateToProps = (state) => ({
  books: state.books,
  filters: state.visibilityFilter.filters  
})

class Book extends Component {
    constructor () {
        super();        
        //this.book = this.books.find(b => b.id === Number(this.props.match.params.number));
        this.changeStatus = this.changeStatus;
    }

    changeStatus(id, status){
       this.props.dispatch(changeBookStatus(id, status))
    }
 
    render() {
        // TODO get book with redux
       this.book = this.props.books.find(b => b.id === Number(this.props.match.params.number));

       console.log(this.props)
       const statusArr = [
         {val: 'Not started', id:1},
         {val :'In progress', id:2},
         {val: 'Finished', id:3}]
        
        const buttons = statusArr.map((status, index) => <Button  color="success" disabled={this.book.status === status.id} 
        key={status.id} onClick={this.changeStatus.bind(this, this.book.id, status.id)}>{status.val}</Button>)

        return (
             <Row className="book-item">
                <Col xs="12"> 
                    <h3 className="component-header text-center">{this.book.title}</h3>
                    <p>by {this.book.author}</p> 
                    <p>Books is {statusArr.find(status => status.id === this.book.status).val}</p>
                </Col>                
                <Col xs="12">Here should be some desc, image, rate etc</Col>
                <Col xs="12">Change status to 
                    <ButtonGroup>{buttons}</ButtonGroup>
                </Col>
            </Row>        
        )
    }
}

export default connect(mapStateToProps)(Book);