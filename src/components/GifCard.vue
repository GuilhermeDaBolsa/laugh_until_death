<template>
	<a class="ui fluid card">
		<div class="image">
			<img class="ui fluid image" :src="gifSrc">
		</div>

		<div class="content">
			<span class="header">{{title}}</span>
			<div class="meta">
				<span class="date">{{creator}}</span>
			</div>
			<!-- <div class="description">
				Kristy is an art director living in New York.
			</div> -->
		</div>

		<!-- <div class="extra content">
			<a>
				<i class="user icon"></i>
				22 Friends
			</a>
		</div> -->
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
    methods: {},
}
</script>

<style scoped>
</style>