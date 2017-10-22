import React from 'react';
import { Component } from 'react';
import {Row, Col, Progress, Button, UncontrolledCarousel} from 'reactstrap';
import MockedData from '../../MockedData.js';
import {NavLink} from 'react-router-dom';
const booksMocked = new MockedData().getAllBooks();

export default class Home extends Component {
    render() {
        const booksDone = booksMocked.filter(book=>book.status === 3).length;
        const allBooks = booksMocked.length;
        let items = [];
        
        while(items.length <5) {
            items.push({   
                src: require(`../../images/image${items.length+1}.jpg`),
                altText: '',
                caption: ''  
            });
        }

        return (
            <Row>
                <Col xs="12" className="books-carousel">
                    <UncontrolledCarousel items={items} />
                </Col>
                <Col xs="12" className="margin-bottom-10">
                     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita animi, magni repellat. Facilis, assumenda excepturi, reiciendis voluptate repudiandae harum sit eaque maiores explicabo. Obcaecati similique, fugit, quibusdam modi animi vero!
                </Col>
                <Col xs="12" className="margin-bottom-10">
                    <h3 className="text-center">Already read {booksDone/allBooks*100}% of all planned books</h3>
                    <Progress value={booksDone} max={allBooks} />
                </Col>                
                <Col xs="12" className="margin-bottom-10">
                     <Button color="primary">
                            <NavLink className="no-link" to={"/books/create"}>Add new book</NavLink>
                    </Button>                      
                </Col>       
            </Row>
        )
    }
}