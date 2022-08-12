import {createStore} from 'vuex'
import playerStore from "./modules/playerStore";
import createPersistedState from "vuex-persistedstate";

export default createStore({
    //plugins: [createPersistedState()],
    modules:{
        playerStore
    }
})
