import React from 'react'
import ProdItem from './ProdItem'

const ProdList = (props) => {

    const {arrProd,setProductDetail} = props
    const renderProd = () => {

    }

  return (
    <div>
        <div className='row'>
            {arrProd.map((item)=>{
                return <div className='col-3 mt-2' key={item.id}>
                    <ProdItem item={item} setProductDetail={setProductDetail}/>
                    {/* <button onClick={()=>{
                        setProductDetail(item)
                    }}>xem chi tiết</button> */}
                </div>
            })}
        </div>
     

    </div>
  )
}

export default ProdList