<template>
  <div class="container">
    <form>
      Register
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" class="form-control" id="username" v-model="userData.username">
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" class="form-control" id="password" v-model="userData.password">
      </div>
      <button class="btn btn-primary" @click="onSave">Submit</button>
    </form>
  </div>
</template>
<script>

export default {
  data() {
    return {
      userData: {
        username: null,
        password: null
      }
    };
  },
  methods: {
    onSave() {
      this.$appAxios.post("/admin", { ...this.userData }).then(registered_user_response => {
        console.log("registered_user_response :>> ", registered_user_response);
        this.$router.push({ name: "home" });
      });
    }
  }
};
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* use the full height of the viewport */
}

form {
  background: #f7f7f7; /* change the background color of the form */
  padding: 20px;
  border-radius: 10px; /* add rounded corners to the form */
  box-shadow: 0px 0px 10px #ccc; /* add a subtle shadow to the form */
}

label {
  font-weight: bold; /* make the labels bold */
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
  color: #333; /* Change the text color of the labels */
}

input {
  margin-bottom: 10px;
  padding: 10px;
  border: none;
  border-radius: 10px;
  box-shadow: 0px 0px 5px #ccc;
  background: #f1f1f1; /* Change the background color of the inputs */
  color: #333; /* Change the text color of the inputs */
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