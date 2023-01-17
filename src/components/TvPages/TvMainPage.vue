<template>
  <div>
    <div class="row">
      <div class="blur" style="overflow-y: hidden; white-space: nowrap;" id="carousel-wrapper">
        <div v-for="(Tv,index) in slides" :key="index" style="padding: 0;margin-right: 25px;width: 165px;height: 350px">
          <div class="average">
          <span style="color:#000;">
            {{ Tv.vote_average }}
          </span>
          </div>
          <img class="opacity-100 shadow-lg rounded rounded-150" :src="IMG_URL + Tv.poster_path">
          <router-link class="link-item" :to="'/Tv/' + Tv.id">
            <div class="title">
              <h6 class="ptext">{{ Tv.name }}</h6>
            </div>
          </router-link>
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
  height: 350px;
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

img {
  width: 165px;
}
.link-item {
  text-decoration: none;
}

.ptext {
  color: black;
  font-weight: 700;
  font-size: 1.2rem;
}


</style>

<!--.blur {-->
<!--transition: linear 0.3s;-->
<!--opacity: 1;-->
<!--width: 100%;-->
<!--display: flex;-->
<!--justify-content: center;-->
<!--flex-wrap: wrap;-->
<!--align-items: flex-start;-->
<!--align-content: flex-start;-->
<!--flex-direction: column;-->
<!--}-->

<!--.blur::after {-->
<!--content: '';-->
<!--width: 60px;-->
<!--height: 100%;-->
<!--position: absolute;-->
<!--top: 0;-->
<!--right: 0;-->
<!--background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, #fff 100%);-->
<!--will-change: opacity;-->

<!--}-->