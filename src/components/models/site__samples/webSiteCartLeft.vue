<template>
<div v-if="categories" class="site-content__left content_left_cart">
   <nav class="folders-nav fold_cart" v-bind:class="{ block: category__menu }" style="display: none;">
      <ul class=" folders_menu">
         <li class="cat-item firstlevel has sublevel"  v-for="category in categories" :key="category.id">
            <router-link :to="`/catalog/` + category.id" class="hasArrow ">
               <span class="cat-item__pic">
                  <!-- <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                     <path fill-rule="evenodd" clip-rule="evenodd" d="M9.51787 6.72321C9.51787 6.32379 9.84167 6 10.2411 6H19.759C20.1584 6 20.4822 6.32379 20.4822 6.72321V11.7107H24.5179C24.9173 11.7107 25.2411 12.0345 25.2411 12.4339V17.4214H29.2768C29.6762 17.4214 30 17.7452 30 18.1447V23.8554C30 24.2548 29.6762 24.5786 29.2768 24.5786H0.723214C0.323794 24.5786 0 24.2548 0 23.8554V18.1447C0 17.7452 0.323794 17.4214 0.723214 17.4214H4.75894V12.4339C4.75894 12.0345 5.08273 11.7107 5.48215 11.7107H9.51787V6.72321ZM6.20536 13.1572V17.4214H14.2768V13.1572H6.20536ZM10.9643 11.7107V7.44643H19.0357V11.7107H10.9643ZM15.7232 13.1572V17.4214H23.7947V13.1572H15.7232ZM20.4822 18.8679V23.1322H28.5536V18.8679H20.4822ZM19.0357 23.1322V18.8679H10.9643V23.1322H19.0357ZM9.51787 23.1322V18.8679H1.44643V23.1322H9.51787Z" fill="white"></path>
                     </svg> -->
                  <img :src="category.icon">
               </span>
               <span class="cat-item__title  no-padding">{{ category.title }}</span>
            </router-link>
         </li>
      </ul>
   </nav>
</div>
</template>

<script>
import axios from 'axios'

export default {
   props: ["list"],
    name: 'webSiteCartLeft',
    data() {
      return {
         categories: [],
         category__menu: false,
         key: localStorage.getItem('cartKey'),
      }
    },
    methods: {
      async getCategories() {
        const {data} = await axios.get('category')
        this.categories = data
      }
    },
    watch: {
      list() {
         this.category__menu = this.list
      }
   },
    mounted() {
      this.getCategories()
    }
}
</script>

<style>
@media (max-width: 1260px) {
    .filter-container {
        display: none !important;
    }
}
@keyframes slidein {
  from {
    height: 0%;
  }
  to {
   height: 40.5vh;
  }
}
.category__display { 
   display: block !important;
   animation-duration: 0.5s;
   animation-name: slidein;
   animation-direction: normal;
}
</style>