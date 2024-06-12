<script setup>
import SignUp from '../components/SignUp.vue'
import Login from '../components/Login.vue'
import Canva from '../components/Canva.vue'
import Hero from '../components/Hero.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import Post from '../components/Post.vue'
</script>

<template>
  <header>
   <Navbar />
    <Login />
   <Footer />
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

