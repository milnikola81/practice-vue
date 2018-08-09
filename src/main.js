import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import AddContact from './pages/AddContact.vue';
import Contacts from './pages/Contacts.vue';
import PropsPractice from './components/PropsPractice.vue';

Vue.use(VueRouter);
Vue.config.productionTip = false
const routes = [
  {path: '/', component: PropsPractice},
  {path: '/contacts', component: Contacts},
  {path: '/contacts/:id', component: Contacts, name: 'contact-details'},
  // {path: '/add-contact/:id', component: AddContact},
  {path: '/add-contact', component: AddContact},
];
const router = new VueRouter({
  routes
});


Vue.config.productionTip = false

new Vue({
  render: h => h(App), router
}).$mount('#app')
