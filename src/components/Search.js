import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  Row, 
  Col,
  Input,
  Button
} from 'reactstrap';
import logo from '../logo.svg';
import './Search.css';

class Search extends Component {
  render() {
    return (
      <Row className="search-bar">
        <Col md={1} className="logo-container">
          <img name="logo" alt="Logo" src={logo} />
        </Col>
        <Col md={6}>
          <Input type="text"
            name="search"
            id="search"
            placeholder="Some search term"
            value={this.props.search}
            onChange={e => this.props.onChange(e)}
          />
        </Col>
        <Col>
          <Input type="select" name="sort" id="sort"
            defaultValue={this.props.sort}
            onChange={e => this.props.onChange(e)}>
            <option>Sort Articles</option>
            {this.props.sortOptions.map((option, idx )=> <option key={idx} value={option.value}>{option.display}</option>)}
          </Input>
        </Col>
        <Col>
          <Button color="danger" onClick={e => this.props.onSearch(e)} >Search</Button>
        </Col>
      </Row>
    );
  }
}

Search.propTypes = {
  search: PropTypes.string,
  sort: PropTypes.string,
  onSearch: PropTypes.func,
  onChange: PropTypes.func,
  sortOptions: PropTypes.array
};

export default Search;
