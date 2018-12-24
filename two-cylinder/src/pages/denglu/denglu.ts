import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { XieyiPage } from '../xieyi/xieyi';
import { ForgetPage } from '../forget/forget';
import { ApiProvider } from '../../provider/api';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the DengluPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface user{
  uid:number;
  uname:string;
  uimage:string;
  utel:string;
  upass:string;
  ufans:number;
  uguanzhu:number;
 
}
@IonicPage()
@Component({
  selector: 'page-denglu',
  templateUrl: 'denglu.html',
})
export class DengluPage {

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
  // 验证码倒计时
  verifyCode: any = {
    verifyCodeTips: "获取验证码",
    countdown: 60,
    disable: true
}
  list: any;
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
    this.getList();
    
}
getList(){
  let data=JSON.stringify({
    upwd:this.params.newpass,
    utel:this.params.usertel
   
  });
  this.api.postZhuce(data).then(data=>{
    console.dir(data);
  });
  // this.api.api().then(data=>{
  //   console.dir(data);
  //    this.list=<any>data;
  //   console.dir(this.list);
  // });
  
}


  items = [];
  arr=['登录','注册'];
  isActive=0;
  isClick(i){
    this.isActive=i;
  }
  homeClick(){
    this.navCtrl.push(HomePage);
  }
  forgetClick(){
    this.navCtrl.push(ForgetPage);
  }
  xieyiClick(){
    this.navCtrl.push(XieyiPage);
  }
  zhuceClick(){
    var agree = document.getElementById("Agree")['checked'];
    if(agree){
      alert("恭喜您！注册成功");
    }
    else{
    alert("请同意用户条款");
    }
  }
  dengluClick(){
    this.navCtrl.push(TabsPage);
  }
  constructor(private api:ApiProvider,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DengluPage');
    this.api.api().then(data=>{
      console.dir(data);
      //  this.list=<any>data;
      // console.dir(this.list);
    });
  }

}
