import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the XuexiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-xuexi',
  templateUrl: 'xuexi.html',
})
export class XuexiPage {
  items = [];
  arr=['升学','艺能','技能'];
  isActive=0;
  isClick(i){
    this.isActive=i;
  }
  returnHome(){
    this.navCtrl.push(HomePage);
  }
  xuexi1_li=[
    {src:'assets/imgs/touxiang.png',img:'assets/imgs/xuexi.jpg',name:'小白',content:'学习打卡第一天。。',time:'一分钟前'},
    {src:'assets/imgs/touxiang-1.png',img:'assets/imgs/huaping.jpg',name:'小黑',content:'不想学习。。',time:'十五分钟前'}
  ]
  xuexi2_li=[
    {src:'assets/imgs/touxiang-xiaoxiao.png',img:'assets/imgs/taoyi.jpg',name:'小小',content:'爱生活爱陶艺。。',time:'一分钟前'},
    {src:'assets/imgs/touxiang-dongdong.png',img:'assets/imgs/huahua.jpg',name:'东东',content:'画画使我快乐。。',time:'十五分钟前'}
  ]
  xuexi3_li=[
    {src:'assets/imgs/touxiang-xiaomei.png',img:'assets/imgs/摄影.jpg',name:'小美',content:'爱上摄影的我。。',time:'一分钟前'},
    {src:'assets/imgs/touxiang-healar.png',img:'assets/imgs/游泳.jpg',name:'Healar',content:'每日分享:游泳时，由于水的压力、阻力、浮力和较低水温的作用，是人体的各部分器官都得到锻炼。水的导热能力比空气大25倍左右。据测定，人体在12度的水中停留4分钟所散发的热量，相当于人在陆地上1小时所散发的热量。经常游泳锻炼能改善体温调节力，以适应外界气温变化的需要。加之游泳时肌肉活动要消耗热量，人体必需尽快补充热量，从而促进了人体内新陈代谢的加强。',time:'十五分钟前'}
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad XuexiPage');
  }

}
