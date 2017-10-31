import React from 'react';
import { Component } from 'react';
import { Switch, Route, NavLink} from 'react-router-dom';
import {ListGroup, ListGroupItem, Button, Row, Col} from 'reactstrap';
import BookListItem from './BookListItemComponent.jsx';
import Book from './BookComponent.jsx';
import NewBook from './NewBookComponent.jsx'
import StatusFilter from '../Filter/StatusFilterComponent.jsx';
import { connect } from 'react-redux';



require('./booklist.css');

const mapStateToProps = (state) => ({
  items: state
  
})

class ExactList extends Component{
     render() {
        const listItems = this.props.items.books.map((book, index) =>  
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
                        <StatusFilter filter={this.props.items.visibilityFilter}/>                                                                           
                        <ListGroup className="book-list-items">{listItems}</ListGroup>
                    </Col>
                </Row>
        </div> ); 
     }     
}


class BooksList extends Component {
    render() {
       
        return (
             <Switch>
                <Route exact path='/books/' render={(props) => <ExactList {...props} items={this.props.items}/>}/>             
                <Route path='/books/create'  component={NewBook}/>
                <Route path='/books/:number'  component={Book}/>                
            </Switch>                
        );
    }
}

export default connect(mapStateToProps)(BooksList);