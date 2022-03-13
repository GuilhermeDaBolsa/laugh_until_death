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
		searchGifs(gifName) {
			if(!gifName)
				return;

			console.log(gifName);
		}
	},
}
</script>

<style scoped>
</style>