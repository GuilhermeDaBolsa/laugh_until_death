<template>
	<a class="ui fluid card">
		<div class="image">
			<img class="ui fluid image" :src="gifSrc">
		</div>

		<div class="content">
			<span class="right floated">
				<i class="large heart red like icon" :class="liked ? '' : 'outline'" @click="changeGifLikeStatus"></i>
			</span>
			<span class="header">{{title}}</span>
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
		liked: {
			type: Boolean
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
		changeGifLikeStatus() {
			const newLikeStatus = !this.liked;

			if(newLikeStatus) 
				this.$emit("like");
			else
				this.$emit("unlike");
		}
	},
}
</script>

<style scoped>
</style>