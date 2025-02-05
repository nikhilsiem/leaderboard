<template>
  <div v-if="show" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <div class="modal-header">
        <h3>{{ isEditing ? "View User details" : "Add New User" }}</h3>
        <button class="close-button" @click="closeModal">×</button>
      </div>

      <form @submit.prevent="handleSubmit" class="modal-form">
        <div class="form-group">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            v-model="formData.name"
            required
            class="form-input"
            :disabled="isEditing"
          />
        </div>

        <div class="form-group">
          <label for="age">Age</label>
          <input
            type="number"
            id="age"
            v-model.number="formData.age"
            required
            class="form-input"
            :disabled="isEditing"
          />
        </div>

        <div class="form-group">
          <label for="address">Address</label>
          <textarea
            id="address"
            v-model="formData.address"
            required
            class="form-input"
            :disabled="isEditing"
          ></textarea>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn-secondary" @click="closeModal">
            Cancel
          </button>
          <button type="submit" class="btn-primary" v-if="!isEditing">
            Add User
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { ref, watch, computed } from "vue";
import { useStore } from "vuex";

export default {
  name: "UserModal",
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    user: {
      type: Object,
      default: null,
    },
  },
  setup(props, { emit }) {
    const store = useStore();
    const formData = ref({
      name: "",
      age: "",
      address: "",
      points: 0,
    });

    const isEditing = computed(() => !!props.user);

    watch(
      () => props.user,
      (newUser) => {
        if (newUser) {
          formData.value = { ...newUser };
        } else {
          resetForm();
        }
      }
    );

    const resetForm = () => {
      formData.value = {
        name: "",
        age: "",
        address: "",
        points: 0,
      };
    };

    const handleSubmit = () => {
      if (isEditing.value) {
        store.dispatch("users/updateUser", formData.value);
      } else {
        store.dispatch("users/addUser", formData.value);
      }
      closeModal();
    };

    const closeModal = () => {
      emit("close");
      resetForm();
    };

    return {
      formData,
      isEditing,
      handleSubmit,
      closeModal,
    };
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  max-height: 90vh;
  overflow-y: auto;
}

.modal-header {
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
}

.modal-form {
  padding: 1.5rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-input {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 0.5rem;
}

.modal-footer {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
}

.close-button {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
}

.close-button:hover {
  color: #000;
}
</style>
