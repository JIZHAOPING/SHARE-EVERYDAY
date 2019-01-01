import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TongzhiPage } from '../tongzhi/tongzhi';
import { SettingPage } from '../setting/setting';
import { InformationPage } from '../information/information';
import { AlertController } from 'ionic-angular';
import { ApiProvider } from '../../provider/api';
import { StorageProvider } from '../../provider/ls';
import { XiangqingPage } from '../xiangqing/xiangqing';
/**
 * Generated class for the MinePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface user{
  uid:number;
  uname:string;
  uimage:string;
  utel:string;
  upwd:string;
}

@IonicPage()
@Component({
  selector: 'page-mine',
  templateUrl: 'mine.html',
})
export class MinePage {
  items = [];

  isActive=0;
  isClick(i){
    this.isActive=i;
  }
  items1: any[] = [];
  items2: any[]=[];
  items3: { src: string;name:string }[];
  removeItem1(item){
    for(var i = 0; i < this.items1.length; i++) {
      if(this.items1[i] == item){
        this.items1.splice(i, 1);
      }
    }
  }
  removeItem2(item){
    //console.log("here")
    for(var i = 0; i < this.items2.length; i++) {
      if(this.items2[i] == item){
        this.items2.splice(i, 1);
      }
    }
  }
  TongzhiClick(){
    this.navCtrl.push(TongzhiPage);
  }
  SettingClick(){
    this.navCtrl.push(SettingPage);
  }
  gerenxinxiClick(){
    this.navCtrl.push(InformationPage);
  }
  xiangqingClick(index){
    this.navCtrl.push(XiangqingPage,{
      id : index
    });
  }
  press1(){
    let alert = this.alertCtrl.create({
      title: '确认删除？',
      message: '此操作不可撤回',
      buttons: [
        {
          text: '确认',
          role: '',
          handler: () => {
            this.removeItem1(this.items1[0]);
            console.log('确认');
          }
        },
        {
          text: '取消',
          handler: () => {
            console.log('取消');
          }
        }
      ]
    });
    alert.present();
  }
  
  constructor(private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,private api:ApiProvider,private storage:StorageProvider) {
  }

  id=this.storage.getItem('uid');
  //获取动态
  getList(){
    //获取list用于显示
    this.api.getMovement(this.id).then(data=>{
      console.dir(data);
      this.items1=<any>data;
      //console.dir(this.list);
    });
  }
  //获取收藏
  getK(){
    this.api.getKeep(this.id).then(data=>{
      console.log(data);
      this.items2=<any>data;
    })
  }
  list:Array<user>=[];
  getUser(){
    //获取list用于显示
    this.api.getMy(this.id).then(data=>{
      //console.dir(data);
      this.list=<any>data;
      //console.dir(this.list);
    });
    this.getList();
    this.getK();
  }
  // change(){
    
  //   if(document.getElementsByTagName('ion-icon').name=="md-heart"){
  //     document.getElementsByTagName('ion-icon').name="md-heart-outline";
  //   }else{
  //     document.getElementsByTagName('ion-icon').name="md-heart";
  //   }
  // }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MinePage');
    this.getUser();
  }

}
