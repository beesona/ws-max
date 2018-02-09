export interface IAddress {
    id?: any;
    city: string;
    type?: string;
    state: string;
    street1: string;
    street2?: string;
    postalCode: string;
    countryCode: string;
}

export interface IPhone {
    type?: string;
    phoneNumber: string;
}

export interface IEmailAddress {
    type?: string;
    emailAddress: string;
}

// export interface Account {
//   AccountNumber: string;
//   IsActive: boolean;
//   ResultStatus: string;
//   SystemName: string;
//   LastUpdated: Date;
//   CurrentSchoolEnrollment: ICurrentSchoolEnrollment;
//   MaximumDaysPastDue: number;
//   DelinquentAmount: number;
//   OutstandingPrincipalBalance: number;
//   OutstandingInterest: number;
//   OutstandingFees: number;
//   TenDayPayoffAmount: number;
//   TotalBalance: number;
//   RegularPaymentAmount: number;
//   LastPaymentDate: Date;
//   LastPaymentAmount: number;
//   CurrentPaymentAmountDue: number;
//   DailyInterestAmount: number;
// }

export interface IBorrower {
    borrowerId: any;
    tenantId: number;
    clientId: number;
    firstName: string;
    middleName: string;
    lastName: string;
    ssn: string;
    dob: Date;
    activeMilitary: boolean;
    activePrivacy: boolean;
    createdDate: Date;
    updatedDate: Date;
    externalReferenceId: string;
    address: IAddress;
    addresses: IAddress[];
    phones: IPhone[];
    emailAddresses: IEmailAddress[];
    // account: Account;
    // accounts: Account[];
}
