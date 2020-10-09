import { Fragment } from 'react';
import App from 'next/app';
import '../styles/index.scss';
import Header from '../components/Header';
import Layout from '../components/Layout';
import { ApolloProvider } from '@apollo/client';
import apolloClient from '../graphql/client';

class MyApp extends App<any> {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Fragment>
        <Header />
        <Layout>
          <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
          </ApolloProvider>
        </Layout>
      </Fragment>
    );
  }
}

export default MyApp;
