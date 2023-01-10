<template>
  <div class="container">
    <div style="width: max-content;height: 30px;">
    </div>
    <section :tv="TvDetails" class="container d-flex">
      <div>
        <img class="ImgAllof" :src="IMG_URL + TvDetails.poster_path">
      </div>
      <div class="TvDetails">
        <h3>{{ TvDetails.name }} (First Episode {{ TvDetails.first_air_date }})</h3>
      </div>
      <section class="row" style="position: absolute; left: 37%;margin-top: 45px">
        <div v-for="genre in TvDetails.genres">
          <span>{{ genre.name }}</span>
        </div>
      </section>
      <section class="Overview">
        <div>
          <h3 style="color: darkblue">Overview</h3>
        </div>
        <div class="overview">
          <p class="overview">
            {{ TvDetails.overview }}
          </p>
        </div>
      </section>
    </section>
    <div class="row">
      <div ref="carousel" style="overflow-y: hidden; white-space: nowrap;" id="carousel-wrapper">
        <div v-for="(cast,index) in slides" :key="index" class="col-lg-2 col-md-3 col-sm-4 m-2"
             style="width: 150px;height: 250px;display: inline-block; flex: 0 0 auto;">
          <div>
            <img v-if="cast.profile_path == null" class="ImgCast" style="height: 188px"
                 src="../photo/empty-profile-picture-png-2-2.png">
            <img v-else class="ImgCast" :src="IMG_URL + cast.profile_path">
            <a class="justify-content-start d-flex CastName title">{{ cast.name }}</a>
            <p class="CastCharacter title">{{ cast.character }}</p>
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
li {
  top: 45%;
  list-style-type: none;
  padding-right: 15px;
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
  color: blue;
}

ol {
  margin: 0;
  padding: 0
}

div.overview {
  max-width: 750px;

}

div.TvDetails {
  position: absolute;
  max-width: max-content;
  left: 35%
}

p.overview {
  margin: 0;
  padding: 0;
}

a.CastName {
  margin: 0;
  padding: 0;
  max-width: 100px;
  color: #000
}

p.CastCharacter {
  margin: 0;
  padding: 0;
  max-width: 100px;
  color: #000
}

img.ImgCast {
  width: 125px;
}

section.Overview {
  position: absolute;
  left: 35%;
  top: 170px;
  padding: 0;
  margin: 15px 0 0;
}

img.ImgAllof {
  left: 0;
  width: 250px;
}


</style>
