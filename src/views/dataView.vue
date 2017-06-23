<template>
  <div class="dataview_container">
    <el-form ref="form" :model="searchForm" :inline="true" class="searchCriteria">
      <el-form-item label="状态：" label-width="40px">
        <el-select v-model="searchForm.state" placeholder="全部">
          <el-option label="正常" value="normal"></el-option>
          <el-option label="停用" value="stopuse"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="导出状态：" label-width="93px">
        <el-select v-model="searchForm.outputState" placeholder="全部">
          <el-option label="正常" value="outpuNormal"></el-option>
          <el-option label="停用" value="outputStopuse"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Commission No：" label-width="128px">
        <el-col :span="11">
          <el-input v-model="searchForm.startNumber" placeholder="开始号" class="nomberWidth"></el-input>
        </el-col>
        <el-col class="line" :span="1">-</el-col>
        <el-col :span="11">
          <el-input v-model="searchForm.endNumber" placeholder="截止号" class="nomberWidth"></el-input>
        </el-col>
      </el-form-item>
      <el-form-item label="数据导入时间：" label-width="117px">
        <el-col :span="11">
          <el-date-picker type="date" placeholder="开始时间" v-model="searchForm.date1" style="width: 97px;"></el-date-picker>
        </el-col>
        <el-col class="line" :span="1">-</el-col>
        <el-col :span="11">
          <el-date-picker type="date" placeholder="结束时间" v-model="searchForm.date2" style="width: 97px;"></el-date-picker>
        </el-col>
      </el-form-item>
      <el-form-item>
        <el-button icon="search" class="search_btn" @click="goSearch">搜索</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="dataInfo" stripe border max-height="200px" style="width: 100%" @row-click="showRowDetails">
      <el-table-column min-width="120" prop="comissionNo" label="Commission No."></el-table-column>
      <el-table-column min-width="120" prop="model" label="Model"></el-table-column>
      <el-table-column min-width="160" prop="vin" label="VIN"></el-table-column>
      <el-table-column min-width="200" prop="engineNo" label="Engine No."></el-table-column>
      <el-table-column min-width="70" prop="color" label="Color"></el-table-column>
      <el-table-column min-width="130" prop="assemblyDate" label="Assembly Date"></el-table-column>
      <el-table-column min-width="210" prop="cocNo" label="COC No."></el-table-column>
    </el-table>
    <el-dialog :visible.sync="dialogVisible" title="COC详情信息">
        <el-form :inline="true" class="detail_form_inline" label-position="left" label-width="166px">
            <el-form-item label="车辆生产场名称：" class="bg_gray_color"><span>{{dialogDetails.vehicleProductionFiledName}}</span></el-form-item>
            <el-form-item label="车型名称：" class="bg_gray_color"><span>{{dialogDetails.truckName}}</span></el-form-item>
            <el-form-item label="车辆制造国："><span>{{dialogDetails.vehicleManufacturer}}</span></el-form-item>
            <el-form-item label="车辆中文品牌："><span>{{dialogDetails.chineseBrand}}</span></el-form-item>
            <el-form-item label="车型系列代号/名称：" class="bg_gray_color"><span>{{dialogDetails.serialNumber}}</span></el-form-item>
            <el-form-item label="车辆英文品牌：" class="bg_gray_color"><span>{{dialogDetails.englishBrand}}</span></el-form-item>
        </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchForm: {
        state: '',
        outputState: '',
        startNumber: '',
        endNumber: '',
        date1: '',
        date2: '',
      },
      dataInfo: [
        {
          comissionNo: '1681990',
          model: 'Actros 3344',
          vin: 'WDAKHCAA5G0073128',
          engineNo: 'OM501LA 786762736728855',
          color: '红',
          assemblyDate: '2016/5/21',
          cocNo: 'A011250ACTRCK4DCR893ADSSDKK',

          vehicleProductionFiledName: '1戴姆勒沃尔特工厂',
          truckName: '半挂牵引车',
          vehicleManufacturer: '德国',
          chineseBrand: '梅德赛斯-奔驰',
          serialNumber: 'ACTR/ACTROS',
          englishBrand: 'Mercedes-Benz'
        },
        {
          comissionNo: '2681990',
          model: 'Actros 3344',
          vin: 'WDAKHCAA5G0073128',
          engineNo: 'OM501LA 786762736728855',
          color: '红',
          assemblyDate: '2016/5/21',
          cocNo: 'A011250ACTRCK4DCR893ADSSDKK',

          vehicleProductionFiledName: '1戴姆勒沃尔特工厂',
          truckName: '半挂牵引车',
          vehicleManufacturer: '德国',
          chineseBrand: '梅德赛斯-奔驰',
          serialNumber: 'ACTR/ACTROS',
          englishBrand: 'Mercedes-Benz'
        },
        {
          comissionNo: '3681990',
          model: 'Actros 3344',
          vin: 'WDAKHCAA5G0073128',
          engineNo: 'OM501LA 786762736728855',
          color: '红',
          assemblyDate: '2016/5/21',
          cocNo: 'A011250ACTRCK4DCR893ADSSDKK',

          vehicleProductionFiledName: '1戴姆勒沃尔特工厂',
          truckName: '半挂牵引车',
          vehicleManufacturer: '德国',
          chineseBrand: '梅德赛斯-奔驰',
          serialNumber: 'ACTR/ACTROS',
          englishBrand: 'Mercedes-Benz'
        },
        {
          comissionNo: '4681990',
          model: 'Actros 3344',
          vin: 'WDAKHCAA5G0073128',
          engineNo: 'OM501LA 786762736728855',
          color: '红',
          assemblyDate: '2016/5/21',
          cocNo: 'A011250ACTRCK4DCR893ADSSDKK',

          vehicleProductionFiledName: '1戴姆勒沃尔特工厂',
          truckName: '半挂牵引车',
          vehicleManufacturer: '德国',
          chineseBrand: '梅德赛斯-奔驰',
          serialNumber: 'ACTR/ACTROS',
          englishBrand: 'Mercedes-Benz'
        },
      ],
      dataInfoAll: [
        {
          comissionNo: '1681990',
          model: 'Actros 3344',
          vin: 'WDAKHCAA5G0073128',
          engineNo: 'OM501LA 786762736728855',
          color: '红',
          assemblyDate: '2016/5/21',
          cocNo: 'A011250ACTRCK4DCR893ADSSDKK',

          vehicleProductionFiledName: '1戴姆勒沃尔特工厂',
          truckName: '半挂牵引车',
          vehicleManufacturer: '德国',
          chineseBrand: '梅德赛斯-奔驰',
          serialNumber: 'ACTR/ACTROS',
          englishBrand: 'Mercedes-Benz'
        },
        {
          comissionNo: '2681990',
          model: 'Actros 3344',
          vin: 'WDAKHCAA5G0073128',
          engineNo: 'OM501LA 786762736728855',
          color: '红',
          assemblyDate: '2016/5/21',
          cocNo: 'A011250ACTRCK4DCR893ADSSDKK',

          vehicleProductionFiledName: '1戴姆勒沃尔特工厂',
          truckName: '半挂牵引车',
          vehicleManufacturer: '德国',
          chineseBrand: '梅德赛斯-奔驰',
          serialNumber: 'ACTR/ACTROS',
          englishBrand: 'Mercedes-Benz'
        },
        {
          comissionNo: '3681990',
          model: 'Actros 3344',
          vin: 'WDAKHCAA5G0073128',
          engineNo: 'OM501LA 786762736728855',
          color: '红',
          assemblyDate: '2016/5/21',
          cocNo: 'A011250ACTRCK4DCR893ADSSDKK',

          vehicleProductionFiledName: '1戴姆勒沃尔特工厂',
          truckName: '半挂牵引车',
          vehicleManufacturer: '德国',
          chineseBrand: '梅德赛斯-奔驰',
          serialNumber: 'ACTR/ACTROS',
          englishBrand: 'Mercedes-Benz'
        },
        {
          comissionNo: '4681990',
          model: 'Actros 3344',
          vin: 'WDAKHCAA5G0073128',
          engineNo: 'OM501LA 786762736728855',
          color: '红',
          assemblyDate: '2016/5/21',
          cocNo: 'A011250ACTRCK4DCR893ADSSDKK',

          vehicleProductionFiledName: '1戴姆勒沃尔特工厂',
          truckName: '半挂牵引车',
          vehicleManufacturer: '德国',
          chineseBrand: '梅德赛斯-奔驰',
          serialNumber: 'ACTR/ACTROS',
          englishBrand: 'Mercedes-Benz'
        },
      ],
      dialogVisible: false,
      dialogDetails: {
        vehicleProductionFiledName: '',
        truckName: '',
        vehicleManufacturer: '',
        chineseBrand: '',
        serialNumber: '',
        englishBrand: ''
      }
    }
  },
  methods: {
    goSearch() {

    },
    showRowDetails(row, event, cloumn) {
      this.dialogVisible = true;
      this.dialogDetails.vehicleProductionFiledName = row.vehicleProductionFiledName;
      this.dialogDetails.truckName = row.truckName;
      this.dialogDetails.vehicleManufacturer = row.vehicleManufacturer;
      this.dialogDetails.chineseBrand = row.chineseBrand;
      this.dialogDetails.serialNumber = row.serialNumber;
      this.dialogDetails.englishBrand = row.englishBrand;
      console.log(row)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
.dataview_container {
  .el-form.searchCriteria {
    // display: flex;
    // flex-wrap: nowrap;
    .el-form-item {
      margin-bottom: 20px;
      margin-right: 0;
      height: 33px;
      &:last-child {
        float: right;
      }
      &>div {
        // display: flex;
        // flex-wrap: nowrap;
        .line {
          width: 11px;
          text-align: center;
        }
      }
      .el-col {
        width: 97px;
      }
      .el-button {
        padding: 9px 21px;
        border-radius: 0;
        span {
          font-size: 12px;
          margin-left: 11px;
        }
      }
    }
  }
  .el-dialog{
      width: 745px !important;
      .detail_form_inline{
          font-size: 0;
          .el-form-item{
              width: 100%;
              width: -moz-calc(~'50% - 5px');
              width: -webkit-calc(~'50% - 5px');
              width: calc(~'50% - 5px');
              margin: 0;
              height: 40px;
              padding-left: 20px;
              box-sizing: border-box;
              &.bg_gray_color{
                  background-color: #f3f3f3;
              }
              &:nth-child(2n-1){
                  margin-right: 10px;
              }
              label{
                  padding-left: 21px;
              }
          }
      }
  }
}
</style>
<style lang="less">
.dataview_container {
  .el-form.searchCriteria {
    .el-form-item {
      label {
        font-size: 12px;
        color: #323232;
        padding: 10px 0;
        vertical-align: middle;
      }
      &>div {
        line-height: 33px;
      }
      input {
        height: 33px;
        line-height: 33px;
        border-color: #e5e5e5;
        font-size: 12px;
        border-radius: 3px;
        &::-webkit-input-placeholder {
          color: #9d9d9d;
        }
        &::-moz-placeholder {
          color: #9d9d9d;
        }
        &:-moz-placeholder {
          color: #9d9d9d;
        }
        &:-ms-input-placeholder {
          color: #9d9d9d;
        }
      }
      .el-select {
        width: 80px;
        i {
          color: #434343;
          transform: translateY(-50%) rotateZ(180deg) scale(0.6, 1);
        }
      }
      .el-date-editor {
        i {
          opacity: 0;
        }
        input {
          padding-right: 10px;
        }
      }
    }
  }
  .el-dialog{
    .el-dialog__title{
        font-weight: normal;
    }
    .el-dialog__body{
      padding-top: 9px;
      padding-bottom: 35px;
      margin-top: 18px;
      border-top: 1px solid #e6e6e6;
      .el-form-item{
        .el-form-item__label, .el-form-item__content{
            font-size: 12px;
        }
      }
    }
  }
}
</style>