

export interface IAchDetails {
    routingNumber: string;
    bankAccount: string;
    accountType: string;
}

export interface IPaymentSubmitData {
    tenantId: number;
    clientId: number;
    status: string;
    source: string;
    paymentRequestId: string;
    payerId: string;
    payerType: string;
    loanId: string;
    amount: number;
    postDate?: any;
    effectiveDate: Date;
    requestedDate: Date;
    externalReferenceId: string;
    customData?: any;
    relatedId: string;
    paymentType: string;
    createdDate: Date;
    updatedDate: Date;
    achDetails: IAchDetails;
    borrowerID: string;
}



