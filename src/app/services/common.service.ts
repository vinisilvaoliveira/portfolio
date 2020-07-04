import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  languageEN: boolean;

  emitirlanguage = new EventEmitter<string>();
  emitirId = new EventEmitter<string>();

  constructor() { }

  changeLanguage(ev): boolean {
    console.log(ev);

    if (ev === 'PT') {
      this.emitirlanguage.emit(ev);
      return this.languageEN = true;
    } else {
      this.emitirlanguage.emit(ev);
      return this.languageEN = false;
    }
  }

  scrollToElement(ev): void {
    this.emitirId.emit(ev);
  }


}
