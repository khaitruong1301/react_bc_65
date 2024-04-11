//rafce
import React from 'react'

const ProductCard = (props) => { // props.prod => {...}

  // let prod = props.prod;
  let {prod} = props;

  //props là thuộc tính của component dùng để nhận giá trị từ component cha truyền vào
  return (
    <div className='card'>
      <img src={prod.img} alt='...' />
      <div className='card-body'>
        <h3>{prod.name}</h3>
        <p>{prod.price}</p>
      </div>
    </div>
  )
}

export default ProductCard