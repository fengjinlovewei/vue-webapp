import axios from 'axios';
//axios.defaults.baseURL = '/api'
let base = '';
//let base = '/buyer';

//export const orderAPI = params => { return axios.post(`${base}/order/order`, params).then(res => res.data); };

//小B展示管理
export const xiaoBshowAPI = params => { return axios.get(`${base}/member/list`,{ params: params }).then(res => res.data); };
//供应商展示管理
export const supplierShowAPI = params => { return axios.get(`${base}/supplier/list`,{ params: params }).then(res => res.data); };
//小B详情页
export const xiaoBdetailsAPI = params => { return axios.get(`${base}/member/selectMemberLongitude`,{ params: params }).then(res => res.data); };
//供应商详情页
export const supplierDetailsAPI = params => { return axios.get(`${base}/supplier/selectSupplierLongitude`,{ params: params }).then(res => res.data); };
