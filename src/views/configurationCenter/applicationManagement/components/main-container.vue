<template>
  <div class="filtermain">
    <el-table
      :data="tableData"
      border
      :row-class-name="tableRowClassName"
      height="70vh"
      style="margin-bottom:10px"
      stripe
    >
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
        width="300px"
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
    <el-row align="bottom">
      <el-col :span="4">
        共100条
      </el-col>
      <el-col
        :span="6"
        offset="12"
      >
        <el-pagination
          background
          :total="1000"
          :current-page.sync="currentPage1"
          :page-size="100"
          layout=" prev, pager, next"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </el-col>
    </el-row>
  </div>
</template>
<style lang="scss">
.el-table .rowclass > td {
  padding: 4px;
}
</style>
<script type="text/ecmascript-6">
import tabledata from './tabledata';
export default {
  components: {

  },
  data() {
    return {
      tableclum: [
        {
          prop: 'date',
          label: '类型',
          width: '130'
        },
        {
          prop: 'name',
          label: '处理器类型',
          width: '180'
        },
        {
          prop: 'address',
          label: '业务bean名称',
          width: ''
        },
        {
          prop: 'businessName',
          label: '业务bean标识',
          width: ''
        }
      ],
      tableData: tabledata
    };
  },
  methods: {
    tableRowClassName() {
      return 'rowclass';
    }
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
