import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the QingganPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-qinggan',
  templateUrl: 'qinggan.html',
})
export class QingganPage {
  items = [];
  arr=['亲情','爱情','友情'];
  isActive=0;
  isClick(i){
    this.isActive=i;
  }
  returnHome(){
    this.navCtrl.push(HomePage);
  }
  qinggan1_li=[
    {src:'assets/imgs/touxiang.png',img:'assets/imgs/妈妈.jpg',name:'小白',content:'爱妈妈。。',time:'一分钟前'},
    {src:'assets/imgs/touxiang-1.png',img:'assets/imgs/huaping.jpg',name:'小黑',content:'想家。。',time:'十五分钟前'}
  ]
  qinggan2_li=[
    {src:'assets/imgs/touxiang-xiaoxiao.png',img:'assets/imgs/爱情.jpg',name:'小小',content:'还好地球是“缘”的，兜兜转转我们总会相见。用区块链永久记录你的爱!',time:'一分钟前'},
    {src:'assets/imgs/touxiang-dongdong.png',img:'assets/imgs/求安慰的猫.jpg',name:'东东',content:'我想寻求帮助。我和我前女友在一起二十多天，上个月分手了，当时分手因为她整天要学习，我又不能陪她学习（嫌我比较爱玩），她每天学习还要想着有我这个男朋友，要跟我分手，我改我陪她学习都没用，就是分手，说什么都没用，我想时间这么短的感情应该不会怎样吧。但分手后的每天我都控制不住的去关注她，晚上会梦见她，睡醒以后心里特难受，最近发现她天天打游戏，貌似又要有对象了，我怕一些谎言被拆穿，我怕爱的越深恨得越深，我不想恨她，（我认为付出过真心是最可怕的，有些事真的能改变一个人）。我想问问有什么方法能让我不这么难受，求大神支招！',time:'十五分钟前'}
  ]
  qinggan3_li=[
    {src:'assets/imgs/touxiang-xiaomei.png',img:'assets/imgs/不胖.jpg',name:'小美',content:'我胖是有原因的。我有一个损友天天在旁边说我“不胖”',time:'一分钟前'},
    {src:'assets/imgs/touxiang-healar.png',img:'assets/imgs/烦.jpg',name:'Healar',content:'舍友为什么每次都让我买饭？？',time:'十五分钟前'}
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QingganPage');
  }

}
