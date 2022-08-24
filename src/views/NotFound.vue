<template>
  <div>
    <h2>404: Page does not exist</h2>
    <img :src="require('./giphy.gif')" />
  </div>
</template>

<script>
import image from "./giphy.gif";
export default {
  data() {
    return {
      image: image,
    };
  },
};
</script>

<style></style>
