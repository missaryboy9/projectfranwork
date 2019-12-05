<template>
  <div class="pagescrollbar">
    <ul>
      <li>
        <img src="http://p1.music.126.net/ql3nSwy0XKow_HAoZzRZgw==/109951163111196186.jpg?param=640y300">
      </li>
      <li>
        张博文
      </li>
      <li>
        前端开发部门
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import echartoption from './echartsoption';
// import { timeout } from 'q';
export default {
  components: {

  },
  props: {

  },
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
  }
};
</script>

<style scoped lang="scss">
@import url("../../../assets/font/fontface/sourcefont.css");
.pagescrollbar {
  height: 100%;
  position: relative;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    // background: linear-gradient(to bottom, #00bf6f, #304156);
    filter: blur(5px);
    z-index: -1;
    background-size: cover;
    background-size: 100% 100%;
  }
}
img {
  height: 90%;
  width: 30%;
  border-radius: 50%;
}
ul {
  height: 100%;
  list-style: none;
  padding: 0;
  margin: 0;
  > li {
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    color: #fff;
    font-family: "sourcefont";
    > p {
      display: block;
      height: 100%;
      width: 100%;
    }
  }
  > li:first-child {
    height: 30%;
  }
}
</style>
