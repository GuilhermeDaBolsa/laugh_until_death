import axios from 'axios';

export default {
	namespaced: true,
	state: {


		//this would be fed by the backend
		savedGifs: [],
	},
	getters: {
		savedGifs(state) {
			return state.savedGifs;
		}
	},
	mutations: {
		saveGif(state, gif) {
			state.savedGifs.push(gif);
		},
		removeSavedGif(state, gifIndex) {
			if (gifIndex != -1) 
				state.savedGifs.splice(gifIndex, 1);
		}
	},
	actions: {
		getSavedGifs(store, userId) {
			//get saved gifsIds from user
			
			//get hole gif object from giphy and store it into savedGifs
		},
		saveGif(store, {userId, gif}){

		},
		removeSavedGif(store, {userId, gif}) {
			const gifIndex = store.state.savedGifs.findIndex(g => g.id == gif.id);
		}
	},
	modules: {
	}
}