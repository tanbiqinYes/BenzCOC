<template>
  <el-table :data="users" stripe border max-height="300" style="width: 100%">
      <el-table-column prop="name" label="用户名"></el-table-column>
      <el-table-column width="200" prop="loginTime" label="登录时间"></el-table-column>
      <el-table-column width="200" prop="loginIp" label="登录IP"></el-table-column>
  </el-table>
</template>

<script>
export default {
  data () {
    return {
      users: [
        {
          name: '张三',
          loginTime: '2017年3月12日 15:30',
          loginIp: '114.255.10.169'
        },
        {
          name: '张三',
          loginTime: '2017年3月12日 15:30',
          loginIp: '114.255.10.169'
        },
        {
          name: '张三',
          loginTime: '2017年3月12日 15:30',
          loginIp: '114.255.10.169'
        },
        {
          name: '张三',
          loginTime: '2017年3月12日 15:30',
          loginIp: '114.255.10.169'
        },
        {
          name: '张三',
          loginTime: '2017年3月12日 15:30',
          loginIp: '114.255.10.169'
        },
        {
          name: '张三',
          loginTime: '2017年3月12日 15:30',
          loginIp: '114.255.10.169'
        },
        {
          name: '张三',
          loginTime: '2017年3月12日 15:30',
          loginIp: '114.255.10.169'
        },
        {
          name: '张三',
          loginTime: '2017年3月12日 15:30',
          loginIp: '114.255.10.169'
        },
        {
          name: '张三',
          loginTime: '2017年3月12日 15:30',
          loginIp: '114.255.10.169'
        },
        {
          name: '张三',
          loginTime: '2017年3月12日 15:30',
          loginIp: '114.255.10.169'
        },
        {
          name: '张三',
          loginTime: '2017年3月12日 15:30',
          loginIp: '114.255.10.169'
        },
      ]
    }
  }
}
</script>

<style>

</style>
