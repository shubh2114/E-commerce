import { CategoriesContext } from '../../contexts/categories.context';
import CategoryPreview from '../category-preview/category-preview.component';
import { useContext } from 'react';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
//  console.log(categoriesMap)
  return (
    <>
    {
      Object.keys(categoriesMap).map((title)=>{
      const products=categoriesMap[title]
      return <CategoryPreview title={title} products={products} key={title}/>

      })}
   </>
  );};

export default CategoriesPreview;

