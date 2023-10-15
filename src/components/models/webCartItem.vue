<template>
    <div class="cart-products__item">
    <div class="cart-products__left">
        <div class="cart-product">
            <div class="contain_img">
                <router-link :to="`/item/` + cartItem.product.id">
                    <img :src="image" class="item-image-height">
                </router-link>
            </div>
            <div class="cart-product__details">
                <div class="cart-product__details-top">
                    <div class="cart-product__name">
                        <router-link :to="`/item/` + cartItem.product.id">
                        {{ cartItem.product.title }}
                        </router-link>
                    </div>
                    <div class="cart-product__vendor">
                        <router-link :to="`/fabricator/` + fabricator.id">{{ fabricator.title }}</router-link>
                    </div>
                </div>
                <div class="cart-products__right hidden-right">
                    <div class="cart-price">{{ cartItem.product.price }}
                        <span class="fa fa-rouble">₽</span>									
                    </div>
                    <div class="cart-amount">
                        <div class="shop2-product-amount">
                            <button type="button" v-on:click="minusAmount()" class="shop2-btn amount-minus">−</button>
                            <input v-model="amount" type="text">
                            <button type="button" v-on:click="plusAmount()" class="shop2-btn amount-plus">+</button>
                        </div>
                    </div>
                    <div class="cart-sum">{{ amount * cartItem.product.price }}<span class="fa fa-rouble">₽</span>																														
                    </div>
                    <div class="cart-delete" v-on:click="delItem()">
                        <a class="gr-icon-btn" style="fill: black;">Удалить></a>
                    </div>
                </div>
            </div>
            <div class="cart-products__right hidden-right-2">
                <div class="cart-price">{{ cartItem.product.price }}
                    <span class="fa fa-rouble">₽</span>									
                </div>
                <div class="cart-amount">
                    <div class="shop2-product-amount">
                        <button type="button" v-on:click="minusAmount()" class="shop2-btn amount-minus">−</button>
                        <input v-model="amount" type="text">
                        <button type="button" v-on:click="plusAmount()" class="shop2-btn amount-plus">+</button>
                    </div>
                </div>
                <div class="cart-sum">{{ amount * cartItem.product.price }}<span class="fa fa-rouble">₽</span>																														
                </div>
                <div class="cart-delete" v-on:click="delItem()">
                    <a class="gr-icon-btn" style="fill: black;">Удалить></a>
                </div>
            </div>
        </div>
    </div>
    <div class="cart-products__bottom">
        <div class="cart-params">
            <div class="cart-params__btn" v-on:click="showParams()">
                <span v-if="!showed__params">Показать параметры</span>
                <span v-if="showed__params">Скрыть параметры</span>
            </div>
            <div class="cart-params__body" v-bind:class="{ block: showed__params }">
                <div class="cart-product-article"><span>Артикул:</span>{{ cartItem.product.article }}</div>
                <ul class="cart-params__list">
                    <li v-for="parameter in parameters" :key="parameter.id">
                        <div class="cart-params__title">{{ parameter.key }}:</div>
                        <div class="cart-params__value">{{ parameter.value }}</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <div class="cart-products__right showed-right">
        <div class="cart-price">{{ cartItem.product.price }}
            <span class="fa fa-rouble">₽</span>									
        </div>
        <div class="cart-amount">
            <div class="shop2-product-amount">
                <button type="button" v-on:click="minusAmount()" class="shop2-btn amount-minus">−</button>
                <input v-model="amount" type="text">
                <button type="button" v-on:click="plusAmount()" class="shop2-btn amount-plus">+</button>
            </div>
        </div>
        <div class="cart-sum">{{ amount * cartItem.product.price }}<span class="fa fa-rouble">₽</span>																														
        </div>
        <div class="cart-delete" v-on:click="delItem()">
            <a class="gr-icon-btn" title="Удалить">Удалить></a>
        </div>
    </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    props: ["cartItem", "cart"],
    name: 'webCartItem',
    data() {
        return {
            image: '',
            amount: this.cartItem.amount,
            parameters: [],
            fabricator: '',
            showed__params: false,
            key: localStorage.getItem('cartKey'),
        }
    },
    methods: {
        async mainImage() {
            await this.cartItem.product.images.forEach((item, i, array) => {
                if (array.lenght > 1) {
                if (item.isMain) {
                    this.image = item.link
                }
                }
                if (array.lenght = 1 || !item.isMain) {
                    this.image = item.link
                }
            });
        },
        async getParams() {
            const {data} = await axios.get(`product/${this.cartItem.product.id}`)
            this.parameters = data.parameters
            this.fabricator = data.fabricator
        },
        showParams() {
            this.showed__params = !this.showed__params
        },
        minusAmount() {
            if (this.amount > 1) {
                this.amount--
            }
        },
        plusAmount() {
            this.amount++
        },
        async addProduct(new__amount, old__amount, cartKey) {
            const response = await axios.post('cart/addProduct', {
                key: cartKey,
                product: Number(this.cartItem.product.id),
                amount: Number(new__amount - old__amount)
            })
        },
        async removeProduct(new__amount, old__amount, cartKey) {
            const response = await axios.post('cart/removeProduct', {
                key: cartKey,
                product: Number(this.cartItem.product.id),
                amount: Number(old__amount - new__amount)
            })
        },
        async delItem() {
            let cartKey = localStorage.getItem('cartKey')

            const response = await axios.post('cart/removeProduct', {
                key: cartKey,
                product: Number(this.cartItem.product.id),
                amount: Number(this.amount)
            })
            if (response.status < 204) {
                this.$store.commit('SPLICE_ALL_CART', this.cartItem.product.id)
                location.reload()
            }
        }
    },
    watch: {
        amount(new__amount, old__amount) {
            this.$emit('changeCount')

            let cartKey = localStorage.getItem('cartKey')

            if (old__amount > new__amount) {
                this.removeProduct(new__amount, old__amount, cartKey)
            }
            if (new__amount > old__amount) {
                this.addProduct(new__amount, old__amount, cartKey)
            }
        }
    },
    mounted() {
        this.mainImage(),
        this.getParams()
    }
}
</script>

<style scoped>
.contain_img {
    margin: 0px 20px 0px 0px;
}
.item-image-height {
   width: 106px;
   height: 120px;
   object-fit: contain;
}
.item-image-height img {
   width: 100%;
   height: 100%;
   object-position: center;
}
@keyframes highHeight {
   from {
      opacity: 0;
   }
   to {
      opacity: 1;
   }
}
.block {
   display: block !important;
   animation-name: highHeight;
   animation-duration: 0.5s;
}
.cart-params__btn {
    height: 28px;
}
.showed-right {
    display: flex;
}
.hidden-right {
    display: none;
}
.hidden-right-2 {
    display: none;
}
@media (max-width: 991px) {
    .showed-right {
        display: none;
    }
    .hidden-right {
        display: flex;
    }
}
@media (max-width: 640px) {
    .hidden-right {
        display: none;
    }
    .hidden-right-2 {
        display: flex;
    }
}
</style>