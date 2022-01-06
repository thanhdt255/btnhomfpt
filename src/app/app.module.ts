import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HeaderComponent} from "./header/header.component";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {FooterComponent} from "./footer/footer.component";
import {GioithieuComponent} from "./gioithieu/gioithieu.component";
import {SiginComponent} from "./sigin/sigin.component";
import {SigupComponent} from "./sigup/sigup.component";
import {Prd_detailComponent} from "./prd_detail/prd_detail.component";
import {oderComponent} from "./oder/oder.component";
import {profileComponent} from "./profile/profile.component";

const appRoutes: Routes = [
  {path:"",component:HomeComponent},
  {path:"gioithieu",component:GioithieuComponent},
  {path:"dangnhap",component:SiginComponent},
  {path:"dangky",component:SigupComponent},
  {path:"prd",component:Prd_detailComponent},
  {path:"oder",component:oderComponent},
  {path:"profile",component:profileComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,HomeComponent,FooterComponent,GioithieuComponent,
    SiginComponent,SigupComponent,Prd_detailComponent,oderComponent,profileComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
