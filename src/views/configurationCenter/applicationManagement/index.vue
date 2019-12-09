<template>
  <div class="applicationManagement">
    <div>
      <filtertop />
    </div>
    <div>
      <div>
        <filtermain />
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import {
  filtertop,
  filtermain

} from './components';

export default {
  components: {
    filtertop,
    filtermain
  },
  data() {
    return {

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
    > .happy-scroll-content {
      display: block !important;
    }
  }
}
</style>
