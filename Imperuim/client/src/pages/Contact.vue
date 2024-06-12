<script setup>
import Contact from '../components/Contact.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

</script>

<template>
    <Navbar />
    <Contact />
    <Footer />
</template>

<script>


export default {
  name:'app',
  components:{
    Navbar,
    Footer,
    Contact,
  }
}
</script>

