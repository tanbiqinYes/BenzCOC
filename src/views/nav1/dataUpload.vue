<template>
  <div class="uploadFile">
  	<table class="uploadTab" cellpadding="0" cellspacing="0" border="0">
  		<tr>
  			<td class="optionName">处理规则</td>
  			<td>
          <div class="rules">
    				<template>
  				  <el-select v-model="selectedRule"  icon="check" placeholder="规则1">
  				    <el-option
  				      icon="check"
  				      v-for="item in options"
  				      :key="item.value"
  				      :label="item.label"
  				      :value="item.value">
  				    </el-option>
  				  </el-select>
  				</template>
          </div>
  			</td>
  		</tr><tr>
  			<td class="optionName">选择AFAB数据</td>
  			<td>
  				<el-input
				  placeholder="请选择文件"
				  :on-icon-click="handleIconClick">
				</el-input>
  				<el-upload
				  class="upload-demo"
				  ref="upload"
				  action="https://jsonplaceholder.typicode.com/posts/"
				  list-type="text"
				  :before-upload="beforeUpload1"
				  :on-preview="handlePreview"
				  :on-remove="handleRemove"
				  :file-list="flie_AFAB"
				  :auto-upload="false">
				  <el-button slot="trigger" type="primary" v-bind:class="{ hideBtn: selectedFile1 }" v-on:click="selected1()">选取文件</el-button>
				  <el-button slot="trigger" class="reselect" v-bind:class="{ hideBtn: !selectedFile1 }">重选</el-button>
				  <el-button class="remove" v-bind:class="{ hideBtn: !selectedFile1 }">移除</el-button>
				</el-upload>
  			</td>
  		</tr>
  		<tr>
  			<td class="optionName">选择WINGS数据</td>
  			<td>
  				<el-input
				  placeholder="请选择文件"
				  :on-icon-click="handleIconClick">
				</el-input>
  			<el-upload
				  class="upload-demo"
				  ref="upload"
				  action="https://jsonplaceholder.typicode.com/posts/"
				  list-type="text"
				  :before-upload="beforeUpload2"
				  :on-preview="handlePreview"
				  :on-remove="handleRemove"
          :file-list="flie_WINGS"
				  :auto-upload="false">
				  <el-button slot="trigger" type="primary"  v-bind:class="{ hideBtn: selectedFile2 }" v-on:click="selected2()">选取文件</el-button>
				  <el-button slot="trigger" class="reselect" v-bind:class="{ hideBtn: !selectedFile2 }">重选</el-button>
				  <el-button class="remove" v-bind:class="{ hideBtn: !selectedFile2 }">移除</el-button>
				</el-upload>
  			</td>
  		</tr>
  		<tr class="tabBottom">
  			<td class="optionName"></td>
  			<td>
  				<el-button type="primary"  @click="submitUpload(); open()">上传并计算</el-button>
  				<el-button type="primary" class="cancel">取消</el-button>
  			</td>
  		</tr>
  	</table>
  </div>
</template>

<script>
  export default {
  	 data() {
      return {
      	selectedFile1: true,
      	selectedFile2: false,
        options: [{
          value: '规则1',
          label: '规则1'
        }, {
          value: '规则2',
          label: '规则2'
        }, {
          value: '规则3',
          label: '规则3'
        }],
        selectedRule: '规则1',
        fileName: '123文件名',
        flie_AFAB: [],
        flie_WINGS: []
      }
    },
    methods: {
    	handleIconClick(ev) {
	      console.log(ev);
	    },
	    selected1() {
	    	//this.selectedFile1 = !this.selectedFile1;
	    },
	    selected2() {
	    	//this.selectedFile2 = !this.selectedFile2;
	    },
	    beforeUpload1(file) {
	    	console.log("beforeUpload");
	    	this.selectedFile1 = !this.selectedFile1;
	    },
	    beforeUpload2(file) {
	    	console.log("beforeUpload");
	    	this.selectedFile2 = !this.selectedFile2;
	    },
	    submitUpload() {
          this.$refs.upload.submit();
          this.$refs.upload.clearFiles();
      },
      handleRemove(file, fileList) {
	        //console.log(this.flie_WINGS[0]);
        console.log(file);
        //this.$refs.upload.clearFiles();
  		},
  		handlePreview(file) {
  			console.log(file);
  		},
		open() {
        this.$alert('导入数据格式错误！导入失败！', '', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      }
    }
  }
</script>

<style lang="less" rel="stylesheet/less" scoped>

	.el-button+.el-button{ margin-left: 0;}
  .uploadTab{
  	width: 100%;
  	border-collapse: collapse;
    th{
      font-weight: bold;
    }
  	td{
      padding:20px 0;
  		border: 1px solid #f3f3f3;
  		padding-left: 14px;
  		box-sizing: border-box;	
      font-size: 0;
  		&.optionName{
  			text-align: right;
  			width: 145px;
  			padding-right: 14px;
        font-size: 14px;
  		}
      .rules{
        height: 36px;
        position: relative;
      }
  		.el-input{
  			width: 205px;
        height: 36px;
        line-height: 36px;
  			border-radius: 0 !important;
  			input{
  				border-radius: 0;
  			}

  		}

  		.upload-demo{
  			display: inline-block;
  		}
  		.hideBtn{
  			display: none;
  		}
  	}
    .el-upload-list{
      display: none;
    }
    .el-button{
      background: #00adef;
      border: none;
      min-width: 70px;
      border: 1px solid #00adef;
      &.reselect{
        background: #e5e5e5;
        border: 1px solid #e5e5e5;
        color: #686868;
      }
      &.remove{
        background: #d84b39;
        border: 1px solid #d84b39;
        color: #FFF;
      }
      &.cancel{
        background: #e5e5e5;
        border: 1px solid #e5e5e5;
        color: #959595;
        margin-left: 6px;
      }
    }
  	.tabBottom{
  		background-color: #f6f6f6;
  	}
  	
  }
</style>
<style lang="less">
  td,
  input,
  button{
    border-radius: 0 !important;
    font-family: '宋体';
  }
  input,
  .el-input__inner{
    border: 1px solid #ededed;
  }
  .el-input__inner{
    border-radius: 0;
    padding: 0 13px;
  }
  .el-select{
    width: 240px;
    .el-input{
      .el-input__icon{
        width: 24px;
        color:#a7a7a7;
        color:transparent;
        border-right: 1px solid #ededed;
        transform: translateY(-50%) rotateZ(180deg) scale(0.6, 1);
        &.is-reverse{
          transform: translateY(-50%) rotateZ(180deg) scale(0.6, 1);
        }
        &:before {
            content: "\E607";
        }
      }
    } 
  }
</style>