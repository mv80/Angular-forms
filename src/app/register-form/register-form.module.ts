import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './register-form.component';
import {MatInputModule} from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [RegisterFormComponent],
  imports: [
    CommonModule,
    MatInputModule,
    BrowserModule,
    FormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,

  ],
  providers :[MatNativeDateModule]
})
export class RegisterFormModule { }
