import React, { useEffect } from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import { TOKEN_AUTHOR, setCookie, setDataTextStorage } from '../util/utilFunction';
import useRedux from '../CustomHook/useRedux';
import { loginAction, loginActionApi } from '../redux/reducers/userReducer';
import { setSubmitModalFunctionAction } from '../redux/reducers/modalReducer';

const Login = () => {
  const {dispatch} = useRedux();

  const userLoginForm = useFormik({
    initialValues:{
      email:'',
      password:''
    },
    onSubmit:  async (values) => {

      // //Lấy được dữ liệu từ api đưa lên redux
      // const action = loginAction(res.data.content);
      //action = {type:'', payload: ...} :action Creator
      //actionThunk = (dispatch) => { //actionThunk 
      // //thực hiện xử lý api (call 10 api)
      // payload 
      // }
      const actionThunk = loginActionApi(values.email,values.password);
      dispatch(actionThunk);

    }
  });

  useEffect(() => {
    //mouting component
    const payload = userLoginForm.handleSubmit;
    const action = setSubmitModalFunctionAction(payload);
    dispatch(action);
  },[]);



  return (
    <div className='container'>
      <form className='w-50 mx-auto' onSubmit={userLoginForm.handleSubmit}>
        <h3>Login</h3>
        <div className='form-group'>
          <label>Email</label>
          <input className='form-control' name="email" id="email" onInput={userLoginForm.handleChange} />
        </div>
        <div className='form-group'>
          <label>password</label>
          <input className='form-control' type="password" name="password" id="password" onInput={userLoginForm.handleChange}  />
        </div>
        <div className='form-group mt-2'>
          <button type='submit' className='btn btn-success'>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login