import { Component } from '@angular/core';
<<<<<<< HEAD
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Camera,CameraOptions } from '@ionic-native/camera';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker';
=======
import { IonicPage, NavController, NavParams } from 'ionic-angular';

>>>>>>> 1ff21e18a8f6f2ed287b8e13edfe946b8e1e281b
/**
 * Generated class for the InformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-information',
  templateUrl: 'information.html',
})
export class InformationPage {
<<<<<<< HEAD
  
  touxiangChange(){
    let alert = this.alertCtrl.create({
      title: '',
      // subTitle: new Date().toLocaleString(),
      buttons: [
        {
          text: '拍照 >',
          handler: () => {
            // console.log('确认');
            this.opencamera();
          }
        },
        {
          text: '从相册选择 >',
          handler: () => {
            // console.log('取消');
            this.openfile();
          }
        },
        {
          text: '取消 >',
          handler: () => {
            console.log('取消');
            
          }
        }
      ]
    });
    alert.present();
  }
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
      console.log(base64Image);
     }, (err) => {
      console.log('相机获取失败');
     });
  }
  openfile(){
    const options: ImagePickerOptions = {
      maximumImagesCount: 6,
      width: 100,
      height: 100,
      quality: 100
    };
    
    // 获取图片
    this.imagePicker.getPictures(options).then((results) => {
      for (var i = 0; i < results.length; i++) {
          console.log('Image URI: ' + results[i]);
      }
    }, (err) => {
      console.log('获取图片失败');
    });
    
    
  }
  constructor(private alertCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams,private camera: Camera,private imagePicker: ImagePicker) {
  }
=======

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
>>>>>>> 1ff21e18a8f6f2ed287b8e13edfe946b8e1e281b

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformationPage');
  }

}
