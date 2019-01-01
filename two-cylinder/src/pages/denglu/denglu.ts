import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { XieyiPage } from '../xieyi/xieyi';
import { ForgetPage } from '../forget/forget';
import { ApiProvider } from '../../provider/api';
import { TabsPage } from '../tabs/tabs';
import { StorageProvider } from '../../provider/ls';

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
  // codeParam = {
  //   fromflag: 2,
  //   usertel: ""
  // }
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
    if (this.usertel == '') {
    console.debug("请填写手机号!");
    return;
    }

    //发送验证码成功后开始倒计时

    this.verifyCode.disable = false;
    this.settime();

}
doReset() {
    this.params.usertel = this.usertel;

    if (this.params.usertel == "") {
    console.debug("请输入手机号");
    return;
    }

    if (this.params.newpass == this.params.sure_pwd) {

    } else {
    alert("两次密码输入不一致");
    }
    this.getList();
    this.navCtrl.push(DengluPage);
}
//注册
getList(){
  let data=JSON.stringify({
    upwd:this.params.newpass,
    utel:this.params.usertel
   
  });
  this.api.postZhuce(data).then(data=>{
    console.dir(data);
  });
  this.storage.setItem('tel',this.params.usertel);
  this.storage.setItem('pwd',this.params.sure_pwd);
  console.log('电话是',this.params.usertel);
  console.log('密码是',this.params.newpass);
}
bo;
uid;
usertel=this.storage.getItem('tel');
newpass=this.storage.getItem('pwd');
//登录
getDl(){
  //往后台传的数据
      let data=JSON.stringify({
        upwd:this.newpass,
        utel:this.usertel   
      });
  
      this.api.postLogin(data).then(data=>{
        console.dir(data);
        if(data[0].uid){
            console.log(data[0].uid)
            console.dir(data);
            
            this.storage.setItem('uid',data[0].uid);
            this.storage.setItem('pwd',data[0].upwd);
            this.storage.setItem('tel',data[0].utel);

            this.bo =Array.isArray(data)&& data.length==0;
            console.log(this.bo);
            if(this.bo!==true){
              this.navCtrl.setRoot(TabsPage);
            }
        }              
      });    
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
    }
    else{
    alert("请同意用户条款");
    }
  }
  dengluClick(){
    if(this.usertel!=''&&this.newpass!=''){
      this.getDl();
    }
  }
  constructor(private api:ApiProvider,public navCtrl: NavController, public navParams: NavParams,private storage:StorageProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DengluPage');
  };
}


