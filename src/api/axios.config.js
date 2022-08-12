import axios from "axios";
import {BASE_URL} from "./base.url";

//独立的axios实例，不会污染axios全局配置，可多次创建
const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 50000
})

//请求拦截
instance.interceptors.request.use(options => {
    return options
}, error => {
    return Promise.reject(error)
})

instance.interceptors.response.use(response => {
        return response
    },
    error => {
        return Promise.reject(error);
    })


class Request {
    constructor() {
        // this.baseUrl = BASE_URL;
    }

    send= function (options) {
        instance(options)
            .then(response => {
                options.callback({
                    type: "success",
                    message: '请求成功',
                    data: response.data
                })
            })
            .catch(error => {
                options.callback({
                    type: "error",
                    message: '请求数据发生错误'
                })
            });
    }

    get= function (config) {
        return this.send(
            Object.assign({}, config, { method:'GET' })
        );
    }

    post= function (config) {
        return this.send(
            Object.assign({}, config, { method:'POST' })
        );
    }


    put = function(config) {
        this.config = config;
        return this.send(
            Object.assign({}, config, { method: "PUT" })
        );
    };
}

export default new Request()