<template>
  <button class="my-button" :class="theme">
    <slot>
    </slot>
  </button>
</template>

<script lang="ts">
export default {
  name: 'myButton',
  props: {
    theme: {
      type: String,
      default: 'white',
    }
  },
}
</script>

<style scoped lang="scss">
.my-button {
  height: 43px;
  width: 100%;
  max-width: 400px;

  cursor: pointer;

  border: none;
  border-radius: 7px;

  font-weight: 600;
  font-size: 17px;

  transition: .3s;

  &.white {
    background: #FFFFFF85;
    color: #000000B8;
    box-shadow: 0 4px 4px rgba(172, 140, 140, 0.25);
  }
  &.dark {
    background: #1B1B1B;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    color: #fff;
  }

  &:hover {
      transform: translateY(-5px);
  }
}
</style>