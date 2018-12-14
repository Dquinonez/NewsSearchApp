import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { 
  Row,
  Alert,
  Col,
} from 'reactstrap';
import './NewList.css';

class NewList extends Component {
  renderArticles () {
    if (this.props.articles && this.props.articles.length) {
      return this.props.articles.map((article, idx) => {
        return (
          <Col md={6} key={idx} className="article-box">
            <div><img alt={article.title} src={article.urlToImage} /></div>
            <h4>{article.title}</h4>
            <p>{article.description}</p>
            <div><a href={article.url} target="blank" className="link-read-more">Read more</a></div>
          </Col>
        );
      });
    }

    return null;
  }

  render() {
    if (this.props.loading) {
      return <Alert color="info" className="result-alert">Loading articles, plase wait...</Alert>
    }

    if (this.props.error) {
      return <Alert color="danger" className="result-alert">There was an error while trying to get the articles, please try again.</Alert>
    }

    if (this.props.totalResults === 0) {
      return <Alert color="warning" className="result-alert">Results not found for this search.</Alert>
    }

    return (
      <Row>
        {this.renderArticles()}
      </Row>
    );
  }
}

NewList.propTypes = {
  articles: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.bool,
  totalResults: PropTypes.number
};

export default NewList;
