import {inject} from 'aurelia-framework';
import Fixtures from './fixtures';

@inject(Fixtures)
export default class DonationService {

  donations = [];
  methods = [];
  candidates = [];
  total = 0;

  constructor(data) {
    this.donations = data.donations;
    this.candidates = data.candidates;
    this.methods = data.methods;
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
}
