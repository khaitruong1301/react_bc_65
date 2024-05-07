import React, { useEffect } from 'react'

const ChildComponent = () => {
    console.log('child component mount')
    useEffect(() => {
        console.log('child useeffect')
    })

  return (
    <div>
        <div className='bg-dark text-white'>
            Child component
        </div>
    </div>
  )
}

export default ChildComponent