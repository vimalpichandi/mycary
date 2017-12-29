import { Component } from '@angular/core';

@Component({
  selector: 'navbarheader',
  template: `

         <!-- top navbar-->
         <header class="topnavbar-wrapper">
             <!-- START Top Navbar-->
             <nav role="navigation" class="navbar topnavbar">
                 <!-- START navbar header-->
                 <div class="navbar-header">
                 <h3>MY CART</h3>
                     <!--a href="#/" class="navbar-brand">
                         <div class="brand-logo">

                             <img  src="../../../assets/images/logo - Copy.png" alt="App Logo" class="img-responsive">
                         </div>
                         <div class="brand-logo-collapsed">
                             <img  src="../../../assets/images/logo - Copy.png" alt="App Logo" class="img-responsive">
                         </div>
                     </a-->
                 </div>
                 <!-- END navbar header-->

             </nav>
             <!-- END Top Navbar-->
         </header>
         <!-- sidebar-->


  `,
})
export class navbarheader {
  title = 'app';
}
