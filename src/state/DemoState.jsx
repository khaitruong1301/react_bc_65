//state: state là giá trị thay đổi bởi sự kiện trong component
import React, { useState } from 'react'

const DemoState = () => {
    const [state, setState] = useState(10)
    const [fSize,setFSize] = useState(39)
    console.log('render')
    // state = 1
    return (
        <div className='container'>
            <h3>State</h3>
            <h3>Count: <span className='text-danger'>{state}</span></h3>
            <button className='btn btn-dark' onClick={()=>{
                setState(state + 1)
            }}>+</button>
            <button className='btn btn-dark ms-2'>-</button>
            <hr />
            <p style={{fontSize: fSize }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, alias.</p>
            <button className='btn btn-success' onClick={()=>{
                let newFSize = fSize + 2;
                //Gọi hàm setState để binding giá trị mới 
                setFSize(newFSize)
            }}>zoom in</button>
            <button className='btn btn-success mx-2' onClick={()=>{
                setFSize(fSize-2);
            }}>zoom out</button>
            <hr />
            <h3>Change color car</h3>
            <div className='row'>
                <div className='col-4'>
                    <img className='w-100' src='/img/black-car.jpg' alt='...' />
                </div>
                <div className='col-8'>
                    <button style={{background:'red'}} className='btn mx-2 text-white'>Red color</button>
                    <button style={{background:'gray'}} className='btn mx-2 text-white'>Silver color</button>
                    <button style={{background:'black'}} className='btn mx-2 text-white'>Black color</button>
                </div>
            </div>


        </div>
    )
}

export default DemoState