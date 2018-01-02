import { Component, Input } from '@angular/core';

// model
import { ProductListModel } from './../../model/product';
import { StorageService } from './../../services/storage.service';
import { CartService } from './../../services/cart.service';

@Component({
selector: 'OrderSummnarypagedetails',
template:`

<div class="panel-heading bb">
   <h4 class="panel-title">Order Summary</h4>
</div>
<div class="panel-body bt">
    <h4 class="b0">Order Item #3</h4>
</div>
<!-- {{OrderSum.cartLists | json}} -->
<table class="table">
   <tbody>
      <tr *ngFor="let productsvalue of arrayKeys(OrderSum.cartLists)">
      
         <td>{{OrderSum.cartLists[productsvalue].label}}</td>
         <td width="100px"><div class="text-left text-bold">
         <div class="input-group">
                   <span class="input-group-btn">
                       <button type="button"  (click)="cartUpdate('-',productsvalue)" class="btn btn-danger btn-xs"  data-type="minus" data-field="quant[1]">
                         <span  class="glyphicon glyphicon-minus"></span>
                       </button>
                   </span>
                 <span>{{OrderSum.cartLists[productsvalue].weight}}</span>
                   <span class="input-group-btn">
                       <button type="button"  (click)="cartUpdate('+',productsvalue)" class="btn btn-success btn-xs" data-type="plus" data-field="quant[2]">
                           <span class="glyphicon glyphicon-plus"></span>
                       </button>
                   </span>
               </div>
         </div></td>
         <td><div class="text-right text-bold">Rs:{{OrderSum.cartLists[productsvalue].price}}</div></td>
         <td>
         <button class="btn btn-danger btn-xs" (click) = "cartDelete(productsvalue)"
         type="button">x</button></td>
      </tr>
   </tbody>
</table>
<div class="panel-body">
   <div class="clearfix">
   <div class="pull-right text-right">
      <div class="text-bold">Rs:{{OrderSum.totalamount}}</div>
   </div>
      <div class="pull-left text-bold text-dark">ORDER TOTAL</div>
   </div>
</div>
`
})

export class OrderSummnarypage{

  @Input("addFlag")
  set viewTrigger(flag:boolean){

    this.viewCart();
  }

    public OrderSum:any=[];
    constructor(
       public products:ProductListModel,
       public storage:StorageService,
       public cart:CartService
     ){

   }
   ngOnInit(){
   this.viewCart();
 }
   arrayKeys(obj:any){
     return Object.keys(obj);
   }

    viewCart(){
      this.OrderSum=this.cart.viewCart(this.storage.get('cart'),this.products.productedList);
      console.log("viewCart:", this.OrderSum);
    }
    //Delete Cart
    cartDelete(Pid:string){
    alert("Delete");
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
