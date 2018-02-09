

export interface ICustomData {
}

export interface IAchDetails {
    routingNumber: string;
    bankAccount: string;
    accountType: string;
}

export interface IProcessorData {
}

export interface IPaymentDetails {
    paymentRequestId: string;
    tenantId: string;
    clientId: string;
    payerId: string;
    payerType: string;
    loanId: string;
    amount: number;
    postDate: Date;
    effectiveDate: Date;
    requestedDate: Date;
    status: string;
    source: string;
    externalReferenceId: string;
    paymentType: string;
    customData: ICustomData;
    achDetails: IAchDetails;
    processorData: IProcessorData;
    relatedId: string;
    createdDate: Date;
    updatedDate: Date;
}

export interface IPaymentData {
    data: IPaymentDetails[];
}



