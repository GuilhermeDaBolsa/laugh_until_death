<template>
    <div class="ui container" style="padding: 12px;">
oi
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