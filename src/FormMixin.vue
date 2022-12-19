<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormMixin',
  computed: {
    errorsMessages() {
      let allMessages = [];
      const allErrors = Object.values(this.errors);
      allErrors.forEach((messages: string[]) => {
        allMessages = messages.map((message: string) => message);
      });
      return allMessages || [];
    },
  },
})
</script>
