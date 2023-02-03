<template>
  <div>
    <router-view></router-view>
  </div>
  <Footer class="justify-content-center d-flex m-4"/>
</template>

<script>

import Footer from "../components/HeaderAndOthers/Footer.vue";
export default {
  components: {Footer}
}
</script>

<style scoped>

</style>