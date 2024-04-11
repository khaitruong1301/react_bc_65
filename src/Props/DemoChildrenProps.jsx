//rafce
import React from 'react'

const DemoChildrenProps = (props) => {
    //props.children: là dữ liệu ở giữa thẻ đóng mở của component
  return (
    <div className='container'>
        {props.children}
    </div>
  )
}

export default DemoChildrenProps