<template>
  <div class="row mb-5">
    <div class="Trending blur scroll" style=" white-space: nowrap;" id="carousel-wrapper">
      <div v-for="(week,index) in WeekData" :key="index" class="list">
        <div class="average">
          <span style="color:red;">
            {{ week.vote_average }}
          </span>
        </div>
        <img class="opacity-100 shadow-lg rounded rounded-150" :src="this.API_IMG_URL + week.poster_path" alt="">
        <div v-if="week.media_type='movie'" class="title">
          <router-link class="Link" :to="'/MovieDetail/' + week.id + '/' + week.title">
            <p>{{ week.title }}</p>
          </router-link>
        </div>
        <div v-if="week.media_type='tv'" class="title2">
          <router-link class="Link" :to="'/TvDetail/'+ week.id + '/' + week.name">
            <p>{{ week.name }}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'TrendingWeek',
  components: {},
  data() {
    return {
      WeekData: [],
    }
  },
  mounted() {
    axios
        .get(this.API + 'trending/all/week?' + this.API_KEY)
        .then((response) => {
          this.WeekData = response.data.results
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

#carousel-wrapper {
  display: flex;
  position: relative;
  transition: transform 0.5s;
  height: 380px;
}

div.average {
  position: relative;
  top: 0;
  width: max-content;
}

span {
  color: red;
}

.list {
  padding: 0;
  margin-right: 25px;
  width: 165px;
  height: 350px
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

.Link {
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

