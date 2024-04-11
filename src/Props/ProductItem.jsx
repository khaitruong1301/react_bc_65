//rafce
import React from 'react'

/*
    Khác biệt giữa state và props
    + state là giá trị thay đổi trên giao diện được quản lý bởi hàm setState. state có thể gán lại được qua phương thức setState
    +props là tham số có sẵn của component và không thể gán lại được
*/

const ProductItem = (props) => {
    let {sanPham} = props;
    //props không thể gán lại giá trị
  
  return (
    <div className='card'>
        <img src={sanPham.image} alt='...' />
        <div className='card-body'>
            <h3>{sanPham.name}</h3>
            <p>{sanPham.price}</p>
            <p>{sanPham.shortDescription}</p>
            <button className='btn btn-dark'>Detail</button>
        </div>
    </div>
  )
}

export default ProductItem