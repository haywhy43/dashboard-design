<template>
  <button :class="buttonStyle">
    <span class="mr-2">
      <slot name="icon" />
    </span>
    <span>
      <slot />
    </span>
  </button>
</template>

<script lang="ts">
import Vue from 'vue'

type ButtonSize = 'md'
type ButtonVariant = 'primary' | 'secondary'

const approvedButtonSizes: ButtonSize[] = ['md']
const approvedButtonVariants: ButtonVariant[] = ['primary', 'secondary']

export default Vue.extend({
  name: 'UButton',
  props: {
    /**
     * @description this prop handles the height/padding and anything related of the button
     *  basically adds the predefined class to the buttonStyle computed property
     */
    size: {
      type: String,
      default: 'md',
      validator: (val: ButtonSize) => approvedButtonSizes.includes(val),
    },

    /**
     * @description this prop handles the color variant of the button
     *  basically adds the predefined class to the buttonStyle computed property
     */
    variant: {
      type: String,
      default: 'primary',
      validator: (val: ButtonVariant) => approvedButtonVariants.includes(val),
    },

    /**
     * @description this prop handles styling the button in an outlined form related of the button
     *  basically adds the predefined class to the buttonStyle computed property
     */
    outlined: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    buttonStyle(): string {
      return `flex items-center justify-center ${this.size} ${this.variant} ${
        this.outlined ? 'outline' : ''
      }`
    },
  },
})
</script>

<style lang="scss" scoped>
// constant styling of the button
button {
  @apply border border-transparent;
  
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
}

// size styling of button
.md {
  @apply h-10 rounded-lg px-4 py-3;

  span {
    @apply text-sm;
  }
}

// removing background color for the outlined version of the button
.outline {
  @apply bg-transparent;
}

// Color scheme of button
.primary {
  @apply bg-primary-600 duration-500;

  &:hover {
    @apply bg-primary-700;
  }

  span {
    @apply text-white;
  }

  &.outline {
    @apply border-primary-600;

    span {
      @apply text-primary-600;
    }
  }
}

.secondary {
  &.outline {
    @apply border-gray-300;

    span {
      @apply text-gray-700;
    }
  }
}
</style>
