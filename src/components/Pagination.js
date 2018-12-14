import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  Row,
  Button
} from 'reactstrap';
import './Pagination.css';

class Pagination extends Component {
  renderPages() {
    if (this.props.pages) {

      let pagingOptions = [];

      if (this.props.page > 1) {
        pagingOptions.push([<Button key={1} color="link" className="btn" onClick={e => this.props.onClick(e, 'left')}>Previous</Button>])
      }

      if (this.props.page < this.props.pages) {
        pagingOptions.push([<Button key={2} color="link" className="btn" onClick={e => this.props.onClick(e, 'right')}>Next</Button>])
      }

      return pagingOptions;
    }
  }

  render() {
    if (this.props.pages && !this.props.loding) {
      return (
        <Row className="pagination-bar">
          <div className="pagination">
            {this.renderPages()}
          </div>
        </Row>
      );
    }

    return null;
  }
}

Pagination.propTypes = {
  pages: PropTypes.number,
  page: PropTypes.number,
  onClick: PropTypes.func,
  loading: PropTypes.bool
};

export default Pagination;