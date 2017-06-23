<template>
    <div class="loginWrap">
        <div class="login">
            <h2>COCO数据收集登录</h2>
            <el-form :label-position="labelPosition" :model="formLabelAlign">
                <el-form-item>
                    <div class="icon">
                        <i class="fa fa-user fa-fw"></i>
                    </div>
                    <el-input placeholder="用户名"></el-input>
                </el-form-item>
                <el-form-item>
                    <div class="icon">
                        <i class="fa fa-unlock-alt fa-fw"></i>
                    </div>
                    <el-input placeholder="密码"></el-input>
                </el-form-item>
                <el-form-item>
                    <div class="icon">
                        <i class="fa fa-mobile-phone fa-lg fa-fw"></i>
                    </div>
                    <el-input placeholder="手机号码"></el-input>
                </el-form-item>
                <el-form-item class="msg">
                    <div class="icon">
                        <i class="fa fa-puzzle-piece fa-fw"></i>
                    </div>
                    <el-input placeholder="验证码"></el-input>
                    <el-button type="primary" @click="onSubmit">获取验证码</el-button>
                </el-form-item>
                <el-form-item class="btn">
                    <el-button type="primary" @click.native.prevent="handleSubmit">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            labelPosition: 'left',
            formLabelAlign: {
                name: '',
                region: '',
                type: ''
            }
        };
    },
    methods: {
        handleSubmit(){
           this.$router.push({path:'/generate'})
        },
        onSubmit(){}
    }
}
</script>

<style lang="less" scope>
.loginWrap {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #555;
    background: url(../assets/login_bg.jpg) no-repeat center center;
    background-size:100% 100%; 
}

.login {
    box-sizing: border-box;
    width: 400px;
    margin: 0 auto;
    padding: 0 50px 40px;
    background: rgba(255, 255, 255, 0.4);
    h2 {
        font-size: 22px;
        text-align: center;
        padding: 30px 0;
        color: #fff;
    }
    .el-form-item {
        margin-bottom: 16px;
        position: relative;
    }
    .el-form-item__content {
        display: flex;
        align-items: center;
        position: relative;
        box-sizing: border-box;
        background: #fff;
        .icon{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 40px;
            color:#cbccd0;
        }
    }

    .msg {
        button {
            padding: 10px 10px;
            border-radius: 0;
            height: 36px;
            box-sizing: border-box; 
            //    background: #4a4a4a;
            //    border:1px solid #4a4a4a;
        }
    }
    .btn {
        margin-top: 25px;
        .el-button {
            padding: 15px;
            width: 100%;
            border-radius:0;
        }
    }
    .el-input {
        width: auto;
        flex:1;
        box-sizing: border-box;
        background: #fff;
        border: none;
        input {
            border: none;
            padding-left:0;
        }
    }
}
</style>
