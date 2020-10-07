import { Fragment } from 'react';
import App from 'next/app';
import '../styles/index.scss';
import Header from '../components/Header';
import Layout from '../components/Layout';

class MyApp extends App<any> {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Fragment>
        <Header />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Fragment>
    );
  }
}

export default MyApp;
