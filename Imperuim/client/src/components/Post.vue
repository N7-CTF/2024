<template>
    <div class="flex items-center justify-center min-h-screen py-20">
    <div class="container p-12 mx-auto rounded-xl">
    <h1 class="mb-4 text-4xl font-bold text-center">Latest Posts</h1>
    <h5 class="flex items-center justify-center text-xl ">Home
              <svg class="h-4 pr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg>
        Articles
    </h5>
    <div class="px-2 py-8 ">
        <img class="w-full" :src="`${article.image}?${Math.floor(Math.random() * 1000)}`" alt="">
        <div class="max-w-[45rem] flex flex-col justify-center m-auto">
            <h2 class="mt-8 text-4xl font-bold">{{article.titre}}</h2>
        <div class="flex items-center py-6">
                <img class="rounded h-[2rem]" :src="getUserImageSrc()" alt="">
                <h3 class="px-2">{{user.name}}</h3>
            <span>
                <svg class="h-4 px-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/></svg>
            </span>
              <h6 class="text-base font-semibold text-black-800 ">{{this.Date}}</h6>
            <span>
                <svg class="h-4 px-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z"/></svg>
          </span>
              <h6 class="text-base font-semibold text-black-800">{{commentsNumber}}</h6>
        </div>
        <p class="pb-4" >{{article.contenu}}</p>

        </div>

    </div>
    <div class="max-w-[45rem] m-auto flex justify-center items-center flex-col">
       <h2 class="mb-8 text-2xl font-bold text-center">Related articles</h2>
       <div class="gap-4 space-y-4 sm:grid sm:grid-cols-2 lg:grid-cols-2 sm:space-y-0">

        
       </div>
    </div>
        <section class="py-8 bg-white dark:bg-gray-900 lg:py-16">
  <div class="max-w-2xl px-4 mx-auto">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-lg font-bold text-gray-900 lg:text-2xl dark:text-white">Discussion ({{commentsNumber}})</h2>
    </div>
    <form class="mb-6">
        <div class="px-4 py-2 mb-4 bg-white border border-gray-200 rounded-lg rounded-t-lg dark:bg-gray-800 dark:border-gray-700">
            <textarea v-model="CommentContent" id="commentArea" rows="6"
                class="w-full px-0 text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                placeholder="Write a comment..." required></textarea>
        </div>
        <button @click="SubmitComment()" class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800">
            Post comment
        </button>
    </form>

    <div v-for="comment in comments" v-bind:key="comment.id">
        <CommentOne :comment=comment  />
      </div>

       </div>
</section>   
  </div>
    
</div>

    
</template>
<script>

import CommentOne from './CommentOne.vue'
import axios from 'axios'
export default {
    name:'Post',
    components:{  
        CommentOne,
    },
    data() {
        return {
            article : {},
            comments : [],
            commentsNumber : '',
            CommentContent : '',
            email : '',
            Date : '',
            user : '',
            authorid : ''

        }
    },
  mounted() {
    this.id = this.$route.params.id;
    this.getArticle();
    this.getComments()
    const storedEmail = localStorage.getItem('email')
    this.email = storedEmail;
    this.authorid = localStorage.getItem('authorid');
  },

  methods: {
    
      async getArticle(){
        const path= `articles/${this.id}`
        console.log(path);
        const articleraw = await axios.get(path);
        this.article = articleraw.data
        const date = new Date(this.article.createdAt);
        this.Date = date.toLocaleString();
        localStorage.setItem('authorid', this.article.utilisateurId)
        this.user={name: this.article.auteur}
      },
      getUserImageSrc() {
      const number = this.authorid % 8 + 1; 
      return `../../public/${number}.png`;
      },
      
      async getComments(){

        const response = await axios.get(`commentaires/${this.id}`)
        .then(response => {
          this.comments = response.data; // Assign the fetched article data to the 'article' property
            this.commentsNumber = this.comments.length
        })
        .catch(error => {
          console.error(error);
        });
      },

      async SubmitComment(){
        const response = await axios.post('commentaires/', 
            {
            contenu : this.CommentContent,
            email : this.email,
            articleId : this.article.id
          }
        );
      },
    },
    beforeRouteLeave(to, from, next) {
    if (to.path !== '/post') {
      localStorage.removeItem('authorid');
    }
    next();
  },
  

}
</script>