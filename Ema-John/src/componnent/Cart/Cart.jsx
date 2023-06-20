import React from 'react';
import { Link } from 'react-router-dom';

const Cart = ({cart}) => {

const totalPrice=cart.reduce((total,pd)=> total + pd.price,0)

let shipping=0;
if(totalPrice>35){
    shipping=0;
}
else if(totalPrice>15){
    shipping= 4.99;
}
else if(totalPrice>0){
    shipping=12.99;
}

const tax = totalPrice/10 ;
const grandTotal= totalPrice +shipping +tax;
const formatNumber= num=>{
    const precision= num.toFixed(2);
    return Number(precision);
}
    return (
     
       <div className="row">
           <div className='col-sm-12 col-md-6   '>
            <h4>Order Summary:</h4>
            <p>item order:  {cart.length}</p>
            <p className=''> shipping cost {formatNumber(shipping)}</p>
            <p><small> tax+vat : {formatNumber(tax)}</small></p>
           <p>total : ${formatNumber(grandTotal)}</p>
          <Link to='/review'>  <button  className="btn btn-danger">Review</button></Link>
        </div>
       </div>
     
    );
};

export default Cart;