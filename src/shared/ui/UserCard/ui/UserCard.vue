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
      src="https://static.vecteezy.com/system/resources/previews/036/280/650/original/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-illustration-vector.jpg"
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
    border: 1px solid;
    border-color: transparent;
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
      padding: 0px 15px;
      display: flex;
      flex-direction: column;
      gap: 5px;
      justify-content: center;
    }
  }

  .user-card.active {
    border-color: var(--block-color-active);
    img {
      border-color: var(--block-color-active);
    }
    .user-card__data {
      background-color: var(--block-color-active);
    }
  }
</style>
