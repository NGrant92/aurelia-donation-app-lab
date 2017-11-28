/* eslint-disable no-console */
import {inject} from 'aurelia-framework';
import DonationService from './services/donation-service';

@inject(DonationService)
export class App {

  loggedIn = false;
  showSignup = false;

  constructor(ds) {
    this.donationService = ds;
  }

  signup() {
    this.showSignup = true;
  }

  login(e) {
    console.log(`Trying to log in ${this.email}`);
    const status = this.donationService.login(this.email, this.password);
    this.prompt = status.message;
    this.loggedIn = status.success;
  }

  logout() {
    console.log('Logging out`');
    this.loggedIn = false;
  }

  addUser(e) {
    this.showSignup = false;
    this.donationService.addUser(this.regFirstName, this.regLastName, this.regEmail, this.regPassword);
  }
}
