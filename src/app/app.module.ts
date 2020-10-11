import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HomeComponent } from './pages/home/home.component'
import { NavbarComponent } from './components/navbar/navbar.component'
import { FooterComponent } from './components/footer/footer.component'
import { ContacusComponent } from './pages/contacus/contacus.component'
import { AboutusComponent } from './pages/aboutus/aboutus.component'
import { SigninComponent } from './pages/signin/signin.component';
import { AdminComponent } from './pages/admin/admin.component';
import { TeacherRegistrationComponent } from './components/teacher-registration/teacher-registration.component';
import { ProgramRegistrationComponent } from './components/program-registration/program-registration.component';
import { FrequentQuestionsComponent } from './components/frequent-questions/frequent-questions.component'
import { FormsModule } from '@angular/forms';
import { PieChartComponent } from './components/pie-chart/pie-chart.component';
import { TableReportComponent } from './components/table-report/table-report.component';
import { SubjectsComponent } from './components/subjects/subjects.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ContacusComponent,
    AboutusComponent,
    SigninComponent,
    AdminComponent,
    TeacherRegistrationComponent,
    ProgramRegistrationComponent,
    FrequentQuestionsComponent,
    PieChartComponent,
    TableReportComponent,
    SubjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
