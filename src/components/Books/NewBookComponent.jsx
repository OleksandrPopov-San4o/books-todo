import React from 'react';
import { Component } from 'react';
import { Row, Col, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { connect } from 'react-redux';
import { addBook } from '../../actions';

class NewBook extends Component {
    constructor () {
        super();
        this.onSubmit = this.onSubmit.bind(this);
        this.title = "";
        this.state = {
            title: '',
            author: ''
        };

    }
    onSubmit(e){
        e.preventDefault();

        this.props.dispatch(addBook(this.state));
        this.state = {
            title: '',
            author: ''
        };
        this.props.history.goBack();
    }
    updateInputValue(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
    render() {
        return (
             <Row className="book-item">
                <Col xs="12"><h2>New book form</h2></Col>
                <Col xs="12">
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label for="exampleEmail">Title</Label>
                            <Input type="text" name="title" id="bookTitle" placeholder="Book title"
                             value={this.state.title} onChange={evt => this.updateInputValue(evt)}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleEmail">Author</Label>
                            <Input type="text" name="author" id="bookAuthor" placeholder="Book Author"
                            value={this.state.author} onChange={evt => this.updateInputValue(evt)}/>
                        </FormGroup>
                        <Button color="success" type="submit" >Submit</Button>
                    </Form>
                </Col>
            </Row>
        )
    }
}
export default connect(null)(NewBook);

