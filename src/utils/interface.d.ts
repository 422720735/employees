import { AxiosRequestConfig } from 'axios'

declare namespace request {
    interface ServerResponse<T> {
        // readonly 只读
        // 消息结果
        readonly code: number,
        // 返回数据
        readonly data: T
        // 服务器返回的时间
        readonly time: number
    }
}