<template>
  <div class="Back container">
    <Top-Header style="position: relative"/>
    <div style="width: max-content;height: 30px;">
    </div>
    <section :movie="MoviesDetails" class="container d-flex">
      <div>
        <img class="ImgAllof" :src="IMG_URL + MoviesDetails.poster_path">
      </div>
      <div class="MoviesDetails">
        <h3>{{ MoviesDetails.title }} ({{ MoviesDetails.release_date }})</h3>
      </div>
      <section class="row genres">
        <div v-for="genre in MoviesDetails.genres" class="DivGenres">
        <span class="genres">
          {{ genre.name }}
        </span>
        </div>
      </section>
      <section class="Overview">
        <div>
          <h3 style="color: darkblue">Overview</h3>
        </div>
        <div class="Overview">
          <p class="Overview">
            {{ MoviesDetails.overview }}
          </p>
        </div>
      </section>
    </section>
    <div class="row" >
      <div ref="carousel" style="overflow-y: hidden; white-space: nowrap;" id="carousel-wrapper"
           :style="{ width: (slides.length * 100) + '%', transform: 'translateX(' + (-currentSlide * (100 / slides.length)) + '%)' }">
        <div v-for="(cast,index) in slides" :key="index" class="col-lg-2 col-md-3 col-sm-4 m-2"
             style="width: 150px;height: 250px;display: inline-block; flex: 0 0 auto;">
          <div>
            <img class="ImgCast" :src="IMG_URL + cast.profile_path">
            <a class="justify-content-center d-flex CastName">{{ cast.name }}</a>
            <p class="CastCharacter">{{ cast.character }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import axios from "axios";


export default {
  name: "MovieDetail",

  data() {
    return {
      MoviesDetails: '',
      IMG_URL: 'https://image.tmdb.org/t/p/w500',
      MoviesCast: [],
      slides: [],
      currentSlide: 0,

    }
  },
  async mounted() {
    const API_KEY = 'api_key=0fd2eb610862a35172254f63379f6e14';
    const TOP_MOVIE_DETAILS = 'https://api.themoviedb.org/3/movie/' + this.$route.params.id + '?';
    axios
      .get(TOP_MOVIE_DETAILS + API_KEY + '&language=en-US')
      .then((response) => {
        this.MoviesDetails = response.data
      })

  },
  created() {
    const API_KEY = 'api_key=0fd2eb610862a35172254f63379f6e14';
    const TOP_MOVIE_CAST = 'https://api.themoviedb.org/3/movie/' + this.$route.params.id + '/credits?'
    axios
      .get(TOP_MOVIE_CAST + API_KEY + '&language=en-US')
      .then((res) => {
        console.log(res.data.cast)
        this.slides = res.data.cast
      })
  },


}
</script>

<style scoped>
ol {
  margin: 0;
  padding: 0;
}

li {
  top: 45%;
  list-style-type: none;
  padding-left: 15px;
}

div.Overview {
  max-width: 750px
}

p.Overview {
  margin: 0;
  padding: 0;
}

a.CastName {
  margin: 0;
  padding: 0;
  left: 50%;
  max-width: max-content;
  color: #000
}

section.genres {
  left: 35%;
}

div.MoviesDetails {
  position: absolute;
  max-width: max-content;
  left: 35%
}

p.CastCharacter {
  margin: 0;
  padding: 0;
  left: 50%;
  max-width: 100px
}

img.ImgCast {
  width: 125px;
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

div.DivGenres {
  position: relative;
  left: 8%;
  top: 50px;
  width: max-content;
}

div.Cast {
  position: absolute;
  top: 500px;
}

span.genres {
  margin-right: 5px;
  color: rebeccapurple;
}
#carousel-wrapper {
  display: flex;
  position: relative;
  transition: transform 0.5s;
  height: 320px;
}
#carousel-wrapper > * {
  width: calc(100% / slides.length);
}
</style>
