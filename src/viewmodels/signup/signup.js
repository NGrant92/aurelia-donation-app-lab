import {inject} from 'aurelia-framework';
import {EventAggregator} from 'aurelia-event-aggregator';
import DonationService from '../../services/donation-service';
import {LoginStatus} from '../../services/messages';

@inject(EventAggregator, DonationService)
export class Signup {

  regFirstName = 'Bart';
  regLastName = 'Simpson';
  regEmail = 'bart@simpson.com';
  regPassword = 'secret';

  constructor(ea, ds) {
    this.ea = ea;
    this.donationService = ds;
  }

  register(e) {
    this.showSignup = false;
    this.donationService.addUser(this.regFirstName, this.regLastName, this.regEmail, this.regPassword);
    const status = this.donationService.login(this.regEmail, this.regPassword);
    this.ea.publish(new LoginStatus(status));
  }
}
