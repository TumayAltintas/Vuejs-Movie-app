<template>
  <div class="container">
    <section :movie="MoviesDetails" class="container d-flex">
      <div>
        <img class="ImgAllof" :src="IMG_URL + MoviesDetails.poster_path">
      </div>
      <div class="MoviesDetails">
        <h3>{{ MoviesDetails.title }} ({{ MoviesDetails.release_date }})</h3>
      </div>
      <section class="d-flex" style="position: absolute; left: 37%;margin-top: 45px;">
        <div v-for="genre in MoviesDetails.genres">
          <span style="margin-left: 1.5rem">{{ genre.name }}</span>
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
    <div class="row">
      <div class="blur" ref="carousel" style="overflow-y: hidden; white-space: nowrap;" id="carousel-wrapper">
        <div v-for="(cast,index) in slides" :key="index" class="opacity-100 shadow-lg rounded-3 col-lg-2 col-md-3 col-sm-4 m-2"
             style="width: 138px;height: 275px;display: inline-block; flex: 0 0 auto;">
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
          this.slides = res.data.cast
        })

  },


}
</script>

<style scoped>

.blur {
  transition: linear 0.3s;
  opacity: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: flex-start;
  flex-direction: column;
  min-height: 100%;
  height: auto;
  -ms-overflow-style: -ms-autohiding-scrollbar;
  background-color: rgba(var(--tmdbDarkBlue), 1);
  color: #000;
  font-family: 'Source Sans Pro', Arial, sans-serif;
  font-size: 1em;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.blur::after {
  content: '';
  width: 60px;
  height: 100%;
  position: absolute;
  top: 0;
  right: 0;
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0) 0%, #fff 100%);
  will-change: opacity;
  pointer-events: none;
}
ol {
  margin: 0;
  padding: 0;
}

li {
  top: 45%;
  list-style-type: none;
  padding-left: 15px;
}

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

a.CastName {
  margin: 0;
  padding: 0;
  left: 50%;
  max-width: max-content;
  color: #000
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

div.DivGenres {
  position: relative;
  left: 8%;
  top: 50px;
  width: max-content;
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
</style>
