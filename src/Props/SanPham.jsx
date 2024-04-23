//rafce
import React from 'react'

const SanPham = (props) => {

    let {item} = props;

    return (
        <div className='card'>
            <img src={item.hinhAnh} alt='...' />
            <div className='card-body'>
                <h3>{item.tenSP}</h3>
                <p>{item.giaBan}</p>
                <button className='btn btn-dark' onClick={() => {
                    props.xemChiTiet(item)
                }}>Xem chi tiết</button>
            </div>
        </div>
    )
}

export default SanPham