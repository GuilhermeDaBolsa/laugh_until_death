<template>
    <div class="ui container" style="padding: 12px;">
		<div class="ui huge header">Procure por gifs</div>

		<div class="ui fluid action input">
			<input v-model="gifNameInput" type="text" placeholder="Ex.:  estrela negra" @keydown.enter="searchGifs(gifNameInput)">
			<div class="ui button" @click="searchGifs(gifNameInput)">Buscar</div>
		</div>

		<div class="ui three column doubling stackable padded grid" style="padding: 12px;">
  			<div class="column" v-for="gif in searchedGifs" :key="gif.id">
				<GifCard 
					:title="removeCreatorFromGifTitle(gif.title)"
					:creator="gif.username"
					:gifSrc="gif.images.downsized.url"
				/>
  			</div>
		</div>
	</div>
</template>

<script>
import GifCard from '@/components/GifCard.vue';

export default {
    props: {},
    mixins: {},
    data(){
        return {
			gifNameInput: "",
        }
    },
    directives: {},
    components: {
		GifCard
	},
    computed: {
		searchedGifs: {
			get(){
				return this.$store.getters["SearchGifs/searchedGifs"];
			}
		}
	},
    watch: {},
    methods: {
		removeCreatorFromGifTitle(gifTitle) {
			const lastOccurrenceOfCreatorSeparator = gifTitle.lastIndexOf("GIF by");

			if (lastOccurrenceOfCreatorSeparator != -1) {
				return gifTitle.substring(0, lastOccurrenceOfCreatorSeparator);
			}
			return gifTitle;
		},
		async searchGifs(searchInput) {
			if(!searchInput)
				return;

			const response = await this.$store.dispatch("SearchGifs/getGifsFromGiphy", searchInput);
			console.log(response);

			this.$store.commit("SearchGifs/addGifsIntoSearchedGifs", response.data);
		}
	},
}
</script>

<style scoped>
</style>