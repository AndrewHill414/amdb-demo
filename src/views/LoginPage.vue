<template>
  <div id="app">
    <img :src="require('./DB.png')" />
  </div>
  <form @submit.prevent="handleSubmit">
    <label>Username:</label>
    <input type="username" required v-model="username" />
    <label>Password:</label>
    <input type="password" v-model="password" required />
    <div v-if="passwordError" class="error">{{ passwordError }}</div>

    <div class="submit">
      <button @click="handleSubmit">Login</button>
    </div>
  </form>
  <!-- <p>Powered By:</p>
  <img :src="require('./FRC logo2.jpg')" />
  <img
    :src="require('./I3 Logo.webp')"
    url="https://www.idealinnovations.com/"
  /> -->
</template>

<script>
import image from "./DB.png";
import { ref } from "vue";
export default {
  setup() {
    const username = ref("");
    const password = ref("");

    const handleSubmit = () => {
      console.log(username.value, password.value);
    };
  },
  data() {
    return {
      passwordError: null,
      image: image,
    };
  },
  methods: {
    handleSubmit() {
      // validate password
      this.passwordError =
        this.password.length > 5
          ? ""
          : "Password must be at least 6 characters long";

      if (!this.passwordError) {
        // make request to database to save user
        console.log("username: ", this.username);
        console.log("password: ", this.password);
      }
    },
  },
};
</script>

<style>
form {
  max-width: 420px;
  margin: auto;
  background: white;
  text-align: left;
  padding: 40px;
  border-radius: 10px;
}
label {
  color: #aaa;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.6em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input,
select {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid #ddd;
  color: #555;
  font-weight: bold;
}
input[type="checkbox"] {
  display: inline-block;
  width: 16px;
  margin: 0 10px 0 0;
  position: relative;
  top: 2px;
}
.pill {
  display: inline-block;
  margin: 20px 10px 0 0;
  padding: 6px 12px;
  background: #eee;
  border-radius: 20px;
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
  color: #777;
  cursor: pointer;
}
button {
  background: #0b6dff;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  color: white;
  border-radius: 20px;
  font-weight: bold;
}
button.hover {
  background: rgb(255, 0, 0);
}
.submit {
  text-align: center;
}
.error {
  color: #ff0062;
  margin-top: 10px;
  font-size: 0.8em;
  font-weight: bold;
}
</style>
