import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss']
})
export class KnowledgeComponent implements OnInit {
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
