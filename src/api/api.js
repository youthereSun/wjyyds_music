import request from './axios.config'

export function searchByKeyword(data) {
    const {keywords} = data
    return request.send({
        url: `search?keywords=${keywords}`
    })
}

//推荐歌单
export function getPersonalized() {
    return request.send({
        url: `/personalized`
    })
}

//获取歌单详情 /playlist/detail
export function getPlayListDetail(id) {
    return request.send({
        url: `/playlist/detail?id=${id}`
    })
}

//获取歌单所有歌曲 playlist/track/all

export function  getPlayListTrackAll(id){
    return request.send({
        url: `/playlist/track/all?id=${id}`
    })
}
///check/music?id=33894312 检查当前歌曲是否可以播放
export function checkSongValidity(id){
    return request.send({
        url: `/check/music?id=${id}`
    })
}