import {inject} from 'aurelia-framework';
import DonationService from '../services/donation-service';

@inject(DonationService)
export class Candidate {

  constructor(cs) {
    this.candidateService = cs;
  }

  addCandidate(){
    this.candidateService.newCandidate(this.firstName, this.lastName, this.office)
  }
}
