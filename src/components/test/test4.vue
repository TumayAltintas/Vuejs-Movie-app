<template>
  <Top-Header/>
  <div class="container">
    <button @click="a()">asd</button>
    <button @click="b()">asd</button>
    <div style="width: 250px;height: 250px;background-color: black;margin: 0;padding: 0" class="move-element" :class="{'move-right': moveRight, 'move-up': moveUp}"></div>
  </div>
</template>

<script>
export default {
  name: "test4",
  data() {
    return {
      moveRight: false,
      moveUp: false
    }
  },
  methods: {
    a() {
      this.moveRight = true;
    },
    b() {
      this.moveUp = true;
    }
  }
}
</script>

<style scoped>
.move-element {
  transition: transform 1s;
}

.move-right {
  transform: translateX(100px);
}

.move-up {
  transform: translateY(-100px);
}

</style>