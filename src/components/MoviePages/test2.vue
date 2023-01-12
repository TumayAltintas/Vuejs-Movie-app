<template>
  <Top-Header/>
  <div>
    <div v-bind:style="{ 'background-image': 'url(' + IMG_URL + MoviesDetails.backdrop_path + ')' }" class="BackImg">
      <div class="container customBg">
        <div class="columnS">
          <section class="images inner">
            <div class="poster">
              <img class="poster" :src="IMG_URL + MoviesDetails.poster_path">
            </div>
            <div class="posterWrapper">
              <section class="header poster">
                <div class="title">
                  <h2 class="textColor" :style="{  color: textColor  }">{{ MoviesDetails.title }}
                    ({{ MoviesDetails.release_date }})</h2>
                </div>
                <div class="d-flex">
                  <div class="genres" v-for="genre in MoviesDetails.genres">
                    <span class="textColor" :style="{ color: textColor  }" style="margin-left: 1.5rem">{{
                        genre.name
                      }}</span>
                  </div>
                </div>
                <div class="overwiewTop">
                  <h2 class="textColor" :style="{  color: textColor  }">Overview</h2>
                </div>
                <div class="over">
                  <h2 class="textColor" :style="{  color: textColor }" style="font-size: 1rem;">
                    {{ MoviesDetails.overview }} </h2>
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
  name: "MovieDetail",

  data() {
    return {
      MoviesDetails: '',
      IMG_URL: 'https://image.tmdb.org/t/p/w500',
      MoviesCast: [],
      slides: [],
      currentSlide: 0

    }
  },
  async mounted() {
    const API_KEY = 'api_key=0fd2eb610862a35172254f63379f6e14';
    const TOP_MOVIE_DETAILS = 'https://api.themoviedb.org/3/movie/' + 238 + '?';
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
  }

}
</script>

<style scoped>
.BackImg {
  border-bottom: 1px solid var(--primaryColor);
  background-position: left calc((50vw - 170px) - 340px) top;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  position: relative;
  z-index: 1;
  border-bottom: 1px solid rgba(var(--lightGrey), 1);
  background: linear-gradient(to bottom right, #e3e3e3, #fff);

}

.posterWrapper {
  width: 100%;
}

.textColor {
  color: white;
  mix-blend-mode: difference;
}

.genres {
  padding-left: 5px;
  position: relative;
  top: 0;
  left: 0;
}

div.title {
  width: max-content;
  position: relative;
  padding-top: 55px;

}

.overwiewTop {
  padding-top: 20px;
  padding-bottom: 10px;
  width: max-content;
  margin: 0;
}

div.over {
  width: 900px;
  position: relative;


}

section.header {
  display: flex;
  box-sizing: border-box;
  padding-left: 40px;
  flex-direction: column;

}

.poster {
  border-width: 0;
  min-width: 300px;
  width: 100%;
  height: 450px;
  overflow: hidden;
  border-radius: var(--imageBorderRadius);
}

h2 {
  font-size: 2rem;
}

div.columnS {
  max-width: var(--maxPrimaryPageWidth);
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  z-index: 0;
  box-sizing: border-box;
  padding-left: 40px;
  padding-right: 40px;
}

section.images {
  display: flex;
}

div.customBg {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
</style>