import React from 'react';
import {Component} from 'react';
import {Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, InputGroup, InputGroupButton, Input, Button} from 'reactstrap';

export default class BooksFilter extends Component {
    constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    //this.setFilter = this.setFilter.;

    this.state = {
      dropdownOpen: false,
      filter: ''
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  setFilter(item) {
      console.log(item)
      this.setState({
        filter: item
    });
  }
    render() {
         const dropdownItems = this.props.filters.map(item => {
             if (typeof item === 'number') {
                 item = (item === 1) ? 'not started': (item === 2) ? 'in progress': 'read';
             }
              
             return <DropdownItem key={item} onClick={this.setFilter.bind(this, item)}>{item}</DropdownItem>
            });
        return (
             <Row className="book-list-filter" >
                <Col xs="12" sm="6">
                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle caret>
                        Filter by: {this.state.filter}
                        </DropdownToggle>
                        <DropdownMenu>{dropdownItems}</DropdownMenu>
                    </Dropdown>
                </Col>
                <Col xs="12" sm="6">
                    <InputGroup>
                        <Input placeholder="Type word to search" />
                        <InputGroupButton><Button color="secondary">Search</Button></InputGroupButton>
                    </InputGroup>
                </Col>
            </Row>         
        )
    }
}