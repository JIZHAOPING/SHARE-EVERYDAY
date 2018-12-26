import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TongzhiPage } from '../tongzhi/tongzhi';
import { SettingPage } from '../setting/setting';
import { InformationPage } from '../information/information';
import { AlertController } from 'ionic-angular';
import { ApiProvider } from '../../provider/api';
// import { StorageProvider } from '../../provider/ls';
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
  items2: { title: string;src:string }[];
  items3: { src: string;name:string }[];
  removeItem1(item){
    //console.log("here")
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
  press2(){
    let alert = this.alertCtrl.create({
      title: '确认删除？',
      message: '此操作不可撤回',
      buttons: [
        {
          text: '确认',
          role: '',
          handler: () => {
            this.removeItem2(this.items2[0]);
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
  
  constructor(private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,private api:ApiProvider,) {
    // this.items1 = [
    //   {title: '南方宝宝团的雪球。虽然看起来很大，但有如新作的棉花糖一样松软，如天使的怀抱一样温柔，主要成分是冰沙，打到人身上立刻散掉，不疼不痒，打起来常伴着欢声笑语，一片祥和',src:''},
    //   {title: '懵逼  一觉起来过年了？！ 周围一圈的都在说新年好 然后还有人说点鞭炮 然后懵逼的我 脑子一抽 拍案而起 特别大声 TMD过年了还不放假？！',src:''},
    //   {title: '今日12时26分进入24节气中的“大雪”；②古说，“大者盛也，至此而雪盛”。小雪腌菜，大雪腌肉，封河之时，冰上溜溜；③冬天进补，顿顿不漏，“晨起服热粥，晚餐宜节食”，适当多吃些牛羊肉；④这也是个充满诗意的节气，雾凇挂满枝桠，片片雪花飘落…新年不远了，你期待吗？ ​',src:''},
    //   {title: '你的坚强，会将一路坎坷踏成万马征途你的努力，会让所有的坚持变得有意义',src:''},
    // ];
    this.items2=[
      {title:'健康的生活方式是怎样的？',src:'assets/imgs/蔬菜.png'},
      {title:'怎样养成良好的写作姿势？',src:'assets/imgs/坐姿.jpg'},
      {title:'怎样让心情放松？',src:'assets/imgs/放松.png'},
    ]
    this.items3=[
      {src:'assets/imgs/touxiang-dongdong.png',name:'东东'},
      {src:'assets/imgs/touxiang-xiaoxiao.png',name:'小小'},
      {src:'assets/imgs/touxiang-xiaomei.png',name:'小美'},
    ]
  }

  id:1;
  // id=this.storage.getItem('uid');
  getList(){
    //获取list用于显示
    this.api.getMovement(this.id).then(data=>{
      console.dir(data);
      this.items1=<any>data;
      //console.dir(this.list);
    });
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
    this.getList();
  }

}
