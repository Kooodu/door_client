<template>
   <header class="site-header block_padding no_border">
      <div class="company-info">
         <div class="company-info__name_desc">
            <!-- <span class="company-info__name">
            Название компании
            </span>
            <div class="company-info__descr">Магазин стройматериалов</div> -->
            <img src="../../../../public/Logo.png" alt="" class="header__logo__png">
         </div>
      </div>
      <div class="head-contacts">
         <div class="head-contacts__inner">
            <div class="head-contacts__address">
               <div class="head-contacts__title">г. Краснодар</div>
               <div class="head-contacts__body">Центральный микрорайон, <br/>ул. Кирова, д. 151</div>
            </div>
            <div class="head-contacts__phones">
               <div class="head-contacts__phones-inner">
                  <div class="div-block">
                     <div>
                        <span class="phone-num__title"></span>
                        <a href="tel:8 989 827 53 51" class="link">8 989 827 53 51</a>
                     </div>
                  </div>
                  <div class="head-contacts__phone-time">Пн-Вс: 8:00 - 18:00</div>
               </div>
            </div>
         </div>
         <div class="head-conracts__recall"><span v-on:click="showFeedBack()" data-remodal-target="form_top_popap" class="head-conracts__recall-btn w-button">Обратный звонок</span></div>
      </div>
   </header>
   <div class="shop-modules block_padding shop_modules_new_style">
      <div class="shop-modules__inner">
         <div v-on:click="showCategory()" class="shop-modules__folders" v-bind:class="{ button__border: !showed__category }">
            <div class="shop-modules__folders-title">КАТАЛОГ ТОВАРОВ</div>
            <div class="shop-modules__folder-icon"></div>
         </div>
         <div v-on:click="showModal()" class="shop-modules__folders_mobile">
            <div class="shop-modules__folder-icon"></div>
         </div>
         <div class="shop-modules__search">
            <div v-on:click="showPopup()" data-remodal-target="search_popap" class="shop-modules__search-popup w-button">ПАРАМЕТРЫ</div>
            <nav class="search_catalog_top">
               <div class="shop-modules__search-form w-form">
                  <input v-on:keyup.enter="search()" placeholder="Я ищу…" class="shop-modules__search-input w-input" v-model="searchText1Input">
                  <button v-on:click="search()" class="shop-modules__search-btn w-button">Найти</button>
               </div>
            </nav>
         </div>
         <div v-on:click="this.infoModal = true" class="mobile-contacts" data-remodal-target="contact_popap">&nbsp;</div>
         <div v-on:click="this.searchModal = true" class="mobile-search" data-remodal-target="search_popap">&nbsp;</div>
         <!-- <div class="compare-block">
            <a href="https://materials-store.oml.ru/magazin/compare" class="compare-block__link" target="_blank">&nbsp;</a>
            <div class="compare-block__amount">0</div>
         </div> -->
         <router-link :to="`/cart/` + cartKey" class="gr-cart-preview">
            <div id="shop2-cart-preview">
               <a class="">
                  <span class="gr-cart-total-amount shop-modules__cart-amount">{{ this.$store.getters.CART.length }}</span>
               </a>
            </div>
         </router-link>
      </div>
   </div>
   <div class="remodal-wrapper" v-bind:class="{ block: popup__show }" style="display: none;">
      <div class="remodal remodal-is-initialized" data-remodal-id="search_popap" role="dialog" data-remodal-options="hashTracking: false" tabindex="-1">
         <button v-on:click="showPopup()" data-remodal-action="close" class="close-button"><span>&nbsp;</span></button>
         <div class="search_buttons">
            <div class="search_catalog_title active">ПОИСК</div>
            <div class="search_param_title">ПАРАМЕТРЫ</div>
         </div>
         <nav class="search_catalog"></nav>
         <div class="search_form_wrap">
            <div class="shop2-block search-form">
               <div class="search-form__inner">
                  <div class="search-form__header">ПОИСК ПО ПАРАМЕТРАМ</div>
                  <div class="search-rows">
                     <div>
                        <input type="hidden" name="sort_by" value="">
                        <div class="search-rows__row gr-field-style float_row">
                           <div class="row-title field-title">Цена (<span class="fa fa-rouble">₽</span>)<span style="display: inline-block;">:</span></div>
                           <div class="row-body">
                              <label class="input-from">
                              <span class="from_title hide">от</span>
                              <input v-model="searchMinPriceInput" type="text" size="5" class="small" placeholder="от" data-range_min="0">
                              </label>
                              <label class="input-to">
                              <span class="to_title hide">до</span>
                              <input v-model="searchMaxPriceInput" type="text" size="5" class="small" placeholder="до">
                              </label>
                           </div>
                        </div>
                        <div class="search-rows__row gr-field-style">
                           <label class="row-title field-title" for="shop2-name">Название<span style="display: inline-block;">:</span></label>
                           <div class="row-body">
                              <input v-model="searchText2Input" type="text" size="20" id="shop2-name">
                           </div>
                        </div>
                        <div class="search-rows__row gr-field-style">
                           <label class="row-title field-title" for="shop2-article">Артикул<span style="display: inline-block;">:</span></label>
                           <div class="row-body">
                              <input v-model="searchArticleInput" type="text" id="shop2-article">
                           </div>
                        </div>
                        <div class="search-rows__row gr-field-style">
                           <div class="row-title field-title">Выберите категорию<span style="display: inline-block;">:</span></div>
                           <div class="row-body">
                              <select v-model="searchCategory">
                                 <option selected="selected">Все</option>
                                 <option v-for="category in categories" :key="category.id" :value="category.title">
                                    {{ category.title }}
                                 </option>
                              </select>
                           </div>
                        </div>
                        <div id="shop2_search_custom_fields"></div>
                        <div id="shop2_search_global_fields">
                        </div>
                        <div class="search-rows__row gr-field-style">
                           <div class="row-title field-title">Производитель<span style="display: inline-block;">:</span></div>
                           <div class="row-body">
                              <select v-model="searchFabricator">
                                 <option value="" selected="selected">Все</option>
                                 <option v-for="fabricator in fabricators" :key="fabricator.id" :value="fabricator.title">{{ fabricator.title }}</option>
                              </select>
                           </div>
                        </div>
                        <div class="search-rows__row gr-field-style">
                           <div class="row-title field-title">Результатов на странице<span style="display: inline-block;">:</span></div>
                           <div class="row-body">
                              <select v-model="searchItemsPerPage">
                                 <option value="5" selected="selected">5</option>
                                 <option value="20">20</option>
                                 <option value="35">35</option>
                                 <option value="50">50</option>
                                 <option value="65">65</option>
                                 <option value="80">80</option>
                                 <option value="95">95</option>
                              </select>
                           </div>
                        </div>
                        <div class="search-rows__btn">
                           <button v-on:click="search()" class="search-btn gr-button-1"><span>Найти</span></button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <!-- Search Form -->				
         </div>
      </div>
   </div>
   <div class="remodal-wrapper" v-bind:class="{ block: searchModal }" style="display: none;">
      <div class="remodal remodal-is-initialized remodal-is-opened" data-remodal-id="search_popap" role="dialog" data-remodal-options="hashTracking: false" tabindex="-1">
         <button v-on:click="this.searchModal = false" data-remodal-action="close" class="close-button"><span>&nbsp;</span></button>
         <div class="search_buttons">
            <div class="search_catalog_title" v-on:click="showModalInput()" v-bind:class="{ active: searchModalInput }">ПОИСК</div>
            <div class="search_param_title" v-on:click="showModalParams()" v-bind:class="{ active: searchModalParams }">ПАРАМЕТРЫ</div>
         </div>
         <nav class="search_catalog" v-bind:class="{ block: searchModalInput }" style="display: none;">
            <div class="shop-modules__search-form w-form">
               <input v-on:keyup.enter="search()" type="text" placeholder="Я ищу…" class="shop-modules__search-input w-input" v-model="searchText1Input">
               <button v-on:click="search()" class="shop-modules__search-btn w-button">Найти</button>
            </div>
         </nav>
         <div class="search_form_wrap" v-bind:class="{ block: searchModalParams }" style="display: none;">
            <div class="shop2-block search-form">
               <div class="search-form__inner">
                  <div class="search-form__header">ПОИСК ПО ПАРАМЕТРАМ</div>
                  <div class="search-rows">
                     <div>
                        <div class="search-rows__row gr-field-style float_row">
                           <div class="row-title field-title">Цена (<span class="fa fa-rouble">₽</span>)<span style="display: inline-block;">:</span></div>
                           <div class="row-body">
                              <label class="input-from">
                              <span class="from_title hide">от</span>
                              <input v-model="searchMinPriceInput" type="text" size="5" class="small" placeholder="от" data-range_min="0">
                              </label>
                              <label class="input-to">
                              <span class="to_title hide">до</span>
                              <input v-model="searchMaxPriceInput" type="text" size="5" class="small" placeholder="до">
                              </label>
                           </div>
                        </div>
                        <div class="search-rows__row gr-field-style">
                           <label class="row-title field-title" for="shop2-name">Название<span style="display: inline-block;">:</span></label>
                           <div class="row-body">
                              <input v-model="searchText2Input" type="text" size="20" id="shop2-name">
                           </div>
                        </div>
                        <div class="search-rows__row gr-field-style">
                           <label class="row-title field-title" for="shop2-article">Артикул<span style="display: inline-block;">:</span></label>
                           <div class="row-body">
                              <input v-model="searchArticleInput" type="text" id="shop2-article">
                           </div>
                        </div>
                        <div class="search-rows__row gr-field-style">
                           <div class="row-title field-title">Выберите категорию<span style="display: inline-block;">:</span></div>
                           <div class="row-body">
                              <select v-model="searchCategory">
                                 <option selected="selected">Все</option>
                                 <option v-for="category in categories" :key="category.id" :value="category.title">
                                    {{ category.title }}
                                 </option>
                              </select>
                           </div>
                        </div>
                        <div id="shop2_search_custom_fields"></div>
                        <div id="shop2_search_global_fields">
                        </div>
                        <div class="search-rows__row gr-field-style">
                           <div class="row-title field-title">Производитель<span style="display: inline-block;">:</span></div>
                           <div class="row-body">
                              <select v-model="searchFabricator">
                                 <option value="" selected="selected">Все</option>
                                 <option v-for="fabricator in fabricators" :key="fabricator.id" :value="fabricator.title">{{ fabricator.title }}</option>
                              </select>
                           </div>
                        </div>
                        <div class="search-rows__row gr-field-style">
                           <div class="row-title field-title">Результатов на странице<span style="display: inline-block;">:</span></div>
                           <div class="row-body">
                              <select v-model="searchItemsPerPage">
                                 <option value="5" selected="selected">5</option>
                                 <option value="20">20</option>
                                 <option value="35">35</option>
                                 <option value="50">50</option>
                                 <option value="65">65</option>
                                 <option value="80">80</option>
                                 <option value="95">95</option>
                              </select>
                           </div>
                        </div>
                        <div class="search-rows__btn">
                           <button v-on:click="search()" class="search-btn gr-button-1"><span>Найти</span></button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <!-- Search Form -->				
         </div>
      </div>
   </div>
   <div class="remodal-wrapper" v-bind:class="{ block: infoModal }" style="display: none;">
      <div class="remodal remodal-is-initialized remodal-is-opened" data-remodal-id="contact_popap" role="dialog" data-remodal-options="hashTracking: false" tabindex="-1">
         <button v-on:click="this.infoModal = false" class="close-button"><span>&nbsp;</span></button>
         <div class="contact-popap-wrap">
            <div class="contact-popap-wrap__title"></div>
            <div class="head-contacts__phones">
               <div class="head-contacts__phones-inner">
                  <div class="div-block">
                     <div><a href="tel:8 989 827 53 51" class="link">8 989 827 53 51</a></div>
                  </div>
                  <div class="head-contacts__phone-time">Пн-Вс: 8:00 - 18:00</div>
               </div>
            </div>
            <div class="head-contacts__address">
               <div class="head-contacts__title">г. Краснодар</div>
               <div class="head-contacts__body">Центральный микрорайон, <br/>ул. Кирова, д. 151</div>
            </div>
            <div v-on:click="showFeedBack(); this.infoModal = false" data-remodal-target="form_top_popap" class="head-conracts__recall-btn w-button">Обратный звонок</div>
         </div>
      </div>
   </div>
</template>

<script>
import axios from 'axios'

export default {
   name: 'webSiteTop',
   data() {
      return {
         popup__show: false,
         showed__category: false,
         categories: [],
         fabricators: [],
         cartKey: localStorage.getItem('cartKey'),
         searchMinPriceInput: null,
         searchMaxPriceInput: null,
         searchText1Input: null,
         searchText2Input: null,
         searchArticleInput: null,
         searchCategory: null,
         searchFabricator: null,
         searchItemsPerPage: 5,
         searchModal: false,
         searchModalInput: true,
         searchModalParams: false,
         infoModal: false,
      }
   },
   methods: {
      async createCart() {
        if (!localStorage.getItem('cartKey')) {
          const {data} = await axios.get('cart')
          localStorage.setItem('cartKey', data.key)
        }
      },
      async getFabricators() {
         const {data} = await axios.get('fabricator')
         this.fabricators = data
      },
      async getCategories() {
         const {data} = await axios.get('category')
         this.categories = data
      },
      async getCart() {
         let key = localStorage.getItem('cartKey')
         const {data} = await axios.get(`cart/${key}`)
         let mapData = []
         data.products.forEach(item => {
            for (let i = 0; i < item.amount; i++) {
               mapData.push(item.product.id)
            }
         })
         this.$store.commit('SET_CART', mapData)
      },
      search() {
         let query_params = new Object()
         if (this.searchMinPriceInput != null) {
            query_params.minPrice = this.searchMinPriceInput
         }
         if (this.searchMaxPriceInput != null) {
            query_params.maxPrice = this.searchMaxPriceInput
         }
         if (this.searchText1Input != null) {
            query_params.name = this.searchText1Input
         }
         if (this.searchText2Input != null) {
            query_params.name = this.searchText2Input
         }
         if (this.searchArticleInput != null) {
            query_params.article = this.searchArticleInput
         }
         if (this.searchCategory != null) {
            query_params.category = this.searchCategory
         }
         if (this.searchFabricator != null) {
            query_params.fabricator = this.searchFabricator
         }
         query_params.itemPerPage = this.searchItemsPerPage
         
         // let query_params = {
         //    minPrice: this.searchMinPriceInput,
         //    maxPrice: this.searchMaxPriceInput,
         //    name: this.searchText2Input,
         //    article: this.searchArticleInput,
         //    category: this.searchCategory,
         //    fabricator: this.searchFabricator,
         //    itemPerPage: this.searchItemsPerPage
         // }
         this.$router.push({ path: '/search/', query: query_params })
      },
      showModalInput() {
         this.searchModalInput = true
         this.searchModalParams = false
      },
      showModalParams() {
         this.searchModalParams = true
         this.searchModalInput = false
      },
      showPopup() {
         this.popup__show = !this.popup__show
      },
      showCategory() {
         this.showed__category = !this.showed__category
         this.$emit('showCategory')
      },
      showModal() {
         this.$emit('showModal')
      },
      showFeedBack() {
         this.$emit('showFeedBack')
      }
   },
   mounted() {
      this.createCart(),
      this.getFabricators(),
      this.getCategories(),
      this.getCart()
   }
}
</script>

<style>
.button__border {
   border-radius: 10px !important;
}
@keyframes fadein {
   from {
      margin-bottom: 100vh;
      opacity: 0;
   }
   to {
      margin-bottom: 0vh;
      opacity: 1;
   }
}
.popup__block {
   display: block !important;
   animation-duration: 0.5s;
   animation-name: fadein;
   animation-direction: normal;
}
.header__logo__png {
   max-height: 100px;
}
</style>