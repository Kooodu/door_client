<template>
    <body class="site gr_shop2_msg">
       <div class="site_wrap">
         <webMobileWrap
          :popup="mobile__modal"
          @closeModal="closeMobileModal"
        />
          <div class="site__wrapper">
            <webTopMenu />
             <div class="site__inner">
              <webSiteTop
                @showCategory="showCategoryList"
                @showModal="showMobileModal"
                @showFeedBack="this.feedBackModal = true"
                />
                <div class="site-content">
                   <div class="site-content__inner ">
                      <div class="site-content__inner_2 block_padding">
                        <webSiteCartLeft 
                        :list="category__list"
                        :closeList="category__list"
                        />
                        <div v-if="this.cart" class="site-content__right cart_page_no_sid">
                          <main class="site-main main-cart-page">
                              <div class="site-main__inner">
                                <h1>Корзина</h1>
                                <div class="shop2-cookies-disabled shop2-warning hide"></div>
                                <div v-if="this.orderErrors != ''" class="shop2-warning">
                                  <span>Внимание!</span>
                                  <ul>
                                    <li v-if="!this.orderErrors.orderType">Не выбран тип доставки</li>
                                    <li v-if="!this.orderErrors.fullName">Поле "ФИО" обязательно для заполнения!</li>
                                    <li v-if="!this.orderErrors.phone">Поле "Телефон" обязательно для заполнения!</li>
                                    <li v-if="!this.orderErrors.email">Поле "Email" обязательно для заполнения!</li>
                                  </ul>
                                </div>
                                <p v-if="!this.cart.products.length">Корзина пуста<br><br>
                                  <router-link to="/" class="shop2-btn">Перейти на главную магазина</router-link>
                                </p>
                                <div class="cart-table-back-pan"></div>
                                <div v-if="this.cart.products.length" id="shop2-cart">
                                    <div class="shop2-cart-table">
                                      <div class="shop2-cart-table__heading">
                                          <div class="shop2-cart-table__heading-left">
                                            <div class="shop2-cart-table__heading-item">Товар</div>
                                          </div>
                                          <div class="shop2-cart-table__heading-right">
                                            <div class="shop2-cart-table__heading-item">Цена</div>
                                            <div class="shop2-cart-table__heading-item">Кол-во</div>
                                            <div class="shop2-cart-table__heading-item">Сумма</div>
                                          </div>
                                      </div>
                                      <div class="cart-products">
                                        <webCartItem
                                          v-for="product in cart.products"
                                          :key="product.id"
                                          :cartItem="product"
                                          :cart="cart"
                                          @changeCount="recalcCart"
                                        />
                                      </div>
                                      <div class="shop2-cart-table__buttons_pan">
                                          <div class="shop2-cart-table__back_btn">
                                            <router-link to="/" class="shop2-btn"><span>К покупкам</span></router-link>
                                          </div>
                                          <div class="shop2-cart-table__cleanup">
                                            <div v-on:click="clearCart()" class="clear_btn">Очистить корзину</div>
                                          </div>
                                      </div>
                                    </div>
                                    <div class="cart-total">
                                      <div class="cart-total__inner">
                                          <div class="cart-total__heading">
                                            <div class="cart-total__header">Расчет</div>
                                            <div v-on:click="reloadLoc()" class="shop2-cart-update" v-bind:class="{ block: recalc__modal }">
                                                <div class="shop2-btn shop2-cart-update">Пересчитать</div>
                                            </div>
                                          </div>
                                          <div class="cart-total__items" v-bind:class="{ recalc_active: recalc__modal }">
                                            <div class="cart-total__item">
                                                <div class="cart-total__title">Сумма:</div>
                                                <div class="cart-total__body">{{total}} <span class="fa fa-rouble">₽</span></div>
                                            </div>
                                            <div class="cart-total__item last_item">
                                                <div class="cart-total__title">Итого:</div>
                                                <div class="cart-total__body">{{total}} <span class="fa fa-rouble">₽</span></div>
                                            </div>
                                          </div>
                                          <div class="cart-total__btns">
                                          </div>
                                      </div>
                                    </div>
                                </div>
                                <div v-if="this.cart.products.length" class="shop2-cart-order-form shop2-order-options shop2-order-in-one-page-form shop2-delivery" id="form_g-anketa">
                                    <h2>Доставка</h2>
                                    <div class="shop2-order-options shop2-delivery">
                                      <div class="options-list">
                                          <div class="option-type">
                                            <label class="option-label">
                                              <input v-model="orderType" name="delivery_id" type="radio" value="Самовывоз из офиса магазина">
                                              <span>Самовывоз из офиса магазина - бесплатно</span>
                                            </label>
                                          </div>
                                          <div class="option-type">
                                            <label class="option-label">
                                              <input v-model="orderType" name="delivery_id" type="radio" value="Доставка по городу">
                                              <span>Доставка по городу - от 950₽</span>
                                            </label>
                                          </div>
                                          <div class="option-type">
                                            <label class="option-label">
                                              <input v-model="orderType" name="delivery_id" type="radio" value="Доставка по Краснодарскому краю">
                                              <span>Доставка по Краснодарскому краю - Индивидуальный расчет</span>
                                            </label>
                                          </div>
                                          <div class="option-type">
                                            <label class="option-label">
                                              <input v-model="orderType" name="delivery_id" type="radio" value="Доставка транспортной компанией">
                                              <span>Доставка транспортной компанией - Индивидуальный расчет</span>
                                            </label>
                                          </div>
                                      </div>
                                    </div>
                                    <h2>Форма заказа</h2>
                                    <div class="shop2-order-form shop2-order-form--offset-left">
                                      <div class="form-item">
                                          <label>
                                          <strong>
                                          ФИО
                                          <span class="required">*</span>					</strong>
                                          <input v-model="fullName" type="text" name="order[fio]" id="user_fio" class="shop2-input">
                                          </label>
                                      </div>
                                      <div class="form-item">
                                          <label>
                                          <strong>
                                          Телефон
                                          <span class="required">*</span>					</strong>
                                          <input v-model="phone" type="text" name="order[phone]" id="user_phone" class="shop2-input">
                                          </label>
                                      </div>
                                      <div class="form-item">
                                          <label>
                                          <strong>
                                          Email
                                          <span class="required">*</span>					</strong>
                                          <input v-model="email" type="text" name="order[email]" id="user_email" class="shop2-input">
                                          </label>
                                      </div>
                                    </div>
                                    <div class="form-item form-item-submit">
                                      <button v-on:click="createOrder()" class="shop2-btn">Оформить заказ</button>
                                    </div>
                                    <textarea name="g-recaptcha-response" style="display: none !important;"></textarea>
                                  </div>
                              </div>
                          </main>
                          <!-- .site-main -->
                        </div>
                      </div>
                   </div>
                   <webSiteBrands />
                   <webSiteAdvantage />
                </div>
             </div>
             <div class="link-top-btn">&nbsp;</div>
             <webFooter />
             <!-- .site-footer -->
             <div class="block_padding"></div>
             <div class="w-embed">
             </div>
          </div>
          <!-- .site__wrapper -->   
       </div>
       <!-- assets.bottom -->
       <!-- </noscript></script></style> -->
       <!-- /assets.bottom -->
       <div id="shop2-msg" v-bind:class="{ block: showedCartPath }" style="left: 50%; top: 50%; position: fixed; margin-left: -240px; margin-top: -51px; display: none;">
        Добавлено в <router-link :to="`/cart/` + this.key">корзину</router-link>
    </div>
       <div class="remodal-wrapper remodal-is-opened" v-bind:class="{ block: feedBackModal }" style="display: none;">
            <div class="remodal remodal-is-initialized remodal-is-opened" data-remodal-id="form_top_popap">
                <button v-on:click="this.feedBackModal = false" data-remodal-action="close" class="close-button"><span>&nbsp;</span></button>
                <div class="form_top_wrap">
                    <div class="tpl-anketa">
                        <div class="tpl-anketa__left">
                        <div class="tpl-anketa__title">ОБРАТНЫЙ ЗВОНОК</div>
                        </div>
                        <div class="tpl-anketa__right">
                        <div>
                            <div class="tpl-field type-text">
                                <div class="field-title">Как вас зовут:</div>
                                <div class="field-value">
                                    <input v-model="feedBackName" type="text" size="30">
                                </div>
                            </div>
                            <div class="tpl-field type-phone field-required last-inline">
                                <div class="field-title">Телефон: <span class="field-required-mark">*</span></div>
                                <div class="field-value">
                                    <input v-model="feedBackPhone" type="text" size="30">
                                </div>
                            </div>
                            <div class="tpl-field tpl-field-button">
                                <button v-on:click="sendFeedBack()" type="submit" class="tpl-form-button">Перезвоните мне</button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="remodal-wrapper remodal-is-closed" v-bind:class="{ block: thankYouModal }" style="display: none;">
            <div class="remodal remodal-is-initialized remodal-is-closed" data-remodal-id="form_top_popap">
                <button v-on:click="this.thankYouModal = false" data-remodal-action="close" class="close-button"><span>&nbsp;</span></button>
                <div class="form_top_wrap">
                    <div class="tpl-anketa">
                        <div class="tpl-anketa__right tpl-anketa__posted">
                            <div class="tpl-anketa-success-note">Спасибо</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="remodal-wrapper remodal-is-closed" v-bind:class="{ block: showedOrderModal }" style="display: none;">
            <div class="remodal remodal-is-initialized remodal-is-closed" data-remodal-id="form_top_popap">
                <button v-on:click="closeThankForOrder()" data-remodal-action="close" class="close-button"><span>&nbsp;</span></button>
                <div class="form_top_wrap">
                    <div class="tpl-anketa">
                        <div class="tpl-anketa__right tpl-anketa__posted">
                            <div class="tpl-anketa-success-note">Спасибо</div>
                            <div class="tpl-anketa-success-note">Скоро с вами свяжутся по поводу дальнейших действий</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </body>
  </template>

<script>
import axios from 'axios'

import webMobileWrap from '../../components/models/site__samples/webMobileWrap.vue'
import webSiteTop from '../../components/models/site__samples/webSiteTop.vue'
import webTopMenu from '../../components/models/site__samples/webTopMenu.vue'
import webFooter from '../../components/models/site__samples/webFooter.vue'
import webSiteBrands from '../../components/models/site__samples/site__under/webSiteBrands.vue'
import webSiteAdvantage from '../../components/models/site__samples/site__under/webSiteAdvantage.vue'
import webSiteCartLeft from '../../components/models/site__samples/webSiteCartLeft.vue'
import webCartItem from '../../components/models/webCartItem.vue'

export default {
    name: 'webCart',
    components: {
        webSiteTop,
        webTopMenu,
        webFooter,
        webSiteCartLeft,
        webMobileWrap,
        webSiteBrands,
        webSiteAdvantage,
        webCartItem
    },
    data() {
        return {
            mobile__modal: false,
            category__list: false,
            cart: '',
            recalc__modal: false,
            total: '',
            // order
            key: this.$route.params.cartKey,
            orderType: '',
            fullName: '',
            phone: '',
            email: '',
            orderErrors: '',
            key: localStorage.getItem('cartKey'),
            // 
            feedBackModal: false,
            feedBackName: '',
            feedBackPhone: '',
            thankYouModal: false,
            // 
            showedOrderModal: false
        }
    },
    methods: {
        async clearCart() {
          const {data} = await axios.get('cart')
          localStorage.setItem('cartKey', data.key)
          this.$router.push(`/cart/${localStorage.getItem('cartKey')}`)
        },
        async sendFeedBack() {
            const response = await axios.post('feedback', {
                fullname: this.feedBackName,
                phone: this.feedBackPhone
            })
            if (response.status < 300) {
                this.feedBackModal = false
                this.thankYouModal = true
                this.feedBackName = ''
                this.feedBackPhone = ''
            }
        },
        async getCart() {
          let key = this.$route.params.cartKey
          const {data} = await axios.get(`cart/${key}`)
          this.cart = data

          let total = 0
          this.cart.products.map((item)=>{
            return total = total + (item.amount * item.product.price)
          })
          this.total = total
        },
        async createOrder() {
          const orderType = this.orderType != '' ? true : false
          const fullname = this.fullName != '' ? true : false
          const phone = this.phone != '' ? true : false
          const email = this.email !='' ? true : false

          if (Boolean(orderType && fullname && phone && email)) {
            const response = await axios.post('order', {
              cartKey: this.key,
              orderType: this.orderType,
              fullname: this.fullName,
              phone: this.phone,
              email: this.email
            })
            if (response.status < 300) {
              this.showedOrderModal = true
              const {data} = await axios.get('cart')
              localStorage.setItem('cartKey', data.key)
            }
          } else {
            this.orderErrors = {
              orderType: this.orderType != '' ? true : false,
              fullname: this.fullName != '' ? true : false,
              phone: this.phone != '' ? true : false,
              email: this.email !='' ? true : false
            }
            console.log(this.orderErrors)
            window.scrollTo(pageYOffset, 0)
          }
        },
        closeThankForOrder() {
          this.showedOrderModal = false
          this.$router.push(`/cart/${localStorage.getItem('cartKey')}`)
        },
        recalcCart() {
          this.recalc__modal = true
        },
        reloadLoc() {
          location.reload()
        },
        showMobileModal() {
            this.mobile__modal = true
        },
        closeMobileModal() {
            this.mobile__modal = false
        },
        showCategoryList() {
            this.category__list = !this.category__list
        },
    },
    watch: {
      "$route.query": {
        deep: true,
        handler() {
          location.reload()
        }
      },
    },
    mounted() {
      this.getCart()
    }
}
</script>

<style scoped>
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
</style>