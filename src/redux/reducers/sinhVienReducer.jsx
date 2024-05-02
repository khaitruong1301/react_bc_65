// const sinhVienReducer = (state, action) => {
//     return state
// }
//rxslice 
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrSinhVien: [
        {maSinhVien:1,tenSinhVien:'Nguyễn Văn A',email:'Nguyễn văn a ',soDienThoai:'0909090'}
    ],
    
}

const sinhVienReducer = createSlice({
  name: 'sinhVienReducer', //tạo ra tên action {type: 'sinhVienReducer/themSinhVien'}
  initialState,
  reducers: {
    themSinhVienAction: (state,action) => {
        // console.log(action);
        state.arrSinhVien.push(action.payload)
    }
  }
});

export const {themSinhVienAction} = sinhVienReducer.actions

export default sinhVienReducer.reducer