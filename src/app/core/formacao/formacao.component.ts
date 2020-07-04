import { Component, OnInit } from '@angular/core';
import { TimelineItem } from 'ngx-horizontal-timeline';
import { LightboxComponent } from 'src/app/shared/components/lightbox/lightbox.component';
import { title } from 'process';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-formacao',
  templateUrl: './formacao.component.html',
  styleUrls: ['./formacao.component.scss']
})
export class FormacaoComponent implements OnInit {

  languageId: string = 'PT';

  alternate: boolean = true;
  toggle: boolean = true;
  color: boolean = false;
  size: number = 40;
  expandEnabled: boolean = true;
  contentAnimation: boolean = true;
  dotAnimation: boolean = true;
  side = 'right';

  entries = [
    {
      header: 'Análise e Desenvolvimento de Sistemas',
      headerEN: 'Analysis and systems development',
      company: 'Universidade Nove de Julho - Barra Funda',
      years: 'Formado - 2018',
      yearsEN: 'Graduated - 2018',
      periodo: '2016 - 2018',
      link: 'https://www.uninove.br/unidade/memorial/',
      logo: '/assets/logo-uninove.png'
    },
    {
      header: 'Pós Graduação em Desenvolvimento Web',
      headerEN: 'Post Graduation in Web Development',
      company: 'Universidade Nove de Julho - Barra Funda',
      years: 'Formado - 2019',
      yearsEN: 'Graduated - 2019',
      periodo: '2018 - 2019',
      link: 'https://www.uninove.br/unidade/memorial/',
      logo: 'https://i.ibb.co/qj5M4KM/logo-uninove.png'
    },
    {
      header: 'Inglês',
      headerEN: 'English',
      company: 'Lexis Idiomas',
      years: 'Formação - 2023',
      yearsEN: 'Graduated - 2023',
      periodo: '2019 - 2023',
      link: 'http://www.lexisidiomas.com/',
      logo: 'https://i.ibb.co/gDjtvVX/logo-lexis.png'
    },
    {
      header: 'Cursos Udemy',
      headerEN: 'Udemy Courses',
      company: 'Udemy',
      years: 'Formação - 2023',
      yearsEN: 'Graduated - 2023',
      periodo: null,
      link: 'https://www.udemy.com/',
      logo: 'https://i.ibb.co/ykQhbKd/logo-udemy.png',

      cursos: [
        {
          udemy: 'Curso moderno com JavaScript',
        },
        {
          udemy: 'Construindo Aplicações Web com Angular',
        },
        {
          udemy: 'Desenvolvimento completo Web',
        },
        {
          udemy: 'Web Developer',
        },
        {
          udemy: 'PHP 7',
        },
        {
          udemy: 'Designer Grafico (basico)',
        },
        {
          udemy: 'Git e Git Hub',
        },
        {
          udemy: 'WordPress para Desenvolvedores: Criação de Temas do Zero',
        },
      ]

    }
  ]


  constructor(private commonLanguage: CommonService) { }

  ngOnInit(): void {
    this.commonLanguage.emitirlanguage.subscribe(
      ev => {
        this.languageId = ev;
      }
    );
  }

  onHeaderClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onDotClick(event) {
    if (!this.expandEnabled) {
      event.stopPropagation();
    }
  }

  onExpandEntry(expanded, index) {
    console.log(`Expand status of entry #${index} changed to ${expanded}`)
  }

}
