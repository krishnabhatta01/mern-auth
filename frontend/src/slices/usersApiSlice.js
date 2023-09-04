import {apiSlice} from './apiSlice';

const USERS_URL = '/api/users';

export const usersApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (data) => ({
                url: `${USERS_URL}/auth`,
                method:'POST',
                body:data,
            })
        })
    })
})

// to export mutations follow export convention of mutation. eg:
// useRegisterMutation, useSigninMutation, use........Mutation
export const {useLoginMutation } = usersApiSlice;