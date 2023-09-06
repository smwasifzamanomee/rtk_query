import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({baseUrl: ' https://api.chatchefs.com/api/billing/v1/payment-details/'}),
    endpoints: (builder) => ({
        getAllPost: builder.query({
            query: () => ({
                headers: {
                     Authorization: `Token 864b95457b85a24968998d10918df50d87e314aa`,
                },

            })
        }),
        createPost: builder.mutation({
            query: () => ({
                method: 'POST',
                body: {
                    "account_number": "123456789",
                },
                headers: {
                    Authorization: `Token 864b95457b85a24968998d10918df50d87e314aa`,
                },

            })

        }),
    }),
});

export const {useGetAllPostQuery, useCreatePostMutation} = postApi;

