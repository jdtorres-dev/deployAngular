import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProfileFormComponent } from './components/profile-form/profile-form.component';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    ProfileFormComponent
  ],
  imports: [
    CommonModule, 
    UserRoutingModule,
    FormsModule,
    MatFormFieldModule, MatInputModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
