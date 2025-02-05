<template>
  <div class="app-container">
    <Leaderboard />
  </div>
</template>

<script>
import Leaderboard from "./views/LeaderBoard.vue";

export default {
  name: "App",
  components: {
    Leaderboard,
  },
};
</script>

<style>
.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}
</style>
