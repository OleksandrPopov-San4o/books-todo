import React from 'react';
import { Component } from 'react';
import {ListGroup, ListGroupItem, Row, Col} from 'reactstrap';
import StatusFilter from '../Filter/StatusFilterComponent.jsx';


export default class UserLists extends Component {
render() {
    {this.props.status===1 ? 'not started': this.props.status===2? 'in progress': 'read'}
            
       
        return (
            <div className="user-list">
                <Row>
                    <Col xs="12"> 
                        <h3 className="component-header">My list</h3>
                    </Col>                   
                    <Col xs="12">
                        <StatusFilter filters={[1,2,3]} />                                                       
                        <ListGroup className="book-list-items"></ListGroup>
                    </Col>
                </Row>
            </div>           
        );
    }
}