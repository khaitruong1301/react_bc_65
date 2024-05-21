//rxslice
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { httpStore } from '../../util/config';
import { TOKEN_AUTHOR, USER_LOGIN, getDataJsonStorage, getDataTextStorage, setCookie, setDataJsonStorage, setDataTextStorage } from '../../util/utilFunction';
import axios from 'axios';
import { historyRouter } from '../../main';
import { setLoadingAction } from './loadingReducer';
import { contentMessageUserAdd, setMessageAction, statusMessage } from './messageReducer';

const initialState = {
    userLogin: getDataJsonStorage(USER_LOGIN),
    userList: [
        {
            "email": "aaa@gmail.com",
            "name": "aaa",
            "password": "2222222222",
            "gender": true,
            "phone": "09090909",
            "facebookId": "",
            "userTypeId": "CUSTOMER",
            "deleted": false,
            "avatar": "user-icon.png",
            "favoriteProducts": "[{\"id\":2,\"name\":\"Adidas Prophere Black White\",\"image\":\"https://shop.cyberlearn.vn/images/adidas-prophere-black-white.png\"},{\"id\":17,\"name\":\"Van Old School\",\"image\":\"https://shop.cyberlearn.vn/images/van-old-school.png\"}]"
        },
        {
            "email": "bbb@gmail.com",
            "name": "bbb",
            "password": "123123",
            "gender": false,
            "phone": "09090909",
            "facebookId": "",
            "userTypeId": "CUSTOMER",
            "deleted": false,
            "avatar": "user-icon.png",
            "favoriteProducts": "[]"
        }
    ]
}

const userReducer = createSlice({
    name: 'userReducer',
    initialState,
    reducers: {
        loginAction: (state, action) => {
            state.userLogin = action.payload
        },
        getUserListAction: (state, action) => {
            state.userList = action.payload;
        }
    },extraReducers: (builder) => {
        builder.addCase(addUserActionAsync.fulfilled,(state,action) => {
            console.log('success',state,action)
        });
        builder.addCase(addUserActionAsync.pending,(state,action) => {
            console.log('pending')
        });
        builder.addCase(addUserActionAsync.rejected, (state,action) => {
            console.log('error',state,action)
        })
        
    }
});

export const { loginAction, getUserListAction } = userReducer.actions

export default userReducer.reducer

// -------------------------------------- action thunk ------
export const loginActionApi = (email, password) => {
    //trước khi dispatch chạy
    console.log('trước khi dispatch chạy')
    return async (dispatch) => {
        //Xử lý api
        console.log(email, password)
        const res = await httpStore.post('/api/users/signin', { email, password });
        //Sau khi lấy được dữ liệu dùng tham số dispatch của thunk gửi lên redux (vì đây không phải là component nửa nên không xài được hook useDispatch)
        const actionCreator = loginAction(res.data.content);
        dispatch(actionCreator);
        //lưu cache client
        setDataJsonStorage(USER_LOGIN, res.data.content);
        setDataTextStorage(TOKEN_AUTHOR, res.data.content.accessToken);
        setCookie(TOKEN_AUTHOR, res.data.content.accessToken);
    }
}

export const getUserListActionApi = () => {
    return async (dispatch) => {
        //Xử lý api
        const res = await axios.get('https://apistore.cybersoft.edu.vn/api/users/admin');
        const actionPayload = getUserListAction(res.data.content);
        dispatch(actionPayload);
    }
}

// const userRegister = {
//     name:'',
//     email:'',
//     password:'',
//     phone:'',
//     gender:true
//   }
export const addUserActionApi = (userRegister) => {
    return async (dispatch,getState) => {
    //    const state = getState() //trả về object state
        try {
            //Trước khi gọi api hiển thị loading
            const actionLoading = setLoadingAction(true);
            dispatch(actionLoading)
            const res = await axios.post('https://apistore.cybersoft.edu.vn/api/users/signup', userRegister);//trong khi gọi api
            //sau khi thêm user thành công thì gọi lại logic api của getAll
            const actionThunk = getUserListActionApi()
            dispatch(actionThunk);
            historyRouter.push('/admin/users');
            //Sau khi thêm dữ liệu thành công 
            const actionNotify = {
                type: statusMessage.success,
                content: contentMessageUserAdd.addUserSuccess
            }
            const messageAction = setMessageAction(actionNotify)
            dispatch(messageAction);
        } catch (err) {
            // console.log(err)
            //Sau khi thêm dữ liệu thành công 
            const actionNotify = {
                type: statusMessage.error,
                content: contentMessageUserAdd.addUserFail
            }
            const messageAction = setMessageAction(actionNotify)
            dispatch(messageAction);
        } finally {
            const actionLoadingFinal = setLoadingAction(false);
            dispatch(actionLoadingFinal)
        }
    }
}


//Cách 2 Dùng thư viện từ redux toolkit để tạo ra action async
export const addUserActionAsync = createAsyncThunk(
    'userReducer/addUserActionAsync',
    async (userRegister,{dispatch,getState}) => {
        const actionLoading = setLoadingAction(true);
        dispatch(actionLoading)
        try{
        const res = await axios.post('https://apistore.cybersoft.edu.vn/api/users/signup', userRegister);
        return res.data.content //return về giá trị nào thì ta sẽ nhận được giá trị đó tại fullfil của extrareducer

        }catch (err){
            return Promise.reject(err);
        }finally {
            const actionLoading = setLoadingAction(false);
            dispatch(actionLoading)
            return 'finally' //return về giá trị nào thì ta sẽ nhận được giá trị đó tại fullfil của extrareducer
        }
      
    },
  )