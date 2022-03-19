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
			state.savedGifs.splice(gifIndex, 1);
		}
	},
	actions: {
		getSavedGifs(store, userId) {
			//get saved gifsIds from user
		},
		saveGif(store, {userId, gif}){
			//API CALL SAVING GIF OBJECT FOR CERTAIN USERID

			const gifIndex = store.state.savedGifs.findIndex(g => g.id == gif.id);
			if(gifIndex == -1) {
				store.commit("saveGif", gif);
				return {success: true, message: "GIF salvo"};
			}
			return {success: false, message: "GIF já está salvo"};
		},
		removeSavedGif(store, {userId, gif}) {
			const gifIndex = store.state.savedGifs.findIndex(g => g.id == gif.id);

			if(gifIndex != -1) {
				store.commit("removeSavedGif", gifIndex);
				return {success: true, message: "GIF removido"};
			}
			return {success: false, message: "GIF não encontrado"};
		}
	},
	modules: {
	}
}