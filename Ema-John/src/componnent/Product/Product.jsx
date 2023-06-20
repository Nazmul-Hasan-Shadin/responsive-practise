import React from 'react';
import { Link } from 'react-router-dom';
// import './Product.css'
const Product = ({product,handleAddProduct,showAddToCart}) => {
const {name,img,price,stock,seller,key}= product;
 
const trunCateString=(str,num)=>{
 if (str.length>num) {
    return str.slice(0,num)
 }
 else{
    return str;
 }


}




    return (
        <div className='product  row'>
   <div className=" card col-sm-12 col-md-6   mb-2" style={{width: '15rem'}}>
   <img src={img} alt="" />
         
         <div className='card-body'>
         <h5 className='product-name card-title'><Link to={'/product/'+key}>{trunCateString(name,100)}</Link></h5>
         <p></p>
         <br />
         <p className='card-text'><small> by:{seller}</small></p>
         <p className='card-text'><small>only {stock} left in stoc -order soon</small></p>
         <p> <strong> price:$ {price}</strong></p>



       {  showAddToCart && <button onClick={()=>handleAddProduct(product)} className='btn btn-danger'>Add To Cart</button>}
       
       
         </div>
    
    
    
    
    </div>      
        </div>
    );
};

export default Product;