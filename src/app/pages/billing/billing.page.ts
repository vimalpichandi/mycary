import { Component } from '@angular/core';
import {FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
//selector: 'billingpagedetails',
template:`

<navbarheader></navbarheader>

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
                           <!--button type="submit" class="btn btn-primary btn-sm">Submit</button -->
                        </form>
                     </div>
                  </div>
                  <!-- END panel-->
               </div>
               <div class="col-sm-6">
                  <!-- START panel-->
                  <div class="panel b">
                    <OrderSummnarypagedetails></OrderSummnarypagedetails>
                     <div class="panel-body">
                        <p><button [routerLink]="['/payment/payment']" class="btn btn-success btn-block" type="button">PAYMENT PROCESS</button></p>
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
