<template>
  <div class="row mb-5">
    <div class="Trending blur scroll" style=" white-space: nowrap;" id="carousel-wrapper">
      <div v-for="(Day,index) in DayData" :key="index" class="list">
        <div class="average">
          <span>
            {{ Day.vote_average }}
          </span>
        </div>
        <img class="opacity-100 shadow-lg rounded rounded-150" :src="this.API_IMG_URL + Day.poster_path" alt="">
        <div v-if="Day.media_type='movie'" class="title">
          <router-link class="LinkItem" :to="'/MovieDetail/' + Day.id + '/' + Day.title">
            <p>{{ Day.title }}</p>
          </router-link>
        </div>
        <div v-if="Day.media_type='tv'" class="title2">
          <router-link class="LinkItem" :to="'/TvDetail/'+ Day.id + '/' + Day.name">
            <p>{{ Day.name }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TrendingDay',

  data() {
    return {
      DayData: [],
    }
  },
  mounted() {
    axios
        .get(this.API + 'trending/all/day?' + this.API_KEY)
        .then((response) => {
          this.DayData = response.data.results
        })
  },
}
</script>

<style scoped>
.Trending {
  background-image: url(/src/components/photo/1.png);
  background-position: 50% 200px;
  background-position-x: 50%;
  background-position-y: 120px;
  background-repeat: no-repeat;
  background-repeat-x: no-repeat;

}

.list {
  padding: 0;
  margin-right: 25px;
  width: 165px;
  height: 350px
}

span {
  color: red
}

#carousel-wrapper {
  display: flex;
  position: relative;
  height: 380px;
}

div.average {
  position: relative;
  top: 0;
  width: max-content;
}

div.title {
  width: 100%;
  height: 0;
  white-space: normal;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
  text-decoration: none;

}

div.title2 {
  width: 100%;
  height: 0;
  white-space: normal;
  display: flex;
  align-content: flex-start;
  flex-wrap: wrap;
}

.LinkItem {
  text-decoration: none;
}

p {
  color: white;
  font-weight: 700;
}

img {
  width: 165px;
}
</style>


