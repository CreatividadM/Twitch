import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  @ViewChild('mySlider')  slides: IonSlides;

  swipeNext(){
    this.slides.slideNext();
  }
  //Sliders
  slideOpts = {
    centerSlides:true,
    mode:'md',
    pager:true,
    scrrollbar:true
  };

  constructor(private route:Router) { }

  ngOnInit() {
  }

  finish(){
    let value = "true";
    localStorage.setItem('isIntroShowed', value);
    this.route.navigate(['/home']);
  }

}
