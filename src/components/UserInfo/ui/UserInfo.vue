<script setup lang="ts">
  import { ref } from "vue";
  import UserInfoContent from "./UserInfoContent.vue";
  import UserInfoEmpty from "./UserInfoEmpty.vue";
  const isEmpty = ref<boolean>(true);
</script>

<template>
  <UserInfoEmpty v-if="isEmpty" />
  <UserInfoContent v-else />
</template>
