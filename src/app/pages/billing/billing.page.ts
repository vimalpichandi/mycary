import { Component } from '@angular/core';
import {FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
selector: 'billingpagedetails',
template:`

<!-- START row-->
<div class="content-wrapper">
    <div class="content-heading">
        {{title}}
    </div>
            <div class="row">
               <div class="col-sm-6">
                  <!-- START panel-->
                  <div class="panel panel-default">
                     <div class="panel-heading">Billing Information</div>
                     <div class="panel-body">
                        <form role="form" (ngSubmit)="send()" >
                        <div class="form-group">
                           <label>User Name</label>
                           <input fromControlName="username" placeholder="Enter Name" class="form-control" [(ngModel)]="name" name="uname" #Lname="ngModel" required>
                           <span *ngIf="Lname.touched && Lname.invalid" class="error">Required User Name fields</span>
                        </div>
                           <div class="form-group">
                              <label>Email address</label>
                              <input fromControlName="email" pattern="(^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$)" placeholder="Enter email" class="form-control" [(ngModel)]="email" name="uemail" #Lemail="ngModel" required>
                              <span *ngIf="Lemail.touched && Lemail.invalid" class="error">Required email fields</span>
                           </div>
                           <div class="form-group">
                              <label>Address</label>
                              <textarea fromControlName="address" placeholder="Enter address" class="form-control"></textarea>
                           </div>
                           <button type="submit" class="btn btn-primary btn-sm">Submit</button>
                        </form>
                     </div>
                  </div>
                  <!-- END panel-->
               </div>
               <div class="col-sm-6">
                  <!-- START panel-->
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
                           <button class="btn btn-success btn-block" type="button">PAYMENT PROCESS</button>
                        </p>

                     </div>
                  </div>
                  <!-- END panel-->
               </div>
            </div>
            <!-- END row-->
            </div>

`
})

export class BillingListpage{
title ="Billing Page";

}
