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
                                    <h1 style="margin: 0px 0px 35px 0px;">Варианты доставки:</h1>
                                    <div style="display: flex; flex-direction: row; flex-wrap: wrap;" class="delivery__con">
                                        <div style="width: 50%; padding: 40px; display: flex; flex-direction: column; align-items: flex-start;" class="delivery__item">
                                            <div style="margin: 0px 0px 30px 0px; color: #101010; font-size: 24px; font-weight: 700;" class="delivery__item__title">Доставка магазина</div>
                                            <div class="delivery__item__text">Доставка осуществляется курьером компании Яндекс.Доставка грузовым автомобилем по г.Краснодар. Мы можем осуществить грузоперевозку фурой до 20 тонн, менеджер подберёт самый выгодный тариф для маршрута за Вас. В день доставки мы свяжемся с Вами для уточнения времени и места доставки.</div>
                                        </div>
                                        <div style="width: 50%; padding: 40px; display: flex; flex-direction: column; align-items: flex-start;" class="delivery__item">
                                            <div style="margin: 0px 0px 30px 0px; color: #101010; font-size: 24px; font-weight: 700;" class="delivery__item__title">Самовывоз из офиса магазина</div>
                                            <div style="color: #393939; font-size: 17px;" class="delivery__item__text">Вы самостоятельно забираете товар, мы помогаем загрузить. Самовывоз доступен по будням в рабочее время. Удобное время получения с Вами согласует консультант магазина. Самовывоз из магазина осуществляется после подписания акта приема-передачи и полной оплаты.</div>
                                        </div>
                                    </div>
                                    <div class="lpc-content-wrapper">
                                        <div id="lpc-styles-container"></div>
                                        <!-- LP requires -->
                                        <div class="decor-wrap">
                                        <div class="lpс-elements-2 lpc-block" data-media-source="desktop" data-elem-type="block" id="_lp_block_35257251" data-block-layout="6651" style="max-width: 1120px;">
                                            <div class="lp-block-bg _not_fill">
                                                <div class="lp-block-bg__video _lp-video"></div>
                                                <div class="lp-block-overlay"></div>
                                            </div>
                                            <div style="display: flex; flex-direction: column; align-items: center;" class="lpc-wrap lpс-elements-2__wrap">
                                                <iframe class="map" style="margin-top: 60px;" src="https://yandex.ru/map-widget/v1/?um=constructor%3A8113944236dd9b5478597b11ea2202914e02ed3aca41aaae6d97fc03c64f5364&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>
                                                <h1 style="margin-top: 40px;">Адрес офиса магазина</h1>
                                                <p style="font-size: 17px; font-family: Roboto, sans-serif; text-align: center;">г. Краснодар Центральный микрорайон, ул. Фрунзе, 157</p>
                                                <p style="font-size: 17px; font-family: Roboto, sans-serif; text-align: center;">+7 (989) 827-53-51</p>
                                                <p style="font-size: 17px; font-family: Roboto, sans-serif; text-align: center;">zakaz@doorcenter.pro</p>
                                                <a href="https://vk.com/doorcenter">
                                                    <svg style="width: 45px; height: 45px;" xmlns="http://www.w3.org/2000/svg" width="2500" height="2500" viewBox="0 0 192 192"><g fill="none" fill-rule="evenodd"><path fill="#5181B8" d="M66.56 0h58.88C179.2 0 192 12.8 192 66.56v58.88c0 53.76-12.8 66.56-66.56 66.56H66.56C12.8 192 0 179.2 0 125.44V66.56C0 12.8 12.8 0 66.56 0z"/><path fill="#FFF" d="M157.234 66.146c.89-2.966 0-5.146-4.234-5.146h-14c-3.56 0-5.2 1.883-6.09 3.96 0 0-7.12 17.353-17.206 28.625-3.263 3.263-4.746 4.301-6.526 4.301-.89 0-2.178-1.038-2.178-4.004V66.146c0-3.56-1.033-5.146-4-5.146H81c-2.224 0-3.562 1.652-3.562 3.218 0 3.375 5.042 4.153 5.562 13.645V98.48c0 4.52-.816 5.34-2.596 5.34-4.746 0-16.29-17.432-23.138-37.377C55.924 62.566 54.578 61 51 61H37c-4 0-4.8 1.883-4.8 3.96 0 3.708 4.747 22.1 22.1 46.424C65.869 127.995 82.168 137 97 137c8.9 0 10-2 10-5.445V119c0-4 .843-4.798 3.661-4.798 2.077 0 5.636 1.038 13.943 9.047C134.096 132.742 135.66 137 141 137h14c4 0 6-2 4.846-5.947-1.262-3.934-5.794-9.64-11.808-16.406-3.263-3.857-8.158-8.01-9.64-10.086-2.077-2.67-1.484-3.857 0-6.23 0 0 17.056-24.027 18.836-32.185z"/></g></svg>
                                                </a>
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
    name: 'webInfoDelivery',
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