import request from '@/utils/request'

const api_name = `/api/msm`

export default {
    sendCode(mail) {
        return request({
            url: `${api_name}/send/${mail}`,
            method: `get`
        })
    }
}