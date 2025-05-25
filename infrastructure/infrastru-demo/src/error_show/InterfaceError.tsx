import { useRequest } from 'ahooks';
import React from 'react';
import axios from '../error_handle/axios';

function changeUsername(): Promise<any> {
    return axios.get('/user?ID=12345')
}

const UserInfo = () => {
    // useRequest会捕获错误，不会造成页面崩溃
    const { data, error, loading } = useRequest(changeUsername, {
        onSuccess: () => console.log(),
        onError: (err) => console.log(err)
    });
    console.log(data, error, loading)
    return (
        <div onClick={changeUsername}>
            用户信息
        </div>
    )
}
export default UserInfo;