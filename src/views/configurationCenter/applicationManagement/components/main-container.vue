<template>
  <div class="filtermain">
    <el-table
      :data="tableData"
      border
      style="width: 100%"
    >
      <el-table-column
        type="selection"
        width="40"
      />
      <template v-for="item in tableclum">
        <el-table-column
          align="center"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
        />
      </template>
      <el-table-column
        align="center"
        label="操作"
        class-name="tableclumstyles"
      >
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="primary"
          >操作</el-button>
          <el-button
            size="mini"
            type="primary"
          >操作</el-button>
          <el-button
            size="mini"
            type="primary"
          >操作</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script type="text/ecmascript-6">

export default {
  components: {

  },
  data() {
    return {
      tableclum: [
        {
          prop: 'date',
          label: '日期',
          width: '130'
        },
        {
          prop: 'name',
          label: '姓名',
          width: '180'
        },
        {
          prop: 'address',
          label: '地址',
          width: ''
        }
      ],
      tableData: [{
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-08',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-06',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-07',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    };
  },
  methods: {

  }
};
</script>

<style scoped lang="scss">
.filtermain {
  padding: 10px;
}
.tableclumstyles {
  width: 1000px;
}
</style>
