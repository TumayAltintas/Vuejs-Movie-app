<template>
  <section>
    <div class="container">
      <div>
        <button v-on:click.prevent="previous()">next</button>
        <button v-on:click.prevent="next()">next</button>
        <button @click="tvbutton">tv</button>
        <button @click="moviebutton">movie</button>
      </div>
      <div>
        <section>
          <div class="row">
            <div v-for="data in search" :key="data.id" class="col-lg-2 col-md-3 m-3">
              <img style="width: 150px; height: 225px" class="opacity-100 shadow-lg rounded rounded-150 "
                   v-if="data.poster_path == null" src="../photo/empty.jpg">
              <img v-else class="opacity-100 shadow-lg rounded rounded-150 " :src="IMG_URL + data.poster_path">
              <router-link class="link-item" :to="'/Tv/'+ data.id">
                <h2>{{data.name}}</h2>
              </router-link>
              <router-link class="link-item" :to="'/Movie/'+ data.id">
                <h2>{{data.title}}</h2>
              </router-link>
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
            .get(TOP_MOVIE_DETAILS + API_KEY + '&language=en-US&query='+ this.$route.params.query + '&page=' + page)

            .then((response) => {
              this.search = response.data.results
            })
      } catch (error) {
        console.log(error)
      }
    },
    tvbutton(){
      this.text = 'tv'
      this.fetchActors(currentPage)
    },
    moviebutton(){
      this.text = 'movie'
      this.fetchActors(currentPage)
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
  color: black;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  text-decoration: none;

}
.link-item{
  text-decoration: none;
  margin:0;
  padding:0;
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

