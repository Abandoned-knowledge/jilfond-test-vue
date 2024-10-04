<script setup lang="ts">
  import InputBase from "@/shared/ui/InputBase";
  import { useStore } from "vuex";
  const store = useStore();

  function handleInputEmpty(value: string) {
    if (value === "") store.commit("clearCurrentUser");
  }

  function handleInput(event: Event) {
    emits("isSearching", true);
    const inputElement = event.currentTarget as HTMLInputElement;
    const inputValue = inputElement.value;
    store.commit("filterUsers", inputValue.toLowerCase());

    handleInputEmpty(inputValue);
  }

  const emits = defineEmits(["isSearching"]);
</script>

<template>
  <InputBase
    @input="handleInput($event)"
    type="text"
    placeholder="Введите Id или имя"
  />
</template>

<style lang="scss" scoped></style>
