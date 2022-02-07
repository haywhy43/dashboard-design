<template>
  <div :class="{ backdrop: isActive }" class="tab-container">
    <p class="text">
      {{ text }}
    </p>
    <!-- <div v-show="isActive" class="backdrop"></div> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    text: {
      type: String,
      default: '',
    },

    isActive: {
      type: Boolean,
    },
  },
})
</script>

<style lang="scss" scoped>
.tab-container {
  @apply relative px-3 py-2 duration-500;

  .text {
    @apply text-base relative z-10 text-gray-700 font-medium;
  }

  &::after {
    content: '';

    @apply h-0 duration-500 absolute top-0 left-0 bg-transparent rounded-md;
  }

  &.backdrop {
    &::after {
      @apply w-full h-full bg-gray-50;
    }
  }
}
</style>
