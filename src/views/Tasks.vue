<template>
  <h1>Tasks</h1>
  <div v-for="task in tasks" :key="task.id" class="task">
    <router-link :to="{ name: 'TaskDetails', params: { id: task.id } }">
      <h2>{{ task.title }}</h2>
    </router-link>
  </div>
  <div class="footer">
    Ⓒ 2022 Ideal Innovations, Inc & Future Research Corporation
  </div>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        { title: "Insert Or Serch", id: "Insert or Search", details: "lorem" },
        { title: "Asset Metrics", id: "Asset Metrics", details: "lorem" },
        {
          title: "Multi-Item Update",
          id: "Multi-Item Update",
          details: "lorem",
        },
        { title: "Data Search", id: "Data Search", details: "lorem" },
        {
          title: "Anticipated Assets",
          id: "Anticipated Assets",
          details: "lorem",
        },
      ],
    };
  },
};
</script>

<style></style>
