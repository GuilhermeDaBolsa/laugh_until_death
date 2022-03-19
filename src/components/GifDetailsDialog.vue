<template>
	<div class="ui small modal" :class="value ? 'active' : ''">
		<i class="close icon" @click="close"></i>
		<div class="header">
			Modal Title
		</div>
		<div class="image content">
			<div class="image">
				<img class="ui fluid image" :src="gifSrc">
			</div>
			<div class="description">
				A description can appear on the right
			</div>
		</div>
		<div class="actions">
			<button class="circular ui icon button">
				<i class="share alternate icon"></i>
			</button>
			<button class="circular ui icon button" @click="saveGif">
				<i class="save icon"></i>
			</button>
		</div>
	</div>
</template>

<script>
export default {
    props: {
		value: {
			type: Boolean,
			default: false
		},
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
			this.$emit("input", false);
		},
		saveGif() {
			this.$emit("saveGif");
		}
	},
}
</script>

<style scoped>
</style>