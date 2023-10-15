<template>
   <div class="site-content__left">
      <nav class="folders-nav" v-bind:class="{ block: category__menu }" style="display: none;">
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
      <div class="filter-container">
         <div class="filter-block send_to_modal" data-send_res="1260" data-filter_class="filter-1">
            <div class="filter-block__inner">
               <div class="shop2-filter">
                  <div class="shop2-filter__header" v-on:click="showFilters()">
                     ФИЛЬТР
                  </div>
                  <div class="shop2-filter__items" style="height: auto; display: none" v-bind:class="{ block: show__filters }">
                     <div class="shop2-filter__item gr-field-style">
                        <div class="shop2-filter__title" v-on:click="showPrice()"><span>Цена (₽)</span></div>
                        <div class="shop2-filter__body" v-bind:class="{ block: show__price }" style="display: none">
                           <label class="input-from">
                           <span class="shop2-filter__subtitle hide">от</span>
                           <input v-model="searchMinPriceInput" placeholder="от" class="shop2-input-float" type="text">
                           </label>
                           <label class="input-to">
                           <span class="shop2-filter__subtitle hide">до</span>
                           <input v-model="searchMaxPriceInput" placeholder="до" class="shop2-input-float" type="text">
                           </label>
                        </div>
                     </div>
                     <div class="shop2-filter__item gr-field-style">
                        <div class="shop2-filter__title" v-on:click="showFabricator()"><span>Производитель</span></div>
                        <div class="shop2-filter__body" v-bind:class="{ block: show__fabricator }" style="display: none">
                           <div class="filter_btn_back">Производитель</div>
                           <div class="shop2-filter__params">
                              <div v-for="fabricator in category.fabricators" :key="fabricator.id" v-bind:class="{ block: show__all__fabricator }" class="shop2-filter__checkbox">
                                 <webParamItem
                                    v-on:click="addFabricatorToFilter(fabricator.title)"
                                    :paramItem="fabricator"
                                 />
                              </div>
                           </div>
                           <div class="show_more_fields">
                              <span v-if="!show__all__fabricator" v-on:click="showAllFabricator" class="show_more_fields_btn gr-button-1 medium-btn"><span class="show_more_text">Показать еще</span></span>
                              <span v-if="show__all__fabricator" v-on:click="showAllFabricator" class="show_more_fields_btn gr-button-1 medium-btn"><span class="show_more_text">Скрыть</span></span>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div v-bind:class="{ show_filter_btns: showFilterButton}" class="shop2-filter__btns">
                     <a v-on:click="filterItems()" class="shop2-filter-go gr-button-1" style="padding: 0;
                        height: 50px;
                        line-height: 50px;
                        text-align: center;
                        font-weight: 700;
                        font-size: 15px;
                        display: block;"
                     >
                     Показать
                     </a>
                     <a v-on:click="nullFilters()" class="filter-reset gr-button-2">
                     Очистить
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div v-if="this.day__item" class="action-product" style="display: block;">
         <div class="action-product__title">ТОВАР ДНЯ</div>
         <div class="action-product__inner contain_img">
            <div class="product_list product_list_thumbs ">
               <form class="shop2-product-item product-thumb">
                  <input type="hidden" name="meta" value="{&quot;main_page_day_prod_include&quot;:&quot;1&quot;,&quot;main_page_day_prod_date&quot;:&quot;2021-12-12 24:12&quot;}">
                  <div class="product-top-day">
                     <div class="product-top-day__middle-line">
                        <div class="product-top-day__image_wr">
                           <div>
                              <router-link :to="'/item/' + this.day__item.id">
                                 <img :src="this.day__image" class="lazy loaded top-day__image">
                              </router-link>
                           </div>
                        </div>
                     </div>
                     <div class="product-top-day__bottom-line no_timer">
                        <div class="product-name">
                           <router-link :to="'/item/' + this.day__item.id">{{ this.day__item.title }}</router-link>
                        </div>
                        <div class="product-flags">
                           <div class="product-flags__left">
                              <div class="product-flags__item new_item"><span>New</span></div>
                           </div>
                           <div class="product-flags__right">
                           </div>
                        </div>
                        <div class="product-price">
                           <!-- <div class="price-old question"><span>
                              <strong>{{ this.day__item.price }}</strong>
                              <span class="fa fa-rouble">₽</span>						</span>
                              </div>
                              <div class="shop2-product-discount-desc">
                              20% СКИДКА - Торопитесь, акция ограничена!
                              </div> -->
                           <div class="price-current">
                              <strong>{{ this.day__item.price }}</strong>
                              <span class="fa fa-rouble">₽</span>	
                           </div>
                        </div>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
      <div v-if="this.sale__item" class="spec-main-lots">
                             <div class="spec-main-lots__inner">
                                <div class="spec-main-lots__title">РАСПРОДАЖА</div>
                                <div class="spec-main-lots__wrap">
                                   <div class="spec-prod-list">
                                      <webSiteLeftItem
                                      v-for="item in sale__item"
                                      :key="item.id"
                                      :item="item"
                                      />
                                   </div>
                                </div>
                             </div>
                          </div>
      <a href="https://materials-store.oml.ru/magazin/product/laminat-la007" class="red_block w-inline-block">
         <div class="red_block__pic lazy loaded" data-ll-status="loaded" style="background-image: url(/BannerMakeCheap.png);"></div>
         <div class="red_block__container red_block_overlay">
            <div class="red_block__text">
               <div class="red_block__title">-20%</div>
               <div class="red_block__description">Сделаем скидку, если найдете дешевле!</div>
            </div>
            <div class="red_block__button">Подробнее</div>
         </div>
      </a>
   </div>
</template>
    
<script>
import axios from 'axios'

import webParamItem from './webParamItem.vue'
import webSiteLeftItem from './webSiteLeftItem.vue'
    
export default {
   props: ["list"],
   name: 'webSiteCatalogLeft',
   components: {
      webParamItem,
      webSiteLeftItem
   },
   data() {
      return {
         categories: [],
         category: '',
         category__menu: false,
         show__filters: true,
         show__price: true,
         show__fabricator: false,
         show__all__fabricator: false,
         show__new: false,
         show__special: false,
         day__item: '',
         day__image: '',
         sale__item: [],
         key: localStorage.getItem('cartKey'),
         searchFabricators: [],
         searchMinPriceInput: null,
         searchMaxPriceInput: null,
         showFilterButton: false
      }
   },
   methods: {
      async getCategories() {
         const {data} = await axios.get('category')
         this.categories = data
      },
      async getFabricators() {
         let id = this.$route.params.categoryId
         const {data} = await axios.get(`category/${id}`)
         this.category = data
      },
      async getItems() {
         const {data} = await axios.get('product')

         this.day__item = data.find(item => item.id == 1)
         this.sale__item = data.filter(item => item.id == 2 || item.id == 3 || item.id == 4)

         if (this.day__item) {
               data.find(item => item.id == 1).images.forEach((item, i, array) => {
                  if (array.lenght > 1) {
                     if (item.isMain) {
                        this.day__image = item.link
                     }
                  }
                  if (array.lenght = 1 || !item.isMain) {
                     this.day__image = item.link
                  }
               })
         }
      },
      addFabricatorToFilter(title) {
         if (!this.searchFabricators.find(item => item === title)) {
            this.searchFabricators.push(title)
         } else if (this.searchFabricators.find(item => item === title)) {
            this.searchFabricators = this.searchFabricators.filter((item) => item !== title);
         }
      },
      filterItems() {
         let query_params = new Object()
         if (this.searchMinPriceInput != null) {
            query_params.minPrice = this.searchMinPriceInput
         }
         if (this.searchMaxPriceInput != null) {
            query_params.maxPrice = this.searchMaxPriceInput
         }
         if (this.searchFabricators != null) {
            query_params.fabricator = this.searchFabricators
         }
         
         this.$router.push({ path: `/catalog/${this.category.id}/`, query: query_params, replace: true })
      },
      nullFilters() {
         this.searchFabricators = []
         this.searchMinPriceInput = null
         this.searchMaxPriceInput = null
         location.reload()
      },
      showFilters() {
         this.show__filters = !this.show__filters
      },
      showPrice() {
         this.show__price = !this.show__price
      },
      showFabricator() {
         this.show__fabricator = !this.show__fabricator
      },
      showAllFabricator() {
         this.show__all__fabricator = !this.show__all__fabricator
      },
      showNew() {
         this.show__new = !this.show__new
      },
      showSpecial() {
         this.show__special = !this.show__special
      },
   },
   watch: {
      list() {
         this.category__menu = this.list
      },
      searchFabricators: {
         deep: true,
         handler() {
            this.showFilterButton = true
         }
      },
      searchMinPriceInput: {
         deep: true,
         handler() {
            this.showFilterButton = true
         }
      },
      searchMaxPriceInput: {
         deep: true,
         handler() {
            this.showFilterButton = true
         }
      },
   },
   mounted() {
      this.getCategories(),
      this.getFabricators(),
      this.getItems()
   }
}
</script>
    
<style scoped>
@media (max-width: 1260px) {
    .filter-container {
        display: none !important;
    }
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