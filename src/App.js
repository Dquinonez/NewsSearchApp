import React, { Component } from 'react';
import { 
  Container
} from 'reactstrap';
import { animateScroll } from 'react-scroll';
import { SORT_OPTIONS } from './constants';
import { getArticles } from './api';
import Search from './components/Search';
import NewList from './components/NewList';
import Pagination from './components/Pagination';

class App extends Component {
  constructor() {
    super();

    this.state = {
      loading: false,
      sort: '',
      search: '',
      articles: [],
      page: 1,
      pageSize: 10,
      error: false
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handlePagination = this.handlePagination.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;

    this.setState(prevstate=> {
      const newState = { ...prevstate };
      newState[name] = value;
      return newState;
    });
  }

  handleSearch(e) {
    e.preventDefault();

    this.setState({
      loading: true
    }, () => {
      this.handleGetArticles();
    });
  }

  handleGetArticles() {
    getArticles(this.state).then(res => {
      console.log(res);
      this.setState(prevState => {
        let newState = prevState;
        newState['loading'] = false;
        newState['totalResults'] = res.data.totalResults;
        newState['articles'] =  res.data.articles;
        newState['pages'] = Math.round(Number(res.data.totalResults) / Number(prevState['pageSize']));
        return newState;
      });
    }).catch(() => {
      this.setState({
        loading: false,
        error: true
      });
    });
  }

  handlePagination(e, direction) {
    e.preventDefault();

    let page = this.state.page;

    if (direction === 'left') {
      page -= 1;
    } else if (direction === 'right') {
      page += 1;
    }

    if (page) {
      this.setState({
        page
      }, () => {
        this.handleGetArticles();
        animateScroll.scrollToTop();
      });
    }
  }

  render() {
    console.log('STATE', this.state);
    return (
      <Container>
        <Search { ...this.state }
          onSearch={this.handleSearch}
          onChange={this.handleChange} 
          sortOptions={SORT_OPTIONS} 
        />
        <NewList { ...this.state } />
        <Pagination { ...this.state } onClick={this.handlePagination} />
      </Container>
    );
  }
}

export default App;