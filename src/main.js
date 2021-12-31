import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDuZfzcy-DyrGxOebjZKMyaFKsEZ3i6be8',
    libraries: 'places',
  }
})

Vue.prototype.$slider;
Vue.prototype.$isDown = false;
Vue.prototype.$startX;
Vue.prototype.$scrollLeft;
Vue.prototype.$pagex = Event.pageX;



new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
