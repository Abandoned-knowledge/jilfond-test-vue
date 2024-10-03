<script setup lang="ts">
  interface props {
    username: string;
    email: string;
  }
  const props = defineProps<props>();
</script>

<template>
  <div class="user-card">
    <img
      src="https://i.redd.it/i-got-bored-so-i-decided-to-draw-a-random-image-on-the-v0-4ig97vv85vjb1.png?width=1280&format=png&auto=webp&s=7177756d1f393b6e093596d06e1ba539f723264b"
      alt=""
    />
    <div class="user-card__data">
      <small class="fw-bold">{{ props.username }}</small>
      <small class="text-secondary">{{ props.email }}</small>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .user-card {
    box-shadow: 0px 0px 10px 0px #00000010;
    display: flex;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    height: fit-content;

    img {
      width: 70px;
      aspect-ratio: 1;
      border-right: 1px solid var(--block-color-active);
    }
    .user-card__data {
      width: 100%;
      height: 100%;
      padding-left: 15px;
      display: flex;
      flex-direction: column;
      gap: 5px;
      justify-content: center;
    }
  }

  .user-card.active {
    img {
      border: 1px solid var(--block-color-active);
    }
    .user-card__data {
      background-color: var(--block-color-active);
    }
  }
</style>
