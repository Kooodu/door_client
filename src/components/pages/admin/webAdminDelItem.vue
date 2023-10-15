<template>
  <div class="fabricator">
    <div class="fabricator__container">
        <div class="fabricator__item">
            <div class="fabricator__text">Удаление товара</div>
            <input type="text" class="login__input" placeholder="ID товара..." v-model="del__id">
            <div class="login__button" v-on:click="del__item">Удалить</div>
        </div>
    </div>
    <div class="all__container">
            <div class="all__fabricators">
                <div class="fabricator__text">Все товары</div>
                <div class="fabricator__product" v-for="item in items" :key="item.id">
                  <div class="fabricator__name">Название:<br/>{{ item.title }}</div>
                  <div class="fabricator__name">ID:<br/>{{ item.id }}</div>
                </div>
            </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'webAdminDelItem',
    data() {
        return {
            items: [],
            del__id: ''
        }
    },
    methods: {
        async getItems() {
            const {data} = await axios.get('/product')
            this.items = data
        },
        async del__item() {
            await axios.delete('/product', { params: { id: Number(this.del__id) } })
            location.reload()
        }
    },
    mounted() {
        this.getItems()
    }
}
</script>

<style>

</style>