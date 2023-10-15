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
                                    <h1>Оплата и гарантия</h1>
                                    <link rel="stylesheet" href="submenu.blue.css">
                                    <div class="lpc-content-wrapper">
                                        <!-- LP requires -->
                                        <link rel="stylesheet" href="fonts.css" type="text/css">
                                        <link rel="stylesheet" href="styles.css" type="text/css">
                                        <div id="lpc-styles-container"></div>
                                        <link type="text/css" rel="stylesheet" href="__landing_page_5360051.css">
                                        <!-- LP requires -->
                                        <div class="decor-wrap">
                                            <!-- <div class="lpс-elements-2 lpc-block" data-media-source="desktop" data-elem-type="block" id="_lp_block_34961651" data-block-layout="6651" style="max-width: 1120px;">
                                                <div class="lp-block-bg _not_fill">
                                                    <div class="lp-block-bg__video _lp-video"></div>
                                                    <div class="lp-block-overlay"></div>
                                                </div>
                                                <div class="lpc-wrap lpс-elements-2__wrap">
                                                    <div class="lpc-row lpс-elements-2__row">
                                                        <div class="lpc-col-12-lg lpc-col-6-ml lpc-col-4-sm lpс-elements-2__text-wrapper">
                                                        <div class="lp-header-text-2 lpc-elements-2__text" data-elem-type="text" data-lp-selector=".lpc-elements-2__text" data-path="text">
                                                            <p style="font-size: 17px; font-family: Roboto, sans-serif; text-align: left;">В этом блоке мы рекомендуем разместить информацию о способах доставки и оплаты.</p>
                                                            <p style="font-size: 17px; font-family: Roboto, sans-serif; text-align: left;">Обращаем Ваше внимание, что текстовая информация на сайте должна быть индивидуальной, не скопированной с других интернет-ресурсов, о чем указано в рекомендациях Яндекса: «Мы стараемся не индексировать или не ранжировать высоко сайты, копирующие информацию с других ресурсов и не создающие оригинального контента или сервиса».</p>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> -->
                                            <div class="lpc-text-4 lpc-block" id="_lp_block_35255651" data-block-layout="1715061" data-media-source="desktop" data-elem-type="block" style="max-width: 1120px;" >
                                                <div class="lp-block-bg _not_fill">
                                                    <div class="lp-block-bg__video _lp-video"></div>
                                                    <div class="lp-block-overlay"></div>
                                                </div>
                                                <div class="lpc-row lpc-text-4__row">
                                                    <div class="lpc-col-4-lg lpc-col-2-ml lpc-col-4-sm lpc-text-4__top">
                                                        <div class="lpc-text-4__title lp-header-title-3" data-elem-type="header" data-lp-selector=".lpc-text-4__title" data-path="title"><h2 style="font-size: 20px; font-family: Roboto, sans-serif;">Любой удобный для вас способ оплаты</h2></div>
                                                    </div>
                                                    <!-- <div class="lpc-col-8-lg lpc-col-4-ml lpc-col-4-sm lpc-text-4__bottom">
                                                        <div class="lpc-text-4__separator lpc-dark-mode-block" data-elem-type="card_container" data-lp-selector=".lpc-text-4__separator"></div>
                                                        <div class="lpc-text-4__content">
                                                        <div class="lpc-text-4__text lp-header-text-2" data-elem-type="text" data-lp-selector=".lpc-text-4__text" data-path="text"><span style="font-size: 17px; font-family: Roboto, sans-serif;">Оплатить покупки можно наличными при получении. Убедительная просьба вначале ознакомиться с товаром, убедиться в отсутствии дефектов в присутствии курьера, после чего оплачивать сумму. </span></div>
                                                        <div class="lpc-text-4__buttons-wrap">
                                                            <div class="lpc-text-4__buttons">
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div> -->
                                                </div>
                                            </div>
                                            <!-- <div class="lpc-text-4 lpc-block" id="_lp_block_35255851" data-block-layout="1715061" data-media-source="desktop" data-elem-type="block" style="max-width: 1120px;">
                                                <div class="lp-block-bg _not_fill">
                                                    <div class="lp-block-bg__video _lp-video"></div>
                                                    <div class="lp-block-overlay"></div>
                                                </div>
                                                <div class="lpc-row lpc-text-4__row">
                                                    <div class="lpc-col-4-lg lpc-col-2-ml lpc-col-4-sm lpc-text-4__top">
                                                        <div class="lpc-text-4__title lp-header-title-3" data-elem-type="header" data-lp-selector=".lpc-text-4__title" data-path="title"><h2 style="font-size: 20px; font-family: Roboto, sans-serif;">Онлайн-оплата</h2></div>
                                                    </div>
                                                    <div class="lpc-col-8-lg lpc-col-4-ml lpc-col-4-sm lpc-text-4__bottom">
                                                        <div class="lpc-text-4__separator lpc-dark-mode-block" data-elem-type="card_container" data-lp-selector=".lpc-text-4__separator"></div>
                                                        <div class="lpc-text-4__content">
                                                        <div class="lpc-text-4__text lp-header-text-2" data-elem-type="text" data-lp-selector=".lpc-text-4__text" data-path="text"><span style="font-size: 17px; font-family: Roboto, sans-serif;">Открыта возможность оплаты покупок посредством карт Visa и MasterCard. Для этого перейдите в корзину магазина, введите сумму платежа, после чего нажмите кнопку «Оплатить». </span></div>
                                                        <div class="lpc-text-4__buttons-wrap">
                                                            <div class="lpc-text-4__buttons">
                                                            </div>
                                                        </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> -->
                                        </div>
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
import webMobileWrap from '../../../../components/models/site__samples/webMobileWrap.vue'
import webSiteTop from '../../../../components/models/site__samples/webSiteTop.vue'
import webSiteLeft from '../../../../components/models/site__samples/webSiteLeft.vue'
import webTopMenu from '../../../../components/models/site__samples/webTopMenu.vue'
import webFooter from '../../../../components/models/site__samples/webFooter.vue'
import webSiteBrands from '../../../../components/models/site__samples/site__under/webSiteBrands.vue'
import webSiteAdvantage from '../../../../components/models/site__samples/site__under/webSiteAdvantage.vue'

export default {
    name: 'webInfoPayment',
    components: {
        webMobileWrap,
        webSiteTop,
        webSiteLeft,
        webTopMenu,
        webFooter,
        webSiteAdvantage,
        webSiteBrands
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
        showMobileModal() {
            this.mobile__modal = true
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

<style>
.lpc-text-4[data-media-source="desktop"] .lpc-text-4__buttons-wrap {
    margin-top: 50px;
    text-align: left;
}
.lpc-row {
    flex-wrap: wrap;
}
.lp-block-overlay {
    display: flex;
    flex-wrap: wrap;
}
</style>