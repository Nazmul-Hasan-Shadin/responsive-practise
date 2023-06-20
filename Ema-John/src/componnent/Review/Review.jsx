import React, { useEffect, useState } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from '../../fakeData';
import ReviewItem from '../ReviewItem/ReviewItem';

const Review = () => {
    const [cart,setCart]=useState([]);
    console.log(cart);
    useEffect(()=>{
        // cart
      const savedCart= getDatabaseCart();
       const productKeys= Object.keys(savedCart); /*array */
      const cartProducts=  productKeys.map(key=> {
       const product=fakeData.find(pd=>pd.key===key);
       product.quantity= savedCart[key];
       return product;
      
      });
     setCart(cartProducts);
      
    },[])
    return (
        <div>
           {
           cart.map(pd=> {
         return   <ReviewItem key={pd.key} product={pd}></ReviewItem>
           })
           }
        </div>
    );
};

export default Review;