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

    //获取所有动态
    public getLists(){
      return new Promise((resolve, reject) => {
        this.http.get(this.url+'/movement')
          .subscribe((res:Response)=>{
            resolve(res.json())
          },err=>{
            console.dir(err)
            reject()
        });
      });
    }

    public getxuexi1(){
      return new Promise((resolve, reject) => {
        this.http.get(this.url+'/movement/xuexi1')
          .subscribe((res:Response)=>{
            resolve(res.json())
          },err=>{
            console.dir(err)
            reject()
        });
      });
    }

    public getxuexi2(){
      return new Promise((resolve, reject) => {
        this.http.get(this.url+'/movement/xuexi2')
          .subscribe((res:Response)=>{
            resolve(res.json())
          },err=>{
            console.dir(err)
            reject()
        });
      });
    }

    public getxuexi3(){
      return new Promise((resolve, reject) => {
        this.http.get(this.url+'/movement/xuexi3')
          .subscribe((res:Response)=>{
            resolve(res.json())
          },err=>{
            console.dir(err)
            reject()
        });
      });
    }

    public getwork1(){
      return new Promise((resolve, reject) => {
        this.http.get(this.url+'/movement/work1')
          .subscribe((res:Response)=>{
            resolve(res.json())
          },err=>{
            console.dir(err)
            reject()
        });
      });
    }

    public getwork2(){
      return new Promise((resolve, reject) => {
        this.http.get(this.url+'/movement/work2')
          .subscribe((res:Response)=>{
            resolve(res.json())
          },err=>{
            console.dir(err)
            reject()
        });
      });
    }

    public getwork3(){
      return new Promise((resolve, reject) => {
        this.http.get(this.url+'/movement/work3')
          .subscribe((res:Response)=>{
            resolve(res.json())
          },err=>{
            console.dir(err)
            reject()
        });
      });
    }

    public getqinggan1(){
      return new Promise((resolve, reject) => {
        this.http.get(this.url+'/movement/qinggan1')
          .subscribe((res:Response)=>{
            resolve(res.json())
          },err=>{
            console.dir(err)
            reject()
        });
      });
    }

    public getqinggan2(){
      return new Promise((resolve, reject) => {
        this.http.get(this.url+'/movement/qinggan2')
          .subscribe((res:Response)=>{
            resolve(res.json())
          },err=>{
            console.dir(err)
            reject()
        });
      });
    }

    public getqinggan3(){
      return new Promise((resolve, reject) => {
        this.http.get(this.url+'/movement/qinggan3')
          .subscribe((res:Response)=>{
            resolve(res.json())
          },err=>{
            console.dir(err)
            reject()
        });
      });
    }
    
    public getyule1(){
      return new Promise((resolve, reject) => {
        this.http.get(this.url+'/movement/yule3')
          .subscribe((res:Response)=>{
            resolve(res.json())
          },err=>{
            console.dir(err)
            reject()
        });
      });
    }

    public getyule2(){
      return new Promise((resolve, reject) => {
        this.http.get(this.url+'/movement/yule2')
          .subscribe((res:Response)=>{
            resolve(res.json())
          },err=>{
            console.dir(err)
            reject()
        });
      });
    }

    public getyule3(){
      return new Promise((resolve, reject) => {
        this.http.get(this.url+'/movement/yule3')
          .subscribe((res:Response)=>{
            resolve(res.json())
          },err=>{
            console.dir(err)
            reject()
        });
      });
    }
    //实例get 用户动态请求
    public getMovement(id){
      return new Promise((resolve, reject) => {
        this.http.get(this.url+'/user/mymovement/'+id)
          .subscribe((res:Response)=>{
            resolve(res.json());
            console.log(res.json);
          },err=>{
            console.dir(err);
            reject()
        });
      });
    }

    //实例get 所有动态请求
    public getMovements(){
      return new Promise((resolve, reject) => {
        this.http.get(this.url+'/user/mymovement/')
          .subscribe((res:Response)=>{
            resolve(res.json());
            console.log(res.json);
          },err=>{
            console.dir(err);
            reject()
        });
      });
    }

    //get用户登录
    public postLogin(data){
      return new Promise((resolve, reject) => {
        this.http.post(this.url+'/user/login',data,{headers:this.headers})
          .subscribe((res:Response)=>{
            resolve(res.json())
          },err=>{
            console.dir(err)
            reject()
          });
      });
    }

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
    public getMy(id){
      return new Promise((resolve, reject) => {
        
        this.http.get(this.url+'/user/'+id)
          .subscribe((res:Response)=>{
            resolve(res.json())
          },err=>{
            console.dir(err)
            reject()
        });
      });
    }
    //发表
    public postArticle(data){
      return new Promise((resolve, reject) => {
        this.http.post(this.url+'/movement',data,{headers:this.headers})
          .subscribe((res:Response)=>{
            console.log(res);
          },err=>{
            console.dir(err)
            reject()
          });
      });
    }
    //获取用户的收藏
    public getKeep(id){
      return new Promise((resolve, reject) => {
        this.http.get(this.url+'/user/mykeep/'+'id')
          .subscribe((res:Response)=>{
            resolve(res.json());
            console.log(res.json);
          },err=>{
            console.dir(err);
            reject()
        });
      });
    }
}