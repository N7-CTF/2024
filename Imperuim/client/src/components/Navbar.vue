<template>

<nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0  dark:border-gray-600">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
  <a href="/" class="flex items-center">
      <img src="../../public/logo.png" class="h-[4rem] mr-3" alt="">
  </a>
  <div class="flex md:order-2">
    <button v-if="!name" type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"><router-link  to="/login">Login</router-link>
    </button>
<!-- Dropdown menu -->
<Profile />
  <!-- Nav Dropwdown Menu -->

  <button @click="toggleDropdownNav()" data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>

  <!-- end of drop down menu -->
  </div>
  <div v-if="showDropdownNav || responsive !== 'small' " class="md:block items-center justify-between  w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      <li>
          <router-link class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/">Home</router-link>
      </li>
      <li>
          <router-link class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/articles">Articles</router-link>
      </li>
      <li>
        <router-link class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/about">About</router-link>
      </li>
      <li>
        <router-link class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" to="/Contact">Contact</router-link>
      </li>
    </ul>
  </div>
  </div>
</nav>
  
</template>

<script>
import Profile from './Profile.vue';
export default {
    name:'Navbar',
    components:{
    Profile,
  },
    data() {
    return {
      name: '', // Initialize the userName data property
      id : '',
      showDropdownNav: false ,
      responsive : ''
    };
  },
  mounted() {
    this.updateResponsive();
    // Retrieve the user's name from localStorage
    const storedName = localStorage.getItem('name');
    this.id = localStorage.getItem('id');

    // Update the userName data property with the retrieved value
    this.name = storedName;
    window.addEventListener('resize', this.updateResponsive);
  },
  beforeUnmount() {
    // Remove event listener before component is unmounted
    window.removeEventListener('resize', this.updateResponsive);
  },
  
  methods: {
    toggleDropdownNav() {
  this.showDropdownNav = !this.showDropdownNav;
},
updateResponsive(){
    // Get the current screen width
    const screenWidth = window.innerWidth;

    // Update the responsive property based on screen width
    if (screenWidth < 768) {
      this.responsive = 'small';
    } else if (screenWidth >= 768 && screenWidth < 1024) {
      this.responsive = 'medium';
    } else {
      this.responsive = 'large';
    }

    // Update the visibility of the dropdown menu on screen size change
    if (this.responsive !== 'small') {
        this.showDropdownNav = false;
      }
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

