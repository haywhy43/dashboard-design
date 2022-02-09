<template>
  <div>
    <d-nav />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DNav from '~/widgets/dashboard/DNav.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    DNav,
  },
  layout: 'DashboardLayout',
})
</script>
