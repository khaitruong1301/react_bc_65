//rafce
import React, { useState } from 'react'
import Modal from './Modal';
import ProdList from './ProdList';
const products = [
    { id: 1, name: 'black car', img: './img/black-car.jpg', price: 1000 },
    { id: 2, name: 'red car', img: './img/red-car.jpg', price: 2000 },
    { id: 3, name: 'silver car', img: './img/silver-car.jpg', price: 3000 },
    { id: 4, name: 'Steel car', img: './img/steel-car.jpg', price: 4000 }
];
const ExerciseCarStore = () => {

    const [prodDetail, setProductDetail] = useState({ id: 4, name: 'Steel car', img: './img/steel-car.jpg', price: 4000 })


    return (
        <div className='container'>
            <h3>ExerciseCarStore</h3>
            <Modal prodDetail={prodDetail} />
            <ProdList arrProd={products} setProductDetail={setProductDetail}/>
            {/* <button onClick={()=>{
                setProductDetail({})
            }}> </button> */}
        </div>
    )
}

export default ExerciseCarStore