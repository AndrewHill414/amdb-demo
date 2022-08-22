<template>
  <h1>You are currently in:</h1>
  <h2>{{ id }}</h2>
  <div class="footer">
    Ⓒ 2022 Ideal Innovations, Inc & Future Research Corporation
  </div>
</template>

<script>
export default {
  //props: ["id"],
  data() {
    return {
      id: this.$route.params.id,
    };
  },
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
