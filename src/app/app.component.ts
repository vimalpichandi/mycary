import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="wrapper">
  <router-outlet></router-outlet>
</div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

}
