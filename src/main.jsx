import ReactDOM from 'react-dom/client'
import './assets/scss/index.scss'
//Thư viện react router dom giúp chia các component thành page 
import {BrowserRouter,Routes,Route, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Register from './pages/Register'
import Login from './pages/Login'
import HeaderHome from './components/HeaderHome'
import HomeTemplate from './templates/HomeTemplate'
import UserTemplate from './templates/UserTemplate'
import Profile from './pages/Profile'
import HistoryOrder from './pages/HistoryOrder'
import ChangePassword from './pages/ChangePassword'
import Page404 from './pages/Page404'
import ForgotPass from './pages/ForgotPass'
import FormComponent from './pages/FormComponent/FormComponent'
import FormikDemo from './pages/FormComponent/FormikDemo'
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
     
      <Routes>
        <Route path='' element={<HomeTemplate />}>
          <Route index element={<Home />}></Route>
          <Route path='home' element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='contact' element={<Contact />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='forgot' element={<ForgotPass />}></Route>
          <Route path='form' element={<FormComponent />}></Route>
          <Route path='formik' element={<FormikDemo />}></Route>
        </Route>
        <Route path='user' element={<UserTemplate />}>
          <Route path='profile' element={<Profile />}></Route>
          <Route path='history' element={<HistoryOrder />}></Route>
          <Route path='change-password' element={<ChangePassword />}></Route>
          <Route path='*' element={<Navigate to="/user/profile" />}></Route>
        </Route>
        <Route path='*' element={<Page404 />}></Route>

      </Routes>
    </BrowserRouter>
)

//window: ctrl + space
//mac: option + esc


