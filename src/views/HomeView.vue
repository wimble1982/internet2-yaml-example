<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();
function goToEditor() {
  router.push({ name: 'yaml-editor' });
}
</script>

<template>
  <div class="home">
    <div>
      <h1>Welcome to the <span class="nowrap">YAML Editor</span></h1>
      <CvButton class="btn-start" @click="goToEditor">Start Editing</CvButton>
    </div>
  </div>
</template>

<style lang="css" scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex: 1;
}
.home > div {
  display: flex;
  flex-direction: column;
}
.btn-start {
  margin: 1rem auto 0;
}
</style>
