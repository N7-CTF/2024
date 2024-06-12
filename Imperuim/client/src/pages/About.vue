<script setup>
import About from '../components/About.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

</script>

<template>
    <Navbar />
    <About />
    <Footer />
</template>

<script>


export default {
  name:'app',
  components:{
    Navbar,
    Footer,
    About,
  }
}
</script>

