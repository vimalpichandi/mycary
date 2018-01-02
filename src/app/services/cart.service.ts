import { Injectable } from '@angular/core';

@Injectable()
export class CartService{
  constructor(){

  }
  //Add Cart
   cartAdd(localStorage:any,pid:string){
  //   console.log("<-->",pid);
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
   // View Cart
   viewCart(localStorage:any,productmodel:any, productid:any){
     //console.log("===>",productmodel, item)
     if(localStorage==undefined || localStorage=='' || localStorage==null){
        localStorage = {};
     }
    let cartItems={};
    let GrantAmount:number=0;
    Object.keys(localStorage).forEach(item=>{
          GrantAmount += ( localStorage[item] * productmodel[item].price );
          cartItems[item]= {
            price: Math.round(localStorage[item] * productmodel[item].price),
            weight: localStorage[item],
            label: productmodel[item].label,
            uid: productmodel[item].uid,
	    unitprice: productmodel[item].price,
	    gst:GrantAmount*28/100
           };
          ;
       // console.log("==2=>", item);
        });
    return {
        cartLists : cartItems,
        totalamount : Math.round(GrantAmount)
      };

   }
   // Cart delete
   cartDelete(localStorage:any,Pid:string){

     delete localStorage[Pid];
     return localStorage;

   }
//Cart Update
   cartUpdate(localStorage,Pid,Sign){

  if(Sign=='-'){
      localStorage[Pid]=localStorage[Pid]-1;
      if(localStorage[Pid]<=0){
        delete localStorage[Pid];
      }
  }
    if(Sign=='+'){
        localStorage[Pid]=localStorage[Pid]+1;
    }

   return localStorage;
}

}
