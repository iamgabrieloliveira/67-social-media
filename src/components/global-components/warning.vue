<template>
  <div class="card">
      {{ content }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'warning',
  props: {
    content: {
      type: String,
      required: true,
    }
  }
})
;</script>

<style scoped lang="scss">
.card {
  border-radius: 7px;
  padding: 10px 15px;
  background: #EFBC80;
}
</style>