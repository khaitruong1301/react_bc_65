import React from 'react'
import { NavLink } from 'react-router-dom'

const HeaderHome = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <NavLink className="navbar-brand" to="/">React hook</NavLink>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink className={({isActive})=> isActive ? 'nav-link bg-white text-dark' : 'nav-link' } to="/" aria-current="page">Home <span className="visually-hidden">(current)</span></NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink style={({isActive}) => isActive ? {border:'1px solid orange'} : {} } className={({isActive})=> isActive ? 'nav-link bg-white text-dark' : 'nav-link' } to="/about">About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive})=> isActive ? 'nav-link bg-white text-dark' : 'nav-link' } to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive})=> isActive ? 'nav-link bg-white text-dark' : 'nav-link' } to="/register">Register</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive})=> isActive ? 'nav-link bg-white text-dark' : 'nav-link' } to="/login">Login</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive})=> isActive ? 'nav-link bg-white text-dark' : 'nav-link' } to="/form">Form Demo</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive})=> isActive ? 'nav-link bg-white text-dark' : 'nav-link' } to="/formik">Formik</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className={({isActive})=> isActive ? 'nav-link bg-white text-dark' : 'nav-link' } to="/product-list">Products</NavLink>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Redux demo</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <NavLink className="dropdown-item" to="/number-state">Number state</NavLink>
                            <NavLink className="dropdown-item" to="/chat-app">Chat app</NavLink>
                            <NavLink className="dropdown-item" to="/form-sinh-vien">Form Sinh Vien</NavLink>
                            <NavLink className="dropdown-item" to="/table-list-sinh-vien">Table list sinh vien</NavLink>
                        </div>
                    </li>
                    
                </ul>
                <form className="d-flex my-2 my-lg-0">
                <NavLink className="text-white mx-2" to="/cart-page">
                   (1) <i className='fa fa-cart-plus fs-1'></i>

                </NavLink>
                    <input className="form-control me-sm-2" type="text" placeholder="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
                        Search
                    </button>
                </form>
            </div>
        </nav>


    )
}

export default HeaderHome