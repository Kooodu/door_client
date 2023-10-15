<template>
  <div class="fabricator">
    <div class="fabricator__container">
        <div class="fabricator__item">
            <div class="fabricator__text">Добавление производителя</div>
            <input type="text" class="login__input" placeholder="Название..." v-model="add__title">
            <input type="text" class="login__input" placeholder="ID категории..." v-model="add__category">
            <input type="text" class="login__input" placeholder="Картинка..." v-model="add__image">
            <div class="login__button" v-on:click="add__fabricator">Создать</div>
        </div>
        <div class="fabricator__item">
            <div class="fabricator__text">Изменение производителя</div>
            <input type="text" class="login__input" placeholder="ID производителя..." v-model="change__id">
            <input type="text" class="login__input" placeholder="Новое название..." v-model="change__title">
            <input type="text" class="login__input" placeholder="Новая картинка..." v-model="change__image">
            <div class="login__button" v-on:click="change__fabricator">Изменить</div>
        </div>
        <div class="fabricator__item">
            <div class="fabricator__text">Удаление производителя</div>
            <input type="text" class="login__input" placeholder="ID производителя..." v-model="del__id">
            <div class="login__button" v-on:click="del__fabricator">Удалить</div>
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
import router from '../../../router'

function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

let password = getCookie('password')

axios.defaults.headers.common['Authorization'] = `${password}`;

axios.interceptors.response.use(resp => resp, async error => {
    if (error.response?.status === 403) {
        router.push('/admin-login')
    } 
})

export default {
    name: 'webAdminFabricator',
    data() {
        return {
            add__title: '',
            add__category: '',
            add__image: '',
            change__id: '',
            change__title: '',
            change__image: '',
            del__id: '',
            categories: [],
            fabricators: [],
        }
    },
    methods: {
        async get__fabricators() {
            const {data} = await axios.get('/fabricator')
            this.fabricators = data
        },
        async get__categories() {
            const {data} = await axios.get('/category')
            this.categories = data
        },
        async add__fabricator() {
            await axios.post('/fabricator', {
                title: this.add__title,
                category: Number(this.add__category),
                image: this.add__image
            })
            location.reload()
        },
        async change__fabricator() {
            await axios.put('/fabricator', {
                fabricator: Number(this.change__id),
                title: this.change__title,
                image: this.change__image
            })
            location.reload()
        },
        async del__fabricator() {
            await axios.delete('/fabricator', { params: { id: Number(this.del__id) } })
            location.reload()
        }
    },
    mounted() {
        this.get__fabricators(),
        this.get__categories()
    }
}
</script>

<style>
.fabricator {
    max-width: 100vw;
    min-height: 100vh;
    display: flex;
    justify-content: center;
}
.fabricator__container {
    display: flex;
    flex-direction: column;
}
.fabricator__item {
    display: flex;
    flex-direction: column;
}
.fabricator__item:not(:last-child) {
    margin: 0px 0px 30px 0px;
}
.fabricator__text {
    font-family: 'Montserrat';
    font-size: 18px;
    font-weight: 700;
    color: black;
    margin: 0px 0px 20px 0px;
}
.fabricator__product {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 10px;
    width: 300px;
    height: 60px;
    border: 1px solid black;
    border-radius: 10px;
    margin: 0px 0px 10px 0px;
}
.fabricator__name {
    font-family: 'Montserrat';
    font-size: 14px;
    font-weight: 500;
    color: black;
}
</style>