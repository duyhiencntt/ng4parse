import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthRoutes } from './auth.routing';
import { RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { MatButtonModule, MatToolbarModule, MatCardModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';

const MATERIAL_MODULES = [
  MatButtonModule, MatToolbarModule, MatCardModule, MatInputModule, MatSnackBarModule 
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(AuthRoutes),
    ...MATERIAL_MODULES
  ],
  declarations: [
    LoginComponent,
    LogoutComponent,
    ForgotPasswordComponent,
    RegistrationComponent
  ],
  exports: [
    LoginComponent
  ],
  providers: []
})
export class AuthModule { }
