import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  //Sliders
  slideOpts = {
    slidesPerView: 4,
    mode:'md',
  };

  slideOptsGames = {
    slidesPerView: 4,
    mode:'md',
  };

  options = {
    slidesPerView: 1.5,
    centeredSlides:true,
    mode:'md',
    spaceBetween:5,
    initialSlide: 1
  }

}
