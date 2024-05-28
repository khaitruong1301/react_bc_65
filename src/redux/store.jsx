import {configureStore} from '@reduxjs/toolkit';
import { cartReducer } from "./reducers/cartReducer";
import sinhVienReducer from './reducers/sinhVienReducer';
import userReducer from './reducers/userReducer';
import loadingReducer from './reducers/loadingReducer';
import messageReducer from './reducers/messageReducer';
import modalReducer from './reducers/modalReducer';

export const store = configureStore({
    reducer: {
        //state ứng dụng lưu tại đây
        number : (state = 1, action) => {
           // console.log('action number')
            if(action.type === 'LIKE_NUMBER') {
                state = action.payload;
            }
            return state;
        },
        fSizeState: (state=20,action) => {
            if(action.type === 'CHANGE_FONT_SIZE') {
                state += action.payload;
            }
            return state;
        },
        arrCommentState: (state = [{fullName:'Mr.Sang',content:'Hello cybersoft !'}] , action) => {
            if(action.type === 'ADD_COMMENT'){
                state.push(action.payload);
            };

            return [...state]//imutable (tính bất biến của redux)
        },
        cartReducer:cartReducer,
        sinhVienReducer,
        userReducer,
        loadingReducer,
        messageReducer,
        modalReducer

        //redux trả về giá trị mới thì component mới render lại (so sánh này là shallow compare)
    }
})