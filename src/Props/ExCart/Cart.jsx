import React from 'react'

const Cart = (props) => {
    const {arrProductCart,delItem,changeQuantity} = props;
  return (
    <div>
        
        <table className='table'>
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>img</th>
                    <th>price</th>
                    <th>quantity</th>
                    <th>total</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {arrProductCart.map((itemCart,index)=>{
                    return <tr key={index}>
                    <td>{itemCart.id}</td>
                    <td>{itemCart.name}</td>
                    <td><img src={itemCart.img} alt='...' width={50} /> </td>
                    <td>{itemCart.price}</td>
                    <td>
                        <button className='btn btn-dark mx-2' onClick={()=>{
                            changeQuantity(itemCart.id,1)
                        }}>+</button>
                        {itemCart.quantity}
                        <button className='btn btn-dark mx-2' onClick={()=>{
                            changeQuantity(itemCart.id,-1)
                        }}>-</button>
                    </td>
                    <td>{itemCart.price * itemCart.quantity}</td>
                    <td>
                        <button className='btn btn-danger' onClick={()=>{
                            delItem(itemCart.id)
                        }}>
                            <i className='fa fa-trash'></i>
                        </button>
                    </td>
                </tr>
                })}
                
            </tbody>
        </table>    
        {/* <hr /> */}
    </div>
  )
}

export default Cart