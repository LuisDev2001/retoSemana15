import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ListVideo",
    component: () =>
      import(/* webpackChunkName: "ListVideo" */ "../views/ListVideo.vue")
  },
  {
    path: "/AddVideo",
    name: "AddVideo",
    component: () =>
      import(/* webpackChunkName: "AddVideo" */ "../views/AddVideo.vue")
  },
  {
    path: "/DetailVideo",
    name: "DetailVideo",
    component: () =>
      import(/* webpackChunkName: "AddVideo" */ "../views/DetailVideo.vue")
  },
  {
    path: "/EditVideo",
    name: "EditVideo",
    component: () =>
      import(/* webpackChunkName: "AddVideo" */ "../views/EditVideo.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
