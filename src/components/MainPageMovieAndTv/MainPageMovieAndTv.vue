<template>
  <div class="container">
    <SearchBack/>
    <div>
      <div>
        <div style="margin-top: 50px">
          <TrendCombine/>
        </div>
        <div style="margin-top: 25px">
          <button class="custom-button" style="color: black;" v-if="show" @click="show=!show">Tv</button>
          <button class="custom-button" style="color: black;" v-else @click="show=!show">Movie</button>
        </div>
        <TvMainPage v-if="show"/>
        <MovieMainPage v-else/>
      </div>
    </div>
  </div>
</template>

<script>


import TrendCombine from "../MainPageTrending/TrendCombine.vue";
import MovieMainPage from "../MoviePages/MovieMainPage.vue";
import TvMainPage from "../TvPages/TvMainPage.vue";
import SearchBack from "../Search/SearchBack.vue";

export default {
  name: "MainPageMovieAndTv",
  components: {
    MovieMainPage,
    TrendCombine,
    TvMainPage,
    SearchBack


  },
  data() {
    return {
      buttonText: 'Tv',
      buttonColor: '#ccc',
      show: true,
      isChecked: false

    }
  },
}
</script>

<style scoped>
.custom-button {
  display: inline-block;
  color: #fff;
  text-align: center;

  background-color: #007bff;
  padding: 0.375rem 0.75rem;
  border: none;
  font-size: 1rem;
  font-weight: 600;
  line-height: 1.5;
  border-radius: 30rem;
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
---------------ikinci swtich--------
<!--.switch {-->
<!--position: relative;-->
<!--display: inline-block;-->
<!--width: 60px;-->
<!--height: 34px;-->
<!--}-->

<!--.switch input {-->
<!--opacity: 0;-->
<!--width: 0;-->
<!--height: 0;-->
<!--}-->

<!--.slider {-->
<!--position: absolute;-->
<!--cursor: pointer;-->
<!--top: 0;-->
<!--left: 0;-->
<!--right: 0;-->
<!--bottom: 0;-->
<!--background-color: #ccc;-->
<!-- -webkit-transition: .4s;-->
<!--transition: .4s;-->
<!--}-->

<!--.slider:before {-->
<!--position: absolute;-->
<!--content: "";-->
<!--height: 26px;-->
<!--width: 26px;-->
<!--left: 4px;-->
<!--bottom: 4px;-->
<!--background-color: white;-->
<!-- -webkit-transition: .4s;-->
<!--transition: .4s;-->
<!--}-->

<!--input:checked + .slider {-->
<!--background-color: #2196F3;-->
<!--}-->

<!--input:focus + .slider {-->
<!--box-shadow: 0 0 1px #2196F3;-->
<!--}-->

<!--input:checked + .slider:before {-->
<!-- -webkit-transform: translateX(26px);-->
<!-- -ms-transform: translateX(26px);-->
<!--transform: translateX(26px);-->
<!--}-->