<template>
    <div class="ui container" style="padding: 12px;">
		<div class="ui huge header">Procure por gifs</div>

		<div class="ui fluid action input">
			<input v-model="gifNameInput" type="text" placeholder="Ex.:  estrela negra" @keydown.enter="searchGifs(gifNameInput)">
			<div class="ui button" @click="searchGifs(gifNameInput)">Buscar</div>
		</div>
	</div>
</template>

<script>
import axios from 'axios';

export default {
    props: {},
    mixins: {},
    data(){
        return {
			gifNameInput: "",
        }
    },
    directives: {},
    components: {},
    computed: {},
    watch: {},
    methods: {
		async searchGifs(gifName) {
			if(!gifName)
				return;

            const gifList = await axios.get(
				"https://api.giphy.com/v1/gifs/search?" +
				"api_key=" + "STZdG71c7H6T5YF4RefqSFm6IFMNbKRu" +
                "&q=" + gifName +
                "&limit=25" +
                "&offset=0" +//limit * currentPage
                "&lang=" + "pt"
			)
		}
	},
}
</script>

<style scoped>
</style>