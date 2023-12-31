import './category.styles.scss';
import { useContext, useState, useEffect } from 'react';
import { CategoriesContext } from '../../contexts/categories.context';
import { useParams } from 'react-router-dom';
import ProductCard from '../product-card/product-card.component';

const Category =  () =>{
const {category}=useParams();
const {categoriesMap}=useContext(CategoriesContext)
const [products,setProducts]=useState(categoriesMap[category])

useEffect(()=>{
    setProducts(categoriesMap[category])
    
},[category, categoriesMap])



return(
<>
<h2 className='category-title'>{category.toUpperCase()}</h2>
<div className='category-container'> 
{products && 
products.map((product)=>{
 return <ProductCard key={product.id} product={product} />})}
</div>
</>
)   
}
export default Category