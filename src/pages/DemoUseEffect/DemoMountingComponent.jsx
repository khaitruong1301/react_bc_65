import React, { useEffect, useState } from 'react'
import ChildComponent from './ChildComponent'
import axios from 'axios'
//Mouting: là quá trình react render component lên giao diện

const DemoMountingComponent = () => {
    const [state,setState] = useState(1);
    const [arrProduct,setArrayProduct] = useState([]);
    // useEffect(() => {
    //     console.log('Hàm chạy sau mỗi lần render mount và mỗi lần component update')
    //     getProductApi()
   
    // })
      useEffect(() => {
        console.log('Hàm chạy sau mỗi lần render mount và mỗi lần component update')
        getProductApi()
   
    },[]) //Ý nghĩa tham số thứ 2 của useEffect (Dependencies) dùng để so sánh lần render trước và lần render sau có bị thay đổi giá trị hay không, nếu giá trị này thay đổi thì callback (tham số 1) sẽ thực thi

    console.log('component mount')
    //Hàm gọi api
    const getProductApi = async () => {
        const res = await axios.get('https://shop.cyberlearn.vn/api/Product')
        console.log(res.data.content);
        //Sau khi có dữ liệu từ api trả về đưa vào state
        setArrayProduct(res.data.content);
    }
    return (
        <div className='container'>
            <h3>Parent Component</h3>
            <button className='btn btn-dark' onClick={()=>{
                setState(state + 1);
            }}>{state}</button>
            <ChildComponent />
            <hr />
            <h3>Get Api Product</h3>
            <button className='btn btn-success' onClick={()=>{
                getProductApi()
            }}>Call api</button>
            <h3>Products</h3>
            <div className='row'>
                {arrProduct.map((prod) => {
                    return <div className='col-3 mt-2' key={prod.id}>
                        <div className='card'>
                            <img src={prod.image}  alt={prod.name}/>
                            <div className='card-body'>
                                <h3>{prod.name}</h3>
                                <p>{prod.price}</p>
                            </div>
                        </div>
                    </div>
                })}
            </div>

        </div>
    )
}

export default DemoMountingComponent


