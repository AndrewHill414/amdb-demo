<template>
  <h1>Tasks</h1>
  <div v-for="task in tasks" :key="task.id" class="task">
    <router-link :to="{ name: 'TaskDetails', params: { id: task.id } }">
      <h2>{{ task.title }}</h2>
    </router-link>
  </div>
  <button
    @click="back"
    style="
      background: #8a8a8a;
      padding: 20px;
      border-radius: 10px;
      margin: 10px auto;
      max-width: 600px;
      cursor: pointer;
      color: #eee;
    "
  >
    Back
  </button>
  <div class="footer">
    Ⓒ 2022 Ideal Innovations, Inc & Future Research Corporation
  </div>
</template>

<script>
export default {
  methods: {
    back() {
      this.$router.go(-1);
    },
  },
  data() {
    return {
      tasks: [
        { title: "Asset Insert", id: "Asset Insert", details: "lorem" },
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
        { title: "Admin Logistics", id: "Admin Logistics", details: "lorem" },
        { title: "Activity Log", id: "Activity Log", details: "lorem" },
        { title: "Unplaced Data", id: "Unplaced Data", details: "lorem" },
      ],
    };
  },
};
</script>

<style></style>
