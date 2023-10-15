<template>
<div class="site-brands">
   <div class="site-brands__inner block_padding">
      <div class="site-brands__items js-slider-vendors slick-initialized slick-slider">
         <button v-on:click="prev()" type="button" class="slick-prev slick-arrow brands-1" style="display: block;">Previous</button>
         <div aria-live="polite" class="slick-list draggable">
            <Carousel :transition="500" :wrap-around="true" :breakpoints="breakpoints" v-model="currentSlide" class="slick-track brands-1">
               <Slide class="site-brands__item-wrap slick-slide brand-percent-item">
                  <div class="site-brands__item w-inline-block">
                     <img src="../../../../../public/brand-1.png" width="150" height="150" class="lazy site-brands__item-pic loaded">
                  </div>
               </Slide>
               <Slide class="site-brands__item-wrap slick-slide brand-percent-item">
                  <div class="site-brands__item w-inline-block">
                     <img src="../../../../../public/brand-2.png" width="150" height="150" class="lazy site-brands__item-pic loaded">
                  </div>
               </Slide>
               <Slide class="site-brands__item-wrap slick-slide brand-percent-item">
                  <div class="site-brands__item w-inline-block">
                     <img src="../../../../../public/brand-3.png" width="150" height="150" class="lazy site-brands__item-pic loaded">
                  </div>
               </Slide>
               <Slide class="site-brands__item-wrap slick-slide brand-percent-item">
                  <div class="site-brands__item w-inline-block">
                     <img src="../../../../../public/brand-4.png" width="150" height="150" class="lazy site-brands__item-pic loaded">
                  </div>
               </Slide>
               <Slide class="site-brands__item-wrap slick-slide brand-percent-item">
                  <div class="site-brands__item w-inline-block">
                     <img src="../../../../../public/brand-5.png" width="150" height="150" class="lazy site-brands__item-pic loaded">
                  </div>
               </Slide>
               <Slide class="site-brands__item-wrap slick-slide brand-percent-item">
                  <div class="site-brands__item w-inline-block">
                     <img src="../../../../../public/brand-6.png" width="150" height="150" class="lazy site-brands__item-pic loaded">
                  </div>
               </Slide>
               <Slide class="site-brands__item-wrap slick-slide brand-percent-item">
                  <div class="site-brands__item w-inline-block">
                     <img src="../../../../../public/brand-7.png" width="150" height="150" class="lazy site-brands__item-pic loaded">
                  </div>
               </Slide>
               <Slide class="site-brands__item-wrap slick-slide brand-percent-item">
                  <div class="site-brands__item w-inline-block">
                     <img src="../../../../../public/brand-8.png" width="150" height="150" class="lazy site-brands__item-pic loaded">
                  </div>
               </Slide>
               <Slide class="site-brands__item-wrap slick-slide brand-percent-item">
                  <div class="site-brands__item w-inline-block">
                     <img src="../../../../../public/brand-9.png" width="150" height="150" class="lazy site-brands__item-pic loaded">
                  </div>
               </Slide>
               <Slide class="site-brands__item-wrap slick-slide brand-percent-item">
                  <div class="site-brands__item w-inline-block">
                     <img src="../../../../../public/brand-10.png" width="150" height="150" class="lazy site-brands__item-pic loaded">
                  </div>
               </Slide>
               <Slide class="site-brands__item-wrap slick-slide brand-percent-item">
                  <div class="site-brands__item w-inline-block">
                     <img src="../../../../../public/brand-11.png" width="150" height="150" class="lazy site-brands__item-pic loaded">
                  </div>
               </Slide>
            </Carousel>
            <div class="slick-track brands-2">
               <div class="site-brands__item-wrap slick-slide" style="width: 192px; margin: 0px 20px 0px 20px;">
                  <div class="site-brands__item w-inline-block">
                     <img src="../../../../../public/brand-1.png" width="150" height="150" class="lazy site-brands__item-pic loaded">
                  </div>
               </div>
               <div class="site-brands__item-wrap slick-slide" style="width: 192px; margin: 0px 20px 0px 20px;">
                  <div class="site-brands__item w-inline-block">
                     <img src="../../../../../public/brand-2.png" width="150" height="150" class="lazy site-brands__item-pic loaded">
                  </div>
               </div>
               <div class="site-brands__item-wrap slick-slide" style="width: 192px; margin: 0px 20px 0px 20px;">
                  <div class="site-brands__item w-inline-block">
                     <img src="../../../../../public/brand-3.png" width="150" height="150" class="lazy site-brands__item-pic loaded">
                  </div>
               </div>
               <div class="site-brands__item-wrap slick-slide" style="width: 192px; margin: 0px 20px 0px 20px;">
                  <div class="site-brands__item w-inline-block">
                     <img src="../../../../../public/brand-4.png" width="150" height="150" class="lazy site-brands__item-pic loaded">
                  </div>
               </div>
               <div class="site-brands__item-wrap slick-slide" style="width: 192px; margin: 0px 20px 0px 20px;">
                  <div class="site-brands__item w-inline-block">
                     <img src="../../../../../public/brand-5.png" width="150" height="150" class="lazy site-brands__item-pic loaded">
                  </div>
               </div>
               <div class="site-brands__item-wrap slick-slide" style="width: 192px; margin: 0px 20px 0px 20px;">
                  <div class="site-brands__item w-inline-block">
                     <img src="../../../../../public/brand-6.png" width="150" height="150" class="lazy site-brands__item-pic loaded">
                  </div>
               </div>
               <div class="site-brands__item-wrap slick-slide" style="width: 192px; margin: 0px 20px 0px 20px;">
                  <div class="site-brands__item w-inline-block">
                     <img src="../../../../../public/brand-7.png" width="150" height="150" class="lazy site-brands__item-pic loaded">
                  </div>
               </div>
               <div class="site-brands__item-wrap slick-slide" style="width: 192px; margin: 0px 20px 0px 20px;">
                  <div class="site-brands__item w-inline-block">
                     <img src="../../../../../public/brand-8.png" width="150" height="150" class="lazy site-brands__item-pic loaded">
                  </div>
               </div>
               <div class="site-brands__item-wrap slick-slide" style="width: 192px; margin: 0px 20px 0px 20px;">
                  <div class="site-brands__item w-inline-block">
                     <img src="../../../../../public/brand-9.png" width="150" height="150" class="lazy site-brands__item-pic loaded">
                  </div>
               </div>
               <div class="site-brands__item-wrap slick-slide" style="width: 192px; margin: 0px 20px 0px 20px;">
                  <div class="site-brands__item w-inline-block">
                     <img src="../../../../../public/brand-10.png" width="150" height="150" class="lazy site-brands__item-pic loaded">
                  </div>
               </div>
               <div class="site-brands__item-wrap slick-slide" style="width: 192px; margin: 0px 20px 0px 20px;">
                  <div class="site-brands__item w-inline-block">
                     <img src="../../../../../public/brand-11.png" width="150" height="150" class="lazy site-brands__item-pic loaded">
                  </div>
               </div>
            </div>
         </div>
         <button v-on:click="next()" type="button" class="slick-next slick-arrow brands-1" style="display: block;">Next</button>
      </div>
   </div>
</div>
</template>

<script>
import { defineComponent } from 'vue'
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

export default defineComponent({
   name: 'webSiteBrands',
   components: {
      Carousel,
      Slide,
      Navigation,
   },
   data() {
      return {
         currentSlide: 0,
         key: localStorage.getItem('cartKey'),
         breakpoints: {
            767: {
               itemsToShow: 4,
               snapAlign: 'start'
            },
            992: {
               itemsToShow: 5,
               snapAlign: 'start'
            },
            1260: {
               itemsToShow: 7,
               snapAlign: 'start'
            }
         }
      }
   },
   methods: {
      prev() {
         this.currentSlide--
      },
      next() {
         this.currentSlide++
      }
   }
})
</script>

<style>
.brands-1 {
   display: block;
}
.brands-2 {
   display: none !important;
}
@media (max-width: 767px) {
   .brands-1 {
      display: none !important;
   }
   .brands-2 {
      display: flex !important;
      overflow-x: auto !important;
   }
}
</style>