<script setup lang="ts">
  import HeaderBase from "@/components/HeaderBase";
  import SidebarBase from "@/components/SidebarBase";
  import UserInfo from "@/components/UserInfo";
</script>

<template>
  <HeaderBase />
  <main class="main container">
    <SidebarBase />
    <UserInfo />
  </main>
</template>

<style lang="scss" scoped>
  .main {
    height: 80vh;
    box-shadow: 0px 0px 10px 0px #00000010;
    border-radius: 10px;
    overflow: hidden;
    margin-top: 30px;
    display: flex;
  }
</style>
