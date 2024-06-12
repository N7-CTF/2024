<template>
<div>
<div class="heading text-center font-bold text-2xl m-5 text-gray-800 mt-[7rem]">New Post</div>

  <form class="mx-auto w-10/12 flex flex-col text-gray-800 border border-gray-300 p-4 shadow-lg max-w-2xl">
    <div class="mt-4">
            <label class="block text-gray-700">Title</label>
            <input v-model="title" type="text" name="" id="" placeholder="Enter title of your article" class="w-full px-4 py-3 rounded-lg  mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required>
          </div>
          <div class="mt-4">
            <label class="block text-gray-700">Cover image</label>
            <input v-model="image" type="text" name="" id="" placeholder="Enter Link of your cover image" class="w-full px-4 py-3 rounded-lg  mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required>
          </div>
        <div id="categories">

          <button class="uppercase m-1 rounded text-black px-5 py-3 text-base mb-3 font-medium transition duration-200 hover:bg-[#e1e1e1] mt-4 active:bg-[#e1e1e1]" 
          v-for="category in categories" 
          v-bind:key="category.id" :value="category.id" 
          @click.prevent="toggleCategory(category.id)" 
          :class="{ 'selected': isSelected(category.id) }">
            {{ category.nom }}
          </button>
    </div>
    <button @click.prevent="showAddCategoryForm"  class="w-full block bg-blue-700 hover:bg-blue-800 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6 mb-6">Create New Category</button>
    <textarea v-model="content" class="description rounded sec p-3 h-60 border border-gray-300 outline-none" spellcheck="false" placeholder="Describe everything about this post here"></textarea>
    <!-- icons -->
    <div class="icons flex text-gray-500 m-2">
      <div class="count ml-auto text-gray-400 text-xs font-semibold">0/300</div>
    </div>
    <!-- buttons -->
    <div class="buttons flex">
      <button @click="handleSubmit()" type="submit" class="w-full block bg-blue-700 hover:bg-blue-800 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6 mb-6">Publish</button>
    </div>
  </form>
   <!-- Overlay with dimmed background -->
   <div v-show="isAddCategoryFormVisible" @click="closeAddCategoryForm" class="fixed inset-0 bg-black bg-opacity-50 z-50" ></div>

  <!-- Add category form -->
  <form v-show="isAddCategoryFormVisible"  class="flex flex-col items-center fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-4 rounded shadow-lg z-50" >
    <div class="heading text-center font-bold text-2xl m-5 text-gray-800">New Category</div>
    <div class="w-full ">
            <input  v-model="categoryname" type="text" name="" id="" placeholder="Enter category name" class="w-full px-4 py-3 rounded-lg  mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required>
          </div>
    <div class="buttons w-[20rem]">
      <button @click="handleCategorySubmit()"  class="w-full block bg-blue-700 hover:bg-blue-800 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6 mb-6">Create</button>
    </div>
  </form> 
</div>

    
</template>
<script>

import axios from 'axios';

export default {
    name:'CreateArticle',
  data(){
      return {
        title : '',
        content : '',
        image : '',
        selectedCategories : [],
        categories : [],
        isAddCategoryFormVisible: false,
        categoryname : ''
      }
    },
    mounted(){
        this.fetchCategories();
    },
    methods: {
      closeAddCategoryForm() {
    this.isAddCategoryFormVisible = false;
  },
      showAddCategoryForm() {
      this.isAddCategoryFormVisible = true;
    },
    async handleCategorySubmit(){
        const utilisateurId = parseInt(localStorage.getItem('id'))
        const response = await axios.post('categories/', 
            {
                nom :this.categoryname,
            }
        );
      },
      async handleSubmit(){
        const utilisateurId = parseInt(localStorage.getItem('id'))
        const response = await axios.post('articles/', 
            {
                titre:this.title,
                contenu : this.content,
                image : this.image,
                published: true,
                utilisateurId : utilisateurId,
                categories: this.selectedCategories
          }
        );
        this.$router.push('/') 
      },
      fetchCategories() {
  
      axios.get(`categories`)
        .then(response => {
          this.categories = response.data; 
        })
        .catch(error => {
          console.error(error);
        });
      
      },
      toggleCategory(categoryId) {
      if (this.isSelected(categoryId)) {
        // If category is already selected, remove it from the selectedCategories array
        this.selectedCategories = this.selectedCategories.filter((id) => id !== categoryId);

      } else {
        // If category is not selected, add it to the selectedCategories array
        this.selectedCategories.push(categoryId);
      }
    },
    isSelected(categoryId) {
      return this.selectedCategories.includes(categoryId);
    },
    }

}
</script>

<style>
.selected{
  background-color: #e1e1e1;
}
</style>