import { Component } from 'react';
import Card from '../components/Card';

class Home extends Component {
  render() {
    return (
      <div className='cardRow'>
        <div className='cardColumn'>
          <Card title='Royal Blue' imageId='1'></Card>
        </div>
        <div className='cardColumn'>
          <Card title='Royal Blue' imageId='1'></Card>
        </div>
        <div className='cardColumn'>
          <Card title='Royal Blue' imageId='1'></Card>
        </div>
        <div className='cardColumn'>
          <Card title='Royal Blue' imageId='1'></Card>
        </div>
      </div>
    );
  }
}

export default Home;
