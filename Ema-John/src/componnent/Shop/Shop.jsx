import React, { useState } from 'react';
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import './Shop.css'
import Cart from '../Cart/Cart';
import { addToDatabaseCart } from '../../utilities/databaseManager';
const Shop = () => {
    const first10= fakeData.slice(0,10);
 const [products,setProduct]= useState(first10);
 const [cart,setCart]= useState([])
 
 const handleAddProduct=(product)=>{

    const newCart= [...cart, product];
    setCart(newCart);
    const sameProduct = newCart.filter(pd=>pd.key==product.key);
    const count=sameProduct.length;
    addToDatabaseCart(product.key,count)



 }


    return (
        <div className='d-flex   shop-container'>
     <div className=" col-sm-8 col-md-6   product-container">
     {
        products.map((product)=>{

         return <Product key={product.key}  
         handleAddProduct={handleAddProduct}
         showAddToCart={true}
         product={product}> </Product>
        })
    }

     </div>

      {/*        cart  */}
         <div className="col-sm-4 col-md-6 shop-container">

              <Cart cart={cart}></Cart>

         </div>


        
        </div>
        
    );
};

export default Shop;