/**
 * // 事件触发事件名字自定义，用不同的名字区别事件
      this.$bus.$emit('eventName', 123)

    // 事件响应
      this.$bus.$on('eventName', value => {
      this.print(value) // 123
    })
 */

import Vue from 'vue';

let bus = new Vue();

export default {
  install: function(Vue) {
    Vue.prototype.$bus = bus;
  }
};
