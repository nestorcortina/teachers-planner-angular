import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { AuthService } from './auth/auth.service'
import { SigninComponent } from './pages/signin/signin.component'
import { HomeComponent } from './pages/home/home.component'
import { AboutusComponent } from './pages/aboutus/aboutus.component'
import { ContacusComponent } from './pages/contacus/contacus.component'

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin',
    component: HomeComponent,
    canActivate: [AuthService]
  },
  { path: 'about', component: AboutusComponent },
  { path: 'contact', component: ContacusComponent },
  { path: 'signin', component: SigninComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
