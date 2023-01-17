<template>
  <div v-bind:style="{ 'background-image': 'url(' + IMG_URL + TvDetails.backdrop_path + ')' }" class=" all">
    <div class="backleft custonbg">
      <div class="container ">
        <div class="single">
          <section class="d-flex">
            <div class="origin">
              <div class="poster">
                <img :src="IMG_URL + TvDetails.poster_path">
              </div>
            </div>
            <div class="information d-flex">
              <section class="section-link">
                <div class="title">
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
                <div class="actions">

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
            </div>
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

    }
  },
  async mounted() {
    const API_KEY = 'api_key=0fd2eb610862a35172254f63379f6e14';
    const TOP_MOVIE_DETAILS = 'https://api.themoviedb.org/3/tv/' + 100088 + '?';
    axios
        .get(TOP_MOVIE_DETAILS + API_KEY + '&language=en-US')
        .then((response) => {
          this.TvDetails = response.data
        })

  },
  created() {

    const API_KEY = 'api_key=0fd2eb610862a35172254f63379f6e14';
    const TOP_MOVIE_CAST = 'https://api.themoviedb.org/3/tv/' + 100088 + '/credits?'
    axios
        .get(TOP_MOVIE_CAST + API_KEY + '&language=en-US')
        .then((res) => {
          this.slides = res.data.cast
        })
  }


}
</script>
<style scoped>
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
.actions{
  width: 100%;
  height: 100px;
  background-color: white;
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
  position: relative;
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

.poster {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  display: block;
  min-width: 300px;
  width: 300px;
  height: 450px;
  position: relative;
  top: 0;
  left: 0;
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


