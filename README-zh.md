# vue-admin-template

> 这是一个极简的 vue admin 管理后台。它只包含了 Element UI & axios & iconfont & permission control & lint，这些搭建后台必要的东西。

[线上地址](http://panjiachen.github.io/vue-admin-template)

[国内访问](https://panjiachen.gitee.io/vue-admin-template)

目前版本为 `v4.0+` 基于 `vue-cli` 进行构建，若你想使用旧版本，可以切换分支到[tag/3.11.0](https://github.com/PanJiaChen/vue-admin-template/tree/tag/3.11.0)，它不依赖 `vue-cli`。

## Extra

如果你想要根据用户角色来动态生成侧边栏和 router，你可以使用该分支[permission-control](https://github.com/PanJiaChen/vue-admin-template/tree/permission-control)

## 相关项目

- [vue-element-admin](https://github.com/PanJiaChen/vue-element-admin)

- [electron-vue-admin](https://github.com/PanJiaChen/electron-vue-admin)

- [vue-typescript-admin-template](https://github.com/Armour/vue-typescript-admin-template)

- [awesome-project](https://github.com/PanJiaChen/vue-element-admin/issues/2312)

## PROBLEM

node-sass 安装不上的问题
在 Windows 上？是否要编译本机节点模块？使用此一线安装构建工具：

npm install --global --production windows-build-tools

安装后，npm 将自动执行此模块，该模块将下载并安装 Microsoft 免费提供的 Visual C ++ Build Tools 2017。需要这些工具来编译流行的本机模块。它还将安装 Python 2.7，适当配置您的计算机和 npm。

### SELF FUNCTION

## 请求使用:

统一方法输出口
{ ajax, get, download, postJson, post, del, putJson, put }
请求统一封装在 src/commom/axios 中
使用时请参考 src/common/api dict 中的用法
不同页面的请求分开书写
请求封装有加密参数需要和后台配合使用

## vue happy scroll

GETADRESS : https://github.com/tangdaohai/vue-happy-scroll

保留原生滚动条功能
支持动态设置滚动条颜色
支持设置滚动条的位置。左右(竖向滚动条)、上下(横向滚动)方向
支持隐藏滚动条
支持动态设定滚动位置，并支持 top 与 left 值同步
支持动态数据 resize，滚动条自动隐藏与显示
支持设置 resize 滚动条变化规则(e. 在 chart 应用中，来新消息时，滚动条始终在最底部)

vue-happy-scroll 是一款基于 vue2.0 的滚动条插件。

此插件致力解决原生滚动条在不同系统、不同浏览器中的丑陋表现，在保证原生滚动条功能可用的基础上实现了更丰富的功能、保证在所支持的浏览器下展现出风格一致、交互体验一致的滚动条。

它可以让你无需关心滚动条的兼容性问题，无需关心内容区域的宽高，当设定 resize 属性后，可以根据内容大小自动显示或隐藏滚动条。 这里有对各种丰富的额外功能进行说明。

## 本项目使用 Element-ui 版本为 2.12 参考手册时请核对
