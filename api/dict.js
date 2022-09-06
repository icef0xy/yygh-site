import request from '@/utils/request'

const api_name = `/admin/cmn/dict`
export default{
    //根据id获取它的下级节点
    findByParentId(parentId){
        return request({
            url:`${api_name}/findChildData/${parentId}`,
            method:'get',
        })
    },
    //根据dictCode获取下级节点
    findByDictCode(dictcode){
        return request({
            url:`${api_name}/findByDictCode/${dictcode}`,
            method:'get',
        })
    }
}