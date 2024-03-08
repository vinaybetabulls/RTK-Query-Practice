import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Product } from '../../common/types'


export const productsApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: `https://dummyjson.com/`
    }),
    reducerPath: 'products',
    endpoints: (builder) => ({
        getProductsList: builder.query<{ products: Product[] }, void>({
            query: () => 'products',
        }),
        getProduct: builder.query<Product, string>({
            query: (id) => {
                console.log({id})
                return {
                    url: `products/${id}`
                }
            }
        })
    })

})

export const { useGetProductsListQuery, useGetProductQuery } = productsApi