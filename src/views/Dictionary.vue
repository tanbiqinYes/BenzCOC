<template>
    <el-row class="list_container">
        <el-col :span="24" class="dictionary_search_export">
            <label>导出字段：</label>
            <el-input placeholder="" v-model="inputKey" name="inputKey"></el-input>
            <el-button icon="search" class="search_btn" @click="derivedField">搜索</el-button>
           
                <el-button type="primary" class="export_btn">导出</el-button>
           
        </el-col>
        <el-col :span="24" class="dictionary_list">
            <el-table :data="dictionaryMaintenance" ref="dictionarymaintenanceTable" stripe border max-height="400" style="width: 100%">
                <el-table-column width="80" prop="serialNumber" label="序号"></el-table-column>
                <el-table-column width="150" prop="derivedField" label="导出字段"></el-table-column>
                <el-table-column width="150" prop="sourceFile" label="来源文件"></el-table-column>
                <el-table-column min-width="100" prop="sourceFile1" label="来源字段"></el-table-column>
                <el-table-column width="150" prop="indicatorType" label="指标类型"></el-table-column>
                <el-table-column width="150" prop="sourceType" label="来源类型"></el-table-column>
                <el-table-column width="150" prop="calculateType" label="计算类型"></el-table-column>
                <el-table-column width="150" prop="startPosition" label="开始位置"></el-table-column>
                <el-table-column width="150" prop="endPosition" label="结束位置"></el-table-column>
            </el-table>
        </el-col>
    </el-row>
</template>

<script>
export default {
    data() {
        return {
            inputKey: '',
           
            dictionaryMaintenance: [
                {
                    serialNumber: '1',
                    derivedField: 'Comission No.',
                    sourceFile: 'AFAB',
                    sourceFile1: 'Vehicle ident no.(VIN)',
                    indicatorType: '组合',
                    sourceType: '字符串',
                    calculateType: '映射',
                    startPosition: '1',
                    endPosition: '2'
                },
                {
                    serialNumber: '1',
                    derivedField: 'Comission No.',
                    sourceFile: 'AFAB',
                    sourceFile1: 'Vehicle ident no.(VIN)',
                    indicatorType: '组合',
                    sourceType: '字符串',
                    calculateType: '映射',
                    startPosition: '1',
                    endPosition: '2'
                },
                {
                    serialNumber: '1',
                    derivedField: 'Comission No.',
                    sourceFile: 'AFAB',
                    sourceFile1: 'Vehicle ident no.(VIN)',
                    indicatorType: '组合',
                    sourceType: '字符串',
                    calculateType: '映射',
                    startPosition: '1',
                    endPosition: '2'
                },
                {
                    serialNumber: '1',
                    derivedField: 'Comission No.',
                    sourceFile: 'AFAB',
                    sourceFile1: 'Vehicle ident no.(VIN)',
                    indicatorType: '组合',
                    sourceType: '字符串',
                    calculateType: '映射',
                    startPosition: '1',
                    endPosition: '2'
                }
            ],
             dictionaryMaintenanceAll: [
                {
                    serialNumber: '1',
                    derivedField: 'Comission No.',
                    sourceFile: 'AFAB',
                    sourceFile1: 'Vehicle ident no.(VIN)',
                    indicatorType: '组合',
                    sourceType: '字符串',
                    calculateType: '映射',
                    startPosition: '1',
                    endPosition: '2'
                },
                {
                    serialNumber: '1',
                    derivedField: 'Comission No.',
                    sourceFile: 'AFAB',
                    sourceFile1: 'Vehicle ident no.(VIN)',
                    indicatorType: '组合',
                    sourceType: '字符串',
                    calculateType: '映射',
                    startPosition: '1',
                    endPosition: '2'
                },
                {
                    serialNumber: '1',
                    derivedField: 'Comission No.',
                    sourceFile: 'AFAB',
                    sourceFile1: 'Vehicle ident no.(VIN)',
                    indicatorType: '组合',
                    sourceType: '字符串',
                    calculateType: '映射',
                    startPosition: '1',
                    endPosition: '2'
                },
                {
                    serialNumber: '1',
                    derivedField: 'Comission No.',
                    sourceFile: 'AFAB',
                    sourceFile1: 'Vehicle ident no.(VIN)',
                    indicatorType: '组合',
                    sourceType: '字符串',
                    calculateType: '映射',
                    startPosition: '1',
                    endPosition: '2'
                },
            ],
        }
    },
    methods: {
            derivedField() {
              var searchResult = [];
              for(var i = 0; i < this.dictionaryMaintenanceAll.length; i++){
                  if(this.dictionaryMaintenanceAll[i].derivedField.match(this.inputKey)){
                      searchResult.push(this.dictionaryMaintenanceAll[i]);
                  }
              }
              this.dictionaryMaintenance = searchResult;
            }
    }
}
</script>

<style lang="less" scoped>
    .dictionary_search_export {
        font-size: 0;
        margin-bottom: 17px;
        label{
            font-size: 14px;
        }
        .el-input{
            width: 227px;
            input{
                height: 34px !important;
                border-color: #e5e5e5;
            }
        }
        .el-button{
            width: 92px;
            height: 34px;
            border-radius: 0;
            &.search_btn{
                margin-left: 21px;
            }
            &.export_btn{
                float: right;
            }
        }
    }
.details_container{
      .dictionary_list{
        .el-table{
            table{
                td{
                    font-size: 12px;
                }
            }
        }
    }
}
</style>