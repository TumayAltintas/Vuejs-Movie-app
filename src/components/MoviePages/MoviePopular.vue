<template>
  <div class="container">
    <div>
      <button v-on:click.prevent="previous()">Next</button>
      <button v-on:click.prevent="next()">Back</button>
    </div>
    <div>
        <div class="row">
          <div v-for="(movie,index) in Movies" :key="index" class="col" style="margin-right: 40px;padding: 0; border: 1px solid #e3e3e3;;max-width: 180px;border-radius: 8px">
            <div style="width: 180px">
              <router-link :to="'/Movie/'+ movie.id">
                <img style="width: 100%;border-radius: 8px"  :src="IMG_URL + movie.poster_path" alt="">
              </router-link>
            </div>
            <div>
              <h2>{{ movie.title }}</h2>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

let currentPage = 1;
export default {
  name: "MoviePopular",
  data() {
    return {
      Movies: [],
      IMG_URL: 'https://image.tmdb.org/t/p/w500',

    }
  },
  mounted() {
    this.fetchActors(currentPage)
  },
  methods: {
    async fetchActors(page) {
      try {
        const API_KEY = 'api_key=0fd2eb610862a35172254f63379f6e14';
        const TOP_MOVIE_URL = 'https://api.themoviedb.org/3/movie/top_rated?';
        axios
            .get(TOP_MOVIE_URL + API_KEY + '&language=en-US&page=' + page)
            .then((response) => {

              this.Movies = response.data.results
            })
      } catch (error) {
        console.log(error)
      }
    },
    scroll() {
      window.onscroll = () => {
        let BottomWindow =
            document.documentElement.scrollTop + window.innerWidth ===
            document.documentElement.offsetHeight;
        if (BottomWindow) {
          currentPage += 1;
          this.fetchActors((currentPage += 1))
        }
      }
    },
    next() {
      currentPage += 1;
      this.fetchActors(currentPage);
    },
    previous() {
      currentPage -= 1;
      this.fetchActors(currentPage);
    },
  },

}
</script>


<style scoped>
img {
  width: 150px;
}

h2 {
  font-size: 16px;
  color: #000000
}


</style>
