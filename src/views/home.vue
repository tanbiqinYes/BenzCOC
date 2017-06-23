<template>
    <el-row class="container">
        <!-- header -->
        <el-col :span="24" class="header">
            <el-col :span="8" class="logo">
                <img src="../assets/logo.png" />
            </el-col>
            <el-col :span="8" class="sys_name">CoC数据收集</el-col>
            <el-col :span="8" class="userinfo">
                欢迎您：
                <span>{{userName}}</span>
                <a @click="loginOut">
                    <img src="../assets/login-out.png" />
                </a>
            </el-col>
        </el-col>
        <!-- main -->
        <el-col :span="24" class="main">
            <aside class="menu_expanded" :class="collapsed?'menu-collapsed':''">
                <!--左侧导航菜单-->
                <div class="menu_btn" :class="collapsed?'menu_btn_collasp':''">
                    <div class="menu_btn_box" @click="slideToMal">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <el-menu v-show="collapsedMain" :default-active="$route.path" class="no_collapsed el-menu-vertical-demo" @open="handleopen" @close="handleclose" @select="handleselect" unique-opened router theme="dark">
                    <template v-for="(item, index) in $router.options.routes" v-if="!item.hidden">
                        <el-submenu :index="index+''" v-if="!item.leaf">
                            <template slot="title" class="  ">
                                <i :class="item.iconClass"></i>{{item.name}}</template>
                            <el-menu-item v-for="child in item.children" :index="item.path+'/'+child.path" :key="child.path" v-if="!child.hidden">{{child.name}}</el-menu-item>
                        </el-submenu>
                        <el-menu-item class=" " v-if="item.leaf&&item.children.length>0" :index="item.path+'/'+item.children[0].path">
                            <i :class="item.iconClass"></i>{{item.children[0].name}}</el-menu-item>
                    </template>
                </el-menu>
                <!--导航菜单折叠-->
              
                <ul class="el-menu collapsed" v-show="collapsed" ref="menuCollapsed">
                        <li v-for="(item,index) in $router.options.routes" v-if="!item.hidden" class="el-submenu">
                            <template v-if="!item.leaf">
                                <div class="el-submenu__title" style="padding-left: 20px;" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)">
                                    <i :class="item.iconClass"></i>
                                </div>
                                <ul class="el-menu submenu" :class="'submenu-hook-'+index" @mouseover="showMenu(index,true)" @mouseout="showMenu(index,false)">
                                    <li v-for="child in item.children" v-if="!child.hidden" :key="child.path" class="el-menu-item" style="padding-left: 40px;" :class="$route.path==child.path?'is-active':''" @click="$router.push(item.path+'/'+child.path)">{{child.name}}</li>
                                </ul>
                            </template>
                            <template v-else>
                                <li class="el-submenu">
                                    <div class="el-submenu__title el-menu-item " style="padding-left: 20px;height: 56px;line-height: 56px;padding: 0 20px;" :class="$route.path==item.children[0].path?'is-active':''" @click="$router.push(item.path+'/'+item.children[0].path)">
                                        <i :class="item.iconClass"></i>
                                    </div>
                                </li>
                            </template>
                        </li>
                    </ul>
            </aside>
            <section class="content_container">
                <el-col :span="24" class="breadcrumb_container">
                    <h2 class="title">{{$route.name}}</h2>
                    <el-col :span="24">
                        <el-breadcrumb separator=">" class="breadcrumb_inner" :style="breadcrumbImg">
                            <el-breadcrumb-item v-for="(item, index) in $route.matched" v-if="item.name" :key="item.path">
                                {{ item.name }}
                            </el-breadcrumb-item>
                        </el-breadcrumb>
                    </el-col>
                </el-col>
                <el-col :span="24">
                    <transition name="fade" mode="out-in">
                        <router-view></router-view>
                    </transition>
                </el-col>
            </section>
        </el-col>
    </el-row>
</template>
<script>
export default {
    data() {
        return {
            userName: 'administrator',
            breadcrumbImg: {
                background: '#f6f6f6 url(' + require('../assets/logoHome.png') + ') no-repeat',
                backgroundPosition: '11px 10px'
            },
            collapsed: false,
            collapsedMain: true
        }

    },
    methods: {
        handleopen() {
            //console.log('handleopen');
        },
        handleclose() {
            //console.log('handleclose');
        },
        handleselect: function (a, b) {
        },
        loginOut() {
            var _this = this;
            this.$confirm('确认退出吗？', '提示', {
                // 取默认值
                closeOnClickModal: false
            }).then(() => {
                sessionStorage.removeItem('');
                _this.$router.push('/login');
            }).catch(() => {})
        },
        slideToMal() {
            this.collapsed = !this.collapsed;
            this.collapsedMain = !this.collapsedMain;

        },
        showMenu(i, status) {
            // console.log(this.$refs.menuCollapsed)
            this.$refs.menuCollapsed.getElementsByClassName('submenu-hook-' + i)[0].style.display = status ? 'block' : 'none';
        }

    },
    mounted() {
        var user = sessionStorage.getItem('user');
        if (user) {
            user = JSON.parse(user);
            this.userName = user.name || ''
        }
    }
}
</script>
<style scoped lang="less">
.container {
    position: absolute;
    top: 0px;
    bottom: 0px;
    width: 100%;
    .header {
        height: 45px;
        line-height: 45px;
        background-color: #1f1f1f;
        color: #f6f6f6;
        .logo {
            height: 45px;
            padding-left: 12px;
            padding-top: 6px;
            img {
                width: 144px;
            }
        }
        .sys_name {
            text-align: center;
            font-size: 17px;
        }
        .userinfo {
            text-align: right;
            padding-right: 32px;
            color: #cbcbcb;
            span {
                font-family: Arial;
                color: #07acf0;
            }
            a{
                cursor: pointer;
                margin-left: 18px;
                
                img {
                    vertical-align: middle;
                }
            }
        }
    }
    .main {
        display: flex;
        position: absolute;
        top: 45px;
        bottom: 0;
        aside {
            flex: 0 0 235px;
            background: #3d3d3d;
            &.menu-collapsed {
                flex: 0 0 60px;
                width: 60px;
            }
            .menu_btn {
                height: 50px;
                padding-top: 15px;
                .menu_btn_box {
                    margin: 0 0 0 186px;
                    width: 30px;
                    height: 20px;
                    padding-top: 7px;
                    background: #2c2c2c;
                    -webkit-border-radius: 4px;
                    border-radius: 4px;
                    cursor: pointer;
                    span {
                        display: block;
                        width: 16px;
                        height: 1px;
                        background: #696969;
                        margin: 3px auto;
                        &:nth-child(1) {
                            margin-top: 0px;
                        }
                    }
                }
            }
            .menu_btn_collasp {
                margin: 0;
                display: flex;
                justify-content: center;
                .menu_btn_box {
                    margin: 0
                }
            }
            .no_collapsed {
                background: #3d3d3d;
                border-bottom: 1px solid #484848;
                .el-submenu{
                    border-top: 1px solid #484848;
                     [class^=fa]{
                        vertical-align: baseline;
                        margin-right: 10px;
                        color: #a8a8a8;
                    }
                    &.is-active{
                        background: url(../assets/menuitem-actived-bg.png) left top no-repeat;
                        [class^=fa]{
                            color: #fff;
                        }
                    }
                    .el-menu{
                        .el-menu-item{
                            background: #3d3d3d;
                            color: #bdbdbd;
                            height: 33px;
                            line-height: 33px;
                            &.is-active{
                                background-color: #474747;
                            }
                        }
                    }
                }
                &>.el-menu-item{
                    background: #3d3d3d;
                    color: #f6f6f6;
                    border-top: 1px solid #484848;
                    height: 40px;
                    line-height: 40px;
                    [class^=fa]{
                        vertical-align: baseline;
                        margin-right: 10px;
                        color: #a8a8a8;
                    }
                    &.is-active{
                        background: url(../assets/menuitem-actived-bg.png) left top no-repeat;
                        border-top: none;
                        [class^=fa]{
                            color: #fff;
                        }
                    }
                }
            }
            .collapsed {
                background: #3d3d3d;
                .el-submenu {
                    .el-submenu__title {
                        position: relative;
                        color: #bfcbd9;
                        &:hover{
                            background: #bfcbd9;
                            color:#3d3d3d;
                        }
                    }
                }
                .submenu {
                    position: absolute;
                    top: 0px;
                    left: 60px;
                    z-index: 99999;
                    height: auto;
                    display: none;
                }
            }
        }
        .content_container {
            padding: 20px;
            overflow-y: auto;
            flex: 1;
            .breadcrumb_container {
                margin-bottom: 22px;
                .title {
                    width: 100%;
                    margin: 9px 0 20px 6px;
                    font-size: 21px;
                    font-weight: normal;
                    color: #000;
                }
                .breadcrumb_inner {
                    height: 37px;
                    line-height: 37px;
                    padding-left: 43px;
                    font-size: 14px;
                    color: #adadad !important;
                }
            }
        }
    }
}
</style>
<style lang="less">
    // .container .main .aside.no_collapsed {
            .el-menu--dark {
                .el-submenu__title{
                    color: #f6f6f6;
                    height: 40px;
                    line-height: 40px;
                    &:hover{
                        background-color: transparent;
                    }
                }
                .el-submenu .el-menu{
                    padding: 7px 0 !important;
                    background: #3d3d3d;
                }
            }
    // }
</style>