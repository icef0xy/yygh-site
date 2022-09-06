import request from '@/utils/request'

const api_name = `/api/ucenter/wx`

export default {
    //生成微信登录二维码
  getLoginParam() {
    return request({
      url: `${api_name}/getLoginParam`,
      method: `get`
    })
  },
    //生成微信支付二维码
    createNative(orderId) {
        return request({
          url: `/api/order/weixin/createNative/${orderId}`,
          method: `get`
        })
      },
    //查询支付状态
    queryPayStatus(orderId) {
        return request({
            url: `/api/order/weixin/queryPayStatus/${orderId}`,
            method: 'get'
        })
    },
    cancelOrder(orderId) {
        return request({
            url: `/api/order/orderInfo/auth/cancelOrder/${orderId}`,
            method: 'get'
        })
    },
}