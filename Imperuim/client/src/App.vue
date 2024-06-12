<script setup>
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import Navbar from './components/Navbar.vue'
import Canva from './components/Canva.vue'
import Hero from './components/Hero.vue'
import Footer from './components/Footer.vue'
import Post from './components/Post.vue'
</script>

<template>
  <header>
    <router-view></router-view>
  </header>
</template>

<script>


export default {
  name:'app',
  components:{
    SignUp,
    Login,
    Navbar,
    Canva,
    Hero,
    Footer,
    Post,
  }
}
</script>

