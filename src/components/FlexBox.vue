<template>
	<div class="flexBox">
		<slot></slot>
	</div>
</template>

<script>
export default {
    props: {},
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
.flexBox {
	display: flex;
	flex-direction: column;
	flex: 1;
	justify-content: center;
	align-items: center;
	font-size: 1.5rem;
	line-height: 2rem;
}
</style>