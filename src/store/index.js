import Vue from 'vue'
import Vuex from 'vuex'

import SearchGifs from "./SearchGifs"

Vue.use(Vuex)

const store = new Vuex.Store()
store.registerModule('SearchGifs', SearchGifs)

export default store