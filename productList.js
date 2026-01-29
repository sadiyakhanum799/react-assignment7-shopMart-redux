import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import { filterByCategory } from '../store/slices/productsSlice';

const ProductList= () => {

      const {products} = useSelector((state) => state.products.filteredItem);
      const {selectedCategory} = useSelector((state) =>  state.products.selectedCategory);
      const {loading} = useSelector((state )=> state.product.loading);
      const {dispatch} = useDispatch();

      const {handelCategoryChange} = ( category) => {
      console.log('category changed to  ', category);
      dispatch(filterByCategory(category));
  };
  if (loading ){
      return <div > loading products ....</div>
  }
  return(
      <div style ={{padding:'20px'}}>
            <h2> ShopMart products</h2>
            <div style = {{marginBottom:'20px'}}>
                  <label> filter by category </label>
                  <select
                  value= { selectedCategory}
                  onChange={(e)=> handelCategoryChange(e.target.value)}
                  style={{padding: '8px', fontSize:'16px'}}>
                        <option  value='All '>All category</option>
                        <option  value='electronics '>electronics </option>
                         <option  value='home '> Home</option>
                         <option  value='sports '>Sports </option>

                  </select>
            </div>
<div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(300px , 1fr)',
      gap:'20px'
}}>
      {products.length ===0 ? (
            <p> no products found in this category</p>
      ):(
            products.map(product => (
                  <div key ={ product.id} style={{
                        border:'1px solid #ddd',
                        padding: '16px',
                        borderRadius:'8px',
                        backgroundColor:'#f9f9f9'
                  }}>
                        <img 
                        src={product.image} alt={product.name} style={{width:'100px',height:'200px',objectFit:'cover'}}/>
                        <h3> {product.name}</h3>
                        <p style ={{color:'#666'}}> {product.description}</p>
                        <p style={{fontSize:'18px',fontWeight:'bold',color:'#007bff'}}>{product.price}</p>
                        <p style={{fontSize:'14px',color:'#888'}}>category:{product.category}</p>
                        </div>
            ))
      )}
</div>


      </div>
  );
 }
export default ProductList;