<template>
   <div class="mobile_panel_wrap" v-bind:class="{ active: popup__menu }">
      <div class="mobile__panel">
         <a v-on:click="closeModal()" class="close-button"><span></span></a>
         <div class="mobile_panel_inner">
            <div class="mobile_menu_prev" v-bind:class="{ active: menu }">
               <div class="btn_next_menu" v-on:click="showMenu()"><span>МЕНЮ</span></div>
               <div class="shared_mob_title">КАТАЛОГ</div>
               <nav class="mobile_shared_wrap waSlideMenu-nav">
                  <div class="waSlideMenu-wrapper">
                     <ul class="mobile_shared waSlideMenu-menu">
                        <li class="cat-item firstlevel has sublevel" v-for="category in categories" :key="category.id">
                           <router-link :to="`/catalog/` + category.id" class="hasArrow ">
                              <span class="cat-item__pic">
                                 <img :src="category.icon">
                              </span>
                              <span class="cat-item__title  no-padding">{{ category.title }}</span>
                           </router-link>
                        </li>
                     </ul>
                  </div>
               </nav>
            </div>
            <div class="mobile_menu_next" v-bind:class="{ active: menu }">
               <div class="btn_prev_menu" v-on:click="showMenu()"><span>Назад</span></div>
               <ul class="top_mobile_menu">
                  <li class="opened"><router-link to="/">Главная</router-link></li>
                  <li>
                     <!-- class="has-child" -->
                     <router-link to="/about-us">О нас</router-link>
                     <!-- <ul class="level-2">
                        <li><router-link to="/about-us/responses">Вопросы и ответы</router-link></li>
                     </ul> -->
                  </li>
                  <li><router-link to="/stocks">Акции</router-link></li>
                  <li class="has-child">
                     <router-link to="/info">Полезная информация</router-link>
                     <ul class="level-2">
                        <li><router-link to="/info/payment">Оплата и гарантия</router-link></li>
                        <li><router-link to="/info/delivery">Доставка</router-link></li>
                        <li><router-link to="/info/exchanges">Возврат и обмен</router-link></li>
                        <li><router-link to="/info/clients">Сотрудничество</router-link></li>
                        <li><router-link to="/info/privacy-policy">Политика кондифициальности</router-link></li>
                     </ul>
                  </li>
                  <li><router-link to="/contacts">Контакты</router-link></li>
                  <li class="has-child">
                     <router-link to="/our-work">Наши работы</router-link>
                     <ul class="level-2">
                        <li><router-link to="/photo">Фотогалерея</router-link></li>
                        <li><router-link to="/video">Видеогалерея</router-link></li>
                     </ul>
                  </li>
                  <li><router-link to="/reviews">Отзывы</router-link></li>
               </ul>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import axios from 'axios'

export default {
   props: ['popup'],
   name: 'webMobileWrap',
   data() {
      return {
         categories: [],
         menu: false,
         popup__menu: false,
         key: localStorage.getItem('cartKey'),
      }
   },
   methods: {
      async getCategories() {
         const {data} = await axios.get('category')
         this.categories = data 
      },
      showMenu() {
         this.menu = !this.menu
      },
      closeModal() {
         this.popup__menu = false
         this.$emit('closeModal')
      }
   },
   watch: {
      popup() {
         this.popup__menu = true
      }
   },
   mounted() {
      this.getCategories()
   }
}
</script>

<style>

</style>