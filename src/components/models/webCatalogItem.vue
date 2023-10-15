<template>
<div class="shop2-product-item product-item">
   <div class="product-item__top">
      <div class="contain_img">
         <router-link :to="`/item/` + catalogItem.id" class="lazy loaded">
            <img :src="image" class="lazy loaded item-image-height">
         </router-link>
      </div>
      <div class="product-price">
         <div class="price-current">
            <strong>{{ catalogItem.price }}</strong>
            <span class="fa fa-rouble">₽</span>	
         </div>
      </div>
   </div>
   <div class="product-item__bottom product_show_btns">
      <div class="product-item__bottom-left">
         <div class="product-item__heading">
            <div class="tpl-stars hide">
               <div class="tpl-rating" style="width: 0%;"></div>
            </div>
            <div class="product-item__name" style="height: 58px;">
               <router-link :to="`/item/` + catalogItem.id">{{ catalogItem.title }}</router-link>
            </div>
            <div class="product-article"><span>Артикул:</span> {{ catalogItem.article }}</div>
         </div>
      </div>
      <div class="product-item__bottom-right">
         <div class="product-item__buttons">
            <div class="product-amount">
               <div class="amount-title">Количество:</div>
               <div class="shop2-product-amount">
                  <button type="button" v-on:click="minusAmount()" class="amount-minus" tabindex="0">−</button>
                  <input type="text" v-model="amount" data-min="1">
                  <button type="button" v-on:click="plusAmount()" class="amount-plus" tabindex="0">+</button>
               </div>
            </div> 
            <button v-on:click="addToCart(catalogItem.id)" class="shop-product-btn type-2 buy" type="submit">
               <span>В корзину</span>
            </button>                      
         </div>
      </div>
   </div>
</div>                                         
</template>

<script>
import axios from 'axios'

export default {
   props: ["catalogItem"],
   name: 'webCatalogItem',
   data() {
      return {
         image: '',
         amount: 1,
         key: localStorage.getItem('cartKey'),
      }
   },
   methods: {
      mainImage() {
         this.catalogItem.images.forEach((item, i, array) => {
            if (array.lenght > 1) {
               if (item.isMain) {
                  console.log(item.link)
                  this.image = item.link
               }
            }
            if (array.lenght = 1 || !item.isMain) {
               this.image = item.link
            }
         })
      },
      minusAmount() {
         if (this.amount > 1) {
            this.amount--
         }
      },
      plusAmount() {
         this.amount++
      },
      async addToCart(id) {
         let cartKey = localStorage.getItem('cartKey')

         const response = await axios.post('cart/addProduct', {
            key: cartKey,
            product: Number(id),
            amount: Number(this.amount)
         })
         if (response.status < 300) {
            this.$emit('addedToCart')
            for (let i = 0; i < this.amount; i++) {
               this.$store.commit('PUSH_CART', id)
            }
         }
      },
   },
   computed: {
   },
   mounted() {
      this.mainImage()
   }
}
</script>

<style scoped>
.item-image-height {
   width: 265px;
   height: 265px;
   object-fit: contain;
}
.item-image-height img {
   width: 100%;
   height: 100%;
   object-position: center;
}
</style>