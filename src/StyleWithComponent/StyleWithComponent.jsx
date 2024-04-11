//rafce
import React from 'react'
//import css (cách 1): ảnh hưởng toàn website
import '../assets/css/style.css'
//import css module (khi class name là state)
import style from './styleWithComponent.module.css'

const StyleWithComponent = () => {
  return (
    <div className='container'>
        <p className={`${style['text-green']} bg-dark`}>Lorem ipsum dolor sit amet.</p>
        <p className='text-red'>Lorem ipsum dolor sit amet.</p>
        <p style={{fontSize:'20px',paddingTop:'15px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptatem esse quas. Fuga nobis sit veniam voluptate, et maiores repudiandae minus ea, iure, possimus autem ipsum! Atque tenetur veritatis maiores?</p>

        <p style={{color: 'red'}}>Lorem ipsum dolor sit amet.</p>

    </div>
  )
}

export default StyleWithComponent