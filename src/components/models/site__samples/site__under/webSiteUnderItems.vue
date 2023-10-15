<template>
<div v-if="items" class="top-blocks">
   <div class="top-blocks__inner block_padding margin-slick">
      <div class="top-blocks__content top-blocks__slider slick-initialized slick-slider">
         <!-- <button type="button" data-role="none" class="slick-prev slick-arrow" v-on:click="prevSlide" aria-label="Previous" role="button" style="display: block;">Previous</button> -->
         <div aria-live="polite" class="slick-list draggable">
            <div class="slick-track" role="listbox">
               <Carousel :transition="500" :breakpoints="breakpoints" :wrap-around="true" class="carousel-3">
                  <Slide class="carousel__item" v-for="item in items" :key="item.id">
                     <webSiteUnderItem 
                     :item="item"
                     />
                  </Slide>
                  <template #addons>
                     <Navigation class="slick-arrow" />
                     <Pagination class="under-pagination" style="padding: 0 !important;"/>
                  </template>
               </Carousel>
            </div>
         </div>
         <!-- <button type="button" data-role="none" class="slick-next slick-arrow" v-on:click="nextSlide" aria-label="Next" role="button" style="display: block;">Next</button> -->
      </div>
   </div>
</div>
</template>

<script>
import axios from 'axios'

import { defineComponent } from 'vue'
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation, Pagination } from 'vue3-carousel';

import webSiteUnderItem from './webSiteUnderItem.vue'

export default defineComponent({
   name: 'webSiteUnderItems',
   components: {
      Carousel,
      Slide,
      Navigation,
      Pagination,
      webSiteUnderItem
   },
   data() {
      return {
         items: [],
         key: localStorage.getItem('cartKey'),
         breakpoints: {
            0: {
               itemsToShow: 1,
               snapAlign: 'start'
            },
            760: {
               itemsToShow: 2,
               snapAlign: 'start'
            },
            900: {
               itemsToShow: 3,
               snapAlign: 'start'
            }
         }
      }
   },
   methods: {
      async getItems() {
         const {data} = await axios.get('product')
         this.items = data.splice(0, 9)
      }
   },
   mounted() {
      this.getItems()
   }
})
</script>

<style>
.slick-arrow {
   background-color: white;
   width: 35px;
}
.carousel__prev {
   left: -15px;
}
.carousel__prev svg {
   width: 24px;
   height: 24px;
}
.carousel__next {
   right: -15px;
}
.carousel__next svg {
   width: 24px;
   height: 24px;
}
@media (max-width: 679px) {
   .margin-slick {
      margin: 0px 16px 0px 16px !important;
   }
}
.under-pagination {
   display: none;
}
@media (max-width: 679px) {
   .under-pagination {
      display: flex;
   }
   .slick-arrow {
      display: none;
   }
}
</style>
 