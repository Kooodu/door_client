import { createRouter, createWebHistory } from 'vue-router'

import webMain from '../components/pages/webMain'
import webItemPage from '../components/pages/webItemPage'
import webCatalog from '../components/pages/webCatalog'
import webFabricatorPage from '../components/pages/webFabricatorPage'
// top menu
import webAboutUs from '../components/pages/top__menu__pages/about__us/webAboutUs'
import webInfo from '../components/pages/top__menu__pages/info/webInfo'
import webInfoExchange from '../components/pages/top__menu__pages/info/webInfoExchange'
import webInfoClient from '../components/pages/top__menu__pages/info/webInfoClient'
import webInfoDelivery from '../components/pages/top__menu__pages/info/webInfoDelivery'
import webInfoPayment from '../components/pages/top__menu__pages/info/webInfoPayment'
import webInfoPrivacyPolicy from '../components/pages/top__menu__pages/info/webInfoPrivacyPolicy'
import webContacts from '../components/pages/top__menu__pages/webContacts'
import webVideo from '../components/pages/top__menu__pages/webVideo'
import webPhoto from '../components/pages/top__menu__pages/webPhoto'
import webStock from '../components/pages/top__menu__pages/webStock'
import webStockItem1 from '../components/pages/top__menu__pages/webStockItem1'
import webStockItem2 from '../components/pages/top__menu__pages/webStockItem2'
import webStockItem3 from '../components/pages/top__menu__pages/webStockItem3'
import webStockItem4 from '../components/pages/top__menu__pages/webStockItem4'
import webReview from '../components/pages/top__menu__pages/webReview'
import webCart from '../components/pages/webCart'
import webSearch from '../components/pages/webSearch'
// admin
import webLoginAdmin from '../components/pages/admin/webLoginAdmin'
import webAdmin from '../components/pages/admin/webAdmin'
import webAdminItem from '../components/pages/admin/webAdminItem'
import webAdminCategory from '../components/pages/admin/webAdminCategory'
import webAdminFabricator from '../components/pages/admin/webAdminFabricator'
import webAdminAddItem from '../components/pages/admin/webAdminAddItem'
import webAdminChangeChooseItem from '../components/pages/admin/webAdminChangeChooseItem'
import webAdminChangeItem from '../components/pages/admin/webAdminChangeItem'
import webAdminDelItem from '../components/pages/admin/webAdminDelItem'
import webAdminOtherChooseItem from '../components/pages/admin/webAdminOtherChooseItem'
import webAdminOtherItem from '../components/pages/admin/webAdminOtherItem'

const routes = [
  {
    path: '/',
    name: 'webMain',
    component: webMain,
    props: true
  },
  {
    path: '/item/:itemId',
    name: 'webItemPage',
    component: webItemPage,
    props: true
  },
  {
    path: '/catalog/:categoryId',
    name: 'webCatalog',
    component: webCatalog,
    props: true
  },
  {
    path: '/fabricator/:fabricatorId',
    name: 'webFabricatorPage',
    component: webFabricatorPage,
    props: true
  },
  {
    path: '/cart/:cartKey',
    name: 'webCart',
    component: webCart,
    props: true
  },
  {
    path: '/search/',
    name: 'webSearch',
    component: webSearch,
    props: true
  },
  // top menu
  {
    path: '/about-us',
    name: 'webAboutUs',
    component: webAboutUs,
    props: true
  },
  {
    path: '/info',
    name: 'webInfo',
    component: webInfo,
    props: true
  },
  {
    path: '/info/exchanges',
    name: 'webInfoExchange',
    component: webInfoExchange,
    props: true
  },
  {
    path: '/info/clients',
    name: 'webInfoClient',
    component: webInfoClient,
    props: true
  },
  {
    path: '/info/delivery',
    name: 'webInfoDelivery',
    component: webInfoDelivery,
    props: true
  },
  {
    path: '/info/payment',
    name: 'webInfoPayment',
    component: webInfoPayment,
    props: true
  },
  {
    path: '/info/privacy-policy',
    name: 'webInfoPrivacyPolicy',
    component: webInfoPrivacyPolicy,
    props: true
  },
  {
    path: '/contacts',
    name: 'webContacts',
    component: webContacts,
    props: true
  },
  {
    path: '/photo',
    name: 'webPhoto',
    component: webPhoto,
    props: true
  },
  {
    path: '/video',
    name: 'webVideo',
    component: webVideo,
    props: true
  },
  {
    path: '/stocks',
    name: 'webStock',
    component: webStock,
    props: true
  },
  {
    path: '/stocks/item-1',
    name: 'webStockItem1',
    component: webStockItem1,
    props: true
  },
  {
    path: '/stocks/item-2',
    name: 'webStockItem2',
    component: webStockItem2,
    props: true
  },
  {
    path: '/stocks/item-3',
    name: 'webStockItem3',
    component: webStockItem3,
    props: true
  },
  {
    path: '/stocks/item-4',
    name: 'webStockItem4',
    component: webStockItem4,
    props: true
  },
  {
    path: '/reviews',
    name: 'webReview',
    component: webReview,
    props: true
  },
  // admin
  {
    path: '/admin-login',
    name: 'webLoginAdmin',
    component: webLoginAdmin,
    props: true
  },
  {
    path: '/admin',
    name: 'webAdmin',
    component: webAdmin,
    props: true
  },
  // item
  {
    path: '/admin-item',
    name: 'webAdminItem',
    component: webAdminItem,
    props: true
  },
  {
    path: '/admin-item-add',
    name: 'webAdminAddItem',
    component: webAdminAddItem,
    props: true
  },
  {
    path: '/admin-item-choose',
    name: 'webAdminChangeChooseItem',
    component: webAdminChangeChooseItem,
    props: true
  },
  {
    path: '/admin-item-change/:ChangeItemId',
    name: 'webAdminChangeItem',
    component: webAdminChangeItem,
    props: true
  },
  {
    path: '/admin-item-delete',
    name: 'webAdminDelItem',
    component: webAdminDelItem,
    props: true
  },
  {
    path: '/admin-item-other-choose',
    name: 'webAdminOtherChooseItem',
    component: webAdminOtherChooseItem,
    props: true
  },
  {
    path: '/admin-item-other/:OtherItemId',
    name: 'webAdminOtherItem',
    component: webAdminOtherItem,
    props: true
  },
  // end item
  {
    path: '/admin-category',
    name: 'webAdminCategory',
    component: webAdminCategory,
    props: true
  },
  {
    path: '/admin-fabricator',
    name: 'webAdminFabricator',
    component: webAdminFabricator,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router
