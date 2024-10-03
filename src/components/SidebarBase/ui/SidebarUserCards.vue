<script setup lang="ts">
  import UserCard from "@/shared/ui/UserCard";
  import axios from "axios";
  const { data } = await axios("https://jsonplaceholder.typicode.com/users");
</script>

<template>
  <div class="cards">
    <UserCard
      email="test@gmail.com"
      username="username"
    />
    <UserCard
      email="test@gmail.com"
      username="username"
      class="active"
    />
  </div>
</template>

<style lang="scss" scoped>
  .cards {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
</style>
