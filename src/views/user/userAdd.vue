<template>
  <el-form label-width="149px" :model="formLabelInfo" ref="formLabelInfo" class="user_add_container">
    <el-form-item label="用户名" prop="name">
      <el-input v-model="formLabelInfo.name" class="right_box"></el-input>
    </el-form-item>
    <el-form-item label="状态">
      <el-select v-model="formLabelInfo.userState" placeholder="请选择"  class="right_box">
        <el-option label="正常" value="正常"></el-option>
        <el-option label="停用" value="停用"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="邮箱">
      <el-input v-model="formLabelInfo.email" class="right_box"></el-input>
    </el-form-item>
    <el-form-item label="创建日期">
      <div class="right_box create_date">{{formLabelInfo.date}}</div>
    </el-form-item>
    <el-form-item label="权限设置">
      <el-tree class="right_box" :data="permissionData" :props="defaultProps" show-checkbox @node-click="handleNodeClick"></el-tree>
    </el-form-item>
    <el-form-item class="button_box">
      <router-link to="/usermanage/index"><el-button icon="check">保存</el-button></router-link>
      <router-link to="/usermanage/index"><el-button class="cancle_button">取消</el-button></router-link>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    return {
      formLabelInfo: {
        name: '',
        userState: '',
        email: '',
        date: '',
        permission: []
      },
      // rules: {
      //   name: [
      //     { required: true, message: '请输入用户名', trigger: 'blur'}
      //   ],
      //   userState: [
      //     { required:true, message: '请选择状态', trigger: 'change'}
      //   ],
      //   email: [
      //     { required:true, message: '请输入邮箱地址', trigger: 'blur'},
      //     { type: 'email', message: '请输入正确的邮箱地址', trigger: 'blur, change'}
      //   ]
      // },
      permissionData: [
        {
          id: 1,
          label: 'COC数据生成',
          children: [
            {
              id: 11,
              label: '数据上传'
            },
            {
              id: 12,
              label: '数据处理'
            },
            {
              id: 13,
              label: '数据导出'
            }
          ]
        },
        {
          id: 2,
          label: '数据查看'
        },
        {
          id: 3,
          label: '字典维护'
        },
        {
          id: 4,
          label: '用户管理'
        },
        {
          id: 5,
          label: '登录日志'
        }
      ],
      defaultProps: {
          children: 'children',
          label: 'label'
        }
    }
  },
  methods: {
    handleNodeClick(data) {
      this.formLabelInfo.permission = data;
    },
    // submitForm(formName) {
    //   this.$refs[formName].validate((valid) => {
    //     if (valid) {
    //       alert('submit!');
    //     } else {
    //         console.log('error submit!!');
    //       return false;
    //     }
    //   });
    // },
  },
  mounted() {
    var newdate = new Date();
    this.formLabelInfo.date = (newdate.getFullYear() + '年' + (newdate.getMonth() +1) + '月' + newdate.getDate() + '日');
  }
}
</script>

<style lang="less">
.el-form.user_add_container{
  border: 1px solid #f3f3f3;
  .el-form-item{
    border-bottom: 1px solid #f3f3f3;
    margin: 0;
    &.button_box{
      padding: 13px 0;
      background: #f5f5f5;
      border-bottom: none;
      >div {
        font-size: 0;
      }
      .el-button{
        margin-left: 17px;
        padding: 10px 20px;
        background-color: #00adef;
        color: #fff;
        border: none;
        border-radius: 0;
        &.cancle_button{
          margin-left: 6px;
          background-color: #e5e5e5;
          color: #959595;
        }
      }
    }
    >label {
      padding-top: 28px;
      padding-right: 14px;
      color: #3b3b3b;
    }
    .right_box{
      box-sizing: border-box;
      line-height: 33px;
      padding: 20px 15px;
      border-left: 1px solid #f3f3f3;
      color: #666666;
      font-size: 14px;
      &.el-tree{
        border-top: none;
        border-right: none;
        border-bottom: none;
        // max-height: 200px;
        // overflow-y: auto;
      }
      input{
        width: 239px;
        height: 33px;
        border: 1px solid #ededed;
        border-radius: 0;
        color: #666666;
      }
    }
  }
}
.el-tree-node__expand-icon{
  width: 13px;
  height: 13px;
  border: none;
  background: url('../../assets/tree-expand-icon.png');
  margin-right: 9px;
  margin-left: 1px;
  &.expanded{
    background: url('../../assets/tree-shrink-icon1.png');
  }
  &.is-leaf{
    background: transparent;
    // background: url('../../assets/tree-shrink-icon.png');
  }
}
.el-checkbox__input{
  .el-checkbox__inner{
    border: 1px solid #bababa;
    border-radius: 0;
    width: 15px;
    height: 15px;
    &:hover{
      border-color: #bababa;
    }
  }
  &.is-checked {
    .el-checkbox__inner{
      border-color: #bababa;
      background: url('../../assets/tree-checked-node.png') left top no-repeat;   
      background-size: 100% 100%;
      &::after{
            transform: rotate(45deg) scaleY(0);
      }
    }
  }
  &.is-focus {
    .el-checkbox__inner{
      border-color: #bababa;
    }
  }
  &.is-indeterminate{
    .el-checkbox__inner{
      border-color: #bababa;
      background: url('../../assets/tree-indeterminate-node.png') left top no-repeat;   
      background-size: 13px 13px;
      &::before{
        border: none;
      }
    }
  }
}
.el-input__icon{
  width: 17px;
  border-right: 1px solid #ededed;
}
.el-select .el-input .el-input__icon{
      color: #b1b1b1;
      // transform: translateY(-50%)
      &.is-reverse{
        transform: translateY(-50%) rotateZ(180deg);
      }
}
.el-icon-caret-top:before{
  content: '\e603'
}
</style>
