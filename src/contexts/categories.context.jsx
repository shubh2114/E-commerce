import { createContext, useState , useEffect} from 'react';

// import SHOP_DATA from '../shop-data.js';
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils.js';

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  // this will add the data to the database....
  // useEffect(()=>{
  //   addCollectionAndDocument('categories',SHOP_DATA)
  // },[])

  useEffect(()=>{
    const getCategoriesMap = async ()=>{
     const categoryMap = await getCategoriesAndDocuments()
    //  console.log(categoryMap)
     setCategoriesMap(categoryMap)
    }
    getCategoriesMap()
  },[])

  
  const value = {categoriesMap};
  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};