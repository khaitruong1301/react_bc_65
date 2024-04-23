import React, { useState } from 'react'

const FormComponent = () => {
    const [userRegister,setUserRegister] = useState({
        email:'',
        password:'',
        gender:true,
        phone:'',
        fullName:''
    })
    const [errUserRegister,setErrUserRegister] = useState({
        email:'',
        password:'',
        phone:'',
        fullName:''
    })
    console.log('userRegister',userRegister);
    const handleChangeInput = async (e)=>{
        let {name,value} = e.target;
        // let newState = {...userRegister,[name]:value}
        await setUserRegister({
            ...userRegister,
            [name]:value}) //setState render lại giao diện với giá trị state mới
        let errMess = '';
        if (value === ''){
            errMess = `${name} cannot be blank !`
        }else {
            let dataType = e.target.getAttribute('data-type');
            // console.log(dataType)
            if(dataType === 'email') {
                const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9.-]+(?:\.[a-zA-Z0-9.-]+)*$/;
                if(!regexEmail.test(value)){
                    errMess = `${name} is invalid !`;
                }
            }else if (dataType === 'phone') {
                const regexPhoneVNEnhanced = /^(\+84|0)?([3|5|7|8|9]{1})?([0-9]{8})$/;
                if(!regexPhoneVNEnhanced.test(value)){
                    errMess = `${name} is invalid !`;
                }
            }else if(dataType === 'name') {
                const regexTenTiengViet = /^[a-z A-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểễỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪỬỮỰỲỴÝỶỸửữựỳỵỷỹ]{3,}$/u;
                if(!regexTenTiengViet.test(value)) {
                    errMess = `${name} is invalid !`;
                }
            }
        }
        setErrUserRegister({
            ...errUserRegister,
            [name]: errMess
        })
    }
    return (
        <div className='container'>
            <form className='w-50 mx-auto'>
                <h3>Register</h3>
                <div className='form-group'>
                    <label>email</label>
                    <input data-type="email" className='form-control' name="email" id="email" onInput={handleChangeInput} />
                    <p className='text text-danger'>{errUserRegister.email}</p>
                </div>
                <div className='form-group'>
                    <label>fullName</label>
                    <input data-type="name" className='form-control' name="fullName" id="fullName" onInput={handleChangeInput} />
                    <p className='text text-danger'>{errUserRegister.fullName}</p>
                </div>
                <div className='form-group'>
                    <label>password</label>
                    <input className='form-control' type="password" name="password" id="password" onInput={handleChangeInput} />
                    <p className='text text-danger'>{errUserRegister.password}</p>
                </div>
                <div className='form-group my-2'>
                    <label className='me-2'>gender</label>
                        <input type="radio"  className='form-check-input' name="gender" id="Male" value={'true'} checked={userRegister.gender === 'true'} onChange={handleChangeInput}/> 
                        <label htmlFor="Male" className='mx-2'>Male</label>
                        <input type="radio"  className='form-check-input' name="gender" id="Female" value={'false'} checked={userRegister.gender === 'false'} onChange={handleChangeInput}/> 
                        <label className='mx-2' htmlFor="Female">Female</label>
                </div>
                <div className='form-group'>
                    <label>phone</label>
                    <input data-type="phone" className='form-control' name="phone" id="phone" type="number" onInput={handleChangeInput}/>
                    <p className='text text-danger'>{errUserRegister.phone}</p>
                </div>
                <div className='form-group mt-2'>
                    <button className='btn btn-primary' type="submit">Register</button>
                </div>
            </form>
        </div>
  )
}

export default FormComponent