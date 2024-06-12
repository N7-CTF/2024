import { createRouter, createWebHistory } from "vue-router";

import Articles from "./pages/Articles.vue";
import Login from "./pages/Login.vue";
import Home from "./pages/Home.vue";
import SignUp from "./pages/SignUp.vue";
import Post from "./pages/Post.vue";
import About from "./pages/About.vue";
import Contact from "./pages/Contact.vue";
import Settings from "./pages/Settings.vue";
import CreateArticle from "./pages/CreateArticle.vue";
import Myarticles from "./pages/Myarticles.vue";



const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/articles", component: Articles },
  { path: "/login", component: Login,
  meta: { requiresGuest: true }},
  { path: "/signup", component: SignUp,
  meta: { requiresGuest: true } },
  { path: "/post", component: Post },
  { path: "/contact", component: Contact },
  { path: "/settings", component: Settings,
  meta: { requiresAuth: true } },
  { path: "/CreateArticle", component: CreateArticle,
  meta: { requiresAuth: true }},
  { path: "/post/:id", component: Post },
  { path: "/myarticles", component: Myarticles,
  meta: { requiresAuth: true } }

  
];



const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
      return { top: 0 };    
  }
});
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token') !== null;
  
  if (to.matched.some(route => route.meta.requiresAuth)) {

    if (isAuthenticated) {

      next();
    } else {

      next('/login');
    }
  } else if (to.matched.some(route => route.meta.requiresGuest)) {

    if (isAuthenticated) {

      next('/');
    } else {

      next();
    }
  } else {

    next();
  }
});

export default router;
