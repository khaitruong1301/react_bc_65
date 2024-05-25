import { httpStore } from "../../../util/config";

export class UserApi {

    async getAll() {
        const res = await httpStore.get('/api/users/getall');
        return res.data.content;
    }
    //userFormat {
    //     "email": "khaibc65123@gmail.com",
    //     "password": "123",
    //     "name": "khaibc65",
    //     "gender": true,
    //     "phone": "0909090909"
    //   }
    async addUser(newUser) {
        const res = await httpStore.post('/api/users/signup',newUser);
        return res.data.content;
    }

    async getAllPaging(params) {
        let [queryKey,pageIndex] = params.queryKey;
        let pageSize = 20;
        const res = await httpStore.get(`/api/Users/paging?pageIndex=${pageIndex}&pageSize=${pageSize}`);
        // console.log(res.data.content)
        return res.data.content;
    }

}

export const userApi = new UserApi();


// UserApi = {
//     get: () => {

//     }

// }