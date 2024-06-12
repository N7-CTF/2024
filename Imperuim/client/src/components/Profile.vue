<template>
    <div >
    <button  v-if="name" id="dropdownDefaultButton" @click="isOpen = !isOpen" data-dropdown-toggle="dropdown" class="flex items-center w-full px-5 py-2 transition-colors duration-200 dark:hover:bg-gray-800 gap-x-2 hover:bg-gray-100 focus:outline-none">
                <img class="object-cover w-8 h-8 rounded-full" :src="getUserImageSrc()" alt="">
            
                <div class="text-left rtl:text-right">
                    <h1 class="text-sm font-medium text-gray-700 capitalize dark:text-white">{{name}}</h1>
    
                    <p class="text-xs text-gray-500 dark:text-gray-400">author</p>
                </div>
    </button>
    
    <div v-if="isOpen" id="dropdown" style="top:4rem;right:1.5rem;" class="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <router-link to="/CreateArticle" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">New Article</router-link>
      </li>
      <li>
        <router-link class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" to="/myarticles">My Articles</router-link>
      </li>
      <li>
        <router-link class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white" to="/settings">Settings</router-link>
      </li>
      <li>
        <a @click="signOut" href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>
</div>
</template>


<script>
export default {
    name:'Profile',
    data() {
    return {
      name: '', // Initialize the userName data property
      id : '',
      showDropdown: false,
      isOpen: false,
    };
  },
  mounted() {
    
    // Retrieve the user's name from localStorage
    const storedName = localStorage.getItem('name');
    this.id = localStorage.getItem('id');

    // Update the userName data property with the retrieved value
    this.name = storedName;
  },

  
  methods: {
    getUserImageSrc() {
      const number = this.id % 8 + 1; // Replace with the actual user ID
      // Assuming your images are named from 1.jpg to 8.jpg in the "public" folder
      return `../../public/${number}.png`;
    },
    toggleDropdown() {
      this.showDropdown = !this.showDropdown;
    },
    signOut() {
      // Clear the token from localStorage or sessionStorage
      localStorage.clear();
      // Redirect the user to the login page or perform any other sign-out actions
      this.$router.push('/login');
    }
  }
}
</script>

