import Vue from "vue";
import Router from "vue-router";
const Home = () => import('./pages/Home.vue');
const Technology = () => import('./pages/Technology.vue');
const Membrane = () => import('./pages/Membrane.vue');
const Device = () => import('./pages/DeviceProduct.vue');
const Order = () => import('./pages/Order.vue');
const OrderForm = () => import('./pages/OrderForm.vue');
const Development = () => import('./pages/Development.vue');
const Contact = () => import('./pages/Contact.vue');
Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/technology",
      name: "technology",
      component: Technology
    },
    {
      path: "/membrane",
      name: "membrane",
      component: Membrane
    },
    {
      path: "/device",
      name: "device",
      component: Device
    },
    {
      path: "/order",
      name: "order",
      component: Order
    },
    {
      path: "/orderForm",
      name: "orderForm",
      component: OrderForm
    },
    {
      path: "/development",
      name: "development",
      component: Development
    },
    {
      path: "/contact",
      name: "contact",
      component: Contact
    },
    {
      path: '*',
      redirect:  "/"
    }
  ]
});
export default router;
