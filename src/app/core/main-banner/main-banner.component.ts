import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-banner',
  templateUrl: './main-banner.component.html',
  styleUrls: ['./main-banner.component.scss']
})
export class MainBannerComponent implements OnInit {

  slideIndex = 0;
  languageId: string = 'PT';

  emitirlanguage: any;

  loader: boolean;
  constructor(
    private renderer: Renderer2,
    private commonLanguage: CommonService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.loader = true;
    setTimeout(() => {
      this.loader = false;
    }, 2000)
    this.showSlides();

    this.commonLanguage.emitirlanguage.subscribe(
      ev => {
        this.languageId = ev;
      }
    );

    this.commonLanguage.emitirId.subscribe(
      ev => {
        this.scrollToElement(ev);
      }
    );
  }

  scrollToElement(e): void {
    if (document.getElementById(e)) {
      let classe;
      classe = e;
      window.scroll({
        top: document.getElementById(classe).offsetTop,
        left: 0,
        behavior: 'smooth',
      });
      console.log(document.getElementById(classe));

    }
  }

  showSlides() {
    let i;
    let slides = document.getElementsByClassName('mySlides');


    for (i = 0; i < slides.length; i++) {
      this.renderer.setStyle(slides[i], 'display', 'none')
      this.renderer.removeClass(slides[i], 'animation');
    }
    this.slideIndex++;
    if (this.slideIndex > slides.length) { this.slideIndex = 1 }

    this.renderer.setStyle(slides[this.slideIndex - 1], 'display', 'block');
    this.renderer.addClass(slides[this.slideIndex - 1], 'animation');
    setTimeout(() => {
      this.showSlides();
    }, 6000);
  }

  onClick() {
    console.log("foi");
    this.router.navigate(['https://drive.google.com/file/d/1jCc-m24HaUbHHV6iilLJCcp4W064YnuU/view?usp=sharing']);
  }


}
