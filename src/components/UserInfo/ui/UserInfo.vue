<script setup lang="ts">
  import { computed } from "vue";
  import UserInfoContent from "./UserInfoContent.vue";
  import UserInfoEmpty from "./UserInfoEmpty.vue";
  import { useStore } from "vuex";
  const store = useStore();
  const isEmpty = computed(() => store.state.currentUser == null);
</script>

<template>
  <UserInfoEmpty v-if="isEmpty" />
  <UserInfoContent v-else />
</template>
