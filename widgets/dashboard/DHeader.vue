<template>
  <div class="mt-8 lg:mt-12 w-11/12 xl:w-10/12 mx-auto md:flex items-center justify-between">
    <div>
      <h1 class="font-mediu text-gray-900 text-2xl md:text-3xl">Welcome back, Olivia</h1>
      <p class="text-gray-500 text-base mt-1 font-light">
        Track, manage and forecast your customers and orders.
      </p>
    </div>

    <div class="flex items-center mt-4">
      <div>
        <u-button outlined variant="secondary">
          <template #icon>
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.3333 12.3334L10 9.00003M10 9.00003L6.66667 12.3334M10 9.00003V16.5M16.9917 14.325C17.8044 13.8819 18.4465 13.1808 18.8166 12.3322C19.1866 11.4837 19.2635 10.5361 19.0352 9.63893C18.8068 8.74182 18.2862 7.94629 17.5556 7.3779C16.8249 6.80951 15.9257 6.50064 15 6.50003H13.95C13.6978 5.52439 13.2276 4.61864 12.575 3.85085C11.9223 3.08307 11.104 2.47324 10.1817 2.0672C9.25946 1.66116 8.25712 1.46949 7.2501 1.5066C6.24307 1.5437 5.25755 1.80861 4.36765 2.28142C3.47774 2.75422 2.70659 3.42261 2.11218 4.23635C1.51777 5.05008 1.11557 5.98797 0.935814 6.97952C0.756055 7.97107 0.803418 8.99047 1.07434 9.96108C1.34527 10.9317 1.8327 11.8282 2.5 12.5834"
                stroke="#344054"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </template>
          <p class="font-medium">Import</p>
        </u-button>
      </div>
      <div class="ml-3">
        <u-button>
          <template #icon>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.99999 1.16669V12.8334M1.16666 7.00002H12.8333"
                stroke="white"
                stroke-width="1.67"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </template>
          Add
        </u-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({})
</script>
