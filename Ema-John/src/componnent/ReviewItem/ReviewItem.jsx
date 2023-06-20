import React from 'react';

const ReviewItem = ({product}) => {
   

    return (
        <div>
        <h3>{product.name}</h3>
        <p>quantity : {product.quantity}</p>
        <button className="btn btn-success">Remove</button>

        </div>
    );
};

export default ReviewItem;