<template>
  <div class="u-s-b-container">
    <div class="ml-4 mr-2">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
          stroke="#667085"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
    <input
      type="search"
      class="h-full w-10/12 ml-auto bg-transparent !outline-none pr-2 text-base placeholder-gray-500"
      placeholder="Search"
    />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.u-s-b-container {
  @apply relative flex items-center h-11 rounded-lg border border-gray-300 w-full;

  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
}
</style>
