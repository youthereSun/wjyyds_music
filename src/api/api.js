import request from './axios.config'

export function searchByKeyword(data,callback){
    const {keywords} =data
    request.get({
        url:`search?keywords=${keywords}`,
        callback
    })
}