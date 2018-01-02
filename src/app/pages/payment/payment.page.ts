import { Component, Input } from '@angular/core';

// model
import { ProductListModel } from './../../model/product';
import { StorageService } from './../../services/storage.service';
import { CartService } from './../../services/cart.service';

@Component({
selector: 'paymentpagedetails',
template:`

<navbarheader></navbarheader>
    <section>
         <!-- Page content-->
         <div class="content-wrapper">
         <div class="content-heading">
             {{title}}
         </div>
            <div class="panel">
               <div class="panel-body">
                  <h3 class="mt0">Invoice </h3>
                  <hr>
                  <div class="row mb-lg">
                     <div class="col-lg-4 col-xs-6 br pv">
                        <div class="row">
                           <div class="col-md-10">
                              <h4>Vimal Pichandi</h4>
                              <address></address>5/401 A, Tharshan Flats
                              <br>Nanmangalam,
                              <br>Chennai</div>
                        </div>
                     </div>
                     <div class="col-lg-4 col-xs-6 br pv">
                        <div class="row">
                           <div class="col-md-10">
                              <h4>DD Fruits Shop</h4>
                              <address></address>Friends Castle
                              <br>Sree sakthi nagar,
                              <br>Chennai</div>
                        </div>
                     </div>
                     <div class="clearfix hidden-md hidden-lg">
                        <hr>
                     </div>
                     <div class="col-lg-4 col-xs-12 pv">
                        <div class="clearfix">
                           <p class="pull-left">Date</p>
                           <p class="pull-right mr">1/2/2018</p>
                        </div>
                        <div class="clearfix">
                           <p class="pull-left">Due Date</p>
                           <p class="pull-right mr">30/12/2017</p>
                        </div>
                     </div>
                  </div>
                  <div class="table-responsive table-bordered mb-lg">
                     <table class="table">
                        <thead>
                           <tr>
                              <th>Item #</th>
                              <th>Description</th>
                              <th>Quantity</th>
                              <th>Unit Price</th>
                              <th class="text-right">Total</th>
                           </tr>
                        </thead>
                        <tbody>
                          <tr *ngFor="let productsvalue of arrayKeys(OrderSum.cartLists)">
                                    <td>{{ OrderSum.cartLists[productsvalue].uid}}</td>
                              <td>{{OrderSum.cartLists[productsvalue].label}}</td>
                              <td width="100px"><div class="text-left text-bold">
         <div class="input-group">
                   <span class="input-group-btn">
                       <button type="button"  (click)="cartUpdate('-',productsvalue)" class="btn btn-danger btn-xs"  data-type="minus" data-field="quant[1]">
                         <span  class="glyphicon glyphicon-minus"></span>
                       </button>
                   </span>
                 <span>{{OrderSum.cartLists[productsvalue].weight}} Kg</span>
                   <span class="input-group-btn">
                       <button type="button"  (click)="cartUpdate('+',productsvalue)" class="btn btn-success btn-xs" data-type="plus" data-field="quant[2]">
                           <span class="glyphicon glyphicon-plus"></span>
                       </button>
                   </span>
               </div>
         </div></td>
                              <td>Rs: {{ OrderSum.cartLists[productsvalue].unitprice}}</td>
                              <td class="text-right"><div class="text-right text-bold">Rs: {{OrderSum.cartLists[productsvalue].price}}</div></td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="row">
                     <div class="col-sm-offset-8 col-sm-4 pv">
                        <div class="clearfix">
                           <p class="pull-left">Subtotal</p>
                           <p class="pull-right mr">Rs: {{OrderSum.totalamount}}</p>
                        </div>
                        <div class="clearfix">
                           <p class="pull-left">GST (28%)</p>
                           <p class="pull-right mr">Rs: {{OrderSum.totalamount*28/100}}</p>
                        </div>
                        <div class="clearfix">
                           <p class="pull-left h3">GRAND TOTAL</p>
                           <p class="pull-right mr h3">Rs: {{ OrderSum.totalamount + OrderSum.totalamount*28/100}}</p>
                        </div>
                     </div>
                  </div>
                  <hr class="hidden-print">
                  <div class="clearfix">
                     <button [routerLink]="['/products/products']" class="btn btn-success pull-right">Send Invoice</button>
                  </div>
               </div>
            </div>
         </div>
      </section>

`

})

export class PaymentListpage{
title="Payment Page";

@Input("addFlag")
  set viewTrigger(flag:boolean){
  this.viewCart();
  }
  constructor(
      public products:ProductListModel,
      public storage:StorageService,
      public cart:CartService,
    ){ }

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
 //Delete Cart
    cartDelete(Pid:string){
      let cart = this.cart.cartDelete(this.storage.get('cart'),Pid);
      this.storage.set( {'cart': cart} );
      this.viewCart();
     }

     cartUpdate(Sign:string,Pid:string){
       let cartData = this.cart.cartUpdate( this.storage.get('cart') ,Pid,Sign);
       this.storage.set({ cart: cartData });
       this.viewCart();
     }
}
