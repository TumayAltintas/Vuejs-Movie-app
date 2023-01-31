<template>
  <div v-bind:style="{ 'background-image': 'url(' + this.API_IMG_URL + MoviesDetails.backdrop_path + ')' }" class="all">
    <div class="CustomBg">
      <div class="container">
        <div class="single">
          <section class="d-flex">
            <div class="origin">
              <img :src="this.API_IMG_URL + MoviesDetails.poster_path" alt="">
            </div>
            <section class="section-link" :style="{backgroundColor}">
              <div class="title row">
                <div class="d-flex align-items-center">
                  <h2><a>{{ MoviesDetails.title }}</a></h2>
                  <h2><a class="AirDate"> ({{ AirDate }})</a></h2>
                </div>
                <div class="d-flex">
                  <div v-for="(genres, index) in MoviesDetails.genres" :key="index">
                    <span style="color:white;" class="genres">{{ genres.name }}</span>
                  </div>
                </div>
              </div>
              <div class="d-flex gap-3 align-items-center">
                <div class="triangle" data-bs-toggle="modal" data-bs-target="#exampleModal">
                </div>
                <h3>Play Trailer</h3>
              </div>
              <div>
                <h3 class="tagline">
                  {{ MoviesDetails.tagline }}
                </h3>
              </div>
              <div>
                <h2>Overview</h2>
                <div>
                  <p>{{ MoviesDetails.overview }}</p>
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
export default {
  name: "MovieDetail",
  props: ['MoviesDetails', 'MoviesCast', 'AirDate'],
  data(){
    return{
      backgroundColor: ''
    }
  },
  methods: {
    handleResize() {
      if (window.innerWidth < 968) {
        this.backgroundColor = 'blue'
      } else {
        this.backgroundColor = ''
      }
    }

  }
}
</script>

<style scoped>
.AirDate {
  font-weight: 200;
  white-space: nowrap;
  text-decoration: none;
  color: white;
}

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

.triangle {
  width: 10px;
  height: 10px;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 20px solid red;
  transform: rotate(90deg);
}

a {
  font-weight: 700;
  font-size: 2rem;
}

span.genres {
  margin-right: 5px;
  color: rebeccapurple;
}

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
  margin-top: 20px;
  margin-bottom: 20px;
  font-size: 1.1em;
  font-weight: 400;
  font-style: italic;
  opacity: 0.7;

}

p {
  color: white;
}

.all {
  border-bottom: 1px solid var(--primaryColor);
  background-position: left calc((40vw - 170px) - 340px) top;
  background-size: cover;
  background-repeat: no-repeat;
}

.CustomBg {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  background-image: linear-gradient(to right,
  rgba(31.5, 31.5, 52.5, 1) calc((50vw - 170px) - 340px),
  rgba(31.5, 31.5, 52.5, 0.84) 30%,
  rgba(31.5, 31.5, 52.5, 0.84) 100%);
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
  margin: 0;
  padding: 0;
  color: white;
}

.section-link {
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
  border-width: 0;
  outline: none;
}

</style>

