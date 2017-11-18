import React from 'react';
import {Component} from 'react';
import {Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, InputGroup, InputGroupButton, Input, Button} from 'reactstrap';
import { connect } from 'react-redux';
import { setVisibilityFilter, setSearchQuery } from '../../actions';

class BooksFilter extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false,
            filter: '',
            search: this.props.search
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
  
  handleChange(evt) {      
     this.setState({
        search: evt.target.value
    });
    if (!evt.target.value && this.props.search.length) {
           this.props.dispatch(setSearchQuery(''));
      }
  }
  search(str) {
        this.props.dispatch(setSearchQuery(str));
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
                        <Input placeholder="Type word to search" value={this.state.search} onChange={evt => this.handleChange(evt)}/>
                        <InputGroupButton>
                            <Button color="secondary" onClick={this.search.bind(this, this.state.search)}>Search</Button>
                        </InputGroupButton>
                    </InputGroup>
                </Col>
            </Row>         
        )
    }
}

export default connect(null)(BooksFilter);