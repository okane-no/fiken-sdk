import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'

import { Account } from '../models/Account';
import { AccountBalance } from '../models/AccountBalance';
import { Address } from '../models/Address';
import { Attachment } from '../models/Attachment';
import { BankAccountRequest } from '../models/BankAccountRequest';
import { BankAccountResult } from '../models/BankAccountResult';
import { Company } from '../models/Company';
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
import { InvoiceishDraftRequest } from '../models/InvoiceishDraftRequest';
import { InvoiceishDraftResult } from '../models/InvoiceishDraftResult';
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
import { PurchaseRequest } from '../models/PurchaseRequest';
import { PurchaseResult } from '../models/PurchaseResult';
import { SaleRequest } from '../models/SaleRequest';
import { SaleResult } from '../models/SaleResult';
import { SendCreditNoteRequest } from '../models/SendCreditNoteRequest';
import { SendInvoiceRequest } from '../models/SendInvoiceRequest';
import { SendInvoiceishRequest } from '../models/SendInvoiceishRequest';
import { Transaction } from '../models/Transaction';
import { UpdateInvoiceRequest } from '../models/UpdateInvoiceRequest';
import { UpdateProjectRequest } from '../models/UpdateProjectRequest';
import { Userinfo } from '../models/Userinfo';

import { ObservableAccountBalancesApi } from "./ObservableAPI";
import { AccountBalancesApiRequestFactory, AccountBalancesApiResponseProcessor} from "../apis/AccountBalancesApi";

export interface AccountBalancesApiGetAccountBalanceRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof AccountBalancesApigetAccountBalance
     */
    companySlug: string
    /**
     * Code number of the bookkeeping account to retrieve
     * @type string
     * @memberof AccountBalancesApigetAccountBalance
     */
    accountCode: string
    /**
     * Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof AccountBalancesApigetAccountBalance
     */
    date: string
}

export interface AccountBalancesApiGetAccountBalancesRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof AccountBalancesApigetAccountBalances
     */
    companySlug: string
    /**
     * Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof AccountBalancesApigetAccountBalances
     */
    date: string
    /**
     * Filter parameter specifying which account numbers to return. Specify using the from and to parameters (excluding subaccount).
     * @type number
     * @memberof AccountBalancesApigetAccountBalances
     */
    fromAccount?: number
    /**
     * Filter parameter specifying which account numbers to return. Specify using the from and to parameters (excluding subaccount).
     * @type number
     * @memberof AccountBalancesApigetAccountBalances
     */
    toAccount?: number
    /**
     * Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @type number
     * @memberof AccountBalancesApigetAccountBalances
     */
    page?: number
    /**
     * Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @type number
     * @memberof AccountBalancesApigetAccountBalances
     */
    pageSize?: number
}

export class ObjectAccountBalancesApi {
    private api: ObservableAccountBalancesApi

    public constructor(configuration: Configuration, requestFactory?: AccountBalancesApiRequestFactory, responseProcessor?: AccountBalancesApiResponseProcessor) {
        this.api = new ObservableAccountBalancesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves the specified bookkeping account and balance for a given date.
     * @param param the request object
     */
    public getAccountBalanceWithHttpInfo(param: AccountBalancesApiGetAccountBalanceRequest, options?: Configuration): Promise<HttpInfo<AccountBalance>> {
        return this.api.getAccountBalanceWithHttpInfo(param.companySlug, param.accountCode, param.date,  options).toPromise();
    }

    /**
     * Retrieves the specified bookkeping account and balance for a given date.
     * @param param the request object
     */
    public getAccountBalance(param: AccountBalancesApiGetAccountBalanceRequest, options?: Configuration): Promise<AccountBalance> {
        return this.api.getAccountBalance(param.companySlug, param.accountCode, param.date,  options).toPromise();
    }

    /**
     * Retrieves the bookkeeping accounts and closing balances for a given date. An account is a string with either four digits, or four digits, a colon and five digits (\"reskontro\"). Examples: 3020 and 1500:10001 
     * @param param the request object
     */
    public getAccountBalancesWithHttpInfo(param: AccountBalancesApiGetAccountBalancesRequest, options?: Configuration): Promise<HttpInfo<Array<AccountBalance>>> {
        return this.api.getAccountBalancesWithHttpInfo(param.companySlug, param.date, param.fromAccount, param.toAccount, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Retrieves the bookkeeping accounts and closing balances for a given date. An account is a string with either four digits, or four digits, a colon and five digits (\"reskontro\"). Examples: 3020 and 1500:10001 
     * @param param the request object
     */
    public getAccountBalances(param: AccountBalancesApiGetAccountBalancesRequest, options?: Configuration): Promise<Array<AccountBalance>> {
        return this.api.getAccountBalances(param.companySlug, param.date, param.fromAccount, param.toAccount, param.page, param.pageSize,  options).toPromise();
    }

}

import { ObservableAccountsApi } from "./ObservableAPI";
import { AccountsApiRequestFactory, AccountsApiResponseProcessor} from "../apis/AccountsApi";

export interface AccountsApiGetAccountRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof AccountsApigetAccount
     */
    companySlug: string
    /**
     * Code number of the bookkeeping account to retrieve for the current year.
     * @type string
     * @memberof AccountsApigetAccount
     */
    accountCode: string
}

export interface AccountsApiGetAccountsRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof AccountsApigetAccounts
     */
    companySlug: string
    /**
     * Filter parameter specifying which account numbers to return. Specify using the from and to parameters (excluding subaccount).
     * @type number
     * @memberof AccountsApigetAccounts
     */
    fromAccount?: number
    /**
     * Filter parameter specifying which account numbers to return. Specify using the from and to parameters (excluding subaccount).
     * @type number
     * @memberof AccountsApigetAccounts
     */
    toAccount?: number
    /**
     * Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @type number
     * @memberof AccountsApigetAccounts
     */
    page?: number
    /**
     * Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @type number
     * @memberof AccountsApigetAccounts
     */
    pageSize?: number
}

export class ObjectAccountsApi {
    private api: ObservableAccountsApi

    public constructor(configuration: Configuration, requestFactory?: AccountsApiRequestFactory, responseProcessor?: AccountsApiResponseProcessor) {
        this.api = new ObservableAccountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves the specified bookkeping account. An account is a string with either four digits, or four digits, a colon and five digits (\"reskontro\").       Examples:       3020 and 1500:10001 
     * @param param the request object
     */
    public getAccountWithHttpInfo(param: AccountsApiGetAccountRequest, options?: Configuration): Promise<HttpInfo<Account>> {
        return this.api.getAccountWithHttpInfo(param.companySlug, param.accountCode,  options).toPromise();
    }

    /**
     * Retrieves the specified bookkeping account. An account is a string with either four digits, or four digits, a colon and five digits (\"reskontro\").       Examples:       3020 and 1500:10001 
     * @param param the request object
     */
    public getAccount(param: AccountsApiGetAccountRequest, options?: Configuration): Promise<Account> {
        return this.api.getAccount(param.companySlug, param.accountCode,  options).toPromise();
    }

    /**
     * Retrieves the bookkeeping accounts for the current year 
     * @param param the request object
     */
    public getAccountsWithHttpInfo(param: AccountsApiGetAccountsRequest, options?: Configuration): Promise<HttpInfo<Array<Account>>> {
        return this.api.getAccountsWithHttpInfo(param.companySlug, param.fromAccount, param.toAccount, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Retrieves the bookkeeping accounts for the current year 
     * @param param the request object
     */
    public getAccounts(param: AccountsApiGetAccountsRequest, options?: Configuration): Promise<Array<Account>> {
        return this.api.getAccounts(param.companySlug, param.fromAccount, param.toAccount, param.page, param.pageSize,  options).toPromise();
    }

}

import { ObservableBankAccountsApi } from "./ObservableAPI";
import { BankAccountsApiRequestFactory, BankAccountsApiResponseProcessor} from "../apis/BankAccountsApi";

export interface BankAccountsApiCreateBankAccountRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof BankAccountsApicreateBankAccount
     */
    companySlug: string
    /**
     * 
     * @type BankAccountRequest
     * @memberof BankAccountsApicreateBankAccount
     */
    bankAccountRequest: BankAccountRequest
}

export interface BankAccountsApiGetBankAccountRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof BankAccountsApigetBankAccount
     */
    companySlug: string
    /**
     * 
     * @type number
     * @memberof BankAccountsApigetBankAccount
     */
    bankAccountId: number
}

export interface BankAccountsApiGetBankAccountsRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof BankAccountsApigetBankAccounts
     */
    companySlug: string
    /**
     * Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @type number
     * @memberof BankAccountsApigetBankAccounts
     */
    page?: number
    /**
     * Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @type number
     * @memberof BankAccountsApigetBankAccounts
     */
    pageSize?: number
    /**
     * Return all active bank accounts (false) or all inactive bank accounts (true).
     * @type boolean
     * @memberof BankAccountsApigetBankAccounts
     */
    inactive?: boolean
}

export class ObjectBankAccountsApi {
    private api: ObservableBankAccountsApi

    public constructor(configuration: Configuration, requestFactory?: BankAccountsApiRequestFactory, responseProcessor?: BankAccountsApiResponseProcessor) {
        this.api = new ObservableBankAccountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new bank account. The Location response header returns the URL of the newly created bank account. Possible types of bank accounts are NORMAL, TAX_DEDUCTION, FOREIGN, and CREDIT_CARD. The field \"foreignService\" should only be filled out for accounts of type FOREIGN. 
     * @param param the request object
     */
    public createBankAccountWithHttpInfo(param: BankAccountsApiCreateBankAccountRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createBankAccountWithHttpInfo(param.companySlug, param.bankAccountRequest,  options).toPromise();
    }

    /**
     * Creates a new bank account. The Location response header returns the URL of the newly created bank account. Possible types of bank accounts are NORMAL, TAX_DEDUCTION, FOREIGN, and CREDIT_CARD. The field \"foreignService\" should only be filled out for accounts of type FOREIGN. 
     * @param param the request object
     */
    public createBankAccount(param: BankAccountsApiCreateBankAccountRequest, options?: Configuration): Promise<void> {
        return this.api.createBankAccount(param.companySlug, param.bankAccountRequest,  options).toPromise();
    }

    /**
     * Retrieves specified bank account.
     * @param param the request object
     */
    public getBankAccountWithHttpInfo(param: BankAccountsApiGetBankAccountRequest, options?: Configuration): Promise<HttpInfo<BankAccountResult>> {
        return this.api.getBankAccountWithHttpInfo(param.companySlug, param.bankAccountId,  options).toPromise();
    }

    /**
     * Retrieves specified bank account.
     * @param param the request object
     */
    public getBankAccount(param: BankAccountsApiGetBankAccountRequest, options?: Configuration): Promise<BankAccountResult> {
        return this.api.getBankAccount(param.companySlug, param.bankAccountId,  options).toPromise();
    }

    /**
     * Retrieves all bank accounts associated with the company.
     * @param param the request object
     */
    public getBankAccountsWithHttpInfo(param: BankAccountsApiGetBankAccountsRequest, options?: Configuration): Promise<HttpInfo<Array<BankAccountResult>>> {
        return this.api.getBankAccountsWithHttpInfo(param.companySlug, param.page, param.pageSize, param.inactive,  options).toPromise();
    }

    /**
     * Retrieves all bank accounts associated with the company.
     * @param param the request object
     */
    public getBankAccounts(param: BankAccountsApiGetBankAccountsRequest, options?: Configuration): Promise<Array<BankAccountResult>> {
        return this.api.getBankAccounts(param.companySlug, param.page, param.pageSize, param.inactive,  options).toPromise();
    }

}

import { ObservableCompaniesApi } from "./ObservableAPI";
import { CompaniesApiRequestFactory, CompaniesApiResponseProcessor} from "../apis/CompaniesApi";

export interface CompaniesApiGetCompaniesRequest {
    /**
     * Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @type number
     * @memberof CompaniesApigetCompanies
     */
    page?: number
    /**
     * Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @type number
     * @memberof CompaniesApigetCompanies
     */
    pageSize?: number
    /**
     * 
     * @type &#39;createdDate asc&#39; | &#39;createdDate desc&#39; | &#39;name asc&#39; | &#39;name desc&#39; | &#39;organizationNumber asc&#39; | &#39;organizationNumber desc&#39;
     * @memberof CompaniesApigetCompanies
     */
    sortBy?: 'createdDate asc' | 'createdDate desc' | 'name asc' | 'name desc' | 'organizationNumber asc' | 'organizationNumber desc'
}

export interface CompaniesApiGetCompanyRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof CompaniesApigetCompany
     */
    companySlug: string
}

export class ObjectCompaniesApi {
    private api: ObservableCompaniesApi

    public constructor(configuration: Configuration, requestFactory?: CompaniesApiRequestFactory, responseProcessor?: CompaniesApiResponseProcessor) {
        this.api = new ObservableCompaniesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns all companies from the system that the user has access to
     * @param param the request object
     */
    public getCompaniesWithHttpInfo(param: CompaniesApiGetCompaniesRequest = {}, options?: Configuration): Promise<HttpInfo<Array<Company>>> {
        return this.api.getCompaniesWithHttpInfo(param.page, param.pageSize, param.sortBy,  options).toPromise();
    }

    /**
     * Returns all companies from the system that the user has access to
     * @param param the request object
     */
    public getCompanies(param: CompaniesApiGetCompaniesRequest = {}, options?: Configuration): Promise<Array<Company>> {
        return this.api.getCompanies(param.page, param.pageSize, param.sortBy,  options).toPromise();
    }

    /**
     * Returns company associated with slug.
     * @param param the request object
     */
    public getCompanyWithHttpInfo(param: CompaniesApiGetCompanyRequest, options?: Configuration): Promise<HttpInfo<Company>> {
        return this.api.getCompanyWithHttpInfo(param.companySlug,  options).toPromise();
    }

    /**
     * Returns company associated with slug.
     * @param param the request object
     */
    public getCompany(param: CompaniesApiGetCompanyRequest, options?: Configuration): Promise<Company> {
        return this.api.getCompany(param.companySlug,  options).toPromise();
    }

}

import { ObservableContactsApi } from "./ObservableAPI";
import { ContactsApiRequestFactory, ContactsApiResponseProcessor} from "../apis/ContactsApi";

export interface ContactsApiAddAttachmentToContactRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof ContactsApiaddAttachmentToContact
     */
    companySlug: string
    /**
     * 
     * @type number
     * @memberof ContactsApiaddAttachmentToContact
     */
    contactId: number
    /**
     * Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @type string
     * @memberof ContactsApiaddAttachmentToContact
     */
    filename?: string
    /**
     * Not required.
     * @type string
     * @memberof ContactsApiaddAttachmentToContact
     */
    comment?: string
    /**
     * 
     * @type HttpFile
     * @memberof ContactsApiaddAttachmentToContact
     */
    file?: HttpFile
}

export interface ContactsApiAddContactPersonToContactRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof ContactsApiaddContactPersonToContact
     */
    companySlug: string
    /**
     * 
     * @type number
     * @memberof ContactsApiaddContactPersonToContact
     */
    contactId: number
    /**
     * 
     * @type ContactPerson
     * @memberof ContactsApiaddContactPersonToContact
     */
    contactPerson: ContactPerson
}

export interface ContactsApiCreateContactRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof ContactsApicreateContact
     */
    companySlug: string
    /**
     * 
     * @type Contact
     * @memberof ContactsApicreateContact
     */
    contact: Contact
}

export interface ContactsApiDeleteContactContactPersonRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof ContactsApideleteContactContactPerson
     */
    companySlug: string
    /**
     * 
     * @type number
     * @memberof ContactsApideleteContactContactPerson
     */
    contactId: number
    /**
     * 
     * @type number
     * @memberof ContactsApideleteContactContactPerson
     */
    contactPersonId: number
}

export interface ContactsApiGetContactRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof ContactsApigetContact
     */
    companySlug: string
    /**
     * 
     * @type number
     * @memberof ContactsApigetContact
     */
    contactId: number
}

export interface ContactsApiGetContactContactPersonRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof ContactsApigetContactContactPerson
     */
    companySlug: string
    /**
     * 
     * @type number
     * @memberof ContactsApigetContactContactPerson
     */
    contactId: number
}

export interface ContactsApiGetContactPersonRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof ContactsApigetContactPerson
     */
    companySlug: string
    /**
     * 
     * @type number
     * @memberof ContactsApigetContactPerson
     */
    contactId: number
    /**
     * 
     * @type number
     * @memberof ContactsApigetContactPerson
     */
    contactPersonId: number
}

export interface ContactsApiGetContactsRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof ContactsApigetContacts
     */
    companySlug: string
    /**
     * Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @type number
     * @memberof ContactsApigetContacts
     */
    page?: number
    /**
     * Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @type number
     * @memberof ContactsApigetContacts
     */
    pageSize?: number
    /**
     * Filter based on date of last modification. Returns results that were last modified on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof ContactsApigetContacts
     */
    lastModified?: string
    /**
     * Returns results that have been last modified before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof ContactsApigetContacts
     */
    lastModifiedLe?: string
    /**
     * Returns results that have been last modified strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof ContactsApigetContacts
     */
    lastModifiedLt?: string
    /**
     * Returns results that have been last modified after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof ContactsApigetContacts
     */
    lastModifiedGe?: string
    /**
     * Returns results that have been last modified strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof ContactsApigetContacts
     */
    lastModifiedGt?: string
    /**
     * Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof ContactsApigetContacts
     */
    createdDate?: string
    /**
     * Returns results that were created before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof ContactsApigetContacts
     */
    createdDateLe?: string
    /**
     * Returns results that were created strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof ContactsApigetContacts
     */
    createdDateLt?: string
    /**
     * Returns results that were created after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof ContactsApigetContacts
     */
    createdDateGe?: string
    /**
     * Returns results that were created strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof ContactsApigetContacts
     */
    createdDateGt?: string
    /**
     * Find all results with the supplier number equal to the specified parameter.
     * @type number
     * @memberof ContactsApigetContacts
     */
    supplierNumber?: number
    /**
     * Find all results with the customer number equal to the specified parameter.
     * @type number
     * @memberof ContactsApigetContacts
     */
    customerNumber?: number
    /**
     * Find all results with the member number equal to the specified parameter.
     * @type number
     * @memberof ContactsApigetContacts
     */
    memberNumber?: number
    /**
     * Find all results with the name equal to the specified parameter.
     * @type string
     * @memberof ContactsApigetContacts
     */
    name?: string
    /**
     * Find all results with the organization number equal to the specified parameter.
     * @type string
     * @memberof ContactsApigetContacts
     */
    organizationNumber?: string
    /**
     * Find all results with the email equal to the specified parameter.
     * @type string
     * @memberof ContactsApigetContacts
     */
    email?: string
    /**
     * Returns all contacts that are customers. If filter is set for both supplier and customer &#x3D; true, only contacts that are both supplier and customer will be returned.
     * @type boolean
     * @memberof ContactsApigetContacts
     */
    customer?: boolean
    /**
     * Returns all contacts that are suppliers. If filter is set for both supplier and customer &#x3D; true, only contacts that are both supplier and customer will be returned.
     * @type boolean
     * @memberof ContactsApigetContacts
     */
    supplier?: boolean
    /**
     * Return all active contacts (false) or all inactive contacts (true).
     * @type boolean
     * @memberof ContactsApigetContacts
     */
    inactive?: boolean
    /**
     * Return contacts in contact group, exact match only. Groups are only used for customers, not suppliers.
     * @type string
     * @memberof ContactsApigetContacts
     */
    group?: string
    /**
     * 
     * @type &#39;lastModified asc&#39; | &#39;lastModified desc&#39; | &#39;createdDate asc&#39; | &#39;createdDate desc&#39;
     * @memberof ContactsApigetContacts
     */
    sortBy?: 'lastModified asc' | 'lastModified desc' | 'createdDate asc' | 'createdDate desc'
    /**
     * Find all results with the phone number equal to the specified parameter.
     * @type string
     * @memberof ContactsApigetContacts
     */
    phoneNumber?: string
}

export interface ContactsApiUpdateContactRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof ContactsApiupdateContact
     */
    companySlug: string
    /**
     * 
     * @type number
     * @memberof ContactsApiupdateContact
     */
    contactId: number
    /**
     * 
     * @type Contact
     * @memberof ContactsApiupdateContact
     */
    contact: Contact
}

export interface ContactsApiUpdateContactContactPersonRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof ContactsApiupdateContactContactPerson
     */
    companySlug: string
    /**
     * 
     * @type number
     * @memberof ContactsApiupdateContactContactPerson
     */
    contactId: number
    /**
     * 
     * @type number
     * @memberof ContactsApiupdateContactContactPerson
     */
    contactPersonId: number
    /**
     * 
     * @type ContactPerson
     * @memberof ContactsApiupdateContactContactPerson
     */
    contactPerson: ContactPerson
}

export class ObjectContactsApi {
    private api: ObservableContactsApi

    public constructor(configuration: Configuration, requestFactory?: ContactsApiRequestFactory, responseProcessor?: ContactsApiResponseProcessor) {
        this.api = new ObservableContactsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates and adds a new attachment/document to a contact
     * @param param the request object
     */
    public addAttachmentToContactWithHttpInfo(param: ContactsApiAddAttachmentToContactRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.addAttachmentToContactWithHttpInfo(param.companySlug, param.contactId, param.filename, param.comment, param.file,  options).toPromise();
    }

    /**
     * Creates and adds a new attachment/document to a contact
     * @param param the request object
     */
    public addAttachmentToContact(param: ContactsApiAddAttachmentToContactRequest, options?: Configuration): Promise<void> {
        return this.api.addAttachmentToContact(param.companySlug, param.contactId, param.filename, param.comment, param.file,  options).toPromise();
    }

    /**
     * Adds a new contact person to a contact
     * @param param the request object
     */
    public addContactPersonToContactWithHttpInfo(param: ContactsApiAddContactPersonToContactRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.addContactPersonToContactWithHttpInfo(param.companySlug, param.contactId, param.contactPerson,  options).toPromise();
    }

    /**
     * Adds a new contact person to a contact
     * @param param the request object
     */
    public addContactPersonToContact(param: ContactsApiAddContactPersonToContactRequest, options?: Configuration): Promise<void> {
        return this.api.addContactPersonToContact(param.companySlug, param.contactId, param.contactPerson,  options).toPromise();
    }

    /**
     * Creates a new contact. The Location response header returns the URL of the newly created contact.
     * @param param the request object
     */
    public createContactWithHttpInfo(param: ContactsApiCreateContactRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createContactWithHttpInfo(param.companySlug, param.contact,  options).toPromise();
    }

    /**
     * Creates a new contact. The Location response header returns the URL of the newly created contact.
     * @param param the request object
     */
    public createContact(param: ContactsApiCreateContactRequest, options?: Configuration): Promise<void> {
        return this.api.createContact(param.companySlug, param.contact,  options).toPromise();
    }

    /**
     * Delete a contact\'s contact person.
     * @param param the request object
     */
    public deleteContactContactPersonWithHttpInfo(param: ContactsApiDeleteContactContactPersonRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteContactContactPersonWithHttpInfo(param.companySlug, param.contactId, param.contactPersonId,  options).toPromise();
    }

    /**
     * Delete a contact\'s contact person.
     * @param param the request object
     */
    public deleteContactContactPerson(param: ContactsApiDeleteContactContactPersonRequest, options?: Configuration): Promise<void> {
        return this.api.deleteContactContactPerson(param.companySlug, param.contactId, param.contactPersonId,  options).toPromise();
    }

    /**
     * Retrieves specified contact. ContactId is returned with a GET contacts call as the first returned field. ContactId is returned in the Location response header for POST contact. 
     * @param param the request object
     */
    public getContactWithHttpInfo(param: ContactsApiGetContactRequest, options?: Configuration): Promise<HttpInfo<Contact>> {
        return this.api.getContactWithHttpInfo(param.companySlug, param.contactId,  options).toPromise();
    }

    /**
     * Retrieves specified contact. ContactId is returned with a GET contacts call as the first returned field. ContactId is returned in the Location response header for POST contact. 
     * @param param the request object
     */
    public getContact(param: ContactsApiGetContactRequest, options?: Configuration): Promise<Contact> {
        return this.api.getContact(param.companySlug, param.contactId,  options).toPromise();
    }

    /**
     * Retrieves contact person(s) for a specified contact. 
     * @param param the request object
     */
    public getContactContactPersonWithHttpInfo(param: ContactsApiGetContactContactPersonRequest, options?: Configuration): Promise<HttpInfo<Array<ContactPerson>>> {
        return this.api.getContactContactPersonWithHttpInfo(param.companySlug, param.contactId,  options).toPromise();
    }

    /**
     * Retrieves contact person(s) for a specified contact. 
     * @param param the request object
     */
    public getContactContactPerson(param: ContactsApiGetContactContactPersonRequest, options?: Configuration): Promise<Array<ContactPerson>> {
        return this.api.getContactContactPerson(param.companySlug, param.contactId,  options).toPromise();
    }

    /**
     * Retrieves specified contact person 
     * @param param the request object
     */
    public getContactPersonWithHttpInfo(param: ContactsApiGetContactPersonRequest, options?: Configuration): Promise<HttpInfo<ContactPerson>> {
        return this.api.getContactPersonWithHttpInfo(param.companySlug, param.contactId, param.contactPersonId,  options).toPromise();
    }

    /**
     * Retrieves specified contact person 
     * @param param the request object
     */
    public getContactPerson(param: ContactsApiGetContactPersonRequest, options?: Configuration): Promise<ContactPerson> {
        return this.api.getContactPerson(param.companySlug, param.contactId, param.contactPersonId,  options).toPromise();
    }

    /**
     * Retrieves all contacts for the specified company.
     * @param param the request object
     */
    public getContactsWithHttpInfo(param: ContactsApiGetContactsRequest, options?: Configuration): Promise<HttpInfo<Array<Contact>>> {
        return this.api.getContactsWithHttpInfo(param.companySlug, param.page, param.pageSize, param.lastModified, param.lastModifiedLe, param.lastModifiedLt, param.lastModifiedGe, param.lastModifiedGt, param.createdDate, param.createdDateLe, param.createdDateLt, param.createdDateGe, param.createdDateGt, param.supplierNumber, param.customerNumber, param.memberNumber, param.name, param.organizationNumber, param.email, param.customer, param.supplier, param.inactive, param.group, param.sortBy, param.phoneNumber,  options).toPromise();
    }

    /**
     * Retrieves all contacts for the specified company.
     * @param param the request object
     */
    public getContacts(param: ContactsApiGetContactsRequest, options?: Configuration): Promise<Array<Contact>> {
        return this.api.getContacts(param.companySlug, param.page, param.pageSize, param.lastModified, param.lastModifiedLe, param.lastModifiedLt, param.lastModifiedGe, param.lastModifiedGt, param.createdDate, param.createdDateLe, param.createdDateLt, param.createdDateGe, param.createdDateGt, param.supplierNumber, param.customerNumber, param.memberNumber, param.name, param.organizationNumber, param.email, param.customer, param.supplier, param.inactive, param.group, param.sortBy, param.phoneNumber,  options).toPromise();
    }

    /**
     * Updates an existing contact.
     * @param param the request object
     */
    public updateContactWithHttpInfo(param: ContactsApiUpdateContactRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateContactWithHttpInfo(param.companySlug, param.contactId, param.contact,  options).toPromise();
    }

    /**
     * Updates an existing contact.
     * @param param the request object
     */
    public updateContact(param: ContactsApiUpdateContactRequest, options?: Configuration): Promise<void> {
        return this.api.updateContact(param.companySlug, param.contactId, param.contact,  options).toPromise();
    }

    /**
     * Updates an existing contact person.
     * @param param the request object
     */
    public updateContactContactPersonWithHttpInfo(param: ContactsApiUpdateContactContactPersonRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateContactContactPersonWithHttpInfo(param.companySlug, param.contactId, param.contactPersonId, param.contactPerson,  options).toPromise();
    }

    /**
     * Updates an existing contact person.
     * @param param the request object
     */
    public updateContactContactPerson(param: ContactsApiUpdateContactContactPersonRequest, options?: Configuration): Promise<void> {
        return this.api.updateContactContactPerson(param.companySlug, param.contactId, param.contactPersonId, param.contactPerson,  options).toPromise();
    }

}

import { ObservableCreditNotesApi } from "./ObservableAPI";
import { CreditNotesApiRequestFactory, CreditNotesApiResponseProcessor} from "../apis/CreditNotesApi";

export interface CreditNotesApiAddAttachmentToCreditNoteDraftRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof CreditNotesApiaddAttachmentToCreditNoteDraft
     */
    companySlug: string
    /**
     * The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @type number
     * @memberof CreditNotesApiaddAttachmentToCreditNoteDraft
     */
    draftId: number
    /**
     * Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @type string
     * @memberof CreditNotesApiaddAttachmentToCreditNoteDraft
     */
    filename?: string
    /**
     * Not required.
     * @type string
     * @memberof CreditNotesApiaddAttachmentToCreditNoteDraft
     */
    comment?: string
    /**
     * 
     * @type HttpFile
     * @memberof CreditNotesApiaddAttachmentToCreditNoteDraft
     */
    file?: HttpFile
}

export interface CreditNotesApiCreateCreditNoteCounterRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof CreditNotesApicreateCreditNoteCounter
     */
    companySlug: string
    /**
     * 
     * @type Counter
     * @memberof CreditNotesApicreateCreditNoteCounter
     */
    counter?: Counter
}

export interface CreditNotesApiCreateCreditNoteDraftRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof CreditNotesApicreateCreditNoteDraft
     */
    companySlug: string
    /**
     * 
     * @type InvoiceishDraftRequest
     * @memberof CreditNotesApicreateCreditNoteDraft
     */
    invoiceishDraftRequest: InvoiceishDraftRequest
}

export interface CreditNotesApiCreateCreditNoteFromDraftRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof CreditNotesApicreateCreditNoteFromDraft
     */
    companySlug: string
    /**
     * The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @type number
     * @memberof CreditNotesApicreateCreditNoteFromDraft
     */
    draftId: number
}

export interface CreditNotesApiCreateFullCreditNoteRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof CreditNotesApicreateFullCreditNote
     */
    companySlug: string
    /**
     * 
     * @type FullCreditNoteRequest
     * @memberof CreditNotesApicreateFullCreditNote
     */
    fullCreditNoteRequest: FullCreditNoteRequest
}

export interface CreditNotesApiCreatePartialCreditNoteRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof CreditNotesApicreatePartialCreditNote
     */
    companySlug: string
    /**
     * 
     * @type PartialCreditNoteRequest
     * @memberof CreditNotesApicreatePartialCreditNote
     */
    partialCreditNoteRequest: PartialCreditNoteRequest
}

export interface CreditNotesApiDeleteCreditNoteDraftRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof CreditNotesApideleteCreditNoteDraft
     */
    companySlug: string
    /**
     * The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @type number
     * @memberof CreditNotesApideleteCreditNoteDraft
     */
    draftId: number
}

export interface CreditNotesApiGetCreditNoteRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof CreditNotesApigetCreditNote
     */
    companySlug: string
    /**
     * The creditNoteId (primary key of the returned object) is returned as the first field in the GET all credit notes call; not to be confused with creditNoteNumber 
     * @type string
     * @memberof CreditNotesApigetCreditNote
     */
    creditNoteId: string
}

export interface CreditNotesApiGetCreditNoteCounterRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof CreditNotesApigetCreditNoteCounter
     */
    companySlug: string
}

export interface CreditNotesApiGetCreditNoteDraftRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof CreditNotesApigetCreditNoteDraft
     */
    companySlug: string
    /**
     * The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @type number
     * @memberof CreditNotesApigetCreditNoteDraft
     */
    draftId: number
}

export interface CreditNotesApiGetCreditNoteDraftAttachmentsRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof CreditNotesApigetCreditNoteDraftAttachments
     */
    companySlug: string
    /**
     * The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @type number
     * @memberof CreditNotesApigetCreditNoteDraftAttachments
     */
    draftId: number
}

export interface CreditNotesApiGetCreditNoteDraftsRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof CreditNotesApigetCreditNoteDrafts
     */
    companySlug: string
    /**
     * Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @type number
     * @memberof CreditNotesApigetCreditNoteDrafts
     */
    page?: number
    /**
     * Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @type number
     * @memberof CreditNotesApigetCreditNoteDrafts
     */
    pageSize?: number
}

export interface CreditNotesApiGetCreditNotesRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof CreditNotesApigetCreditNotes
     */
    companySlug: string
    /**
     * Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @type number
     * @memberof CreditNotesApigetCreditNotes
     */
    page?: number
    /**
     * Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @type number
     * @memberof CreditNotesApigetCreditNotes
     */
    pageSize?: number
    /**
     * Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof CreditNotesApigetCreditNotes
     */
    issueDate?: string
    /**
     * Filter based on date less than or equal to parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof CreditNotesApigetCreditNotes
     */
    issueDateLe?: string
    /**
     * Filter based on date strictly less than parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof CreditNotesApigetCreditNotes
     */
    issueDateLt?: string
    /**
     * Filter based on date greater than or equal to parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof CreditNotesApigetCreditNotes
     */
    issueDateGe?: string
    /**
     * Filter based on date strictly greater than parameter value Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof CreditNotesApigetCreditNotes
     */
    issueDateGt?: string
    /**
     * Returns only credit notes sent to specified customer. Must be the contactId provided by a GET contacts call. 
     * @type number
     * @memberof CreditNotesApigetCreditNotes
     */
    customerId?: number
    /**
     * When set to true, returns only credit notes that have been settled. Otherwise false returns all credit notes that have not been fully settled. 
     * @type boolean
     * @memberof CreditNotesApigetCreditNotes
     */
    settled?: boolean
    /**
     * Filter based on the UUID of the credit note draft that was used to create a given invoice. Applies only to \&quot;uavhengig kreditnotaer\&quot;.
     * @type string
     * @memberof CreditNotesApigetCreditNotes
     */
    creditNoteDraftUuid?: string
}

export interface CreditNotesApiSendCreditNoteRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof CreditNotesApisendCreditNote
     */
    companySlug: string
    /**
     * 
     * @type SendCreditNoteRequest
     * @memberof CreditNotesApisendCreditNote
     */
    sendCreditNoteRequest: SendCreditNoteRequest
}

export interface CreditNotesApiUpdateCreditNoteDraftRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof CreditNotesApiupdateCreditNoteDraft
     */
    companySlug: string
    /**
     * The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @type number
     * @memberof CreditNotesApiupdateCreditNoteDraft
     */
    draftId: number
    /**
     * 
     * @type InvoiceishDraftRequest
     * @memberof CreditNotesApiupdateCreditNoteDraft
     */
    invoiceishDraftRequest: InvoiceishDraftRequest
}

export class ObjectCreditNotesApi {
    private api: ObservableCreditNotesApi

    public constructor(configuration: Configuration, requestFactory?: CreditNotesApiRequestFactory, responseProcessor?: CreditNotesApiResponseProcessor) {
        this.api = new ObservableCreditNotesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates and adds a new attachment to a credit note draft
     * @param param the request object
     */
    public addAttachmentToCreditNoteDraftWithHttpInfo(param: CreditNotesApiAddAttachmentToCreditNoteDraftRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.addAttachmentToCreditNoteDraftWithHttpInfo(param.companySlug, param.draftId, param.filename, param.comment, param.file,  options).toPromise();
    }

    /**
     * Creates and adds a new attachment to a credit note draft
     * @param param the request object
     */
    public addAttachmentToCreditNoteDraft(param: CreditNotesApiAddAttachmentToCreditNoteDraftRequest, options?: Configuration): Promise<void> {
        return this.api.addAttachmentToCreditNoteDraft(param.companySlug, param.draftId, param.filename, param.comment, param.file,  options).toPromise();
    }

    /**
     * Creates the first credit note number which is then increased by one with every new credit note. By sending an empty request body the default is base number 10000 (the first credit note number will thus be 10001), but can be specified to another starting value.
     * @param param the request object
     */
    public createCreditNoteCounterWithHttpInfo(param: CreditNotesApiCreateCreditNoteCounterRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createCreditNoteCounterWithHttpInfo(param.companySlug, param.counter,  options).toPromise();
    }

    /**
     * Creates the first credit note number which is then increased by one with every new credit note. By sending an empty request body the default is base number 10000 (the first credit note number will thus be 10001), but can be specified to another starting value.
     * @param param the request object
     */
    public createCreditNoteCounter(param: CreditNotesApiCreateCreditNoteCounterRequest, options?: Configuration): Promise<void> {
        return this.api.createCreditNoteCounter(param.companySlug, param.counter,  options).toPromise();
    }

    /**
     * Creates a credit note draft. This draft corresponds to a draft for an \"uavhengig kreditnota\" in Fiken.
     * @param param the request object
     */
    public createCreditNoteDraftWithHttpInfo(param: CreditNotesApiCreateCreditNoteDraftRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createCreditNoteDraftWithHttpInfo(param.companySlug, param.invoiceishDraftRequest,  options).toPromise();
    }

    /**
     * Creates a credit note draft. This draft corresponds to a draft for an \"uavhengig kreditnota\" in Fiken.
     * @param param the request object
     */
    public createCreditNoteDraft(param: CreditNotesApiCreateCreditNoteDraftRequest, options?: Configuration): Promise<void> {
        return this.api.createCreditNoteDraft(param.companySlug, param.invoiceishDraftRequest,  options).toPromise();
    }

    /**
     * Creates a credit note from an already created draft.
     * @param param the request object
     */
    public createCreditNoteFromDraftWithHttpInfo(param: CreditNotesApiCreateCreditNoteFromDraftRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createCreditNoteFromDraftWithHttpInfo(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Creates a credit note from an already created draft.
     * @param param the request object
     */
    public createCreditNoteFromDraft(param: CreditNotesApiCreateCreditNoteFromDraftRequest, options?: Configuration): Promise<void> {
        return this.api.createCreditNoteFromDraft(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Creates a new credit note that covers the full amount of the associated invoice.
     * @param param the request object
     */
    public createFullCreditNoteWithHttpInfo(param: CreditNotesApiCreateFullCreditNoteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createFullCreditNoteWithHttpInfo(param.companySlug, param.fullCreditNoteRequest,  options).toPromise();
    }

    /**
     * Creates a new credit note that covers the full amount of the associated invoice.
     * @param param the request object
     */
    public createFullCreditNote(param: CreditNotesApiCreateFullCreditNoteRequest, options?: Configuration): Promise<void> {
        return this.api.createFullCreditNote(param.companySlug, param.fullCreditNoteRequest,  options).toPromise();
    }

    /**
     * Creates a new credit note that doesn\'t fully cover the total amount of the associated invoice.
     * @param param the request object
     */
    public createPartialCreditNoteWithHttpInfo(param: CreditNotesApiCreatePartialCreditNoteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createPartialCreditNoteWithHttpInfo(param.companySlug, param.partialCreditNoteRequest,  options).toPromise();
    }

    /**
     * Creates a new credit note that doesn\'t fully cover the total amount of the associated invoice.
     * @param param the request object
     */
    public createPartialCreditNote(param: CreditNotesApiCreatePartialCreditNoteRequest, options?: Configuration): Promise<void> {
        return this.api.createPartialCreditNote(param.companySlug, param.partialCreditNoteRequest,  options).toPromise();
    }

    /**
     * Delete credit note draft with specified id.
     * @param param the request object
     */
    public deleteCreditNoteDraftWithHttpInfo(param: CreditNotesApiDeleteCreditNoteDraftRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteCreditNoteDraftWithHttpInfo(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Delete credit note draft with specified id.
     * @param param the request object
     */
    public deleteCreditNoteDraft(param: CreditNotesApiDeleteCreditNoteDraftRequest, options?: Configuration): Promise<void> {
        return this.api.deleteCreditNoteDraft(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Returns credit note with specified id.
     * @param param the request object
     */
    public getCreditNoteWithHttpInfo(param: CreditNotesApiGetCreditNoteRequest, options?: Configuration): Promise<HttpInfo<CreditNoteResult>> {
        return this.api.getCreditNoteWithHttpInfo(param.companySlug, param.creditNoteId,  options).toPromise();
    }

    /**
     * Returns credit note with specified id.
     * @param param the request object
     */
    public getCreditNote(param: CreditNotesApiGetCreditNoteRequest, options?: Configuration): Promise<CreditNoteResult> {
        return this.api.getCreditNote(param.companySlug, param.creditNoteId,  options).toPromise();
    }

    /**
     * Retrieves the counter for credit notes if it has been created 
     * @param param the request object
     */
    public getCreditNoteCounterWithHttpInfo(param: CreditNotesApiGetCreditNoteCounterRequest, options?: Configuration): Promise<HttpInfo<Counter>> {
        return this.api.getCreditNoteCounterWithHttpInfo(param.companySlug,  options).toPromise();
    }

    /**
     * Retrieves the counter for credit notes if it has been created 
     * @param param the request object
     */
    public getCreditNoteCounter(param: CreditNotesApiGetCreditNoteCounterRequest, options?: Configuration): Promise<Counter> {
        return this.api.getCreditNoteCounter(param.companySlug,  options).toPromise();
    }

    /**
     * Returns credit note draft with specified id.
     * @param param the request object
     */
    public getCreditNoteDraftWithHttpInfo(param: CreditNotesApiGetCreditNoteDraftRequest, options?: Configuration): Promise<HttpInfo<InvoiceishDraftResult>> {
        return this.api.getCreditNoteDraftWithHttpInfo(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Returns credit note draft with specified id.
     * @param param the request object
     */
    public getCreditNoteDraft(param: CreditNotesApiGetCreditNoteDraftRequest, options?: Configuration): Promise<InvoiceishDraftResult> {
        return this.api.getCreditNoteDraft(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Returns all attachments for specified draft.
     * @param param the request object
     */
    public getCreditNoteDraftAttachmentsWithHttpInfo(param: CreditNotesApiGetCreditNoteDraftAttachmentsRequest, options?: Configuration): Promise<HttpInfo<Array<Attachment>>> {
        return this.api.getCreditNoteDraftAttachmentsWithHttpInfo(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Returns all attachments for specified draft.
     * @param param the request object
     */
    public getCreditNoteDraftAttachments(param: CreditNotesApiGetCreditNoteDraftAttachmentsRequest, options?: Configuration): Promise<Array<Attachment>> {
        return this.api.getCreditNoteDraftAttachments(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Returns all credit note drafts for given company.
     * @param param the request object
     */
    public getCreditNoteDraftsWithHttpInfo(param: CreditNotesApiGetCreditNoteDraftsRequest, options?: Configuration): Promise<HttpInfo<Array<InvoiceishDraftResult>>> {
        return this.api.getCreditNoteDraftsWithHttpInfo(param.companySlug, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Returns all credit note drafts for given company.
     * @param param the request object
     */
    public getCreditNoteDrafts(param: CreditNotesApiGetCreditNoteDraftsRequest, options?: Configuration): Promise<Array<InvoiceishDraftResult>> {
        return this.api.getCreditNoteDrafts(param.companySlug, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Returns all credit notes for given company
     * @param param the request object
     */
    public getCreditNotesWithHttpInfo(param: CreditNotesApiGetCreditNotesRequest, options?: Configuration): Promise<HttpInfo<Array<CreditNoteResult>>> {
        return this.api.getCreditNotesWithHttpInfo(param.companySlug, param.page, param.pageSize, param.issueDate, param.issueDateLe, param.issueDateLt, param.issueDateGe, param.issueDateGt, param.customerId, param.settled, param.creditNoteDraftUuid,  options).toPromise();
    }

    /**
     * Returns all credit notes for given company
     * @param param the request object
     */
    public getCreditNotes(param: CreditNotesApiGetCreditNotesRequest, options?: Configuration): Promise<Array<CreditNoteResult>> {
        return this.api.getCreditNotes(param.companySlug, param.page, param.pageSize, param.issueDate, param.issueDateLe, param.issueDateLt, param.issueDateGe, param.issueDateGt, param.customerId, param.settled, param.creditNoteDraftUuid,  options).toPromise();
    }

    /**
     * Sends the specified document
     * @param param the request object
     */
    public sendCreditNoteWithHttpInfo(param: CreditNotesApiSendCreditNoteRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.sendCreditNoteWithHttpInfo(param.companySlug, param.sendCreditNoteRequest,  options).toPromise();
    }

    /**
     * Sends the specified document
     * @param param the request object
     */
    public sendCreditNote(param: CreditNotesApiSendCreditNoteRequest, options?: Configuration): Promise<void> {
        return this.api.sendCreditNote(param.companySlug, param.sendCreditNoteRequest,  options).toPromise();
    }

    /**
     * Updates credit note draft with provided id. 
     * @param param the request object
     */
    public updateCreditNoteDraftWithHttpInfo(param: CreditNotesApiUpdateCreditNoteDraftRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateCreditNoteDraftWithHttpInfo(param.companySlug, param.draftId, param.invoiceishDraftRequest,  options).toPromise();
    }

    /**
     * Updates credit note draft with provided id. 
     * @param param the request object
     */
    public updateCreditNoteDraft(param: CreditNotesApiUpdateCreditNoteDraftRequest, options?: Configuration): Promise<void> {
        return this.api.updateCreditNoteDraft(param.companySlug, param.draftId, param.invoiceishDraftRequest,  options).toPromise();
    }

}

import { ObservableGroupsApi } from "./ObservableAPI";
import { GroupsApiRequestFactory, GroupsApiResponseProcessor} from "../apis/GroupsApi";

export interface GroupsApiGetGroupsRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof GroupsApigetGroups
     */
    companySlug: string
    /**
     * Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @type number
     * @memberof GroupsApigetGroups
     */
    page?: number
    /**
     * Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @type number
     * @memberof GroupsApigetGroups
     */
    pageSize?: number
}

export class ObjectGroupsApi {
    private api: ObservableGroupsApi

    public constructor(configuration: Configuration, requestFactory?: GroupsApiRequestFactory, responseProcessor?: GroupsApiResponseProcessor) {
        this.api = new ObservableGroupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns all customer groups for given company
     * @param param the request object
     */
    public getGroupsWithHttpInfo(param: GroupsApiGetGroupsRequest, options?: Configuration): Promise<HttpInfo<Array<string>>> {
        return this.api.getGroupsWithHttpInfo(param.companySlug, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Returns all customer groups for given company
     * @param param the request object
     */
    public getGroups(param: GroupsApiGetGroupsRequest, options?: Configuration): Promise<Array<string>> {
        return this.api.getGroups(param.companySlug, param.page, param.pageSize,  options).toPromise();
    }

}

import { ObservableInboxApi } from "./ObservableAPI";
import { InboxApiRequestFactory, InboxApiResponseProcessor} from "../apis/InboxApi";

export interface InboxApiCreateInboxDocumentRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof InboxApicreateInboxDocument
     */
    companySlug: string
    /**
     * The name of the inbox document, usually the same as the filename
     * @type string
     * @memberof InboxApicreateInboxDocument
     */
    name?: string
    /**
     * The filename of the file uploaded
     * @type string
     * @memberof InboxApicreateInboxDocument
     */
    filename?: string
    /**
     * Additional description of the inbox document
     * @type string
     * @memberof InboxApicreateInboxDocument
     */
    description?: string
    /**
     * 
     * @type HttpFile
     * @memberof InboxApicreateInboxDocument
     */
    file?: HttpFile
}

export interface InboxApiGetInboxRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof InboxApigetInbox
     */
    companySlug: string
    /**
     * Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @type number
     * @memberof InboxApigetInbox
     */
    page?: number
    /**
     * Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @type number
     * @memberof InboxApigetInbox
     */
    pageSize?: number
    /**
     * Sorts results in either ascending (asc) or descending (desc) order based on the parameter value.
     * @type &#39;createdDate asc&#39; | &#39;createdDate desc&#39; | &#39;name asc&#39; | &#39;name desc&#39;
     * @memberof InboxApigetInbox
     */
    sortBy?: 'createdDate asc' | 'createdDate desc' | 'name asc' | 'name desc'
    /**
     * 
     * @type &#39;all&#39; | &#39;unused&#39; | &#39;used&#39;
     * @memberof InboxApigetInbox
     */
    status?: 'all' | 'unused' | 'used'
    /**
     * Filter documents based on their name, case-insensitive substring match.
     * @type string
     * @memberof InboxApigetInbox
     */
    name?: string
}

export interface InboxApiGetInboxDocumentRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof InboxApigetInboxDocument
     */
    companySlug: string
    /**
     * 
     * @type number
     * @memberof InboxApigetInboxDocument
     */
    inboxDocumentId: number
}

export class ObjectInboxApi {
    private api: ObservableInboxApi

    public constructor(configuration: Configuration, requestFactory?: InboxApiRequestFactory, responseProcessor?: InboxApiResponseProcessor) {
        this.api = new ObservableInboxApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Upload a document to the inbox
     * @param param the request object
     */
    public createInboxDocumentWithHttpInfo(param: InboxApiCreateInboxDocumentRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createInboxDocumentWithHttpInfo(param.companySlug, param.name, param.filename, param.description, param.file,  options).toPromise();
    }

    /**
     * Upload a document to the inbox
     * @param param the request object
     */
    public createInboxDocument(param: InboxApiCreateInboxDocumentRequest, options?: Configuration): Promise<void> {
        return this.api.createInboxDocument(param.companySlug, param.name, param.filename, param.description, param.file,  options).toPromise();
    }

    /**
     * Returns the contents of the inbox for given company.
     * @param param the request object
     */
    public getInboxWithHttpInfo(param: InboxApiGetInboxRequest, options?: Configuration): Promise<HttpInfo<Array<InboxResult>>> {
        return this.api.getInboxWithHttpInfo(param.companySlug, param.page, param.pageSize, param.sortBy, param.status, param.name,  options).toPromise();
    }

    /**
     * Returns the contents of the inbox for given company.
     * @param param the request object
     */
    public getInbox(param: InboxApiGetInboxRequest, options?: Configuration): Promise<Array<InboxResult>> {
        return this.api.getInbox(param.companySlug, param.page, param.pageSize, param.sortBy, param.status, param.name,  options).toPromise();
    }

    /**
     * Returns the inbox document with specified id
     * @param param the request object
     */
    public getInboxDocumentWithHttpInfo(param: InboxApiGetInboxDocumentRequest, options?: Configuration): Promise<HttpInfo<InboxResult>> {
        return this.api.getInboxDocumentWithHttpInfo(param.companySlug, param.inboxDocumentId,  options).toPromise();
    }

    /**
     * Returns the inbox document with specified id
     * @param param the request object
     */
    public getInboxDocument(param: InboxApiGetInboxDocumentRequest, options?: Configuration): Promise<InboxResult> {
        return this.api.getInboxDocument(param.companySlug, param.inboxDocumentId,  options).toPromise();
    }

}

import { ObservableInvoicesApi } from "./ObservableAPI";
import { InvoicesApiRequestFactory, InvoicesApiResponseProcessor} from "../apis/InvoicesApi";

export interface InvoicesApiAddAttachmentToInvoiceRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof InvoicesApiaddAttachmentToInvoice
     */
    companySlug: string
    /**
     * The invoiceId (primary key of the returned object) is returned in the GET all invoices call; not to be confused with invoiceNumber 
     * @type number
     * @memberof InvoicesApiaddAttachmentToInvoice
     */
    invoiceId: number
    /**
     * The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @type string
     * @memberof InvoicesApiaddAttachmentToInvoice
     */
    filename?: string
    /**
     * 
     * @type HttpFile
     * @memberof InvoicesApiaddAttachmentToInvoice
     */
    file?: HttpFile
}

export interface InvoicesApiAddAttachmentToInvoiceDraftRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof InvoicesApiaddAttachmentToInvoiceDraft
     */
    companySlug: string
    /**
     * The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @type number
     * @memberof InvoicesApiaddAttachmentToInvoiceDraft
     */
    draftId: number
    /**
     * Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @type string
     * @memberof InvoicesApiaddAttachmentToInvoiceDraft
     */
    filename?: string
    /**
     * Not required.
     * @type string
     * @memberof InvoicesApiaddAttachmentToInvoiceDraft
     */
    comment?: string
    /**
     * 
     * @type HttpFile
     * @memberof InvoicesApiaddAttachmentToInvoiceDraft
     */
    file?: HttpFile
}

export interface InvoicesApiCreateInvoiceRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof InvoicesApicreateInvoice
     */
    companySlug: string
    /**
     * 
     * @type InvoiceRequest
     * @memberof InvoicesApicreateInvoice
     */
    invoiceRequest: InvoiceRequest
}

export interface InvoicesApiCreateInvoiceCounterRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof InvoicesApicreateInvoiceCounter
     */
    companySlug: string
    /**
     * 
     * @type Counter
     * @memberof InvoicesApicreateInvoiceCounter
     */
    counter?: Counter
}

export interface InvoicesApiCreateInvoiceDraftRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof InvoicesApicreateInvoiceDraft
     */
    companySlug: string
    /**
     * 
     * @type InvoiceishDraftRequest
     * @memberof InvoicesApicreateInvoiceDraft
     */
    invoiceishDraftRequest: InvoiceishDraftRequest
}

export interface InvoicesApiCreateInvoiceFromDraftRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof InvoicesApicreateInvoiceFromDraft
     */
    companySlug: string
    /**
     * The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @type number
     * @memberof InvoicesApicreateInvoiceFromDraft
     */
    draftId: number
}

export interface InvoicesApiDeleteInvoiceDraftRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof InvoicesApideleteInvoiceDraft
     */
    companySlug: string
    /**
     * The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @type number
     * @memberof InvoicesApideleteInvoiceDraft
     */
    draftId: number
}

export interface InvoicesApiGetInvoiceRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof InvoicesApigetInvoice
     */
    companySlug: string
    /**
     * The invoiceId (primary key of the returned object) is returned in the GET all invoices call; not to be confused with invoiceNumber 
     * @type number
     * @memberof InvoicesApigetInvoice
     */
    invoiceId: number
}

export interface InvoicesApiGetInvoiceAttachmentsRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof InvoicesApigetInvoiceAttachments
     */
    companySlug: string
    /**
     * The invoiceId (primary key of the returned object) is returned in the GET all invoices call; not to be confused with invoiceNumber 
     * @type number
     * @memberof InvoicesApigetInvoiceAttachments
     */
    invoiceId: number
}

export interface InvoicesApiGetInvoiceCounterRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof InvoicesApigetInvoiceCounter
     */
    companySlug: string
}

export interface InvoicesApiGetInvoiceDraftRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof InvoicesApigetInvoiceDraft
     */
    companySlug: string
    /**
     * The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @type number
     * @memberof InvoicesApigetInvoiceDraft
     */
    draftId: number
}

export interface InvoicesApiGetInvoiceDraftAttachmentsRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof InvoicesApigetInvoiceDraftAttachments
     */
    companySlug: string
    /**
     * The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @type number
     * @memberof InvoicesApigetInvoiceDraftAttachments
     */
    draftId: number
}

export interface InvoicesApiGetInvoiceDraftsRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof InvoicesApigetInvoiceDrafts
     */
    companySlug: string
    /**
     * Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @type number
     * @memberof InvoicesApigetInvoiceDrafts
     */
    page?: number
    /**
     * Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @type number
     * @memberof InvoicesApigetInvoiceDrafts
     */
    pageSize?: number
    /**
     * Filter based on order reference for a given invoice draft
     * @type string
     * @memberof InvoicesApigetInvoiceDrafts
     */
    orderReference?: string
    /**
     * Filter based on the UUID of the draft.
     * @type string
     * @memberof InvoicesApigetInvoiceDrafts
     */
    uuid?: string
}

export interface InvoicesApiGetInvoicesRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof InvoicesApigetInvoices
     */
    companySlug: string
    /**
     * Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @type number
     * @memberof InvoicesApigetInvoices
     */
    page?: number
    /**
     * Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @type number
     * @memberof InvoicesApigetInvoices
     */
    pageSize?: number
    /**
     * Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof InvoicesApigetInvoices
     */
    issueDate?: string
    /**
     * Filter based on date less than or equal to parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof InvoicesApigetInvoices
     */
    issueDateLe?: string
    /**
     * Filter based on date strictly less than parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof InvoicesApigetInvoices
     */
    issueDateLt?: string
    /**
     * Filter based on date greater than or equal to parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof InvoicesApigetInvoices
     */
    issueDateGe?: string
    /**
     * Filter based on date strictly greater than parameter value Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof InvoicesApigetInvoices
     */
    issueDateGt?: string
    /**
     * Filter based on date of last modification. Returns results that were last modified on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof InvoicesApigetInvoices
     */
    lastModified?: string
    /**
     * Returns results that have been last modified before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof InvoicesApigetInvoices
     */
    lastModifiedLe?: string
    /**
     * Returns results that have been last modified strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof InvoicesApigetInvoices
     */
    lastModifiedLt?: string
    /**
     * Returns results that have been last modified after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof InvoicesApigetInvoices
     */
    lastModifiedGe?: string
    /**
     * Returns results that have been last modified strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof InvoicesApigetInvoices
     */
    lastModifiedGt?: string
    /**
     * Returns only invoices sent to specified customer. Must be the contactId provided by a GET contacts call. 
     * @type number
     * @memberof InvoicesApigetInvoices
     */
    customerId?: number
    /**
     * When set to true, returns only invoices that have been settled. Otherwise false returns all invoices that have not been fully settled. 
     * @type boolean
     * @memberof InvoicesApigetInvoices
     */
    settled?: boolean
    /**
     * Filter based on order reference for a given invoice
     * @type string
     * @memberof InvoicesApigetInvoices
     */
    orderReference?: string
    /**
     * Filter based on the UUID of the invoice draft that was used to create a given invoice
     * @type string
     * @memberof InvoicesApigetInvoices
     */
    invoiceDraftUuid?: string
    /**
     * 
     * @type string
     * @memberof InvoicesApigetInvoices
     */
    invoiceNumber?: string
}

export interface InvoicesApiSendInvoiceRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof InvoicesApisendInvoice
     */
    companySlug: string
    /**
     * 
     * @type SendInvoiceRequest
     * @memberof InvoicesApisendInvoice
     */
    sendInvoiceRequest: SendInvoiceRequest
}

export interface InvoicesApiUpdateInvoiceRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof InvoicesApiupdateInvoice
     */
    companySlug: string
    /**
     * The invoiceId (primary key of the returned object) is returned in the GET all invoices call; not to be confused with invoiceNumber 
     * @type number
     * @memberof InvoicesApiupdateInvoice
     */
    invoiceId: number
    /**
     * 
     * @type UpdateInvoiceRequest
     * @memberof InvoicesApiupdateInvoice
     */
    updateInvoiceRequest: UpdateInvoiceRequest
}

export interface InvoicesApiUpdateInvoiceDraftRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof InvoicesApiupdateInvoiceDraft
     */
    companySlug: string
    /**
     * The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @type number
     * @memberof InvoicesApiupdateInvoiceDraft
     */
    draftId: number
    /**
     * 
     * @type InvoiceishDraftRequest
     * @memberof InvoicesApiupdateInvoiceDraft
     */
    invoiceishDraftRequest: InvoiceishDraftRequest
}

export class ObjectInvoicesApi {
    private api: ObservableInvoicesApi

    public constructor(configuration: Configuration, requestFactory?: InvoicesApiRequestFactory, responseProcessor?: InvoicesApiResponseProcessor) {
        this.api = new ObservableInvoicesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates and adds a new attachment to an Invoice
     * @param param the request object
     */
    public addAttachmentToInvoiceWithHttpInfo(param: InvoicesApiAddAttachmentToInvoiceRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.addAttachmentToInvoiceWithHttpInfo(param.companySlug, param.invoiceId, param.filename, param.file,  options).toPromise();
    }

    /**
     * Creates and adds a new attachment to an Invoice
     * @param param the request object
     */
    public addAttachmentToInvoice(param: InvoicesApiAddAttachmentToInvoiceRequest, options?: Configuration): Promise<void> {
        return this.api.addAttachmentToInvoice(param.companySlug, param.invoiceId, param.filename, param.file,  options).toPromise();
    }

    /**
     * Creates and adds a new attachment to an invoice draft
     * @param param the request object
     */
    public addAttachmentToInvoiceDraftWithHttpInfo(param: InvoicesApiAddAttachmentToInvoiceDraftRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.addAttachmentToInvoiceDraftWithHttpInfo(param.companySlug, param.draftId, param.filename, param.comment, param.file,  options).toPromise();
    }

    /**
     * Creates and adds a new attachment to an invoice draft
     * @param param the request object
     */
    public addAttachmentToInvoiceDraft(param: InvoicesApiAddAttachmentToInvoiceDraftRequest, options?: Configuration): Promise<void> {
        return this.api.addAttachmentToInvoiceDraft(param.companySlug, param.draftId, param.filename, param.comment, param.file,  options).toPromise();
    }

    /**
     * Creates an invoice. This corresponds to \"Ny faktura\" in Fiken. There are two types of invoice lines that can be added to an invoice line: product line or free text line. Provide a product Id if you are invoicing a product. All information regarding the price and VAT for this product will be added to the invoice. It is however also possible to override the unit amount by sending information in both fields \"productId\" and \"unitAmount\". An invoice line can also be a free text line meaning that no existing product will be associated with the invoiced line. In this case all information regarding the price and VAT of the product or service to be invoiced must be provided. 
     * @param param the request object
     */
    public createInvoiceWithHttpInfo(param: InvoicesApiCreateInvoiceRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createInvoiceWithHttpInfo(param.companySlug, param.invoiceRequest,  options).toPromise();
    }

    /**
     * Creates an invoice. This corresponds to \"Ny faktura\" in Fiken. There are two types of invoice lines that can be added to an invoice line: product line or free text line. Provide a product Id if you are invoicing a product. All information regarding the price and VAT for this product will be added to the invoice. It is however also possible to override the unit amount by sending information in both fields \"productId\" and \"unitAmount\". An invoice line can also be a free text line meaning that no existing product will be associated with the invoiced line. In this case all information regarding the price and VAT of the product or service to be invoiced must be provided. 
     * @param param the request object
     */
    public createInvoice(param: InvoicesApiCreateInvoiceRequest, options?: Configuration): Promise<void> {
        return this.api.createInvoice(param.companySlug, param.invoiceRequest,  options).toPromise();
    }

    /**
     * Creates the first invoice number which is then increased by one with every new invoice. By sending an empty request body the default is base number 10000 (the first invoice number will thus be 10001), but can be specified to another starting value.
     * @param param the request object
     */
    public createInvoiceCounterWithHttpInfo(param: InvoicesApiCreateInvoiceCounterRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createInvoiceCounterWithHttpInfo(param.companySlug, param.counter,  options).toPromise();
    }

    /**
     * Creates the first invoice number which is then increased by one with every new invoice. By sending an empty request body the default is base number 10000 (the first invoice number will thus be 10001), but can be specified to another starting value.
     * @param param the request object
     */
    public createInvoiceCounter(param: InvoicesApiCreateInvoiceCounterRequest, options?: Configuration): Promise<void> {
        return this.api.createInvoiceCounter(param.companySlug, param.counter,  options).toPromise();
    }

    /**
     * Creates an invoice draft.
     * @param param the request object
     */
    public createInvoiceDraftWithHttpInfo(param: InvoicesApiCreateInvoiceDraftRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createInvoiceDraftWithHttpInfo(param.companySlug, param.invoiceishDraftRequest,  options).toPromise();
    }

    /**
     * Creates an invoice draft.
     * @param param the request object
     */
    public createInvoiceDraft(param: InvoicesApiCreateInvoiceDraftRequest, options?: Configuration): Promise<void> {
        return this.api.createInvoiceDraft(param.companySlug, param.invoiceishDraftRequest,  options).toPromise();
    }

    /**
     * Creates an invoice from an already created draft.
     * @param param the request object
     */
    public createInvoiceFromDraftWithHttpInfo(param: InvoicesApiCreateInvoiceFromDraftRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createInvoiceFromDraftWithHttpInfo(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Creates an invoice from an already created draft.
     * @param param the request object
     */
    public createInvoiceFromDraft(param: InvoicesApiCreateInvoiceFromDraftRequest, options?: Configuration): Promise<void> {
        return this.api.createInvoiceFromDraft(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Delete invoice draft with specified id.
     * @param param the request object
     */
    public deleteInvoiceDraftWithHttpInfo(param: InvoicesApiDeleteInvoiceDraftRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteInvoiceDraftWithHttpInfo(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Delete invoice draft with specified id.
     * @param param the request object
     */
    public deleteInvoiceDraft(param: InvoicesApiDeleteInvoiceDraftRequest, options?: Configuration): Promise<void> {
        return this.api.deleteInvoiceDraft(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Returns invoice with specified id.
     * @param param the request object
     */
    public getInvoiceWithHttpInfo(param: InvoicesApiGetInvoiceRequest, options?: Configuration): Promise<HttpInfo<InvoiceResult>> {
        return this.api.getInvoiceWithHttpInfo(param.companySlug, param.invoiceId,  options).toPromise();
    }

    /**
     * Returns invoice with specified id.
     * @param param the request object
     */
    public getInvoice(param: InvoicesApiGetInvoiceRequest, options?: Configuration): Promise<InvoiceResult> {
        return this.api.getInvoice(param.companySlug, param.invoiceId,  options).toPromise();
    }

    /**
     * Returns all attachments for a given Invoice
     * @param param the request object
     */
    public getInvoiceAttachmentsWithHttpInfo(param: InvoicesApiGetInvoiceAttachmentsRequest, options?: Configuration): Promise<HttpInfo<Array<Attachment>>> {
        return this.api.getInvoiceAttachmentsWithHttpInfo(param.companySlug, param.invoiceId,  options).toPromise();
    }

    /**
     * Returns all attachments for a given Invoice
     * @param param the request object
     */
    public getInvoiceAttachments(param: InvoicesApiGetInvoiceAttachmentsRequest, options?: Configuration): Promise<Array<Attachment>> {
        return this.api.getInvoiceAttachments(param.companySlug, param.invoiceId,  options).toPromise();
    }

    /**
     * Retrieves the counter for invoices if it has been created 
     * @param param the request object
     */
    public getInvoiceCounterWithHttpInfo(param: InvoicesApiGetInvoiceCounterRequest, options?: Configuration): Promise<HttpInfo<Counter>> {
        return this.api.getInvoiceCounterWithHttpInfo(param.companySlug,  options).toPromise();
    }

    /**
     * Retrieves the counter for invoices if it has been created 
     * @param param the request object
     */
    public getInvoiceCounter(param: InvoicesApiGetInvoiceCounterRequest, options?: Configuration): Promise<Counter> {
        return this.api.getInvoiceCounter(param.companySlug,  options).toPromise();
    }

    /**
     * Returns invoice draft with specified id.
     * @param param the request object
     */
    public getInvoiceDraftWithHttpInfo(param: InvoicesApiGetInvoiceDraftRequest, options?: Configuration): Promise<HttpInfo<InvoiceishDraftResult>> {
        return this.api.getInvoiceDraftWithHttpInfo(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Returns invoice draft with specified id.
     * @param param the request object
     */
    public getInvoiceDraft(param: InvoicesApiGetInvoiceDraftRequest, options?: Configuration): Promise<InvoiceishDraftResult> {
        return this.api.getInvoiceDraft(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Returns all attachments for specified draft.
     * @param param the request object
     */
    public getInvoiceDraftAttachmentsWithHttpInfo(param: InvoicesApiGetInvoiceDraftAttachmentsRequest, options?: Configuration): Promise<HttpInfo<Array<Attachment>>> {
        return this.api.getInvoiceDraftAttachmentsWithHttpInfo(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Returns all attachments for specified draft.
     * @param param the request object
     */
    public getInvoiceDraftAttachments(param: InvoicesApiGetInvoiceDraftAttachmentsRequest, options?: Configuration): Promise<Array<Attachment>> {
        return this.api.getInvoiceDraftAttachments(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Returns all invoice drafts for given company.
     * @param param the request object
     */
    public getInvoiceDraftsWithHttpInfo(param: InvoicesApiGetInvoiceDraftsRequest, options?: Configuration): Promise<HttpInfo<Array<InvoiceishDraftResult>>> {
        return this.api.getInvoiceDraftsWithHttpInfo(param.companySlug, param.page, param.pageSize, param.orderReference, param.uuid,  options).toPromise();
    }

    /**
     * Returns all invoice drafts for given company.
     * @param param the request object
     */
    public getInvoiceDrafts(param: InvoicesApiGetInvoiceDraftsRequest, options?: Configuration): Promise<Array<InvoiceishDraftResult>> {
        return this.api.getInvoiceDrafts(param.companySlug, param.page, param.pageSize, param.orderReference, param.uuid,  options).toPromise();
    }

    /**
     * Returns all invoices for given company. You can filter based on issue date, last modified date, customer ID, and if the invoice is settled or not.
     * @param param the request object
     */
    public getInvoicesWithHttpInfo(param: InvoicesApiGetInvoicesRequest, options?: Configuration): Promise<HttpInfo<Array<InvoiceResult>>> {
        return this.api.getInvoicesWithHttpInfo(param.companySlug, param.page, param.pageSize, param.issueDate, param.issueDateLe, param.issueDateLt, param.issueDateGe, param.issueDateGt, param.lastModified, param.lastModifiedLe, param.lastModifiedLt, param.lastModifiedGe, param.lastModifiedGt, param.customerId, param.settled, param.orderReference, param.invoiceDraftUuid, param.invoiceNumber,  options).toPromise();
    }

    /**
     * Returns all invoices for given company. You can filter based on issue date, last modified date, customer ID, and if the invoice is settled or not.
     * @param param the request object
     */
    public getInvoices(param: InvoicesApiGetInvoicesRequest, options?: Configuration): Promise<Array<InvoiceResult>> {
        return this.api.getInvoices(param.companySlug, param.page, param.pageSize, param.issueDate, param.issueDateLe, param.issueDateLt, param.issueDateGe, param.issueDateGt, param.lastModified, param.lastModifiedLe, param.lastModifiedLt, param.lastModifiedGe, param.lastModifiedGt, param.customerId, param.settled, param.orderReference, param.invoiceDraftUuid, param.invoiceNumber,  options).toPromise();
    }

    /**
     * Sends the specified document
     * @param param the request object
     */
    public sendInvoiceWithHttpInfo(param: InvoicesApiSendInvoiceRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.sendInvoiceWithHttpInfo(param.companySlug, param.sendInvoiceRequest,  options).toPromise();
    }

    /**
     * Sends the specified document
     * @param param the request object
     */
    public sendInvoice(param: InvoicesApiSendInvoiceRequest, options?: Configuration): Promise<void> {
        return this.api.sendInvoice(param.companySlug, param.sendInvoiceRequest,  options).toPromise();
    }

    /**
     * Updates invoice with provided id. It is possible to update the due date of an invoice as well as if the invoice was sent manually, outside of Fiken. 
     * @param param the request object
     */
    public updateInvoiceWithHttpInfo(param: InvoicesApiUpdateInvoiceRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateInvoiceWithHttpInfo(param.companySlug, param.invoiceId, param.updateInvoiceRequest,  options).toPromise();
    }

    /**
     * Updates invoice with provided id. It is possible to update the due date of an invoice as well as if the invoice was sent manually, outside of Fiken. 
     * @param param the request object
     */
    public updateInvoice(param: InvoicesApiUpdateInvoiceRequest, options?: Configuration): Promise<void> {
        return this.api.updateInvoice(param.companySlug, param.invoiceId, param.updateInvoiceRequest,  options).toPromise();
    }

    /**
     * Updates invoice draft with provided id. 
     * @param param the request object
     */
    public updateInvoiceDraftWithHttpInfo(param: InvoicesApiUpdateInvoiceDraftRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateInvoiceDraftWithHttpInfo(param.companySlug, param.draftId, param.invoiceishDraftRequest,  options).toPromise();
    }

    /**
     * Updates invoice draft with provided id. 
     * @param param the request object
     */
    public updateInvoiceDraft(param: InvoicesApiUpdateInvoiceDraftRequest, options?: Configuration): Promise<void> {
        return this.api.updateInvoiceDraft(param.companySlug, param.draftId, param.invoiceishDraftRequest,  options).toPromise();
    }

}

import { ObservableJournalEntriesApi } from "./ObservableAPI";
import { JournalEntriesApiRequestFactory, JournalEntriesApiResponseProcessor} from "../apis/JournalEntriesApi";

export interface JournalEntriesApiAddAttachmentToJournalEntryRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof JournalEntriesApiaddAttachmentToJournalEntry
     */
    companySlug: string
    /**
     * 
     * @type number
     * @memberof JournalEntriesApiaddAttachmentToJournalEntry
     */
    journalEntryId: number
    /**
     * Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @type string
     * @memberof JournalEntriesApiaddAttachmentToJournalEntry
     */
    filename?: string
    /**
     * 
     * @type HttpFile
     * @memberof JournalEntriesApiaddAttachmentToJournalEntry
     */
    file?: HttpFile
}

export interface JournalEntriesApiCreateGeneralJournalEntryRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof JournalEntriesApicreateGeneralJournalEntry
     */
    companySlug: string
    /**
     * 
     * @type GeneralJournalEntryRequest
     * @memberof JournalEntriesApicreateGeneralJournalEntry
     */
    generalJournalEntryRequest: GeneralJournalEntryRequest
}

export interface JournalEntriesApiGetJournalEntriesRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof JournalEntriesApigetJournalEntries
     */
    companySlug: string
    /**
     * Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @type number
     * @memberof JournalEntriesApigetJournalEntries
     */
    page?: number
    /**
     * Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @type number
     * @memberof JournalEntriesApigetJournalEntries
     */
    pageSize?: number
    /**
     * Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof JournalEntriesApigetJournalEntries
     */
    date?: string
    /**
     * Filter based on date less than or equal to parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof JournalEntriesApigetJournalEntries
     */
    dateLe?: string
    /**
     * Filter based on date strictly less than parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof JournalEntriesApigetJournalEntries
     */
    dateLt?: string
    /**
     * Filter based on date greater than or equal to parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof JournalEntriesApigetJournalEntries
     */
    dateGe?: string
    /**
     * Filter based on date strictly greater than parameter value Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof JournalEntriesApigetJournalEntries
     */
    dateGt?: string
    /**
     * Filter based on date of last modification. Returns results that were last modified on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof JournalEntriesApigetJournalEntries
     */
    lastModified?: string
    /**
     * Returns results that have been last modified before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof JournalEntriesApigetJournalEntries
     */
    lastModifiedLe?: string
    /**
     * Returns results that have been last modified strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof JournalEntriesApigetJournalEntries
     */
    lastModifiedLt?: string
    /**
     * Returns results that have been last modified after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof JournalEntriesApigetJournalEntries
     */
    lastModifiedGe?: string
    /**
     * Returns results that have been last modified strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof JournalEntriesApigetJournalEntries
     */
    lastModifiedGt?: string
    /**
     * Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof JournalEntriesApigetJournalEntries
     */
    createdDate?: string
    /**
     * Returns results that were created before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof JournalEntriesApigetJournalEntries
     */
    createdDateLe?: string
    /**
     * Returns results that were created strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof JournalEntriesApigetJournalEntries
     */
    createdDateLt?: string
    /**
     * Returns results that were created after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof JournalEntriesApigetJournalEntries
     */
    createdDateGe?: string
    /**
     * Returns results that were created strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof JournalEntriesApigetJournalEntries
     */
    createdDateGt?: string
}

export interface JournalEntriesApiGetJournalEntryRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof JournalEntriesApigetJournalEntry
     */
    companySlug: string
    /**
     * 
     * @type number
     * @memberof JournalEntriesApigetJournalEntry
     */
    journalEntryId: number
}

export interface JournalEntriesApiGetJournalEntryAttachmentsRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof JournalEntriesApigetJournalEntryAttachments
     */
    companySlug: string
    /**
     * 
     * @type number
     * @memberof JournalEntriesApigetJournalEntryAttachments
     */
    journalEntryId: number
}

export class ObjectJournalEntriesApi {
    private api: ObservableJournalEntriesApi

    public constructor(configuration: Configuration, requestFactory?: JournalEntriesApiRequestFactory, responseProcessor?: JournalEntriesApiResponseProcessor) {
        this.api = new ObservableJournalEntriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates and adds a new attachment to a Journal Entry
     * @param param the request object
     */
    public addAttachmentToJournalEntryWithHttpInfo(param: JournalEntriesApiAddAttachmentToJournalEntryRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.addAttachmentToJournalEntryWithHttpInfo(param.companySlug, param.journalEntryId, param.filename, param.file,  options).toPromise();
    }

    /**
     * Creates and adds a new attachment to a Journal Entry
     * @param param the request object
     */
    public addAttachmentToJournalEntry(param: JournalEntriesApiAddAttachmentToJournalEntryRequest, options?: Configuration): Promise<void> {
        return this.api.addAttachmentToJournalEntry(param.companySlug, param.journalEntryId, param.filename, param.file,  options).toPromise();
    }

    /**
     * Creates a new general journal entry (fri postering).
     * @param param the request object
     */
    public createGeneralJournalEntryWithHttpInfo(param: JournalEntriesApiCreateGeneralJournalEntryRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createGeneralJournalEntryWithHttpInfo(param.companySlug, param.generalJournalEntryRequest,  options).toPromise();
    }

    /**
     * Creates a new general journal entry (fri postering).
     * @param param the request object
     */
    public createGeneralJournalEntry(param: JournalEntriesApiCreateGeneralJournalEntryRequest, options?: Configuration): Promise<void> {
        return this.api.createGeneralJournalEntry(param.companySlug, param.generalJournalEntryRequest,  options).toPromise();
    }

    /**
     * Returns all general journal entries (posteringer) for the specified company.
     * @param param the request object
     */
    public getJournalEntriesWithHttpInfo(param: JournalEntriesApiGetJournalEntriesRequest, options?: Configuration): Promise<HttpInfo<Array<JournalEntry>>> {
        return this.api.getJournalEntriesWithHttpInfo(param.companySlug, param.page, param.pageSize, param.date, param.dateLe, param.dateLt, param.dateGe, param.dateGt, param.lastModified, param.lastModifiedLe, param.lastModifiedLt, param.lastModifiedGe, param.lastModifiedGt, param.createdDate, param.createdDateLe, param.createdDateLt, param.createdDateGe, param.createdDateGt,  options).toPromise();
    }

    /**
     * Returns all general journal entries (posteringer) for the specified company.
     * @param param the request object
     */
    public getJournalEntries(param: JournalEntriesApiGetJournalEntriesRequest, options?: Configuration): Promise<Array<JournalEntry>> {
        return this.api.getJournalEntries(param.companySlug, param.page, param.pageSize, param.date, param.dateLe, param.dateLt, param.dateGe, param.dateGt, param.lastModified, param.lastModifiedLe, param.lastModifiedLt, param.lastModifiedGe, param.lastModifiedGt, param.createdDate, param.createdDateLe, param.createdDateLt, param.createdDateGe, param.createdDateGt,  options).toPromise();
    }

    /**
     * Returns all journal entries within a given company\'s Journal Entry Service
     * @param param the request object
     */
    public getJournalEntryWithHttpInfo(param: JournalEntriesApiGetJournalEntryRequest, options?: Configuration): Promise<HttpInfo<JournalEntry>> {
        return this.api.getJournalEntryWithHttpInfo(param.companySlug, param.journalEntryId,  options).toPromise();
    }

    /**
     * Returns all journal entries within a given company\'s Journal Entry Service
     * @param param the request object
     */
    public getJournalEntry(param: JournalEntriesApiGetJournalEntryRequest, options?: Configuration): Promise<JournalEntry> {
        return this.api.getJournalEntry(param.companySlug, param.journalEntryId,  options).toPromise();
    }

    /**
     * Returns all attachments for a given Journal Entry
     * @param param the request object
     */
    public getJournalEntryAttachmentsWithHttpInfo(param: JournalEntriesApiGetJournalEntryAttachmentsRequest, options?: Configuration): Promise<HttpInfo<Array<Attachment>>> {
        return this.api.getJournalEntryAttachmentsWithHttpInfo(param.companySlug, param.journalEntryId,  options).toPromise();
    }

    /**
     * Returns all attachments for a given Journal Entry
     * @param param the request object
     */
    public getJournalEntryAttachments(param: JournalEntriesApiGetJournalEntryAttachmentsRequest, options?: Configuration): Promise<Array<Attachment>> {
        return this.api.getJournalEntryAttachments(param.companySlug, param.journalEntryId,  options).toPromise();
    }

}

import { ObservableOffersApi } from "./ObservableAPI";
import { OffersApiRequestFactory, OffersApiResponseProcessor} from "../apis/OffersApi";

export interface OffersApiAddAttachmentToOfferDraftRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof OffersApiaddAttachmentToOfferDraft
     */
    companySlug: string
    /**
     * The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @type number
     * @memberof OffersApiaddAttachmentToOfferDraft
     */
    draftId: number
    /**
     * Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @type string
     * @memberof OffersApiaddAttachmentToOfferDraft
     */
    filename?: string
    /**
     * Not required.
     * @type string
     * @memberof OffersApiaddAttachmentToOfferDraft
     */
    comment?: string
    /**
     * 
     * @type HttpFile
     * @memberof OffersApiaddAttachmentToOfferDraft
     */
    file?: HttpFile
}

export interface OffersApiCreateOfferCounterRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof OffersApicreateOfferCounter
     */
    companySlug: string
    /**
     * 
     * @type Counter
     * @memberof OffersApicreateOfferCounter
     */
    counter?: Counter
}

export interface OffersApiCreateOfferDraftRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof OffersApicreateOfferDraft
     */
    companySlug: string
    /**
     * 
     * @type InvoiceishDraftRequest
     * @memberof OffersApicreateOfferDraft
     */
    invoiceishDraftRequest: InvoiceishDraftRequest
}

export interface OffersApiCreateOfferFromDraftRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof OffersApicreateOfferFromDraft
     */
    companySlug: string
    /**
     * The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @type number
     * @memberof OffersApicreateOfferFromDraft
     */
    draftId: number
}

export interface OffersApiDeleteOfferDraftRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof OffersApideleteOfferDraft
     */
    companySlug: string
    /**
     * The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @type number
     * @memberof OffersApideleteOfferDraft
     */
    draftId: number
}

export interface OffersApiGetOfferRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof OffersApigetOffer
     */
    companySlug: string
    /**
     * The offerId (primary key of the returned object) is returned as the first field in the GET all offers call 
     * @type string
     * @memberof OffersApigetOffer
     */
    offerId: string
}

export interface OffersApiGetOfferCounterRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof OffersApigetOfferCounter
     */
    companySlug: string
}

export interface OffersApiGetOfferDraftRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof OffersApigetOfferDraft
     */
    companySlug: string
    /**
     * The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @type number
     * @memberof OffersApigetOfferDraft
     */
    draftId: number
}

export interface OffersApiGetOfferDraftAttachmentsRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof OffersApigetOfferDraftAttachments
     */
    companySlug: string
    /**
     * The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @type number
     * @memberof OffersApigetOfferDraftAttachments
     */
    draftId: number
}

export interface OffersApiGetOfferDraftsRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof OffersApigetOfferDrafts
     */
    companySlug: string
    /**
     * Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @type number
     * @memberof OffersApigetOfferDrafts
     */
    page?: number
    /**
     * Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @type number
     * @memberof OffersApigetOfferDrafts
     */
    pageSize?: number
}

export interface OffersApiGetOffersRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof OffersApigetOffers
     */
    companySlug: string
    /**
     * Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @type number
     * @memberof OffersApigetOffers
     */
    page?: number
    /**
     * Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @type number
     * @memberof OffersApigetOffers
     */
    pageSize?: number
}

export interface OffersApiUpdateOfferDraftRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof OffersApiupdateOfferDraft
     */
    companySlug: string
    /**
     * The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @type number
     * @memberof OffersApiupdateOfferDraft
     */
    draftId: number
    /**
     * 
     * @type InvoiceishDraftRequest
     * @memberof OffersApiupdateOfferDraft
     */
    invoiceishDraftRequest: InvoiceishDraftRequest
}

export class ObjectOffersApi {
    private api: ObservableOffersApi

    public constructor(configuration: Configuration, requestFactory?: OffersApiRequestFactory, responseProcessor?: OffersApiResponseProcessor) {
        this.api = new ObservableOffersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates and adds a new attachment to an offer draft
     * @param param the request object
     */
    public addAttachmentToOfferDraftWithHttpInfo(param: OffersApiAddAttachmentToOfferDraftRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.addAttachmentToOfferDraftWithHttpInfo(param.companySlug, param.draftId, param.filename, param.comment, param.file,  options).toPromise();
    }

    /**
     * Creates and adds a new attachment to an offer draft
     * @param param the request object
     */
    public addAttachmentToOfferDraft(param: OffersApiAddAttachmentToOfferDraftRequest, options?: Configuration): Promise<void> {
        return this.api.addAttachmentToOfferDraft(param.companySlug, param.draftId, param.filename, param.comment, param.file,  options).toPromise();
    }

    /**
     * Creates the first offer number which is then increased by one with every new offer. By sending an empty request body the default is base number (the first offer number will thus be 10001), but can be specified to another starting value.
     * @param param the request object
     */
    public createOfferCounterWithHttpInfo(param: OffersApiCreateOfferCounterRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createOfferCounterWithHttpInfo(param.companySlug, param.counter,  options).toPromise();
    }

    /**
     * Creates the first offer number which is then increased by one with every new offer. By sending an empty request body the default is base number (the first offer number will thus be 10001), but can be specified to another starting value.
     * @param param the request object
     */
    public createOfferCounter(param: OffersApiCreateOfferCounterRequest, options?: Configuration): Promise<void> {
        return this.api.createOfferCounter(param.companySlug, param.counter,  options).toPromise();
    }

    /**
     * Creates an offer draft.
     * @param param the request object
     */
    public createOfferDraftWithHttpInfo(param: OffersApiCreateOfferDraftRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createOfferDraftWithHttpInfo(param.companySlug, param.invoiceishDraftRequest,  options).toPromise();
    }

    /**
     * Creates an offer draft.
     * @param param the request object
     */
    public createOfferDraft(param: OffersApiCreateOfferDraftRequest, options?: Configuration): Promise<void> {
        return this.api.createOfferDraft(param.companySlug, param.invoiceishDraftRequest,  options).toPromise();
    }

    /**
     * Creates an offer from an already created draft.
     * @param param the request object
     */
    public createOfferFromDraftWithHttpInfo(param: OffersApiCreateOfferFromDraftRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createOfferFromDraftWithHttpInfo(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Creates an offer from an already created draft.
     * @param param the request object
     */
    public createOfferFromDraft(param: OffersApiCreateOfferFromDraftRequest, options?: Configuration): Promise<void> {
        return this.api.createOfferFromDraft(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Delete offer draft with specified id.
     * @param param the request object
     */
    public deleteOfferDraftWithHttpInfo(param: OffersApiDeleteOfferDraftRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteOfferDraftWithHttpInfo(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Delete offer draft with specified id.
     * @param param the request object
     */
    public deleteOfferDraft(param: OffersApiDeleteOfferDraftRequest, options?: Configuration): Promise<void> {
        return this.api.deleteOfferDraft(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Returns offer with specified id.
     * @param param the request object
     */
    public getOfferWithHttpInfo(param: OffersApiGetOfferRequest, options?: Configuration): Promise<HttpInfo<Offer>> {
        return this.api.getOfferWithHttpInfo(param.companySlug, param.offerId,  options).toPromise();
    }

    /**
     * Returns offer with specified id.
     * @param param the request object
     */
    public getOffer(param: OffersApiGetOfferRequest, options?: Configuration): Promise<Offer> {
        return this.api.getOffer(param.companySlug, param.offerId,  options).toPromise();
    }

    /**
     * Retrieves the counter for offers if it has been created 
     * @param param the request object
     */
    public getOfferCounterWithHttpInfo(param: OffersApiGetOfferCounterRequest, options?: Configuration): Promise<HttpInfo<Counter>> {
        return this.api.getOfferCounterWithHttpInfo(param.companySlug,  options).toPromise();
    }

    /**
     * Retrieves the counter for offers if it has been created 
     * @param param the request object
     */
    public getOfferCounter(param: OffersApiGetOfferCounterRequest, options?: Configuration): Promise<Counter> {
        return this.api.getOfferCounter(param.companySlug,  options).toPromise();
    }

    /**
     * Returns offer draft with specified id.
     * @param param the request object
     */
    public getOfferDraftWithHttpInfo(param: OffersApiGetOfferDraftRequest, options?: Configuration): Promise<HttpInfo<InvoiceishDraftResult>> {
        return this.api.getOfferDraftWithHttpInfo(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Returns offer draft with specified id.
     * @param param the request object
     */
    public getOfferDraft(param: OffersApiGetOfferDraftRequest, options?: Configuration): Promise<InvoiceishDraftResult> {
        return this.api.getOfferDraft(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Returns all attachments for specified draft.
     * @param param the request object
     */
    public getOfferDraftAttachmentsWithHttpInfo(param: OffersApiGetOfferDraftAttachmentsRequest, options?: Configuration): Promise<HttpInfo<Array<Attachment>>> {
        return this.api.getOfferDraftAttachmentsWithHttpInfo(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Returns all attachments for specified draft.
     * @param param the request object
     */
    public getOfferDraftAttachments(param: OffersApiGetOfferDraftAttachmentsRequest, options?: Configuration): Promise<Array<Attachment>> {
        return this.api.getOfferDraftAttachments(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Returns all offer drafts for given company.
     * @param param the request object
     */
    public getOfferDraftsWithHttpInfo(param: OffersApiGetOfferDraftsRequest, options?: Configuration): Promise<HttpInfo<Array<InvoiceishDraftResult>>> {
        return this.api.getOfferDraftsWithHttpInfo(param.companySlug, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Returns all offer drafts for given company.
     * @param param the request object
     */
    public getOfferDrafts(param: OffersApiGetOfferDraftsRequest, options?: Configuration): Promise<Array<InvoiceishDraftResult>> {
        return this.api.getOfferDrafts(param.companySlug, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Returns all offers for given company
     * @param param the request object
     */
    public getOffersWithHttpInfo(param: OffersApiGetOffersRequest, options?: Configuration): Promise<HttpInfo<Array<Offer>>> {
        return this.api.getOffersWithHttpInfo(param.companySlug, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Returns all offers for given company
     * @param param the request object
     */
    public getOffers(param: OffersApiGetOffersRequest, options?: Configuration): Promise<Array<Offer>> {
        return this.api.getOffers(param.companySlug, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Updates offer draft with provided id. 
     * @param param the request object
     */
    public updateOfferDraftWithHttpInfo(param: OffersApiUpdateOfferDraftRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateOfferDraftWithHttpInfo(param.companySlug, param.draftId, param.invoiceishDraftRequest,  options).toPromise();
    }

    /**
     * Updates offer draft with provided id. 
     * @param param the request object
     */
    public updateOfferDraft(param: OffersApiUpdateOfferDraftRequest, options?: Configuration): Promise<void> {
        return this.api.updateOfferDraft(param.companySlug, param.draftId, param.invoiceishDraftRequest,  options).toPromise();
    }

}

import { ObservableOrderConfirmationsApi } from "./ObservableAPI";
import { OrderConfirmationsApiRequestFactory, OrderConfirmationsApiResponseProcessor} from "../apis/OrderConfirmationsApi";

export interface OrderConfirmationsApiAddAttachmentToOrderConfirmationDraftRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof OrderConfirmationsApiaddAttachmentToOrderConfirmationDraft
     */
    companySlug: string
    /**
     * The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @type number
     * @memberof OrderConfirmationsApiaddAttachmentToOrderConfirmationDraft
     */
    draftId: number
    /**
     * Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @type string
     * @memberof OrderConfirmationsApiaddAttachmentToOrderConfirmationDraft
     */
    filename?: string
    /**
     * Not required.
     * @type string
     * @memberof OrderConfirmationsApiaddAttachmentToOrderConfirmationDraft
     */
    comment?: string
    /**
     * 
     * @type HttpFile
     * @memberof OrderConfirmationsApiaddAttachmentToOrderConfirmationDraft
     */
    file?: HttpFile
}

export interface OrderConfirmationsApiCreateInvoiceDraftFromOrderConfirmationRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof OrderConfirmationsApicreateInvoiceDraftFromOrderConfirmation
     */
    companySlug: string
    /**
     * The confirmationId (primary key of the returned object) is returned as the first field in the GET all order confirmations call 
     * @type string
     * @memberof OrderConfirmationsApicreateInvoiceDraftFromOrderConfirmation
     */
    confirmationId: string
}

export interface OrderConfirmationsApiCreateOrderConfirmationCounterRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof OrderConfirmationsApicreateOrderConfirmationCounter
     */
    companySlug: string
    /**
     * 
     * @type Counter
     * @memberof OrderConfirmationsApicreateOrderConfirmationCounter
     */
    counter?: Counter
}

export interface OrderConfirmationsApiCreateOrderConfirmationDraftRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof OrderConfirmationsApicreateOrderConfirmationDraft
     */
    companySlug: string
    /**
     * 
     * @type InvoiceishDraftRequest
     * @memberof OrderConfirmationsApicreateOrderConfirmationDraft
     */
    invoiceishDraftRequest: InvoiceishDraftRequest
}

export interface OrderConfirmationsApiCreateOrderConfirmationFromDraftRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof OrderConfirmationsApicreateOrderConfirmationFromDraft
     */
    companySlug: string
    /**
     * The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @type number
     * @memberof OrderConfirmationsApicreateOrderConfirmationFromDraft
     */
    draftId: number
}

export interface OrderConfirmationsApiDeleteOrderConfirmationDraftRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof OrderConfirmationsApideleteOrderConfirmationDraft
     */
    companySlug: string
    /**
     * The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @type number
     * @memberof OrderConfirmationsApideleteOrderConfirmationDraft
     */
    draftId: number
}

export interface OrderConfirmationsApiGetOrderConfirmationRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof OrderConfirmationsApigetOrderConfirmation
     */
    companySlug: string
    /**
     * The confirmationId (primary key of the returned object) is returned as the first field in the GET all order confirmations call 
     * @type string
     * @memberof OrderConfirmationsApigetOrderConfirmation
     */
    confirmationId: string
}

export interface OrderConfirmationsApiGetOrderConfirmationCounterRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof OrderConfirmationsApigetOrderConfirmationCounter
     */
    companySlug: string
}

export interface OrderConfirmationsApiGetOrderConfirmationDraftRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof OrderConfirmationsApigetOrderConfirmationDraft
     */
    companySlug: string
    /**
     * The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @type number
     * @memberof OrderConfirmationsApigetOrderConfirmationDraft
     */
    draftId: number
}

export interface OrderConfirmationsApiGetOrderConfirmationDraftAttachmentsRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof OrderConfirmationsApigetOrderConfirmationDraftAttachments
     */
    companySlug: string
    /**
     * The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @type number
     * @memberof OrderConfirmationsApigetOrderConfirmationDraftAttachments
     */
    draftId: number
}

export interface OrderConfirmationsApiGetOrderConfirmationDraftsRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof OrderConfirmationsApigetOrderConfirmationDrafts
     */
    companySlug: string
    /**
     * Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @type number
     * @memberof OrderConfirmationsApigetOrderConfirmationDrafts
     */
    page?: number
    /**
     * Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @type number
     * @memberof OrderConfirmationsApigetOrderConfirmationDrafts
     */
    pageSize?: number
}

export interface OrderConfirmationsApiGetOrderConfirmationsRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof OrderConfirmationsApigetOrderConfirmations
     */
    companySlug: string
    /**
     * Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @type number
     * @memberof OrderConfirmationsApigetOrderConfirmations
     */
    page?: number
    /**
     * Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @type number
     * @memberof OrderConfirmationsApigetOrderConfirmations
     */
    pageSize?: number
}

export interface OrderConfirmationsApiUpdateOrderConfirmationDraftRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof OrderConfirmationsApiupdateOrderConfirmationDraft
     */
    companySlug: string
    /**
     * The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @type number
     * @memberof OrderConfirmationsApiupdateOrderConfirmationDraft
     */
    draftId: number
    /**
     * 
     * @type InvoiceishDraftRequest
     * @memberof OrderConfirmationsApiupdateOrderConfirmationDraft
     */
    invoiceishDraftRequest: InvoiceishDraftRequest
}

export class ObjectOrderConfirmationsApi {
    private api: ObservableOrderConfirmationsApi

    public constructor(configuration: Configuration, requestFactory?: OrderConfirmationsApiRequestFactory, responseProcessor?: OrderConfirmationsApiResponseProcessor) {
        this.api = new ObservableOrderConfirmationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates and adds a new attachment to an order confirmation draft
     * @param param the request object
     */
    public addAttachmentToOrderConfirmationDraftWithHttpInfo(param: OrderConfirmationsApiAddAttachmentToOrderConfirmationDraftRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.addAttachmentToOrderConfirmationDraftWithHttpInfo(param.companySlug, param.draftId, param.filename, param.comment, param.file,  options).toPromise();
    }

    /**
     * Creates and adds a new attachment to an order confirmation draft
     * @param param the request object
     */
    public addAttachmentToOrderConfirmationDraft(param: OrderConfirmationsApiAddAttachmentToOrderConfirmationDraftRequest, options?: Configuration): Promise<void> {
        return this.api.addAttachmentToOrderConfirmationDraft(param.companySlug, param.draftId, param.filename, param.comment, param.file,  options).toPromise();
    }

    /**
     * Creates an invoice draft from an order confirmation
     * @param param the request object
     */
    public createInvoiceDraftFromOrderConfirmationWithHttpInfo(param: OrderConfirmationsApiCreateInvoiceDraftFromOrderConfirmationRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createInvoiceDraftFromOrderConfirmationWithHttpInfo(param.companySlug, param.confirmationId,  options).toPromise();
    }

    /**
     * Creates an invoice draft from an order confirmation
     * @param param the request object
     */
    public createInvoiceDraftFromOrderConfirmation(param: OrderConfirmationsApiCreateInvoiceDraftFromOrderConfirmationRequest, options?: Configuration): Promise<void> {
        return this.api.createInvoiceDraftFromOrderConfirmation(param.companySlug, param.confirmationId,  options).toPromise();
    }

    /**
     * Creates the first order confirmation number which is then increased by one with every new order confirmation. By sending an empty request body the default is base number (the first order confirmation number will thus be 10001), but can be specified to another starting value.
     * @param param the request object
     */
    public createOrderConfirmationCounterWithHttpInfo(param: OrderConfirmationsApiCreateOrderConfirmationCounterRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createOrderConfirmationCounterWithHttpInfo(param.companySlug, param.counter,  options).toPromise();
    }

    /**
     * Creates the first order confirmation number which is then increased by one with every new order confirmation. By sending an empty request body the default is base number (the first order confirmation number will thus be 10001), but can be specified to another starting value.
     * @param param the request object
     */
    public createOrderConfirmationCounter(param: OrderConfirmationsApiCreateOrderConfirmationCounterRequest, options?: Configuration): Promise<void> {
        return this.api.createOrderConfirmationCounter(param.companySlug, param.counter,  options).toPromise();
    }

    /**
     * Creates an order confirmation draft.
     * @param param the request object
     */
    public createOrderConfirmationDraftWithHttpInfo(param: OrderConfirmationsApiCreateOrderConfirmationDraftRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createOrderConfirmationDraftWithHttpInfo(param.companySlug, param.invoiceishDraftRequest,  options).toPromise();
    }

    /**
     * Creates an order confirmation draft.
     * @param param the request object
     */
    public createOrderConfirmationDraft(param: OrderConfirmationsApiCreateOrderConfirmationDraftRequest, options?: Configuration): Promise<void> {
        return this.api.createOrderConfirmationDraft(param.companySlug, param.invoiceishDraftRequest,  options).toPromise();
    }

    /**
     * Creates an order confirmation from an already created draft.
     * @param param the request object
     */
    public createOrderConfirmationFromDraftWithHttpInfo(param: OrderConfirmationsApiCreateOrderConfirmationFromDraftRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createOrderConfirmationFromDraftWithHttpInfo(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Creates an order confirmation from an already created draft.
     * @param param the request object
     */
    public createOrderConfirmationFromDraft(param: OrderConfirmationsApiCreateOrderConfirmationFromDraftRequest, options?: Configuration): Promise<void> {
        return this.api.createOrderConfirmationFromDraft(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Delete order confirmation draft with specified id.
     * @param param the request object
     */
    public deleteOrderConfirmationDraftWithHttpInfo(param: OrderConfirmationsApiDeleteOrderConfirmationDraftRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteOrderConfirmationDraftWithHttpInfo(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Delete order confirmation draft with specified id.
     * @param param the request object
     */
    public deleteOrderConfirmationDraft(param: OrderConfirmationsApiDeleteOrderConfirmationDraftRequest, options?: Configuration): Promise<void> {
        return this.api.deleteOrderConfirmationDraft(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Returns order confirmation with specified id.
     * @param param the request object
     */
    public getOrderConfirmationWithHttpInfo(param: OrderConfirmationsApiGetOrderConfirmationRequest, options?: Configuration): Promise<HttpInfo<OrderConfirmation>> {
        return this.api.getOrderConfirmationWithHttpInfo(param.companySlug, param.confirmationId,  options).toPromise();
    }

    /**
     * Returns order confirmation with specified id.
     * @param param the request object
     */
    public getOrderConfirmation(param: OrderConfirmationsApiGetOrderConfirmationRequest, options?: Configuration): Promise<OrderConfirmation> {
        return this.api.getOrderConfirmation(param.companySlug, param.confirmationId,  options).toPromise();
    }

    /**
     * Retrieves the counter for order confirmations if it has been created 
     * @param param the request object
     */
    public getOrderConfirmationCounterWithHttpInfo(param: OrderConfirmationsApiGetOrderConfirmationCounterRequest, options?: Configuration): Promise<HttpInfo<Counter>> {
        return this.api.getOrderConfirmationCounterWithHttpInfo(param.companySlug,  options).toPromise();
    }

    /**
     * Retrieves the counter for order confirmations if it has been created 
     * @param param the request object
     */
    public getOrderConfirmationCounter(param: OrderConfirmationsApiGetOrderConfirmationCounterRequest, options?: Configuration): Promise<Counter> {
        return this.api.getOrderConfirmationCounter(param.companySlug,  options).toPromise();
    }

    /**
     * Returns order confirmation draft with specified id.
     * @param param the request object
     */
    public getOrderConfirmationDraftWithHttpInfo(param: OrderConfirmationsApiGetOrderConfirmationDraftRequest, options?: Configuration): Promise<HttpInfo<InvoiceishDraftResult>> {
        return this.api.getOrderConfirmationDraftWithHttpInfo(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Returns order confirmation draft with specified id.
     * @param param the request object
     */
    public getOrderConfirmationDraft(param: OrderConfirmationsApiGetOrderConfirmationDraftRequest, options?: Configuration): Promise<InvoiceishDraftResult> {
        return this.api.getOrderConfirmationDraft(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Returns all attachments for specified draft.
     * @param param the request object
     */
    public getOrderConfirmationDraftAttachmentsWithHttpInfo(param: OrderConfirmationsApiGetOrderConfirmationDraftAttachmentsRequest, options?: Configuration): Promise<HttpInfo<Array<Attachment>>> {
        return this.api.getOrderConfirmationDraftAttachmentsWithHttpInfo(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Returns all attachments for specified draft.
     * @param param the request object
     */
    public getOrderConfirmationDraftAttachments(param: OrderConfirmationsApiGetOrderConfirmationDraftAttachmentsRequest, options?: Configuration): Promise<Array<Attachment>> {
        return this.api.getOrderConfirmationDraftAttachments(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Returns all order confirmation drafts for given company.
     * @param param the request object
     */
    public getOrderConfirmationDraftsWithHttpInfo(param: OrderConfirmationsApiGetOrderConfirmationDraftsRequest, options?: Configuration): Promise<HttpInfo<Array<InvoiceishDraftResult>>> {
        return this.api.getOrderConfirmationDraftsWithHttpInfo(param.companySlug, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Returns all order confirmation drafts for given company.
     * @param param the request object
     */
    public getOrderConfirmationDrafts(param: OrderConfirmationsApiGetOrderConfirmationDraftsRequest, options?: Configuration): Promise<Array<InvoiceishDraftResult>> {
        return this.api.getOrderConfirmationDrafts(param.companySlug, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Returns all order confirmations for given company
     * @param param the request object
     */
    public getOrderConfirmationsWithHttpInfo(param: OrderConfirmationsApiGetOrderConfirmationsRequest, options?: Configuration): Promise<HttpInfo<Array<OrderConfirmation>>> {
        return this.api.getOrderConfirmationsWithHttpInfo(param.companySlug, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Returns all order confirmations for given company
     * @param param the request object
     */
    public getOrderConfirmations(param: OrderConfirmationsApiGetOrderConfirmationsRequest, options?: Configuration): Promise<Array<OrderConfirmation>> {
        return this.api.getOrderConfirmations(param.companySlug, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Updates order confirmation draft with provided id. 
     * @param param the request object
     */
    public updateOrderConfirmationDraftWithHttpInfo(param: OrderConfirmationsApiUpdateOrderConfirmationDraftRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateOrderConfirmationDraftWithHttpInfo(param.companySlug, param.draftId, param.invoiceishDraftRequest,  options).toPromise();
    }

    /**
     * Updates order confirmation draft with provided id. 
     * @param param the request object
     */
    public updateOrderConfirmationDraft(param: OrderConfirmationsApiUpdateOrderConfirmationDraftRequest, options?: Configuration): Promise<void> {
        return this.api.updateOrderConfirmationDraft(param.companySlug, param.draftId, param.invoiceishDraftRequest,  options).toPromise();
    }

}

import { ObservableProductsApi } from "./ObservableAPI";
import { ProductsApiRequestFactory, ProductsApiResponseProcessor} from "../apis/ProductsApi";

export interface ProductsApiCreateProductRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof ProductsApicreateProduct
     */
    companySlug: string
    /**
     * 
     * @type Product
     * @memberof ProductsApicreateProduct
     */
    product: Product
}

export interface ProductsApiCreateProductSalesReportRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof ProductsApicreateProductSalesReport
     */
    companySlug: string
    /**
     * 
     * @type ProductSalesReportRequest
     * @memberof ProductsApicreateProductSalesReport
     */
    productSalesReportRequest: ProductSalesReportRequest
}

export interface ProductsApiDeleteProductRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof ProductsApideleteProduct
     */
    companySlug: string
    /**
     * The productId (primary key of the returned object) is returned in the GET all products call; not to be confused with productNumber. 
     * @type number
     * @memberof ProductsApideleteProduct
     */
    productId: number
}

export interface ProductsApiGetProductRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof ProductsApigetProduct
     */
    companySlug: string
    /**
     * The productId (primary key of the returned object) is returned in the GET all products call; not to be confused with productNumber. 
     * @type number
     * @memberof ProductsApigetProduct
     */
    productId: number
}

export interface ProductsApiGetProductsRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof ProductsApigetProducts
     */
    companySlug: string
    /**
     * Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @type number
     * @memberof ProductsApigetProducts
     */
    page?: number
    /**
     * Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @type number
     * @memberof ProductsApigetProducts
     */
    pageSize?: number
    /**
     * Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof ProductsApigetProducts
     */
    createdDate?: string
    /**
     * Returns results that were created before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof ProductsApigetProducts
     */
    createdDateLe?: string
    /**
     * Returns results that were created strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof ProductsApigetProducts
     */
    createdDateLt?: string
    /**
     * Returns results that were created after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof ProductsApigetProducts
     */
    createdDateGe?: string
    /**
     * Returns results that were created strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof ProductsApigetProducts
     */
    createdDateGt?: string
    /**
     * Filter based on date of last modification. Returns results that were last modified on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof ProductsApigetProducts
     */
    lastModified?: string
    /**
     * Returns results that have been last modified before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof ProductsApigetProducts
     */
    lastModifiedLe?: string
    /**
     * Returns results that have been last modified strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof ProductsApigetProducts
     */
    lastModifiedLt?: string
    /**
     * Returns results that have been last modified after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof ProductsApigetProducts
     */
    lastModifiedGe?: string
    /**
     * Returns results that have been last modified strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof ProductsApigetProducts
     */
    lastModifiedGt?: string
    /**
     * Find all results with product name equal to the specified parameter.
     * @type string
     * @memberof ProductsApigetProducts
     */
    name?: string
    /**
     * Find all results with product number (varenummer) equal to the specified parameter.
     * @type string
     * @memberof ProductsApigetProducts
     */
    productNumber?: string
    /**
     * Returns active (true) or inactive (false) products.
     * @type boolean
     * @memberof ProductsApigetProducts
     */
    active?: boolean
}

export interface ProductsApiUpdateProductRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof ProductsApiupdateProduct
     */
    companySlug: string
    /**
     * The productId (primary key of the returned object) is returned in the GET all products call; not to be confused with productNumber. 
     * @type number
     * @memberof ProductsApiupdateProduct
     */
    productId: number
    /**
     * 
     * @type Product
     * @memberof ProductsApiupdateProduct
     */
    product: Product
}

export class ObjectProductsApi {
    private api: ObservableProductsApi

    public constructor(configuration: Configuration, requestFactory?: ProductsApiRequestFactory, responseProcessor?: ProductsApiResponseProcessor) {
        this.api = new ObservableProductsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new product.
     * @param param the request object
     */
    public createProductWithHttpInfo(param: ProductsApiCreateProductRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createProductWithHttpInfo(param.companySlug, param.product,  options).toPromise();
    }

    /**
     * Creates a new product.
     * @param param the request object
     */
    public createProduct(param: ProductsApiCreateProductRequest, options?: Configuration): Promise<void> {
        return this.api.createProduct(param.companySlug, param.product,  options).toPromise();
    }

    /**
     * Creates a report based on provided specifications.
     * @param param the request object
     */
    public createProductSalesReportWithHttpInfo(param: ProductsApiCreateProductSalesReportRequest, options?: Configuration): Promise<HttpInfo<Array<ProductSalesReportResult>>> {
        return this.api.createProductSalesReportWithHttpInfo(param.companySlug, param.productSalesReportRequest,  options).toPromise();
    }

    /**
     * Creates a report based on provided specifications.
     * @param param the request object
     */
    public createProductSalesReport(param: ProductsApiCreateProductSalesReportRequest, options?: Configuration): Promise<Array<ProductSalesReportResult>> {
        return this.api.createProductSalesReport(param.companySlug, param.productSalesReportRequest,  options).toPromise();
    }

    /**
     * Delete product with specified id.
     * @param param the request object
     */
    public deleteProductWithHttpInfo(param: ProductsApiDeleteProductRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteProductWithHttpInfo(param.companySlug, param.productId,  options).toPromise();
    }

    /**
     * Delete product with specified id.
     * @param param the request object
     */
    public deleteProduct(param: ProductsApiDeleteProductRequest, options?: Configuration): Promise<void> {
        return this.api.deleteProduct(param.companySlug, param.productId,  options).toPromise();
    }

    /**
     * Returns product with specified id.
     * @param param the request object
     */
    public getProductWithHttpInfo(param: ProductsApiGetProductRequest, options?: Configuration): Promise<HttpInfo<Product>> {
        return this.api.getProductWithHttpInfo(param.companySlug, param.productId,  options).toPromise();
    }

    /**
     * Returns product with specified id.
     * @param param the request object
     */
    public getProduct(param: ProductsApiGetProductRequest, options?: Configuration): Promise<Product> {
        return this.api.getProduct(param.companySlug, param.productId,  options).toPromise();
    }

    /**
     * Returns all products for given company
     * @param param the request object
     */
    public getProductsWithHttpInfo(param: ProductsApiGetProductsRequest, options?: Configuration): Promise<HttpInfo<Array<Product>>> {
        return this.api.getProductsWithHttpInfo(param.companySlug, param.page, param.pageSize, param.createdDate, param.createdDateLe, param.createdDateLt, param.createdDateGe, param.createdDateGt, param.lastModified, param.lastModifiedLe, param.lastModifiedLt, param.lastModifiedGe, param.lastModifiedGt, param.name, param.productNumber, param.active,  options).toPromise();
    }

    /**
     * Returns all products for given company
     * @param param the request object
     */
    public getProducts(param: ProductsApiGetProductsRequest, options?: Configuration): Promise<Array<Product>> {
        return this.api.getProducts(param.companySlug, param.page, param.pageSize, param.createdDate, param.createdDateLe, param.createdDateLt, param.createdDateGe, param.createdDateGt, param.lastModified, param.lastModifiedLe, param.lastModifiedLt, param.lastModifiedGe, param.lastModifiedGt, param.name, param.productNumber, param.active,  options).toPromise();
    }

    /**
     * Updates an existing product.
     * @param param the request object
     */
    public updateProductWithHttpInfo(param: ProductsApiUpdateProductRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateProductWithHttpInfo(param.companySlug, param.productId, param.product,  options).toPromise();
    }

    /**
     * Updates an existing product.
     * @param param the request object
     */
    public updateProduct(param: ProductsApiUpdateProductRequest, options?: Configuration): Promise<void> {
        return this.api.updateProduct(param.companySlug, param.productId, param.product,  options).toPromise();
    }

}

import { ObservableProjectsApi } from "./ObservableAPI";
import { ProjectsApiRequestFactory, ProjectsApiResponseProcessor} from "../apis/ProjectsApi";

export interface ProjectsApiCreateProjectRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof ProjectsApicreateProject
     */
    companySlug: string
    /**
     * 
     * @type ProjectRequest
     * @memberof ProjectsApicreateProject
     */
    projectRequest: ProjectRequest
}

export interface ProjectsApiDeleteProjectRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof ProjectsApideleteProject
     */
    companySlug: string
    /**
     * 
     * @type number
     * @memberof ProjectsApideleteProject
     */
    projectId: number
}

export interface ProjectsApiGetProjectRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof ProjectsApigetProject
     */
    companySlug: string
    /**
     * 
     * @type number
     * @memberof ProjectsApigetProject
     */
    projectId: number
}

export interface ProjectsApiGetProjectsRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof ProjectsApigetProjects
     */
    companySlug: string
    /**
     * Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @type number
     * @memberof ProjectsApigetProjects
     */
    page?: number
    /**
     * Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @type number
     * @memberof ProjectsApigetProjects
     */
    pageSize?: number
    /**
     * Filter results based on completed / not completed.
     * @type boolean
     * @memberof ProjectsApigetProjects
     */
    completed?: boolean
    /**
     * Filter results based on name of the project.
     * @type string
     * @memberof ProjectsApigetProjects
     */
    name?: string
    /**
     * Filter results based on number of the project.
     * @type string
     * @memberof ProjectsApigetProjects
     */
    number?: string
}

export interface ProjectsApiUpdateProjectRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof ProjectsApiupdateProject
     */
    companySlug: string
    /**
     * 
     * @type number
     * @memberof ProjectsApiupdateProject
     */
    projectId: number
    /**
     * 
     * @type UpdateProjectRequest
     * @memberof ProjectsApiupdateProject
     */
    updateProjectRequest: UpdateProjectRequest
}

export class ObjectProjectsApi {
    private api: ObservableProjectsApi

    public constructor(configuration: Configuration, requestFactory?: ProjectsApiRequestFactory, responseProcessor?: ProjectsApiResponseProcessor) {
        this.api = new ObservableProjectsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new project
     * @param param the request object
     */
    public createProjectWithHttpInfo(param: ProjectsApiCreateProjectRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createProjectWithHttpInfo(param.companySlug, param.projectRequest,  options).toPromise();
    }

    /**
     * Creates a new project
     * @param param the request object
     */
    public createProject(param: ProjectsApiCreateProjectRequest, options?: Configuration): Promise<void> {
        return this.api.createProject(param.companySlug, param.projectRequest,  options).toPromise();
    }

    /**
     * Delete project with specified id.
     * @param param the request object
     */
    public deleteProjectWithHttpInfo(param: ProjectsApiDeleteProjectRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteProjectWithHttpInfo(param.companySlug, param.projectId,  options).toPromise();
    }

    /**
     * Delete project with specified id.
     * @param param the request object
     */
    public deleteProject(param: ProjectsApiDeleteProjectRequest, options?: Configuration): Promise<void> {
        return this.api.deleteProject(param.companySlug, param.projectId,  options).toPromise();
    }

    /**
     * Returns project with specified id.
     * @param param the request object
     */
    public getProjectWithHttpInfo(param: ProjectsApiGetProjectRequest, options?: Configuration): Promise<HttpInfo<ProjectResult>> {
        return this.api.getProjectWithHttpInfo(param.companySlug, param.projectId,  options).toPromise();
    }

    /**
     * Returns project with specified id.
     * @param param the request object
     */
    public getProject(param: ProjectsApiGetProjectRequest, options?: Configuration): Promise<ProjectResult> {
        return this.api.getProject(param.companySlug, param.projectId,  options).toPromise();
    }

    /**
     * Returns all projects for given company
     * @param param the request object
     */
    public getProjectsWithHttpInfo(param: ProjectsApiGetProjectsRequest, options?: Configuration): Promise<HttpInfo<Array<ProjectResult>>> {
        return this.api.getProjectsWithHttpInfo(param.companySlug, param.page, param.pageSize, param.completed, param.name, param.number,  options).toPromise();
    }

    /**
     * Returns all projects for given company
     * @param param the request object
     */
    public getProjects(param: ProjectsApiGetProjectsRequest, options?: Configuration): Promise<Array<ProjectResult>> {
        return this.api.getProjects(param.companySlug, param.page, param.pageSize, param.completed, param.name, param.number,  options).toPromise();
    }

    /**
     * Updates project with provided id. 
     * @param param the request object
     */
    public updateProjectWithHttpInfo(param: ProjectsApiUpdateProjectRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateProjectWithHttpInfo(param.companySlug, param.projectId, param.updateProjectRequest,  options).toPromise();
    }

    /**
     * Updates project with provided id. 
     * @param param the request object
     */
    public updateProject(param: ProjectsApiUpdateProjectRequest, options?: Configuration): Promise<void> {
        return this.api.updateProject(param.companySlug, param.projectId, param.updateProjectRequest,  options).toPromise();
    }

}

import { ObservablePurchasesApi } from "./ObservableAPI";
import { PurchasesApiRequestFactory, PurchasesApiResponseProcessor} from "../apis/PurchasesApi";

export interface PurchasesApiAddAttachmentToPurchaseRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof PurchasesApiaddAttachmentToPurchase
     */
    companySlug: string
    /**
     * 
     * @type number
     * @memberof PurchasesApiaddAttachmentToPurchase
     */
    purchaseId: number
    /**
     * The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @type string
     * @memberof PurchasesApiaddAttachmentToPurchase
     */
    filename?: string
    /**
     * True if this attachment may document the payment (i.e. transaction receipt from credit card/payment company, export from bank, etc.). Default value is false if not specified. At least one of attachToPayment and attachToSale must be true.
     * @type boolean
     * @memberof PurchasesApiaddAttachmentToPurchase
     */
    attachToPayment?: boolean
    /**
     * True if this attachment may document the sale (i.e. invoice, etc). Default value is false if not specified. At least one of attachToPayment and attachToSale must be true.
     * @type boolean
     * @memberof PurchasesApiaddAttachmentToPurchase
     */
    attachToSale?: boolean
    /**
     * 
     * @type HttpFile
     * @memberof PurchasesApiaddAttachmentToPurchase
     */
    file?: HttpFile
}

export interface PurchasesApiAddAttachmentToPurchaseDraftRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof PurchasesApiaddAttachmentToPurchaseDraft
     */
    companySlug: string
    /**
     * The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @type number
     * @memberof PurchasesApiaddAttachmentToPurchaseDraft
     */
    draftId: number
    /**
     * Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @type string
     * @memberof PurchasesApiaddAttachmentToPurchaseDraft
     */
    filename?: string
    /**
     * 
     * @type HttpFile
     * @memberof PurchasesApiaddAttachmentToPurchaseDraft
     */
    file?: HttpFile
}

export interface PurchasesApiCreatePurchaseRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof PurchasesApicreatePurchase
     */
    companySlug: string
    /**
     * 
     * @type PurchaseRequest
     * @memberof PurchasesApicreatePurchase
     */
    purchaseRequest: PurchaseRequest
}

export interface PurchasesApiCreatePurchaseDraftRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof PurchasesApicreatePurchaseDraft
     */
    companySlug: string
    /**
     * 
     * @type DraftRequest
     * @memberof PurchasesApicreatePurchaseDraft
     */
    draftRequest: DraftRequest
}

export interface PurchasesApiCreatePurchaseFromDraftRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof PurchasesApicreatePurchaseFromDraft
     */
    companySlug: string
    /**
     * The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @type number
     * @memberof PurchasesApicreatePurchaseFromDraft
     */
    draftId: number
}

export interface PurchasesApiCreatePurchasePaymentRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof PurchasesApicreatePurchasePayment
     */
    companySlug: string
    /**
     * 
     * @type number
     * @memberof PurchasesApicreatePurchasePayment
     */
    purchaseId: number
    /**
     * 
     * @type Payment
     * @memberof PurchasesApicreatePurchasePayment
     */
    payment: Payment
}

export interface PurchasesApiDeletePurchaseRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof PurchasesApideletePurchase
     */
    companySlug: string
    /**
     * 
     * @type number
     * @memberof PurchasesApideletePurchase
     */
    purchaseId: number
    /**
     * Required description for deleting the purchase
     * @type string
     * @memberof PurchasesApideletePurchase
     */
    description: string
}

export interface PurchasesApiDeletePurchaseDraftRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof PurchasesApideletePurchaseDraft
     */
    companySlug: string
    /**
     * The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @type number
     * @memberof PurchasesApideletePurchaseDraft
     */
    draftId: number
}

export interface PurchasesApiGetPurchaseRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof PurchasesApigetPurchase
     */
    companySlug: string
    /**
     * 
     * @type number
     * @memberof PurchasesApigetPurchase
     */
    purchaseId: number
}

export interface PurchasesApiGetPurchaseAttachmentsRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof PurchasesApigetPurchaseAttachments
     */
    companySlug: string
    /**
     * 
     * @type number
     * @memberof PurchasesApigetPurchaseAttachments
     */
    purchaseId: number
}

export interface PurchasesApiGetPurchaseDraftRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof PurchasesApigetPurchaseDraft
     */
    companySlug: string
    /**
     * The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @type number
     * @memberof PurchasesApigetPurchaseDraft
     */
    draftId: number
}

export interface PurchasesApiGetPurchaseDraftAttachmentsRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof PurchasesApigetPurchaseDraftAttachments
     */
    companySlug: string
    /**
     * The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @type number
     * @memberof PurchasesApigetPurchaseDraftAttachments
     */
    draftId: number
}

export interface PurchasesApiGetPurchaseDraftsRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof PurchasesApigetPurchaseDrafts
     */
    companySlug: string
    /**
     * Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @type number
     * @memberof PurchasesApigetPurchaseDrafts
     */
    page?: number
    /**
     * Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @type number
     * @memberof PurchasesApigetPurchaseDrafts
     */
    pageSize?: number
}

export interface PurchasesApiGetPurchasePaymentRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof PurchasesApigetPurchasePayment
     */
    companySlug: string
    /**
     * 
     * @type number
     * @memberof PurchasesApigetPurchasePayment
     */
    purchaseId: number
    /**
     * 
     * @type number
     * @memberof PurchasesApigetPurchasePayment
     */
    paymentId: number
}

export interface PurchasesApiGetPurchasePaymentsRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof PurchasesApigetPurchasePayments
     */
    companySlug: string
    /**
     * 
     * @type number
     * @memberof PurchasesApigetPurchasePayments
     */
    purchaseId: number
}

export interface PurchasesApiGetPurchasesRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof PurchasesApigetPurchases
     */
    companySlug: string
    /**
     * Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @type number
     * @memberof PurchasesApigetPurchases
     */
    page?: number
    /**
     * Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @type number
     * @memberof PurchasesApigetPurchases
     */
    pageSize?: number
    /**
     * Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof PurchasesApigetPurchases
     */
    date?: string
    /**
     * Filter based on date less than or equal to parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof PurchasesApigetPurchases
     */
    dateLe?: string
    /**
     * Filter based on date strictly less than parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof PurchasesApigetPurchases
     */
    dateLt?: string
    /**
     * Filter based on date greater than or equal to parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof PurchasesApigetPurchases
     */
    dateGe?: string
    /**
     * Filter based on date strictly greater than parameter value Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof PurchasesApigetPurchases
     */
    dateGt?: string
    /**
     * Sorts results in either ascending (asc) or descending (desc) order based on the parameter value.
     * @type &#39;date asc&#39; | &#39;date desc&#39;
     * @memberof PurchasesApigetPurchases
     */
    sortBy?: 'date asc' | 'date desc'
    /**
     * When set to true, returns only purchases that have been paid. Otherwise false returns all purchases that have not been fully settled. 
     * @type boolean
     * @memberof PurchasesApigetPurchases
     */
    paid?: boolean
}

export interface PurchasesApiUpdatePurchaseDraftRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof PurchasesApiupdatePurchaseDraft
     */
    companySlug: string
    /**
     * The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @type number
     * @memberof PurchasesApiupdatePurchaseDraft
     */
    draftId: number
    /**
     * 
     * @type DraftRequest
     * @memberof PurchasesApiupdatePurchaseDraft
     */
    draftRequest: DraftRequest
}

export class ObjectPurchasesApi {
    private api: ObservablePurchasesApi

    public constructor(configuration: Configuration, requestFactory?: PurchasesApiRequestFactory, responseProcessor?: PurchasesApiResponseProcessor) {
        this.api = new ObservablePurchasesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates and adds a new attachment to a Purchase
     * @param param the request object
     */
    public addAttachmentToPurchaseWithHttpInfo(param: PurchasesApiAddAttachmentToPurchaseRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.addAttachmentToPurchaseWithHttpInfo(param.companySlug, param.purchaseId, param.filename, param.attachToPayment, param.attachToSale, param.file,  options).toPromise();
    }

    /**
     * Creates and adds a new attachment to a Purchase
     * @param param the request object
     */
    public addAttachmentToPurchase(param: PurchasesApiAddAttachmentToPurchaseRequest, options?: Configuration): Promise<void> {
        return this.api.addAttachmentToPurchase(param.companySlug, param.purchaseId, param.filename, param.attachToPayment, param.attachToSale, param.file,  options).toPromise();
    }

    /**
     * Creates and adds a new attachment to a draft
     * @param param the request object
     */
    public addAttachmentToPurchaseDraftWithHttpInfo(param: PurchasesApiAddAttachmentToPurchaseDraftRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.addAttachmentToPurchaseDraftWithHttpInfo(param.companySlug, param.draftId, param.filename, param.file,  options).toPromise();
    }

    /**
     * Creates and adds a new attachment to a draft
     * @param param the request object
     */
    public addAttachmentToPurchaseDraft(param: PurchasesApiAddAttachmentToPurchaseDraftRequest, options?: Configuration): Promise<void> {
        return this.api.addAttachmentToPurchaseDraft(param.companySlug, param.draftId, param.filename, param.file,  options).toPromise();
    }

    /**
     * Creates a new purchase.
     * @param param the request object
     */
    public createPurchaseWithHttpInfo(param: PurchasesApiCreatePurchaseRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createPurchaseWithHttpInfo(param.companySlug, param.purchaseRequest,  options).toPromise();
    }

    /**
     * Creates a new purchase.
     * @param param the request object
     */
    public createPurchase(param: PurchasesApiCreatePurchaseRequest, options?: Configuration): Promise<void> {
        return this.api.createPurchase(param.companySlug, param.purchaseRequest,  options).toPromise();
    }

    /**
     * Creates a purchase draft.
     * @param param the request object
     */
    public createPurchaseDraftWithHttpInfo(param: PurchasesApiCreatePurchaseDraftRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createPurchaseDraftWithHttpInfo(param.companySlug, param.draftRequest,  options).toPromise();
    }

    /**
     * Creates a purchase draft.
     * @param param the request object
     */
    public createPurchaseDraft(param: PurchasesApiCreatePurchaseDraftRequest, options?: Configuration): Promise<void> {
        return this.api.createPurchaseDraft(param.companySlug, param.draftRequest,  options).toPromise();
    }

    /**
     * Creates a purchase from an already created draft.
     * @param param the request object
     */
    public createPurchaseFromDraftWithHttpInfo(param: PurchasesApiCreatePurchaseFromDraftRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createPurchaseFromDraftWithHttpInfo(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Creates a purchase from an already created draft.
     * @param param the request object
     */
    public createPurchaseFromDraft(param: PurchasesApiCreatePurchaseFromDraftRequest, options?: Configuration): Promise<void> {
        return this.api.createPurchaseFromDraft(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Creates a new payment for a purchase
     * @param param the request object
     */
    public createPurchasePaymentWithHttpInfo(param: PurchasesApiCreatePurchasePaymentRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createPurchasePaymentWithHttpInfo(param.companySlug, param.purchaseId, param.payment,  options).toPromise();
    }

    /**
     * Creates a new payment for a purchase
     * @param param the request object
     */
    public createPurchasePayment(param: PurchasesApiCreatePurchasePaymentRequest, options?: Configuration): Promise<void> {
        return this.api.createPurchasePayment(param.companySlug, param.purchaseId, param.payment,  options).toPromise();
    }

    /**
     * Sets the deleted flag for a purchase. The purchase is not deleted, but a reverse transaction is created and the \"deleted\" property is set to true.
     * @param param the request object
     */
    public deletePurchaseWithHttpInfo(param: PurchasesApiDeletePurchaseRequest, options?: Configuration): Promise<HttpInfo<PurchaseResult>> {
        return this.api.deletePurchaseWithHttpInfo(param.companySlug, param.purchaseId, param.description,  options).toPromise();
    }

    /**
     * Sets the deleted flag for a purchase. The purchase is not deleted, but a reverse transaction is created and the \"deleted\" property is set to true.
     * @param param the request object
     */
    public deletePurchase(param: PurchasesApiDeletePurchaseRequest, options?: Configuration): Promise<PurchaseResult> {
        return this.api.deletePurchase(param.companySlug, param.purchaseId, param.description,  options).toPromise();
    }

    /**
     * Delete draft with specified id.
     * @param param the request object
     */
    public deletePurchaseDraftWithHttpInfo(param: PurchasesApiDeletePurchaseDraftRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deletePurchaseDraftWithHttpInfo(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Delete draft with specified id.
     * @param param the request object
     */
    public deletePurchaseDraft(param: PurchasesApiDeletePurchaseDraftRequest, options?: Configuration): Promise<void> {
        return this.api.deletePurchaseDraft(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Returns purchase with specified id.
     * @param param the request object
     */
    public getPurchaseWithHttpInfo(param: PurchasesApiGetPurchaseRequest, options?: Configuration): Promise<HttpInfo<PurchaseResult>> {
        return this.api.getPurchaseWithHttpInfo(param.companySlug, param.purchaseId,  options).toPromise();
    }

    /**
     * Returns purchase with specified id.
     * @param param the request object
     */
    public getPurchase(param: PurchasesApiGetPurchaseRequest, options?: Configuration): Promise<PurchaseResult> {
        return this.api.getPurchase(param.companySlug, param.purchaseId,  options).toPromise();
    }

    /**
     * Returns all attachments for specified purchase.
     * @param param the request object
     */
    public getPurchaseAttachmentsWithHttpInfo(param: PurchasesApiGetPurchaseAttachmentsRequest, options?: Configuration): Promise<HttpInfo<Array<Attachment>>> {
        return this.api.getPurchaseAttachmentsWithHttpInfo(param.companySlug, param.purchaseId,  options).toPromise();
    }

    /**
     * Returns all attachments for specified purchase.
     * @param param the request object
     */
    public getPurchaseAttachments(param: PurchasesApiGetPurchaseAttachmentsRequest, options?: Configuration): Promise<Array<Attachment>> {
        return this.api.getPurchaseAttachments(param.companySlug, param.purchaseId,  options).toPromise();
    }

    /**
     * Returns draft with specified id.
     * @param param the request object
     */
    public getPurchaseDraftWithHttpInfo(param: PurchasesApiGetPurchaseDraftRequest, options?: Configuration): Promise<HttpInfo<DraftResult>> {
        return this.api.getPurchaseDraftWithHttpInfo(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Returns draft with specified id.
     * @param param the request object
     */
    public getPurchaseDraft(param: PurchasesApiGetPurchaseDraftRequest, options?: Configuration): Promise<DraftResult> {
        return this.api.getPurchaseDraft(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Returns all attachments for specified draft.
     * @param param the request object
     */
    public getPurchaseDraftAttachmentsWithHttpInfo(param: PurchasesApiGetPurchaseDraftAttachmentsRequest, options?: Configuration): Promise<HttpInfo<Array<Attachment>>> {
        return this.api.getPurchaseDraftAttachmentsWithHttpInfo(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Returns all attachments for specified draft.
     * @param param the request object
     */
    public getPurchaseDraftAttachments(param: PurchasesApiGetPurchaseDraftAttachmentsRequest, options?: Configuration): Promise<Array<Attachment>> {
        return this.api.getPurchaseDraftAttachments(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Returns all purchase drafts for given company.
     * @param param the request object
     */
    public getPurchaseDraftsWithHttpInfo(param: PurchasesApiGetPurchaseDraftsRequest, options?: Configuration): Promise<HttpInfo<Array<DraftResult>>> {
        return this.api.getPurchaseDraftsWithHttpInfo(param.companySlug, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Returns all purchase drafts for given company.
     * @param param the request object
     */
    public getPurchaseDrafts(param: PurchasesApiGetPurchaseDraftsRequest, options?: Configuration): Promise<Array<DraftResult>> {
        return this.api.getPurchaseDrafts(param.companySlug, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Returns given payment for specified purchase
     * @param param the request object
     */
    public getPurchasePaymentWithHttpInfo(param: PurchasesApiGetPurchasePaymentRequest, options?: Configuration): Promise<HttpInfo<Payment>> {
        return this.api.getPurchasePaymentWithHttpInfo(param.companySlug, param.purchaseId, param.paymentId,  options).toPromise();
    }

    /**
     * Returns given payment for specified purchase
     * @param param the request object
     */
    public getPurchasePayment(param: PurchasesApiGetPurchasePaymentRequest, options?: Configuration): Promise<Payment> {
        return this.api.getPurchasePayment(param.companySlug, param.purchaseId, param.paymentId,  options).toPromise();
    }

    /**
     * Returns all purchases for given company
     * @param param the request object
     */
    public getPurchasePaymentsWithHttpInfo(param: PurchasesApiGetPurchasePaymentsRequest, options?: Configuration): Promise<HttpInfo<Array<Payment>>> {
        return this.api.getPurchasePaymentsWithHttpInfo(param.companySlug, param.purchaseId,  options).toPromise();
    }

    /**
     * Returns all purchases for given company
     * @param param the request object
     */
    public getPurchasePayments(param: PurchasesApiGetPurchasePaymentsRequest, options?: Configuration): Promise<Array<Payment>> {
        return this.api.getPurchasePayments(param.companySlug, param.purchaseId,  options).toPromise();
    }

    /**
     * Returns all purchases for given company
     * @param param the request object
     */
    public getPurchasesWithHttpInfo(param: PurchasesApiGetPurchasesRequest, options?: Configuration): Promise<HttpInfo<Array<PurchaseResult>>> {
        return this.api.getPurchasesWithHttpInfo(param.companySlug, param.page, param.pageSize, param.date, param.dateLe, param.dateLt, param.dateGe, param.dateGt, param.sortBy, param.paid,  options).toPromise();
    }

    /**
     * Returns all purchases for given company
     * @param param the request object
     */
    public getPurchases(param: PurchasesApiGetPurchasesRequest, options?: Configuration): Promise<Array<PurchaseResult>> {
        return this.api.getPurchases(param.companySlug, param.page, param.pageSize, param.date, param.dateLe, param.dateLt, param.dateGe, param.dateGt, param.sortBy, param.paid,  options).toPromise();
    }

    /**
     * Updates draft with provided id. 
     * @param param the request object
     */
    public updatePurchaseDraftWithHttpInfo(param: PurchasesApiUpdatePurchaseDraftRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updatePurchaseDraftWithHttpInfo(param.companySlug, param.draftId, param.draftRequest,  options).toPromise();
    }

    /**
     * Updates draft with provided id. 
     * @param param the request object
     */
    public updatePurchaseDraft(param: PurchasesApiUpdatePurchaseDraftRequest, options?: Configuration): Promise<void> {
        return this.api.updatePurchaseDraft(param.companySlug, param.draftId, param.draftRequest,  options).toPromise();
    }

}

import { ObservableSalesApi } from "./ObservableAPI";
import { SalesApiRequestFactory, SalesApiResponseProcessor} from "../apis/SalesApi";

export interface SalesApiAddAttachmentToSaleRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof SalesApiaddAttachmentToSale
     */
    companySlug: string
    /**
     * 
     * @type number
     * @memberof SalesApiaddAttachmentToSale
     */
    saleId: number
    /**
     * The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @type string
     * @memberof SalesApiaddAttachmentToSale
     */
    filename?: string
    /**
     * True if this attachment may document the payment (i.e. transaction receipt from credit card/payment company, export from bank, etc.). Default value is false if not specified. At least one of attachToPayment and attachToSale must be true.
     * @type boolean
     * @memberof SalesApiaddAttachmentToSale
     */
    attachToPayment?: boolean
    /**
     * True if this attachment may document the sale (i.e. invoice, etc). Default value is false if not specified. At least one of attachToPayment and attachToSale must be true.
     * @type boolean
     * @memberof SalesApiaddAttachmentToSale
     */
    attachToSale?: boolean
    /**
     * 
     * @type HttpFile
     * @memberof SalesApiaddAttachmentToSale
     */
    file?: HttpFile
}

export interface SalesApiAddAttachmentToSaleDraftRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof SalesApiaddAttachmentToSaleDraft
     */
    companySlug: string
    /**
     * The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @type number
     * @memberof SalesApiaddAttachmentToSaleDraft
     */
    draftId: number
    /**
     * Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @type string
     * @memberof SalesApiaddAttachmentToSaleDraft
     */
    filename?: string
    /**
     * 
     * @type HttpFile
     * @memberof SalesApiaddAttachmentToSaleDraft
     */
    file?: HttpFile
}

export interface SalesApiCreateSaleRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof SalesApicreateSale
     */
    companySlug: string
    /**
     * 
     * @type SaleRequest
     * @memberof SalesApicreateSale
     */
    saleRequest: SaleRequest
}

export interface SalesApiCreateSaleDraftRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof SalesApicreateSaleDraft
     */
    companySlug: string
    /**
     * 
     * @type DraftRequest
     * @memberof SalesApicreateSaleDraft
     */
    draftRequest: DraftRequest
}

export interface SalesApiCreateSaleFromDraftRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof SalesApicreateSaleFromDraft
     */
    companySlug: string
    /**
     * The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @type number
     * @memberof SalesApicreateSaleFromDraft
     */
    draftId: number
}

export interface SalesApiCreateSalePaymentRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof SalesApicreateSalePayment
     */
    companySlug: string
    /**
     * 
     * @type number
     * @memberof SalesApicreateSalePayment
     */
    saleId: number
    /**
     * 
     * @type Payment
     * @memberof SalesApicreateSalePayment
     */
    payment: Payment
}

export interface SalesApiDeleteSaleRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof SalesApideleteSale
     */
    companySlug: string
    /**
     * 
     * @type number
     * @memberof SalesApideleteSale
     */
    saleId: number
    /**
     * Required description for deleting the sale
     * @type string
     * @memberof SalesApideleteSale
     */
    description: string
}

export interface SalesApiDeleteSaleDraftRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof SalesApideleteSaleDraft
     */
    companySlug: string
    /**
     * The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @type number
     * @memberof SalesApideleteSaleDraft
     */
    draftId: number
}

export interface SalesApiGetSaleRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof SalesApigetSale
     */
    companySlug: string
    /**
     * 
     * @type number
     * @memberof SalesApigetSale
     */
    saleId: number
}

export interface SalesApiGetSaleAttachmentsRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof SalesApigetSaleAttachments
     */
    companySlug: string
    /**
     * 
     * @type number
     * @memberof SalesApigetSaleAttachments
     */
    saleId: number
}

export interface SalesApiGetSaleDraftRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof SalesApigetSaleDraft
     */
    companySlug: string
    /**
     * The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @type number
     * @memberof SalesApigetSaleDraft
     */
    draftId: number
}

export interface SalesApiGetSaleDraftAttachmentsRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof SalesApigetSaleDraftAttachments
     */
    companySlug: string
    /**
     * The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @type number
     * @memberof SalesApigetSaleDraftAttachments
     */
    draftId: number
}

export interface SalesApiGetSaleDraftsRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof SalesApigetSaleDrafts
     */
    companySlug: string
    /**
     * Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @type number
     * @memberof SalesApigetSaleDrafts
     */
    page?: number
    /**
     * Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @type number
     * @memberof SalesApigetSaleDrafts
     */
    pageSize?: number
}

export interface SalesApiGetSalePaymentRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof SalesApigetSalePayment
     */
    companySlug: string
    /**
     * 
     * @type number
     * @memberof SalesApigetSalePayment
     */
    saleId: number
    /**
     * 
     * @type number
     * @memberof SalesApigetSalePayment
     */
    paymentId: number
}

export interface SalesApiGetSalePaymentsRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof SalesApigetSalePayments
     */
    companySlug: string
    /**
     * 
     * @type number
     * @memberof SalesApigetSalePayments
     */
    saleId: number
}

export interface SalesApiGetSalesRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof SalesApigetSales
     */
    companySlug: string
    /**
     * Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @type number
     * @memberof SalesApigetSales
     */
    page?: number
    /**
     * Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @type number
     * @memberof SalesApigetSales
     */
    pageSize?: number
    /**
     * Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof SalesApigetSales
     */
    date?: string
    /**
     * Filter based on date less than or equal to parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof SalesApigetSales
     */
    dateLe?: string
    /**
     * Filter based on date strictly less than parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof SalesApigetSales
     */
    dateLt?: string
    /**
     * Filter based on date greater than or equal to parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof SalesApigetSales
     */
    dateGe?: string
    /**
     * Filter based on date strictly greater than parameter value Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof SalesApigetSales
     */
    dateGt?: string
    /**
     * Filter based on date of last modification. Returns results that were last modified on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof SalesApigetSales
     */
    lastModified?: string
    /**
     * Returns results that have been last modified before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof SalesApigetSales
     */
    lastModifiedLe?: string
    /**
     * Returns results that have been last modified strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof SalesApigetSales
     */
    lastModifiedLt?: string
    /**
     * Returns results that have been last modified after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof SalesApigetSales
     */
    lastModifiedGe?: string
    /**
     * Returns results that have been last modified strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof SalesApigetSales
     */
    lastModifiedGt?: string
    /**
     * Find all results with the sale number equal to the specified parameter.
     * @type string
     * @memberof SalesApigetSales
     */
    saleNumber?: string
    /**
     * When set to true, returns only sales that have been settled. Otherwise false returns all sales that have not been fully settled. 
     * @type boolean
     * @memberof SalesApigetSales
     */
    settled?: boolean
}

export interface SalesApiSettledSaleRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof SalesApisettledSale
     */
    companySlug: string
    /**
     * 
     * @type number
     * @memberof SalesApisettledSale
     */
    saleId: number
    /**
     * Date that the sale is settled
     * @type string
     * @memberof SalesApisettledSale
     */
    settledDate: string
}

export interface SalesApiUpdateSaleDraftRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof SalesApiupdateSaleDraft
     */
    companySlug: string
    /**
     * The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @type number
     * @memberof SalesApiupdateSaleDraft
     */
    draftId: number
    /**
     * 
     * @type DraftRequest
     * @memberof SalesApiupdateSaleDraft
     */
    draftRequest: DraftRequest
}

export class ObjectSalesApi {
    private api: ObservableSalesApi

    public constructor(configuration: Configuration, requestFactory?: SalesApiRequestFactory, responseProcessor?: SalesApiResponseProcessor) {
        this.api = new ObservableSalesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates and adds a new attachment to a Sale
     * @param param the request object
     */
    public addAttachmentToSaleWithHttpInfo(param: SalesApiAddAttachmentToSaleRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.addAttachmentToSaleWithHttpInfo(param.companySlug, param.saleId, param.filename, param.attachToPayment, param.attachToSale, param.file,  options).toPromise();
    }

    /**
     * Creates and adds a new attachment to a Sale
     * @param param the request object
     */
    public addAttachmentToSale(param: SalesApiAddAttachmentToSaleRequest, options?: Configuration): Promise<void> {
        return this.api.addAttachmentToSale(param.companySlug, param.saleId, param.filename, param.attachToPayment, param.attachToSale, param.file,  options).toPromise();
    }

    /**
     * Creates and adds a new attachment to a draft
     * @param param the request object
     */
    public addAttachmentToSaleDraftWithHttpInfo(param: SalesApiAddAttachmentToSaleDraftRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.addAttachmentToSaleDraftWithHttpInfo(param.companySlug, param.draftId, param.filename, param.file,  options).toPromise();
    }

    /**
     * Creates and adds a new attachment to a draft
     * @param param the request object
     */
    public addAttachmentToSaleDraft(param: SalesApiAddAttachmentToSaleDraftRequest, options?: Configuration): Promise<void> {
        return this.api.addAttachmentToSaleDraft(param.companySlug, param.draftId, param.filename, param.file,  options).toPromise();
    }

    /**
     * Creates a new sale. This corresponds to \"Annet salg\" in Fiken and should be used when the invoice document and invoice number have been created outside Fiken. Otherwise the invoices-endpoints should be used.
     * @param param the request object
     */
    public createSaleWithHttpInfo(param: SalesApiCreateSaleRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createSaleWithHttpInfo(param.companySlug, param.saleRequest,  options).toPromise();
    }

    /**
     * Creates a new sale. This corresponds to \"Annet salg\" in Fiken and should be used when the invoice document and invoice number have been created outside Fiken. Otherwise the invoices-endpoints should be used.
     * @param param the request object
     */
    public createSale(param: SalesApiCreateSaleRequest, options?: Configuration): Promise<void> {
        return this.api.createSale(param.companySlug, param.saleRequest,  options).toPromise();
    }

    /**
     * Creates a sale draft.
     * @param param the request object
     */
    public createSaleDraftWithHttpInfo(param: SalesApiCreateSaleDraftRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createSaleDraftWithHttpInfo(param.companySlug, param.draftRequest,  options).toPromise();
    }

    /**
     * Creates a sale draft.
     * @param param the request object
     */
    public createSaleDraft(param: SalesApiCreateSaleDraftRequest, options?: Configuration): Promise<void> {
        return this.api.createSaleDraft(param.companySlug, param.draftRequest,  options).toPromise();
    }

    /**
     * Creates a sale from an already created draft.
     * @param param the request object
     */
    public createSaleFromDraftWithHttpInfo(param: SalesApiCreateSaleFromDraftRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createSaleFromDraftWithHttpInfo(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Creates a sale from an already created draft.
     * @param param the request object
     */
    public createSaleFromDraft(param: SalesApiCreateSaleFromDraftRequest, options?: Configuration): Promise<void> {
        return this.api.createSaleFromDraft(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Creates a new payment for a given sale.
     * @param param the request object
     */
    public createSalePaymentWithHttpInfo(param: SalesApiCreateSalePaymentRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.createSalePaymentWithHttpInfo(param.companySlug, param.saleId, param.payment,  options).toPromise();
    }

    /**
     * Creates a new payment for a given sale.
     * @param param the request object
     */
    public createSalePayment(param: SalesApiCreateSalePaymentRequest, options?: Configuration): Promise<void> {
        return this.api.createSalePayment(param.companySlug, param.saleId, param.payment,  options).toPromise();
    }

    /**
     * Sets the deleted flag for a sale. The sale is not deleted, but a reverse transaction is created and the \"deleted\" property is set to true.
     * @param param the request object
     */
    public deleteSaleWithHttpInfo(param: SalesApiDeleteSaleRequest, options?: Configuration): Promise<HttpInfo<SaleResult>> {
        return this.api.deleteSaleWithHttpInfo(param.companySlug, param.saleId, param.description,  options).toPromise();
    }

    /**
     * Sets the deleted flag for a sale. The sale is not deleted, but a reverse transaction is created and the \"deleted\" property is set to true.
     * @param param the request object
     */
    public deleteSale(param: SalesApiDeleteSaleRequest, options?: Configuration): Promise<SaleResult> {
        return this.api.deleteSale(param.companySlug, param.saleId, param.description,  options).toPromise();
    }

    /**
     * Delete draft with specified id.
     * @param param the request object
     */
    public deleteSaleDraftWithHttpInfo(param: SalesApiDeleteSaleDraftRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.deleteSaleDraftWithHttpInfo(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Delete draft with specified id.
     * @param param the request object
     */
    public deleteSaleDraft(param: SalesApiDeleteSaleDraftRequest, options?: Configuration): Promise<void> {
        return this.api.deleteSaleDraft(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Returns sale with specified id.
     * @param param the request object
     */
    public getSaleWithHttpInfo(param: SalesApiGetSaleRequest, options?: Configuration): Promise<HttpInfo<SaleResult>> {
        return this.api.getSaleWithHttpInfo(param.companySlug, param.saleId,  options).toPromise();
    }

    /**
     * Returns sale with specified id.
     * @param param the request object
     */
    public getSale(param: SalesApiGetSaleRequest, options?: Configuration): Promise<SaleResult> {
        return this.api.getSale(param.companySlug, param.saleId,  options).toPromise();
    }

    /**
     * Returns all attachments for specified sale.
     * @param param the request object
     */
    public getSaleAttachmentsWithHttpInfo(param: SalesApiGetSaleAttachmentsRequest, options?: Configuration): Promise<HttpInfo<Array<Attachment>>> {
        return this.api.getSaleAttachmentsWithHttpInfo(param.companySlug, param.saleId,  options).toPromise();
    }

    /**
     * Returns all attachments for specified sale.
     * @param param the request object
     */
    public getSaleAttachments(param: SalesApiGetSaleAttachmentsRequest, options?: Configuration): Promise<Array<Attachment>> {
        return this.api.getSaleAttachments(param.companySlug, param.saleId,  options).toPromise();
    }

    /**
     * Returns draft with specified id.
     * @param param the request object
     */
    public getSaleDraftWithHttpInfo(param: SalesApiGetSaleDraftRequest, options?: Configuration): Promise<HttpInfo<DraftResult>> {
        return this.api.getSaleDraftWithHttpInfo(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Returns draft with specified id.
     * @param param the request object
     */
    public getSaleDraft(param: SalesApiGetSaleDraftRequest, options?: Configuration): Promise<DraftResult> {
        return this.api.getSaleDraft(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Returns all attachments for specified draft.
     * @param param the request object
     */
    public getSaleDraftAttachmentsWithHttpInfo(param: SalesApiGetSaleDraftAttachmentsRequest, options?: Configuration): Promise<HttpInfo<Array<Attachment>>> {
        return this.api.getSaleDraftAttachmentsWithHttpInfo(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Returns all attachments for specified draft.
     * @param param the request object
     */
    public getSaleDraftAttachments(param: SalesApiGetSaleDraftAttachmentsRequest, options?: Configuration): Promise<Array<Attachment>> {
        return this.api.getSaleDraftAttachments(param.companySlug, param.draftId,  options).toPromise();
    }

    /**
     * Returns all sale drafts for given company.
     * @param param the request object
     */
    public getSaleDraftsWithHttpInfo(param: SalesApiGetSaleDraftsRequest, options?: Configuration): Promise<HttpInfo<Array<DraftResult>>> {
        return this.api.getSaleDraftsWithHttpInfo(param.companySlug, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Returns all sale drafts for given company.
     * @param param the request object
     */
    public getSaleDrafts(param: SalesApiGetSaleDraftsRequest, options?: Configuration): Promise<Array<DraftResult>> {
        return this.api.getSaleDrafts(param.companySlug, param.page, param.pageSize,  options).toPromise();
    }

    /**
     * Returns payment with specified id.
     * @param param the request object
     */
    public getSalePaymentWithHttpInfo(param: SalesApiGetSalePaymentRequest, options?: Configuration): Promise<HttpInfo<Payment>> {
        return this.api.getSalePaymentWithHttpInfo(param.companySlug, param.saleId, param.paymentId,  options).toPromise();
    }

    /**
     * Returns payment with specified id.
     * @param param the request object
     */
    public getSalePayment(param: SalesApiGetSalePaymentRequest, options?: Configuration): Promise<Payment> {
        return this.api.getSalePayment(param.companySlug, param.saleId, param.paymentId,  options).toPromise();
    }

    /**
     * Returns all payments for given sale
     * @param param the request object
     */
    public getSalePaymentsWithHttpInfo(param: SalesApiGetSalePaymentsRequest, options?: Configuration): Promise<HttpInfo<Array<Payment>>> {
        return this.api.getSalePaymentsWithHttpInfo(param.companySlug, param.saleId,  options).toPromise();
    }

    /**
     * Returns all payments for given sale
     * @param param the request object
     */
    public getSalePayments(param: SalesApiGetSalePaymentsRequest, options?: Configuration): Promise<Array<Payment>> {
        return this.api.getSalePayments(param.companySlug, param.saleId,  options).toPromise();
    }

    /**
     * Returns all sales for given company
     * @param param the request object
     */
    public getSalesWithHttpInfo(param: SalesApiGetSalesRequest, options?: Configuration): Promise<HttpInfo<Array<SaleResult>>> {
        return this.api.getSalesWithHttpInfo(param.companySlug, param.page, param.pageSize, param.date, param.dateLe, param.dateLt, param.dateGe, param.dateGt, param.lastModified, param.lastModifiedLe, param.lastModifiedLt, param.lastModifiedGe, param.lastModifiedGt, param.saleNumber, param.settled,  options).toPromise();
    }

    /**
     * Returns all sales for given company
     * @param param the request object
     */
    public getSales(param: SalesApiGetSalesRequest, options?: Configuration): Promise<Array<SaleResult>> {
        return this.api.getSales(param.companySlug, param.page, param.pageSize, param.date, param.dateLe, param.dateLt, param.dateGe, param.dateGt, param.lastModified, param.lastModifiedLe, param.lastModifiedLt, param.lastModifiedGe, param.lastModifiedGt, param.saleNumber, param.settled,  options).toPromise();
    }

    /**
     * Marks the sale as settled without payment. This is synonymous with \"sett til oppgjort uten betaling\" in the GUI. It is possible to change the date of settlement by sending a new settledDate.
     * @param param the request object
     */
    public settledSaleWithHttpInfo(param: SalesApiSettledSaleRequest, options?: Configuration): Promise<HttpInfo<SaleResult>> {
        return this.api.settledSaleWithHttpInfo(param.companySlug, param.saleId, param.settledDate,  options).toPromise();
    }

    /**
     * Marks the sale as settled without payment. This is synonymous with \"sett til oppgjort uten betaling\" in the GUI. It is possible to change the date of settlement by sending a new settledDate.
     * @param param the request object
     */
    public settledSale(param: SalesApiSettledSaleRequest, options?: Configuration): Promise<SaleResult> {
        return this.api.settledSale(param.companySlug, param.saleId, param.settledDate,  options).toPromise();
    }

    /**
     * Updates draft with provided id. 
     * @param param the request object
     */
    public updateSaleDraftWithHttpInfo(param: SalesApiUpdateSaleDraftRequest, options?: Configuration): Promise<HttpInfo<void>> {
        return this.api.updateSaleDraftWithHttpInfo(param.companySlug, param.draftId, param.draftRequest,  options).toPromise();
    }

    /**
     * Updates draft with provided id. 
     * @param param the request object
     */
    public updateSaleDraft(param: SalesApiUpdateSaleDraftRequest, options?: Configuration): Promise<void> {
        return this.api.updateSaleDraft(param.companySlug, param.draftId, param.draftRequest,  options).toPromise();
    }

}

import { ObservableTransactionsApi } from "./ObservableAPI";
import { TransactionsApiRequestFactory, TransactionsApiResponseProcessor} from "../apis/TransactionsApi";

export interface TransactionsApiGetTransactionRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof TransactionsApigetTransaction
     */
    companySlug: string
    /**
     * 
     * @type number
     * @memberof TransactionsApigetTransaction
     */
    transactionId: number
}

export interface TransactionsApiGetTransactionsRequest {
    /**
     * Slug of company to retrieve
     * @type string
     * @memberof TransactionsApigetTransactions
     */
    companySlug: string
    /**
     * Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @type number
     * @memberof TransactionsApigetTransactions
     */
    page?: number
    /**
     * Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @type number
     * @memberof TransactionsApigetTransactions
     */
    pageSize?: number
    /**
     * Filter based on date of last modification. Returns results that were last modified on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof TransactionsApigetTransactions
     */
    lastModified?: string
    /**
     * Returns results that have been last modified before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof TransactionsApigetTransactions
     */
    lastModifiedLe?: string
    /**
     * Returns results that have been last modified strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof TransactionsApigetTransactions
     */
    lastModifiedLt?: string
    /**
     * Returns results that have been last modified after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof TransactionsApigetTransactions
     */
    lastModifiedGe?: string
    /**
     * Returns results that have been last modified strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof TransactionsApigetTransactions
     */
    lastModifiedGt?: string
    /**
     * Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof TransactionsApigetTransactions
     */
    createdDate?: string
    /**
     * Returns results that were created before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof TransactionsApigetTransactions
     */
    createdDateLe?: string
    /**
     * Returns results that were created strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof TransactionsApigetTransactions
     */
    createdDateLt?: string
    /**
     * Returns results that were created after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof TransactionsApigetTransactions
     */
    createdDateGe?: string
    /**
     * Returns results that were created strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @type string
     * @memberof TransactionsApigetTransactions
     */
    createdDateGt?: string
}

export class ObjectTransactionsApi {
    private api: ObservableTransactionsApi

    public constructor(configuration: Configuration, requestFactory?: TransactionsApiRequestFactory, responseProcessor?: TransactionsApiResponseProcessor) {
        this.api = new ObservableTransactionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns given transaction with associated id. Transaction id is returned in GET calls for sales, purchases, and journal entries. 
     * @param param the request object
     */
    public getTransactionWithHttpInfo(param: TransactionsApiGetTransactionRequest, options?: Configuration): Promise<HttpInfo<Transaction>> {
        return this.api.getTransactionWithHttpInfo(param.companySlug, param.transactionId,  options).toPromise();
    }

    /**
     * Returns given transaction with associated id. Transaction id is returned in GET calls for sales, purchases, and journal entries. 
     * @param param the request object
     */
    public getTransaction(param: TransactionsApiGetTransactionRequest, options?: Configuration): Promise<Transaction> {
        return this.api.getTransaction(param.companySlug, param.transactionId,  options).toPromise();
    }

    /**
     * Returns all transactions for the specified company
     * @param param the request object
     */
    public getTransactionsWithHttpInfo(param: TransactionsApiGetTransactionsRequest, options?: Configuration): Promise<HttpInfo<Array<Transaction>>> {
        return this.api.getTransactionsWithHttpInfo(param.companySlug, param.page, param.pageSize, param.lastModified, param.lastModifiedLe, param.lastModifiedLt, param.lastModifiedGe, param.lastModifiedGt, param.createdDate, param.createdDateLe, param.createdDateLt, param.createdDateGe, param.createdDateGt,  options).toPromise();
    }

    /**
     * Returns all transactions for the specified company
     * @param param the request object
     */
    public getTransactions(param: TransactionsApiGetTransactionsRequest, options?: Configuration): Promise<Array<Transaction>> {
        return this.api.getTransactions(param.companySlug, param.page, param.pageSize, param.lastModified, param.lastModifiedLe, param.lastModifiedLt, param.lastModifiedGe, param.lastModifiedGt, param.createdDate, param.createdDateLe, param.createdDateLt, param.createdDateGe, param.createdDateGt,  options).toPromise();
    }

}

import { ObservableUserApi } from "./ObservableAPI";
import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";

export interface UserApiGetUserRequest {
}

export class ObjectUserApi {
    private api: ObservableUserApi

    public constructor(configuration: Configuration, requestFactory?: UserApiRequestFactory, responseProcessor?: UserApiResponseProcessor) {
        this.api = new ObservableUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns information about the user
     * @param param the request object
     */
    public getUserWithHttpInfo(param: UserApiGetUserRequest = {}, options?: Configuration): Promise<HttpInfo<Userinfo>> {
        return this.api.getUserWithHttpInfo( options).toPromise();
    }

    /**
     * Returns information about the user
     * @param param the request object
     */
    public getUser(param: UserApiGetUserRequest = {}, options?: Configuration): Promise<Userinfo> {
        return this.api.getUser( options).toPromise();
    }

}
