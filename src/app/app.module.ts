import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HOMEComponent } from './home/home.component';
import { ABOUTComponent } from './about/about.component';
import { GALLERYComponent } from './gallery/gallery.component';
import { BLOGComponent } from './blog/blog.component';
import { NEWSComponent } from './news/news.component';
import { CONTACTUSComponent } from './contactus/contactus.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { EQUIPMENTComponent } from './equipment/equipment.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';



@NgModule({
  declarations: [
    AppComponent,
    HOMEComponent,
    ABOUTComponent,
    GALLERYComponent,
    BLOGComponent,
    NEWSComponent,
    CONTACTUSComponent,
    PagenotfoundComponent,
    EQUIPMENTComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
