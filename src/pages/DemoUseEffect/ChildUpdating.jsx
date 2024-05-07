import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ChildUpdating = (props) => {
    const [productDetail,setProductDetail] = useState({})

    const getProductDetai = async ()=> {
        const res = await axios.get(`https://shop.cyberlearn.vn/api/Product/getbyid?id=${props.idProduct}`);
        setProductDetail(res.data.content);
    }
    useEffect(()=>{
        console.log('child render');
        getProductDetai();
    },[props.idProduct]);
    console.log('child render',props.idProduct)
    console.log('child render',props.number)
  return (
    <div>
        <div className='bg-dark text-white p-2 mt-2'>
            child component updating {props.like}

            <div className='card w-25'>
                <img className='w-100' src={productDetail.image} alt={productDetail.name} />
            </div>

        </div>
    </div>
  )
}

export default ChildUpdating