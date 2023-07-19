import CategoriesPreview from '../../components/categories-preview/categories-preview.component';
import { Route,Routes,useParams } from 'react-router-dom';
import Category from '../../components/Category/category.component';
import './shop.styles.scss';

const Shop = () => {
  // const { categoriesMap } = useContext(CategoriesContext);//  console.log(categoriesMap)
  return (
    <Routes>
      <Route index element={<CategoriesPreview/>}/>
      <Route path=':category' element={<Category/>}/> 
    </Routes>

  );};

export default Shop;

