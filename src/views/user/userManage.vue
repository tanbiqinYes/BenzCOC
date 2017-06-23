<template>
    <el-row class="list_container">
        <el-col :span="24" class="user_search_add">
            <label>用户名：</label>
            <el-input placeholder="" v-model="inputName" name="username"></el-input>
            <el-button icon="search" class="search_btn" @click="getUsers">搜索</el-button>
            <router-link to="/usermanage/UserAdd">
                <el-button type="primary" class="add_btn">添加</el-button>
            </router-link>
        </el-col>
        <el-col :span="24" class="user_list">
            <el-table :data="users" stripe border max-height="350" style="width: 100%">
                <el-table-column min-width="200" prop="name" label="用户名"></el-table-column>
                <el-table-column width="125" prop="userState" label="状态" align="center">
                    <!--<template scope="scope">
                        <el-button type="danger" size="small" class="btn_state">停用</el-button>
                    </template>-->
                    <template scope="scope">
                        <el-button :type="scope.row.userState === '正常' ? 'info' : 'danger'" class="btn_state" :class="{stop_state:(scope.row.userState === '停用')}" @click="changeState(scope.row)">{{scope.row.userState}}</el-button>
                    </template>
                </el-table-column>
                <el-table-column width="204" prop="operation" label="操作" style="margin-left: 49px;">
                    <template scope="scope">
                        <router-link to="/usermanage/UserEdit">
                            <el-button @click="" type="text" class="btn_color">编辑</el-button>
                        </router-link>
                        <el-button @click.native.prevent="deleteRow(scope.$index, users)" type="text" class="btn_color btn_delete">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-col>
    </el-row>
</template>

<script>
export default {
  data () {
      return {
          inputName: '',
          users: [
              {
                  name: '张三',
                  userState: '正常',
              },
              {
                  name: '张三',
                  userState: '正常',
              },
              {
                  name: '李四',
                  userState: '正常',
              },
              {
                  name: '王五',
                  userState: '正常',
              },
              {
                  name: '张三',
                  userState: '停用',
              },
              {
                  name: '张三',
                  userState: '停用',
              },
              {
                  name: '张三',
                  userState: '正常',
              },
              {
                  name: '张三',
                  userState: '正常',
              },
          ],
          usersAll: [
              {
                  name: '张三',
                  userState: '正常',
              },
              {
                  name: '张三',
                  userState: '正常',
              },
              {
                  name: '李四',
                  userState: '正常',
              },
              {
                  name: '王五',
                  userState: '正常',
              },
              {
                  name: '张三',
                  userState: '停用',
              },
              {
                  name: '张三',
                  userState: '停用',
              },
              {
                  name: '张三',
                  userState: '正常',
              },
              {
                  name: '张三',
                  userState: '正常',
              },
          ]
      }
  },
  methods: {
      getUsers() {
        var searchResult = [];
        for(var i = 0; i < this.usersAll.length; i++){
            if(this.usersAll[i].name.match(this.inputName)){
                searchResult.push(this.usersAll[i]);
            }
        }
        this.users = searchResult;
      },
      changeState(row) {
          this.$confirm('请确认是否修改状态', '提示',{
              confirmButtonText: '确定',
              cancleButtonText: '取消',
              type: 'warning'
          }).then(() => {
              row.userState = (row.userState === '正常' ? '停用' : '正常');
              console.log(row)
              this.$message({
                  type: 'success',
                  message: '修改成功！'
              });
          }).catch(() => {
              this.$message({
                  type: 'info',
                  message: '取消修改！'
              })
          });
      },
      deleteRow (index, tableinfo) {
          this.$confirm('请确认是否删除', '提示',{
              confirmButtonText: '确定',
              cancleButtonText: '取消',
              type: 'warning'
          }).then(() => {
              tableinfo.splice(index, 1);
              this.$message({
                  type: 'success',
                  message: '删除成功！'
              });
          }).catch(() => {
              this.$message({
                  type: 'info',
                  message: '取消删除'
              })
          });
      },
  }
}
</script>

<style lang="less">
    .user_search_add {
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
            &.add_btn{
                float: right;
            }
        }
    }
    .user_list{
        .el-table{
            table{
                td{
                    font-size: 12px;
                    .el-button{
                        font-size: 12px;
                        &.btn_state{
                            height: 19px;
                            vertical-align: middle;
                            padding: 0 6px;
                            background: #47b6af;
                            border: none;
                            &.stop_state{
                                background: #da4938;
                            }
                        }
                        &.btn_color{
                            color: #71bfe3;
                            &.btn_delete{
                                margin-left: 50px !important;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
