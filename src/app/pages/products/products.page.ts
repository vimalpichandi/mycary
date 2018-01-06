import { Component } from '@angular/core';

// model
import { ProductListModel } from './../../model/product';
import { StorageService } from './../../services/storage.service';
import { CartService } from './../../services/cart.service';

@Component({
selector: 'products-dashboard',
template:`
<navbarheader></navbarheader>
<!-- Page content-->
            <div class="content-wrapper">
                <div class="content-heading">
                    {{title}}
                </div>

                <div class="row">
                 <!-- START dashboard main content-->
                 <div class="col-lg-9">
                     <!-- START chart-->
                     <div class="row">
                         <div class="col-lg-12">
                             <!-- START widget-->
                             <div id="Tab" class="panel panel-default panel-demo">
                                 <div class="panel-heading">
                                     <div class="panel-title">PRODUCT LIST</div>
                                 </div>
                                 <div class="panel-body">
                                 <!-- START row-->
                                  <div class="row">
                                <div *ngFor="let product of arrayKeys(products.productedList)" >
                                         <div class="col-lg-4 col-md-6" >
                                         <div class="panel">
                                             <h3>{{products.productedList[product].label}}</h3>
                                             <div class="panel-body">
                                             <img class="img-responsive img-thumbnail"  src="../../../assets/images/{{products.productedList[product].image}}">

                                                <p class="clearfix">
                                                   <span class="pull-left">
                                                      <Strong class="mr-sm">RS:{{products.productedList[product].price}}</Strong>
                                                   </span>
                                                   <span class="pull-right">
                                                         <Strong>{{products.productedList[product].weight}}</Strong>
                                                   </span>
                                                </p>
                                                <button class="btn btn-success btn-sm" (click) = "cartAdd(products.productedList[product].uid);prdAddFlag=true;"
                                                type="button">Add to Cart</button>

                                             </div>
                                         </div>
                                         </div>
                                     </div>

                                 </div>

                             </div>
                           </div>
                         <!-- END widget-->
                     </div>
                 </div>
               <!-- END chart-->
           </div>
<!-- END dashboard main content-->

<div class="col-md-3">
         <div class="panel b">
          <OrderSummnarypagedetails [addFlag] = 'prdAddFlag'></OrderSummnarypagedetails>
            <div class="panel-body">
               <p>
                  <button [routerLink]="['/billing/billing']" class="btn btn-primary btn-block" type="button">BILLING CHECKOUT</button>
               </p>

            </div>
         </div>
      </div>

`

})


export class ProductListpage{
title="Product List ";
public OrderSum:any=[];
public prdAddFlag:boolean=false;

   constructor(
      public products:ProductListModel,
      public storage:StorageService,
      public cart:CartService,

    ){
  }
  ngOnInit(){
  this.viewCart();
}
arrayKeys(obj:any){
  return Object.keys(obj);
}
//VIEW CART
viewCart(){
  this.OrderSum=this.cart.viewCart(this.storage.get('cart'),this.products.productedList);
  console.log(this.OrderSum);
}
//ADD CART
cartAdd(pid:string){
//  console.log("0-0-0->",pid);
 let cart = this.cart.cartAdd(this.storage.get('cart'),pid);
 this.storage.set( {'cart' : cart } );
 this.viewCart();
 setTimeout( ()=>{
 this.prdAddFlag=false;
 },100);
}

}
