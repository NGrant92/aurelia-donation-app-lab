import {inject} from 'aurelia-framework';
import DonationService from '../services/donation-service';

@inject(DonationService)
export class User {

  signUpFirstName = '';
  signUpLastName = '';
  signUpEmail = '';
  signUpPassword = '';

  constructor(ds) {
    this.donationService = ds;
  }

  signUpUser() {
    this.donationService.addUser(this.signUpFirstName, this.signUpLastName, this.signUpEmail, this.signUpPassword);
  }
}
