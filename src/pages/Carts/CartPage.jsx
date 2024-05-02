import _ from 'lodash';
import React from 'react'
import {useDispatch, useSelector} from 'react-redux'

const CartPage = () => {
    let arrCart = useSelector(state => state.cartReducer);
    const dispatch = useDispatch();
    arrCart = _.orderBy(arrCart,['id']);
    const handleDelItem = (id) => {
        //Gửi id đó lên reducer thông qua action
        const action = {
            type:'DEL_ITEM',
            payload:id
        }
        dispatch(action);
    }
    const handleChangeQuantity = (id,quantity) => {
        //Tạo ra action
        const action = {
            type:'CHANGE_QUANTITY',
            payload:{
                id,
                quantity
            }
        }
        //dispatch action
        dispatch(action);
    }
  return (
    <div className='container'>
        <h3>Cart page</h3>
        <table className='table'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>img</th>
                    <th>price</th>
                    <th>quantity</th>
                    <th>total</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {arrCart.map((itemCart,index)=>{
                    return <tr key={index}>
                    <td>{itemCart.id}</td>
                    <td><img src={itemCart.img} alt='...' width={50} height={50} /></td>
                    <td>
                        {itemCart.price}
                    </td>
                    <td>
                        <button className='me-2 btn btn-success' onClick={()=>{
                            handleChangeQuantity(itemCart.id,1)
                        }}>+</button>
                        <input min={1} className='form-control d-inline' style={{
                            width:100,
                        }} value={itemCart.quantity} onChange={(e)=>{
                            let {value} = e.target;
                            const regexNumber =  /^[1-9][0-9]?$/

                            if(regexNumber.test(value)){
                                const action = {
                                    type: 'CHANGE_INPUT_QUANTITY',
                                    payload: {
                                        id: itemCart.id,
                                        quantity: Number(value)
                                    }
                                }
                                dispatch(action)
                            } else {
                                alert('Nhập từ 1 -> 99')
                            }
                        }}/>
                        <button className='ms-2 btn btn-success' onClick={()=>{
                            handleChangeQuantity(itemCart.id,-1)

                        }}>- </button>
                    </td>
                    <td>
                        {itemCart.quantity * itemCart.price}
                    </td>
                    <td>
                        <button className='btn btn-danger' onClick={()=>{
                            handleDelItem(itemCart.id)
                        }}>
                            <i className='fa fa-trash'></i>
                        </button>
                    </td>
                </tr>
                })}
            </tbody>
        </table>

    </div>
  )
}

export default CartPage