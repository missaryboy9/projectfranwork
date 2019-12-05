<template>
  <div class="applicationManagement">
    <div>
      <filtertop />
    </div>
    <div>

      <div>
        <happy-scroll>
          <div style="width:85vw;height:70vh">
            <filtermain />
          </div>
        </happy-scroll>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { HappyScroll } from 'vue-happy-scroll';
import 'vue-happy-scroll/docs/happy-scroll.css';
import {
  filtertop,
  filtermain

} from './components';

export default {
  components: {
    filtertop,
    filtermain,
    HappyScroll
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
