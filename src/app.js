/* eslint-disable no-console */
import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import DonationService from './services/donation-service';
import {LoginStatus} from './services/messages';

@inject(DonationService, EventAggregator)
export class App {

  loggedIn = false;
  showSignup = false;

  constructor(ds, ea) {
    this.donationService = ds;
    ea.subscribe(LoginStatus, msg => {
      this.loggedIn = msg.status.success;
    });
  }

  signup() {
    this.showSignup = true;
  }

  logout() {
    console.log('Logging out');
    this.loggedIn = false;
  }
}
