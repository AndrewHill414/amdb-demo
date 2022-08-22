<template>
  <h1>Tasks</h1>
  <div v-for="task in tasks" :key="task.id" class="task">
    <router-link :to="{ name: 'TaskDetails', params: { id: task.id } }">
      <h2>{{ task.title }}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        { title: "Insert Or Serch", id: 1, details: "lorem" },
        { title: "Asset Metrics", id: 2, details: "lorem" },
        { title: "Multi-Item Update", id: 3, details: "lorem" },
        { title: "Data Search", id: 4, details: "lorem" },
        { title: "Anticipated Assets", id: 5, details: "lorem" },
      ],
    };
  },
};
</script>

<style></style>
