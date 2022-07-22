import axios from "axios";
impotr { Message } from 'element-UI'
const request = axios.create({
  baseURL:'http://liufusong.top:8899/'
})
//请求拦截器
request.interceptors.request.use()
//设置相应拦截器
request.interceptors.response.use()