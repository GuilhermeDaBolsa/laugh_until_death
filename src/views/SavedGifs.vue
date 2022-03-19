<template>
    <div class="ui container" style="padding: 12px;">
		<nav>
      <router-link to="/">Encontrar GIF</router-link> |
      <router-link to="/saved">Meus GIFs</router-link>
    </nav>

	<FlexBox v-if="loading">
		<div class="ui active inline loader"></div>
		<div>Carregando...</div>
	</FlexBox>

	<FlexBox v-else-if="errorMessage" style="flex-direction: row;">
		<i class="large red exclamation triangle icon"></i> {{errorMessage}}
	</FlexBox>

	<FlexBox v-else-if="savedGifs.length == 0">
		<div>Você ainda não salvou nenhum GIF (emoji de alguma coisa)</div>
	</FlexBox>

	<GifCardList
		v-else
		:gifsList="savedGifs"
		@gifSelect="1==1"
		@reachedBottomOfList="1==1"
	/>

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
			loading: false,
			errorMessage: "",
        }
    },
    directives: {},
    components: {
		FlexBox,
		GifCardList
	},
    computed: {
		savedGifs: {
			get(){
				return this.$store.getters["SavedGifs/savedGifs"];
			}
		}
	},
    watch: {},
    methods: {},
}
</script>

<style scoped>
</style>