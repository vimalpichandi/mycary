import { Component } from '@angular/core';


@Component({
selector: 'paymentpagedetails',
template:`

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
                           <p class="pull-right mr">25/12/2017</p>
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
                           <tr>
                              <td>product001</td>
                              <td>APPLE</td>
                              <td>4-kg</td>
                              <td>12.4</td>
                              <td class="text-right">49.6</td>
                           </tr>
                           <tr>
                              <td>product002</td>
                              <td>ORANGE</td>
                              <td>2-kg</td>
                              <td>10.4</td>
                              <td class="text-right">20.8</td>
                           </tr>
                           <tr>
                              <td>product003</td>
                              <td>BANANA</td>
                              <td>1-kg</td>
                              <td>9.4</td>
                              <td class="text-right">9.4</td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
                  <div class="row">
                     <div class="col-sm-offset-8 col-sm-4 pv">
                        <div class="clearfix">
                           <p class="pull-left">Subtotal</p>
                           <p class="pull-right mr">Rs:79.8</p>
                        </div>
                        <div class="clearfix">
                           <p class="pull-left">GST (28%)</p>
                           <p class="pull-right mr">Rs:22.34</p>
                        </div>
                        <div class="clearfix">
                           <p class="pull-left h3">GRAND TOTAL</p>
                           <p class="pull-right mr h3">Rs:102.44</p>
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
}
