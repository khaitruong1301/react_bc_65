import { useFormik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { themSinhVienAction } from '../../redux/reducers/sinhVienReducer'

const FormSinhVien = () => {
    const dispatch = useDispatch()
    const frmSV = useFormik({
        initialValues: {
            maSinhVien:'',
            tenSinhVien:'',
            email:'',
            soDienThoai:''
        },
        onSubmit: (sinhVien) => {
            // console.log(sinhVien)
            //Cách 1:
            //tạo ra action
            // const action = {
            //     type: 'sinhVienReducer/themSinhVienAction',
            //     payload: sinhVien
            // }
            //Cách 2
            const action = themSinhVienAction(sinhVien);
            console.log(action)
            //dispatch lên reducer
            dispatch(action);
        }
    })


  return (
    <div className='container'>
        <form className='w-50 mx-auto' onSubmit={frmSV.handleSubmit}>
            <h3>Thêm thông tin sinh viên</h3>
            <div className='form-group'>
                <p>Mã sinh viên</p>
                <input className='form-control' name="maSinhVien" onInput={frmSV.handleChange}/>
            </div>
            <div className='form-group'>
                <p>Tên sinh viên</p>
                <input className='form-control' name="tenSinhVien" onInput={frmSV.handleChange}/>
            </div>
            <div className='form-group'>
                <p>Email</p>
                <input className='form-control' name="email" onInput={frmSV.handleChange}/>
            </div>
            <div className='form-group'>
                <p>Số điện thoại</p>
                <input className='form-control' name="soDienThoai" onInput={frmSV.handleChange}/>
            </div>
            <div className='form-group mt-2'>
                <button type='submit' className='btn btn-dark'>Thêm sinh viên</button>
            </div>
        </form>
    </div>
  )
}

export default FormSinhVien