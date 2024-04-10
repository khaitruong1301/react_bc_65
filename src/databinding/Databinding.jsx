//rafce
import React from 'react'

const Databinding = () => {
    //primitive value
    const fullName = 'Khải cybersoft';
    //reference value
    const prod = {
        id: 1,
        name: 'product 1',
        price: 1000,
        img: 'https://i.pravatar.cc?u=39'
    }
    //function 
    const renderCard = () => {
        //Nội dung return của hàm có thể là :string, number, boolean hoặc jsx (các thẻ html của react hoặc component của react)
        return <div className='card w-25'>
            <img src={prod.img} alt='...' />
            <div className='card-body'>
                <h3>{prod.name}</h3>
                <p>{prod.price}</p>
                <button className='btn btn-dark'>Detail</button>
            </div>
        </div>
    }
    const divBadge = <div className='badge bg-danger'>{prod.name}</div>
    return (
        <div className='container'>
            <span id="full-name" className='badge bg-dark'>
                {fullName}
            </span>
            {renderCard()}
            {divBadge}
        </div>
    )
}

export default Databinding