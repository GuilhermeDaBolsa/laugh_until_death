import Vue from 'vue'
import Vuex from 'vuex'

import SearchGifs from "./SearchGifs"
import SavedGifs from "./SavedGifs"

Vue.use(Vuex)

const store = new Vuex.Store()
store.registerModule('SearchGifs', SearchGifs)
store.registerModule('SavedGifs', SavedGifs)

export default store