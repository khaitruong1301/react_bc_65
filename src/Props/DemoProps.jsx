//rafce
import React from 'react'
import ProductCard from './ProductCard'

const DemoProps = () => {
    const product = {
        id:1,name:'iphone',price:1000,img:'https://picsum.photos/200/200'
    }

  return (
    <div className='container'>
        <h3>Props</h3>
        <p className='abc'></p>
        <input value={'abc'} />
        <div className='w-25'>
            {/* <ProductCard name="Iphone 14" price={1000} /> */}
            <ProductCard prod={product} />
        </div>
        
    </div>
  )
}

export default DemoProps