import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { SendEmalService } from 'src/app/services/sendEmal.service';
import { AddressEmail } from 'src/app/model/address.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private commonLanguage: CommonService, private sendEmalService: SendEmalService) { }

  languageId: string = 'PT';
  placeNome: string = 'Nome Sobrenome';
  placeEmail: string = 'meuemail@dominio.com';
  placeMsg: string = 'Digite sua Mensagem ...';

  loader: boolean;
  modal: string;

  addressEmail: AddressEmail;


  ngOnInit(): void {
    this.addressEmail = new AddressEmail();
    this.commonLanguage.emitirlanguage.subscribe(
      ev => {
        this.languageId = ev;
        if (this.languageId === 'PT') {
          this.placeNome = 'Nome Sobrenome';
          this.placeEmail = 'meuemail@dominio.com';
          this.placeMsg = 'Digite sua Mensagem ...';
        } else {
          this.placeNome = 'Name and Surname';
          this.placeEmail = 'myemail@dominio.com';
          this.placeMsg = 'Enter your Message ...';
        }
      }
    );
  }

  onClick() {
    this.loader = true;
    setTimeout(() => {
      this.modal = 'E-mail enviado com sucesso!';
      this.loader = false;
    }, 2000);
  }


  sendEmail() {
    // Montei um novo objeto por causa do email que é adicionando depois
    this.addressEmail = new AddressEmail(
      this.addressEmail.name,
      this.addressEmail.email,
      this.addressEmail.message,

    );
    console.log(this.addressEmail, '----------------');


    this.sendEmalService.postEmail(this.addressEmail).subscribe(
      res => {
        console.log(res, "foiiii");

      },
      error => {
        console.log(error, "errororo");
      }
    );
  }

}
