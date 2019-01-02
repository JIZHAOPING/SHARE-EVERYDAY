import { Component ,ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import { FabiaoPage } from '../fabiao/fabiao';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  @ViewChild('myMap') myMap ;
fabiao(){
  this.navCtrl.push(FabiaoPage,{
    text:this.myMap.nativeElement.innerHTML,
  });
}
close(){
  this.navCtrl.pop();
}
  constructor(public navCtrl: NavController) {
  }

}
