import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ABOUTComponent } from './about/about.component';
import { BLOGComponent } from './blog/blog.component';
import { CONTACTUSComponent } from './contactus/contactus.component';
import { EQUIPMENTComponent } from './equipment/equipment.component';
import { FooterComponent } from './footer/footer.component';
import { GALLERYComponent } from './gallery/gallery.component';
import { HOMEComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NEWSComponent } from './news/news.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path:'home',component:HOMEComponent},
  { path:'about',component:ABOUTComponent},
  { path:'gallery',component:GALLERYComponent},
  {path:'blog',component:BLOGComponent},
  {path:'news',component:NEWSComponent},
  {path:'contactus',component:CONTACTUSComponent},
  {path:'equipment',component:EQUIPMENTComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path: '',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent},
  
];

 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
