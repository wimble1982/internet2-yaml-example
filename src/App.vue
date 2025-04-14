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
  min-height: calc(100vh - 3rem); /* full height - header margin */
}
</style>
