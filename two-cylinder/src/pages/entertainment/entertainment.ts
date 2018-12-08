import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the EntertainmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entertainment',
  templateUrl: 'entertainment.html',
})
export class EntertainmentPage {
  items = [];
  arr=['娱乐','健身','旅行'];
  isActive=0;
  isClick(i){
    this.isActive=i;
  }
  returnHome(){
    this.navCtrl.push(HomePage);
  }

  yule1_li=[
    {src:'assets/imgs/touxiang.png',img:'assets/imgs/KTV.jpg',name:'小白',content:'最喜欢的KTV',time:'一分钟前'},
    {src:'assets/imgs/touxiang-1.png',img:'assets/imgs/迪士尼.jpg',name:'小黑',content:'想去迪士尼',time:'十五分钟前'}
  ]
  yule2_li=[
    {src:'assets/imgs/touxiang-xiaoxiao.png',img:'assets/imgs/健身女.jpg',name:'小小',content:'嗷嗷嗷、、、我要瘦',time:'一分钟前'},
    {src:'assets/imgs/touxiang-dongdong.png',img:'assets/imgs/健身男.jpg',name:'东东',content:'努力了总有回报',time:'十五分钟前'}
  ]
  yule3_li=[
    {src:'assets/imgs/touxiang-xiaomei.png',img:'assets/imgs/旅行.jpg',name:'小美',content:'想来一场说走就走的旅行',time:'一分钟前'},
    {src:'assets/imgs/touxiang-healar.png',img:'assets/imgs/游泳.jpg',name:'Healar',content:'来中国还没怎么出去过，你们有什么旅行的地方可以推荐吗？？',time:'十五分钟前'}
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntertainmentPage');
  }

}
