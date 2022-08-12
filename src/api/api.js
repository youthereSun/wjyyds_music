import request from './axios.config'

export function searchByKeyword(data){
    const {keywords} =data
    return request.send({
        url:`search?keywords=${keywords}`
    })
}