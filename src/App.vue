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
</style>
