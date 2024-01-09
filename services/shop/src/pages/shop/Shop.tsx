import { Link } from 'react-router-dom';
import { shopRoutes } from '@packages/shared/src/routes/shop';

const Shop = () => {
  return (
    <>
      <h1>Shop</h1>
      <div>
        <Link to={ shopRoutes.second }>go to second</Link>
      </div>
    </>    
  )
};

export default Shop;
