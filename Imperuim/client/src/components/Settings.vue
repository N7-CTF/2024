<template>
      <!-- component -->
<section class="bg-white dark:bg-gray-900">
    <div class="flex justify-center min-h-screen">

        <div class="flex items-center w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div class="w-full">
                

                

                <form @submit.prevent class="grid grid-cols-1 gap-6 mt-8 md:grid-cols-1">
                    <div class="mt-2">
            <label class="block text-gray-700">Username</label>
            <input v-model="username" type="username" name="" id="" placeholder="Enter Your New Username" minlength="6" class="w-full px-4 py-3 rounded-lg  mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none" required>
          </div>
                    
          <div class="mt-2">
            <label class="block text-gray-700">Email</label>
            <input v-model="email" type="email" name="" id="" placeholder="Enter Your New Email" minlength="6" class="w-full px-4 py-3 rounded-lg  mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none" required>
          </div>

          <div class="mt-2">
            <label class="block text-gray-700">Password</label>
            <input v-model="password" type="password" name="" id="" placeholder="Enter Your New Password" minlength="6" class="w-full px-4 py-3 rounded-lg  mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none" required>
                  <p v-if="passwordMismatch" class="text-red-500 mt-2">Passwords do not match</p>

          </div>

          <div class="mt-2">
            <label class="block text-gray-700">Confirm Password</label>
            <input v-model="confirmPass" type="password" name="" id="" placeholder="Enter Your New Password" minlength="6" class="w-full px-4 py-3 rounded-lg  mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none" required>
                  <p v-if="passwordMismatch" class="text-red-500 mt-2">Passwords do not match</p>

          </div>

          <button @click="handleSubmit()" type="submit" class="w-full block bg-blue-700 hover:bg-blue-800 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6 mb-6">Update Account Infomation</button>
        </form>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Settings',
  data(){
      return {
        username : '',
        email : '',
        password : '',
        confirmPass : '',
        passwordMismatch : ''
      }
    },
    methods: {
      async handleSubmit(){
        
        if(this.password !== this.confirmPass){
            this.passwordMismatch = true;
          return;
        }
        const response = await axios.patch('users/', 
            {
            id : localStorage.id,
            name : this.username,
            email : this.email,
            password : this.password
          }
        );
        localStorage.setItem('email', response.data.email)
        localStorage.setItem('name', response.data.name)
        localStorage.setItem('id', response.data.id)
         this.$router.push('/');
      }
    }
};
</script>
