<template>
  <div class="container-fluid temp">
    <div class="container">
      <div>
        Login
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" class="form-control" id="form3Example3" v-model="userData.username">
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" class="form-control" id="form3Example4" v-model="userData.password">
        </div>
        <button class="btn btn-primary" @click="onsubmit">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      userData: {
        username: null,
        password: null,
      }
    }
  },
  methods: {
    onsubmit() {
      this.$appAxios.get(`admin?username=${this.userData.username}&password=${this.userData.password}`).then(login_response => {
        if (login_response.data.length > 0) {
          this.$router.push({name: "home"});
          this.$store.commit('setUser', login_response.data);
        } else {
          alert("Kullanıcı adı veya şifre hatalı");
        }
      });
    }

  }

}


</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}


label {
  font-weight: bold; /* make the labels bold */
}

.temp {
  background-color: #007bff ;
}

input {
  margin-bottom: 10px; /* add some spacing between the inputs and labels */
  padding: 10px;
  border: none; /* remove the border of the inputs */
  border-radius: 10px; /* add rounded corners to the inputs */
  box-shadow: 0px 0px 5px #ccc; /* add a subtle shadow to the inputs */
}

button {
  background: #2196F3; /* change the background color of the button */
  color: white; /* change the text color of the button */
  padding: 10px 20px;
  border: none; /* remove the border of the button */
  border-radius: 10px; /* add rounded corners to the button */
  font-weight: bold; /* make the text of the button bold */
  cursor: pointer; /* change the cursor to a pointer when hovering over the button */
}

body {
  background: linear-gradient(#2196F3, #00BCD4); /* Add a colorful background to the whole page */
}

form {
  background: linear-gradient(#e0f7fa, #b2ebf2); /* Add a gradient background color to the form */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #ccc;
}

label {
  font-weight: bold;
  color: black; /* Change the text color of the labels */
}

input {
  margin-bottom: 10px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 5px #ccc;
  background: #f1f1f1; /* Change the background color of the inputs */
  color: black; /* Change the text color of the inputs */
}

button {
  background: #2196F3;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background: #00BCD4; /* Change the background color of the button when hovering over it */
}
</style>