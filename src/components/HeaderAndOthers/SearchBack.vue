<template>

  <div class="img-container container" v-bind:style="{ 'background-image': 'url(' + IMG_URL + back.backdrop_path + ')' }">
    <section>
      <div class="textinput">
        <h2>Welcome.</h2>
        <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
      </div>
      <div class="d-flex search">
        <input  v-model="searchText" placeholder="Search for a movie, tv show, person......">
        <button @click="goToSearchPage">Search</button>
      </div>
    </section>
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
    const TOP_MOVIE_DETA = 'https://api.themoviedb.org/3/movie/' + 238 + '?';
    axios
        .get(TOP_MOVIE_DETA + API_KEY + '&language=en-US')
        .then((response) => {
          this.back = response.data
        })
  },
  methods: {
    goToSearchPage() {
      this.$router.push({name: "search", params: {query: this.searchText}});
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
input{
  width: 1220px;
  height: 46px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
}
input[type="text"] {
   color: black;
 }

.img-container {
  position: relative;
  width: 100%;
  height: 300px;
  padding: 0;
  margin: 0;
  margin-bottom: 55px;
  background-repeat: no-repeat;
  background-size: cover;
}
.search{
  margin-left: 40px;
  margin-top: 85px;
}
h2{
  color: white;
  font-size: 2rem;
  font-weight: 500;
}
 h3{
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
}

button{
  font-size: 1.5rem;
  position: absolute;
  float: right;
  right: 36px;
  width: 100px;
  height: 46px;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
}
button:hover{

  color: green;
}
</style>

