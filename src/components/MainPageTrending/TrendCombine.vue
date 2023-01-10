<template>
  <div>
    <div class="d-flex">
      <div class="row col-lg-6">
        <h3 style="width: max-content">Trending</h3>
        <div style="width: max-content">
          <button class="custom-button" style="color: black;" v-if="showtrend" @click="showtrend=!showtrend">Day
          </button>
          <button class="custom-button" style="color: black;" v-else @click="showtrend=!showtrend">Week</button>
        </div>
      </div>
    </div>
    <TrendingDay v-if="showtrend"/>
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
    TrendingDay

  },
  data() {
    return {
      showtrend: true
    }
  }
}
</script>

<style scoped>
h4 {
  margin-left: 15px;
  font-size: 1.17em;
}

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
