import Card from '../components/Card';

const RecipeList = () => {
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
};

export default RecipeList;
