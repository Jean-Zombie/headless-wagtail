import Vue from "vue";
import App from "./App.vue";
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify'

Vue.use(VueRouter);

// 1. Define route components.
// These can be imported from other files
import HelloWorld from './components/HelloWorld.vue';
import NewsItem from './components/NewsItem.vue';

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// `Vue.extend()`, or just a component options object.
// We'll talk about nested routes later.
const routes = [
  { path: "/", component: HelloWorld },
  { path: "/news/:id", component: NewsItem },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount("#app");
