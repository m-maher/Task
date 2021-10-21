import Vue from 'vue'
import App from './App.vue'
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css"
import bootstrap from "bootstrap/dist/js/bootstrap.min.js";

Vue.use(bootstrap);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
