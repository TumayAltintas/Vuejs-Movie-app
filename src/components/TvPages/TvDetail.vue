<template>
  <div v-bind:style="{ 'background-image': 'url(' + this.API_IMG_URL + TvDetails.backdrop_path + ')' }" class="all">
    <div class="CustomBg">
      <div class="container">
        <div class="single">
          <section class="d-flex">
            <div class="origin">
              <img :src="this.API_IMG_URL + TvDetails.poster_path" alt="">
            </div>
            <section class="section-link" :style="{backgroundColor}">
              <div class="title row">
                <div class="d-flex align-items-center">
                  <h2 class="hname">
                    <a>{{ TvDetails.name }}</a>
                  </h2>
                  <h2><a class="AirDate">({{ AirDate }})</a></h2>
                </div>
                <div class="d-flex">
                  <div class="fact" v-for="(genres, index) in TvDetails.genres" :key="index">
                    <span class="genres">{{ genres.name }},</span>
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

export default {
  name: "Tv",
  props: ['TvDetails', 'AirDate'],
  data() {
    return {
      backgroundColor: 'rgba(31.5, 31.5, 52.5, 0.2)',
    }
  },
  methods: {
    handleResize() {
      if (window.innerWidth < 868) {
        this.backgroundColor = 'grey'
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

.hname {
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
  color: white;
}

a {
  font-weight: 700;
  font-size: 2rem;
}

.AirDate {
  font-weight: 200;
  color: white;
}

span.genres {
  margin-right: 5px;
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

.fact {
  display: flex;
  width: max-content;
}

p {
  color: white;
}

.all {
  border-bottom: 1px solid var(--primaryColor);
  --primaryColor: rgba(31.5, 31.5, 31.5, 1);
  background-position: left calc((50vw - 170px) - 340px) top;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  z-index: 1;
  border-bottom: 1px solid rgba(var(--lightGrey), 1);
  --lightGrey: rgb(227, 227, 227);
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
  border-width: 0;
  outline: none;
}

</style>
