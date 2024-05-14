import React, { useEffect, useState } from 'react'

//Custom hook ? 
/*
    custom hook là hook cho ta tự tạo ra (hoặc do các developer khác phát triển): dùng để tái sử dụng lại các logic từ các hook có sẵn trong component
    customhook tương tự component nhưng phần return là giá trị thay vì jsx
*/
import axios from 'axios'
import { httpStore } from '../util/config';
const useGetApi = (url) => {
    const [res,setRes] = useState({});
    const getApi = async () => {
        const ressult = await httpStore.get(url);
        setRes(ressult.data);
    }
    useEffect(() => {
        getApi()
    },[])
  return res;
}

export default useGetApi