import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `<div class="footer mt-3">
    <div class="col-md-12 text-center">
      <p>
        <b>© 2020 Copyright: ContactApp.com</b>
      </p>
    </div>
  </div>
  `,
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
