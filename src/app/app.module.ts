import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './Shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './Modules/login/components/login/login.component';
import { MyOwnLibDevModule } from 'my-own-lib-dev';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    MyOwnLibDevModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
