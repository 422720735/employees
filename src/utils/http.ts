import axios from 'axios'
import {request} from "@/utils/interface";
/**
 * 请求拦截
 * */
axios.interceptors.request.use(async (config) => {
    return config;
}, async (err) => {
    return Promise.reject(err);
});

// @ts-ignore
export function get<T>(requestUrl: string, config?: any): Promise<request.ServerResponse<T>> {
    return axios.get(requestUrl, config)
}

export function post<T>(requestUrl: string, params: any, config?: any): Promise<request.ServerResponse<T>> {
    return axios.post(requestUrl, params, config)
}

const http = {
    get, post,
};
export default http;