// import { Component } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';

// /**
//  * Generated class for the ForgetPage page.
//  *
//  * See https://ionicframework.com/docs/components/#navigation for more info on
//  * Ionic pages and navigation.
//  */

// @IonicPage()
// @Component({
//   selector: 'page-forget',
//   templateUrl: 'forget.html',
// })
// export class ForgetPage {

//   constructor(public navCtrl: NavController, public navParams: NavParams) {
//   }

//   ionViewDidLoad() {
//     console.log('ionViewDidLoad ForgetPage');
//   }

// }
import { Component } from '@angular/core';
    import { NavController, NavParams } from 'ionic-angular';

 
    @Component({
    selector: 'page-forget',
    templateUrl: 'forget.html',
    })
    export class ForgetPage {
 
    params = {
        usertel: '',
        newpass: '',
        vcode: '',
        sure_pwd: ''
    }
    codeParam = {
        fromflag: 2,
        usertel: ""
    }
    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }
 
    ionViewDidLoad() {
        console.log('ionViewDidLoad ForgetPage');
    }
 
 
    // 验证码倒计时
    verifyCode: any = {
        verifyCodeTips: "获取验证码",
        countdown: 60,
        disable: true
    }
    // 倒计时
    settime() {
        if (this.verifyCode.countdown == 1) {
        this.verifyCode.countdown = 60;
        this.verifyCode.verifyCodeTips = "获取验证码";
        this.verifyCode.disable = true;
        return;
        } else {
        this.verifyCode.countdown--;
        }
 
        this.verifyCode.verifyCodeTips = "重新获取(" + this.verifyCode.countdown + ")";
        setTimeout(() => {
        this.verifyCode.verifyCodeTips = "重新获取(" + this.verifyCode.countdown + ")";
        this.settime();
        }, 1000);
    }
    getCode() {
        if (this.codeParam.usertel == '') {
        console.debug("请填写手机号!");
        return;
        }
 
        //发送验证码成功后开始倒计时
 
        this.verifyCode.disable = false;
        this.settime();
 
    }
    doReset() {
        this.params.usertel = this.codeParam.usertel;
 
        if (this.params.usertel == "") {
        console.debug("请输入手机号");
        return;
        }
 
        if (this.params.vcode == "") {
        console.debug("请输入验证码");
        return;
        }
 
        if (this.params.newpass == this.params.sure_pwd) {
 
        } else {
        console.debug("两次密码输入不一致");
        }
    }
}


