import { Component } from 'react';
import Router from 'next/router';
import Head from 'next/head';

class Home extends Component {
  componentDidMount() {
    Router.push('/recipeList');
  }
  render() {
    return (
      <div>
        <Head>
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
        </Head>
      </div>
    );
  }
}

export default Home;
