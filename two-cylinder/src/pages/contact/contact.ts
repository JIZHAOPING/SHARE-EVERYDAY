import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HuozanPage } from '../huozan/huozan';
import { PinglunPage } from '../pinglun/pinglun';
import { FansPage } from '../fans/fans';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  huozanClick(){
    this.navCtrl.push(HuozanPage);
  }
  pinglunClick(){
    this.navCtrl.push(PinglunPage);
  }
  fansClick(){
    this.navCtrl.push(FansPage);
  }

  // mock 数据
  chats = [{
    id: '001',
    imageUrl: 'assets/imgs/touxiang-dongdong.png',
    title: '东东',
    lastMessage: '这个月怎么还没有结束?',
    timestamp: new Date()
  },
    {
      id: '002',
      imageUrl: 'assets/imgs/touxiang-xiaoxiao.png',
      title: '小小',
      lastMessage: '上次给你推荐的房子，你看了没有?',
      timestamp: new Date()
    },
    {
      id: '003',
      imageUrl: 'assets/imgs/touxiang-xiaomei.png',
      title: '小美',
      lastMessage: '你有新的快递，请注意查收',
      timestamp: new Date()
    }];
  viewMessages(chat) {
    this.navCtrl.push('ChatMessagePage', {chatId: chat.id});
  }

  constructor(public navCtrl: NavController) {

  }

}
