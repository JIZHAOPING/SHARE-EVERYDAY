import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the WorkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-work',
  templateUrl: 'work.html',
})
export class WorkPage {
  items = [];
  arr=['日常','经验','烦恼'];
  isActive=0;
  isClick(i){
    this.isActive=i;
  }
  returnHome(){
    this.navCtrl.push(HomePage);
  }

  work1_li=[
    {src:'assets/imgs/touxiang.png',img:'assets/imgs/xuexi.jpg',name:'小白',content:'工作打卡第一天。。',time:'一分钟前'},
    {src:'assets/imgs/touxiang-1.png',img:'assets/imgs/huaping.jpg',name:'小黑',content:'不想工作。。',time:'十五分钟前'}
  ]
  work2_li=[
    {src:'assets/imgs/touxiang-xiaoxiao.png',img:'assets/imgs/成功.jpg',name:'小小',content:'每个成功者都有一个开始。',time:'一分钟前'},
    {src:'assets/imgs/touxiang-dongdong.png',img:'assets/imgs/huahua.jpg',name:'东东',content:'画画我有方法。。有意者私聊',time:'十五分钟前'}
  ]
  work3_li=[
    {src:'assets/imgs/touxiang-xiaomei.png',img:'assets/imgs/不胖.jpg',name:'小美',content:'喝水都胖。。不开心',time:'一分钟前'},
    {src:'assets/imgs/touxiang-healar.png',img:'assets/imgs/烦.jpg',name:'Healar',content:'鸭梨山大',time:'十五分钟前'}
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkPage');
  }

}
