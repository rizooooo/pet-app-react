import axios, { AxiosRequestConfig } from 'axios';

const config = {
    BASE_API: 'http://localhost:5000/api/v1/'
}

const API = axios.create({
    baseURL: config.BASE_API,
    headers: {
        'Access-Control-Allow-Origin': '*'
    }
});

const BaseService = {
    GET: async (url: string, id?: string, params: any = null) => {
        url = id ? `${url}/${id}` : url;
        const { data } = await API.get(url, { params })
        return data.data;
    },
    POST: async (url: string, data: any) => {
        return await API.post(url, data)
    },
    PUT: async (url: string, data: any, id?: string, config?: AxiosRequestConfig | undefined) => {
        url = id ? `${url}/${id}` : url;
        return await API.put(url, data, config!)
    },
    DELETE: async (url: string, data: any, id?: string, config?: AxiosRequestConfig | undefined) => {
        url = id ? `${url}/${id}` : url;
        return await API.delete(url, data)
    }
}

export default BaseService;