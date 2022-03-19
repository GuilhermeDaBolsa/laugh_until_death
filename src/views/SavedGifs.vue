<template>
    <div class="ui container" style="display: flex; flex-direction: column; height: 100%; padding: 12px;">
		<nav>
			<router-link to="/">Encontrar GIF</router-link> |
			<router-link to="/saved">Meus GIFs</router-link>
		</nav>

		<div class="ui huge inverted header">Meus GIFs</div>

		<FlexBox v-if="loading">
			<div class="ui active inline loader"></div>
			<div>Carregando...</div>
		</FlexBox>

		<FlexBox v-else-if="errorMessage" style="flex-direction: row;">
			<i class="large red exclamation triangle icon"></i> {{errorMessage}}
		</FlexBox>

		<FlexBox v-else-if="savedGifs.length == 0">
			<div>Você ainda não salvou nenhum GIF 🕸️👻🕸️</div>
		</FlexBox>

		<GifCardList
			v-else
			:gifsList="savedGifs"
			@gifSelect="showGifDetails"
		/>

		<SavedGifDetailsDialog class="savedGifs" :value="showGifDetailsDialog" :gif="selectedGif" @input="closeGifDetails"/>
	</div>
</template>

<script>
import FlexBox from '@/components/FlexBox.vue';
import GifCardList from '@/components/GifCardList.vue';
import SavedGifDetailsDialog from '@/components/SavedGifDetailsDialog.vue';

export default {
    props: {},
    mixins: {},
    data(){
        return {
			loading: false,
			errorMessage: "",

			showGifDetailsDialog: false,
			selectedGif: {},
        }
    },
    directives: {},
    components: {
		FlexBox,
		GifCardList,
		SavedGifDetailsDialog
	},
    computed: {
		savedGifs: {
			get(){
				return this.$store.getters["SavedGifs/savedGifs"];
			}
		}
	},
    watch: {},
    methods: {
		showGifDetails(gif){
			this.selectedGif = gif;
			this.showGifDetailsDialog = true;
			$('.savedGifs').modal('show');
		},
		closeGifDetails(){
			this.showGifDetailsDialog = false;
			$('.savedGifs').modal('hide');
		},
	},
}
</script>

<style scoped>
</style>