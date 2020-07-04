import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  languageId: string = 'PT';

  constructor(private commonLanguage: CommonService) { }

  ngOnInit(): void {
    this.commonLanguage.emitirlanguage.subscribe(
      ev => {
        this.languageId = ev;
      }
    );
  }

  scrollToElement(eve): void {
    let sendServer
    sendServer = this.commonLanguage.scrollToElement(eve);

  }

}
