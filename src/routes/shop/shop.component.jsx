import { useContext ,Fragment} from 'react';
import ProductCard from '../../components/product-card/product-card.component';
import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../../components/category-preview/category-preview.component';

import './shop.styles.scss';

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
//  console.log(categoriesMap)
  return (
    <div>
    {
      Object.keys(categoriesMap).map((title)=>{
      const products=categoriesMap[title]
      return <CategoryPreview title={title} products={products}/>

      })}
   </div>
  );};

export default Shop;

