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
                                    <h1>Полезная информация</h1>
                                    <ul class="g-submenu g-submenu--top ">
                                        <li class="g-submenu__item"><router-link to="/info/payment" class="g-button g-button--invert">Оплата и гарантия</router-link></li>
                                        <li class="g-submenu__item"><router-link to="/info/delivery" class="g-button g-button--invert">Доставка</router-link></li>
                                        <li class="g-submenu__item"><router-link to="/info/exchanges" class="g-button g-button--invert">Возврат и обмен</router-link></li>
                                        <li class="g-submenu__item"><router-link to="/info/clients" class="g-button g-button--invert">Сотрудничество</router-link></li>
                                    </ul>
                                    <div class="lpc-content-wrapper">
                                        <div id="lpc-styles-container"></div>
                                        <!-- LP requires -->
                                        <div class="decor-wrap">
                                        <div class="lpс-elements-2 lpc-block" data-media-source="desktop" data-elem-type="block" id="_lp_block_35257251" data-block-layout="6651" style="max-width: 1120px;">
                                            <div class="lp-block-bg _not_fill">
                                                <div class="lp-block-bg__video _lp-video"></div>
                                                <div class="lp-block-overlay"></div>
                                            </div>
                                            <div class="lpc-wrap lpс-elements-2__wrap">
                                                <div class="lpc-row lpс-elements-2__row">
                                                    <div class="lpc-col-12-lg lpc-col-6-ml lpc-col-4-sm lpс-elements-2__text-wrapper">
                                                    <div class="lp-header-text-2 lpc-elements-2__text" data-elem-type="text" data-lp-selector=".lpc-elements-2__text" data-path="text">
                                                        <p style="font-size: 17px; font-family: Roboto, sans-serif; text-align: left;">Наша компания приветствует Вас на сайте Вашей компании! Мы рады, что Вы сделали правильный выбор, ведь, создав сайт, Ваша компания приобрела свое лицо в безграничном пространстве Интернет! Надеемся, что благодаря этому сайту Ваши потенциальные клиенты будут легко находить Вас в сети Интернет, и сайт в скором времени начнет приносить прибыль.</p>
                                                        <p style="font-size: 17px; font-family: Roboto, sans-serif; text-align: left;">Ваш сайт имеет систему управления (CMS-S3 MegaSite), которая позволяет легко управлять содержанием сайта без наличия навыков программирования благодаря удобному пользовательскому интерфейсу.</p>
                                                        <p style="font-size: 17px; font-family: Roboto, sans-serif; text-align: left;">Если Вы хотите, чтобы Ваш сайт не просто занимал свою нишу в сети Интернет, но и хорошо воспринимался поисковыми системами, Вы можете прочитать рекомендации, которые дает Яндекс - «Чем отличается качественный сайт от некачественного с точки зрения Яндекса».</p>
                                                    </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
    name: 'webInfo',
    components: {
        webMobileWrap,
        webSiteTop,
        webSiteLeft,
        webTopMenu,
        webFooter,
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
.g-submenu{
    margin:2.6667em 0;
    padding:0;
    list-style:none;
    font-size:calc(15px - 1px);
    border:none;
    border-radius:0;
    font-weight:700
}
.g-submenu--top .g-submenu__item{
    display:inline-block
}
.g-submenu__item{
    margin:0.6667em 5px 0.6667em 0px;
    line-height:1.2em;
}
.g-submenu__item a{
    text-decoration:none
}
.g-submenu__item a:hover{
    text-decoration:underline
}
.g-button{
    position:relative;
    display:inline-block;
    box-sizing:border-box;
    padding:.5em 1.35714em;
    cursor:pointer;
    text-decoration:none !important;
    color:#fff !important;
    border:.07143em solid rgba(0,0,0,0.1);
    border-radius:.28571em;
    outline:none;
    background-color:#15c;
    background-image:linear-gradient(-180deg, #3b7cef 0%, #15c 100%);
    box-shadow:0 .07143em .07143em 0 rgba(0,0,0,0.2);
    text-shadow:0 1px 1px rgba(0,0,0,0.2);
    font-family:Arial, sans-serif;
    font-size:14px;
    font-weight:bold;
    line-height:1.2
}
.g-button.g-button--invert{
    color: #4f68eb !important;
    border-color: #4f68eb;
    border-radius: 6px;
}
.g-button.g-button--invert:hover{
    color:#fff !important;
    border-color:#4f68eb !important;
    background:#4f68eb !important;
    text-shadow:0 .07143em .07143em rgba(0,0,0,0.2)
}
.g-button.g-button--invert.g-button--disabled,.g-button.g-button--invert.g-button--disabled:hover,.g-button.g-button--invert.g-button--disabled:active,.g-button.g-button--disabled,.g-button.g-button--disabled:hover,.g-button.g-button--disabled:active{
    cursor:default !important;
    color:#979797 !important;
    border-color:#c5c5c5 !important;
    background:#f3f3f3 !important;
    box-shadow:none !important;
    text-shadow:none !important
}
.g-button--dublicator{
    padding:0.5em 0.6428em
}
.g-button--middle{
    vertical-align:middle
}
.g-button--arr-right::after,.g-button--arr-left::after{
    position:absolute;
    top:50%;
    display:block;
    width:0.9286em;
    height:0.7857em;
    margin-top:-0.3571em;
    content:""
}
.g-button.g-button--arr-right{
    padding:0.5em 2.3571em 0.5em 1.1428em
}
.g-button.g-button--arr-right::after{
    right:0.7143em;
    background:url("") 0 0 no-repeat
}
.g-button.g-button--arr-left{
    padding:0.5em 1.1428em 0.5em 2.3571em
}
.g-button.g-button--arr-left::after{
    left:10px;
    background:url("") 0 0 no-repeat
}
.g-button--invert.g-button--arr-right::after{
    right:0.7143em;
    background:url("") 0 0 no-repeat
}
.g-button--invert.g-button--arr-left::after{
    left:0.7143em;
    background:url("") 0 0 no-repeat
}
.g-button--invert.g-button--arr-right:hover::after,.g-button--invert.g-button--arr-right:active::after{
    background:url("") 0 0 no-repeat
}
.g-button--invert.g-button--arr-left:hover::after,.g-button--invert.g-button--arr-left:active::after{
    background:url("") 0 0 no-repeat
}
.g-button--disabled.g-button--arr-right::after{
    background:url("") 0 0 no-repeat !important
}
.g-button--disabled.g-button--arr-left::after{
    background:url("") 0 0 no-repeat !important
}
.g-button--arr-right::after,.g-button--arr-left::after,.g-button--disabled.g-button--arr-left::after,.g-button--disabled.g-button--arr-right::after{
    background-size:cover !important
}
.g-button--back{
    margin-top:3.33333em;
    margin-left:.73333em
}
.g-button--vote-back{
    margin-top:1.33333em
}
.g-user_svg_icon .g-user_svg_block{
    background:rgba(17,85,204,0.3) !important
}
.g-user_svg_icon .g-user_svg_block svg{
    fill:#15c !important
}
.shop2-product-amount button.amount-minus.g-user_wb_mount_minus{
    background:url("") 50% 50% no-repeat
}
.shop2-product-amount button.amount-minus.g-user_wb_mount_minus:disabled{
    background:url("") 50% 50% no-repeat
}
.shop2-product-amount button.amount-plus.g-user_wb_amount_plus{
    background:url("") 50% 50% no-repeat
}
.shop2-order-options.shop2-delivery .option-type.g-user_option-type.active-type{
    border-color:#15c
}
.shop2-order-options.shop2-delivery .option-type.g-user_option-type.active-type .option-label ins{
    border-color:#15c
}
.g-user_option-type.so-content__payment-type--opened{
    border-color:#15c
}
.g-user_option-type.so-content__payment-type--opened .g-form-control-radio__label{
    color:#15c
}
.g-user_option-type.so-content__payment-type--opened .g-form-control-radio input[type=radio]:checked ~ .g-form-control-radio__input{
    border-color:#15c;
    background-color:#15c
}
.g-user_text_color,a.g-user_text_color{
    color:#15c !important
}
</style>