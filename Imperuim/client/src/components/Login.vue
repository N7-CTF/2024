    <template>
  <section class="border-red-500 min-h-screen flex items-center justify-center">
    <div style="border: 1px solid #f7f7f7;" class="p-5 flex rounded-2xl shadow-lg max-w-3xl">
      <div class="md:w-2/2 px-5">
        <h2 class="mt-4 text-2xl font-bold text-[#002D74]">Login</h2>
        <p class="text-sm mt-4 text-[#002D74]">If you have an account, please login</p>
        <form @submit.prevent class="mt-6" action="#" method="POST">
          <div>
            <label class="block text-gray-700">Email Address</label>
            <input v-model="email" type="email" name="" id="" placeholder="Enter Email Address" class="w-full px-4 py-3 rounded-lg  mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required>
            <p v-if="WrongCred" class="text-red-500 mt-2">Email or Password are incorrect</p>

          </div>
  
          <div class="mt-4">
            <label class="block text-gray-700">Password</label>
            <input v-model="password" type="password" name="" id="" placeholder="Enter Password" minlength="6" class="w-full px-4 py-3 rounded-lg  mt-2 border focus:border-blue-500
                  focus:bg-white focus:outline-none" required>
            <p v-if="WrongCred" class="text-red-500 mt-2">Email or Password are incorrect</p>

                  
          </div>
  
          <div class="text-right mt-2">
            <a href="#" class="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
          </div>
  
          <button @click="handleSubmit()" type="submit" class="w-full block bg-blue-700 hover:bg-blue-800 focus:bg-blue-400 text-white font-semibold rounded-lg
                px-4 py-3 mt-6 mb-6">Log In</button>
        </form>





        <div class="mb-4 text-sm flex justify-between items-center mt-3">
          <p>If you don't have an account...</p>
          <router-link to="/signup"><button class="py-2 px-5 ml-3 bg-white border rounded-xl hover:scale-110 duration-300 border-blue-400  ">Register</button></router-link>
        </div>
      </div>


    </div>
  </section>

 
</template>

<script>

import axios from 'axios'
export default{
    name:'Login',
    data () {
      return {
        email : '',
        password : '',
        WrongCred : ''
      }
    },
    methods :{
      async handleSubmit(){
        const response = await axios.post('login', {
          email: this.email,
          password: this.password,
        }); 
        // Handle the response based on the authentication result
        if (response.data.success) {
          // Redirect the user to the authenticated portion of your application
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('email', response.data.user.email)
          localStorage.setItem('name', response.data.user.name)
          localStorage.setItem('id', response.data.user.id)
          this.$router.push('/');
        } else {
          // Display an error message indicating invalid credentials
          this.WrongCred = true;
        }
        
      }
    }
}
</script>

