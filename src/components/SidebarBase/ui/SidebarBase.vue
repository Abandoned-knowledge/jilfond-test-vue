<script setup lang="ts">
  import SidebarUserCards from "./SidebarUserCards.vue";
  import SidebarBaseSearch from "./SidebarBaseSearch.vue";
  import SidebarBaseLoader from "./SidebarBaseLoader.vue";

  import { computed, onMounted, ref, watch } from "vue";
  import { useStore } from "vuex";

  const store = useStore();
  const isSearching = ref<boolean>(false);
  const isStoreEmpty = computed(() => store.state.filteredUsers.length > 0);
  watch(store.state, () => {
    if (store.state.filteredUsers.length >= 0) isSearching.value = false;
  });
  onMounted(() => store.dispatch("fetchAllUsers"));
</script>

<template>
  <aside class="sidebar">
    <p class="fw-semibold">Поиск сотрудников</p>
    <SidebarBaseSearch @is-searching="(value) => (isSearching = value)" />
    <div class="sidebar__results">
      <p class="fw-semibold">Результаты</p>
      <SidebarBaseLoader v-if="isSearching" />
      <small
        class="text-secondary"
        v-if="!isStoreEmpty && !isSearching"
      >
        начните поиск
      </small>

      <Suspense v-if="!isSearching && isStoreEmpty">
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
      overflow-y: scroll;
      padding: 10px;
      scrollbar-width: none;
    }
  }
</style>
