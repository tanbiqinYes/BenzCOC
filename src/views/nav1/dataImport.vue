<template>
  <div class="dataExport">
    <div class="hanles">
    	<el-button type="primary">覆盖</el-button>
      <el-button type="primary">保留</el-button>
    </div>
    <template>
	  <el-table
	    :data="tableDataImport"
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
          region: '',
          outputRegion: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        tableDataImport: [{
          selects: '',
          commissionNo: '1681900395',
          model: 'Actors 3344',
          vin: 'WDAKHCAA5G0073128',
          engineNo: 'WDAKHCAA5G0073128',
          color: '红',
          assemblyDate: '2016/5/27',
          cocno: 'A011250ACTR',
        }, {
          selects: '',
          commissionNo: '1681900395',
          model: 'Actors 3344',
          vin: 'WDAKHCAA5G0073128',
          engineNo: 'WDAKHCAA5G0073128',
          color: '红',
          assemblyDate: '2016/5/27',
          cocno: 'A011250ACTR',
        }, {
        	selects: '',
          commissionNo: '1681900395',
          model: 'Actors 3344',
          vin: 'WDAKHCAA5G0073128',
          engineNo: 'WDAKHCAA5G0073128',
          color: '红',
          assemblyDate: '2016/5/27',
          cocno: 'A011250ACTR',
        }, {
        	selects: '',
          commissionNo: '1681900395',
          model: 'Actors 3344',
          vin: 'WDAKHCAA5G0073128',
          engineNo: 'WDAKHCAA5G0073128',
          color: '红',
          assemblyDate: '2016/5/27',
          cocno: 'A011250ACTR',
        }, {
        	selects: '',
          commissionNo: '1681900395',
          model: 'Actors 3344',
          vin: 'WDAKHCAA5G0073128',
          engineNo: 'WDAKHCAA5G0073128',
          color: '红',
          assemblyDate: '2016/5/27',
          cocno: 'A011250ACTR',
        }, {
        	selects: '',
          commissionNo: '1681900395',
          model: 'Actors 3344',
          vin: 'WDAKHCAA5G0073128',
          engineNo: 'WDAKHCAA5G0073128',
          color: '红',
          assemblyDate: '2016/5/27',
          cocno: 'A011250ACTR',
        }, {
        	selects: '',
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
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  }	
</script>

<style lang="less" rel="stylesheet/less" scoped>
	input{ font-size: 13px;}
  .dataExport{
  	.hanles{
  		display: flex;
  		justify-content:flex-start;
  		margin-bottom: 16px;
      .el-button{
        width: 92px;
        border-radius: 0;
        border: none;
        background: #00adef;
        font-family:'宋体';

      }
  	}
  }
</style>
<style lang="less">
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