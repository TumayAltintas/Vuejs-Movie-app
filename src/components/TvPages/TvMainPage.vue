<template>
  <div>
    <div class="row">
      <div style="overflow-y: hidden; white-space: nowrap;" id="carousel-wrapper">
        <div v-for="(Tv,index) in slides" :key="index" style="padding: 0;margin-right: 15px;width: 165px;height: 350px">
          <div class="average">
          <span style="color:#000;">
            {{ Tv.vote_average }}
          </span>
          </div>
          <router-link :to="'/Tv/' + Tv.id">
            <img class="opacity-100 shadow-lg rounded rounded-150" :src="IMG_URL + Tv.poster_path">
          </router-link>
          <div class="title">
            <h6>{{ Tv.name }}</h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'


export default {
  name: 'TvMainPage',
  components: {},
  data() {
    return {
      slides: [],
      IMG_URL: 'https://image.tmdb.org/t/p/w500',
      currentSlide: 0,
    }
  },

  async mounted() {
    const API_KEY = 'api_key=0fd2eb610862a35172254f63379f6e14';
    const TOP_MOVIE_URL = 'https://api.themoviedb.org/3/tv/top_rated?';

    axios
        .get(TOP_MOVIE_URL + API_KEY + '&language=en-US&page=' + this.currentPage)
        .then((response) => {

          this.slides = response.data.results
        })


  },
  computed: {
    rows() {
      return this.filmler.length
    }


  },
}


</script>

<style scoped>

#carousel-wrapper {
  display: flex;
  position: relative;
  transition: transform 0.5s;
  height: 320px;
}

div.title {
  width: 100%;
  position: relative;
  white-space: normal;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
}

div.average {
  position: relative;
  top: 0;
  width: max-content;
}



p {
  color: red;
}

img {
  width: 165px;
}
</style>
