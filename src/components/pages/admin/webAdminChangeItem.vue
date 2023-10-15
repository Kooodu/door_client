<template>
    <div class="fabricator">
      <div class="fabricator__container">
          <div class="fabricator__item">
              <div class="fabricator__text">Изменение товара под номером {{ this.$route.params.ChangeItemId }}</div>
              <input type="text" class="login__input" placeholder="Новое название..." v-model="new__title">
              <input type="text" class="login__input" placeholder="Новая категория..." v-model="new__category">
              <input type="text" class="login__input" placeholder="Новая цена..." v-model="new__price">
              <input type="text" class="login__input" placeholder="Новый производитель..." v-model="new__fabricator">
              <textarea type="text" class="login__input textarea" placeholder="Новое описание..." v-model="new__description"></textarea>
              <div class="login__button" v-on:click="changeItem">Изменить</div>
          </div>
      </div>
      <div class="all__container">
            <div class="all__fabricators">
                <div class="fabricator__text">Все категории</div>
                <div class="fabricator__product" v-for="category in categories" :key="category.id">
                  <div class="fabricator__name">Название:<br/>{{ category.title }}</div>
                  <div class="fabricator__name">ID:<br/>{{ category.id }}</div>
                </div>
            </div>
            <div class="all__fabricators">
                <div class="fabricator__text">Все производители</div>
                <div class="fabricator__product" v-for="fabricator in fabricators" :key="fabricator.id">
                    <div class="fabricator__name">Название:<br/>{{ fabricator.title }}</div>
                    <div class="fabricator__name">ID:<br/>{{ fabricator.id }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'webAdminChangeItem',
    data() {
        return {
            fabricators: [],
            categories: [],
            item: '',
            new__title: '',
            new__category: '',
            new__price: '',
            new__fabricator: '',
            new__description: ''
        }
    },
    methods: {
        async getItem() {
            let ItemId = this.$route.params.ChangeItemId
            const {data} = await axios.get(`/product/${ItemId}`)
            this.item = data

            const res1 = await axios.get('/fabricator')
            this.fabricators = res1.data

            const res2 = await axios.get('/category')
            this.categories = res2.data
        },
        async changeItem() {
            await axios.put('/product', {
                product: Number(this.$route.params.ChangeItemId),
                title: this.new__title,
                category: Number(this.new__category),
                price: Number(this.new__price),
                fabricator: Number(this.new__fabricator),
                description: this.new__description
            })
            location.reload()
        }
    },
    mounted() {
        this.getItem()
    }
}
</script>

<style>

</style>