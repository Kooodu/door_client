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
                        <webSiteSearchLeft
                            :list="category__list"
                            :closeList="category__list"
                        />
                        <div class="site-content__right">
                            <main class="site-main">
                                <div class="site-main__inner">
                                    <h1>Поиск</h1>
                                    <div class="shop2-cookies-disabled shop2-warning hide"></div>
                                    <div v-if="!noFoundResult" class="sorting-panel-wrapper">
                                        <div class="sorting-panel">
                                            <div class="sorting-panel__inner">
                                            <div class="filter-popup-btn gr-button-1" v-on:click="this.showMobileFilter = true" style="display: none"><span>ФИЛЬТР</span></div>
                                            <div class="sorting-block sorting">
                                                <div class="sorting-block__inner" v-bind:class="{ active: showedSortList }">
                                                    <div v-on:click="showSortList()" class="sorting-block__body">
                                                        <span class="no-sorting">Сортировать:</span>
                                                    </div>
                                                    <div class="sorting-block__popup" v-bind:class="{ block: showedSortList }" style="display: none;">
                                                        <div v-on:click="sortByHighPrice()" class="cursorDiv">
                                                            <a class="sort-param asc_param sort-param-desc" data-name="price">По цене</a>
                                                        </div>
                                                        <div v-on:click="sortByLowPrice()" class="cursorDiv">
                                                            <a class="sort-param desc_param sort-param-asc" data-name="price">По цене</a>
                                                        </div>
                                                        <div v-on:click="sortByHighName()" class="cursorDiv">
                                                            <a class="sort-param asc_param sort-param-asc" data-name="name">По названию</a>
                                                        </div>
                                                        <div v-on:click="sortByLowName()" class="cursorDiv">
                                                            <a class="sort-param desc_param sort-param-desc" data-name="name">По названию</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="products-in-page">
                                                <div class="head-block">Товаров на странице:</div>
                                                <div class="count-products">
                                                    <select v-model="perPage">
                                                        <option value="5" selected="selected">5</option>
                                                        <option value="10">10</option>
                                                        <option value="15">15</option>
                                                        <option value="20">20</option>
                                                        <option value="40">40</option>
                                                        <option value="80">80</option>
                                                        <option value="100">100</option>
                                                    </select>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="product-list-titles hide">
                                        <div class="product-list-titles__item">Товар</div>
                                        <div class="product-list-titles__item">Параметры</div>
                                        <div class="product-list-titles__item">Цена</div>
                                        <div class="product-list-titles__item">Кол-во</div>
                                        <div class="product-list-titles__item">Купить</div>
                                    </div>
                                    <div v-if="!noFoundResult" class="product-list thumbs">
                                       <webCatalogItem 
                                          v-for="item in displayedPosts"
                                          :catalogItem="item"
                                          :key="item.id"
                                          @addedToCart="showCartPath"
                                       />
                                    </div>
                                    <div class="lazy-pagelist">
                                        <div class="lazy-pagelist__body">
                                            <div class="shop-pagelist" data-pagelist-max="6" data-shop2-uri="/magazin">
                                            <ul class="shop-pagelist__body">
                                                <div>
                                                    <button class="page-prev" type="button" v-if="page != 1" @click="page--">
                                                        <img src="../../../public/0c0fc8b3e3cae0c91544bd687f41a8def653374f.svg">
                                                    </button>
                                                    <button class="page-num" type="button" v-for="pageNumber in pages.slice(page-1, page+5)" :key="pageNumber" @click="page = pageNumber"> {{pageNumber}} </button>
                                                    <button class="page-next" type="button" @click="page++" v-if="page < pages.length">
                                                        <img src="../../../public/8324b8796e462abe989b5c196d6f242def79aaa0.svg">
                                                    </button>
                                                </div>
                                            </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div v-if="noFoundResult" class="shop2-warning">
                                        <h2>Отсутствуют товары, соответствующие Вашему запросу</h2>
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
        <div class="remodal-wrapper remodal-is-opened" v-bind:class="{ block: showMobileFilter }" style="display: none;">
            <div class="remodal filter-1 remodal-is-initialized remodal-is-opened" data-remodal-id="filter-1" role="dialog" data-remodal-options="hashTracking: false" tabindex="-1">
                <button v-on:click="this.showMobileFilter = false" data-remodal-action="close" class="remodal-close-btn gr-icon-btn">
                    <span>Закрыть</span>
                </button>
                <div class="filter-block send_to_modal" data-send_res="1260" data-filter_class="filter-1">
                    <div class="filter-block__inner">
                        <div class="shop2-filter">
                            <a id="shop2-filter"></a>
                            <div class="shop2-filter__header">
                                ФИЛЬТР
                            </div>
                            <div class="shop2-filter__items" v-bind:class="{ slid_transform: showFilterFabricator }">
                                <div class="shop2-filter__item gr-field-style">
                                    <div class="shop2-filter__title"><span>Цена (₽)</span></div>
                                    <div class="shop2-filter__body" style="display: block;">
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
                            </div>
                            <div class="shop2-filter__btns" v-bind:class="{ show_filter_btns: showFilterButton}">
                                <a v-on:click="filterItems()" class="shop2-filter-go gr-button-1">
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
        </div>
    </body>
  </template>

<script>
import axios from 'axios'

import webSiteBrands from '../models/site__samples/site__under/webSiteBrands.vue'
import webSiteAdvantage from '../models/site__samples/site__under/webSiteAdvantage.vue'
import webSiteTop from '../models/site__samples/webSiteTop.vue'
import webTopMenu from '../models/site__samples/webTopMenu.vue'
import webSiteSearchLeft from '../models/site__samples/webSiteSearchLeft.vue'
import webMobileWrap from '../models/site__samples/webMobileWrap.vue'
import webFooter from '../models/site__samples/webFooter.vue'
import webCatalogItem from '../models/webCatalogItem.vue'
import webParamItem from '../models/site__samples/webParamItem.vue'

import { defineComponent } from 'vue'
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

export default defineComponent({
    name: 'webSearch',
    components: {
        webSiteTop,
        webTopMenu,
        webSiteSearchLeft,
        webFooter,
        webCatalogItem,
        webMobileWrap,
        webSiteBrands,
        webSiteAdvantage,
        Carousel,
        Slide,
        Navigation,
        webParamItem,
    },
    data() {
        return {
            noFoundResult: false,
            items__with__fab: [],
            mobile__modal: false,
            category__list: false,
            showedSortList: false,
            sortedByHighPrice: false,
            sortedByLowPrice: false,
            sortedByHighName: false,
            sortedByLowName: false,
            page: 1,
            perPage: 5,
            pages: [],
            key: localStorage.getItem('cartKey'),
            feedBackModal: false,
            feedBackName: '',
            feedBackPhone: '',
            thankYouModal: false,
            showMobileFilter: false,
            showFilterFabricator: false,
            showFilterButton: false,
            searchMinPriceInput: null,
            searchMaxPriceInput: null
        }
    },
    methods: {
        async getItems() {
            let searchMinPrice = Number(this.$route.query.minPrice)
            let searchMaxPrice = Number(this.$route.query.maxPrice)
            let searchText = this.$route.query.name
            let searchArticle = Number(this.$route.query.article)
            let searchCategory = this.$route.query.category
            let searchFabricator = this.$route.query.fabricator
            if (typeof this.$route.query.itemPerPage === 'string') {
                this.perPage = this.$route.query.itemPerPage
            } else {
                this.perPage = 5
            }

            const itemsResponse = await axios.get('product')
            this.items__with__fab = itemsResponse.data.filter(item => {
                const minPrice = searchMinPrice ? item.price > searchMinPrice : true
                const maxPrice = searchMaxPrice ? item.price < searchMaxPrice : true
                const name = searchText ? item.title.includes(searchText) : true
                const article = searchArticle ? item.article == searchArticle : true
                const category = searchCategory ? item.category.title == searchCategory : true
                const fabricator = searchFabricator ? item.fabricator.title == searchFabricator : true

                return minPrice && maxPrice && name && article && category && fabricator
            })
            if (!this.items__with__fab.length) {
                this.noFoundResult = true
            }
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
        filterItems() {
         let query_params = new Object()
         if (this.searchMinPriceInput || this.$route.query.minPrice != null) {
            query_params.minPrice = this.searchMinPriceInput || this.$route.query.minPrice
         }
         if (this.searchMaxPriceInput || this.$route.query.maxPrice != null) {
            query_params.maxPrice = this.searchMaxPriceInput || this.$route.query.maxPrice
         }
         if (this.$route.query.name != null) {
            query_params.name = this.$route.query.name
         }
         if (this.$route.query.name != null) {
            query_params.name = this.$route.query.name
         }
         if (this.$route.query.article != null) {
            query_params.article = this.$route.query.article
         }
         if (this.$route.query.category != null) {
            query_params.category = this.$route.query.category
         }
         if (this.$route.query.fabricator != null) {
            query_params.fabricator = this.$route.query.fabricator
         }
         query_params.itemPerPage = this.$route.query.itemPerPage
            
         this.$router.push({ path: `/search/`, query: query_params, replace: true })
         },
         nullFilters() {
            this.searchMinPriceInput = null
            this.searchMaxPriceInput = null
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
        showSortList() {
            this.showedSortList = !this.showedSortList
        },
        falseAllSorts() {
            this.sortedByHighPrice = false
            this.sortedByLowPrice = false
            this.sortedByHighName = false
            this.sortedByLowName = false
        },
        sortByHighPrice() {
            this.falseAllSorts()
            this.sortedByHighPrice = true
        },
        sortByLowPrice() {
            this.falseAllSorts()
            this.sortedByLowPrice = true
        },
        sortByHighName() {
            this.falseAllSorts()
            this.sortedByHighName = true
        },
        sortByLowName() {
            this.falseAllSorts()
            this.sortedByLowName = true
        },
        setPages() {
            let numberOfPages = Math.ceil(this.filteredItems.length / Number(this.perPage))

            for (let index = 1; index <= numberOfPages; index++) {
                this.pages.push(index)
            }
	    },
	    paginate (items__with__fab) {
            let page = this.page;
            let perPage = Number(this.perPage)
            let from = (page * perPage) - perPage;
            let to = (page * perPage);
            return items__with__fab.slice(from, to);
	    },
    },
    computed: {
        filteredItems() {
            if (this.$store.getters.ONE_FABRICATOR_ID) {
                if (this.sortedByHighPrice) {
                    return this.items__with__fab.sort((a, b) => b.price - a.price).filter(item => item.fabricator.id === this.$store.getters.ONE_FABRICATOR_ID)
                } else if (this.sortedByLowPrice) {
                    return this.items__with__fab.sort((a, b) => a.price - b.price).filter(item => item.fabricator.id === this.$store.getters.ONE_FABRICATOR_ID)
                } else if (this.sortedByHighName) {
                    return this.items__with__fab.sort((a, b) => a.title.localeCompare(b.title)).filter(item => item.fabricator.id === this.$store.getters.ONE_FABRICATOR_ID)
                } else if (this.sortedByLowName) {
                    return this.items__with__fab.sort((a, b) => b.title.localeCompare(a.title)).filter(item => item.fabricator.id === this.$store.getters.ONE_FABRICATOR_ID)
                } else {
                    return this.items__with__fab.filter(item => item.fabricator.id === this.$store.getters.ONE_FABRICATOR_ID)
                }
            } else {
                if (this.sortedByHighPrice) {
                    return this.items__with__fab.sort((a, b) => b.price - a.price)
                } else if (this.sortedByLowPrice) {
                    return this.items__with__fab.sort((a, b) => a.price - b.price)
                } else if (this.sortedByHighName) {
                    return this.items__with__fab.sort((a, b) => a.title.localeCompare(b.title))
                } else if (this.sortedByLowName) {
                    return this.items__with__fab.sort((a, b) => b.title.localeCompare(a.title))
                } else {
                    return this.items__with__fab
                }
            }
        },
        displayedPosts () {
	        return this.paginate(this.filteredItems)
	    }
    },
    watch: {
	    filteredItems: {
            deep: true,
            handler() {
                this.page = 1
                this.pages = []
                this.setPages()
            }
	    },
        perPage: {
            handler() {
                this.page = 1
                this.pages = []
                this.setPages()
            }
        },
        "$route.query": {
            deep: true,
            handler() {
                location.reload()
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
        this.getItems()
    }
})
</script>

<style scoped>
@media (max-width: 1260px) {
    .filter-popup-btn {
        display: block !important;
    }
}
.shop-pagelist__body div {
    display: flex;
    flex-direction: row;
    align-items: center;
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
   animation-duration: 0.4s;
}
.main-products__title {
    width: 100%;
    display: flex;
    flex-direction: row;
}
.cursorDiv {
    cursor: pointer;
}
</style>