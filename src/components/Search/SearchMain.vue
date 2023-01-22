<template>
  <div class="container">
    <div>
      <button v-on:click.prevent="previous()">next</button>
      <button v-on:click.prevent="next()">next</button>
      <button @click="TvButton">tv</button>
      <button @click="MovieButton">movie</button>
    </div>
    <div>
      <section>
        <div class="row">
          <div v-for="data in search" :key="data.id" class="col-lg-2 col-md-3 m-3">
            <img style="width: 150px; height: 225px" class="opacity-100 shadow-lg rounded rounded-150 "
                 v-if="data.poster_path == null" src="../photo/empty.jpg" alt="">
            <img v-else class="opacity-100 shadow-lg rounded rounded-150 " :src="IMG_URL + data.poster_path" alt="">
            <router-link class="LinkItem" :to="'/Tv/'+ data.id">
              <h2>{{ data.name }}</h2>
            </router-link>
            <router-link class="LinkItem" :to="'/Movie/'+ data.id">
              <h2>{{ data.title }}</h2>
            </router-link>
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
  name: "SearchMain",
  data() {
    return {
      search: [],
      IMG_URL: 'https://image.tmdb.org/t/p/w500',
      text: 'movie',
      MoviesDetails: ''

    }
  },
  mounted() {
    this.fetchActors(currentPage)
  },
  methods: {
    async fetchActors(page) {
      try {
        const API_KEY = 'api_key=0fd2eb610862a35172254f63379f6e14';
        const TOP_MOVIE_DETAILS = 'https://api.themoviedb.org/3/search/' + this.text + '?';
        axios
            .get(TOP_MOVIE_DETAILS + API_KEY + '&language=en-US&query=' + this.$route.params.query + '&page=' + page)

            .then((response) => {
              this.search = response.data.results
            })
      } catch (error) {
        console.log(error)
      }
    },
    TvButton() {
      this.text = 'tv'
      this.fetchActors(currentPage)
    },
    MovieButton() {
      this.text = 'movie'
      this.fetchActors(currentPage)
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
  color: black;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  text-decoration: none;

}

.LinkItem {
  text-decoration: none;
  margin: 0;
  padding: 0;
}

</style>

