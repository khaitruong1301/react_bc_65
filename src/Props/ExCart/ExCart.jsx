import React, { useState } from 'react'
import Cart from './Cart'
import ProductListItem from './ProductListItem'

const products = [
    { id: 1, name: 'black car', img: './img/black-car.jpg', price: 1000 },
    { id: 2, name: 'red car', img: './img/red-car.jpg', price: 2000 },
    { id: 3, name: 'silver car', img: './img/silver-car.jpg', price: 3000 },
    { id: 4, name: 'Steel car', img: './img/steel-car.jpg', price: 4000 }
];

const ExCart = () => {
    //useState(001)
    let [arrProductCart, setArrProductCart] = useState([
        { id: 4, name: 'Steel car', img: './img/steel-car.jpg', price: 4000 ,quantity:5},
        { id: 3, name: 'silver car', img: './img/silver-car.jpg', price: 3000,quantity:2 },
    ])

    //Định nghĩa logic thay đổi state tại component chứa state
    const addToCart = (prodClick) => {
        //Thêm 1 thuộc tính vào prodClick tạo ra product trong giỏ hàng có thêm số lượng
        let prodCart = {...prodClick,quantity:1}
        //Kiểm tra sản phẩm đã có trong giỏ hàng hay chưa
        let prod = arrProductCart.find(p => p.id === prodClick.id);
        if(prod){ //Nếu object có chứa id đó trong giỏ hàng
            prod.quantity += 1 //Tăng số lượng
        }else {
            arrProductCart.push(prodCart) //Chưa có thì thêm vào
        }
        //Clone object reference value (để hàm setState hiểu là state mới)
        arrProductCart = [...arrProductCart]
        //Cập nhật lại giỏ hàng
        setArrProductCart(arrProductCart)
    }

    const delItem = (idClick) =>{
        // console.log(idClick)
        let index = arrProductCart.findIndex(p => p.id === idClick);
        if(index != -1){
            arrProductCart.splice(index,1);
        }
        //Cập nhật lại giỏ hàng
        setArrProductCart([...arrProductCart])
    }
    const changeQuantity = (idClick,num) => {
        //Dựa vào id tìm ra sản phẩm
        let prodCart = arrProductCart.find(p => p.id === idClick);
        if(prodCart){
            prodCart.quantity += num;
        }
        //Cập nhật lại giỏ hàng = hàm setState
        setArrProductCart([...arrProductCart])
    }


    return (
        <div className='container'>
            <h3>Shopping cart</h3>
            <Cart arrProductCart={arrProductCart} delItem={delItem} changeQuantity={changeQuantity}/>
            <h3>Product list</h3>
            <ProductListItem products={products} addToCart={addToCart} />
        </div>
    )
}

export default ExCart