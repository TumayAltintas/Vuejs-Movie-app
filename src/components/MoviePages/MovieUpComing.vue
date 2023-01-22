<template>
  <div class="container">
    <div>
      <button v-on:click.prevent="previous()">Next</button>
      <button v-on:click.prevent="next()">back</button>
    </div>
    <div>
      <section>
        <div class="row">
          <div v-for="movie in Movies" :key="movie.id"
               class="col-lg-2 col-md-3 m-3">
            <router-link :to="'/Movie/'+ movie.id">
              <img class="opacity-100 shadow-lg rounded rounded-150" :src="IMG_URL + movie.poster_path" alt="">
            </router-link>
            <h2>{{ movie.title }}</h2>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";

let currentPage = 1;
export default {
  name: "MovieUoComing",
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
        const TOP_MOVIE_URL = 'https://api.themoviedb.org/3/movie/upcoming?';
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
