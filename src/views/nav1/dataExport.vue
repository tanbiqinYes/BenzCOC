<template>
  <div class="dataExport">
    <div class="hanles">
      <el-button type="primary">导出</el-button>
    </div>
    <div class="searchCriteria">
      <el-form ref="form" :model="form"  >
        <el-form-item label="状态：" label-width="50px">
          <el-select v-model="form.state" placeholder="全部"style="width:112px" >
            <el-option label="正常" value="zc"></el-option>
            <el-option label="字典未定义" value="zdwdy"></el-option>
            <el-option label="数据缺失" value="sjqs"></el-option>
          </el-select>
       </el-form-item>
       <el-form-item label="导出状态：" label-width="82px">
          <el-select  v-model="form.state_output" placeholder="全部" style="width:112px">
            <el-option label="正常" value="outputzc"></el-option>
            <el-option label="字典未定义" value="outputzdwdy"></el-option>
            <el-option label="数据缺失" value="outputsjqs"></el-option>
          </el-select>
       </el-form-item>
       <el-form-item label="Commission No：" label-width="122px">
            <el-input  v-model="form.startNum" placeholder="开始号" style="width: 124px"></el-input>
            <span class="line">-</span>
            <el-input  v-model="form.stopNum" placeholder="截止号" style="width: 122px"></el-input>
        </el-form-item>
       <el-form-item label="数据导入时间：" label-width="108px">
            <el-form-item prop="date1" style="width: 124px">
              <el-date-picker type="date" placeholder="开始时间" v-model="form.date1" style="width: 124px"></el-date-picker>
            </el-form-item>
          <span class="line">-</span>
            <el-form-item prop="date2" style="width: 124px">
              <el-date-picker type="date" placeholder="结束时间" v-model="form.date2" style="width: 124px"></el-date-picker>
            </el-form-item>
        </el-form-item>
        <el-button icon="search" class="search_btn" @click="submitSearch">搜索</el-button>
      </el-form>
    </div>
    <template>
	  <el-table
	    :data="tableData3"
	    height="250"
	    border
	    style="width: 100%"
	    @selection-change="handleSelectionChange">
	     <el-table-column
	      type="selection"
	      fixed
	      width="48">
	    </el-table-column>
	     <el-table-column
	      fixed
	      prop="state"
	      label="状态"
	      width="99">
			<template scope="scope">
			<el-button size="mini"  class="btn_state" v-bind:class="{ dataLost:(scope.row.state === '数据缺失') , dataUndefined: (scope.row.state === '字典未定义') }">{{scope.row.state}}</el-button>
			</template>
	    </el-table-column>
	    <el-table-column
	      prop="commissionNo"
	      label="Commission No."
	      width="148">
	    </el-table-column>
	    <el-table-column
	      prop="model"
	      label="Model"
	      width="180">
	    </el-table-column>
	    <el-table-column
	      prop="vin"
	      label="VIN"
	      width="200">
	    </el-table-column>
	    <el-table-column
	      prop="engineNo"
	      label="Engine No."
	      width="219">
	    </el-table-column>
	    <el-table-column
	      prop="color"
	      label="Color"
	      width="77">
	    </el-table-column>
	    <el-table-column
	      prop="assemblyDate"
	      label="Assembly Date"
	      width="138">
	    </el-table-column>
	    <el-table-column
	      prop="cocno"
	      label="COC No."
	      >
	    </el-table-column>
	    <!-- <el-table-column
	      fixed="right"
	      label="操作"
	      width="150">
	      <template scope="scope">
	        <el-button @click="handleClick" type="text" size="small">查看</el-button>
	        <el-button type="text" size="small">编辑</el-button>
	      </template>
	    </el-table-column> -->
	  </el-table>
	</template>
  </div>
</template>

<script>
export default {
	 data() {
      return {
        form: {
          name: '',
          state: '全部',
          state_output: '全部',
          startNum: '',
          stopNum: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
          valid: true
        },
        rules: {
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择活动区域', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ]
        },
        tableData3: [{
          selects: '',
          state: '正常',
          commissionNo: '1681900395',
          model: 'Actors 3344',
          vin: 'WDAKHCAA5G0073128',
          engineNo: 'WDAKHCAA5G0073128',
          color: '红',
          assemblyDate: '2016/5/27',
          cocno: 'A011250ACTR',
        }, {
          selects: '',
          state: '数据缺失',
          commissionNo: '1681900395',
          model: 'Actors 3344',
          vin: 'WDAKHCAA5G0073128',
          engineNo: 'WDAKHCAA5G0073128',
          color: '红',
          assemblyDate: '2016/5/27',
          cocno: 'A011250ACTR',
        }, {
        	selects: '',
          state: '字典未定义',
          commissionNo: '1681900395',
          model: 'Actors 3344',
          vin: 'WDAKHCAA5G0073128',
          engineNo: 'WDAKHCAA5G0073128',
          color: '红',
          assemblyDate: '2016/5/27',
          cocno: 'A011250ACTR',
        }, {
        	selects: '',
          state: '正常',
          commissionNo: '1681900395',
          model: 'Actors 3344',
          vin: 'WDAKHCAA5G0073128',
          engineNo: 'WDAKHCAA5G0073128',
          color: '红',
          assemblyDate: '2016/5/27',
          cocno: 'A011250ACTR',
        }, {
        	selects: '',
          state: '数据缺失',
          commissionNo: '1681900395',
          model: 'Actors 3344',
          vin: 'WDAKHCAA5G0073128',
          engineNo: 'WDAKHCAA5G0073128',
          color: '红',
          assemblyDate: '2016/5/27',
          cocno: 'A011250ACTR',
        }, {
        	selects: '',
          state: '字典未定义',
          commissionNo: '1681900395',
          model: 'Actors 3344',
          vin: 'WDAKHCAA5G0073128',
          engineNo: 'WDAKHCAA5G0073128',
          color: '红',
          assemblyDate: '2016/5/27',
          cocno: 'A011250ACTR',
        }, {
        	selects: '',
          state: '正常',
          commissionNo: '1681900395',
          model: 'Actors 3344',
          vin: 'WDAKHCAA5G0073128',
          engineNo: 'WDAKHCAA5G0073128',
          color: '红',
          assemblyDate: '2016/5/27',
          cocno: 'A011250ACTR',
        }]
      };
    },
    methods: {
      submitSearch(formName) {
        //var text = $('input[type=text]').val();
        //$('#table1 tr:not("#thead")').hide().filter(':contains("'+text+'")').show();
        console.log(this.formName.state);
        var searchTxt = this.formName.state;

        //this.$refs[formName].validate((valid) => {
          if (true) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        //});
      },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      
    }
  }	
</script>

<style lang="less" rel="stylesheet/less" scoped>
	input{ font-size: 13px;}
  .dataExport{
  	.hanles{
  		display: flex;
  		justify-content:flex-end;
  		margin-bottom: 16px;
  		.el-button{
	        width: 92px;
	        border-radius: 0;
	        border: none;
	        background: #00adef;
	      }
  	}
  	.searchCriteria{
  		padding: 15px 0 20px;
  		border-top: 1px solid #e0e0e0;
  		.el-form-item{
  			display: inline-block;
  			vertical-align: top;
  			font-size: 13px;
  			.el-select{
  				width: 89px;
  				height: 33px;
  				line-height: 33px;
  				font-size: 13px;
  			}
  		}
  		.line{
  			text-align: center;
        color: #9a9a9a;
  		}
  		.el-button{
            width: 92px;
            height: 34px;
            border-radius: 0;
            &.search_btn{
                margin-left: 21px;
                float: right;
            }
        }
  	}
  	.el-table{
  		.btn_state{
  			border: none;
  			background: #3fbdb1;
  			color: #FFF;
  			&.dataLost{
  				background: #dec052;
  			}
  			&.dataUndefined{
  				background: #db4c3c;
  			}
  		}
  	}
  }
</style>
<style lang="less">
  .searchCriteria{
    .el-form-item__label{
        padding-right: 5px;
      }
    .el-form-item{
      .el-select{
          .el-input{
            .el-input__icon{
              color: #424242;
              transform: translateY(-50%) rotateZ(180deg) scale(0.6, 1);
              &.is-reverse{
                transform: translateY(-50%) scale(0.6, 1);
              }
            }
          } 
        }
      .el-form-item__content{
        margin-right: 30px;
        .el-input__inner{
          border: 1px solid #e5e5e5;
          border-radius: 3px;
          padding: 0 8px;
        }
      }
      &:nth-child(4){
        .el-form-item__content{
          margin-right: 0;
        }
      }
    }
      
  }
  .el-table{
    font-family: Arial,'宋体';
    border: 1px solid #dedede;
    .el-table__header{
      th, .cell{
          background: #FFF;
        }
    }
    th{
      border-right: 1px solid #dedede;
      .cell{
        font-weight: bold;
        padding: 0 14px;
        .el-checkbox__inner{
          border-radius: 0;
        }
      }
    }
    td{
      border-right: 1px solid #dedede;
      border-bottom: 1px solid #dedede;
      .cell{
        padding: 0 6px;
        .el-checkbox__inner{
          border-radius: 0;
        }
      }
      
      .el-input__inner{
        height: 34px;

      }

      .el-input__inner{
        border-radius: 0;
        padding: 0 6px;
        border: 1px solid #e5e5e5;
      }
      &.el-table-column--selection{
        .cell{
          padding:0 14px;
        }
      }
    }
    .el-table__body{
      tr{
        background: #FFF;
      }
      tr:nth-child(odd){
        background: #F9F9F9;
      }
    }
  }
  
</style>