<template>
  <div class="leaderboard">
    <h1 class="leaderboard__title">Leaderboard</h1>

    <div class="leaderboard__controls">
      <SearchBar />
      <button class="btn-primary" @click="openAddModal">Add User</button>
    </div>

    <UserTable />

    <UserModal :show="showModal" :user="selectedUser" @close="closeModal" />
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import SearchBar from "../components/SearchBar.vue";
import UserTable from "../components/UserTable.vue";
import UserModal from "../modals/UserModal.vue";

export default {
  name: "LeaderBoard",
  components: {
    SearchBar,
    UserTable,
    UserModal,
  },
  setup() {
    const store = useStore();
    const showAddModal = ref(false);

    const selectedUser = computed(() => store.state.users.selectedUser);
    const showModal = computed(
      () => showAddModal.value || !!selectedUser.value
    );

    const openAddModal = () => {
      showAddModal.value = true;
    };

    const closeModal = () => {
      showAddModal.value = false;
      store.dispatch("users/setSelectedUser", null);
    };

    return {
      showModal,
      selectedUser,
      openAddModal,
      closeModal,
    };
  },
};
</script>

<style scoped>
.leaderboard {
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 2rem;
}

.leaderboard__title {
  color: #2c3e50;
  margin-bottom: 2rem;
}

.leaderboard__controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  gap: 1rem;
}
</style>
