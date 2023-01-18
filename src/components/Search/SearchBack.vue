<template>
  <div class="img-container container">
    <div class="img-c" :style="{ 'background-image': 'url(' + IMG_URL + MoviesDetails + ')' }">
      <section class="warms">
        <div class="textinput">
          <h2>Welcome.</h2>
          <h3>Millions of movies, TV shows and people to discover. Explore now.</h3>
        </div>
        <div class="d-flex search">
          <input @keydown.enter="goToSearchPage" v-model="searchText"
                 placeholder="Search for a movie, tv show, person......">
          <button @click="goToSearchPage">Search</button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const API_KEY = 'api_key=0fd2eb610862a35172254f63379f6e14';
export default {
  name: "SearchBack",
  data() {
    return {
      MoviesDetails: '',
      IMG_URL: 'https://image.tmdb.org/t/p/w500',
      searchText: "",
      random: Math.floor(Math.random() * 200),
      second: '',
    }
  },
  async mounted() {
    const TOP_MOVIE_DETAILS = 'https://api.themoviedb.org/3/movie/' + 98 + '?';
    axios
        .get(TOP_MOVIE_DETAILS + API_KEY + '&language=en-US')
        .then((response) => {
          this.MoviesDetails = response.data.backdrop_path
        })
  },
  methods: {
    goToSearchPage() {
      if (this.searchText === '') {
        alert('Please enter a movie, tv show or person name')
      } else {
        this.$router.push({name: "search", params: {query: this.searchText}});
      }
    },
  }
}
</script>

<style scoped>
input {
  width: 1220px;
  height: 46px;
  border-radius: 30px;
  border: none;
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
  margin-bottom: 70px;
}

.img-c {
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  flex-wrap: wrap;
  min-height: 300px;
  height: calc(100vh / 2.5);
  max-height: 360px;
  background-position: 50% 50%;
  align-content: center;
  justify-content: center;


}


.search {
  margin-top: 40px;
}

h2 {
  color: white;
  font-size: 2rem;
  font-weight: 500;
}

h3 {
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
}

button {
  font-size: 1rem;
  position: absolute;
  align-items: center;
  color: white;
  float: right;
  right: 36px;
  width: 100px;
  height: 46px;
  font-weight: 700;
  border: none;
  border-radius: 30px;
  background: linear-gradient(to right, var(--CostumGreen), var(--CostumBlue));
  cursor: pointer;
  --CostumGreen: rgba(30, 213, 169);
  --CostumBlue: rgba(1, 180, 228);
  --tmdbDarkBlue: rgb(3, 37, 65);
}

button:hover {
  color: black;
}

.warms {
  max-width: var(--maxPrimaryPageWidth);
  width: 100%;

  padding-left: 40px;
  padding-right: 40px;
  padding-top: 30px;
  padding-bottom: 30px;
  --maxPrimaryPageWidth: 1300px;
}

</style>

