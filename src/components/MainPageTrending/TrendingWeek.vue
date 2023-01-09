<template>
  <div class="container Full">
    <div class="row">
      <div v-for="(day,index) in TrendingDay" :key="index" class="col-lg-2 col-md-3 col-sm-4  m-0">
        <div>
          <div class="average">
            <!--            <span>{{ day.vote_average }}</span>-->
          </div>
          <router-link to="">
            <img class="opacity-100 shadow-lg rounded rounded-150" :src="IMG_URL + day.poster_path">
          </router-link>
        </div>
        <div class="title">
          <p v-if="day.media_type='movie'">{{ day.title }}</p>
          <p v-if="day.media_type='tv'">{{ day.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'


export default {
  name: 'TrendingWeek',
  components: {},
  data() {
    return {
      TrendingDay: [],
      IMG_URL: 'https://image.tmdb.org/t/p/w500',

    }
  },

  mounted() {
    const API_KEY = 'api_key=0fd2eb610862a35172254f63379f6e14';
    const TOP_MOVIE_URL = 'https://api.themoviedb.org/3/trending/all/week?';

    axios
        .get(TOP_MOVIE_URL + API_KEY)
        .then((response) => {

          this.TrendingDay = response.data.results
        })
  },
}


</script>

<style scoped>
div.average {
  text-align: end;
  position: relative;

}

div.title {
  justify-content: center;
  text-align: center;
}

p.title {
  color: red;
}

img {
  width: 165px;
}


</style>


