<template>
  <div class="container">
    <section :tv="TvDetails" class="container d-flex">
      <div>
        <img class="ImgAllof" :src="IMG_URL + TvDetails.poster_path">
      </div>
      <div class="MoviesDetails">
        <h3>{{ TvDetails.name }} ({{ TvDetails.first_air_date }})</h3>
      </div>
      <section class="d-flex" style="position: absolute; left: 37%;margin-top: 45px;">
        <div v-for="genre in TvDetails.genres">
          <span class="genres" style="margin-left: 1.5rem">{{ genre.name }}</span>
        </div>
      </section>
      <section class="Overview">
        <div>
          <h3 style="color: darkblue">Overview</h3>
        </div>
        <div class="Overview">
          <p class="Overview">
            {{ TvDetails.overview }}
          </p>
        </div>
      </section>
    </section>
    <div class="row">
      <div class="blur" ref="carousel" style="overflow-y: hidden; white-space: nowrap;" id="carousel-wrapper">
        <div v-for="(cast,index) in slides" :key="index"
             class="opacity-100 shadow-lg rounded-3 col-lg-2 col-md-3 col-sm-4 m-2"
             style="width: 138px;height: 320px;display: inline-block; flex: 0 0 auto;">
          <div>
            <img v-if="cast.profile_path == null" class="ImgCast" style="height: 207px"
                 src="../photo/empty-profile-picture-png-2-2.png">
            <img v-else class="ImgCast" :src="IMG_URL + cast.profile_path">
            <p class=" title2">{{ cast.name }}</p>
            <p class=" title">{{ cast.character }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "Tv",
  components: {},
  data() {
    return {
      slides: [],
      IMG_URL: 'https://image.tmdb.org/t/p/w500',
      currentSlide: 0,
      TvDetails: '',

    }
  },
  async mounted() {
    const API_KEY = 'api_key=0fd2eb610862a35172254f63379f6e14';
    const TOP_MOVIE_DETAILS = 'https://api.themoviedb.org/3/tv/' + this.$route.params.id + '?';
    axios
        .get(TOP_MOVIE_DETAILS + API_KEY + '&language=en-US')
        .then((response) => {
          this.TvDetails = response.data
        })

  },
  created() {

    const API_KEY = 'api_key=0fd2eb610862a35172254f63379f6e14';
    const TOP_MOVIE_CAST = 'https://api.themoviedb.org/3/tv/' + this.$route.params.id + '/credits?'
    axios
        .get(TOP_MOVIE_CAST + API_KEY + '&language=en-US')
        .then((res) => {
          this.slides = res.data.cast
        })
  }


}
</script>

<style scoped>
.title {
  width: 100%;
  position: relative;
  white-space: normal;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  font-size: 0.9em;
  color: black;
}

.title2 {
  width: 100%;
  position: relative;
  white-space: normal;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  font-weight: bold;
  color: #000;
}


div.Overview {
  max-width: 750px
}

p.Overview {
  margin: 0;
  padding: 0;
}


div.MoviesDetails {
  position: absolute;
  max-width: max-content;
  left: 35%
}

img.ImgCast {
  width: 138px;
  padding: 0;
  margin: 0;
}

section.Overview {
  position: absolute;
  left: 35%;
  top: 175px;
  margin: 0;
  padding: 0
}

img.ImgAllof {
  left: 0;
  width: 250px;
}

span.genres {
  margin-right: 5px;
  color: rebeccapurple;
}

#carousel-wrapper {
  display: flex;
  position: relative;
  transition: transform 0.5s;
  height: 350px;
}
</style>
