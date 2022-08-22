<template>
  <h1>{{ title }}</h1>
  <p>The Task ID is {{ id }}</p>
</template>

<script>
export default {
  props: ["id", "title"],

  // data () {
  //     return {
  //         id: this.$route.params.id
  //             }
  // }
};
</script>

<style>
.task h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
}
.task h2:hover {
  background: #ddd;
}
.task a {
  text-decoration: none;
}
</style>
