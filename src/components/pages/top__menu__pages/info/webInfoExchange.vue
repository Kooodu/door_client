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
                                <h1>Возврат и обмен</h1>
                                <div class="lpc-content-wrapper">
                                    <!-- LP requires -->
                                    <link rel="stylesheet" href="fonts.css" type="text/css">
                                    <link rel="stylesheet" href="styles.css" type="text/css">
                                    <div id="lpc-styles-container"></div>
                                    <!-- LP requires -->
                                    <div class="decor-wrap">
                                        <div class="lpc-text-1 lpc-block" data-media-source="tablet" id="_lp_block_34960451" data-block-layout="1717861" data-elem-type="block">
                                            <div class="lp-block-bg _not_fill">
                                            <div class="lp-block-bg__video _lp-video"></div>
                                            <div class="lp-block-overlay"></div>
                                            </div>
                                            <div class="lpc-wrap lpc-text-1__wrap">
                                            <div class="lpc-row lpc-text-1__row">
                                                <div class="lpc-col-12-lg lpc-col-6-ml lpc-col-4-sm lpc-text-1__title lp-header-title-1" data-elem-type="header" data-lp-selector=".lpc-text-1__title" data-path="title"></div>
                                            </div>
                                            <div class="lpc-text-1__items js-lg-init">
                                                <div class="lpc-row lpc-text-1__row lpc-text-1__item">
                                                    <div class="lpc-col-5-lg lpc-col-3-ml lpc-col-4-sm lpc-text-1__item-img-wrap"><a href="" class="lg-item lpc-text-1__item-img lp-img-contain" data-elem-type="unresize_image" data-lp-selector=".lpc-text-1__item-img" data-path="list.0.image"><img src="./../../../../assets/1.jpg" alt=""></a></div>
                                                    <div class="lpc-col-7-lg lpc-col-3-ml lpc-col-4-sm lpc-text-1__item-content ">
                                                        <div class="lpc-text-1__item-text lp-header-text-2" data-elem-type="text" data-lp-selector=".lpc-text-1__item-text" data-path="list.0.text">
                                                        <p style="font-size: 17px; font-family: Roboto, sans-serif; margin-bottom: 15px;">I. Условия обмена и возврата товара надлежащего качества физическими лицами (потребителями)</p>
                                                        <p style="font-size: 17px; font-family: Roboto, sans-serif; margin-bottom: 15px;">1.1. Вы можете отказаться от товара, заказанного по каталогу на сайте компании Doorcenter в любое время до его получения, а после его получения в течение 7 календарных дней при соблюдении следующих условий: Товар не имеет повреждений или следов эксплуатации, сохранены товарный вид, потребительские свойства и необходимые документы (чеки, гарантийный талон, инструкция по эксплуатации), не повреждены пломбы, фабричные ярлыки и упаковка, индивидуальная упаковка товара не нарушена и не вскрыта. Товар не входит в Перечень товаров надлежащего качества, не подлежащих возврату или обмену на аналогичный товар. (Перечень непродовольственных товаров надлежащего качества, не подлежащих возврату или обмену на аналогичный товар утвержден Постановлением Правительства РФ от 19 января 1998г. №55); В случае обмена товара надлежащего качества покупатель оплачивает транспортные услуги. Если возврат осуществляется силами собственной службы доставки компании Doorcenter , то стоимость возврата равна аналогичной стоимости доставки товара до клиента;</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="lpc-row lpc-text-1__row lpc-text-1__item">
													<div class="lpc-col-7-lg lpc-col-3-ml lpc-col-4-sm lpc-text-1__item-content">
                                                        <div class="lpc-text-1__item-text lp-header-text-2" data-elem-type="text" data-lp-selector=".lpc-text-1__item-text" data-path="list.1.text">
                                                        <p style="font-size: 17px; font-family: Roboto, sans-serif; margin-bottom: 15px;">1.2. Товар, приобретенный покупателем в случае ошибки при подборе по вине продавцов компании Doorcenter или ошибки в каталоге товаров на сайте Doorcenter.pro , подлежит обмену на другой товар при соблюдении вышеуказанных условий. Транспортные услуги в данном случае оказываются бесплатно. Если на момент Вашего обращения по обмену товара, аналогичный товар отсутствует в продаже в магазине Doorcenter, Вы можете отказаться от товара и потребовать возврат его стоимости.</p>
                                                        <p style="font-size: 17px; font-family: Roboto, sans-serif; margin-bottom: 15px;">1.3. Если при рассмотрении Вашего требования о возврате товара будет установлено, что товар был в эксплуатации, имеет дефекты (трещины, царапины, сколы, механические повреждения за исключением скрытых производственных дефектов), находится в неполной комплектации или не в заводской упаковке, то обмен/возврат не гарантируется.</p>
                                                        </div>
                                                    </div>
                                                    <div class="lpc-col-5-lg lpc-col-3-ml lpc-col-4-sm lpc-text-1__item-img-wrap"><a href="" class="lg-item lpc-text-1__item-img lp-img-contain" data-elem-type="unresize_image" data-lp-selector=".lpc-text-1__item-img" data-path="list.1.image"><img src="./../../../../assets/2.jpg" alt=""></a></div>
                                                </div>
                                            </div>
											<div class="lpc-row lpc-text-1__row lpc-text-1__item">
													<div style="width: 100%;" class="lpc-col-7-lg lpc-col-3-ml lpc-col-4-sm lpc-text-1__item-content ">
                                                        <div class="lpc-text-1__item-text lp-header-text-2" data-elem-type="text" data-lp-selector=".lpc-text-1__item-text" data-path="list.1.text">
														<p style="font-size: 17px; font-family: Roboto, sans-serif; margin-bottom: 15px;">1.4. При возврате товара надлежащего качества компания Doorcenter вернет его стоимость не позднее чем через 10 дней с момента получения Вашего письменного заявления.</p>
                                                        <p style="font-size: 17px; font-family: Roboto, sans-serif; margin-bottom: 15px;">1.5. Товар надлежащего качества, приобретенный в компании Doorcenter обмену на аналогичный товар не подлежит на основании пункта 11 Перечня товаров надлежащего качества, не подлежащих возврату или обмену на аналогичный товар. (Перечень непродовольственных товаров надлежащего качества, не подлежащих возврату или обмену на аналогичный товар утвержден Постановлением Правительства РФ от 19 января 1998г. №55.</p>
														<p style="font-size: 17px; font-family: Roboto, sans-serif; margin-bottom: 15px;">1.6. Изделия надлежащего качества, выполненные по индивидуальному заказу и (или) размерам, обмену и возврату не подлежат.</p>
														<p style="font-size: 17px; font-family: Roboto, sans-serif; margin-bottom: 15px;">II. Условия обмена и возврата товара ненадлежащего качества</p>
														<p style="font-size: 17px; font-family: Roboto, sans-serif; margin-bottom: 15px;">2.1 Компания гарантирует обмен или возврат технически сложных товаров ненадлежащего качества в случае обнаружения неисправностей в течение 15 дней со дня покупки при подтверждении наличия недостатка.</p>
														<p style="font-size: 17px; font-family: Roboto, sans-serif; margin-bottom: 15px;">2.2 Компания гарантирует обмен или возврат технически сложных товаров ненадлежащего качества в случае обнаружения неисправностей по истечении 15 дней в случаях:

<br>обнаружения существенного недостатка товара;
<br>превышения установленных законодательством РФ сроков ремонта;


невозможности использования товара в течение каждого года гарантийного срока в совокупности более чем тридцать дней вследствие неоднократного устранения его различных недостатков.</p>
														<p style="font-size: 17px; font-family: Roboto, sans-serif; margin-bottom: 15px;">2.3 Компания гарантирует обмен или возврат товаров ненадлежащего качества (не входящих в перечень технически сложных товаров) в пределах гарантийного срока при подтверждении наличия недостатка. Для установления причины возникновения недостатка сотрудники компании проведут проверку качества товара. Вы вправе участвовать в проверке качества товара.</p>
														<p style="font-size: 17px; font-family: Roboto, sans-serif; margin-bottom: 15px;">2.4. Условия гарантии:
Продавец предоставляет гарантию (гарантийное обслуживание) на 12 месяцев с момента монтажа Товара. Гарантийное обслуживание предоставляется только при соблюдении всех условий эксплуатации, указанных в правилах эксплуатации товара (инструкции).</p>
														<p style="font-size: 17px; font-family: Roboto, sans-serif; margin-bottom: 15px;">2.4.1. Гарантийный срок товара, установленный Продавцом, начинает действовать с момента доставки товара к месту назначения (месту доставки, указанному Покупателем), в случае самовывоза, либо с момента окончания монтажа по адресу Покупателя, и составляет 12 (двенадцать) месяцев. Гарантия не распространяется на Товар, который был собран, установлен, смонтирован без привлечения специалистов Продавца. </p>
														<p style="font-size: 17px; font-family: Roboto, sans-serif; margin-bottom: 15px;">2.4.2. Гарантия на товар не распространяется, и Заказчик не несёт ответственности – при наличии механических повреждений изделия, связанных с транспортировкой, небрежной эксплуатацией или хранением изделия, при проведении доставки и монтажа товара лицами, не имеющими специального согласования с Продавцом, в случае выполнения работ по установке (монтажу) изделия, его доставке или подъеме Покупателем самостоятельно. Кроме того, гарантия на изделия не распространяется при нарушении правил эксплуатации.</p>
														<p style="font-size: 17px; font-family: Roboto, sans-serif; margin-bottom: 15px;">2.4.3. Покупатель вправе предъявить требования к Продавцу в отношении недостатков товара, если они обнаружены в течение гарантийного срока. </p>
														<p style="font-size: 17px; font-family: Roboto, sans-serif; margin-bottom: 15px;">2.4.4. Гарантийные обязательства предусматривают бесплатный ремонт, замену или возврат изделий и фурнитуры в период действия гарантийного срока - при обнаружении явных или скрытых дефектов, не позволяющих эксплуатировать изделие согласно требованиям безопасности. </p>
														<p style="font-size: 17px; font-family: Roboto, sans-serif; margin-bottom: 15px;">2.4.5. Условия гарантии:
<br>-гарантия применима в случае обнаружения дефектов материала по вине производителя или производственного брака в деталях корпуса изделий, откосов и дверных блоков, а также в случае некачественно выполненных Продавцом монтажно-сборочных работ;</p>
														<p style="font-size: 17px; font-family: Roboto, sans-serif; margin-bottom: 15px;">2.4.6. Гарантия не распространяется на физические повреждения (пятна, сколы, царапины и т.д.) дверных блоков, а также повреждения фурнитуры, после приёмки товара Покупателем.</p>
														<p style="font-size: 17px; font-family: Roboto, sans-serif; margin-bottom: 15px;">2.4.7. Изменение цвета на дверном полотне не является гарантийным случаем.</p>
														<p style="font-size: 17px; font-family: Roboto, sans-serif; margin-bottom: 15px;">2.4.8. В процессе эксплуатации двери, при опускании ручки может наблюдаться люфт, обусловленный зазором до 4 мм между засовом замка и отверстием в дверной коробке, что является конструктивной особенностью Товара и не является дефектом и/или Гарантийным случаем.</p>
														<p style="font-size: 17px; font-family: Roboto, sans-serif; margin-bottom: 15px;">2.4.9. Продавец не несёт ответственности за Товар:
<br>- в случае перекоса или деформации дверных блоков в помещениях с повышенной или недостаточной влажностью
<br>- в случае нарушений правил эксплуатации и ухода за ним Покупателем (механических, химических повреждений, резких перепадов температур, повышенной влажности и др.)
<br>- если дефект вызван действием непреодолимых сил, несчастными случаями, умышленными или неосторожными действиями потребителя или третьих лиц.
<br>- если установка дверных блоков была произведена силами Покупателя.
<br>- в случае нарушений правил эксплуатации и ухода за ним Покупателем (механических, химических повреждений, резких перепадов температур, повышенной влажности и др.)</p>
														<p style="font-size: 17px; font-family: Roboto, sans-serif; margin-bottom: 15px;">2.5. После рассмотрения претензии от Покупателя, Продавец вправе направить на адрес Покупателя своего специалиста для определения гарантийного случая, а Покупатель обязан предоставить доступ к Товару. При заключении специалиста об отсутствии гарантийного случая, Покупатель обязан оплатить вызов специалиста: 300 (триста) руб. 00 коп. в черте города; 15 руб./км. В обе стороны направления за пределами города. </p>
														<p style="font-size: 17px; font-family: Roboto, sans-serif; margin-bottom: 15px;">III. Порядок предъявления претензий по качеству и возврат товара</p>
														<p style="font-size: 17px; font-family: Roboto, sans-serif; margin-bottom: 15px;">Для возврата товара, а также в случае предъявления претензий к качеству товара необходимо:
Заполнить соответствующее заявление: заявление на возврат товара надлежащего качества или заявление на возврат товара ненадлежащего качества. В заявлении просим Вас подробно указать, какой именно дефект содержит возвращаемый Вами товар. Также при заполнении заявления просим обратить внимание, что денежные средства за товар, а в случае ненадлежащего качества, и соответствующая стоимость доставки, могут быть возвращены одним из трех указанных в заявлении способов независимо от того, каким способом был оплачен Ваш заказ. Укажите в заявлении способ и необходимые для возврата оплаты реквизиты. Этими средствами Вы сможете воспользоваться для оплаты последующих заказов в компании Doorcenter.</p>
														<p style="font-size: 17px; font-family: Roboto, sans-serif; margin-bottom: 15px;">Приложить товарный или кассовый чек. Отсутствие у Вас кассового или товарного чека, либо иного документа, удостоверяющих факт и условия покупки товара, не является основанием для отказа в удовлетворении Ваших требований. Однако мы оставляем за собой право проверить факт приобретения товара в интернет-магазине компании Doorcenter.
Для возврата товара также необходим документ, удостоверяющий личность (паспорт гражданина РФ/загранпаспорт, временное удостоверение личности гражданина РФ, выдаваемое на период оформления паспорта, военный билет, водительское удостоверение).</p>
														<p style="font-size: 17px; font-family: Roboto, sans-serif; margin-bottom: 15px;">Для возврата товара помимо документов, перечисленных выше, необходимо:<br>
Передать товар в полной комплектации, со всеми комплектующими и полным комплектом принадлежностей, указанным в технической документации (технический паспорт или заменяющий его документ);</p>
														<p style="font-size: 17px; font-family: Roboto, sans-serif; margin-bottom: 15px;">Для согласования деталей и составления заявления на обмен и возврат приобретенного в магазине компании Doorcenter товара Вы можете обратиться по доступным контактам на сайте Doorcenter.pro</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div class="lpс-elements-2 lpc-block" data-media-source="tablet" data-elem-type="block" id="_lp_block_34960651" data-block-layout="6651">
                                            <div class="lp-block-bg _not_fill">
                                            <div class="lp-block-bg__video _lp-video"></div>
                                            <div class="lp-block-overlay"></div>
                                            </div>
                                            <div class="lpc-wrap lpс-elements-2__wrap">
                                            <div class="lpc-row lpс-elements-2__row">
                                                <div class="lpc-col-12-lg lpc-col-6-ml lpc-col-4-sm lpс-elements-2__text-wrapper">
                                                    <div class="lp-header-text-2 lpc-elements-2__text" data-elem-type="text" data-lp-selector=".lpc-elements-2__text" data-path="text">
                                                        <p style="font-size: 17px;font-family: Roboto, sans-serif;text-align: left;">На сайте Вы можете размещать фотографии как на текстовых страницах, так и создавать фотогалереи. Наша система управления позволяет автоматически уменьшать фотографии, и все же мы рекомендуем при работе с изображениями в графических редакторах пользоваться функцией «Сохранить для Web». Она позволяет значительно сжимать размеры изображений. Благодаря этому быстрее загружается сайт и меньше расходуется трафик, что актуально для пользователей, которые не имеют доступа к безлимитному Интернету.</p>
                                                        <p style="font-size: 17px;font-family: Roboto, sans-serif;text-align: left;">
                                                        При импорте таблиц из Excel рекомендуется обращать внимание на их ширину и размеры. Если таблица сложная, она возможно будет плохо загружаться у посетителей сайта из за различных размеров мониторов и браузеров.<!-- p-->
                                                        </p>
                                                        <p style="font-size: 17px;font-family: Roboto, sans-serif;text-align: left;">Она позволяет значительно сжимать размеры изображений. Благодаря этому быстрее загружается сайт и меньше расходуется трафик, что актуально для пользователей, которые не имеют доступа к безлимитному Интернету.</p>
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
    name: 'webInfoExchange',
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

<style>
[data-block-layout] {position: relative;}
[data-block-layout] img {
	max-width: initial;
}
._hide-block[id^="popup_lp_block"] {
	display: none;
}
.content-lp-wrapper .temp-wrapper .temp-content article {width: 680px;}
.lp-header-title-0, .lp-header-title-1, .lp-header-title-2, .lp-header-title-3, .lp-header-title-4, .lp-header-title-5, .lp-header-title-6 {
	font-weight: 700;
	line-height: 1.25;
	font-style: normal;
	letter-spacing: 0.02em;
}
.lp-header-title-0 {
	margin-top: 0;
	font-size: 68px;
	line-height: 1.15;
}
.lpc-text-1__item-img img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.lpc-text-1[data-media-source="tablet"] .lpc-text-1__item {
    margin-top: 48px;
}
@media all and (max-width: 1024px) {
	.lp-header-title-0 {
		font-size: 60px;
		line-height: 1.17;
	}
}
@media all and (max-width: 599px) {
	.lp-header-title-0 {
		font-size: 46px;
	}
}

.lp-header-title-1 {
	margin-top: 0;
	font-size: 50px;
	line-height: 1.16;
}
@media all and (max-width: 1024px) {
	.lp-header-title-1 {
		font-size: 44px;
		line-height: 1.185;
	}
}
@media all and (max-width: 599px) {
	.lp-header-title-1 {
		font-size: 30px;
		line-height: 1.27;
	}
}
.lp-header-title-2 {
	font-size: 40px;
	line-height: 1.25;
}
@media all and (max-width: 1024px) {
	.lp-header-title-2 {
		font-size: 34px;
		line-height: 1.24;
	}
}
@media all and (max-width: 599px) {
	.lp-header-title-2 {
		font-size: 26px;
		line-height: 1.31;
	}
}
.lp-header-title-3 {
	font-size: 32px;
	line-height: 1.5;
}
@media all and (max-width: 1024px) {
	.lp-header-title-3 {
		font-size: 26px;
		line-height: 1.462;
	}
}
@media all and (max-width: 599px) {
	.lp-header-title-3 {
		font-size: 20px;
		line-height: 1.5;
	}
}
.lp-header-title-4 {
	font-size: 26px;
	line-height: 1.462;
}
@media all and (max-width: 1024px) {
	.lp-header-title-4 {
		font-size: 22px;
		line-height: 1.455;
	}
}
@media all and (max-width: 599px) {
	.lp-header-title-4 {
		font-size: 18px;
		line-height: 1.56;
	}
}
.lp-header-title-5 {
	font-size: 20px;
	line-height: 1.5;
}
@media all and (max-width: 1024px) {
	.lp-header-title-5 {
		font-size: 18px;
		line-height: 1.56;
	}
}
@media all and (max-width: 599px) {
	.lp-header-title-5 {
		font-size: 16px;
		line-height: 1.5;
	}
}
.lp-header-title-6 {
	font-size: 16px;
	line-height: 1.25;
}
.lp-header-text-1,
.lp-header-text-2,
.lp-header-text-3,
.lp-header-text-4 {
	font-weight: 400;
	line-height: 1.5;
	letter-spacing: 0.01em;
}
.lp-header-text-1 {
	font-size: 26px;
	line-height: 1.385;
}
@media all and (max-width: 1024px) {
	.lp-header-text-1 {
		font-size: 22px;
		line-height: 1.364;
	}
}
@media all and (max-width: 599px) {
	.lp-header-text-1 {
		font-size: 20px;
		line-height: 1.6;
	}
}
.lp-header-text-2 {
	font-size: 20px;
}
@media all and (max-width: 1024px) {
	.lp-header-text-2 {
		font-size: 18px;
		line-height: 1.56;
	}
}
@media all and (max-width: 599px) {
	.lp-header-text-2 {
		font-size: 16px;
		line-height: 1.5;
	}
}
.lp-header-text-3 {
	font-size: 16px;
}
@media all and (max-width: 599px) {
	.lp-header-text-3 {
		font-size: 15px;
		line-height: 1.47;
	}
}
.lp-header-text-4 {
	font-size: 14px;
	line-height: 1.46;
}
._primary-fill {
	background: #1F50A1;
	color: #fff;
}
._light-fill {
	background: #fff;
}
._dark-fill {
	background: #444;
	color: #fff;
}
._svg-primary-fill path {
	fill: #1F50A1;
}
._svg-dark-fill path {
	fill: #444;
}
._svg-light-fill path {
	fill: #fff;
}
.lp-text-button {
	font-size: 16px;
	font-weight: 700;
	line-height: 1.25;
}
.lp-link-button {
	font-size: 16px;
	line-height: 1;
}
.lp-label-text,
.lp-remark-text,
.lp-alert-text {
	font-size: 14px;
	line-height: 1;
}
@media all and (min-width: 600px) {
	.lp-label-text,
	.lp-remark-text,
	.lp-alert-text {
		line-height: 1;
	}
}
.lp-remark-text {opacity: 0.5;}
.lp-label-text {
	font-weight: 700;
}
.lp-alert-text {
	color: #ff0000;
}
.lp-button {
	display: inline-block;
	box-sizing: border-box;
	font-size: 16px;
	line-height: 1;
	text-decoration: none;
	transition: all 0.15s;
	border: none;
	outline: none;
	text-align: center;
	text-align-last: center;
}
.lp-button__text,
.lp-button__ico {
	display: inline-block;
	vertical-align: middle;
}
.lp-button__text {
	min-width: 50px;
	text-align: center;
	padding-top: 4px;
	padding-bottom: 4px;
	text-align: inherit;
	text-align-last: inherit;
	color:inherit;
	text-decoration: inherit;
}
.lp-button__ico {
	font-size: 0;
}
.lp-button__ico svg {
	width: 24px;
	height: 24px;
}
.lp-button__ico+.lp-button__text {
	min-width: 74px;
	text-align: left;
	padding-right: 4px;
	padding-left: 4px;
}
.lp-button._only-icon {
	padding: 13px;
}
@media all and (max-width: 1024px) {
	.lp-button._only-icon {
		padding: 10px;
	}
}
@media all and (max-width: 640px) {
	.lp-button._only-icon {
		padding: 8px;
	}
}
[data-block-layout]  .lp-button--type-1 {
	background: #1f50a1;
	color: #fff;
	padding: 13px 16px;
}
.lp-button--type-1._v2-text {
	padding: 17px 16px;
}
.lp-button--type-1._v2-icon {
	padding: 13px;
	font-size: 0;
}
.lp-button--type-1._v2-icon svg {width: 24px; height: 24px;}
.lp-button--type-1._v2-icon path {fill: #fff;}
@media all and (max-width: 1024px) {
	.lp-button--type-1 {
		padding-top: 10px;
		padding-bottom: 10px;
	}
	.lp-button--type-1._v2-text {
		padding: 14px 16px;
	}
	.lp-button--type-1._v2-icon {
		padding: 10px;
	}
}
@media all and (max-width: 640px) {
	.lp-button--type-1 {
		padding-top: 8px;
		padding-bottom: 8px;
	}
	.lp-button--type-1._v2-text {
		padding: 12px 16px;
	}
	.lp-button--type-1._v2-icon {
		padding: 8px;
	}
}
.lp-button--type-1:hover {
	color: #fff;
	background: #245ebd;
}
.lp-button--type-1:active {
	background: #0041ac;
}
.lp-button--type-1 svg path {
	fill: #fff;
}
[data-block-layout]  .lp-button--type-2 {
	border: 1px solid #1f50a1;
	background: rgba(31, 80, 161, 0.1);
	color: inherit;
	padding: 12px 15px;
}
.lp-button--type-2._v2-text {
	padding: 16px 15px;
}
.lp-button--type-2._v2-icon {
	padding: 12px;
	font-size: 0;
}
.lp-button--type-2._v2-icon svg {
	width: 24px;
	height: 24px;
}
.lp-button--type-2._v2-icon path {
	fill: #1F50A1;
}
@media all and (max-width: 1024px) {
	.lp-button--type-2 {
		padding-top: 9px;
		padding-bottom: 9px;
	}
	.lp-button--type-2._v2-text {
		padding: 13px 15px;
	}
	.lp-button--type-2._v2-icon {padding: 9px;}
}
@media all and (max-width: 640px) {
	.lp-button--type-2 {
		padding-top: 7px;
		padding-bottom: 7px;
	}	
	.lp-button--type-2._v2-text {
		padding: 11px 15px;
	}
	.lp-button--type-2._v2-icon {padding: 7px;}
}
.lp-button--type-2:hover {
	border-color: #255fbf;
	color: inherit;
	background: rgba(37, 95, 191, 0.1);
}
.lp-button--type-2:hover path {
	fill: #245ebd;
}
.lp-button--type-2:active {
	border-color: #0041ac;
	color: inherit;
	background: rgba(25, 65, 131, 0.1);
}
.lp-button--type-2:active path {
	fill: #0041ac;
}
.lp-button--type-2 svg path {
	fill: #1f50a1;
}
.lp-button--type-2._only-icon {
	padding: 12px;
}
@media all and (max-width: 1024px) {
	.lp-button--type-2._only-icon {
		padding: 9px;
	}
}
@media all and (max-width: 640px) {
	.lp-button--type-2._only-icon {
		padding: 7px;
	}
}
.lp-button._with-icon .lp-button__ico {
	margin-left: 8px;
}
.lp-button--type-3 {
	font-weight: 700;
	padding: 0;
}
.lp-button--type-3 .lp-button__text {
	min-width: 0;
}
.lp-button--type-3 svg path {
	fill: #1f50a1;
}
.lp-button--type-3._with-icon {
	font-weight: 400;
}
.lp-button--type-3._with-icon .lp-button__ico {
	margin-left: 0;
}
.lp-button--type-3._with-icon .lp-button__ico+.lp-button__text {
	padding-right: 4px;
}
.lp-button--type-3:hover {
	color: #245ebd;
}
.lp-button--type-3:active {
	color: #0041ac;
}
.lp-block-bg {
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	overflow: hidden;
	bottom: 0;
	background-position: center center;
	background-repeat: no-repeat;
	background-size: cover;
}
.lp-block-bg__video {
	position: absolute;
	width: 100%;
	height: 100%;
}
.lp-block-bg__video video {
	width: 100%;
	height: 100%;
	object-fit: cover;
}
.lp-block-bg iframe {
	position: absolute;
	min-width: 100%;
	min-height: 100%;
	-webkit-transform: scale(1.2);
	transform: scale(1.2);
}
@media all and (min-width: 960px) {
	.lp-block-bg._isfixed {
		background-attachment: fixed;
	}
}
.lp-block-overlay {
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background: rgba(255, 255, 255, 0.5);
}
._not_fill .lp-block-overlay {
	background: rgba(255, 255, 255, 0);
}
.svg-icon-dark path {
	fill: #1F50A1;
}
._lp-image-container {
	box-sizing: border-box;
    overflow: hidden;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    -moz-align-items: center;
    align-items: center;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    justify-content: center;
    max-width: 100%;
}
.lpc-wrap {
	position: relative;
	font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif;
}
.lpc-wrap * {
	box-sizing: border-box;
}
.lpc-row {
	padding: 0 12px;
	margin: 0 -12px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex; } .lpc-col-1-sm {
	padding: 0 12px;
	width: calc(100%/4); }
 .lpc-col-2-sm {
	padding: 0 12px;
	width: calc((100% / 4) * 2); }
 .lpc-col-3-sm {
	padding: 0 12px;
	width: calc((100% / 4) * 3); }
 .lpc-col-4-sm {
	padding: 0 12px;
	width: 100%; }
 .lpc-col-1-ml {
	padding: 0 12px;
	width: calc(100% / 6); }
 .lpc-col-2-ml {
	padding: 0 12px;
	width: calc((100% / 6) * 2); }
 .lpc-col-3-ml {
	padding: 0 12px;
	width: calc((100% / 6) * 3); }
 .lpc-col-4-ml {
	padding: 0 12px;
	width: calc((100% / 6) * 4); }
 .lpc-col-5-ml {
	padding: 0 12px;
	width: calc((100% / 6) * 5); }
 .lpc-col-6-ml {
	padding: 0 12px;
	width: calc((100% / 6) * 6); }
 .lpc-col-1-lg {
	padding: 0 12px;
	width: calc(100%/12); }
 .lpc-col-2-lg {
	padding: 0 12px;
	width: calc((100% / 12) * 2); }
 .lpc-col-3-lg {
	padding: 0 12px;
	width: calc((100% / 12) * 3); }
 .lpc-col-4-lg {
	padding: 0 12px;
	width: calc((100% / 12) * 4); }
 .lpc-col-5-lg {
	padding: 0 12px;
	width: calc((100% / 12) * 5); }
 .lpc-col-6-lg {
	padding: 0 12px;
	width: calc((100% / 12) * 6); }
 .lpc-col-7-lg {
	padding: 0 12px;
	width: calc((100% / 12) * 7); }	
 .lpc-col-7-lg.not-image {
	width: 100%; }
 .lpc-col-8-lg {
	padding: 0 12px;
	width: calc((100% / 12) * 8); }
 .lpc-col-9-lg {
	padding: 0 12px;
	width: calc((100% / 12) * 9); }

 .lpc-col-10-lg {
	padding: 0 12px;
	width: calc((100% / 12) * 10); }
 .lpc-col-11-lg {
	padding: 0 12px;
	width: calc((100% / 12) * 11); }

 .lpc-col-12-lg {
	padding: 0 12px;
	width: 100%; }

.lp-video-block__custom {
	position: relative;
	font-size: 0;
	display: inline-block;
	width: 100%;
}

.lp-video-block__custom-button {
	position: absolute;
	z-index: 1;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	cursor: pointer;
}

.lp-video-block__custom-button.hide {
	display: none;
}

.lp-video-block-wrappper video, .lp-video-block-wrappper iframe {
	width: 100%;
	height: 100%;
}

.lp-video-block-wrappper video {
	object-fit: cover;
}

.lp-video-block-wrappper {
	position: relative;
	overflow: hidden;
}

._slider-arrows {
	display: inline-block;
	width: 24px;
	height: 24px;
	position: relative;
}

._slider-arrows.reverse {
	transform: rotate(180deg);
}

._slider-arrows-inner {
	width: 2px;
	height: 11px;
	background: #fff;
	position: absolute;
	right: 11px;
	border-radius: 1px;
	border-width: 0px !important;
	padding: 0  !important;
	margin: 0  !important;
}

.lp-button--type-2 ._slider-arrows-inner {
	background: #1F50A1;
}

._slider-arrows-inner:first-child {
	top: 3px;
	transform: rotate(45deg);
}

._slider-arrows-inner:last-child {
	bottom: 3px;
	transform: rotate(-45deg);
}

.lpc-simple-dots {
	text-align: center;
	margin-top: -16px;
	font-size: 0;
}

.lpc-simple-dot-item {
	display: inline-block;
	width: 16px;
	height: 16px;
	border-radius: 10px;
	background: #1f50a1;
	opacity: 0.5;
	margin: 16px 8px 0;
}

[data-media-source="mobile"] .lpc-simple-dot-item {
	width: 12px;
	height: 12px;
}

.lpc-simple-dot-item.active { opacity: 1; }

.lp-popup-wrapper {
	display: none;
	opacity: 0;
	visibility: hidden;
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	z-index: 1111;
}

.lp-popup-overlay {
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	background: rgba(0,0,0,.5);
}

.lp-popup-wrapper._opened {
	display: block;
	visibility: visible;
	opacity: 1;
	transition: opacity 0.2s linear;
}

.lp-popup-wrapper._opened ._hide-block {
	display: inline-block;
	vertical-align: middle;
	text-align: left;
}

.lp-popup-wrapper .lp-popup-inner {
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	text-align: center;
	overflow: auto;
	padding: 20px 16px;
}

.lp-popup-wrapper .lp-popup-inner:after {
	content: "";
	display: inline-block;
	width: 0;
	height: 100%;
	vertical-align: middle;
}

.lp-ui-timer {
    display: flex;
    margin: 0 -4px;
    flex-wrap:wrap;
}

.lp-ui-timer__item {
    flex: 0 0 58px;
    text-align: center;
    margin: 0 3px;
}


@media all and (min-width: 600px) {
	.lp-ui-timer__item {
		margin: 0 4px;
	}
}

.lp-ui-timer__item-number {
    font-style: normal;
    font-weight: bold;
    font-size: 26px;
    vertical-align: middle;
    line-height: 1.34;
    padding: 15px 17px;
    box-sizing: border-box;
}

@media (max-width: 600px) {
	.lp-ui-timer__item-number {
		font-size: 26px !important;
	}
}

.lp-ui-timer__item-text {
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 20px;
    color: #8b9098;
}

._type-1 .lp-ui-timer__item-number {
    background: #fff;
    color: #1F50A1;
}

._type-2 .lp-ui-timer__item-number {
    background: #fff;
    color: #1F50A1;
    padding: 14px 16px;
    border: 1px solid #1F50A1;
}

._type-3 .lp-ui-timer__item-number {
    background: #1F50A1;
    color: #fff;
}

@media (min-width: 600px) {
	.lp-ui-timer__item-number {
		font-size: 34px;
		line-height: 1.3;
	}
	
	.lp-ui-timer__item {
		flex: 0 0 68px;
	}
}

@media (min-width: 1200px) {
	.lp-ui-timer__item-number {
		font-size: 40px;
	}
	
	.lp-ui-timer__item {
		flex: 0 0 70px;
	}
}

.lpc-light-mode-block { color: #333; background: #fff; }
.lpc-light-mode-block a, .lpc-light-mode-block ._primary-color { color: #1f50a1; }
.lpc-light-mode-block svg path:not([fill]) { fill: #1f50a1; }
.lpc-light-mode-block svg defs path:not([fill]) { fill: inherit;}

.lpc-contacts-7__item-text a[href^="tel:"] {
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
}

.lpc-dark-mode-block { color: #fff; background: #1f50a1; }
.lpc-dark-mode-block a:not([href^="tel:"]), .lpc-dark-mode-block ._primary-color { color: inherit; }
.lpc-dark-mode-block svg path:not([fill]) { fill: #fff; }

@keyframes placeholder-active {
  0% {
    background-position: 100% 50%
  }

  to {
    background-position: 0 50%
  }
}

.lp-map-placeholder {
  position: relative;
  background: 50% 50% / cover no-repeat url("");
}

.lp-map-placeholder:after {
  content: '';
  position: absolute;
  display: block;
  z-index: -1;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: linear-gradient(-45deg,transparent 25%, #fff 30%, transparent 63%);
  background-size: 400% 100%;
  -webkit-animation: placeholder-active 3s ease infinite;
  animation: placeholder-active 3s ease infinite;
}
#_lp_block_34960451[data-block-layout='1717861']  {
	padding-top: 0px;
	padding-bottom: 0px;
}
#_lp_block_34960651[data-block-layout='6651']  {
	padding-top: 80px;
	padding-bottom: 0px;
}
#_lp_block_34960651[data-block-layout='6651'] .lpc-elements-2__text {
	padding-top: 0px;
	padding-left: 0px;
	padding-right: 0px;
	padding-bottom: 0px;
	margin-top: 0px;
	margin-left: 0px;
	margin-right: 0px;
	margin-bottom: 0px;
}
#_lp_block_35256451[data-block-layout='94651'] .lp-form-tpl__field-text {
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	border-color: rgba(203,203,203,1);
	border-style: solid;
	border-width: 1px;
}
#_lp_block_35256451[data-block-layout='94651'] .lp-form-tpl__button {
	border-top-left-radius: 8px;
	border-top-right-radius: 8px;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	border-color: rgba(255,255,255,1);
	border-style: solid;
	border-width: 0px;
}
#_lp_block_35256451[data-block-layout='94651'] .lp-form-tpl__button:hover {
	border-color: rgb(255, 255, 255);
	border-style: solid;
	border-width: 0px;
}
#_lp_block_35256451[data-block-layout='94651'] .lp-form-tpl__button:active {
	border-color: rgb(235, 235, 235);
	border-style: solid;
	border-width: 0px;
}
</style>