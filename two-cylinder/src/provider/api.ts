import { Http,Headers,Response} from '@angular/http';
import { Injectable} from '@angular/core';

@Injectable()

export class ApiProvider{
    //定义post请求需要的头部
    public headers=new Headers({'Content-Type':'application/json'});
    constructor(public http:Http){
        console.log('Hello ApiProvider provider');
    }

    url:string="/api";

    //实例POST注册
  public postZhuce(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'/user/reg',data,{headers:this.headers})
        .subscribe((res:Response)=>{
          console.log(res);
        },err=>{
          console.dir(err)
          reject()
        });
    });
  }
  //实例get 用户请求
  public getMy(){
    return new Promise((resolve, reject) => {
      
      this.http.get(this.url+'/user/haha')
        .subscribe((res:Response)=>{
          resolve(res.json())
        },err=>{
          console.dir(err);
          reject()
      });
    });
  }
  //发表
  public postArticle(data){
    return new Promise((resolve, reject) => {
      this.http.post(this.url+'movement',data,{headers:this.headers})
        .subscribe((res:Response)=>{
          console.log(res);
        },err=>{
          console.dir(err)
          reject()
        });
    });
  }

}