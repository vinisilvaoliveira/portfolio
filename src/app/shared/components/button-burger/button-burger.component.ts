import { Component, OnInit, Input } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-button-burger',
  templateUrl: './button-burger.component.html',
  styleUrls: ['./button-burger.component.scss']
})
export class ButtonBurgerComponent implements OnInit {
  mudarIdioma: boolean = false;
  languageId: string = 'PT';
  languague: any;

  constructor(private commonLanguage: CommonService) {
    this.languague = [
      {
        id: 'PT',
        img: 'https://i.ibb.co/0ZsX49C/bandeira-PT.jpg',
        legend: 'Português',

      },
      {
        id: 'EN',
        img: 'https://i.ibb.co/M6wNVkf/bandeira-ENG.jpg',
        legend: 'English',
      }
    ]
  }




  ngOnInit() {
  }
  open_menu: boolean = false;
  open_list: boolean = false;

  toggleMenu() {
    this.open_menu = !this.open_menu;
  }

  toggleList() {
    this.open_list = !this.open_list;
  }

  onChangeLanguage(ev) {
    this.languageId = ev;
    this.mudarIdioma = this.commonLanguage.changeLanguage(ev);
  }

  scrollToElement(eve): void {
    let sendServer
    sendServer = this.commonLanguage.scrollToElement(eve);
    this.open_menu = !this.open_menu;
  }

}
