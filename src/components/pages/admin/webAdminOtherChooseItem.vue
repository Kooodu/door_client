<template>
    <div class="fabricator">
        <div class="fabricator__container">
            <div class="fabricator__item" v-if="items">
                <div class="fabricator__text">Выберите товар</div>
                <router-link :to="`/admin-item-other/` + item.id" class="fabricator__product not__link" v-for="item in items" :key="item.id">
                    <div class="fabricator__name">Название:<br/>{{ item.title }}</div>
                    <div class="fabricator__name">ID:<br/>{{ item.id }}</div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'webAdminOtherChooseItem',
    data() {
        return {
            items: []
        }
    },
    methods: {
        async getItems() {
            const {data} = await axios.get('/product')
            this.items = data
        }
    },
    mounted() {
        this.getItems()
    }
}
</script>

<style>
.not__link {
    text-decoration: none;
}
</style>