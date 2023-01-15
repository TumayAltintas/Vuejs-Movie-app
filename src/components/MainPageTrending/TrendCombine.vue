<template>
  <div>
    <div class="d-flex">
      <div class="row col-lg-6">
        <h3 class="trend" style="width: max-content">Trending</h3>
        <div class="select d-flex">
          <div :class="{ SelectedFirst: SelectedFirst}"><h3 class="text" @click="toggleActive"><a>Today</a></h3></div>
          <span></span>
          <div :class="{selected: selected}"><h3 class="text" @click="secondSelect"><a>This Week</a></h3></div>
        </div>
      </div>
    </div>
    <TrendingDay v-if="ShowTrend"/>
    <TrendingWeek v-else/>
  </div>
</template>

<script>

import TrendingDay from "./TrendingDay.vue";
import TrendingWeek from "./TrendingWeek.vue";

export default {
  name: "TrendCombine",
  components: {
    TrendingWeek,
    TrendingDay,


  },
  data() {
    return {
      ShowTrend: true,
      selected: false,
      SelectedFirst: true,
    }
  },
  methods: {
    toggleActive() {
      this.SelectedFirst = true
      this.selected = false
      this.ShowTrend = true

    },
    secondSelect() {
      this.SelectedFirst = false
      this.selected = true
      this.ShowTrend = false
    },
  },
}
</script>

<style scoped>
.trend {
  margin-right: 15px;
  font-size: 1.5em;
  padding: 0;
}

.SelectedFirst {
  margin: 0;
  padding: 0;
  width: 87px;
  height: 100%;
  position: relative;
  transition: 1s;
  background-color: rgb(10, 14, 51);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;

}

.selected {
  float: right;
  width: 107px;
  height: 100%;
  position: relative;
  transition: 1s;
  background-color: rgb(10, 14, 51);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
}

.text {
  display: inline-flex;
  align-content: center;
  align-items: center;
  justify-content: center;
  font-size: 1em;
  padding: 4px 20px;
  margin-bottom: 0;
  white-space: nowrap;
  color: green;
  cursor: pointer;

}

.select {
  border: black solid 1px;
  border-radius: 50px;
  width: 192px;
  height: 30px;
  margin: 0;
  padding: 0;
}
</style>
