<template>
  <Top-Header/>
  <div class="container">
    <div class="select d-flex">
      <div :class="{ selected1: isActive}"><h3 class="text" @click="toggleActive"><a>Movie</a></h3></div>
      <span></span>
      <div :class="{selected: isAnimated}"><h3 class="text" @click="secondSelect"><a>Tv</a></h3></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "test4",
  data() {
    return {
      isAnimated: false,
      isActive: true,

    }
  },
  computed: {
    animationClass() {
      return this.isAnimated ? 'animated' : ''
    }
  },
  methods: {
    toggleActive() {
      this.isActive = true
      this.isAnimated = false

    },
    secondSelect() {
      this.isActive = false
      this.isAnimated = true
    },
  },
}
</script>

<style scoped>

.selected1 {
  float: left;
  width: 87px;
  height: 100%;
  position: relative;
  background-color: rgb(10, 14, 51);
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;

}

.selected {
  float: right;
  width: 63px;
  height: 100%;
  position: relative;
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
}

.select {
  border: black solid 1px;
  border-radius: 50px;
  width: 150px;
  height: 30px;
}


</style>