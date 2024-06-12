<template>
  <section class="border-red-500 min-h-screen flex items-center justify-center">
    <div style="border: 1px solid #f7f7f7;" class=" p-5 flex rounded-2xl shadow-lg max-w-3xl">
      <div class="md:w-2/2 px-5">
        <h2 class="w-[21rem] mt-4 text-2xl font-bold text-[#002D74]">SignUp</h2>
        <p class="text-sm mt-4 text-[#002D74]">If you don't have an account, please create one</p>
        <form @submit.prevent class="mt-6" action="#" method="POST">
          <div>
            <label class="block text-gray-700">Username</label>
            <input v-model="username" type="email" name="" id="" placeholder="Enter Username" class="w-full px-4 py-3 rounded-lg  mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required>
          </div>

          <div class="mt-4">
            <label class="block text-gray-700">Email Address</label>
            <input v-model="email" type="email" name="" id="" placeholder="Enter Email Address" class="w-full px-4 py-3 rounded-lg  mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required>
          </div>
  
          <div class="mt-4">
            <label class="block text-gray-700">Password</label>
            <input v-model="password" type="password" name="" id="" placeholder="Enter Password" minlength="6" class="w-full px-4 py-3 rounded-lg  mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none" required>
          </div>
  

  
          <button @click="handleSubmit()" type="submit" class="w-full block bg-blue-700 hover:bg-blue-800 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6 mb-6">SignUp</button>
        </form>





        <div class="mb-4 text-sm flex justify-between items-center mt-3">
          <p>If you have an account...</p>
          <router-link to="/login"><button class="py-2 px-5 ml-3 bg-white border rounded-xl hover:scale-110 duration-300 border-blue-400  ">LogIn</button></router-link>
        </div>
      </div>


    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default{
    name:'SignUp',
    data(){
      return {
        username : '',
        email : '',
        password : ''
        
      }
    },
    methods: {
      async handleSubmit(){
        const response = await axios.post('users/', 
            {
            name : this.username,
            email : this.email,
            password : this.password,
            role : 'AUTHOR'
          }
        );
        this.$router.push('/login');
      }
    }

  }
</script>
