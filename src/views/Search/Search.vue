<template>
  <div>
    <Top-Header/>
<!--    <div>-->
<!--      <input v-model="searchText" placeholder="Search for a movie, tv show, person......">-->
<!--      <button @click="goToSearchPage">Search</button>-->
<!--    </div>-->
    <SearchMain/>
  </div>
</template>

<script>
import SearchMain from "../../components/Search/SearchMain.vue";

export default {
  name: "search",
  components: {SearchMain},
  data() {
    return {
      searchText: ""
    }
  },
  methods: {
    goToSearchPage() {
      this.$router.push({name: "search", params: {query: this.searchText}});
      window.location.reload();
    },

  }
}
</script>

<style scoped>

</style>