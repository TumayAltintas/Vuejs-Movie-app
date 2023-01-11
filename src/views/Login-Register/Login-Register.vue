<template>
  <div class="container">
    <div>
      <!--      <label class="switch" :style="{ backgroundColor: buttonColor }">-->
      <!--        <input type="checkbox" @click="toggleDivs">-->
      <!--        <span  class="slider round">{{ buttonText }}</span>-->
      <!--      </label>-->
        <Login/>
    </div>
  </div>
</template>

<script>


import Login from "../../components/Login-Register/Login.vue";
import Register from "../../components/Login-Register/Register.vue";

export default {
  name: "MainPageMovieAndTv",
  components: {
    Login,
    Register
  },
  data() {
    return {
      buttonText: 'Tv',
      buttonColor: '#ccc',
      show: true,

    }
  },
  methods: {
    toggleDivs() {
      this.showDiv1 = !this.showDiv1;
      this.showDiv2 = !this.showDiv2;
      if (this.buttonText === 'Movie') {
        this.buttonText = 'Tv';
        this.buttonColor = '#4caf50';
      } else {
        this.buttonText = 'Movie';
        this.buttonColor = '#ccc';
      }

    }
  }
}
</script>

<style scoped>
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