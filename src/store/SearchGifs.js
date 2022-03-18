import axios from 'axios';
import { handleAxiosError } from "@/utils/axios"

export default {
	namespaced: true,
	state: {
		searchedGifs: [],
	},
	getters: {
		searchedGifs(state) {
			return state.searchedGifs;
		}
	},
	mutations: {
		setSearchedGifs(state, gifs) {
			state.searchedGifs = gifs;
		},
		addGifsIntoSearchedGifs(state, gifs) {
			for (const gif of gifs) {
				state.searchedGifs.push(gif);
			}
		}
	},
	actions: {
		async getGifsFromGiphy(store, {gifSearchInput, gifsQuantity, searchOffset}) {
			return await axios.get(
				"https://api.giphy.com/v1/gifs/search?" +
				"api_key=" + "STZdG71c7H6T5YF4RefqSFm6IFMNbKRu" +
                "&q=" + gifSearchInput +
                "&limit=" + gifsQuantity +
                "&offset=" + searchOffset +
                "&lang=" + "pt"
			).then(response => {
				return response.data;
			}).catch(error => {
				return handleAxiosError(error);
			})
		}
	},
	modules: {
	}
}
