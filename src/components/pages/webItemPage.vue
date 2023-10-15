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
               <div class="site-content content_shop_pages">
                  <div class="site-content__inner ">
                     <div class="site-content__inner_2 block_padding">
                        <webSiteLeft
                        :list="category__list"
                        :closeList="category__list"
                        />
                        <div v-if="this.item" class="site-content__right">
                           <main class="site-main">
                              <div class="site-main__inner">
                                 <h1>{{ this.item.title }}</h1>
                                 <div class="shop2-cookies-disabled shop2-warning hide"></div>
                                 <div class="card-page gr_image_object">
                                    <div class="tpl-rating-block hide">
                                       Рейтинг:
                                       <div class="tpl-stars hide">
                                          <div class="tpl-rating" style="width: 0%;"></div>
                                       </div>
                                       (0 голосов)
                                    </div>
                                    <div class="card-page__top">
                                       <div class="card-page__right">
                                          <div class="shop2-product">
                                             <div class="shop2-product__inner">
                                                <div class="form-additional">
                                                   <div class="product-flags-wrap">
                                                      <div class="product-flags">
                                                         <div class="product-flags__left">
                                                            <div class="product-flags__item new_item"><span>New</span></div>
                                                         </div>
                                                         <div class="product-flags__right">
                                                         </div>
                                                      </div>
                                                   </div>
                                                   <div class="product-price">
                                                      <div class="price-current">
                                                         <strong>{{ this.item.price }}</strong>
                                                         <span class="fa fa-rouble">₽</span>	
                                                      </div>
                                                   </div>
                                                   <div class="product-amount">
                                                      <div class="amount-title">Количество:</div>
                                                      <div class="shop2-product-amount">
                                                         <button v-on:click="minusAmount()" type="button" class="amount-minus">−</button>
                                                         <input v-model="amount" type="text" name="amount">
                                                         <button v-on:click="plusAmount()" type="button" class="amount-plus">+</button>
                                                      </div>
                                                   </div>
                                                   <button v-on:click="addToCart()" class="shop-product-btn type-3 buy">
                                                      <span>В корзину</span>
                                                   </button>												
                                                   <div v-on:click="this.showFastOrder = true" class="buy-one-click gr-button-3">
                                                      Быстрый заказ
                                                   </div>
                                                </div>
                                                <div class="shop2-product__top">
                                                   <div class="shop2-product-article"><span>Артикул:</span> {{ this.item.article }}</div>
                                                </div>
                                                <div class="shop2-product__vendor">
                                                   <router-link :to="`/fabricator/`+ this.item.fabricator.id">{{ this.item.fabricator.title }}</router-link>
                                                </div>
                                                <div class="shop2-product__options">
                                                   <div class="shop2-product-options">
                                                      <div class="option-item even type-select" v-bind:class="{ block: showed__all__params }" v-for="param in item.parameters" :key="param.id">
                                                         <div class="option-title">{{ param.key }}</div>
                                                         <div class="option-body">{{ param.value }}</div>
                                                      </div>
                                                   </div>
                                                   <div class="options-more" v-on:click="showAllParams()" style="display: block;">
                                                      <span v-if="!showed__all__params">Все параметры</span>
                                                      <span v-if="showed__all__params">Cкрыть параметры</span>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                       <div class="card-page__left">
                                          <div class="card-slider vertical">
                                             <div class="card_page_compare comp_right">
                                             </div>
                                             <div class="card-slider__items slick-initialized slick-slider">
                                                <div aria-live="polite" class="slick-list">
                                                   <div class="slick-track" role="listbox" style="opacity: 1; width: 1170px;">
                                                      <div class="card-slider__item slick-slide slick-current slick-active" style="width: 480px; position: relative; left: 0px; top: 0px; z-index: 999; opacity: 1;">
                                                         <div class="card-slider__image contain_img">
                                                            <a class="gr-image-zoom" :href="currentImage">
                                                               <img class="item-image" :src="currentImage">
                                                            </a>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                             <div class="card-slider__thumbs">
                                                <div class="card-slider__thumbs-slider slick-initialized slick-slider slick-vertical">
                                                   <div aria-live="polite" class="slick-list draggable">
                                                      <div class="slick-track" role="listbox" style="opacity: 1; transform: translate3d(0px, 0px, 0px);">
                                                         <div v-on:click="setImage(img.link)" v-for="img in item.images" :key="img.id" class="card-slider__thumb slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" tabindex="-1" role="option" aria-describedby="slick-slide10" style="width: 80px;">
                                                            <div class="card-slider__thumb-img">
                                                               <a href="javascript:" :style="`background-image: url(${img.link});`" class="contain_img">
                                                                  <img :src="img.link">
                                                               </a>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          <div class="pluso-share">
                                             <div v-on:click="showLinks()" class="pluso-share__title">Поделиться</div>
                                             <div class="pluso-share__body" v-bind:class="{ block: showedLinks }">
                                                <div class="ya-share2 ya-share2_inited">
                                                   <div class="ya-share2__container ya-share2__container_size_m ya-share2__container_color-scheme_normal ya-share2__container_shape_normal">
                                                      <ul class="ya-share2__list ya-share2__list_direction_horizontal">
                                                         <li class="ya-share2__item ya-share2__item_service_messenger">
                                                            <a class="ya-share2__link">
                                                               <span class="ya-share2__badge">
                                                                  <img class="ya-share2__icon" src="../../../public/telegram.png">
                                                               </span>
                                                            </a>
                                                         </li>
                                                         <li class="ya-share2__item ya-share2__item_service_messenger">
                                                            <a class="ya-share2__link">
                                                               <span class="ya-share2__badge">
                                                                  <img class="ya-share2__icon" src="../../../public/vk.png">
                                                               </span>
                                                            </a>
                                                         </li>
                                                         <li class="ya-share2__item ya-share2__item_service_messenger">
                                                            <a class="ya-share2__link">
                                                               <span class="ya-share2__badge">
                                                                  <img class="ya-share2__icon" src="../../../public/whatsapp.png">
                                                               </span>
                                                            </a>
                                                         </li>
                                                      </ul>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                    <div class="card-page__bottom">
                                       <div id="product-tabs" class="shop-product-data r-tabs">
                                          <ul class="shop-product-data__nav r-tabs-nav">
                                             <li v-on:click="showDescription()" class="r-tabs-state-default r-tabs-tab" v-bind:class="{ 'r-tabs-state-active active-tab': description__active }"><a class="r-tabs-anchor">Описание</a></li>
                                             <li v-on:click="showParams()" class="r-tabs-state-default r-tabs-tab" v-bind:class="{ 'r-tabs-state-active active-tab': params__active }"><a class="r-tabs-anchor">Параметры</a></li>
                                             <li v-on:click="showReviews()" class="r-tabs-state-default r-tabs-tab" v-bind:class="{ 'r-tabs-state-active active-tab': reviews__active }"><a class="r-tabs-anchor"><span>Отзывы</span></a></li>
                                             <li v-on:click="showDelivery()" class="r-tabs-state-default r-tabs-tab" v-bind:class="{ 'r-tabs-state-active active-tab': delivery__active }"><a class="r-tabs-anchor">Доставка</a></li>
                                          </ul>
                                          <div class="shop-product-data__desc">
                                             <div v-on:click="showDescriptionMobile()" class="r-tabs-accordion-title" v-bind:class="{ 'r-tabs-state-active': description__active }"><a class="r-tabs-anchor">Описание</a></div>
                                             <div v-html="this.item.description" class="desc-area r-tabs-panel r-tabs-state-default html_block" v-bind:class="{ 'active-area r-tabs-state-active block': description__active }"></div>
                                             <div v-on:click="showParamsMobile()" class="r-tabs-accordion-title" v-bind:class="{ 'r-tabs-state-active': params__active }"><a class="r-tabs-anchor">Параметры</a></div>
                                             <div class="desc-area r-tabs-panel r-tabs-state-default params_block" v-bind:class="{ 'active-area r-tabs-state-active block': params__active }">
                                                <div class="shop2-product-params">
                                                   <div v-for="param in this.item.parameters" :key="param.id" class="param-item odd">
                                                      <div class="param-title">{{ param.key }}</div>
                                                      <div class="param-body">{{ param.value }}</div>
                                                   </div>
                                                </div>
                                             </div>
                                             <div v-on:click="showReviewsMobile()" class="r-tabs-accordion-title" v-bind:class="{ 'r-tabs-state-active': reviews__active }"><a class="r-tabs-anchor"><span>Отзывы</span></a></div>
                                             <div class="desc-area r-tabs-panel r-tabs-state-default comments_block" v-bind:class="{ 'active-area r-tabs-state-active block': reviews__active }">
                                                <div class="comments-block comments_form">
                                                   <div class="comments">
                                                      <div v-for="com in this.item.reviews" :key="com.id" class="comment">
                                                         <div class="comment-text">{{ com.value }}</div>
                                                      </div>
                                                   </div>
                                                   <div class="comments-form">
                                                      <div class="comments-form__body">
                                                         <div class="comments-form__title">Оставить комментарий</div>
                                                         <div class="tpl-info">
                                                            Заполните обязательные поля <span class="tpl-required">*</span>.
                                                         </div>
                                                         <div>
                                                            <div class="tpl-field">
                                                               <label class="field-title" for="d[1]">
                                                               Комментарий:
                                                               <span class="tpl-required">*</span>
                                                               </label>
                                                               <div class="tpl-value" style="position: relative;">
                                                                  <textarea v-model="reviewText" cols="55" rows="3" name="text"></textarea>
                                                               </div>
                                                            </div>
                                                            <div class="tpl-field-button">
                                                               <button v-on:click="sendItemReview()" type="submit" class="gr-button-1">
                                                               Отправить
                                                               </button>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                             <div v-on:click="showDeliveryMobile()" class="r-tabs-accordion-title" v-bind:class="{ 'r-tabs-state-active': delivery__active }"><a class="r-tabs-anchor">Доставка</a></div>
                                             <div class="desc-area r-tabs-panel r-tabs-state-default html_block" v-bind:class="{ 'active-area r-tabs-state-active block': delivery__active }">
                                                <p>Обращаем Ваше внимание, что текстовая информация на сайте должна быть индивидуальной, не скопированной с других Интернет-ресурсов, о чем указано в рекомендациях Яндекса: «Мы стараемся не индексировать или не ранжировать высоко сайты, копирующие информацию с других ресурсов и не создающие оригинального контента или сервиса».<br>
                                                   &nbsp;
                                                </p>
                                                <div class="table-wrapper">
                                                   <table align="center" class="table0" style="border: 1px solid #f5f5f5;border-radius: 4px;">
                                                      <tbody>
                                                         <tr>
                                                            <td style="padding: 15px 10px 15px 35px;">
                                                               <p><strong>Быстрая доставка </strong><br>
                                                                  <span >В этом блоке мы рекомендуем разместить информацию о Вашей организации, подчеркнуть ее значимость и надежность на рынке оказываемых услуг или предлагаемых товаров.</span>
                                                               </p>
                                                               &nbsp;
                                                               <p><strong>Бесплатный самовывоз</strong><br>
                                                                  <span>В этом блоке мы рекомендуем разместить информацию о Вашей организации, подчеркнуть ее значимость и надежность на рынке оказываемых услуг или предлагаемых товаров.</span>
                                                               </p>
                                                            </td>
                                                            <td style="padding: 15px 10px 15px 35px;">
                                                               <p><strong>Резка пиломатериалов</strong><br>
                                                                  <span >В этом блоке мы рекомендуем разместить информацию о Вашей организации, подчеркнуть ее значимость и надежность на рынке оказываемых услуг или предлагаемых товаров.</span>
                                                               </p>
                                                               &nbsp;
                                                               <p><strong>Колеровка краски</strong><br>
                                                                  <span >В этом блоке мы рекомендуем разместить информацию о Вашей организации, подчеркнуть ее значимость и надежность на рынке оказываемых услуг или предлагаемых товаров.</span>
                                                               </p>
                                                            </td>
                                                         </tr>
                                                      </tbody>
                                                   </table>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </main>
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
           </div>
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
        <div class="remodal-wrapper remodal-is-opened" v-bind:class="{ block: showFastOrder }" style="display: none;">
            <div class="remodal remodal-is-initialized remodal-is-opened" data-remodal-id="one-click" role="dialog" data-remodal-options="hashTracking: false" tabindex="-1">
               <button v-on:click="this.showFastOrder = false" data-remodal-action="close" class="gr-icon-btn remodal-close-btn"><span>Закрыть</span></button>
               <div class="tpl-anketa">
                  <div class="tpl-anketa__left">
                     <div class="tpl-anketa__title">КУПИТЬ В ОДИН КЛИК</div>
                  </div>
                  <div class="tpl-anketa__right">
                     <div>
                        <div class="field-title">Доставка</div>
                        <div class="shop2-order-options shop2-delivery">
                           <div class="options-list">
                              <div class="option-type">
                                 <label class="option-label">
                                    <input v-model="orderType" name="delivery_id" type="radio" value="Самовывоз из офиса магазина">
                                    <span style="font: 600 14px/ normal Montserrat !important;">Самовывоз из офиса магазина - бесплатно</span>
                                 </label>
                              </div>
                              <div class="option-type">
                                 <label class="option-label">
                                    <input v-model="orderType" name="delivery_id" type="radio" value="Доставка по городу">
                                    <span style="font: 600 14px/ normal Montserrat !important;">Доставка по городу - от 950₽</span>
                                 </label>
                              </div>
                              <div class="option-type">
                                 <label class="option-label">
                                    <input v-model="orderType" name="delivery_id" type="radio" value="Доставка по Краснодарскому краю">
                                    <span style="font: 600 14px/ normal Montserrat !important;">Доставка по Краснодарскому краю - Индивидуальный расчет</span>
                                 </label>
                              </div>
                              <div class="option-type">
                                 <label class="option-label">
                                    <input v-model="orderType" name="delivery_id" type="radio" value="Доставка транспортной компанией">
                                    <span style="font: 600 14px/ normal Montserrat !important;">Доставка транспортной компанией - Индивидуальный расчет</span>
                                 </label>
                              </div>
                           </div>
                        </div>
                        <div class="tpl-field type-text field-required">
                           <div class="field-title">Ваше Имя: <span class="field-required-mark">*</span></div>
                           <div class="field-value">
                              <input v-model="fastOrderName" type="text" required="" size="30">
                           </div>
                        </div>
                        <div class="tpl-field type-phone field-required">
                           <div class="field-title">Телефон: <span class="field-required-mark">*</span></div>
                           <div class="field-value">
                              <input v-model="fastOrderPhone" type="text" required="" size="30">
                           </div>
                        </div>
                        <div class="tpl-field type-email field-required last-inline">
                           <div class="field-title">E-mail: <span class="field-required-mark">*</span></div>
                           <div class="field-value">
                              <input v-model="fastOrderEmail" type="text" required="" size="30">
                           </div>
                        </div>
                        <div class="tpl-field tpl-field-button">
                           <button v-on:click="createFastOrder()" type="submit" class="tpl-form-button">Отправить</button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div class="remodal-wrapper remodal-is-closed" v-bind:class="{ block: showThankYouOrder }" style="display: none;">
            <div class="remodal remodal-is-initialized remodal-is-closed" data-remodal-id="form_top_popap">
                <button v-on:click="this.showThankYouOrder = false" data-remodal-action="close" class="close-button"><span>&nbsp;</span></button>
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

import webSiteBrands from '../models/site__samples/site__under/webSiteBrands.vue'
import webSiteAdvantage from '../models/site__samples/site__under/webSiteAdvantage.vue'
import webSiteTop from '../models/site__samples/webSiteTop.vue'
import webTopMenu from '../models/site__samples/webTopMenu.vue'
import webSiteLeft from '../models/site__samples/webSiteLeft.vue'
import webFooter from '../models/site__samples/webFooter.vue'
import webMobileWrap from '../models/site__samples/webMobileWrap.vue'

   export default {
      name: 'webItemPage',
      components: {
         webSiteTop,
         webTopMenu,
         webSiteLeft,
         webFooter,
         webMobileWrap,
         webSiteBrands,
         webSiteAdvantage
      },
      data() {
         return {
            item: '',
            image: '',
            mainImage: '',
            categories: [],
            mobile__modal: false,
            category__list: false,
            showed__all__params: false,
            description__active: true ,
            params__active: false,
            reviews__active: false,
            delivery__active: false,
            amount: 1,
            id: this.$route.params.itemId,
            key: localStorage.getItem('cartKey'),
            showedCartPath: false,
            feedBackModal: false,
            feedBackName: '',
            feedBackPhone: '',
            thankYouModal: false,
            showedLinks: true,
            reviewText: '',
            showFastOrder: false,
            orderType: null,
            fastOrderName: null,
            fastOrderPhone: null,
            fastOrderEmail: null,
            allFieldError: false,
            showThankYouOrder: false
         }
      },
      methods: {
         async getItem() {
            const {data} = await axios.get(`product/${this.id}`)
            this.item = data

            await this.item.images.forEach((item, i, array) => {
               if (array.lenght > 1) {
                  if (item.isMain) {
                     this.mainImage = item.link
                  }
               }
               if (array.lenght = 1 || !item.isMain) {
                  this.mainImage = item.link
               }
            })
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
         sendItemReview() {
            axios.post('product/review', {
               product: Number(this.item.id),
               value: this.reviewText
            })
            location.reload()
         },
         setImage(link) {
            this.image = link
         },
         async getCategories() {
            const {data} = await axios.get('category')
            this.categories = data
         },
         async addToCart() {
            const response = await axios.post('cart/addProduct', {
            key: this.key,
            product: Number(this.id),
            amount: Number(this.amount)
            })
            if (response.status < 300) {
               this.showedCartPath = true
               setTimeout(() => {
                  this.showedCartPath = false
               }, 2500)
               this.$emit('addedToCart')
               for (let i = 0; i < this.amount; i++) {
                  this.$store.commit('PUSH_CART', this.id)
               }
            }
         },
         async createFastOrder() {
            const {data} = await axios.get('cart')
            let oneKey = data.key

            await axios.post('cart/addProduct', {
               key: oneKey,
               product: Number(this.item.id),
               amount: Number(this.amount)
            })

            const orderType = this.orderType != null ? true : false
            const fullname = this.fastOrderName != null ? true : false
            const phone = this.fastOrderPhone != null ? true : false
            const email = this.fastOrderEmail != null ? true : false

            if (Boolean(fullname && phone && email && orderType)) {
               const response = await axios.post('order', {
                  cartKey: oneKey,
                  orderType: this.orderType,
                  fullname: this.fastOrderName,
                  phone: this.fastOrderPhone,
                  email: this.fastOrderEmail
               })
               if (response.status < 300) {
                  this.showFastOrder = false
                  this.showThankYouOrder = true
               }
            }
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
         showAllParams() {
            this.showed__all__params = !this.showed__all__params
         },
         falseAll() {
            this.description__active = false
            this.params__active = false
            this.reviews__active = false
            this.delivery__active = false
         },
         showDescription() {
            this.falseAll()
            this.description__active = true
         },
         showParams() {
            this.falseAll()
            this.params__active = true
         },
         showReviews() {
            this.falseAll()
            this.reviews__active = true
         },
         showDelivery() {
            this.falseAll()
            this.delivery__active = true
         },
         showDescriptionMobile() {
            this.params__active = false
            this.reviews__active = false
            this.delivery__active = false
            this.description__active = !this.description__active
         },
         showParamsMobile() {
            this.description__active = false
            this.reviews__active = false
            this.delivery__active = false
            this.params__active = !this.params__active
         },
         showReviewsMobile() {
            this.description__active = false
            this.delivery__active = false
            this.params__active = false
            this.reviews__active = !this.reviews__active
         },
         showDeliveryMobile() {
            this.description__active = false
            this.params__active = false
            this.reviews__active = false
            this.delivery__active = !this.delivery__active
         },
         plusAmount() {
            this.amount++
         },
         minusAmount() {
            if (this.amount > 1) {
               this.amount--
            }
         },
         showLinks() {
            this.showedLinks = !this.showedLinks
         }
      },
      watch: {
         "$route.query": {
            deep: true,
            handler() {
                location.reload()
            }
         },
      },
      computed: {
         currentImage() {
            if (this.image) {
               return this.image
            } else {
               return this.mainImage
            }
         }
      },
      mounted() {
         this.getItem(),
         this.getCategories()
      }
   }
</script>

<style scoped>
.comments {
   display: flex;
   flex-direction: column;
}
.comment {
   width: 100%;
   min-height: 80px;
   border: 1px solid black;
   background: #fff;
   border-radius: 8px;
   transition: all 0.3s;
   margin: 0px 0px 20px 0px;
   word-break: break-word;
}
.comment-text {
   color: #101010;
   font: 400 15px/ normal Montserrat, sans-serif;
   padding: 10.5px 20px;
}
@keyframes highHeight {
   from {
      opacity: 0;
   }
   to {
      opacity: 1;
   }
}
.active-tab {
   animation-name: highHeight;
   animation-duration: 0.7s;
}
.r-tabs-tab {
   cursor: pointer;
}
.block {
   display: block !important;
   animation-name: highHeight;
   animation-duration: 0.5s;
}
.ya-share2__list_direction_horizontal {
   display: flex;
   flex-direction: row;
}
.pluso-share {
   display: flex;
   flex-direction: row;
   align-items: center;
}
ul {
   margin: 0;
   padding: 0;
}
.ya-share2__item:not(:last-child) {
   margin: 0px 5px 0px 0px;
}
@media (max-width: 767px) {
   .slick-track {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      width: 100% !important;
   }
   .card-slider__item {
      width: 100% !important;
   }
   .pluso-share {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
   }
}
</style>
