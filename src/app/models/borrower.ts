export interface IAddress {
    Id?: any;
    IsActive: boolean;
    IsValid: boolean;
    AddDate: Date;
    SystemName: string;
    EntityState?: any;
    LastUpdated: Date;
    Source: string;
    AddressLine1: string;
    AddressLine2: string;
    City: string;
    State: string;
    Zip: string;
    Country: string;
    AddressType: string;
    Priority: number;
    AddressStatus: string;
}

export interface IPhone {
    Prefix?: any;
    PhoneType: string;
    AddDate: Date;
    IsCellPhone: boolean;
    IsActive: boolean;
    SystemName: string;
    EntityState?: any;
    LastUpdated: Date;
    IsValid: boolean;
    OutOfSync: boolean;
    CountryCode?: any;
    PhoneNumber: string;
    Priority: number;
    CpcFlag: string;
    CpcDate: Date;
    IsInternational: boolean;
    InternationalPhoneExchange: string;
}

export interface IEmailAddress {
    AddDate: Date;
    SystemName: string;
    EntityState?: any;
    OutOfSync: boolean;
    IsValid: boolean;
    Email: string;
    LastContactMadeIndicator?: any;
    EmailType: string;
    EmailStatus: string;
    Priority: number;
}

export interface ICurrentSchool {
    SchoolCode: string;
    SchoolBranch: string;
    SchoolName: string;
}

export interface ICurrentSchoolEnrollment {
    CurrentSchool: ICurrentSchool;
    EnrollmentStatus: string;
    EnrollmentStatusDescription: string;
    LastEnrollmentDate: Date;
    SchoolCertDate: Date;
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
    Id?: any;
    Ssn: string;
    BirthDate: Date;
    FirstName: string;
    MiddleInitial: string;
    LastName: string;
    Address: IAddress;
    Addresses: IAddress[];
    AddressesInSync: boolean;
    Phones: IPhone[];
    EmailAddresses: IEmailAddress[];
    Account: Account;
    Accounts: Account[];
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
