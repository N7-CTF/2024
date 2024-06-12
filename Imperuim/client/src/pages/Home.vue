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
    <!-- SECRET_KEY=VTue2x2WfypeVFmJpVKQYxG2f2nHRbc3  -->
   <Navbar />
   <Hero />
   <Canva />
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

