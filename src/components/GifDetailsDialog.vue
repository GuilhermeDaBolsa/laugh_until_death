<template>
	<div class="ui tiny modal">
		<div class="image content" style="flex-direction: column;">
			<div class="image" style="margin-bottom: 12px;">
				<img class="ui fluid image" :src="gifSrc" style="max-height: 70vh;">
			</div>
			<div>
				<div class="ui header">Title: {{title}}</div>
				<div>Author: {{creator}}</div>
			</div>
		</div>
		<div class="actions">
			<button class="circular ui icon button">
				<i class="share alternate icon"></i>
			</button>
			<button class="circular ui icon button" @click="saveGif">
				<i class="save icon"></i>
			</button>
			<button class="circular ui icon button" @click="close">
				<i class="close icon"></i>
			</button>
		</div>
	</div>
</template>

<script>
export default {
    props: {
		title: {
			type: String
		},
		gifSrc: {
			type: String
		},
		creator: {
			type: String
		}
	},
    mixins: {},
    data(){
        return {
        }
    },
    directives: {},
    components: {},
    computed: {},
    watch: {},
    methods: {
		close() {
			$('.tiny.modal').modal('hide');
		},
		saveGif() {
			this.$emit("saveGif");
		}
	},
}
</script>

<style scoped>
.modal {
	margin-top: 0px !important;
}
</style>