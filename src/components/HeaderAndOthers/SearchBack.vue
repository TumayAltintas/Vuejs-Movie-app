<template>

  <div class="img-container container">
    <img v-if="MoviesDetails.backdrop_path == null" class="seacrh " :src="IMG_URL + back.backdrop_path">
    <img v-else class="seacrh " :src="IMG_URL + MoviesDetails.backdrop_path">
    <div class="overlay">
      <section class="inner_content new_index">
        <div id="media_v4" class="media discover">
          <div class="column_wrapper">
            <div class="content_wrapper wrap">
              <div class="title">
                <h2>Welcome.</h2>
                <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
              </div>
              <div class="search">
                <input v-model="searchText" placeholder="Enter search text">
                <button @click="goToSearchPage">Go</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SearchBack",
  data() {
    return {
      MoviesDetails: '',
      IMG_URL: 'https://image.tmdb.org/t/p/w500',
      MoviesCast: [],
      slides: [],
      currentSlide: 0,
      back: '',
      searchText: ""


    }
  },
  async mounted() {
    const API_KEY = 'api_key=0fd2eb610862a35172254f63379f6e14';
    const TOP_MOVIE_DETAILS = 'https://api.themoviedb.org/3/movie/' + this.random + '?';
    axios
        .get(TOP_MOVIE_DETAILS + API_KEY + '&language=en-US')
        .then((response) => {
          this.MoviesDetails = response.data
        })
  },
  methods: {
    goToSearchPage() {
      this.$router.push({name: "search", params: {query: this.searchText}});
    },
     created() {
      const API_KEY = 'api_key=0fd2eb610862a35172254f63379f6e14';
      const TOP_MOVIE_DETAILS = 'https://api.themoviedb.org/3/movie/' + 238 + '?';
      axios
          .get(TOP_MOVIE_DETAILS + API_KEY + '&language=en-US')
          .then((response) => {
            this.back = response.data
          })
    },
    computed: {
      random() {
        return Math.floor(Math.random() * 1200)
      }
    }
  }
}
</script>

<style scoped>
.seacrh {
  bottom: 25px;
  width: 100%;
  height: 300px;
}

.img-container {
  position: relative;
  width: 100%;
  padding: 0;
  margin: 0;
}

.title {
  color: #fff;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 10px;

}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;

}

</style>

