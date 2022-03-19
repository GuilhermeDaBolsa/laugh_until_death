<template>
	<a class="ui fluid card" @click="$emit('click')">
		<div class="image">
			<img class="ui fluid image" :src="gifSrc">
		</div>

		<div class="content">
			<span class="header" style="text-overflow: ellipsis; overflow: hidden;">{{title}}</span>
			<div class="meta">
				<span class="date">{{creator}}</span>
			</div>
		</div>
	</a>
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
		},
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
    methods: {},
}
</script>

<style scoped>
</style>