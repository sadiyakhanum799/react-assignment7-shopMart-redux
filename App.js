import './App.css';
import ProductList from './components/productList';


function App(){
  return (
    <div className='App'>
       <header style ={{backgroundColor:'#007bff',color:'white',padding:'20px',textAlign:'center'}}>
        <h1>ShopMart </h1>
        <p>Redux-powered E-commerces Demo</p>
       </header>

       <main>
        <ProductList/>
       </main>

    </div>

  );
}
export default App;