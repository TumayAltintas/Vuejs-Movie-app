<template>
  <div>
    <Top-Header style="margin-bottom: 50px"/>
    <div>
      <ProfilData/>
    </div>
  </div>
</template>

<script>
import ProfilData from "../../components/Person/ProfilData.vue";

export default {
  name: "Person",
  components: {
    ProfilData
  }
}
</script>

<style scoped>

</style>