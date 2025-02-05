<template>
  <div class="search-container">
    <input
      type="text"
      class="search-input"
      placeholder="Search users..."
      v-model="searchTerm"
      @input="onSearch"
    />
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";

export default {
  name: "SearchBar",
  setup() {
    const store = useStore();
    const searchTerm = ref("");

    const onSearch = () => {
      store.dispatch("users/setSearchTerm", searchTerm.value);
    };

    return {
      searchTerm,
      onSearch,
    };
  },
};
</script>

<style scoped>
.search-container {
  flex: 1;
  max-width: 300px;
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.2s;
}

.search-input:focus {
  border-color: #3498db;
  outline: none;
}
</style>
