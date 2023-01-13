<template>
  <div>
    <button class="button" :class="{ active: selectedButton === 1 }" @click="selectButton(1)">Button 1</button>
    <button class="button" :class="{ active: selectedButton === 2 }" @click="selectButton(2)">Button 2</button>
    <button class="button" :class="{ active: selectedButton === 3 }" @click="selectButton(3)">Button 3</button>
    <button class="button" :class="{ active: selectedButton === 4 }" @click="selectButton(4)">Button 4</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedButton: null
    }
  },
  methods: {
    selectButton(buttonNumber) {
      this.selectedButton = buttonNumber;
    }
  }
}
</script>
<!--<script>-->
<!--import axios from "axios";-->


<!--export default {-->
<!--  name: "MovieDetail",-->

<!--  data() {-->
<!--    return {-->
<!--      MoviesDetails: '',-->
<!--      IMG_URL: 'https://image.tmdb.org/t/p/w500',-->
<!--      MoviesCast: [],-->
<!--      slides: [],-->
<!--      currentSlide: 0-->

<!--    }-->
<!--  },-->
<!--  async mounted() {-->
<!--    const API_KEY = 'api_key=0fd2eb610862a35172254f63379f6e14';-->
<!--    const TOP_MOVIE_DETAILS = 'https://api.themoviedb.org/3/movie/' + 238 + '?';-->
<!--    axios-->
<!--        .get(TOP_MOVIE_DETAILS + API_KEY + '&language=en-US')-->
<!--        .then((response) => {-->
<!--          this.MoviesDetails = response.data-->
<!--        })-->
<!--  },-->
<!--  created() {-->
<!--    const API_KEY = 'api_key=0fd2eb610862a35172254f63379f6e14';-->
<!--    const TOP_MOVIE_CAST = 'https://api.themoviedb.org/3/movie/' + this.$route.params.id + '/credits?'-->
<!--    axios-->
<!--        .get(TOP_MOVIE_CAST + API_KEY + '&language=en-US')-->
<!--        .then((res) => {-->
<!--          this.slides = res.data.cast-->
<!--        })-->
<!--  }-->

<!--}-->
<!--</script>-->

<style scoped>
.button:hover, .button:focus {
  background-color: #2980b9; /* dark blue */
  cursor: pointer;
}

.button:active {
  box-shadow: none;
  transform: translate(2px, 2px);
  background-color: #2980b9; /* dark blue */
}
.button {
  background-color: #3498db; /* blue */
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  padding: 8px 16px;
  font-family: Arial, sans-serif;
  font-size: 16px;
  color: #fff;
  text-decoration: none;
  border: none;
  border-radius: 4px;
}
/*.BackImg {*/
/*  border-bottom: 1px solid var(--primaryColor);*/
/*  background-position: left calc((50vw - 170px) - 340px) top;*/
/*  background-size: cover;*/
/*  background-repeat: no-repeat;*/
/*  width: 100%;*/
/*  position: relative;*/
/*  z-index: 1;*/
/*  border-bottom: 1px solid rgba(var(--lightGrey), 1);*/
/*  background: linear-gradient(to bottom right, #e3e3e3, #fff);*/

/*}*/

/*.posterWrapper {*/
/*  width: 100%;*/
/*}*/

/*.textColor {*/
/*  color: white;*/
/*  mix-blend-mode: difference;*/
/*}*/

/*.genres {*/
/*  padding-left: 5px;*/
/*  position: relative;*/
/*  top: 0;*/
/*  left: 0;*/
/*}*/

/*div.title {*/
/*  width: max-content;*/
/*  position: relative;*/
/*  padding-top: 55px;*/

/*}*/

/*.overwiewTop {*/
/*  padding-top: 20px;*/
/*  padding-bottom: 10px;*/
/*  width: max-content;*/
/*  margin: 0;*/
/*}*/

/*div.over {*/
/*  width: 900px;*/
/*  position: relative;*/


/*}*/

/*section.header {*/
/*  display: flex;*/
/*  box-sizing: border-box;*/
/*  padding-left: 40px;*/
/*  flex-direction: column;*/

/*}*/

/*.poster {*/
/*  border-width: 0;*/
/*  min-width: 300px;*/
/*  width: 100%;*/
/*  height: 450px;*/
/*  overflow: hidden;*/
/*  border-radius: var(--imageBorderRadius);*/
/*}*/

/*h2 {*/
/*  font-size: 2rem;*/
/*}*/

/*div.columnS {*/
/*  max-width: var(--maxPrimaryPageWidth);*/
/*  width: 100%;*/
/*  padding-top: 30px;*/
/*  padding-bottom: 30px;*/
/*  z-index: 0;*/
/*  box-sizing: border-box;*/
/*  padding-left: 40px;*/
/*  padding-right: 40px;*/
/*}*/

/*section.images {*/
/*  display: flex;*/
/*}*/

/*div.customBg {*/
/*  display: flex;*/
/*  justify-content: center;*/
/*  flex-wrap: wrap;*/
/*}*/
</style>