<template>
    <article class="p-6 mb-6 text-base bg-white border-t border-gray-200 dark:border-gray-700 dark:bg-gray-900">
        <footer class="flex justify-between items-center mb-2">
            <div class="flex items-center">
                <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white">
                    <img class="mr-2 w-6 h-6 rounded-full" :src="getUserImageSrc()" alt="Bonnie Green">
                    {{ comment.email }}
                </p>
            </div>
            <button  @click="deleteComment" class="text-red-500 hover:text-red-700">Delete</button>
        </footer>
        <p class="text-gray-500 dark:text-gray-400">{{ comment.contenu }}</p>
    </article>
</template>

<script>
import axios from 'axios'

export default {
    name: 'CommentOne',
    props: {
        comment: {
            type: Object,
            required: true
        },
   
    },
    computed: {
        
    },
    mounted(){
       
    },
    methods: {
        getUserImageSrc() {
      const number = this.comment.id % 8 + 1; // Replace with the actual user ID
      // Assuming your images are named from 1.jpg to 8.jpg in the "public" folder
      return `../../public/${number}.png`;
      },
      
        deleteComment() {
            axios.delete(`/commentaires/${this.comment.id}`)
                .then(response => {
                })
                .catch(error => {
                });
        }
    }
}
</script>
