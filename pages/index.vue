<template>
  <div>
    <d-nav />
    <d-header />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import DHeader from '~/widgets/dashboard/DHeader.vue'
import DNav from '~/widgets/dashboard/DNav.vue'

export default Vue.extend({
  name: 'IndexPage',
  components: {
    DNav,
    DHeader,
  },
  layout: 'DashboardLayout',
})
</script>
