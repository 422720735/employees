<template>
    <div class="content">
        <div class="left-list">
            <a href="./index.html"><img src="../../assets/images/write_bg.png" alt=""/></a>
            <a href="./staff.html"><img src="../../assets/images/search_bg.png" alt=""/></a>
            <a href="./register.html" class="add-admin">新建管理员</a>
        </div>
        <form action="" class="right-content" style="background: url('../../assets/images/bg_t.png')">
            <div class="scroll">
                <input type="text" placeholder="姓名" name="name" class="name"/>
                <input type="text" placeholder="电话号"/>
                <input type="text" placeholder="工作经历" class="experience"/>
                <button type="button" class="addBtn add">添加工作经历</button>
                <label>备注</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
                <button type="submit" class="submit">确定</button>
            </div>
        </form>
    </div>
</template>

<style lang="scss" scoped>
    .container{width: 1200px;margin: 0 auto;}
    .login{height: 500px;position: absolute;top: 50%;margin-top: -250px;width: 1200px}
    .left-bg{width: 620px;float: left}
    .right-form{width: 470px;float: left;height: 220px;margin-top: 100px}
    .right-form input,.right-form button{width: 300px;height: 50px;line-height: 50px;border-radius: 4px;
        border: 1px solid #555;display: block;margin: 0 auto;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;}
    .right-form input{margin-top: 20px;padding-left: 50px;color: #999}
    .right-form input.user{margin-top: 20px;background: url("../../assets/images/user.png") no-repeat 10px 10px;}
    .right-form input.pass{margin-top: 20px;background: url("../../assets/images/lock.png") no-repeat 10px 10px;}
    .right-form input.psd{margin-top: 20px;background: url("../../assets/images/lock.png") no-repeat 10px 10px;}
    .right-form .tips{display: block;margin-left: 86px;color: #f72322;margin-top: 5px;font-size: 15px;}
    .right-form button{background: #44b2ed;
        margin-top: 30px;background: linear-gradient(90deg,#44b2ed,#4986e3 );border: 1px;
        -webkit-box-shadow:  1px 1px 50px #beddf7;
        -moz-box-shadow:  1px 1px 50px #beddf7;
        box-shadow:  1px 1px 50px #beddf7;
        color: #fff;font-size: 18px;font-family: "微软雅黑", Helvetica, Arial, sans-serif;  }
    .right-form a.register{display: inline-block;margin-left: 86px;margin-top: 5px}
    .right-form a.register:hover{text-decoration: underline}
    .content{height: 700px;position: absolute;top: 50%;margin-top: -350px;width: 500px;}
    .add-admin{background: #28d382;display: block;width: 280px;margin: 0 auto;border-radius: 4px;height: 50px;line-height: 50px;text-align: center;color: #fff;font-size: 18px}
    .add-admin:hover{color: #fff}
    .left-list{float: left;width: 500px;margin-top: 135px}
    .left-list img{width: 280px;display: block;margin: 0 auto 20px}
    .right-content{float: right;width: 700px;height: 700px;left: 500px;position: absolute;top: 50%;margin-top: -350px;}
    .right-content input,.right-content button{width: 400px;height: 46px;line-height: 46px;border-radius: 4px;
        border: 1px solid #555;display: block;margin: 0 auto 20px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;padding-left: 15px}
    .right-content textarea{display: block;height: 150px;width: 400px;margin: 0 auto 20px;border-radius: 4px}
    .right-content label{width: 400px;margin: 30px auto 10px;display: block;font-size: 16px}
    .right-content .name{margin-top: 50px}
    .right-content .submit{margin-bottom: 50px}
    .right-content input{color: #999}
    .right-content button{color: #fff;font-size: 18px;font-family: "微软雅黑", Helvetica, Arial, sans-serif;border: 1px}
    .right-content button.add{background: #44b2ed;background: linear-gradient(90deg,#44b2ed,#4986e3 );
        -webkit-box-shadow:  1px 1px 50px #beddf7;
        -moz-box-shadow:  1px 1px 50px #beddf7;
        box-shadow:  1px 1px 50px #beddf7;}
    .right-content button.submit{background: #ff3f40;background: linear-gradient(90deg,#ff3f40,#f72322 );
        -webkit-box-shadow:  1px 1px 50px #f5b1b1;
        -moz-box-shadow:  1px 1px 50px #f5b1b1;
        box-shadow:  1px 1px 50px #db8888;}

</style>