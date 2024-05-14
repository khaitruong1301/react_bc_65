import React from 'react'
import { useLocation } from 'react-router-dom'

const DemoUseMatch = () => {
  const location = useLocation()
  console.log(location.search)
  // const match = useMatch(location)
  // console.log(match)
  


  return (
    <div>DemoUseMatch</div>
  )
}

export default DemoUseMatch