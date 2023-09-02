//$Id$

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './vuexstore';
import  './prototype/prototype';
import VCalendar from "v-calendar";
import RangeSlider from "vue-range-slider";

Vue.component("RangeSlider", RangeSlider);
Vue.component("VCalendar",VCalendar);


window.onload = () => {
  new Vue({
      VCalendar,
      RangeSlider,
      router,
      store,
      render: h => h(App)
    }).$mount('#app'); //No I18N
}