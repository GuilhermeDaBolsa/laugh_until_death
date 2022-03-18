<template>
    <div class="ui container" style="display: flex; flex-direction: column; height: 100%; padding: 12px;">
		<nav>
			<router-link to="/">Encontrar GIF</router-link> |
			<router-link to="/saved">Meus GIFs</router-link>
		</nav>

		<div class="ui huge header">Procure por gifs</div>

		<div class="ui fluid action input" style="margin-bottom: 12px;">
			<input 
				ref="gifNameInputField"
				v-model="gifNameInput"
				type="text" 
				placeholder="Ex.:  estrela negra" 
				@keydown.enter="makeNewGifSearch(gifNameInput)"
			>

			<div class="ui button" @click="makeNewGifSearch(gifNameInput)">Buscar</div>
		</div>

		<FlexBox v-if="loading">
			<div class="ui active inline loader"></div>
			<div>Carregando...</div>
		</FlexBox>

		<FlexBox v-else-if="errorMessage" style="flex-direction: row;">
			<i class="large red exclamation triangle icon"></i> {{errorMessage}}
		</FlexBox>

		<div v-else class="ui three column doubling stackable padded grid" style="padding: 12px; overflow: auto;">
  			<div class="column" v-for="gif in searchedGifs" :key="gif.id">
				<GifCard 
					:title="removeCreatorFromGifTitle(gif.title)"
					:creator="gif.username"
					:gifSrc="gif.images.downsized.url"
					@like="likeGif(gif.id)"
					@unlike="unlikeGif(gif.id)"
				/>
  			</div>
		</div>
	</div>
</template>

<script>
import GifCard from '@/components/GifCard.vue';
import FlexBox from '@/components/FlexBox.vue';

export default {
    props: {},
    mixins: {},
    data(){
        return {
			loading: false,
			errorMessage: "",

			gifNameInput: "",
			lastSearchedInput: "",
        }
    },
    directives: {},
    components: {
		GifCard,
        FlexBox
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
		likeGif(gifId){

		},
		unlikeGif(gifId){

		},
		async makeNewGifSearch(gifSearchInput) {
			this.$refs.gifNameInputField.blur();

			if(gifSearchInput.length > 0) {
				this.errorMessage = "";
				this.lastSearchedInput = gifSearchInput;

				this.loading = true;

				const response = await this.getGifsFromGiphy(gifSearchInput, 25, 0); //TODO PARAMETROS
				console.log(response);

				if(response.isError) {
					this.errorMessage = response.errorMessage;
				} else {
					this.$store.commit("SearchGifs/setSearchedGifs", response.data);
				}

				this.loading = false;
			}
		},
		async getGifsFromGiphy(gifSearchInput, gifsQuantity, searchOffset) {
			return await this.$store.dispatch("SearchGifs/getGifsFromGiphy", { gifSearchInput, gifsQuantity, searchOffset });
		}
	},
}
</script>

<style scoped>
</style>