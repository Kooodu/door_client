<template>
    <div class="fabricator">
      <div class="fabricator__container">
        <div class="fabricator__text">Работа с товаром под номером {{ this.$route.params.OtherItemId }}</div>
          <div class="fabricator__item">
            <div class="fabricator__text">Картинки</div>
            <div class="fabricator__item">
                <div class="fabricator__text">Добавление главной картинки</div>
                <input type="text" class="login__input" placeholder="ID картинки..." v-model="main__image__id">
                <div class="login__button" v-on:click="set__main__image">Добавить</div>
            </div>
            <div class="fabricator__item">
                <div class="fabricator__text">Добавление картинки</div>
                <input type="text" class="login__input" placeholder="Картинка..." v-model="add__image">
                <div class="login__button" v-on:click="add__img">Добавить</div>
            </div>
            <div class="fabricator__item">
                <div class="fabricator__text">Удаление картинки</div>
                <input type="text" class="login__input" placeholder="ID картинки..." v-model="del__image">
                <div class="login__button" v-on:click="del__img">Удалить</div>
            </div>
            <div class="fabricator__item">
                <div class="fabricator__text">Изменение картинки</div>
                <input type="text" class="login__input" placeholder="ID картинки..." v-model="change__id">
                <input type="text" class="login__input" placeholder="Картинка..." v-model="change__link">
                <div class="login__button" v-on:click="change__image">Изменить</div>
            </div>
          </div>
          <div class="fabricator__item">
            <div class="fabricator__text">Параметры</div>
            <div class="fabricator__item">
                <div class="fabricator__text">Добавление параметра</div>
                <input type="text" class="login__input" placeholder="Ключ..." v-model="add__key">
                <input type="text" class="login__input" placeholder="Значение..." v-model="add__value">
                <div class="login__button" v-on:click="add__param">Добавить</div>
            </div>
            <div class="fabricator__item">
                <div class="fabricator__text">Удаление параметра</div>
                <input type="text" class="login__input" placeholder="ID параметра..." v-model="del__param__id">
                <div class="login__button" v-on:click="del__param">Удалить</div>
            </div>
            <div class="fabricator__item">
                <div class="fabricator__text">Изменение параметра</div>
                <input type="text" class="login__input" placeholder="ID параметра..." v-model="change__param__id">
                <input type="text" class="login__input" placeholder="Новый ключ..." v-model="change__param__key">
                <input type="text" class="login__input" placeholder="Новое значение..." v-model="change__param__value">
                <div class="login__button" v-on:click="change__param">Изменить</div>
            </div>
          </div>
      </div>
      <div class="all__container">
            <div class="all__fabricators">
                <div class="fabricator__text">Все картинки</div>
                <div class="fabricator__product" v-for="image in item.images" :key="image.id">
                  <div class="fabricator__name">ID:<br/>{{ image.id }}</div>
                  <div class="fabricator__name">Ссылка:<br/>{{ image.link }}</div>
                  <div v-if="image.isMain" class="fabricator__name">Главная:<br/>да</div>
                </div>
            </div>
            <div class="all__fabricators">
                <div class="fabricator__text">Все параметры</div>
                <div class="fabricator__product" v-for="param in item.parameters" :key="param.id">
                  <div class="fabricator__name">ID:<br/>{{ param.id }}</div>
                  <div class="fabricator__name">Ключ:<br/>{{ param.key }}</div>
                  <div class="fabricator__name">Значение:<br/>{{ param.value }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'webAdminOtherItem',
    data() {
        return {
            item: '',
            // 
            main__image__id: '',
            add__image: '',
            del__image: '',
            change__id: '',
            change__link: '',
            // 
            add__key: '',
            add__value: '',
            del__param__id: '',
            change__param__id: '',
            change__param__key: '',
            change__param__value: ''
        }
    },
    methods: {
        async getItem() {
            let ItemId = this.$route.params.OtherItemId
            const {data} = await axios.get(`/product/${ItemId}`)
            this.item = data
        },
        async set__main__image() {
            await axios.post(`/product/image/${Number(this.main__image__id)}`)
            location.reload()
        },
        async add__img() {
            await axios.post('/product/image', {
                product: Number(this.$route.params.OtherItemId),
                link: this.add__image
            })
            location.reload()
        },
        async del__img() {
            await axios.delete('/product/image', { params: { id: Number(this.del__image) } })
            location.reload()
        },
        async change__image() {
            await axios.put('/product/image', {
                image: Number(this.change__id),
                link: this.change__link
            })
            location.reload()
        },
        async add__param() {
            await axios.post('/product/parameter', {
                product: Number(this.$route.params.OtherItemId),
                key: this.add__key,
                value: this.add__value
            })
            location.reload()
        },
        async del__param() {
            await axios.delete('/product/parameter', { params: { id: Number(this.del__param__id) } })
            location.reload()
        },
        async change__param() {
            await axios.put('/product/parameter', {
                parameter: Number(this.change__param__id),
                key: this.change__param__key,
                value: this.change__param__value
            })
            location.reload()
        }
    },
    mounted() {
        this.getItem()
    }
}
</script>

<style scoped>
.fabricator__product {
    width: 600px;
}
</style>