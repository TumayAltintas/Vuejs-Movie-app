<template>
  <div v-bind:style="{ 'background-image': 'url(' + IMG_URL + TvDetails.backdrop_path + ')' }" class="all">
    <div class="custonbg">
      <div class="container">
        <div class="single">
          <section class="d-flex">
            <div class="origin">
              <img :src="IMG_URL + TvDetails.poster_path">
            </div>
            <section class="section-link" :style="{backgroundColor }">
              <div class="title row">
                <div class="d-flex">
                  <h2 style="color:white;"><a>{{ TvDetails.name }}</a>
                    <span>({{ TvDetails.first_air_date }})</span></h2>
                </div>
                <div class="d-flex">
                  <div class="fact" v-for="(genres, index) in TvDetails.genres" :key="index">
                    <span style="color:white;" class="genres" v-if="!$last">{{ genres.name }},</span>
                  </div>
                </div>
              </div>
              <h3 class="tagline">
                {{ TvDetails.tagline }}
              </h3>
              <div class="info">
                <h2>Overview</h2>
                <div>
                  <p>{{ TvDetails.overview }}</p>
                </div>
              </div>
            </section>
          </section>
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
      TvDetails: [],
      backgroundColor : ''

    }
  },
  async mounted() {

    const TOP_MOVIE_DETAILS = 'https://api.themoviedb.org/3/tv/' + 100088 + '?';
    axios
        .get(TOP_MOVIE_DETAILS + API_KEY + '&language=en-US')
        .then((response) => {
          this.TvDetails = response.data
        })
    window.addEventListener('resize', this.handleResize)

  },
  created() {

    const TOP_MOVIE_CAST = 'https://api.themoviedb.org/3/tv/' + 100088 + '/credits?'
    axios
        .get(TOP_MOVIE_CAST + this.API_KEY + '&language=en-US')
        .then((res) => {
          this.slides = res.data.cast
        })
  },
  methods: {
    handleResize() {
      if (window.innerWidth < 768) {
        this.backgroundColor = 'blue'
      } else {
        this.backgroundColor = ''
      }
    }
  }


}
</script>
<style scoped>
.genres {
  padding-left: 0;
  top: 0;
  left: 0;
}

h3 {
  color: white;
  margin: 0 0 8px 0;
}

.tagline {
  margin-bottom: 20px;
  font-size: 1.1em;
  font-weight: 400;
  font-style: italic;
  opacity: 0.7;

}

.fact {
  display: flex;
  width: max-content;
}

p {
  color: white;
}

.all {
  border-bottom: 1px solid var(--primaryColor);
  background-position: left calc((50vw - 170px) - 340px) top;
  background-size: cover;
  background-repeat: no-repeat;
  border-bottom: 1px solid rgba(var(--lightGrey), 1);
  --lightGrey: rgb(227, 227, 227);
  --primaryColor: rgba(31.5, 31.5, 31.5, 1);
}

.custonbg {
  background-image: linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1) calc((50vw - 170px) - 340px),
  rgba(31.5, 31.5, 31.5, 0.84) 30%, rgba(31.5, 31.5, 31.5, 0.84) 100%);
}

.single {
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 40px;

}

.origin {
  min-width: 300px;
}

h2 {
  font-weight: 600;
  font-size: 1.3em;
  margin-bottom: 8px;
  color: white;
}

.section-link {

  flex-wrap: wrap;
  padding-left: 40px;

}

img {
  width: 100%;
  min-height: 100%;
}
</style>


