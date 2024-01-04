export * from '../models/Account';
export * from '../models/AccountBalance';
export * from '../models/Address';
export * from '../models/Attachment';
export * from '../models/BankAccountRequest';
export * from '../models/BankAccountResult';
export * from '../models/Company';
export * from '../models/Contact';
export * from '../models/ContactNote';
export * from '../models/ContactPerson';
export * from '../models/Counter';
export * from '../models/CreditNoteLineResult';
export * from '../models/CreditNoteResult';
export * from '../models/DraftLineRequest';
export * from '../models/DraftLineResult';
export * from '../models/DraftRequest';
export * from '../models/DraftResult';
export * from '../models/FullCreditNoteRequest';
export * from '../models/GeneralJournalEntryRequest';
export * from '../models/InboxResult';
export * from '../models/InvoiceLineRequest';
export * from '../models/InvoiceLineResult';
export * from '../models/InvoiceRequest';
export * from '../models/InvoiceResult';
export * from '../models/InvoiceishDraftLine';
export * from '../models/InvoiceishDraftRequest';
export * from '../models/InvoiceishDraftResult';
export * from '../models/JournalEntry';
export * from '../models/JournalEntryLine';
export * from '../models/Offer';
export * from '../models/OrderConfirmation';
export * from '../models/OrderLine';
export * from '../models/PartialCreditNoteRequest';
export * from '../models/Payment';
export * from '../models/Product';
export * from '../models/ProductSalesLineInfo';
export * from '../models/ProductSalesReportRequest';
export * from '../models/ProductSalesReportResult';
export * from '../models/ProjectRequest';
export * from '../models/ProjectResult';
export * from '../models/PurchaseRequest';
export * from '../models/PurchaseResult';
export * from '../models/SaleRequest';
export * from '../models/SaleResult';
export * from '../models/SendCreditNoteRequest';
export * from '../models/SendInvoiceRequest';
export * from '../models/SendInvoiceishRequest';
export * from '../models/Transaction';
export * from '../models/UpdateInvoiceRequest';
export * from '../models/UpdateProjectRequest';
export * from '../models/Userinfo';

import { Account } from '../models/Account';
import { AccountBalance } from '../models/AccountBalance';
import { Address } from '../models/Address';
import { Attachment    , AttachmentTypeEnum   } from '../models/Attachment';
import { BankAccountRequest     , BankAccountRequestTypeEnum    } from '../models/BankAccountRequest';
import { BankAccountResult       , BankAccountResultTypeEnum      } from '../models/BankAccountResult';
import { Company   , CompanyVatTypeEnum          } from '../models/Company';
import { Contact } from '../models/Contact';
import { ContactNote } from '../models/ContactNote';
import { ContactPerson } from '../models/ContactPerson';
import { Counter } from '../models/Counter';
import { CreditNoteLineResult } from '../models/CreditNoteLineResult';
import { CreditNoteResult } from '../models/CreditNoteResult';
import { DraftLineRequest } from '../models/DraftLineRequest';
import { DraftLineResult } from '../models/DraftLineResult';
import { DraftRequest } from '../models/DraftRequest';
import { DraftResult } from '../models/DraftResult';
import { FullCreditNoteRequest } from '../models/FullCreditNoteRequest';
import { GeneralJournalEntryRequest } from '../models/GeneralJournalEntryRequest';
import { InboxResult } from '../models/InboxResult';
import { InvoiceLineRequest } from '../models/InvoiceLineRequest';
import { InvoiceLineResult } from '../models/InvoiceLineResult';
import { InvoiceRequest } from '../models/InvoiceRequest';
import { InvoiceResult } from '../models/InvoiceResult';
import { InvoiceishDraftLine } from '../models/InvoiceishDraftLine';
import { InvoiceishDraftRequest, InvoiceishDraftRequestTypeEnum                   } from '../models/InvoiceishDraftRequest';
import { InvoiceishDraftResult  , InvoiceishDraftResultTypeEnum                      } from '../models/InvoiceishDraftResult';
import { JournalEntry } from '../models/JournalEntry';
import { JournalEntryLine } from '../models/JournalEntryLine';
import { Offer } from '../models/Offer';
import { OrderConfirmation } from '../models/OrderConfirmation';
import { OrderLine } from '../models/OrderLine';
import { PartialCreditNoteRequest } from '../models/PartialCreditNoteRequest';
import { Payment } from '../models/Payment';
import { Product } from '../models/Product';
import { ProductSalesLineInfo } from '../models/ProductSalesLineInfo';
import { ProductSalesReportRequest } from '../models/ProductSalesReportRequest';
import { ProductSalesReportResult } from '../models/ProductSalesReportResult';
import { ProjectRequest } from '../models/ProjectRequest';
import { ProjectResult } from '../models/ProjectResult';
import { PurchaseRequest    , PurchaseRequestKindEnum          } from '../models/PurchaseRequest';
import { PurchaseResult     , PurchaseResultKindEnum              } from '../models/PurchaseResult';
import { SaleRequest  , SaleRequestKindEnum              } from '../models/SaleRequest';
import { SaleResult     , SaleResultKindEnum                      } from '../models/SaleResult';
import { SendCreditNoteRequest, SendCreditNoteRequestMethodEnum      , SendCreditNoteRequestEmailSendOptionEnum       } from '../models/SendCreditNoteRequest';
import { SendInvoiceRequest, SendInvoiceRequestMethodEnum      , SendInvoiceRequestEmailSendOptionEnum       } from '../models/SendInvoiceRequest';
import { SendInvoiceishRequest, SendInvoiceishRequestMethodEnum      , SendInvoiceishRequestEmailSendOptionEnum      } from '../models/SendInvoiceishRequest';
import { Transaction } from '../models/Transaction';
import { UpdateInvoiceRequest } from '../models/UpdateInvoiceRequest';
import { UpdateProjectRequest } from '../models/UpdateProjectRequest';
import { Userinfo } from '../models/Userinfo';

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

let enumsMap: Set<string> = new Set<string>([
    "AttachmentTypeEnum",
    "BankAccountRequestTypeEnum",
    "BankAccountResultTypeEnum",
    "CompanyVatTypeEnum",
    "InvoiceishDraftRequestTypeEnum",
    "InvoiceishDraftResultTypeEnum",
    "PurchaseRequestKindEnum",
    "PurchaseResultKindEnum",
    "SaleRequestKindEnum",
    "SaleResultKindEnum",
    "SendCreditNoteRequestMethodEnum",
    "SendCreditNoteRequestEmailSendOptionEnum",
    "SendInvoiceRequestMethodEnum",
    "SendInvoiceRequestEmailSendOptionEnum",
    "SendInvoiceishRequestMethodEnum",
    "SendInvoiceishRequestEmailSendOptionEnum",
]);

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

type MimeTypeDescriptor = {
    type: string;
    subtype: string;
    subtypeTokens: string[];
};

/**
 * Every mime-type consists of a type, subtype, and optional parameters.
 * The subtype can be composite, including information about the content format.
 * For example: `application/json-patch+json`, `application/merge-patch+json`.
 *
 * This helper transforms a string mime-type into an internal representation.
 * This simplifies the implementation of predicates that in turn define common rules for parsing or stringifying
 * the payload.
 */
const parseMimeType = (mimeType: string): MimeTypeDescriptor => {
    const [type, subtype] = mimeType.split('/');
    return {
        type,
        subtype,
        subtypeTokens: subtype.split('+'),
    };
};

type MimeTypePredicate = (mimeType: string) => boolean;

// This factory creates a predicate function that checks a string mime-type against defined rules.
const mimeTypePredicateFactory = (predicate: (descriptor: MimeTypeDescriptor) => boolean): MimeTypePredicate => (mimeType) => predicate(parseMimeType(mimeType));

// Use this factory when you need to define a simple predicate based only on type and, if applicable, subtype.
const mimeTypeSimplePredicateFactory = (type: string, subtype?: string): MimeTypePredicate => mimeTypePredicateFactory((descriptor) => {
    if (descriptor.type !== type) return false;
    if (subtype != null && descriptor.subtype !== subtype) return false;
    return true;
});

// Creating a set of named predicates that will help us determine how to handle different mime-types
const isTextLikeMimeType = mimeTypeSimplePredicateFactory('text');
const isJsonMimeType = mimeTypeSimplePredicateFactory('application', 'json');
const isJsonLikeMimeType = mimeTypePredicateFactory((descriptor) => descriptor.type === 'application' && descriptor.subtypeTokens.some((item) => item === 'json'));
const isOctetStreamMimeType = mimeTypeSimplePredicateFactory('application', 'octet-stream');
const isFormUrlencodedMimeType = mimeTypeSimplePredicateFactory('application', 'x-www-form-urlencoded');

// Defining a list of mime-types in the order of prioritization for handling.
const supportedMimeTypePredicatesWithPriority: MimeTypePredicate[] = [
    isJsonMimeType,
    isJsonLikeMimeType,
    isTextLikeMimeType,
    isOctetStreamMimeType,
    isFormUrlencodedMimeType,
];

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap.has(expectedType)) {
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

    public static serialize(data: any, type: string, format: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let date of data) {
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth()+1
                month = month < 10 ? "0" + month.toString() : month.toString()
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();

                return data.getFullYear() + "-" + month + "-" + day;
            } else {
                return data.toISOString();
            }
        } else {
            if (enumsMap.has(type)) {
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
            for (let attributeType of attributeTypes) {
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string, format: string) {
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
            for (let date of data) {
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap.has(type)) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let attributeType of attributeTypes) {
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }


    /**
     * Normalize media type
     *
     * We currently do not handle any media types attributes, i.e. anything
     * after a semicolon. All content is assumed to be UTF-8 compatible.
     */
    public static normalizeMediaType(mediaType: string | undefined): string | undefined {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }

    /**
     * From a list of possible media types, choose the one we can handle best.
     *
     * The order of the given media types does not have any impact on the choice
     * made.
     */
    public static getPreferredMediaType(mediaTypes: Array<string>): string {
        /** According to OAS 3 we should default to json */
        if (mediaTypes.length === 0) {
            return "application/json";
        }

        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);

        for (const predicate of supportedMimeTypePredicatesWithPriority) {
            for (const mediaType of normalMediaTypes) {
                if (mediaType != null && predicate(mediaType)) {
                    return mediaType;
                }
            }
        }

        throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
    }

    /**
     * Convert data to a string according the given media type
     */
    public static stringify(data: any, mediaType: string): string {
        if (isTextLikeMimeType(mediaType)) {
            return String(data);
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.stringify(data);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }

    /**
     * Parse data from a string according to the given media type
     */
    public static parse(rawData: string, mediaType: string | undefined) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }

        if (isTextLikeMimeType(mediaType)) {
            return rawData;
        }

        if (isJsonLikeMimeType(mediaType)) {
            return JSON.parse(rawData);
        }

        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
