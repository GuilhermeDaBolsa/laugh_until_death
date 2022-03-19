<template>
	<div
		ref="list"
		class="ui three column doubling stackable padded grid"
		style="overflow: auto;"
		@scroll="bottomScrollCheck"
	>
		<div class="column" v-for="(gif, index) in gifsList" :key="index">
			<GifCard 
				:title="removeCreatorFromGifTitle(gif.title)"
				:creator="gif.username"
				:gifSrc="gif.images.downsized.url"
				@click="selectGif(gif)"
			/>
		</div>
	</div>
</template>

<script>
import GifCard from '@/components/GifCard.vue';

export default {
    props: {
		gifsList: {
			type: Array,
			default: []
		}
	},
    mixins: {},
    data(){
        return {
        }
    },
    directives: {},
    components: {
		GifCard
	},
    computed: {},
    watch: {
		gifsList() {
			this.bottomScrollCheck({target: this.$refs.list});
		}
	},
    methods: {
		removeCreatorFromGifTitle(gifTitle) {
			const lastOccurrenceOfCreatorSeparator = gifTitle.lastIndexOf("GIF by");

			if (lastOccurrenceOfCreatorSeparator != -1) {
				return gifTitle.substring(0, lastOccurrenceOfCreatorSeparator);
			}
			return gifTitle;
		},
		bottomScrollCheck({ target: { scrollTop, clientHeight, scrollHeight }}) {
			if (scrollTop + clientHeight > scrollHeight - 40) { //40 is an error margin
				this.$emit("reachedBottomOfList");
			}
		},
		selectGif(gif) {
			this.$emit("gifSelect", gif);
		},
	},
	mounted() {
		this.bottomScrollCheck({target: this.$refs.list});
	}
}
</script>

<style scoped>
</style>