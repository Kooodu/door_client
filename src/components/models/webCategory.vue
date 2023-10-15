<template>
    <router-link :to="`/catalog/` + category.id" v-if="category" v-bind:class="{ category__block: category__all }" class="popular-category__item w-inline-block">
        <div class="popular-category__item-pic ">
            <img :src="category.image" class="lazy popular-category__item-img loaded" style="" data-ll-status="loaded">
        </div>
        <div class="popular-category__item-title">{{ category.title }}</div>
    </router-link>
</template>

<script>
export default {
    props: ['category', 'allCategory'],
    name: 'webCategory',
    data() {
        return {
            category__all: false,
            key: localStorage.getItem('cartKey'),
        }
    },
    watch: {
        allCategory() {
            this.category__all = this.allCategory
        }
    }
}
</script>

<style>
.popular-category__item {
    cursor: pointer;
}
.category__block {
    display: block !important;
}
</style>