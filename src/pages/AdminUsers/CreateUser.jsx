import { useFormik } from 'formik'
import React from 'react'
import { addUserActionApi, addUserActionAsync } from '../../redux/reducers/userReducer';
import { useDispatch } from 'react-redux';

const CreateUser = () => {
  const dispatch = useDispatch()
  const frmRegister = useFormik({
    initialValues: {
      name:'',
      email:'',
      password:'',
      phone:'',
      gender:true
    },
    onSubmit: (values) => {
      console.log(values);
      //Tạo ra action => dispatch action thunk thực thi
      //actionThunk cách 1
      // const actionThunk = addUserActionApi(values);
      // dispatch(actionThunk);
      //actionAsync từ createAsyncThunk
      const actionThunk = addUserActionAsync(values);
      dispatch(actionThunk)
    }
  })



  return (
    <form className='container' onSubmit={frmRegister.handleSubmit}>
      <h3>Create user</h3>
      <div className='w-75 mx-auto'>
        <div className='form-group'>
          <label>name</label>
          <input className='form-control' name="name" onChange={frmRegister.handleChange} />
        </div>
        <div className='form-group'>
          <label>email</label>
          <input className='form-control' name="email"  onChange={frmRegister.handleChange} />
        </div>
        <div className='form-group'>
          <label>password</label>
          <input type='password' className='form-control' name="password"  onChange={frmRegister.handleChange}/>
        </div>
        <div className='form-group me-2 my-2'>
          <label className='me-2'>Gender:</label>
          <label htmlFor="male">Male</label> 
          <input checked id="male" type='radio' className='form-check-input  mx-2' name="gender" value={true}  onChange={frmRegister.handleChange} />
          <label htmlFor="female">Female</label> 
          <input id='female' type='radio' className='form-check-input mx-2' name="gender" value={false}   onChange={frmRegister.handleChange}/>
        </div>
        <div className='form-group'>
          <label>Phone</label>
          <input className='form-control' name="phone"  onChange={frmRegister.handleChange} />
        </div>
        <div className='form-group'>
          <button className='btn btn-dark mt-2' type="submit">Create</button>
        </div>
      </div>
    </form>
  )
}

export default CreateUser