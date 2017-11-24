import { Injectable } from '@angular/core';

@Injectable()
export class BorrowerDemographicsService {

  constructor() { }

  getBorrowerDemographics(ssn: string): any {

      //try search first by ssn
      console.log('searching by ssn: ' + ssn);
      //if that returns nothing, try again by account #
      return {
      firstName: 'ADAM',
      middleInitial: 'G',
      lastName: 'BEESON',
      ssn: '254-78-4571',
      dob: '09/04/1984',
      enrollmentStatus: 'No Enrollment Status',
      mmaAccountId: 'beesona',
      schoolName: 'Colorado State University- Pueblo',
      schoolCode: '001394',
      graduationDate: '07/12/2007',
      accounts: [
        {
          accountId: '456987123',
          type: 'DEN'
        },
        {
          accountId: '152487956',
          type: 'ED'
        }
      ],
      addresses: [
        {
          addressLine1: '255 S Cherokee St.',
          addressLine2: 'APT 2117',
          city: 'Denver',
          state: 'CO',
          zip: '80223'
        }
      ],
      phones: [
        {
          phoneNumber: '7192142446',
          phoneType: 'primary',
          cpc: true
        }
      ],
      emails: [
        {
          emailAddress: 'beesona@gmail.com',
          emailType: 'primary'
        }
      ],
      ecorr: true,
      moneySignThing: true
    };
  }

}
