<template>
  <div id="carousel-container container Full">
    <div class="row">
      <div ref="carousel" style="overflow-y: hidden; white-space: nowrap;" id="carousel-wrapper"
           :style="{ width: (slides.length * 100) + '%', transform: 'translateX(' + (-currentSlide * (100 / slides.length)) + '%)' }">
        <div v-for="(Tv,index) in slides" :key="index" class="col-lg-2 col-md-3 col-sm-4 m-2"
             style="width: 165px;height: 250px;display: inline-block; flex: 0 0 auto;">
          <div>
            <div class="average">
              <span>{{ Tv.vote_average }}</span>
            </div>
            <router-link to="">
              <img class="opacity-100 shadow-lg rounded rounded-150" :src="IMG_URL + Tv.poster_path">
            </router-link>
          </div>
          <div class="title">
            <p>{{ Tv.name }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'



export default {
  name: 'NuxtTutorial',
  components: {

  },
  data() {
    return {
      slides: [],
      IMG_URL: 'https://image.tmdb.org/t/p/w500',
    }
  },

  async mounted() {
    const API_KEY = 'api_key=0fd2eb610862a35172254f63379f6e14';
    const TOP_MOVIE_URL = 'https://api.themoviedb.org/3/tv/top_rated?';

    axios
        .get(TOP_MOVIE_URL + API_KEY + '&language=en-US&page=' + this.currentPage)
        .then((response) => {

          this.TvSeries = response.data.results
        })


  },
  computed: {
    rows() {
      return this.filmler.length
    }


  },
  // setup(){
  //   const {store} = useContext();
  //   const Movies = computed(()=> store.getters.getMovie);
  //
  //   return{
  //     Movies
  //   }
  //
  // }

}


</script>

<style scoped>
#carousel-wrapper {
  display: flex;
  position: relative;
  transition: transform 0.5s;
  height: 320px;
}
#carousel-wrapper > * {
  width: calc(100% / slides.length);
}

#Full {
  margin-top: 150px
}

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
