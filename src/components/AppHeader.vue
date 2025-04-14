<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

// The `active` property in `CvHeaderMenuItem` doesn't appear to be connected to vue-router.
// This isn't ideal, but I wanted to show the active page on the menu.
// Get the current route to show toggle the `active` property.
const route = useRoute();
const isHome = computed(() => route.name === 'home');
const isEditor = computed(() => route.name === 'yaml-editor');
</script>

<template>
  <CvHeader>
    <CvSkipToContent href="#main">Skip to main content</CvSkipToContent>
    <CvHeaderNav>
      <CvHeaderMenuItem :to="{ name: 'home' }" :active="isHome" :ariaCurrent="isHome ? 'page' : null"
        >Home</CvHeaderMenuItem
      >
      <CvHeaderMenuItem :to="{ name: 'yaml-editor' }" :active="isEditor" :ariaCurrent="isEditor ? 'page' : null"
        >YAML Editor</CvHeaderMenuItem
      >
    </CvHeaderNav>
  </CvHeader>
</template>

<style lang="css" scoped>
/* Override responsive header */
.bx--header__nav {
  display: block;
}
</style>
