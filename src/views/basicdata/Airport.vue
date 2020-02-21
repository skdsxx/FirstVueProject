<template>
    <el-row class="content">
        <!-- Top  --Add Button，Search input -->
        <el-col :span="24">
            <el-col :span="18" class="Add-Button">
                <el-button type="primary" icon="el-icon-plus">添加机场信息</el-button>
            </el-col>

            <el-col :span="6" class="content-Search">
                <el-input class="searchInput" v-model="searchData" suffix-icon="el-icon-search" placeholder="请输入三字码、名称"/>
            </el-col>
        </el-col>
        <!-- Middle table ， can set the default attribute "stripe"-->
        <el-col :span="24">
            <div class="content-Table">
                <el-table
                :data="tableData"
                style="width: 100%"
                :row-class-name="tableRowClassName">
                    <el-table-column
                        prop="Iata"
                        label="三字码"
                        width="70">
                    </el-table-column>
                    <el-table-column
                        prop="Icao"
                        label="四字码"
                        width="80">
                    </el-table-column>
                    <el-table-column
                        prop="NameCn"
                        label="中文名称">
                    </el-table-column>
                    <el-table-column
                        prop="ShortNameCn"
                        label="中文简称">
                    </el-table-column>
                    <el-table-column
                        prop="NameEn"
                        label="英文名称">
                    </el-table-column>
                    <el-table-column
                        prop="ShortNameEn"
                        label="英文简称">
                    </el-table-column>
                    <el-table-column
                        prop="Language"
                        label="语言">
                    </el-table-column>
                    <el-table-column
                        prop="Region"
                        label="区域属性">
                    </el-table-column>
                    <el-table-column
                        fixed="right"
                        label="操作"
                        width="120">
                        <template slot-scope="scope">
                            <el-button
                            @click.native.prevent="deleteRow(scope.$index, tableData)"
                            type="text"
                            size="small">
                            移除
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-col>
        <el-col :span="24">
            <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage3"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="1000">
            </el-pagination>
        </el-col>
    </el-row>
</template>

<script>
export default {
  methods: {
    tableRowClassName ({row, rowIndex}) {
      if (rowIndex % 2 !== 1) {
        return 'success-row'
      }
      return 'warning-row'
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  },
  data () {
    return {
      searchData: '',
      currentPage3: 3,
      tableData: [
        {Iata: 'TAO', Icao: 'TEAO', NameCn: '青岛流亭机场', ShortNameCn: '青岛流亭机场', NameEn: 'QingDaoLiuTing', ShortNameEn: 'QingDao', Language: 'Chinese', Region: '国内'},
        {Iata: 'ooO', Icao: 'TEAO', NameCn: '青岛流亭机场', ShortNameCn: '青岛流亭机场', NameEn: 'QingDaoLiuTing', ShortNameEn: 'QingDao', Language: 'Chinese', Region: '国内'},
        {Iata: 'yui', Icao: 'TEAO', NameCn: '青岛流亭机场', ShortNameCn: '青岛流亭机场', NameEn: 'QingDaoLiuTing', ShortNameEn: 'QingDao', Language: 'Chinese', Region: '国内'},
        {Iata: 'T89', Icao: 'TEAO', NameCn: '青岛流亭机场', ShortNameCn: '青岛流亭机场', NameEn: 'QingDaoLiuTing', ShortNameEn: 'QingDao', Language: 'Chinese', Region: '国内'},
        {Iata: 'tyu', Icao: 'TEAO', NameCn: '青岛流亭机场', ShortNameCn: '青岛流亭机场', NameEn: 'QingDaoLiuTing', ShortNameEn: 'QingDao', Language: 'Chinese', Region: '国内'},
        {Iata: 'efv', Icao: 'TEAO', NameCn: '青岛流亭机场', ShortNameCn: '青岛流亭机场', NameEn: 'QingDaoLiuTing', ShortNameEn: 'QingDao', Language: 'Chinese', Region: '国内'},
        {Iata: 'Ter', Icao: 'TEAO', NameCn: '青岛流亭机场', ShortNameCn: '青岛流亭机场', NameEn: 'QingDaoLiuTing', ShortNameEn: 'QingDao', Language: 'Chinese', Region: '国内'},
        {Iata: 'wqq', Icao: 'TEAO', NameCn: '青岛流亭机场', ShortNameCn: '青岛流亭机场', NameEn: 'QingDaoLiuTing', ShortNameEn: 'QingDao', Language: 'Chinese', Region: '国内'},
        {Iata: 'fdv', Icao: 'TEAO', NameCn: '青岛流亭机场', ShortNameCn: '青岛流亭机场', NameEn: 'QingDaoLiuTing', ShortNameEn: 'QingDao', Language: 'Chinese', Region: '国内'},
        {Iata: 'dac', Icao: 'TEAO', NameCn: '青岛流亭机场', ShortNameCn: '青岛流亭机场', NameEn: 'QingDaoLiuTing', ShortNameEn: 'QingDao', Language: 'Chinese', Region: '国内'}
      ]
    }
  }
}
</script>
<style lang="less">
    .content-Search{
        .content-Search{
            text-align: right;
            padding:0px;
            margin: 0px;
        }
    }
    .content-Table{
        margin-top: 20px;
        border: 1px;
        height: 760px;
        border-style: solid;
        border-color: gray;
    }
    .el-table .warning-row {
    background: rgb(209, 140, 12);
  }

   .el-table .success-row {
    background: #56c51b;
  }

</style>
