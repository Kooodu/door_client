<template>
    <div class="fabricator">
      <div class="fabricator__container">
          <div class="fabricator__item">
              <div class="fabricator__text">Создание категории</div>
              <input type="text" class="login__input" placeholder="Название..." v-model="add__title">
              <input type="text" class="login__input" placeholder="Картинка..." v-model="add__image">
              <input type="text" class="login__input" placeholder="Иконка..." v-model="add__icon">
              <div class="login__button" v-on:click="add__category">Создать</div>
          </div>
          <div class="fabricator__item">
              <div class="fabricator__text">Изменение категории</div>
              <input type="text" class="login__input" placeholder="ID категории..." v-model="change__id">
              <input type="text" class="login__input" placeholder="Новое название..." v-model="change__title">
              <input type="text" class="login__input" placeholder="Новоя картинка..." v-model="change__image">
              <input type="text" class="login__input" placeholder="Новоя иконка..." v-model="change__icon">
              <div class="login__button" v-on:click="change__category">Изменить</div>
          </div>
          <div class="fabricator__item">
              <div class="fabricator__text">Удаление категории</div>
              <input type="text" class="login__input" placeholder="ID категории..." v-model="del__id">
              <div class="login__button" v-on:click="del__category">Удалить</div>
          </div>
          <div class="fabricator__item" v-if="categories">
              <div class="fabricator__text">Все категории</div>
              <div class="fabricator__product" v-for="category in categories" :key="category.id">
                  <div class="fabricator__name">Название:<br/>{{ category.title }}</div>
                  <div class="fabricator__name">ID:<br/>{{ category.id }}</div>
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
    name: 'webAdminCategory',
    data() {
        return {
            add__title: '',
            add__image: '',
            add__icon: '',
            change__id: '',
            change__title: '',
            change__image: '',
            change__icon: '',
            del__id: '',
            categories: []
        }
    },
    methods: {
        async get__categories() {
            const {data} = await axios.get('/category')
            this.categories = data
        },
        async add__category() {
            await axios.post('/category', {
                title: this.add__title,
                image: this.add__image,
                icon: this.add__icon
            })
            location.reload()
        },
        async change__category() {
            await axios.put('/category', {
                category: Number(this.change__id),
                title: this.change__title,
                image: this.change__image,
                icon: this.change__icon
            })
            location.reload()
      },
      async del__category() {
          await axios.delete('/category', { params: { id: Number(this.del__id) } })
          location.reload()
      }
  },
  mounted() {
      this.get__categories()
  }
}
</script>
  
<style>
</style>