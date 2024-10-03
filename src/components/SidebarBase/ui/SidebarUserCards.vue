<script setup lang="ts">
  import UserCard from "@/shared/ui/UserCard";
  import { useStore } from "vuex";

  const store = useStore();

  function handleClick(event: Event, userObject: object) {
    const userCard = event.currentTarget as HTMLDivElement;
    const allUserCards = document.getElementsByClassName("user-card") as HTMLCollection;
    Array.from(allUserCards).forEach((card) => card.classList.remove("active"));
    userCard.classList.add("active");
    store.commit("setCurrentUser", userObject);
  }
</script>

<template>
  <div class="cards">
    <UserCard
      v-for="user in store.state.users"
      @click="handleClick($event, user)"
      :email="user.email"
      :username="user.username"
      :key="user.id"
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
