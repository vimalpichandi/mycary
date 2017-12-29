import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="wrapper">
    <navbarheader></navbarheader>
    <products-dashboard></products-dashboard>
    <billingpagedetails></billingpagedetails>
    <paymentpagedetails></paymentpagedetails>
</div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
