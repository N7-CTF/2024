import Vue from 'vue';
import Vuex from 'vuex';
import jsonwebtoken from 'jsonwebtoken';

const store = new Vuex.Store({
  modules: {
    auth: {
      state: {
        token: null,
      },
      mutations: {
        setToken(state, token) {
          state.token = token;
        },
      },
      actions: {
        // Generate a JWT token
        genToken(context, userId) {
          const token = jsonwebtoken.sign({
            id: userId,
          }, process.env.VUE_APP_JWT_SECRET, {
            expiresIn: '30d',
          });

          context.commit('setToken', token);
        },

        // Verify a JWT token
        validateToken(context, token) {
          const decodedToken = jsonwebtoken.verify(token, process.env.VUE_APP_JWT_SECRET);

          if (decodedToken) {
            return decodedToken.id;
          }

          return null;
        },

        // Handle login
        async login(context, email, password) {
          // Make a request to the server to login the user
          const response = await axios.post('/api/login', {
            email,
            password,
          });

          // If the login was successful, set the token in the store
          if (response.data.success) {
            context.commit('setToken', response.data.token);
          }
        },
      },
    },
  },
});

export default store;