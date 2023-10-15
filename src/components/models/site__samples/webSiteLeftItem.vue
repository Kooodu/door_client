<template>
                                    <div class="main-lots-items">
                                         <div class="shop2-product-item product-item">
                                            <div class="product-item__top">
                                               <div class="product-item__image contain_img">
                                                  <router-link :to="'/item/' + this.item.id">
                                                    <img :src="this.image">
                                                  </router-link>
                                               </div>
                                               <div class="product-price">
                                                  <!-- <div class="price-old question"><span>
                                                     <strong>1&nbsp;200</strong>
                                                     <span class="fa fa-rouble">₽</span>						</span>
                                                  </div>
                                                  <div class="shop2-product-discount-desc">
                                                     10% СКИДКИ - Срок акции ограничен!
                                                  </div> -->
                                                  <div class="price-current">
                                                     <strong>{{ this.item.price }}</strong>
                                                     <span class="fa fa-rouble">₽</span>	
                                                  </div>
                                               </div>
                                            </div>
                                            <div class="product-item__bottom">
                                               <div class="product-item__bottom-left">
                                                  <div class="product-item__heading">
                                                     <div class="tpl-stars hide">
                                                        <div class="tpl-rating" style="width: 0%;"></div>
                                                     </div>
                                                     <div class="product-item__name">
                                                        <router-link :to="'/item/' + this.item.id">{{ this.item.title }}</router-link>
                                                     </div>
                                                     <div class="product-article"><span>Артикул:</span> {{ this.item.article }}</div>
                                                  </div>
                                               </div>
                                               <div class="product-item__bottom-right">
                                                  <div class="product-item__buttons">
                                                     <button v-on:click="addToCart(this.item.id)" class="shop-product-btn type-2 buy">
                                                        <span>В корзину</span>
                                                     </button>                     
                                                  </div>
                                               </div>
                                            </div>
                                          </div>
                                      </div>
</template>

<script>
import axios from 'axios'

export default {
    props: ["item"],
    name: "webSiteLeftItem",
    data() {
        return {
            image: ""
        };
    },
    methods: {
        async mainImage() {
            await this.item.images.forEach((item, i, array) => {
                if (array.lenght > 1) {
                    if (item.isMain) {
                        this.image = item.link;
                    }
                }
                if (array.lenght = 1 || !item.isMain) {
                    this.image = item.link;
                }
            });
        },
        async addToCart(id) {
            let cartKey = localStorage.getItem('cartKey')

            const response = await axios.post('cart/addProduct', {
                key: cartKey,
                product: Number(id),
                amount: Number(1)
            })
            if (response.status < 300) {
                for (let i = 0; i < 1; i++) {
                    this.$store.commit('PUSH_CART', id)
                }
            }
        }
    },
    mounted() {
        this.mainImage()
    },
}
</script>

<style>

</style>