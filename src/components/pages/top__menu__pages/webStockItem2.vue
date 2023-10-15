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
                        <webSiteLeft
                        :list="category__list"
                        :closeList="category__list"
                        />
                        <div class="site-content__right">
                            <main class="site-main">
                                <div class="site-main__inner">
                                    <h1 style="margin: 0px 0px 50px 0px;">Купон2</h1>
                                    <div style="display: flex; flex-direction: row; gap: 20px; align-items: flex-start;" class="stock-item-con">
                                        <img src="./../../../assets/299_442.jpg" style="width: 50%;" class="stock-item-img">
                                        <div style="width: 50%; padding: 40px; border: 1px solid #e4dfdf; border-radius: 10px; word-break: break-word;" class="stock-item-text">erwyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy</div>
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
    </body>
  </template>

<script>
import webMobileWrap from '../../models/site__samples/webMobileWrap.vue'
import webSiteTop from '../../models/site__samples/webSiteTop.vue'
import webSiteLeft from '../../models/site__samples/webSiteLeft.vue'
import webTopMenu from '../../models/site__samples/webTopMenu.vue'
import webFooter from '../../models/site__samples/webFooter.vue'
import webSiteBrands from '../../models/site__samples/site__under/webSiteBrands.vue'
import webSiteAdvantage from '../../models/site__samples/site__under/webSiteAdvantage.vue'

export default {
    name: 'webStockItem2',
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
         mobile__modal: false,
         category__list: false,
         key: localStorage.getItem('cartKey'),
         feedBackModal: false,
         feedBackName: '',
         feedBackPhone: '',
         thankYouModal: false,
      }
   },
   methods: {
      showMobileModal() {
        this.mobile__modal = true
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
      closeMobileModal() {
        this.mobile__modal = false
      },
      showCategoryList() {
         this.category__list = !this.category__list
      },
   }
}
</script>