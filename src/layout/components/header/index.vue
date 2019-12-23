<template>
  <div class="pagemaisns">
    <div class="log" />
    <div class="DynamicName">
      <el-dropdown placement="top-start">
        <div class="fontpont">
          <span class="font">
            {{ defaultName }}
          </span>
          <span class="fontlast" /></span>
        </div>
        <el-dropdown-menu slot="dropdown">
          <maindrop @checkname="checknames" />
        </el-dropdown-menu>
      </el-dropdown>
    </div>
    <div class="mainbar" />
    <div class="scrrolbar">
      <el-input
        v-model="input"
        style="width:40vh;padding-right:60px"
        placeholder="serch"
      >
        <i
          slot="suffix"
          class="el-icon-search el-input__icon searchicon"
          @click="handleIconClick"
        />
        <el-dropdown
          slot="suffix"
          trigger="click"
        >
          <i class="el-icon-document-copy el-input__icon searchicon" />
          <el-dropdown-menu
            slot="dropdown"
            style="padding:0"
          >
            <el-dropdown-item v-for="item in inputlist">{{
              item
            }}</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-input>
    </div>
    <div class="users">
      <div class="theme">
        <el-dropdown :hide-on-click="false">
          <img
            style="width:18px;height:18px;transform:translateY(5px)"
            src="@/assets/theme.png"
            alt=""
          >
          <el-dropdown-menu slot="dropdown">
            <ul class="themedropdown">
              <li
                v-for="(item, key) in themelist"
                :key="key"
                :style="{
                  backgroundColor: item.checked === true ? '#dcdcdc' : ''
                }"
                @click="checkstyle(item)"
              >
                <img
                  style="width:30px;height:30px"
                  :src="require('@/assets/' + item.src)"
                  alt=""
                >
                <p>{{ item.name }}</p>
              </li>
            </ul>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
      <div @click="clickbell">
        <el-badge
          is-dot
          class="item"
        >
          <i class="el-icon-message-solid topbell" />
        </el-badge>
      </div>
      <div class="right-menu">
        <el-dropdown
          class="avatar-container"
          trigger="click"
        >
          <div class="avatar-wrapper">
            <el-avatar
              shape="circle"
              size="large"
              src="http://p1.music.126.net/ql3nSwy0XKow_HAoZzRZgw==/109951163111196186.jpg?param=640y300"
            />
            <i class="el-icon-caret-bottom " />
          </div>
          <el-dropdown-menu
            slot="dropdown"
            class="user-dropdown"
          >
            <router-link to="/">
              <el-dropdown-item>
                Home
              </el-dropdown-item>
            </router-link>
            <el-dropdown-item divided>
              <span
                style="display:block;"
                @click="logout"
              >Log Out</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { Message } from 'element-ui';
import mixin from './mixin';
import maindrop from './components/DropDownContainer';
export default {
  components: {
    maindrop
  },
  mixins: [mixin],
  data() {
    return {
      defaultName: '分布式后台管理系统',
      maxlength: 5,
      inputlist: [],
      input: '',
      tabPosition: 'left',
      themelist: [
        {
          src: 'theme.png',
          name: '黑色玄幻主题',
          checked: false,
          data: {
            titlestyle: {
              backstyle: '#ccc'
            }
          }
        },
        {
          src: 'theme.png',
          name: '白色清爽主题',
          checked: false,
          data: {}
        },
        {
          src: 'theme.png',
          name: '深蓝护眼主题',
          checked: false,
          data: {}
        }
      ]
    };
  },
  watch: {
    input(e) {
      if (e.length > 20) {
        Message({
          message: '超过长度',
          type: 'warning'
        });
        this.input = e.substr(0, 20);
      }
    }
  },
  methods: {
    checkstyle(e) {
      console.log(e);
    },
    checknames(e) {
      this.defaultName = e.checkname;
    },
    handleIconClick() {
      this.inputlist.unshift(this.input);
      if (this.inputlist.length > this.maxlength) {
        this.inputlist.pop();
      }
      this.creal('input');
    },
    clickbell() {
      Message({
        message: '打开提醒',
        type: 'success'
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import url("../../../assets/font/fontface/font.css");
.searchicon {
  font-size: 20px;
  cursor: pointer;
  :hover {
    color: #000;
  }
}
.themedropdown {
  list-style: none;
  padding: 0;
  margin: 0;
  :hover {
    background-color: #dcdcdc;
  }
  > :last-child {
    margin-bottom: 0;
  }
  li {
    cursor: pointer;
    margin-bottom: 20px;
    display: flex;
    align-items: center;
    padding: 5px;
    border-radius: 5px;
    > :first-child {
      margin-right: 5px;
    }
    p {
      margin: 0;
      font-size: 10px;
    }
  }
}
.theme {
  padding-right: 30px;
}
.el-dropdown-menu {
  padding: 20px;
}
.pagemaisns {
  background-color: #fff;
  // background-image: linear-gradient(to right, #283951, #322444);
  min-height: 6.5vh;
  width: 100%;
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 3fr 0.1fr 7fr 2fr;
  grid-gap: 1px;
  grid-template-areas: "lo dc ma sc us";
}
.log {
  grid-area: lo;
  background-image: url("../../../assets/logo/yun.png");
  background-repeat: no-repeat;
  background-size: 45% 65%;
  background-position: 10% 50%;
}
.DynamicName {
  display: flex;
  grid: dc;
  align-items: center;
  .fontpont {
    cursor: pointer;
    .font {
      letter-spacing: 10px;
      font-family: "montserratr";
      font-size: 19.5px;
      font-weight: 900;
      color: #333333;
    }
    .fontlast {
      letter-spacing: 3px;
      font-family: "montserratr";
      font-size: 14.5px;
      font-weight: 100;
      color: #333333;
    }
  }
  > p {
    padding: 0;
    margin: 0;
    display: block;
  }
}
.mainbar {
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: ma;
}
.users {
  cursor: pointer;
  grid-area: us;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  .item {
    margin-top: 10px;
    margin-right: 40px;
  }
  .topbell {
    // margin-right: 20px;
    font-size: 18px;
    color: #00bf6f;
  }
}
.scrrolbar {
  display: flex;
  justify-content: start;
  align-items: center;
  grid-area: sc;
}
.right-menu {
  float: right;

  &:focus {
    outline: none;
  }
  .right-menu-item {
    display: inline-block;
    padding: 0 8px;
    height: 100%;
    font-size: 18px;
    color: #5a5e66;
    vertical-align: text-bottom;
    &.hover-effect {
      cursor: pointer;
      transition: background 0.3s;
      &:hover {
        background: rgba(0, 0, 0, 0.025);
      }
    }
  }
  .avatar-container {
    margin-right: 30px;
    .avatar-wrapper {
      margin-top: 5px;
      position: relative;
      .user-avatar {
        cursor: pointer;
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .el-icon-caret-bottom {
        cursor: pointer;
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
@media only screen and(max-width: 600px) {
  .pagemaisns {
    background-color: #fff;
    // background-image: linear-gradient(to right, #283951, #322444);
    min-height: 6.5vh;
    width: 100%;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr 2fr;
    grid-gap: 1px;
    grid-template-areas: " dc us";
  }
  .scrrolbar {
    display: none;
  }
}
</style>
