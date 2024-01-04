import localVarRequest from 'request';

export * from './account';
export * from './accountBalance';
export * from './address';
export * from './attachment';
export * from './bankAccountRequest';
export * from './bankAccountResult';
export * from './company';
export * from './contact';
export * from './contactNote';
export * from './contactPerson';
export * from './counter';
export * from './creditNoteLineResult';
export * from './creditNoteResult';
export * from './draftLineRequest';
export * from './draftLineResult';
export * from './draftRequest';
export * from './draftResult';
export * from './fullCreditNoteRequest';
export * from './generalJournalEntryRequest';
export * from './inboxResult';
export * from './invoiceLineRequest';
export * from './invoiceLineResult';
export * from './invoiceRequest';
export * from './invoiceResult';
export * from './invoiceishDraftLine';
export * from './invoiceishDraftRequest';
export * from './invoiceishDraftResult';
export * from './journalEntry';
export * from './journalEntryLine';
export * from './offer';
export * from './orderConfirmation';
export * from './orderLine';
export * from './partialCreditNoteRequest';
export * from './payment';
export * from './product';
export * from './productSalesLineInfo';
export * from './productSalesReportRequest';
export * from './productSalesReportResult';
export * from './projectRequest';
export * from './projectResult';
export * from './purchaseRequest';
export * from './purchaseResult';
export * from './saleRequest';
export * from './saleResult';
export * from './sendCreditNoteRequest';
export * from './sendInvoiceRequest';
export * from './sendInvoiceishRequest';
export * from './transaction';
export * from './updateInvoiceRequest';
export * from './updateProjectRequest';
export * from './userinfo';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { Account } from './account';
import { AccountBalance } from './accountBalance';
import { Address } from './address';
import { Attachment } from './attachment';
import { BankAccountRequest } from './bankAccountRequest';
import { BankAccountResult } from './bankAccountResult';
import { Company } from './company';
import { Contact } from './contact';
import { ContactNote } from './contactNote';
import { ContactPerson } from './contactPerson';
import { Counter } from './counter';
import { CreditNoteLineResult } from './creditNoteLineResult';
import { CreditNoteResult } from './creditNoteResult';
import { DraftLineRequest } from './draftLineRequest';
import { DraftLineResult } from './draftLineResult';
import { DraftRequest } from './draftRequest';
import { DraftResult } from './draftResult';
import { FullCreditNoteRequest } from './fullCreditNoteRequest';
import { GeneralJournalEntryRequest } from './generalJournalEntryRequest';
import { InboxResult } from './inboxResult';
import { InvoiceLineRequest } from './invoiceLineRequest';
import { InvoiceLineResult } from './invoiceLineResult';
import { InvoiceRequest } from './invoiceRequest';
import { InvoiceResult } from './invoiceResult';
import { InvoiceishDraftLine } from './invoiceishDraftLine';
import { InvoiceishDraftRequest } from './invoiceishDraftRequest';
import { InvoiceishDraftResult } from './invoiceishDraftResult';
import { JournalEntry } from './journalEntry';
import { JournalEntryLine } from './journalEntryLine';
import { Offer } from './offer';
import { OrderConfirmation } from './orderConfirmation';
import { OrderLine } from './orderLine';
import { PartialCreditNoteRequest } from './partialCreditNoteRequest';
import { Payment } from './payment';
import { Product } from './product';
import { ProductSalesLineInfo } from './productSalesLineInfo';
import { ProductSalesReportRequest } from './productSalesReportRequest';
import { ProductSalesReportResult } from './productSalesReportResult';
import { ProjectRequest } from './projectRequest';
import { ProjectResult } from './projectResult';
import { PurchaseRequest } from './purchaseRequest';
import { PurchaseResult } from './purchaseResult';
import { SaleRequest } from './saleRequest';
import { SaleResult } from './saleResult';
import { SendCreditNoteRequest } from './sendCreditNoteRequest';
import { SendInvoiceRequest } from './sendInvoiceRequest';
import { SendInvoiceishRequest } from './sendInvoiceishRequest';
import { Transaction } from './transaction';
import { UpdateInvoiceRequest } from './updateInvoiceRequest';
import { UpdateProjectRequest } from './updateProjectRequest';
import { Userinfo } from './userinfo';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "Attachment.TypeEnum": Attachment.TypeEnum,
        "BankAccountRequest.TypeEnum": BankAccountRequest.TypeEnum,
        "BankAccountResult.TypeEnum": BankAccountResult.TypeEnum,
        "Company.VatTypeEnum": Company.VatTypeEnum,
        "InvoiceishDraftRequest.TypeEnum": InvoiceishDraftRequest.TypeEnum,
        "InvoiceishDraftResult.TypeEnum": InvoiceishDraftResult.TypeEnum,
        "PurchaseRequest.KindEnum": PurchaseRequest.KindEnum,
        "PurchaseResult.KindEnum": PurchaseResult.KindEnum,
        "SaleRequest.KindEnum": SaleRequest.KindEnum,
        "SaleResult.KindEnum": SaleResult.KindEnum,
        "SendCreditNoteRequest.MethodEnum": SendCreditNoteRequest.MethodEnum,
        "SendCreditNoteRequest.EmailSendOptionEnum": SendCreditNoteRequest.EmailSendOptionEnum,
        "SendInvoiceRequest.MethodEnum": SendInvoiceRequest.MethodEnum,
        "SendInvoiceRequest.EmailSendOptionEnum": SendInvoiceRequest.EmailSendOptionEnum,
        "SendInvoiceishRequest.MethodEnum": SendInvoiceishRequest.MethodEnum,
        "SendInvoiceishRequest.EmailSendOptionEnum": SendInvoiceishRequest.EmailSendOptionEnum,
}

let typeMap: {[index: string]: any} = {
    "Account": Account,
    "AccountBalance": AccountBalance,
    "Address": Address,
    "Attachment": Attachment,
    "BankAccountRequest": BankAccountRequest,
    "BankAccountResult": BankAccountResult,
    "Company": Company,
    "Contact": Contact,
    "ContactNote": ContactNote,
    "ContactPerson": ContactPerson,
    "Counter": Counter,
    "CreditNoteLineResult": CreditNoteLineResult,
    "CreditNoteResult": CreditNoteResult,
    "DraftLineRequest": DraftLineRequest,
    "DraftLineResult": DraftLineResult,
    "DraftRequest": DraftRequest,
    "DraftResult": DraftResult,
    "FullCreditNoteRequest": FullCreditNoteRequest,
    "GeneralJournalEntryRequest": GeneralJournalEntryRequest,
    "InboxResult": InboxResult,
    "InvoiceLineRequest": InvoiceLineRequest,
    "InvoiceLineResult": InvoiceLineResult,
    "InvoiceRequest": InvoiceRequest,
    "InvoiceResult": InvoiceResult,
    "InvoiceishDraftLine": InvoiceishDraftLine,
    "InvoiceishDraftRequest": InvoiceishDraftRequest,
    "InvoiceishDraftResult": InvoiceishDraftResult,
    "JournalEntry": JournalEntry,
    "JournalEntryLine": JournalEntryLine,
    "Offer": Offer,
    "OrderConfirmation": OrderConfirmation,
    "OrderLine": OrderLine,
    "PartialCreditNoteRequest": PartialCreditNoteRequest,
    "Payment": Payment,
    "Product": Product,
    "ProductSalesLineInfo": ProductSalesLineInfo,
    "ProductSalesReportRequest": ProductSalesReportRequest,
    "ProductSalesReportResult": ProductSalesReportResult,
    "ProjectRequest": ProjectRequest,
    "ProjectResult": ProjectResult,
    "PurchaseRequest": PurchaseRequest,
    "PurchaseResult": PurchaseResult,
    "SaleRequest": SaleRequest,
    "SaleResult": SaleResult,
    "SendCreditNoteRequest": SendCreditNoteRequest,
    "SendInvoiceRequest": SendInvoiceRequest,
    "SendInvoiceishRequest": SendInvoiceishRequest,
    "Transaction": Transaction,
    "UpdateInvoiceRequest": UpdateInvoiceRequest,
    "UpdateProjectRequest": UpdateProjectRequest,
    "Userinfo": Userinfo,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
