<template>
  <div class="search">
    <small class="text-secondary">Поиск</small>
    <div class="search__circle animation-spin"></div>
  </div>
</template>

<style lang="scss" scoped>
  .search {
    display: flex;
    align-items: center;
    gap: 10px;
    @include mqs(lg) {
      gap: 5px;
    }
    &__circle {
      width: 16px;
      aspect-ratio: 1;
      border-radius: 100px;
      border-width: 3px;
      border-style: solid;
      border-color: var(--block-color-active);
      border-top-color: var(--dark-color);

      @include mqs(lg) {
        width: 12px;
      }
    }
  }

  .animation-spin {
    animation: spin infinite 0.75s forwards ease-in-out;
  }
  @keyframes spin {
    0% {
      rotate: 0deg;
    }
    100% {
      rotate: 360deg;
    }
  }
</style>
