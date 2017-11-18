import React from 'react';
import {Component} from 'react';
import {Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, InputGroup, InputGroupButton, Input, Button} from 'reactstrap';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../../actions';

const possiblefilters = [
    {val:'Show All', id:0},
    {val: 'Not started', id:1},
    {val :'In progress', id:2},
    {val: 'Finished', id:3}];

class BooksFilter extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
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
      this.props.dispatch(setVisibilityFilter(item));
      
  }
    render() {
         const dropdownItems = this.props.possibleFilters.map(item => <DropdownItem key={item.id} onClick={this.setFilter.bind(this, item.id)}>{item.val}</DropdownItem>);
        return (
             <Row className="book-list-filter" >
                <Col xs="12" sm="6">
                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle caret>
                        Filter by: {this.props.filter.val}
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

export default connect(null)(BooksFilter);