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

		<FlexBox v-if="loadingNewGifs">
			<div class="ui active inline loader"></div>
			<div>Carregando...</div>
		</FlexBox>

		<FlexBox v-else-if="errorMessageLoadingNewGifs" style="flex-direction: row;">
			<i class="large red exclamation triangle icon"></i> {{errorMessageLoadingNewGifs}}
		</FlexBox>

		<FlexBox v-else-if="searchedGifs.length == 0 && lastSearchedInput != ''">
			<div>Não encontrei nenhum gif 😢</div>
		</FlexBox>

		<GifCardList
			v-else-if="searchedGifs.length > 0"
			:gifsList="searchedGifs"
			@gifSelect="showGifDetails"
			@gifLike="likeGif"
			@gifUnlike="unlikeGif"
			@reachedBottomOfList="loadMoreGifs"
		/>

		<FlexBox v-else>
			<div>o</div>
		</FlexBox>

		<!-- TODO CREATE OTHER COMPONENT -->
		<!-- <div class="ui active modal">
			<i class="close icon"></i>
			<div class="header">
				Modal Title
			</div>
			<div class="image content">
				<div class="image">
					An image can appear on left or an icon
				</div>
				<div class="description">
					A description can appear on the right
				</div>
			</div>
			<div class="actions">
				<div class="ui button">Cancel</div>
				<div class="ui button">OK</div>
			</div>
		</div> -->

	</div>
</template>

<script>
import FlexBox from '@/components/FlexBox.vue';
import GifCardList from '@/components/GifCardList.vue';

export default {
    props: {},
    mixins: {},
    data(){
        return {
			loadingNewGifs: false,
			loadingMoreGifs: false,
			errorMessageLoadingNewGifs: "",
			errorMessageLoadingMoreGifs: "",

			gifNameInput: "",
			lastSearchedInput: "",
        }
    },
    directives: {},
    components: {
        FlexBox,
        GifCardList
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
		showGifDetails(gif){
			console.log(gif);
		},
		likeGif(gif){
			console.log(gif);
		},
		unlikeGif(gif){
			console.log(gif);
		},
		async makeNewGifSearch(gifSearchInput) {
			this.$refs.gifNameInputField.blur();

			if(gifSearchInput.length > 0) {
				this.loadingNewGifs = true;

				this.lastSearchedInput = gifSearchInput;
				this.errorMessageLoadingNewGifs = "";
				
				const response = await this.$store.dispatch("SearchGifs/getGifsFromGiphy", {
					gifSearchInput,
					gifsQuantity: 2,
					searchOffset: this.searchedGifs.length
				});

				if(response.isError) {
					this.errorMessageLoadingNewGifs = response.errorMessage;
				} else {
					this.$store.commit("SearchGifs/setSearchedGifs", response.data);
				}

				this.loadingNewGifs = false;
			}
		},
		async loadMoreGifs() {
			if(this.loadingMoreGifs)	//prevent several load more gifs call
				return;

			this.loadingMoreGifs = true;

			const response = await this.$store.dispatch("SearchGifs/getGifsFromGiphy", {
				gifSearchInput: this.lastSearchedInput,
				gifsQuantity: 2,
				searchOffset: this.searchedGifs.length
			});

			if(response.isError) {
				this.errorMessageLoadingMoreGifs = response.errorMessage;
			} else {
				this.$store.commit("SearchGifs/addGifsIntoSearchedGifs", response.data);
			}

			this.loadingMoreGifs = false;
		},
	},
}
</script>

<style scoped>
</style>