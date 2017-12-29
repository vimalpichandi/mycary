import { Component } from '@angular/core';

// model
import { ProductListModel } from './../../model/product';


@Component({
selector: 'products-dashboard',
template:`

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
                                <div *ngFor="let product of products.productedList">
                                         <div class="col-lg-4 col-md-6">
                                         <div class="panel">
                                             <h3>{{product.label}}</h3>
                                             <div class="panel-body">
                                             <img class="img-responsive img-thumbnail"  src="../../../assets/images/{{product.image}}">

                                                <p class="clearfix">
                                                   <span class="pull-left">
                                                      <Strong class="mr-sm">RS:{{product.price}}</Strong>
                                                   </span>
                                                   <span class="pull-right">
                                                         <Strong>{{product.weight}}</Strong>
                                                   </span>
                                                </p>
                                                <button class="btn btn-success btn-sm" type="button">Add to Cart</button>
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
            <div class="panel-heading bb">
               <h4 class="panel-title">Order Summnary</h4>
            </div>
            <div class="panel-body bt">
               <h4 class="b0">Order Item #3</h4>
            </div>
            <table class="table">
               <tbody>
                  <tr>
                     <td>APPLE</td>
                     <td><div class="text-left text-bold">4-kg</div></td>
                     <td><div class="text-right text-bold">Rs:49.6</div></td>
                  </tr>
                  <tr>
                     <td>ORANGE</td>
                     <td><div class="text-left text-bold">2-kg</div></td>
                     <td><div class="text-right text-bold">Rs:20.8</div></td>
                  </tr>
                  <tr>
                     <td>BANANA</td>
                     <td><div class="text-left text-bold">1-kg</div></td>
                     <td><div class="text-right text-bold">Rs:9.4</div></td>
                  </tr>
               </tbody>
            </table>
            <div class="panel-body">
               <div class="clearfix">
                  <div class="pull-right text-right">
                     <div class="text-bold">Rs:79.8</div>
                  </div>
                  <div class="pull-left text-bold text-dark">ORDER TOTAL</div>
               </div>
            </div>
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
   constructor(public products:ProductListModel){

  }
}
