<template>
  <div id="nav">
    <router-link to="/">Login</router-link>
    <router-link :to="{ name: 'Tasks' }">DEV LOGIN</router-link>
  </div>
  <router-view />
</template>

<script>
/* eslint-disable */
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  margin: 0;
  background: #eee;
}
#nav {
  padding: 30px;
}
#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}
</style>
