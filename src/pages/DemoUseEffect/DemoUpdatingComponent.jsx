import React, { useEffect, useState } from 'react'
import ChildUpdating from './ChildUpdating'

const DemoUpdatingComponent = () => {
    const [number,setNumber] = useState(1)
    // const [like,setLike] = useState(1);
    const [idProduct,setIdProduct] = useState(1);
    useEffect(()=>{
        console.log('component render')
    },[]);

  return (
    <div className='container'>
        <h3>Parent component</h3>
        <button className='btn btn-dark' onClick={()=>{
            setNumber(number+1);
        }}>{number}</button>
        <button className='btn btn-danger' onClick={()=>{
            setIdProduct(idProduct+1);
        }}>Next product </button>
        <ChildUpdating idProduct={idProduct} number={number} />
    </div>
  )
}

export default DemoUpdatingComponent