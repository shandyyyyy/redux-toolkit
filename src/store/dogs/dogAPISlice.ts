import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const DOGS_API_KEY = 'D43EA2C8-3D03-4606-AD0D-629EBC53B57A'

interface Breed {
  id: string
  name: string
  image: {
    url: string
  }
}


export const dogsAPISlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.thedogapi.com/v1',
    prepareHeaders(headers){
      headers.set('x-api-key', DOGS_API_KEY)
      return headers
    }
  }),
  endpoints(builder){
    return {
      fetchBreeds: builder.query<Breed[], number|void>({
        query(limit = 10){
          return `/breeds?limit=${limit}`
        }
      }),
      
    }
  }
})


export const { useFetchBreedsQuery } = dogsAPISlice
