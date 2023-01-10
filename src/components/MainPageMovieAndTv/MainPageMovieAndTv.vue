<template>

  <div class="container">
    <div style="bottom: 25px;width: 100%; height: 300px; background-color: rebeccapurple">
    </div>
    <div class="blur">

    </div>
    <div>
      <!--      <label class="switch" :style="{ backgroundColor: buttonColor }">-->
      <!--        <input type="checkbox" @click="toggleDivs">-->
      <!--        <span  class="slider round">{{ buttonText }}</span>-->
      <!--      </label>-->
      <div>
        <div style="margin-top: 25px">
          <button class="custom-button" style="color: black;" v-if="show" @click="show=!show">Tv</button>
          <button class="custom-button" style="color: black;" v-else="" @click="show=!show">Movie</button>
        </div>
        <TvMainPage v-if="show"/>
        <MovieMainPage v-else=""/>
      </div>
      <div>
        <TrendCombine/>
      </div>
    </div>
  </div>
</template>

<script>


import TrendCombine from "../MainPageTrending/TrendCombine.vue";
import MovieMainPage from "../MoviePages/MovieMainPage.vue";
import TvMainPage from "../TvPages/TvMainPage.vue";

export default {
  name: "MainPageMovieAndTv",
  components: {
    MovieMainPage,
    TrendCombine,
    TvMainPage


  },
  data() {
    return {
      buttonText: 'Tv',
      buttonColor: '#ccc',
      show: true,

    }
  },
  methods: {
    toggleDivs() {
      this.showDiv1 = !this.showDiv1;
      this.showDiv2 = !this.showDiv2;
      if (this.buttonText === 'Movie') {
        this.buttonText = 'Tv';
        this.buttonColor = '#4caf50';
      } else {
        this.buttonText = 'Movie';
        this.buttonColor = '#ccc';
      }

    }
  }
}
</script>

<style scoped>
.custom-button {
  display: inline-block;
  font-weight: 400;
  color: #fff;
  text-align: center;
  vertical-align: middle;
  user-select: none;
  background-color: #007bff;
  border: 1px solid #007bff;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  cursor: pointer;
}

.custom-button:hover {
  color: #fff;
  background-color: #0069d9;
  border-color: #0062cc;
}

.custom-button:active {
  color: #fff;
  background-color: #0062cc;
  border-color: #005cbf;
}

.custom-button:focus {
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.5);
}

</style>


<!--.switch {-->
<!--position: relative;-->
<!--display: inline-block;-->
<!--width: 60px;-->
<!--height: 34px;-->
<!--border-radius: 20px;-->
<!--overflow: hidden;-->
<!--box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);-->
<!--transition: all 0.3s ease;-->
<!--}-->

<!--.slider {-->
<!--position: absolute;-->
<!--cursor: pointer;-->
<!--top: 0;-->
<!--left: 0;-->
<!--right: 0;-->
<!--bottom: 0;-->
<!--background-color: #fff;-->
<!-- -webkit-transition: .4s;-->
<!--transition: .4s;-->
<!--}-->

<!--.slider:before {-->
<!--position: absolute;-->
<!--content: "";-->
<!--height: 24px;-->
<!--width: 24px;-->
<!--left: 4px;-->
<!--bottom: 4px;-->
<!--background-color: #fff;-->
<!-- -webkit-transition: .4s;-->
<!--transition: .4s;-->
<!--border-radius: 50%;-->
<!--box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);-->
<!--}-->

<!--input:checked + .slider {-->
<!--background-color: #4caf50;-->
<!--}-->

<!--input:focus + .slider {-->
<!--box-shadow: 0 0 1px #4caf50;-->
<!--}-->

<!--input:checked + .slider:before {-->
<!-- -webkit-transform: translateX(30px);-->
<!-- -ms-transform: translateX(30px);-->
<!--transform: translateX(30px);-->
<!--}-->