import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useFormik} from 'formik'
const ChatApp = () => {

    //Lấy dữ liệu từ redux về => useSelector
    const {arrCommentState} = useSelector(state => state)
    console.log(arrCommentState)
    const dispatch = useDispatch();
    //Lấy dữ liệu form
    const frmComment = useFormik({
        initialValues:{
            fullName:'',
            content:''
        },
        onSubmit: (newComment) => {
            console.log(newComment);
            //tạo ra action đưa dữ liệu lên redux
            const action = {
                type:'ADD_COMMENT',
                payload: newComment
            }
            //Dùng dispatch đưa dữ liệu lên redux
            dispatch(action)
        }
    })

  return (
    <div className='container'>
        <h3>Chat app</h3>
        <form className='card' onSubmit={frmComment.handleSubmit}>
            <div className='card-header'>
                {arrCommentState.map((comment,index)=>{
                    return <div className='d-flex mt-2' key={index}>
                    <div className='item-1' style={{width:75,height:75}}>
                        <img className='w-100 h-100' src={`https://i.pravatar.cc?u=${comment.fullName}`}  alt="..."/>
                    </div>
                    <div className='mx-2'>
                        <h3 className='text-danger bold'>{comment.fullName}</h3>
                        <p>{comment.content}</p>
                    </div>
                </div>
                })}
                
            </div>
            <div className='card-body'>
                <div className='form-group'>
                    <p>full name</p>
                    <input className='form-control' name="fullName" onInput={frmComment.handleChange} />
                </div>
                <div className='form-group'>
                    <p>content</p>
                    <input className='form-control' name="content" onInput={frmComment.handleChange}  />
                </div>
                <div className='form-group mt-2'>
                    <button className='btn btn-success' type="submit">Submit</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default ChatApp