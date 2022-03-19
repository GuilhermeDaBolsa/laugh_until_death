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
				v-model="gifSearchInput"
				type="text" 
				placeholder="Ex.:  estrela negra" 
				@keydown.enter="makeNewGifSearch(gifSearchInput)"
			>

			<div class="ui button" @click="makeNewGifSearch(gifSearchInput)">Buscar</div>
		</div>

		<FlexBox v-if="loadingNewGifs">
			<div class="ui active inline loader"></div>
			<div>Carregando...</div>
		</FlexBox>

		<FlexBox v-else-if="errorMessageLoadingNewGifs" style="flex-direction: row;">
			<i class="large red exclamation triangle icon"></i> {{errorMessageLoadingNewGifs}}
		</FlexBox>

		<FlexBox v-else-if="searchedGifs.length == 0 && lastGifSearchedInput != ''">
			<div>Não encontrei nenhum gif 😢</div>
		</FlexBox>

		<GifCardList
			v-else-if="searchedGifs.length > 0"
			:gifsList="searchedGifs"
			@gifSelect="showGifDetails"
			@reachedBottomOfList="loadMoreGifs"
		/>

		<FlexBox v-else>
			Digite algo no campo acima e precione buscar para começar a utilizar 😎
		</FlexBox>

		<div v-show="loadingMoreGifs">
			<div class="ui active inline loader"></div>
			<div>Carregando...</div>
		</div>

		<div v-show="errorMessageLoadingMoreGifs">
			<i class="large red exclamation triangle icon"></i> {{errorMessageLoadingMoreGifs}}
		</div>

		<GifDetailsDialog :value="showGifDetailsDialog" :gif="selectedGif" @input="closeGifDetails"/>
	</div>
</template>

<script>
import FlexBox from '@/components/FlexBox.vue';
import GifCardList from '@/components/GifCardList.vue';
import GifDetailsDialog from '@/components/GifDetailsDialog.vue';

export default {
    props: {},
    mixins: {},
    data(){
        return {
			loadingNewGifs: false,
			loadingMoreGifs: false,
			errorMessageLoadingNewGifs: "",
			errorMessageLoadingMoreGifs: "",

			gifSearchInput: "",
			lastGifSearchedInput: "",
			yetToComeGifs: -1,

			showGifDetailsDialog: false,
			selectedGif: {},
        }
    },
    directives: {},
    components: {
        FlexBox,
        GifCardList,
        GifDetailsDialog
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
			this.selectedGif = gif;
			this.showGifDetailsDialog = true;
			$('.modal').modal('show');
		},
		closeGifDetails(){
			this.showGifDetailsDialog = false;
			$('.tiny.modal').modal('hide');
		},
		async makeNewGifSearch(gifSearchInput) {
			this.$refs.gifNameInputField.blur();

			if(gifSearchInput.length > 0) {
				this.loadingNewGifs = true;

				this.lastGifSearchedInput = gifSearchInput;
				this.errorMessageLoadingNewGifs = "";
				this.errorMessageLoadingMoreGifs = "";
				
				const response = await this.$store.dispatch("SearchGifs/getGifsFromGiphy", {
					gifSearchInput,
					gifsQuantity: 25,
					searchOffset: 0
				});

				if(response.isError) {
					this.errorMessageLoadingNewGifs = response.errorMessage;
				} else {
					const pag = response.pagination;
					this.yetToComeGifs = pag.total_count - (pag.offset + pag.count);
					this.$store.commit("SearchGifs/setSearchedGifs", response.data);
				}

				this.loadingNewGifs = false;
			}
		},
		async loadMoreGifs() {
			//prevent several load more gifs calls
			if(this.loadingMoreGifs || this.errorMessageLoadingMoreGifs || this.yetToComeGifs == 0)
				return;

			this.loadingMoreGifs = true;

			const response = await this.$store.dispatch("SearchGifs/getGifsFromGiphy", {
				gifSearchInput: this.lastGifSearchedInput,
				gifsQuantity: 25,
				searchOffset: this.searchedGifs.length
			});

			if(response.isError) {
				this.errorMessageLoadingMoreGifs = response.errorMessage;
			} else {
				const pag = response.pagination;
				this.yetToComeGifs = pag.total_count - (pag.offset + pag.count);
				this.$store.commit("SearchGifs/addGifsIntoSearchedGifs", response.data);
			}

			this.loadingMoreGifs = false;
		},
	},
}
</script>

<style scoped>
</style>