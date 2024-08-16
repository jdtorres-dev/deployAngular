import { Component} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Profile } from '../../models/profile';
@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss'],
})
export class ProfileFormComponent {
  profileForm: FormGroup;
  constructor(private fb: FormBuilder){
    this.profileForm = this.fb.group({
      email: ['sample@sample.com',[Validators.required,Validators.email]],
      name: ['Sample Test',[Validators.required]],
      bio: ['Dummy Dummy Dummy Dummy Dummy Dummy Dummy Dummy Dummy',[Validators.required]],
      active: ['Yes',[Validators.required]],
    })
  }

  onSubmit = () => {
    const userProfile: Profile = this.profileForm.getRawValue() as Profile;
    console.log('form', this.profileForm.getRawValue());
  };

  get email() {
    return this.profileForm.get('email') as FormControl;
  }
  get name() {
    return this.profileForm.get('name') as FormControl;
  }
  get bio() {
    return this.profileForm.get('bio') as FormControl;
  }
  get active() {
    return this.profileForm.get('active') as FormControl;
  }
  }
