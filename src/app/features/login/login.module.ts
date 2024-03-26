import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  bootstrap: [LoginComponent],
  exports: [LoginComponent],
})
export class LoginModule {}
