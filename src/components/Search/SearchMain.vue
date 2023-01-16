<template>
  <section>
    <div class="container">
      <div>
        <button v-on:click.prevent="previous()">next</button>
        <button v-on:click.prevent="next()">next</button>
      </div>
      <div>
        <section>
          <div class="row">
            <div v-for="movie in MoviesDetails" :key="movie.id" class="col-lg-2 col-md-3 m-3">
              <img style="width: 150px; height: 225px" class="opacity-100 shadow-lg rounded rounded-150 "
                   v-if="movie.poster_path == null" src="../photo/empty.jpg">
              <img v-else class="opacity-100 shadow-lg rounded rounded-150 " :src="IMG_URL + movie.poster_path">
              <h2>{{ movie.title }}</h2>
            </div>
          </div>
        </section>
      </div>
    </div>
  </section>

</template>

<script>
import axios from "axios";

let currentPage = 1;
export default {
  name: "SearchMain",
  data() {
    return {
      Tv: [],
      IMG_URL: 'https://image.tmdb.org/t/p/w500',
      text: 'movie',
      MoviesDetails: ''

    }
  },
  mounted() {
    this.fetchActors(currentPage)
    const API_KEY = 'api_key=0fd2eb610862a35172254f63379f6e14';
    const TOP_MOVIE_DETAILS = 'https://api.themoviedb.org/3/search/' + this.text + '?';
    axios
        .get(TOP_MOVIE_DETAILS + API_KEY + '&language=en-US&query=' + this.$route.params.query + '&page=1&include_adult=true')
        .then((response) => {
          this.MoviesDetails = response.data.results
        })
  },
  methods: {
    async fetchActors(page) {
      try {
        const API_KEY = 'api_key=0fd2eb610862a35172254f63379f6e14';
        const TOP_MOVIE_DETAILS = 'https://api.themoviedb.org/3/search/' + this.text + '?';
        axios
            .get(TOP_MOVIE_DETAILS + API_KEY + '&language=en-US&query=' + this.$route.params.query + '&page=' + page)

            .then((response) => {
              this.Tv = response.data.results
            })
      } catch (error) {
        console.log(error)
      }
    },
    scroll() {
      window.onscroll = () => {
        let bottomofWindow =
            document.documentElement.scrollTop + window.innerWidth ===
            document.documentElement.offsetHeight;
        if (bottomofWindow) {
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
<!--<template>-->
<!--  <section>-->
<!--    <div class="container">-->
<!--      <div>-->
<!--        <button v-on:click.prevent="previous()">next</button>-->
<!--        <button v-on:click.prevent="next()">next</button>-->
<!--      </div>-->
<!--      <div>-->
<!--        <section>-->
<!--          <div class="row">-->
<!--            <div v-for="movie in MoviesDetails" :key="movie.id" class="col-lg-2 col-md-3 m-3">-->
<!--              <img style="width: 150px; height: 225px" class="opacity-100 shadow-lg rounded rounded-150 "-->
<!--                   v-if="movie.poster_path == null" src="../photo/empty.jpg">-->
<!--              <img v-else class="opacity-100 shadow-lg rounded rounded-150 " :src="IMG_URL + movie.poster_path">-->
<!--              <h2>{{ movie.title }}</h2>-->
<!--            </div>-->
<!--          </div>-->
<!--        </section>-->
<!--      </div>-->
<!--    </div>-->
<!--  </section>-->

<!--</template>-->

<!--<script>-->
<!--import axios from "axios";-->

<!--let currentPage = 1;-->
<!--export default {-->
<!--  name: "SearchMain",-->
<!--  data() {-->
<!--    return {-->
<!--      MoviesDetails: [],-->
<!--      IMG_URL: 'https://image.tmdb.org/t/p/w500',-->
<!--      text: 'movie'-->

<!--    }-->
<!--  },-->
<!--  mounted() {-->

<!--    const API_KEY = 'api_key=0fd2eb610862a35172254f63379f6e14';-->
<!--    const TOP_MOVIE_DETAILS = 'https://api.themoviedb.org/3/search/' + this.text + '?';-->
<!--    axios-->
<!--        .get(TOP_MOVIE_DETAILS + API_KEY + '&language=en-US&query=' + this.$route.params.query + '&page=1&include_adult=false')-->
<!--        .then((response) => {-->
<!--          this.MoviesDetails = response.data.results-->
<!--        })-->
<!--  },-->


<!--}-->
<!--</script>-->

