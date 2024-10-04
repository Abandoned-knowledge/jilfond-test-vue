<script setup lang="ts">
  interface props {
    type: "text";
    placeholder?: string;
  }
  const props = defineProps<props>();
</script>

<template>
  <input
    class="input text-small text-secondary"
    :type="props.type"
    :placeholder="props.placeholder"
  />
</template>

<style lang="scss" scoped>
  .input {
    padding: 15px 80px 15px 20px;
    border: 1.5px solid var(--secondary-color-lighten);
    border-radius: 10px;

    @include mqs(lg) {
      padding: 10px 80px 10px 15px;
    }

    &::placeholder {
      color: var(--secondary-color);
      opacity: 1;
    }
  }
</style>
