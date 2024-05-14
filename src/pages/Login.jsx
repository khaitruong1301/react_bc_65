import React from 'react'
import {useFormik} from 'formik'
import axios from 'axios'
import { TOKEN_AUTHOR, setCookie, setDataTextStorage } from '../util/utilFunction';

const Login = () => {
  const userLoginForm = useFormik({
    initialValues:{
      email:'',
      password:''
    },
    onSubmit:  async (values) => {
      // console.log(values)
      //Gọi api để đăng nhập
      const res = await axios.post('https://apistore.cybersoft.edu.vn/api/Users/signin', values);
      console.log(res.data);
      //Lưu vào localstorage
      setDataTextStorage(TOKEN_AUTHOR, res.data.content.accessToken);
      setCookie(TOKEN_AUTHOR,res.data.content.accessToken);
    }
  });
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