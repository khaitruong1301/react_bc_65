import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import useRedux from '../CustomHook/useRedux'

const HeaderHome = () => {
    //cần lấy state login về
    const {state,dispatch} = useRedux();
    const {userLogin} = state.userReducer;
    console.log(state.userReducer.userLogin);

    const renderLoginLink = () => {
        if(userLogin) {
            //nếu có dữ liệu trên store thì là đăng nhập rồi
            return <NavLink className={({isActive})=> isActive ? 'nav-link bg-white text-dark' : 'nav-link' } to={'/user/profile'}>Hello {userLogin.email}</NavLink>
        }
        //Chưa có dữ liệu trên store thì là link login
        return <NavLink className={({isActive})=> isActive ? 'nav-link bg-white text-dark' : 'nav-link' } to="/login">Login</NavLink>
    }

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
                        <NavLink className={({isActive})=> isActive ? 'nav-link bg-white text-dark' : 'nav-link' } to="/demo-antd" aria-current="page">Demo antd <span className="visually-hidden">(current)</span></NavLink>
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
                        {renderLoginLink()}
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
                    <li className="nav-item">
                        <NavLink className={({isActive})=> isActive ? 'nav-link bg-white text-dark' : 'nav-link' } to="/demo-hoc">HOC</NavLink>
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
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Lifecycle - hook</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <NavLink className="dropdown-item" to="/useEffect-mouting">Mouting component</NavLink>
                            <NavLink className="dropdown-item" to="/useEffect-updating">Updating component</NavLink>
                            <NavLink className="dropdown-item" to="/useEffect-unmount">Unmount component</NavLink>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hook tối ưu render</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <NavLink className="dropdown-item" to="/useCallBack">UseCallback</NavLink>
                            <NavLink className="dropdown-item" to="/useMemo">useMemo</NavLink>
                            <NavLink className="dropdown-item" to="/use-ref">useRef</NavLink>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Hook Router</a>
                        <div className="dropdown-menu" aria-labelledby="dropdownId">
                            <NavLink className="dropdown-item" to="/use-match-param">useMatch</NavLink>
                            <NavLink className="dropdown-item" to="/use-search-param">useSearchParam</NavLink>
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