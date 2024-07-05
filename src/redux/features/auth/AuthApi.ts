import { BaseApi } from "../../api/BaseApi";


const authApi = BaseApi.injectEndpoints({
    endpoints:(builder)=>({
        login:builder.mutation({
            query:(userInfo)=>({
                url:'/auth/login',
                method:'POST',
                body:userInfo,
            })
        })
    })
})

export const { useLoginMutation } = authApi;