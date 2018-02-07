export interface IAddress {
    Id?: any;
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

export interface Account {
    AccountNumber: string;
    IsActive: boolean;
    ResultStatus: string;
    SystemName: string;
    LastUpdated: Date;
    CurrentSchoolEnrollment: ICurrentSchoolEnrollment;
    MaximumDaysPastDue: number;
    DelinquentAmount: number;
    OutstandingPrincipalBalance: number;
    OutstandingInterest: number;
    OutstandingFees: number;
    TenDayPayoffAmount: number;
    TotalBalance: number;
    RegularPaymentAmount: number;
    LastPaymentDate: Date;
    LastPaymentAmount: number;
    CurrentPaymentAmountDue: number;
    DailyInterestAmount: number;
}

export interface IBorrower {
    borrowerId: any;
    tenantId: number;
    clientId: number;
    firstName: string;
    middleName: string;
    lastName: string;
    ssn: string;
    dob: Date;
    address: IAddress;
    addresses: IAddress[];
    phones: IPhone[];
    emailAddresses: IEmailAddress[];
    account: Account;
    accounts: Account[];
    Groups?: any;
    Loans?: any;
    Notes?: any;
    Verifications: any[];
    IsLegalStatus: boolean;
    CpcFlag: string;
    AddressStatus: string;
    PhoneStatus: string;
    NewBorrowerFlag?: any;
    ECorrFlag: boolean;
    ECorrOutOfSync: boolean;
    FederalDefermentEligibility: any[];
    FederalDefermentEligibilityOutOfSync: boolean;
    KwikPayFlag: boolean;
    KwikPayOutOfSync: boolean;
    MmaUsername?: any;
    MmaLastLogin: Date;
    LastDemographicVerificationDate?: any;
    LastDemographicVerificationDateOutOfSync: boolean;
    RefreshedDate: Date;
    BorrowerBeaconId?: any;
    SystemName: string;
    EntityState?: any;
    ResultStatus?: any;
    LastUpdated: Date;
    EmailInSync: boolean;
    EnrollmentStatusInSync: boolean;
    SchoolInSync: boolean;
    Messages: any[];
}
