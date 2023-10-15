<template>
  <div class="top-menu">
              <nav class="top-menu__inner block_padding">
                 <ul class="top-menu__items">
                    <li class="opened active"><router-link to="/">Главная</router-link></li>
                    <li>
                     <!-- @mouseover="About__Us__Show=true" @mouseleave="About__Us__Show=false" -->
                       <router-link to="/about-us" class="normal">О нас</router-link>
                       <!-- <ul id="about__us" class="level-2" v-bind:class="{ about__us__show: About__Us__Show }" style="display: none;">
                          <li><router-link to="/about-us/responses">Вопросы и ответы</router-link></li>
                       </ul> -->
                    </li>
                    <li><router-link to="/stocks">Акции</router-link></li>
                    <li class="has-child" @mouseover="Info__Show=true" @mouseleave="Info__Show=false">
                       <router-link to="/info" class="normal">Полезная информация</router-link>
                       <ul id="info" class="level-2" v-bind:class="{ info__show: Info__Show }" style="display: none;">
                          <li><router-link to="/info/payment">Оплата и гарантия</router-link></li>
                          <li><router-link to="/info/delivery">Доставка</router-link></li>
                          <li><router-link to="/info/exchanges">Возврат и обмен</router-link></li>
                          <li><router-link to="/info/clients">Сотрудничество</router-link></li>
                          <li><router-link to="/info/privacy-policy">Политика кондифициальности</router-link></li>
                       </ul>
                    </li>
                    <li><router-link to="/contacts">Контакты</router-link></li>
                    <li class="has-child" @mouseover="Work__Show=true" @mouseleave="Work__Show=false">
                        <router-link to="/photo">Наши работы</router-link>
                        <ul id="info" class="level-2" v-bind:class="{ work__show: Work__Show }" style="display: none;">
                          <li><router-link to="/photo">Фотогалерея</router-link></li>
                          <li><router-link to="/video">Видеогалерея</router-link></li>
                       </ul>
                     </li>
                    <li><router-link to="/reviews">Отзывы</router-link></li>
                 </ul>
              </nav>
           </div>
</template>

<script>
export default {
   name: 'webTopMenu',
   data() {
      return {
         About__Us__Show: false,
         Info__Show: false,
         Work__Show: false,
         key: localStorage.getItem('cartKey'),
      }
   },
   watch: {
   }
}
</script>

<style>
.about__us__show {
   display: block !important;
   left: 60.8281px;
   top: 62px;
}
.info__show {
   display: block !important;
   left: 209.125px;
   top: 62px;
}
.work__show {
   display: block !important;
   left: 509.125px;
   top: 62px;
}
</style>