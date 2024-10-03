<script setup lang="ts">
  import InputBase from "@/shared/ui/InputBase";
  import SidebarUserCards from "./SidebarUserCards.vue";
</script>

<template>
  <aside class="sidebar">
    <p class="fw-semibold">Поиск сотрудников</p>

    <InputBase
      type="text"
      placeholder="Введите Id или имя"
    />
    <div class="sidebar__results">
      <p class="fw-semibold">Результаты</p>
      <small class="text-secondary">ничего не найдено</small>
      <Suspense>
        <SidebarUserCards />
      </Suspense>
    </div>
  </aside>
</template>

<style lang="scss" scoped>
  .sidebar {
    background-color: var(--block-color);
    height: 100%;
    width: fit-content;
    padding: 30px 20px;
    border-right: 1px solid var(--block-color-separate);
    display: flex;
    flex-direction: column;
    gap: 20px;

    &__results {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
</style>
