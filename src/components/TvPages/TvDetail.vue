<template>
  <div>
    <div v-bind:style="{ 'background-image': 'url(' + IMG_URL + TvDetails.backdrop_path + ')' }" class="all">
      <div class="custonbg">
        <div class="container">
          <div class="single">
            <section class="d-flex">
              <div class="origin">
                <img :src="IMG_URL + TvDetails.poster_path">
              </div>
              <section class="section-link" :style="{backgroundColor}">
                <div class="title row">
                  <div class="d-flex">
                    <h2 style="color:white;"><a>{{ TvDetails.name }}</a>
                      <a>({{ TvDetails.first_air_date }})</a></h2>
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
    <div class=" container">
      <div class="blur container" ref="carousel" style="overflow-y: hidden; white-space: nowrap;" id="carousel-wrapper">
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
const API_KEY = 'api_key=0fd2eb610862a35172254f63379f6e14';
export default {
  name: "Tv",
  components: {},
  data() {
    return {
      slides: [],
      IMG_URL: 'https://image.tmdb.org/t/p/w500',
      currentSlide: 0,
      TvDetails: '',
      backgroundColor : ''

    }
  },
  async mounted() {

    const TOP_MOVIE_DETAILS = 'https://api.themoviedb.org/3/tv/' + this.$route.params.id + '?';
    axios
        .get(TOP_MOVIE_DETAILS + API_KEY + '&language=en-US')
        .then((response) => {
          this.TvDetails = response.data
        })
    window.addEventListener('resize', this.handleResize)

  },
  created() {


    const TOP_MOVIE_CAST = 'https://api.themoviedb.org/3/tv/' + this.$route.params.id + '/credits?'
    axios
        .get(TOP_MOVIE_CAST + API_KEY + '&language=en-US')
        .then((res) => {
          this.slides = res.data.cast
        })
  },
  methods: {
    handleResize() {
      if (window.innerWidth < 868) {
        this.backgroundColor = 'blue'
      } else {
        this.backgroundColor = ''
      }
    }

  }
}
</script>

<style scoped>
.title {
  width: 100%;
  white-space: normal;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  font-size: 0.9em;
  color: black;
}
a{
  font-weight: 700;
  font-size: 2rem;
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

img.ImgCast {
  width: 138px;
  padding: 0;
  margin: 0;
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
.genres {
  padding-left:0;
  top: 0;
  left: 0;
}
h3{
  color: white;
  margin: 0 0 8px 0;
}
.tagline{
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 1.1em;
  font-weight: 400;
  font-style: italic;
  opacity: 0.7;

}
.fact{
  display: flex;
  width: max-content;
}

p{
  color: white;
}
.all{
  border-bottom: 1px solid var(--primaryColor);
  --primaryColor: rgba(31.5, 31.5, 31.5, 1);
  background-position: left calc((50vw - 170px) - 340px) top;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  z-index: 1;
  border-bottom: 1px solid rgba(var(--lightGrey), 1);
  --lightGrey: rgb(227,227,227);
}
.custonbg{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-image: linear-gradient(to right, rgba(31.5, 31.5, 31.5, 1)
  calc((50vw - 170px) - 340px), rgba(31.5, 31.5, 31.5, 0.84) 30%, rgba(31.5, 31.5, 31.5, 0.84) 100%);
}

.genres::before {
  content: '';
  font-size: 1.1em;
  line-height: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 7px;
  display: inline-flex;
  align-content: center;
  align-items: center;
  z-index: -1;
}

.single {
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 40px;
  padding-right: 40px;
}

.origin {
  border-width: 0;
  min-width: 300px;
  width: 300px;
  height: 450px;
  overflow: hidden;
  border-radius: var(--imageBorderRadius);
  --imageBorderRadius: 8px;
}



h2 {
  font-weight: 600;
  font-size: 1.3em;
  margin-bottom: 8px;
  color: white;
}

.section-link {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  align-content: center;
  box-sizing: border-box;
  padding-left: 40px;
}


.title {
  margin-top: 0;
  padding-top: 0;
  width: 100%;
  margin-bottom: 24px;
}

img {
  display: block;
  width: 100%;
  min-width: 100%;
  height: 100%;
  min-height: 100%;
  border-width: 0px;
  outline: none;
}

</style>
