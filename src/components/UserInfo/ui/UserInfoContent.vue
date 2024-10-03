<script setup lang="ts">
  import { useStore } from "vuex";
  const store = useStore();
</script>

<template>
  <section class="user-info">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYYFhUjvNhBJ9SwQTv8X3PyQVtd-EejwOMQ&s"
    />
    <div class="user-info__content">
      <div class="user-info__data">
        <p class="fw-bold">{{ store.getters.currentUser.name }}</p>
        <small class="fw-bold">
          email:
          <span class="fw-normal text-secondary">{{ store.getters.currentUser.email }}</span>
        </small>

        <small class="fw-bold">
          phone:
          <span class="fw-normal text-secondary">{{ store.getters.currentUser.phone }}</span>
        </small>
      </div>

      <div class="user-info__about">
        <p class="fw-bold">О себе</p>
        <small class="text-secondary">
          {{ store.getters.currentUserAbout }}
        </small>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .user-info {
    height: 100%;
    width: 100%;
    padding: 30px;
    padding-left: 20px;
    display: flex;
    gap: 60px;

    img {
      width: 50%;
      aspect-ratio: 16/10;
      height: fit-content;
      object-fit: cover;
    }

    &__data {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    &__content {
      width: 50%;
    }
    &__about {
      display: flex;
      flex-direction: column;
      gap: 25px;
      margin-top: 20px;
    }
  }
</style>
<style lang="scss" scoped>
  .user-info {
    height: 100%;
    width: 100%;
    padding: 30px;
    padding-left: 20px;
    display: flex;
    gap: 60px;

    img {
      width: 50%;
      aspect-ratio: 16/10;
      height: fit-content;
      object-fit: cover;
    }

    &__data {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    &__content {
      width: 50%;
    }
    &__about {
      display: flex;
      flex-direction: column;
      gap: 25px;
      margin-top: 20px;
    }
  }
</style>
