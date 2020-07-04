import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainBannerComponent } from './core/main-banner/main-banner.component';
// import { NavComponent } from './core/main-banner/nav/nav.component';
import { FormacaoComponent } from './core/formacao/formacao.component';
import { NgxHorizontalTimelineModule } from 'ngx-horizontal-timeline';
import { LightboxComponent } from './shared/components/lightbox/lightbox.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { KnowledgeComponent } from './core/knowledge/knowledge.component';
import { ContactComponent } from './core/contact/contact.component';
import { DemoMaterialModule } from './shared/components/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MglTimelineModule } from 'angular-mgl-timeline';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AboutComponent } from './core/about/about.component';
import { FooterComponent } from './core/footer/footer.component';
import { NavComponent } from './core/nav/nav.component';
import { CommonService } from './services/common.service';
import { ButtonBurgerComponent } from './shared/components/button-burger/button-burger.component';
@NgModule({
  declarations: [
    AppComponent,
    MainBannerComponent,
    NavComponent,
    FormacaoComponent,
    LightboxComponent,
    LoaderComponent,
    KnowledgeComponent,
    ContactComponent,
    AboutComponent,
    FooterComponent,
    ButtonBurgerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    NgxHorizontalTimelineModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    HttpClientModule,
    MatNativeDateModule,
    BrowserAnimationsModule,
    MglTimelineModule,
    MatToolbarModule,
    MatToolbarModule,

  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    CommonService
  ],
  exports: [
    DemoMaterialModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }
