//Thư viện react router dom giúp chia các component thành page 
import {BrowserRouter,Routes,Route, Navigate, unstable_HistoryRouter as HistoryRouter} from 'react-router-dom';
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
//Setup redux
import {store} from './redux/store'
import {Provider} from 'react-redux'
import NumberState from './pages/DemoRedux/NumberState'
import ChatApp from './pages/DemoRedux/ChatApp'
import CartPage from './pages/Carts/CartPage'
import ProductList from './pages/Products/ProductList'
import TableListSinhVien from './pages/QuanLySinhVien/TableListSinhVien'
import FormSinhVien from './pages/QuanLySinhVien/FormSinhVien'
import DemoState from './state/DemoState'
import DemoMountingComponent from './pages/DemoUseEffect/DemoMountingComponent'
import DemoUpdatingComponent from './pages/DemoUseEffect/DemoUpdatingComponent'
import DemoUnmountComponent from './pages/DemoUseEffect/DemoUnmountComponent'
import DemoUseCallback from './pages/Demo_UseCallback_UseMemo/DemoUseCallback'
import DemoUseMemo from './pages/Demo_UseCallback_UseMemo/DemoUseMemo'
import Detail_UseParam from './pages/Detail_UseParam'
import DemoUseHistory from './pages/Hook_Router/DemoUseMatch'
import DemoUseMatch from './pages/Hook_Router/DemoUseMatch'
import DemoUseSearchParam from './pages/Hook_Router/DemoUseSearchParam'
import DemoUseRef from './pages/Demo_UseCallback_UseMemo/DemoUseRef'
//Cấu hình biến để chuyển hướng trang
import {createBrowserHistory} from 'history';
import DemoAntd from './components/DemoAntd';
import AdminTemplate from './templates/AdminTemplate';
import UserList from './pages/AdminUsers/UserList';
import DetailUser from './pages/AdminUsers/DetailUser';
import CreateUser from './pages/AdminUsers/CreateUser';
import Loading from './components/Loading';
import useRedux from './CustomHook/useRedux';
import MessageNotify from './components/MessageNotify';



//history tương tự navigate dùng để chuyển hướng trang ở 1 trang không phải component
export const historyRouter = createBrowserHistory();



const App = () => {

    const {state} = useRedux();
    console.log(state)
  return (
    <HistoryRouter history={historyRouter}>
      <Routes>
        <Route path='' element={<HomeTemplate />}>
          <Route index element={<Home />}></Route>
          <Route path='state' element={<DemoState />}></Route>
          <Route path='home' element={<Home />}></Route>
          <Route path='home' element={<Home />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='contact' element={<Contact />}></Route>
          <Route path='register' element={<Register />}></Route>
          <Route path='login' element={<Login />}></Route>
          <Route path='forgot' element={<ForgotPass />}></Route>
          <Route path='form' element={<FormComponent />}></Route>
          <Route path='formik' element={<FormikDemo />}></Route>
          <Route path='number-state' element={<NumberState />}></Route>
          <Route path='chat-app' element={<ChatApp />}></Route>
          <Route path='cart-page' element={<CartPage />}></Route>
          <Route path='product-list' element={<ProductList />}></Route>
          <Route path='table-list-sinh-vien' element={<TableListSinhVien />}></Route>
          <Route path='form-sinh-vien' element={<FormSinhVien />}></Route>
          <Route path='useEffect-mouting' element={<DemoMountingComponent />}></Route>
          <Route path='useEffect-updating' element={<DemoUpdatingComponent />}></Route>
          <Route path='useEffect-unmount' element={<DemoUnmountComponent />}></Route>
          <Route path='useCallBack' element={<DemoUseCallback />}></Route>
          <Route path='useMemo' element={<DemoUseMemo />}></Route>
          <Route path='detail'>
            <Route path=':idProduct' element={<Detail_UseParam />}></Route>
          </Route>
          <Route path='use-history' element={<DemoUseHistory />}></Route>
          <Route path='use-match-param' element={<DemoUseMatch />}></Route>
          <Route path='use-search-param' element={<DemoUseSearchParam />}></Route>
          <Route path='use-ref' element={<DemoUseRef />}></Route>
          <Route path='demo-antd' element={<DemoAntd />}></Route>

        </Route>
        <Route path='user' element={<UserTemplate />}>
          <Route path='profile' element={<Profile />}></Route>
          <Route path='history' element={<HistoryOrder />}></Route>
          <Route path='change-password' element={<ChangePassword />}></Route>
          <Route path='*' element={<Navigate to="/user/profile" />}></Route>
        </Route>
        
        {/* <Route path='*' element={<Page404 />}></Route> */}
      </Routes>

      <Routes>
        <Route path='admin' element={<AdminTemplate />}>
            <Route path='users' element={<UserList />}></Route>
            <Route path='user-detail'>
              <Route path=':id' element={<DetailUser />}></Route>
            </Route>
            <Route path='user-create' element={<CreateUser />}></Route>
        </Route>
      </Routes>

      {state.loadingReducer.isLoading && <Loading /> } 
      <MessageNotify />
    </HistoryRouter>
  )
}

export default App