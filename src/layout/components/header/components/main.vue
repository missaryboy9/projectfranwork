<template>
  <div class="pages">
    <ul>
      <li
        v-for="(item, key) in itemlist"
        :key="key"
        @click="activeli(item)"
      >
        <p :style="{ color: item.checked === true ? '#00BF6F' : '' }">
          {{ item.name }}
        </p>
        <i
          v-if="item.style"
          :class="'el-icon-' + item.style"
          :style="'color:' + item.color"
        />
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
import { Message } from 'element-ui';
export default {
  components: {

  },
  props: {
    itemlist: [Array]
  },
  data() {
    return {
      listdata: Array(5).fill({
        name: '热门应用',
        style: 'cpu',
        color: 'red'
      })
    };
  },
  methods: {
    activeli(e) {
      e.checked = true;
      this.itemlist.forEach(element => {
        if (element.name !== e.name) {
          element.checked = false;
        }
      });
      Message({
        message: `切换至${e.name}`,
        type: 'success'
      });
      this.$emit('checkname', {
        checkname: e.name
      });
      let Assembly = e.data.map(e => {
        return {
          path: '/' + e.template,
          src: 'Layout',
          meta: e.meta,
          children: e.data ? [
            ...e.data.map(el => {
              return {
                path: el.template,
                name: el.template,
                src: el.src === 'Temporary' ? 'Temporary' : el.src,
                meta: { title: el.name, icon: 'user' }
              };
            })
          ] : [
            {
              path: e.template,
              name: e.template,
              src: e.src === 'Temporary' ? 'Temporary' : e.src,
              meta: { title: e.name, icon: 'user' }
            }
          ]
        };
      });
      this.$addrouter([...Assembly]);
    }
  }
};
</script>
<style scoped lang="scss">
ul {
  list-style: none;
  padding: 0;
  > li {
    width: 70%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    > p {
      margin-bottom: 10px;
      font-size: 13px;
    }
    > :last-child {
      transform: translateY(10%);
    }
    > :first-child {
      margin-right: 10px;
    }
  }
  > li:nth-child(n + 2) {
    > p:hover {
      color: #00bf6f;
    }
  }
  > li:nth-child(n + 2) {
    cursor: pointer;
  }
  > li:first-child {
    > p {
      color: #000;
      font-size: 15px;
      font-weight: 600;
    }
    border-bottom: 1px solid #dcdcdc;
  }
}
</style>
