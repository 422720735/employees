import axios from 'axios';
/**
 * 请求拦截
 * */
axios.interceptors.request.use(async (config) => {
    return config;
}, async (err) => {
    return Promise.reject(err);
});
// @ts-ignore
export function get(requestUrl, config) {
    return axios.get(requestUrl, config);
}
export function post(requestUrl, params, config) {
    return axios.post(requestUrl, params, config);
}
const http = {
    get, post,
};
export default http;
//# sourceMappingURL=http.js.map