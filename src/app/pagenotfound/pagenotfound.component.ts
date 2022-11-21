import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagenotfound',
  template: `
  <div class="container">
  <div class="row">
  <div class="col text-center">
  <h6>404 Error</h6>
  <h6>Page Not Found</h6>
  </div>
  </div>
  </div>
  `
})
export class PagenotfoundComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
