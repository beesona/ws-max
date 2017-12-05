export interface ILender {
    LenderId: string;
    LenderNumber: string;
    LenderName: string;
}

export interface IGroup {
    AccountNumber: string;
    GroupId: string;
    LenderId: string;
    Lender: ILender;
    LoanType: string;
    LoanStatus: string;
    LoanStatusDescription: string;
    InterestRate: number;
    ConversionDate: Date;
    DaysPastDue: number;
    DisclosureDate: Date;
    DueDate: Date;
    LastPaymentAmount: number;
    LastPaymentDate: Date;
    CurrentPaymentAmount: number;
    PartialPaymentAmount: number;
    AchAlternateAmount: number;
    DelinquentAmount: number;
    ComakerSSN: string;
    RepaymentPlan: string;
    IdrIsPermStandard: boolean;
    IDRRecertificationDate?: any;
    SeparationDate: Date;
    ActiveLoanCount: number;
    IsActive: boolean;
    SystemName: string;
}

export interface IDisbursement {
    DisbursementDate: Date;
    PrincipleAmount: number;
    LoanNumber: number;
    DisbursmentNumber: number;
    Sequence: number;
    LenderId: string;
    Status: string;
    PostDate: number;
}

export interface ILoan {
    AccountNumber: string;
    GroupId: string;
    LoanNumber: number;
    LoanType: string;
    LenderId: string;
    Status: string;
    InterestRate: number;
    InterestRateReduction: number;
    EffectiveInterestRate: number;
    CurrentPrincipal: number;
    OutstandingInterest: number;
    DailyInterestAccrual: number;
    OutstandingFees: number;
    TotalBalance: number;
    DelinquentAmount: number;
    OriginalTerm: number;
    TermRemaining: number;
    RepaymentPlan?: any;
    CurrentPaymentAmount: number;
    HasAch: boolean;
    AchAlternateAmount: number;
    School: string;
    IsPrivate: boolean;
    IsActive: boolean;
    DeferEligibility: string;
    ConvertToRepayDate: Date;
    OriginalLoanBalance: number;
    CappedInterestAmount: number;
    PrincipalPaidYTD: number;
    InterestPaidYTD: number;
    GuarantorId: string;
    PeriodStartDate: Date;
    PeriodEndDate: Date;
    IsPlusConsol: boolean;
    IsSpousalConsol: boolean;
    PurchaseDate: Date;
    GovernmentSubsidyStatus: string;
    FirstDisbursementDate: Date;
    LastDisbursementDate: Date;
    Disbursements: IDisbursement[];
    SystemName: string;
}

export interface IAccount {
    Groups: IGroup[];
    Loans: ILoan[];
    FederalDefermentEligibility: string[];
    FederalDefermentEligibilityOutOfSync: boolean;
}