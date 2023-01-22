<template>
  <div class="container">
    <div>
      <button v-on:click.prevent="previous()">next</button>
      <button v-on:click.prevent="next()">next</button>
    </div>
    <div>
      <section>
        <div class="row">
          <div v-for="tv in Tv" :key="tv.id" class="col-lg-2 col-md-3 m-3">
            <router-link :to="'/Tv/' + tv.id">
              <img class="opacity-100 shadow-lg rounded rounded-150 " :src="IMG_URL + tv.poster_path" alt="">
            </router-link>
            <h2>{{ tv.name }}</h2>
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
      Details: [],
      IMG_URL: 'https://image.tmdb.org/t/p/w500',
      key: 'keyword?'

    }

  },
  mounted() {
    this.fetchActors(currentPage)
  },
  methods: {
    async fetchActors(page) {
      try {
        const API_KEY = 'api_key=0fd2eb610862a35172254f63379f6e14';
        const TOP_MOVIE_URL = 'https://api.themoviedb.org/3/search/';
        axios
            .get(TOP_MOVIE_URL + this.key + '&language=en-US&page=' + API_KEY + this.$route.params.id + page)
            .then((response) => {

              this.Tv = response.data.results
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
  color: blue
}
</style>
