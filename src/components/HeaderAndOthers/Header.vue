<template>
  <header>
    <div>
      <div class="container d-flex">
        <div style="position: absolute; top: 25%">
          <router-link to="/" class="TopA">ANASAYFA</router-link>
        </div>
          <ul  class="row TopUl">
          <li>
            <router-link to="" class="TopA">Movie</router-link>
          </li>
            <li>
              <router-link to="" class="TopA">TV Shows</router-link>
            </li>
            <li>
              <router-link to="" class="TopA">People</router-link>
            </li>
          </ul>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>
header {
  background-color: #032541;
  width: 100%;
  height: 80px;
  position: relative
}

a.TopA {
  color: white;

  padding-right: 15px;
}

li {
  list-style-type: none;

}

ul.TopUl {
  top: 25%;
  position: absolute;
  margin: 0 0 0 90px;
  padding: 0;
}



</style>
