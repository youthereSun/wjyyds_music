const playerStore ={
    state(){
        return{
            isPlay:false,
            playlist:[],
            playingMusic:{
                singer:'',
                musicCover: '',
                musicName: '',
                id:''
            }
        }
    },
    mutations:{
        updateState(state,payload){
            const {key,value} =payload
            state[key]=value
        },
        //往历史记录中添加数据
        addToPlaylist(state,music){
            let index=state.playlist.findIndex(v=>v.id==music.id)
            if(index==-1){
                state.playlist.push(music)
            }else {
                //已经存在记录中，不作处理了
            }
        }
    },
    actions:{},
    getters:{},
    namespaced: true,
}

export default playerStore