<template>
  <div>
    <SearchData/>
  </div>
</template>

<script>
import SearchData from "../../components/Search/SearchData.vue";

export default {
  name: "search",
  components: {SearchData},
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