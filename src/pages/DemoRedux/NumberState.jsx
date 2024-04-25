import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

const NumberState = () => {
    //useSelector: Dùng để lấy dữ liệu từ redux về component
    const {number,fSizeState} = useSelector((state)=> state)
    //useDispatch là hàm dùng để đưa dữ liệu (action) lên redux
    const dispatch = useDispatch();
    const handleLike = () => {
        //Gửi dữ liệu lên redux -> action = {type:'', payload: ''}
        const action = {
            type:'LIKE_NUMBER', //thuộc tính bắt buộc phải có và không trùng với action khác
            payload: number+ 1 
        };
        //Dùng useDispatch đưa dữ liệu lên redux
        dispatch(action);
    }

  return (
    <div className='container'>
        <h3>Like app</h3>
        <h1>{number} <i className='fa fa-heart fs-1 text-danger'></i></h1>
        <button className='btn btn-danger mt-2' onClick={()=>{
            handleLike()
        }}><i className='fa fa-heart'></i></button>
        <hr />
        <h3>Zoom app</h3>
        <p style={{fontSize:fSizeState}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente aut illum provident expedita et, quo architecto doloribus excepturi dicta placeat.</p>
        <button className='btn btn-primary me-2' onClick={()=>{
            //B1 tạo ra action object có type và payload 
            const action = {
                type: 'CHANGE_FONT_SIZE',
                payload: 1
            }
            //B2 gửi action lên redux xử lý
            dispatch(action)
        }}>+</button>
        <button className='btn btn-primary me-2' onClick={()=>{
            //B1 tạo ra action object có type và payload 
            const action = {
                type: 'CHANGE_FONT_SIZE',
                payload: -1
            }
            //B2 gửi action lên redux xử lý
            dispatch(action)
        }}>-</button>
    </div>
  )
}

export default NumberState