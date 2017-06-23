<template>
	<div class="generate">
		<el-row type="flex" class="row-bg" justify="center">
		  <el-col :span="6">
			  <div class="grid-content bg-purple bg-purple-first">	
			  <router-link to="/generate/dataUpload">
					  <img src="../assets/upload.png" />
				  	<p class="title">数据上传<p/>
				  	<p class="content">{{content}}</p>
        </router-link>
			  </div>
		  </el-col>
		  <el-col :span="6">
			  <div class="grid-content bg-purple-light">
			   <router-link to="/generate/dataHandling">	
					    <img src="../assets/treating.png" />
			  	    <p class="title">数据处理<p/>
			  	    <p class="content">{{content}}</p>
		  	  </router-link>
			  </div>
		  </el-col>
		  <el-col :span="6">
			  <div class="grid-content bg-purple bg-purple-last">
			  	<router-link to="/generate/dataExport">
				    <img src="../assets/export.png" />
				  	<p class="title">数据导出<p/>
				  	<p class="content">{{content}}</p>
			    </router-link>
			  </div>
		  </el-col>
       </el-row>
   </div>
	
</template>

<script>
  export default {
  	data() {
        return {
            content: '在此处上传新的数据在此处上传新的数据'
            
        };
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>
	.generate{
        width:100%;
        background: #f6f6f6;
        height: 300px;          
	}
  .el-col-6{
      width:27%;
  }
  .el-col {
  	.bg-purple-first{
  		border-right: 1px solid #e7e7e7;
  	}
  	.bg-purple-last{
  		border-left: 1px solid #e7e7e7;
  	}
  }
  .grid-content {
   text-align: center;
    .title{
    	font-size: 16px;
	    color: #5a6a79;
	    font-weight: bold;
	    line-height: 32px;
    }
    .content{
    	color: #919296;
	    font-size: 13px;
	    line-height: 20px;
    }
  }
  .row-bg {
   padding: 65px 0;
  }
  a{
  	display: block;
  	margin-right: 20px;
    margin-left: 20px;
  }
</style>
