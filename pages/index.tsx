import { Component } from 'react';
import Router from 'next/router';

class Home extends Component {
  componentDidMount() {
    Router.push('/recipeList');
  }
  render() {
    return null;
  }
}

export default Home;
