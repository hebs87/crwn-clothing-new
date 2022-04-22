import { categories } from '../../options/categoriesOptions';
import CategoryItem from '../CategoryItem/CategoryItem';
import './CategoriesDirectory.styles.scss';

const CategoriesDirectory = () => {
  return (
    <div className='categories-directory'>
      {
        categories.map(({id, title, imageUrl}) => (
          <CategoryItem
            key={id}
            title={title}
            imageUrl={imageUrl}
          />
        ))
      }
    </div>
  );
};

export default CategoriesDirectory;
