<template>

<div class="min-h-screen flex justify-center items-center py-20">
  <div class="container mx-auto p-12 rounded-xl">
    <h1 class="text-4xl font-bold text-center mb-8">My article</h1>
    <h5 class="flex items-center justify-center mb-6 text-xl">Profile
        <svg class="ml-1 h-4 pr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path></svg> My Articles </h5>

    <div class="sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 space-y-4 sm:space-y-0">
      <div v-for="article in articles" v-bind:key="article.id">
        <Single :article=article />
        <Deletebtn @click="deleteArticle(article.id)" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"/>
      </div>
    </div>
    </div>
  </div>

</template>
<script>

import axios from "axios";

import Single from './single.vue';
import Deletebtn from './deletebtn.vue';
export default{
    name:"Canva",
    components:{
        Single,
        Deletebtn,
    },

    mounted() {
    const userId = parseInt(localStorage.getItem('id'));
    this.fetchArticle(userId);
  },
  data() {
    return {
      articles: [], 
    };
  },
  methods: {
    fetchArticle(userId) {
      axios.get(`articles?userId=${userId}`)
        .then(response => {
          this.articles = response.data; 
        })
        .catch(error => {
          console.error(error);
        });
        
    },
    deleteArticle(articleId) {
      axios
        .delete(`articles/${articleId}`)
        .then(() => {

          this.articles = this.articles.filter((article) => article.id !== articleId);

        })
        .catch((error) => {
          console.error(error);
        });
    }
  
  }
}


</script>

