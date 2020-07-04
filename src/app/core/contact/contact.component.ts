import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { CommonService } from 'src/app/services/common.service';
import { SendEmalService } from 'src/app/services/sendEmal.service';
import { AddressEmail } from 'src/app/model/address.model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {


  @ViewChildren('valitdataMain') valitdataMain: QueryList<any>;

  dataMain: FormGroup;
  languageId: string = 'PT';
  placeNome: string = 'Nome Sobrenome';
  placeEmail: string = 'meuemail@dominio.com';
  placeMsg: string = 'Digite sua Mensagem ...';

  loader: boolean;
  modal: string;
  body: any;

  constructor(
    private commonLanguage: CommonService,
    private sendEmalService: SendEmalService,
    private fb: FormBuilder,
  ) {
    this.dataMain = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required]],
      message: ['', [Validators.required]],
    })
  }


  ngOnInit(): void {
    console.log(this.dataMain.get('name').value);

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

    Object.keys(this.dataMain.controls).forEach((field) => {
      const control = this.dataMain.get(field);
      control.markAsTouched({ onlySelf: true });
    });

    const fieldsdataMain = [
      'name',
      'email',
      'message',
    ];
    for (let i = 0; i < fieldsdataMain.length; i++) {
      const fieldMain = fieldsdataMain[i];
      if (this.dataMain.get(fieldMain).invalid) {
        this.valitdataMain.toArray()[i].nativeElement.focus();
        return;
      }
    }

    // Montei um novo objeto por causa do email que é adicionando depois
    this.body = {
      nome: this.dataMain.get('name').value,
      email: this.dataMain.get('email').value,
      mensage: this.dataMain.get('message').value,

    };
    console.log(this.body, '----------------');


    this.loader = true;
    this.sendEmalService.postEmail(this.body).subscribe(
      res => {
        this.loader = false;
        if (this.languageId === 'PT') {
          this.modal = 'E-mail enviado com sucesso';
        } else {
          this.modal = 'Email successfully sent';
        }
      },
      error => {
        this.loader = false;
        if (this.languageId === 'PT') {
          this.modal = 'Erro ao enviar e-mail, entre em contato por telefone';
        } else {
          this.modal = 'Error sending email, contact by phone';
        }
      }
    );
  }

}
