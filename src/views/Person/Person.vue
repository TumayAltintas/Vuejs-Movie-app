<template>
  <div>
    <Top-Header style="margin-bottom: 50px"/>
   <div>
     <Popular/>
   </div>
  </div>
</template>

<script>
import Popular from "../../components/Person/Popular.vue";
export default {
  name: "Person",
  components:{
    Popular
  }

}
</script>

<style scoped>

</style>