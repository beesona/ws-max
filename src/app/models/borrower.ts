export interface IAddress {
    city: string;
    type: string;
    state: string;
    street1: string;
    street2: string;
    postalCode: string;
    countryCode: string;
}

export interface IPhone {
    type: string;
    phoneNumber: string;
}

export interface IEmailAddress {
    type: string;
    emailAddress: string;
}

export interface ICustomData {
    participantId: string;
}

export interface IBorrower {
    borrowerId: string;
    tenantId: number;
    clientId: number;
    firstName: string;
    middleName: string;
    lastName: string;
    ssn: string;
    dob: Date;
    addresses: IAddress[];
    phones: IPhone[];
    emailAddresses: IEmailAddress[];
    customData: ICustomData;
    activeMilitary: boolean;
    activePrivacy: boolean;
    createdDate: Date;
    updatedDate: Date;
    externalReferenceId: string;
}

export interface IBorrowerData {
    data: IBorrower;
}

export class Borrower implements IBorrower{
    borrowerId = '';
    tenantId = -1
    clientId = -1;
    firstName = '';
    middleName = '';
    lastName = '';
    ssn = '';
    dob = new Date("01-01-0001");
    addresses =  new Array<Address>();
    phones = new Array<Phone>();
    emailAddresses = new Array<Email>();
    customData = new CustomData;
    activeMilitary = false;
    activePrivacy = false;
    createdDate = new Date("01-01-0001");
    updatedDate = new Date("01-01-0001");
    externalReferenceId = '';
}

export class CustomData implements ICustomData{
    participantId = '';
}
    
export class Address implements IAddress {
    street1 = ''
    street2 = '';
    city = '';
    state = '';
    postalCode = '';
    countryCode = '';
    type = '';
  }
  
  export class Phone implements IPhone {
    phoneNumber = '';
    type = '';
  }
  
  export class Email implements IEmailAddress {
    emailAddress = '';
    type = '';
  }