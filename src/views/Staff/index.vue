<template>
    <div>
        <div class="container">
            <div class="content">
                <div class="left-list">
                    <a href="./index.html"><img src="../../assets/images/write_bg.png" alt=""/></a>
                    <a href="./staff.html"><img src="../../assets/images/search_bg.png" alt=""/></a>
                    <a href="./register.html" class="add-admin">新建管理员</a>
                </div>
                <form action="" class="right-content" style="background: url('../../assets/images/bg_b.png')">
                    <div class="search">
                        <input type="text"/>
                        <a href="javascript:;"><img src="../../assets/images/search.png" alt=""/></a>
                    </div>
                    <table class="table">
                        <tbody>
                        <tr>
                            <td>姓名: <span>张定发</span></td>
                            <td>电话: <span>12312312312</span></td>
                            <td class="operate">
                                <a href="javascript:;" class="remark">添加备注</a>
                                <a href="javascript:;" class="edit">编辑</a>
                                <a href="javascript:;" class="detail">详情</a>
                            </td>
                        </tr>
                        <tr>
                            <td>姓名: <span>张定发</span></td>
                            <td>电话: <span>12312312312</span></td>
                            <td class="operate">
                                <a href="" class="remark">添加备注</a>
                                <a href="" class="edit">编辑</a>
                                <a href="" class="detail">详情</a>
                            </td>
                        </tr>
                        <tr>
                            <td>姓名: <span>张定发</span></td>
                            <td>电话: <span>12312312312</span></td>
                            <td class="operate">
                                <a href="" class="remark">添加备注</a>
                                <a href="" class="edit">编辑</a>
                                <a href="" class="detail">详情</a>
                            </td>
                        </tr>
                        <tr>
                            <td>姓名: <span>张定发</span></td>
                            <td>电话: <span>12312312312</span></td>
                            <td class="operate">
                                <a href="" class="remark">添加备注</a>
                                <a href="" class="edit">编辑</a>
                                <a href="" class="detail">详情</a>
                            </td>
                        </tr>
                        <tr>
                            <td>姓名: <span>张定发</span></td>
                            <td>电话: <span>12312312312</span></td>
                            <td class="operate">
                                <a href="" class="remark">添加备注</a>
                                <a href="" class="edit">编辑</a>
                                <a href="" class="detail">详情</a>
                            </td>
                        </tr>
                        <tr>
                            <td>姓名: <span>张定发</span></td>
                            <td>电话: <span>12312312312</span></td>
                            <td class="operate">
                                <a href="" class="remark">添加备注</a>
                                <a href="" class="edit">编辑</a>
                                <a href="" class="detail">详情</a>
                            </td>
                        </tr>
                        <tr>
                            <td>姓名: <span>张定发</span></td>
                            <td>电话: <span>12312312312</span></td>
                            <td class="operate">
                                <a href="" class="remark">添加备注</a>
                                <a href="" class="edit">编辑</a>
                                <a href="" class="detail">详情</a>
                            </td>
                        </tr>
                        <tr>
                            <td>姓名: <span>张定发</span></td>
                            <td>电话: <span>12312312312</span></td>
                            <td class="operate">
                                <a href="" class="remark">添加备注</a>
                                <a href="" class="edit">编辑</a>
                                <a href="" class="detail">详情</a>
                            </td>
                        </tr>
                        <tr>
                            <td>姓名: <span>张定发</span></td>
                            <td>电话: <span>12312312312</span></td>
                            <td class="operate">
                                <a href="" class="remark">添加备注</a>
                                <a href="" class="edit">编辑</a>
                                <a href="" class="detail">详情</a>
                            </td>
                        </tr>
                        <tr>
                            <td>姓名: <span>张定发</span></td>
                            <td>电话: <span>12312312312</span></td>
                            <td class="operate">
                                <a href="" class="remark">添加备注</a>
                                <a href="" class="edit">编辑</a>
                                <a href="" class="detail">详情</a>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div class="page"></div>
                </form>
            </div>
        </div>


        <div class="modal modal-remark">
            <div class="modal-title">
                <h4>新增备注</h4>
            </div>
            <div class="modal-body">
                <div class="modal-body-content">
                    <form class="layui-form">
                        <div class="layui-form-item">
                            <label class="layui-form-label">备注信息</label>
                            <div class="layui-input-inline">
                                <textarea name=""  rows="5" class="layui-textarea" style="width: 280px"></textarea>
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <div class="layui-input-block" style="margin-top:40px">
                                <button type="submit" class="layui-btn layui-btn-normal">确定</button>
                                <button type="reset" class="layui-btn layui-btn-danger close">取消</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="modal modal-edit">
            <div class="modal-title">
                <h4>编辑</h4>
            </div>
            <div class="modal-body">
                <div class="modal-body-content">
                    <form class="layui-form">
                        <div class="layui-form-item">
                            <label class="layui-form-label">姓名</label>
                            <div class="layui-input-inline">
                                <input type="text" name="" placeholder="请输入" class="layui-input" style="width: 280px">
                            </div>
                        </div>
                        <div class="layui-form-item">
                            <label class="layui-form-label">手机号</label>
                            <div class="layui-input-inline">
                                <input type="text" name="" placeholder="请输入" class="layui-input" style="width: 280px">
                            </div>
                        </div>
                        <div class="layui-form-item" style="margin-top:40px">
                            <div class="layui-input-block">
                                <button type="submit" class="layui-btn layui-btn-normal">确定</button>
                                <button type="reset" class="layui-btn layui-btn-danger close">取消</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <div class="modal modal-detail">
            <div class="modal-title">
                <a href="javascript:;" class="closeBtn"><img src="../../assets/images/close.png" alt=""/></a>
            </div>
            <div class="modal-body">
                <div class="modal-body-content">
                    <div class="left">
                        <img src="../../assets/images/icon.png" alt=""/>
                        <div class="left-b">
                            <p><label>姓名</label><span>李狗蛋</span></p>
                            <p><label>电话号</label><span>123213123123</span></p>
                            <p><label>工作经历</label><span>南京垦荒人科技有限公司</span></p>
                            <p><label>工作经历</label><span>南京垦荒人科技有限公司</span></p>
                            <p><label>工作经历</label><span>南京垦荒人科技有限公司</span></p>
                        </div>
                    </div>
                    <div class="right">
                        <ul class="list-remark">
                            <li class="list-remark-item">
                                <p class="list-remark-item-title">历史备注&nbsp;&nbsp;&nbsp;&nbsp;操作人: <span>张三</span></p>
                                <textarea class="list-remark-item-content" readonly>备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注</textarea>
                            </li>
                            <li class="list-remark-item">
                                <p class="list-remark-item-title">历史备注&nbsp;&nbsp;&nbsp;&nbsp;操作人: <span>张三</span></p>
                                <p class="list-remark-item-content">备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注</p>
                            </li>
                            <li class="list-remark-item">
                                <p class="list-remark-item-title">历史备注&nbsp;&nbsp;&nbsp;&nbsp;操作人: <span>张三</span></p>
                                <p class="list-remark-item-content">备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注备注</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

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

    .right-content .search{width: 400px;height: 34px;line-height: 34px;border-radius: 17px;margin: 30px auto;background: #fff;}
    .right-content .search input{height: 34px;border: none;line-height: 34px;border-radius: 17px;width: 340px;margin-left: 20px; float: left;
    }
    .right-content .search a{display: block;float: left;}
    .right-content .search a img{width: 28px;height: 28px}

    .right-content .table{width: 600px;margin: 0 0 0 60px}
    .right-content .table tr{width: 100%;border-bottom: 1px solid #ccc;height: 50px;line-height: 50px}
    .right-content .table tr td{font-size: 15px;font-family: "微软雅黑"}
    .right-content .table tr td a.edit{color: #46a5e9;margin-left: 10px}
    .right-content .table tr td a.detail{color: #f9951d;margin-left: 10px}
    .right-content .table tr td a.remark{color: #3be382;margin-left: 10px}
    .right-content .table tr td.operate{text-align: center}

    .right-content .page{text-align: center;margin-top: 15px}

    .page .layui-laypage-curr .layui-laypage-em{background: #498ce5 !important;}

    .modal{background: #fff;display: none;margin: 0;padding: 0;position: relative}
    .modal .modal-title{margin: 0 30px;height: 50px;line-height: 50px;text-align: center;font-size: 16px;color: #1E9FFF}
    .modal .modal-body{width: 460px;margin: 20px auto}

    .modal.modal-detail{width: 780px;height: 520px;}
    .modal.modal-detail .modal-title{text-align: right}
    .modal.modal-detail .modal-body{width: 720px;height: 425px;margin: 0 30px}
    .modal.modal-detail .modal-body .left{width: 350px;border-right: 1px solid #ccc;float: left}
    .modal.modal-detail .modal-body .left img{display: block;width: 180px;margin: 0 auto}
    .modal.modal-detail .modal-body .left .left-b{margin-top: 30px}
    .modal.modal-detail .modal-body .left .left-b p{font-size: 16px;height: 36px;line-height: 36px;width: 300px;margin-left: 40px}
    .modal.modal-detail .modal-body .left .left-b p label{display: block;width: 100px;float: left;}
    .modal.modal-detail .modal-body .left .left-b p span{display: block;float: left;}
    .modal.modal-detail .modal-body .right{width: 360px;float: left}
    .modal.modal-detail .modal-body .right .list-remark-item{width: 300px;margin: 30px auto;}
    .modal.modal-detail .modal-body .right .list-remark-item .list-remark-item-title{line-height: 30px;font-size: 15px}
    .modal.modal-detail .modal-body .right .list-remark-item .list-remark-item-content{border-radius: 3px;border:1px solid #ccc;padding: 10px;color: #666;width: 300px;height: 50px}
</style>