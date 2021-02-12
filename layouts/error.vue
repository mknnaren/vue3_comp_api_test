<template>
  <v-app dark>
    <h1 v-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <v-btn to="/">Go to movie list</v-btn>
    
  </v-app>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent, computed, useMeta, ref } from '@nuxtjs/composition-api'

interface User {
  firstName: string
  lastName: string
}

export default defineComponent({
  head: {},
  props: {
    error: {
      type: Object,
      default: null
    }
  },

  setup ({error}, context) {
    console.log(error.statusCode);
    console.log(context);
    const pageNotFound = ref('404 Not Found')
    const otherError = ref('An error occurred')
    const { title } = useMeta(() => ({ title: error.statusCode === 404 ? pageNotFound.value : otherError.value }))
    const errState = ref(error)
    const movTitle = ref("");
    const page = ref(1);
    
    function getMovieList(){
      axios({
            method: 'get',
            baseURL: "https://jsonmock.hackerrank.com/api/movies/search",
            url: `/?Title=${movTitle.value}&page=${page.value}`,
        })
            .then(response => {
                console.log(response.data);
                console.log(response.data.data);
            }, err => {
                console.log(err);
            });
    }
    return {
      pageNotFound,
      otherError,
      errState,
      getMovieList
    }
  }
})
// export default {
//   layout: 'empty',
//   props: {
//     error: {
//       type: Object,
//       default: null
//     }
//   },
//   data () {
//     return {
//       pageNotFound: '404 Not Found',
//       otherError: 'An error occurred'
//     }
//   },
//   head () {
//     const title =
//       this.error.statusCode === 404 ? this.pageNotFound : this.otherError
//     return {
//       title
//     }
//   }
// }
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
