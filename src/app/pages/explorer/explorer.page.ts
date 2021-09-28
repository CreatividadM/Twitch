import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explorer',
  templateUrl: './explorer.page.html',
  styleUrls: ['./explorer.page.scss'],
})
export class ExplorerPage implements OnInit {

  Options = {
    slidesPerView: 2,
    mode:'md',
    spaceBetween:5
  }
  constructor() { }

  ngOnInit() {
  }

}
