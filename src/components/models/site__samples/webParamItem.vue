<template>
    <a v-on:click="checkParam()" class="param-val" v-bind:class="{ 'active-val': checked__param }">
        {{ paramItem.title }}
    </a>
</template>

<script>
export default {
    props: ['paramItem'],
    name: 'webParamItem',
    data() {
        return {
            checked__param: false,
            key: localStorage.getItem('cartKey'),
        }
    },
    methods: {
        checkParam() {
            this.checked__param = !this.checked__param 
        }
    }
}
</script>

<style>
</style>