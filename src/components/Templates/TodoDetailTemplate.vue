<script setup lang="ts">
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import BaseLayout from "../Organisms/BaseLayout.vue";
import InputForm from "../Atoms/InputForm.vue";
import TextArea from "../Atoms/TextArea.vue";
import { fetchTodoDetailApi } from "../../apis/todoApi";
import type { TodoType } from "~/types/todo";

const route = useRoute();
const todoId = route.params.id;

const targetTodo = ref<TodoType | undefined>(undefined);

const fetchTodoDetail = async () => {
  if (typeof todoId === "string") {
    const paramTodoId = Number(todoId);
    if (isNaN(paramTodoId)) return;
    const data = await fetchTodoDetailApi(paramTodoId);

    if (data && typeof data === "object" && "todo" in data && typeof data !== "string") {
      targetTodo.value = data.todo
    }
  }
};

onMounted(() => {
  fetchTodoDetail();
});
</script>

<template>
  <BaseLayout title="Todo Detail">
    <div v-if="targetTodo" class="container">
      <div class="area">
        <InputForm
          v-model="targetTodo.title"
          disabled
          name="title"
          placeholder="Title"
        />
      </div>
      <div class="area">
        <TextArea
          v-model="targetTodo.content"
          disabled
          name="content"
          placeholder="Content"
        />
      </div>
    </div>
  </BaseLayout>
</template>

<style scoped>
.container {
  width: 80%;
  margin: 40px auto;
}

.area {
  margin-top: 40px;
}
</style>
