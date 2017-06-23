<template>
  <el-row class="details_container">
        <el-col :span="24" class="details_search">
            <label>Model：</label>
            <el-input placeholder="" v-model="modelName" name="model"></el-input>
            <el-button icon="search" class="search_btn" @click="getView">搜索</el-button>
        </el-col>
        <el-col :span="24" class="details_list">
            <el-table :data="cocDetails" ref="cocdetailsTable" stripe border max-height="350" style="width: 100%" @row-click="showRowDetails">
                <el-table-column width="176" prop="model" label="Model"></el-table-column>
                <el-table-column min-width="230" prop="cocNomber" label="COC No."></el-table-column>
                <el-table-column width="199" prop="generateTime" label="生成时间"></el-table-column>
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
        </el-col>
    </el-row>
</template>

<script>
export default {
    data() {
        return {
            modelName: '',
            // cocDetails用于显示，cocDetailsAll用于存放原始数据
            cocDetails: [
                {
                    model: 'Actros 3344',
                    cocNomber: 'OM501LAIV 354584998988C88',
                    generateTime: '2017/5/21 15:23',
                    
                    vehicleProductionFiledName: '1戴姆勒沃尔特工厂',
                    truckName: '半挂牵引车',
                    vehicleManufacturer: '德国',
                    chineseBrand: '梅德赛斯-奔驰',
                    serialNumber: 'ACTR/ACTROS',
                    englishBrand: 'Mercedes-Benz'
                },
                {
                    model: 'Actros 3344',
                    cocNomber: 'OM501LAIV 354584998988C88',
                    generateTime: '2017/5/21 15:23',
                    
                    vehicleProductionFiledName: '2戴姆勒沃尔特工厂',
                    truckName: '半挂牵引车',
                    vehicleManufacturer: '德国',
                    chineseBrand: '梅德赛斯-奔驰',
                    serialNumber: 'ACTR/ACTROS',
                    englishBrand: 'Mercedes-Benz'
                },
                {
                    model: 'Actros 3344',
                    cocNomber: 'OM501LAIV 354584998988C88',
                    generateTime: '2017/5/21 15:23',
                    
                    vehicleProductionFiledName: '3戴姆勒沃尔特工厂',
                    truckName: '半挂牵引车',
                    vehicleManufacturer: '德国',
                    chineseBrand: '梅德赛斯-奔驰',
                    serialNumber: 'ACTR/ACTROS',
                    englishBrand: 'Mercedes-Benz'
                },
                {
                    model: 'Actros 3344',
                    cocNomber: 'OM501LAIV 354584998988C88',
                    generateTime: '2017/5/21 15:23',
                    
                    vehicleProductionFiledName: '4戴姆勒沃尔特工厂',
                    truckName: '半挂牵引车',
                    vehicleManufacturer: '德国',
                    chineseBrand: '梅德赛斯-奔驰',
                    serialNumber: 'ACTR/ACTROS',
                    englishBrand: 'Mercedes-Benz'
                },
            ],
            cocDetailsAll: [
                {
                    model: 'Actros 3344',
                    cocNomber: 'OM501LAIV 354584998988C88',
                    generateTime: '2017/5/21 15:23',
                    
                    vehicleProductionFiledName: '1戴姆勒沃尔特工厂',
                    truckName: '半挂牵引车',
                    vehicleManufacturer: '德国',
                    chineseBrand: '梅德赛斯-奔驰',
                    serialNumber: 'ACTR/ACTROS',
                    englishBrand: 'Mercedes-Benz'
                },
                {
                    model: 'Actros 3344',
                    cocNomber: 'OM501LAIV 354584998988C88',
                    generateTime: '2017/5/21 15:23',
                    
                    vehicleProductionFiledName: '2戴姆勒沃尔特工厂',
                    truckName: '半挂牵引车',
                    vehicleManufacturer: '德国',
                    chineseBrand: '梅德赛斯-奔驰',
                    serialNumber: 'ACTR/ACTROS',
                    englishBrand: 'Mercedes-Benz'
                },
                {
                    model: 'Actros 3344',
                    cocNomber: 'OM501LAIV 354584998988C88',
                    generateTime: '2017/5/21 15:23',
                    
                    vehicleProductionFiledName: '3戴姆勒沃尔特工厂',
                    truckName: '半挂牵引车',
                    vehicleManufacturer: '德国',
                    chineseBrand: '梅德赛斯-奔驰',
                    serialNumber: 'ACTR/ACTROS',
                    englishBrand: 'Mercedes-Benz'
                },
                {
                    model: 'Actros 3344',
                    cocNomber: 'OM501LAIV 354584998988C88',
                    generateTime: '2017/5/21 15:23',
                    
                    vehicleProductionFiledName: '4戴姆勒沃尔特工厂',
                    truckName: '半挂牵引车',
                    vehicleManufacturer: '德国',
                    chineseBrand: '梅德赛斯-奔驰',
                    serialNumber: 'ACTR/ACTROS',
                    englishBrand: 'Mercedes-Benz'
                },
            ],
            dialogVisible:false, 
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
        getView() {
            var searchResult = [];
            for(var i = 0; i < this.cocDetailsAll.length; i++){
                if(this.cocDetailsAll[i].model.match(this.modelName)){
                    searchResult.push(this.cocDetailsAll[i]);
                }
            }
            this.cocDetails = searchResult;
        },
        showRowDetails(row, event, cloumn) {
            this.dialogVisible =true;
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

<style lang="less">
.details_container{
    .details_search{
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
        .el-button.search_btn{
            width: 92px;
            height: 34px;
            border-radius: 0;
            margin-left: 21px;
        }
    }
    .details_list{
        .el-dialog{
            width: 745px !important;
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
            .detail_form_inline{
                font-size: 0;
                .el-form-item{
                    width: 100%;
                    width: -moz-calc(~'50% - 5px');
                    width: -webkit-calc(~'50% - 5px');
                    width: calc(~'50% - 5px');
                    margin: 0;
                    height: 40px;
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
}
</style>
