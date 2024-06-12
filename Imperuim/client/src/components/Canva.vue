<template>

<div class="min-h-screen flex justify-center items-center py-20">
  <div class="container mx-auto p-12 rounded-xl">
    <h1 class="text-4xl font-bold text-center mb-8">Latest Posts</h1>
    <div class="flex align-center">
      <div class="m-4 mr-9"><svg class="h-7" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M512 256A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM217.4 376.9L117.5 269.8c-3.5-3.8-5.5-8.7-5.5-13.8s2-10.1 5.5-13.8l99.9-107.1c4.2-4.5 10.1-7.1 16.3-7.1c12.3 0 22.3 10 22.3 22.3l0 57.7 96 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32l-96 0 0 57.7c0 12.3-10 22.3-22.3 22.3c-6.2 0-12.1-2.6-16.3-7.1z"/></svg></div>
    <div class="w-11/12 cat flex overflow-scroll ">
      <button class=" uppercase m-1 rounded px-5 py-3 text-base mb-3 font-medium text-black transition duration-200 
      hover:bg-[#e1e1e1] active:bg-blue-700 " v-for="categorie in categories" v-bind:key="categorie.id" >{{categorie.category}} </button>
    </div>
    <div class="m-4 ml-9"><svg class="h-7" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1l99.9 107.1c3.5 3.8 5.5 8.7 5.5 13.8s-2 10.1-5.5 13.8L294.6 376.9c-4.2 4.5-10.1 7.1-16.3 7.1C266 384 256 374 256 361.7l0-57.7-96 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-57.7c0-12.3 10-22.3 22.3-22.3c6.2 0 12.1 2.6 16.3 7.1z"/></svg></div>
  </div>
    <!-- Box-1 -->
    <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 space-y-4 sm:space-y-0">
      <div v-for="article in articles" v-bind:key="article.id">
        <Single :article=article  />
      </div>
    </div>
    <div class="flex justify-center items-center">
      <router-link to="/articles">
      <h2 class="text-2xl font-bold text-center ">View all articles</h2>
      </router-link>
      <svg class="h-8 pl-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
    </div>
  </div>
    
</div>
</template>
<script>

import Single from './single.vue';
import axios from 'axios';
export default{
    name:"Canva",
    components:{
        Single,
    },

    mounted() {
    this.fetchArticle(); // Call the method to fetch the article data
    this.fetchCategories(); 

    
  },
  data() {
    return {
      articles: [], // Empty object to hold the article data
      categories : []
    };
  },
  methods: {
    fetchArticle() {
    
      // Make an API request to fetch the article data
      // Replace the API_URL with your actual API endpoint
      axios.get(`articles/latest`)
        .then(response => {
          this.articles = response.data; // Assign the fetched article data to the 'article' property
        })
        .catch(error => {
          console.error(error);
        });
      
    },
    fetchCategories() {
    

      axios.get(`categories/count`)
        .then(response => {
          this.categories = response.data; 
        })
        .catch(error => {
          console.error(error);
        });
      
    }
  }
}


</script>
<style>


.cat::-webkit-scrollbar{
  display: none;
color: #e1e1e1;
}
</style>
