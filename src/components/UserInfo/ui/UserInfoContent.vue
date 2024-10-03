<script setup lang="ts"></script>

<template>
  <section class="user-info">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBYYFhUjvNhBJ9SwQTv8X3PyQVtd-EejwOMQ&s"
    />
    <div class="user-info__content">
      <div class="user-info__data">
        <p class="fw-bold">Ervin Howell</p>
        <small class="fw-bold">
          email:
          <span class="fw-normal text-secondary">Shanna@melissa.tv</span>
        </small>

        <small class="fw-bold">
          phone:
          <span class="fw-normal text-secondary">010-692-6593 x09125</span>
        </small>
      </div>

      <div class="user-info__about">
        <p class="fw-bold">О себе</p>
        <small class="text-secondary">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia ipsa quos tenetur minima
          tempora cupiditate rerum soluta. Sunt deleniti, at laborum incidunt facilis repudiandae
          eum fuga quod iste possimus odio, odit aut ex obcaecati molestiae accusamus saepe quo,
          eveniet tempore ea ratione repellat blanditiis accusantium necessitatibus. Recusandae
          porro doloribus aliquid, temporibus, reprehenderit voluptate alias assumenda cum in,
          laboriosam illo rerum dolore earum. Dolorum consectetur molestiae quidem sed debitis magni
          harum sapiente, ad exercitationem suscipit autem recusandae, minima, rerum vitae saepe
          iure sit aspernatur dolor est? Commodi beatae est quae, ad ducimus nam asperiores sunt
          deserunt accusantium doloremque sint cumque quia?
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
