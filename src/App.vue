<template>
  <div id="app" class="main-layout flex">
    <book-display />
    <my-wishlist />
  </div>
</template>

<script>
import bookDisplay from '@/components/book-display.vue'
import myWishlist from '@/components/my-wishlist.vue'

export default {
  name: 'App',
  components: {
    bookDisplay,
    myWishlist
  }
}
</script>

<style lang="scss"></style>
