<template>
<div class="top-blocks__item-wrap slick-slide">
                        <div class="top-blocks__item w-inline-block">
                           <div class="top-blocks__pic-wrap lazy">
                                <img :src="image" alt="" class="">
                           </div>
                           <div class="top-blocks__item-body top_blocks_overlay">
                              <div class="top-blocks__item-descr">{{ item.title }}</div>
                              <div class="top-blocks__item-bot">
                                 <div class="top-blocks__item-text">
                                    <div class="top-blocks__item-price">
                                       <div class="text-block-8">{{ item.price }}</div>
                                       <div class="top-blocks__item-cur">₽</div>
                                    </div>
                                 </div>
                                 <router-link :to="`/item/` + item.id" class="top-blocks__item-btn">К товару</router-link>
                              </div>
                           </div>
                        </div>
                     </div>
</template>

<script>
export default {
   props: ["item"],
   name: 'webSiteUnderItem',
   components: {
   },
   data() {
      return {
         image: '',
         key: localStorage.getItem('cartKey'),
      }
   },
   methods: {
      async mainImage() {
        await this.item.images.forEach((item, i, array) => {
            if (array.lenght > 1) {
               if (item.isMain) {
                  this.image = item.link
               }
            }
            if (array.lenght = 1 || !item.isMain) {
               this.image = item.link
            }
         });
      }
   },
   mounted() {
      this.mainImage()
   }
}
</script>

 