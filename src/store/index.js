  
import Vue from 'vue'
import Vuex from 'vuex'

import episode from "./episode"
import character from "./character"
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {episode,character}
})