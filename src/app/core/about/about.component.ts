import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  languageId: string = 'PT';

  constructor(private commonLanguage: CommonService) { }

  ngOnInit(): void {
    this.commonLanguage.emitirlanguage.subscribe(
      ev => {
        this.languageId = ev;
      }
    );
  }

}
