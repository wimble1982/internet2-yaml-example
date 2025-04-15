<script setup>
import { RouterView } from 'vue-router';
import AppHeader from './components/AppHeader.vue';
</script>

<template>
  <AppHeader />
  <CvContent id="main">
    <RouterView />
  </CvContent>
</template>

<style lang="css" scoped>
#main {
  display: flex;
  flex-direction: column;
  padding-top: 5rem;
  margin-top: 0;
  min-height: 100vh;
}
</style>
