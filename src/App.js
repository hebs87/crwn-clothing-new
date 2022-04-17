import { categories } from './options/categoriesOptions';
import './categories.styles.scss';

const App = () => {
  return (
    <div className='categories-container'>
      {
        categories.map(({id, title}) => (
          <div
            key={id}
            className='category-container'
          >
            <div
              className='background-image'
            />
            <div
              className='category-body-container'
            >
              <h2>{title}</h2>
              <p>Shop Now</p>
            </div>
          </div>
        ))
      }
    </div>
  );
}

export default App;
