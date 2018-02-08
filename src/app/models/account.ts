export interface ILender {
    lenderId: string;
}

export interface IBorrower {
    borrowerId: string;
    borrowerType: string;
}

export interface IAccount {
    loanId: string;
    loanProgramId: string;
    term: number;
    amount: number;
    interestRate: number;
    margin: number;
    rateType: string;
    dueDay: number;
    createdDate: Date;
    disbursementDate: Date;
    firstPaymentDate: Date;
    updatedDate: Date;
    status: string;
    loanReferenceId: string;
    externalReferenceId: string;
    customData: any;
    updatedBy: any;
    isActive: boolean;
    lender: ILender;
    borrowers: IBorrower[];
}

export interface IAccountData {
    data: IAccount;
}
