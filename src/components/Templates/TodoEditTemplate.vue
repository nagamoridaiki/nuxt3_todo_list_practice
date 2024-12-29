<script setup lang="ts">
import { inject } from "vue";
import { useRoute, useRouter } from "vue-router";
import BaseLayout from "../Organisms/BaseLayout.vue";
import InputForm from "../Atoms/InputForm.vue";
import TextArea from "../Atoms/TextArea.vue";
import CommonButton from "../Atoms/CommonButton.vue";
import { NAVIGATION_PATH } from "../../constants/navigation";
import { handleUpdateTodoInjectionKey } from "../../providers/TodoProviderInjectionKey";
import { fetchTodoDetailApi } from "../../apis/todoApi";
import type { TodoType } from "~/types/todo";

const router = useRouter();
const route = useRoute();
const todoId = route.params.id;

const targetTodo = ref<TodoType | undefined>(undefined);

const handleUpdateTodo = inject(handleUpdateTodoInjectionKey);

const fetchTodoDetail = async () => {
  if (typeof todoId === "string") {
    const paramTodoId = Number(todoId);
    if (isNaN(paramTodoId)) return;
    const data = await fetchTodoDetailApi(paramTodoId);
    if (data && typeof data !== "string") {
      targetTodo.value = data.todo;
    }
  }
};

const handleSubmitUpdateTodo = (e: Event) => {
  e.preventDefault();
  if (!handleUpdateTodo) return;
  const formElements = (e.target as HTMLFormElement).elements;
  const title = (formElements.namedItem("title") as HTMLInputElement).value;
  const content = (formElements.namedItem("content") as HTMLTextAreaElement)
    .value;
  handleUpdateTodo(String(todoId), title, content);
  router.push(`${NAVIGATION_PATH.TOP}`);
};

onMounted(() => {
  fetchTodoDetail();
});
</script>

<template>
  <BaseLayout title="Edit Todo" @submit.prevent="handleSubmitUpdateTodo">
    <form v-if="targetTodo" class="container">
      <div class="area">
        <InputForm
          v-model="targetTodo.title"
          name="title"
          placeholder="Title"
        />
      </div>
      <div class="area">
        <TextArea
          v-model="targetTodo.content"
          name="content"
          placeholder="Content"
        />
      </div>
      <div class="area">
        <CommonButton type="submit" label="Update" />
      </div>
    </form>
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
