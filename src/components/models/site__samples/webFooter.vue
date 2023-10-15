<template>
  <footer class="site-footer">
              <div class="site-footer__inner">
                 <div class="footer-payments block_padding">
                    <div class="footer-payments__inner">
                       <div class="footer-payments__items">
                          <div class="footer-payments__item">
                             <a href="javascript:">
                             <img src="../../../../public/mir.svg" alt="Мир" title="Мир" class="lazy loaded" data-ll-status="loaded">
                             </a>
                          </div>
                          <div class="footer-payments__item">
                             <a href="javascript:">
                             <img src="../../../../public/sber.svg" alt="Сбер" title="Сбер" class="lazy loaded" data-ll-status="loaded">
                             </a>
                          </div>
                          <div class="footer-payments__item">
                             <a href="javascript:">
                             <img src="../../../../public/alfabank.svg" alt="Альфабанк" title="Альфабанк" class="lazy loaded" data-ll-status="loaded">
                             </a>
                          </div>
                          <div class="footer-payments__item">
                             <a href="javascript:">
                             <img src="../../../../public/tinkoff-1.svg" alt="Тинькофф" title="Тинькофф" class="lazy loaded" data-ll-status="loaded">
                             </a>
                          </div>
                          <div class="footer-payments__item">
                             <a href="javascript:">
                             <img src="../../../../public/robokassa_1.svg" alt="Robokassa" title="Robokassa" class="lazy loaded" data-ll-status="loaded">
                             </a>
                          </div>
                          <div class="footer-payments__item">
                             <a href="javascript:">
                             <img src="../../../../public/yoomoney.svg" alt="Yoo money" title="Yoo money" class="lazy loaded" data-ll-status="loaded">
                             </a>
                          </div>
                          <div class="footer-payments__item">
                             <a href="javascript:">
                             <img src="../../../../public/qiwi.svg" alt="Qiwi" title="Qiwi" class="lazy loaded" data-ll-status="loaded">
                             </a>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div class="site-footer__contacts block_padding">
                    <div class="site-footer__site-info">
                        <img src="../../../../public/Belogo.png" class="footer__logo__png">
                    </div>
                    <div class="site-footer__contacts-wrap">
                       <div class="site-footer__phones">
                          <div class="site-footer__phones-wrap">
                             <div class="div-block"><a href="tel:8 989 827 53 51" class="link-2">8 989 827 53 51</a></div>
                             <div class="site-footer__phone-time">Пн-Вс: 8:00 - 18:00</div>
                          </div>
                       </div>
                       <div class="site-footer__address">
                          <div class="site-footer__address-wrap">
                             <div class="site-footer__address-body">Центральный микрорайон, <br/>ул. Кирова, д. 151</div>
                          </div>
                       </div>
                       <div class="site-footer__mail">
                          <div class="site-footer__mail-wrap">
                             <a href="mailto:login@domain.ru" class="site-footer__mail-link">zakaz@doorcenter.pro</a>
                          </div>
                       </div>
                    </div>
                 </div>
                 <div class="site-footer__nav block_padding">
                    <nav class="bottom_menu_wrap">
                       <ul class="bottom_menu">
                          <li class="opened active"><router-link to="/">Главная</router-link></li>
                          <li class="has-child"><router-link to="/about-us">О нас</router-link></li>
                          <li><router-link to="/stocks">Акции</router-link></li>
                          <li class="has-child"><router-link to="/info">Полезная информация</router-link></li>
                          <li><router-link to="/contacts">Контакты</router-link></li>
                          <li><router-link to="/our-work">Наши работы</router-link></li>
                          <li><router-link to="/reviews">Отзывы</router-link></li>
                       </ul>
                    </nav>
                 </div>
              </div>
           </footer>
</template>

<script>
export default {
    name: 'webFooter'
}
</script>

<style>
.footer__logo__png {
   height: 60px;
}
</style>