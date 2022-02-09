<template>
  <div class="border-b border-gray-200 hidden lg:block">
    <div class="main-container">
      <div>
        <button v-for="item in tabs" :key="item" @click="activeTab = item">
          <u-tab :text="item" :is-active="activeTab === item" />
        </button>
      </div>

      <div class="input-container">
        <u-search-bar />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      tabs: [
        'Overview',
        'Notifications',
        'Analytics',
        'Saved reports',
        'Trade history',
        'User reports',
      ],

      activeTab: 'Overview',
    }
  },
})
</script>

<style lang="scss" scoped>
@import '~assets/styles/mixins';

.main-container {
  @include breakpoint('xl') {
    @apply w-10/12;
  }

  @apply w-11/12 mx-auto flex items-center justify-between py-2;
}

.input-container {
  width: 320px;
}
</style>
