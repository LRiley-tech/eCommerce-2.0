import React from 'react';

const ProductsBody = ({item}) => (
    <div className="d1">
      <img src={item.image} alt={item.alt} />
              <p>{item.cost}</p>
              <p>{item.description}</p>
    </div>
)

export default ProductsBody;