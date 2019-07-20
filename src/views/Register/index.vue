<template>
    <div class="container">
        <div class="reg">
            <h3>新建管理员</h3>
            <div class="form-group">
                <label class="label">姓名</label>
                <div class="form-input">
                    <input type="text" />
                </div>
            </div>
            <div class="form-group">
                <label class="label">手机号</label>
                <div class="form-input">
                    <input type="text" />
                </div>
            </div>
            <div class="form-group">
                <label class="label">密码</label>
                <div class="form-input">
                    <input type="password" />
                </div>
            </div>
            <div class="form-group">
                <label class="label">职位</label>
                <div class="form-input">
                    <p><label><input type="radio" name="position"/>经理</label></p>
                    <p><label><input type="radio" name="position"/>经理</label></p>
                    <p><label><input type="radio" name="position"/>经理</label></p>
                </div>
            </div>
            <button type="submit">注册</button>
        </div>
    </div>
</template>



<style lang="scss" scoped>
    .container{width: 1200px;margin: 0 auto;}
    .reg{height: 700px;width: 700px;background: #f5f5f5;border-radius: 15px;margin: -350px 0 0 -350px;position: absolute;top: 50%;left: 50%}
    .reg h3{font-size: 32px;text-align: center;margin: 70px auto 50px;color: #44b2ed}
    .reg .form-group{height: 50px;width: 700px}
    .reg .form-group .label{width: 200px;display: block;float: left;line-height: 36px;font-size: 16px;text-align: right;margin-right: 15px}
    .reg .form-input{width: 300px;float: left;}
    .reg .form-group .form-input input[type=text],.reg .form-group input[type=password]{
        width: 300px;border-radius: 4px;border: 1px solid #666;height: 36px;line-height: 36px;left: 50px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;padding-left: 15px}
    .reg .form-group .form-input p{line-height: 36px}
    .reg .form-group .form-input p input[type=radio]{margin-right: 10px}
    .reg button{margin-left: 215px;width: 300px;height: 36px;border-radius: 3px;border: 1px;margin-top: 10px;
        background: #44b2ed;background: linear-gradient(90deg,#44b2ed,#4986e3 );
        -webkit-box-shadow:  1px 1px 50px #beddf7;
        -moz-box-shadow:  1px 1px 50px #beddf7;
        box-shadow:  1px 1px 50px #beddf7;color: #fff;font-size: 16px;font-family: "微软雅黑"}
</style>