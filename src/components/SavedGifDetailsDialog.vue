<template>
	<div class="ui tiny modal">
		<div class="image content" style="flex-direction: column;">
			<div class="image" style="margin-bottom: 12px;">
				<img class="ui fluid image" :src="src" style="max-height: 70vh;">
			</div>
			<div>
				<div style="display: flex;">
					<div class="ui header" style="margin: auto 0; margin-right: 6px;">Title: </div>

					<div class="ui small right labeled left input">
						<input v-model="title" type="text">
						<a class="edit ui tag label" :data-title="popupMessage" @click="editGif">
							Editar
						</a>
					</div>
				</div>

				<div>Author: {{creator}}</div>
			</div>
		</div>
		<div class="actions">
			<button class="share circular ui icon button" :data-title="popupMessage" @click="shareGif">
				<i class="share alternate icon"></i>
			</button>
			<button class="save circular ui icon button" :data-title="popupMessage" @click="removeGif">
				<i class="trash alternate icon"></i>
			</button>
			<button class="circular ui icon button" @click="close">
				<i class="close icon"></i>
			</button>
		</div>
	</div>
</template>

<script>
import { removeCreatorFromGifTitle } from "@/utils/gif"

export default {
    props: {
		value: {
			type: Boolean
		},
		gif: {
			type: Object
		}
	},
    mixins: {},
    data(){
        return {
			title: "",
			creator: "",
			src: "",

			popupMessage: "",
        }
    },
    directives: {},
    components: {},
    computed: {},
    watch: {
		gif() {
			if(this.gif != undefined) {
				this.title = this.gif.title ? this.removeCreatorFromGifTitle(this.gif.title) : "N/A";
				this.creator = this.gif.username ? this.gif.username : "N/A";
				this.src = this.gif.images?.downsized?.url;
			}
		}
	},
    methods: {
		removeCreatorFromGifTitle,

		close() {
			this.$emit("input", false);
		},
		async editGif() {
			this.popupMessage = "Salvando...";
			const response = await this.$store.dispatch("SavedGifs/editSavedGif", { userId: undefined, gif: this.gif, newTitle: this.title });
			this.popupMessage = response.message;
		},
		async shareGif() {
			navigator.clipboard.writeText(this.src);
			this.popupMessage = "Copiado!";
		},
		async removeGif(){
			this.popupMessage = "Salvando...";
			const response = await this.$store.dispatch("SavedGifs/removeSavedGif", { userId: undefined, gif: this.gif });
			this.popupMessage = response.message;
		},
	},
	mounted() {
		$('.share').popup({ on: 'click' });
		$('.save').popup({ on: 'click' });
		$('.edit').popup({ on: 'click' });
	}
}
</script>

<style scoped>
.modal {
	margin-top: 0px !important;
}
</style>