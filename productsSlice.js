import {createSlice} from '@reduxjs/toolkit';

const initialState = {
      item:[],
      filteredItem:[],
      selectedCategory:[],
       loading:false,
       error:null
};
 
const sampleProducts = [
      {
      Id : 1,
      name : 'Wireless Headphone' ,
      price :99.99,
      Category : 'electronics',
      image : 'public/macbook1.jpg',
      description : 'high quality wireless headphone. '
     },
     {
      Id : 2,
      name : 'Coffee Mug' ,
      price :15.99,
      Category : 'home',
      image : 'public/ macbook2.jpg',
      description : 'coffee mug perfect for morning brew .'
      },
      {
      Id : 3,
      name : 'Running shoes ' ,
      price :599.99,
      Category : 'sports',
      image : 'public/macbook3.jpg',
      description : 'comfrtable runnig shoes for all.    '
      },
      {
      Id : 4,
      name : ' Smartphone' ,
      price :999.99,
      Category : 'electronics',
      image : 'public/macbook4.jpg',
      description : ' latest smartphone with amazing camera quality. '
     }
];
const ProductsSlice = createSlice({
    name: 'products',
    initialState: {
      ...initialState,
      item:sampleProducts,
      filteredItems:sampleProducts
    },
    reducers:{
           filterByCategory:(state,action) => {
            console.log(' Filtering by category :',action.payload);
            state.selectedCategory = action.payload;
            if (action.payload === 'all'){
                  state.filteredItems = state.items;
            }else{
                  state.filteredItem = state.items.filter(
                        product => product.category === action.payload
                  );
            }
           },
           addProduct: (state,action)=> {
            console.log('adding product:',action.payload );
            const newProduct = {
                  ...action.payload,
              id:Date.now()
            };
            state.items.push(newProduct);
            if(state.selectedCategory === 'all'|| newProduct.category === state.selectedCategory){
                  state.filteredItem.push(newProduct);

            }
           },
           setLoading:(state,action) => {
            state.loading =action.payload;
           },
           setError: (state,action) => {
            state.error = action.payload;
            state.loading = 'false';
           }  
    }
});

export const{ filterByCategory,addProduct,setLoading,setError} = ProductsSlice.action;

export default ProductsSlice.reducer;

