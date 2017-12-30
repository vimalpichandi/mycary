import { Injectable } from '@angular/core';

@Injectable()
export class CartService{
  constructor(){

  }
   cartAdd(localStorage:any,pid:string){
     if(localStorage==undefined || localStorage=='' || localStorage==null){
        localStorage = {};
     }

     if(localStorage[pid]==undefined){
         //datas.push({'applee':1});
         localStorage[pid]=1;
      }else{
          localStorage[pid] = localStorage[pid]+1;
      }
       return localStorage;

   }
}
