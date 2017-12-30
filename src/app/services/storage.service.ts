import { Injectable } from '@angular/core';

@Injectable()
export class StorageService{
  private datas:any={};
  constructor(){
   this.localStorageInitiate();
  }
  localStorageInitiate(){
    let obj = localStorage.getItem('myStorage');
    if(obj=="" || obj=="[]" || obj==null || obj==undefined){
      this.datas={};
    }else{
      this.datas = JSON.parse( obj );
    }
  }
  
set(obj:any){
  let objKeys = Object.keys(obj);
     (objKeys).forEach( (key)=>{
       this.datas[ key ] = obj[key];
     } );
   this.storing(this.datas);
}

storing(obj:any){
  localStorage.setItem('myStorage',JSON.stringify(obj));
}

get(key:string){
  if(key==''){
    return this.datas;
  }else{
     if(this.datas[key])
        return this.datas[key];
    else
       return {};
       /*
       this.datas[key]?this.datas[key]:{};
       */
  }
}

remove(key:string){
  delete this.datas[key];
  this.storing(this.datas);
  this.localStorageInitiate();
}

}
