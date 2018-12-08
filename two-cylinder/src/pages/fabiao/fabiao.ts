import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera,CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the FabiaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fabiao',
  templateUrl: 'fabiao.html',
})
export class FabiaoPage {
  //camera: any;
  
  opencamera(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64 (DATA_URL):
      let base64Image = 'data:image/jpeg;base64,' + imageData;
     }, (err) => {
      // Handle error
     });
  }
  openfile(){

  }
  fabiaoClick(){
    let alert = this.alertCtrl.create({
      title: '发表成功！！',
      subTitle: new Date().toLocaleString(),
      buttons: ['确认']
    });
    alert.present();
  }
  constructor(private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,private camera: Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FabiaoPage');
    setInterval("show_time0.innerHTML=new Date().toLocaleString()+' 星期'+'日一二三四五六'.charAt(new Date().getDay());",1);  
  }

}
