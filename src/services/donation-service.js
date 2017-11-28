import {inject} from 'aurelia-framework';
import Fixtures from './fixtures';

import {TotalUpdate} from './messages';
import {EventAggregator} from 'aurelia-event-aggregator';

@inject(Fixtures, EventAggregator)
export default class DonationService {

  donations = [];
  methods = [];
  candidates = [];
  users = [];
  total = 0;

  constructor(data, ea) {
    this.donations = data.donations;
    this.candidates = data.candidates;
    this.methods = data.methods;
    this.users = data.users;
    this.ea = ea;
  }

  donate(amount, method, candidate) {
    const donation = {
      amount: amount,
      method: method,
      candidate: candidate
    };
    this.donations.push(donation);
    this.total = this.total + parseInt(amount, 10);
    console.log('Total so far: ' + this.total);
    this.ea.publish(new TotalUpdate(this.total));
    console.log(amount + ' donated to ' + candidate.firstName + ' ' + candidate.lastName + ': ' + method);
  }

  addCandidate(firstName, lastName, office) {
    const candidate = {
      firstName: firstName,
      lastName: lastName,
      office: office
    };
    this.candidates.push(candidate);
    console.log(candidate.firstName + ' ' + candidate.lastName + ' of office ' + candidate.office + ' is added to Candidate DB');
  }

  addUser(firstName, lastName, email, password) {
    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    };
    this.users.push(candidate);
    console.log(user.firstName + ' ' + user.lastName + ' is added to User DB');
    console.log(this.users[this.users.length - 1]);
  }
}
