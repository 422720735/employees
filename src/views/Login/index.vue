<template>
    <div class="container">
        <div class="login">
            <div class="left-bg">
                <img src="../../assets/images/bg.png" alt=""/>
            </div>
            <div class="right-form">
                <input type="text" class="user" placeholder="姓名" v-model="username"/>
                <input type="password" class="pass" placeholder="密码" v-model="password"/>
                <!--<span class="tips">登录失败</span>-->
                <button type="submit" @click="handlerAddUser">登录</button>
                <router-link to='/reg' class="register">还没账号?立即注册</router-link>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Prop, Vue, Watch} from 'vue-property-decorator';
    import http from '../../utils/http'
    @Component
    export default class HelloWorld extends Vue {
        //props
        @Prop() private msg!: string
        @Prop() private names!: string
        //data
        private txt: string = '1'
        private sum: number = 0
        private username: string = "";
        private password: string = "";
        private single: string = "";
        //computed
        get getTxt() {
            return this.txt
        }

        //methods
        private add() {
            this.sum++
            console.log(`sum : ${this.sum}`)
        }

        private handlerAddUser() {
            if ((this.username && this.username !== '') || (this.password && this.password !== '')) {
                http.post("http://192.168.1.103:8080/reg", {'username': '刘体勇', 'password': '123'}).then(res => {
                    console.log(res)
                })
                const config:string = '发送请求'
                this.$Message.info(config)
            }
        }

        //生命周期
        created() {}

        //watch
        @Watch('txt')
        changeTxt(newTxt: string, oldTxt: string) {
            console.log(`change txt: ${oldTxt} to ${newTxt}`)
        }
    }

</script>

<style scoped>
    .container {
        width: 1200px;
        margin: 0 auto;
    }

    .login {
        height: 500px;
        position: absolute;
        top: 50%;
        margin-top: -250px;
        width: 1200px
    }

    .left-bg {
        width: 620px;
        float: left
    }

    .right-form {
        width: 470px;
        float: left;
        height: 220px;
        margin-top: 100px
    }

    .right-form input, .right-form button {
        width: 300px;
        height: 50px;
        line-height: 50px;
        border-radius: 4px;
        border: 1px solid #555;
        display: block;
        margin: 0 auto;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .right-form input {
        margin-top: 20px;
        padding-left: 50px;
        color: #999
    }

    .right-form input.user {
        margin-top: 20px;
        background: url("../../assets/images/user.png") no-repeat 10px 10px;
    }

    .right-form input.pass {
        margin-top: 20px;
        background: url("../../assets/images/lock.png") no-repeat 10px 10px;
    }

    .right-form input.psd {
        margin-top: 20px;
        background: url("../../assets/images/lock.png") no-repeat 10px 10px;
    }

    .right-form .tips {
        display: block;
        margin-left: 86px;
        color: #f72322;
        margin-top: 5px;
        font-size: 15px;
    }

    .right-form button {
        background: #44b2ed;
        margin-top: 30px;
        background: linear-gradient(90deg, #44b2ed, #4986e3);
        border: 1px;
        -webkit-box-shadow: 1px 1px 50px #beddf7;
        -moz-box-shadow: 1px 1px 50px #beddf7;
        box-shadow: 1px 1px 50px #beddf7;
        color: #fff;
        font-size: 18px;
        font-family: "微软雅黑", Helvetica, Arial, sans-serif;
    }

    .right-form a.register {
        display: inline-block;
        margin-left: 86px;
        margin-top: 5px
    }

    .right-form a.register:hover {
        text-decoration: underline
    }
</style>