<template>
  <div class="applicationManagement">
    <div v-for="item in modulelist">
      <component :is="item.name" />
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { filtertop,
  filtermain } from '../components';
export default {
  components: {
    filtertop,
    filtermain
  },
  data() {
    return {
      modulelist: [
        {
          name: 'filtertop',
          sendpropos: '',
          getemit: ''
        },
        {
          name: 'filtermain',
          sendpropos: '',
          getemit: ''
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.applicationManagement {
  padding: 15px;
  display: flex;
  flex-direction: column;
  > :last-child {
    overflow: auto;
    height: 80vh;
  }
}
</style>
