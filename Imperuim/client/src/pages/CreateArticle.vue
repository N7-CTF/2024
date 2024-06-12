<script setup>
import CreateArticle from '../components/CreateArticle.vue'
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'

</script>

<template>
    <Navbar />
    <CreateArticle />
    <Footer />
</template>

<script>


export default {
  name:'app',
  components:{
    Navbar,
    Footer,
    CreateArticle,
  }
}
</script>

