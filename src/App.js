import Basket from './components/Basket';
import Header from './components/Header';
import { useEffect, useState } from 'react';
import Product from './components/Product';


function App() {

  const [products, setProducts] = useState([]);
  const [cartItem, setCartItem] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      console.log(data);
      setProducts(data);
    }
    fetchProduct();
  }, []);

  const handleAdd = (product) => {
    console.log(product.id)
    console.log(product.title)
    const exist = cartItem.find((x) => x.id === product.id);
    if (exist) {
      setCartItem(
        cartItem.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x)
      )
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }])
    }
  }


  const handleRemove = (product) => {
    const exist = cartItem.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItem(cartItem.filter((x) => x.id !== product.id));
    } else {
      setCartItem(
        cartItem.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  }

  return (
    <div className="App">
      <Header cartItem={cartItem}/>
      <div className="row">
        <Product products={products} handleAdd={handleAdd} />
        <Basket cartItem={cartItem} handleAdd={handleAdd} handleRemove={handleRemove} />
      </div>

    </div>
  );
}

export default App;
