import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import {AppRoutingModule} from './app-routing.module';
import { LoginComponent } from './components/login/login.component';
import { MainframeComponent } from './components/mainframe/mainframe.component';
import {FormsModule} from '@angular/forms';
import {NgxEchartsModule} from 'ngx-echarts';
import {ModalModule} from 'ngx-bootstrap';
import { SysleftMenuComponent } from './module/sysleft-menu/sysleft-menu.component';
import {MainComponent} from './module/main/main.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainframeComponent,
    SysleftMenuComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxEchartsModule,
    ModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
