import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './Pages/login/login.component';
import { HeaderComponent } from './Pages/header/header.component';
import { FooterComponent } from './Pages/footer/footer.component';
import { EmployeeLoginComponent } from './Pages/employee-login/employee-login.component';
import { PageNotFoundComponent } from './Pages/page-not-found/page-not-found.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCustomTableComponent } from './Pages/mat-custom-table/mat-custom-table.component';
import { MaterialModule } from './Shared/material.module';
import { MatTableComponent } from './Pages/mat-table/mat-table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActionButtonsComponent } from './Pages/action-buttons/action-buttons.component';


const routes: Routes = [
  { path: "", component: MatTableComponent },
  // { path: "", component: LoginComponent },

  { path: "login", component: LoginComponent },
  { path: "employe-login", component: EmployeeLoginComponent },
  { path: "page-not-found", component: PageNotFoundComponent },
  { path: "**", component: PageNotFoundComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeLoginComponent,
    PageNotFoundComponent,
    MatCustomTableComponent,
    MatTableComponent,
    ActionButtonsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
