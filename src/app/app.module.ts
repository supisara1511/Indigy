import { CommonModule, registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { AppComponent } from './app.component';
registerLocaleData(en);

import { HttpClientModule } from '@angular/common/http';
import { en_US, provideNzI18n } from 'ng-zorro-antd/i18n';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzIconModule,
    NzMenuModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [provideNzI18n(en_US)],
})
export class AppModule {}
