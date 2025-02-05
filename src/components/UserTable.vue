<template>
  <div class="table-container">
    <table class="user-table">
      <thead>
        <tr>
          <th></th>
          <th @click="handleSort('name')">Name<span class="sort-icon">
        {{ sortDirection === "asc" ? "↑" : "↓" }}
      </span></th>
          <th @click="handleSort('points')">Points<span class="sort-icon">
        {{ sortDirection === "asc" ? "↑" : "↓" }}
      </span></th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>
            <button class="btn-icon danger" @click="deleteUser(user)">
              <span>×</span>
            </button>
          </td>
          <td @click="viewUser(user)" class="user-name" role="button">
            {{ user.name }}
          </td>
          <td>{{ user.points }}</td>
          <td class="actions">
            <button class="btn-icon success" @click="incrementPoints(user)">
              <span>+</span>
            </button>
            <button class="btn-icon warning" @click="decrementPoints(user)">
              <span>-</span>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "UserTable",
  setup() {
    const store = useStore();

    const users = computed(() => store.getters["users/filteredAndSortedUsers"]);

    const handleSort = (field) => {
      store.dispatch("users/setSortBy", field);
    };

    const viewUser = (user) => {
      store.dispatch("users/setSelectedUser", { ...user });
    };

    const incrementPoints = (user) => {
      store.dispatch("users/updatePoints", {
        userId: user.id,
        points: user.points + 1,
      });
    };

    const decrementPoints = (user) => {
      store.dispatch("users/updatePoints", {
        userId: user.id,
        points: user.points - 1,
      });
    };

    const deleteUser = (user) => {
      store.dispatch("users/deleteUser", user.id);
    };

    return {
      users,
      viewUser,
      incrementPoints,
      decrementPoints,
      deleteUser,
      handleSort
    };
  },
};
</script>

<style scoped>
.table-container {
  overflow-x: auto;
}

.user-table {
  width: 100%;
  border-collapse: collapse;
  background: white;
}

.user-table th,
.user-table td {
  padding: 1rem;
  text-align: left;
  border-bottom: 1px solid #eee;
}

.user-table th {
  font-weight: 600;
  color: #2c3e50;
  background: #f8f9fa;
}

.user-name {
  cursor: pointer;
  color: #3498db;
}

.user-name:hover {
  text-decoration: underline;
}

.actions {
  display: flex;
  gap: 0.5rem;
}

.btn-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s;
}

.btn-icon.success {
  background: #2ecc71;
  color: white;
}

.btn-icon.warning {
  background: #f1c40f;
  color: white;
}

.btn-icon.danger {
  background: #e74c3c;
  color: white;
}

.btn-icon:hover {
  transform: scale(1.1);
}
</style>
