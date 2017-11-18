import React from 'react';
import { Component } from 'react';
import { Row, Col, ButtonGroup, Button} from 'reactstrap';
import { connect } from 'react-redux';
import { changeBookStatus} from '../../actions';

const mapStateToProps = (state, ownProps) => ({
    book: state.books.find(book => book.id ===Number(ownProps.match.params.number)),
    filters: state.visibilityFilter.filters,
  });    

class Book extends Component {
    changeStatus(id, status){
       this.props.dispatch(changeBookStatus(id, status))
    }
 
    render() {
        this.book = this.props.book;
        const statusArr = this.props.filters.filter(status => status.id > 0);        
        const buttons = statusArr.map((status, index) => <Button  color="success" disabled={this.book.status === status.id} 
        key={status.id} onClick={this.changeStatus.bind(this, this.book.id, status.id)}>{status.val}</Button>);

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