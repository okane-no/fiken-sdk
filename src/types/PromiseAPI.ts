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
import { ObservableAccountBalancesApi } from './ObservableAPI';

import { AccountBalancesApiRequestFactory, AccountBalancesApiResponseProcessor} from "../apis/AccountBalancesApi";
export class PromiseAccountBalancesApi {
    private api: ObservableAccountBalancesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountBalancesApiRequestFactory,
        responseProcessor?: AccountBalancesApiResponseProcessor
    ) {
        this.api = new ObservableAccountBalancesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves the specified bookkeping account and balance for a given date.
     * @param companySlug Slug of company to retrieve
     * @param accountCode Code number of the bookkeeping account to retrieve
     * @param date Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     */
    public getAccountBalanceWithHttpInfo(companySlug: string, accountCode: string, date: string, _options?: Configuration): Promise<HttpInfo<AccountBalance>> {
        const result = this.api.getAccountBalanceWithHttpInfo(companySlug, accountCode, date, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the specified bookkeping account and balance for a given date.
     * @param companySlug Slug of company to retrieve
     * @param accountCode Code number of the bookkeeping account to retrieve
     * @param date Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     */
    public getAccountBalance(companySlug: string, accountCode: string, date: string, _options?: Configuration): Promise<AccountBalance> {
        const result = this.api.getAccountBalance(companySlug, accountCode, date, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the bookkeeping accounts and closing balances for a given date. An account is a string with either four digits, or four digits, a colon and five digits (\"reskontro\"). Examples: 3020 and 1500:10001 
     * @param companySlug Slug of company to retrieve
     * @param date Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param fromAccount Filter parameter specifying which account numbers to return. Specify using the from and to parameters (excluding subaccount).
     * @param toAccount Filter parameter specifying which account numbers to return. Specify using the from and to parameters (excluding subaccount).
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     */
    public getAccountBalancesWithHttpInfo(companySlug: string, date: string, fromAccount?: number, toAccount?: number, page?: number, pageSize?: number, _options?: Configuration): Promise<HttpInfo<Array<AccountBalance>>> {
        const result = this.api.getAccountBalancesWithHttpInfo(companySlug, date, fromAccount, toAccount, page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the bookkeeping accounts and closing balances for a given date. An account is a string with either four digits, or four digits, a colon and five digits (\"reskontro\"). Examples: 3020 and 1500:10001 
     * @param companySlug Slug of company to retrieve
     * @param date Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param fromAccount Filter parameter specifying which account numbers to return. Specify using the from and to parameters (excluding subaccount).
     * @param toAccount Filter parameter specifying which account numbers to return. Specify using the from and to parameters (excluding subaccount).
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     */
    public getAccountBalances(companySlug: string, date: string, fromAccount?: number, toAccount?: number, page?: number, pageSize?: number, _options?: Configuration): Promise<Array<AccountBalance>> {
        const result = this.api.getAccountBalances(companySlug, date, fromAccount, toAccount, page, pageSize, _options);
        return result.toPromise();
    }


}



import { ObservableAccountsApi } from './ObservableAPI';

import { AccountsApiRequestFactory, AccountsApiResponseProcessor} from "../apis/AccountsApi";
export class PromiseAccountsApi {
    private api: ObservableAccountsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountsApiRequestFactory,
        responseProcessor?: AccountsApiResponseProcessor
    ) {
        this.api = new ObservableAccountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Retrieves the specified bookkeping account. An account is a string with either four digits, or four digits, a colon and five digits (\"reskontro\").       Examples:       3020 and 1500:10001 
     * @param companySlug Slug of company to retrieve
     * @param accountCode Code number of the bookkeeping account to retrieve for the current year.
     */
    public getAccountWithHttpInfo(companySlug: string, accountCode: string, _options?: Configuration): Promise<HttpInfo<Account>> {
        const result = this.api.getAccountWithHttpInfo(companySlug, accountCode, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the specified bookkeping account. An account is a string with either four digits, or four digits, a colon and five digits (\"reskontro\").       Examples:       3020 and 1500:10001 
     * @param companySlug Slug of company to retrieve
     * @param accountCode Code number of the bookkeeping account to retrieve for the current year.
     */
    public getAccount(companySlug: string, accountCode: string, _options?: Configuration): Promise<Account> {
        const result = this.api.getAccount(companySlug, accountCode, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the bookkeeping accounts for the current year 
     * @param companySlug Slug of company to retrieve
     * @param fromAccount Filter parameter specifying which account numbers to return. Specify using the from and to parameters (excluding subaccount).
     * @param toAccount Filter parameter specifying which account numbers to return. Specify using the from and to parameters (excluding subaccount).
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     */
    public getAccountsWithHttpInfo(companySlug: string, fromAccount?: number, toAccount?: number, page?: number, pageSize?: number, _options?: Configuration): Promise<HttpInfo<Array<Account>>> {
        const result = this.api.getAccountsWithHttpInfo(companySlug, fromAccount, toAccount, page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the bookkeeping accounts for the current year 
     * @param companySlug Slug of company to retrieve
     * @param fromAccount Filter parameter specifying which account numbers to return. Specify using the from and to parameters (excluding subaccount).
     * @param toAccount Filter parameter specifying which account numbers to return. Specify using the from and to parameters (excluding subaccount).
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     */
    public getAccounts(companySlug: string, fromAccount?: number, toAccount?: number, page?: number, pageSize?: number, _options?: Configuration): Promise<Array<Account>> {
        const result = this.api.getAccounts(companySlug, fromAccount, toAccount, page, pageSize, _options);
        return result.toPromise();
    }


}



import { ObservableBankAccountsApi } from './ObservableAPI';

import { BankAccountsApiRequestFactory, BankAccountsApiResponseProcessor} from "../apis/BankAccountsApi";
export class PromiseBankAccountsApi {
    private api: ObservableBankAccountsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: BankAccountsApiRequestFactory,
        responseProcessor?: BankAccountsApiResponseProcessor
    ) {
        this.api = new ObservableBankAccountsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new bank account. The Location response header returns the URL of the newly created bank account. Possible types of bank accounts are NORMAL, TAX_DEDUCTION, FOREIGN, and CREDIT_CARD. The field \"foreignService\" should only be filled out for accounts of type FOREIGN. 
     * @param companySlug Slug of company to retrieve
     * @param bankAccountRequest 
     */
    public createBankAccountWithHttpInfo(companySlug: string, bankAccountRequest: BankAccountRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createBankAccountWithHttpInfo(companySlug, bankAccountRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a new bank account. The Location response header returns the URL of the newly created bank account. Possible types of bank accounts are NORMAL, TAX_DEDUCTION, FOREIGN, and CREDIT_CARD. The field \"foreignService\" should only be filled out for accounts of type FOREIGN. 
     * @param companySlug Slug of company to retrieve
     * @param bankAccountRequest 
     */
    public createBankAccount(companySlug: string, bankAccountRequest: BankAccountRequest, _options?: Configuration): Promise<void> {
        const result = this.api.createBankAccount(companySlug, bankAccountRequest, _options);
        return result.toPromise();
    }

    /**
     * Retrieves specified bank account.
     * @param companySlug Slug of company to retrieve
     * @param bankAccountId 
     */
    public getBankAccountWithHttpInfo(companySlug: string, bankAccountId: number, _options?: Configuration): Promise<HttpInfo<BankAccountResult>> {
        const result = this.api.getBankAccountWithHttpInfo(companySlug, bankAccountId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves specified bank account.
     * @param companySlug Slug of company to retrieve
     * @param bankAccountId 
     */
    public getBankAccount(companySlug: string, bankAccountId: number, _options?: Configuration): Promise<BankAccountResult> {
        const result = this.api.getBankAccount(companySlug, bankAccountId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves all bank accounts associated with the company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @param inactive Return all active bank accounts (false) or all inactive bank accounts (true).
     */
    public getBankAccountsWithHttpInfo(companySlug: string, page?: number, pageSize?: number, inactive?: boolean, _options?: Configuration): Promise<HttpInfo<Array<BankAccountResult>>> {
        const result = this.api.getBankAccountsWithHttpInfo(companySlug, page, pageSize, inactive, _options);
        return result.toPromise();
    }

    /**
     * Retrieves all bank accounts associated with the company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @param inactive Return all active bank accounts (false) or all inactive bank accounts (true).
     */
    public getBankAccounts(companySlug: string, page?: number, pageSize?: number, inactive?: boolean, _options?: Configuration): Promise<Array<BankAccountResult>> {
        const result = this.api.getBankAccounts(companySlug, page, pageSize, inactive, _options);
        return result.toPromise();
    }


}



import { ObservableCompaniesApi } from './ObservableAPI';

import { CompaniesApiRequestFactory, CompaniesApiResponseProcessor} from "../apis/CompaniesApi";
export class PromiseCompaniesApi {
    private api: ObservableCompaniesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CompaniesApiRequestFactory,
        responseProcessor?: CompaniesApiResponseProcessor
    ) {
        this.api = new ObservableCompaniesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns all companies from the system that the user has access to
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @param sortBy 
     */
    public getCompaniesWithHttpInfo(page?: number, pageSize?: number, sortBy?: 'createdDate asc' | 'createdDate desc' | 'name asc' | 'name desc' | 'organizationNumber asc' | 'organizationNumber desc', _options?: Configuration): Promise<HttpInfo<Array<Company>>> {
        const result = this.api.getCompaniesWithHttpInfo(page, pageSize, sortBy, _options);
        return result.toPromise();
    }

    /**
     * Returns all companies from the system that the user has access to
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @param sortBy 
     */
    public getCompanies(page?: number, pageSize?: number, sortBy?: 'createdDate asc' | 'createdDate desc' | 'name asc' | 'name desc' | 'organizationNumber asc' | 'organizationNumber desc', _options?: Configuration): Promise<Array<Company>> {
        const result = this.api.getCompanies(page, pageSize, sortBy, _options);
        return result.toPromise();
    }

    /**
     * Returns company associated with slug.
     * @param companySlug Slug of company to retrieve
     */
    public getCompanyWithHttpInfo(companySlug: string, _options?: Configuration): Promise<HttpInfo<Company>> {
        const result = this.api.getCompanyWithHttpInfo(companySlug, _options);
        return result.toPromise();
    }

    /**
     * Returns company associated with slug.
     * @param companySlug Slug of company to retrieve
     */
    public getCompany(companySlug: string, _options?: Configuration): Promise<Company> {
        const result = this.api.getCompany(companySlug, _options);
        return result.toPromise();
    }


}



import { ObservableContactsApi } from './ObservableAPI';

import { ContactsApiRequestFactory, ContactsApiResponseProcessor} from "../apis/ContactsApi";
export class PromiseContactsApi {
    private api: ObservableContactsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ContactsApiRequestFactory,
        responseProcessor?: ContactsApiResponseProcessor
    ) {
        this.api = new ObservableContactsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates and adds a new attachment/document to a contact
     * @param companySlug Slug of company to retrieve
     * @param contactId 
     * @param filename Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param comment Not required.
     * @param file 
     */
    public addAttachmentToContactWithHttpInfo(companySlug: string, contactId: number, filename?: string, comment?: string, file?: HttpFile, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.addAttachmentToContactWithHttpInfo(companySlug, contactId, filename, comment, file, _options);
        return result.toPromise();
    }

    /**
     * Creates and adds a new attachment/document to a contact
     * @param companySlug Slug of company to retrieve
     * @param contactId 
     * @param filename Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param comment Not required.
     * @param file 
     */
    public addAttachmentToContact(companySlug: string, contactId: number, filename?: string, comment?: string, file?: HttpFile, _options?: Configuration): Promise<void> {
        const result = this.api.addAttachmentToContact(companySlug, contactId, filename, comment, file, _options);
        return result.toPromise();
    }

    /**
     * Adds a new contact person to a contact
     * @param companySlug Slug of company to retrieve
     * @param contactId 
     * @param contactPerson 
     */
    public addContactPersonToContactWithHttpInfo(companySlug: string, contactId: number, contactPerson: ContactPerson, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.addContactPersonToContactWithHttpInfo(companySlug, contactId, contactPerson, _options);
        return result.toPromise();
    }

    /**
     * Adds a new contact person to a contact
     * @param companySlug Slug of company to retrieve
     * @param contactId 
     * @param contactPerson 
     */
    public addContactPersonToContact(companySlug: string, contactId: number, contactPerson: ContactPerson, _options?: Configuration): Promise<void> {
        const result = this.api.addContactPersonToContact(companySlug, contactId, contactPerson, _options);
        return result.toPromise();
    }

    /**
     * Creates a new contact. The Location response header returns the URL of the newly created contact.
     * @param companySlug Slug of company to retrieve
     * @param contact 
     */
    public createContactWithHttpInfo(companySlug: string, contact: Contact, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createContactWithHttpInfo(companySlug, contact, _options);
        return result.toPromise();
    }

    /**
     * Creates a new contact. The Location response header returns the URL of the newly created contact.
     * @param companySlug Slug of company to retrieve
     * @param contact 
     */
    public createContact(companySlug: string, contact: Contact, _options?: Configuration): Promise<void> {
        const result = this.api.createContact(companySlug, contact, _options);
        return result.toPromise();
    }

    /**
     * Delete a contact\'s contact person.
     * @param companySlug Slug of company to retrieve
     * @param contactId 
     * @param contactPersonId 
     */
    public deleteContactContactPersonWithHttpInfo(companySlug: string, contactId: number, contactPersonId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteContactContactPersonWithHttpInfo(companySlug, contactId, contactPersonId, _options);
        return result.toPromise();
    }

    /**
     * Delete a contact\'s contact person.
     * @param companySlug Slug of company to retrieve
     * @param contactId 
     * @param contactPersonId 
     */
    public deleteContactContactPerson(companySlug: string, contactId: number, contactPersonId: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteContactContactPerson(companySlug, contactId, contactPersonId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves specified contact. ContactId is returned with a GET contacts call as the first returned field. ContactId is returned in the Location response header for POST contact. 
     * @param companySlug Slug of company to retrieve
     * @param contactId 
     */
    public getContactWithHttpInfo(companySlug: string, contactId: number, _options?: Configuration): Promise<HttpInfo<Contact>> {
        const result = this.api.getContactWithHttpInfo(companySlug, contactId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves specified contact. ContactId is returned with a GET contacts call as the first returned field. ContactId is returned in the Location response header for POST contact. 
     * @param companySlug Slug of company to retrieve
     * @param contactId 
     */
    public getContact(companySlug: string, contactId: number, _options?: Configuration): Promise<Contact> {
        const result = this.api.getContact(companySlug, contactId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves contact person(s) for a specified contact. 
     * @param companySlug Slug of company to retrieve
     * @param contactId 
     */
    public getContactContactPersonWithHttpInfo(companySlug: string, contactId: number, _options?: Configuration): Promise<HttpInfo<Array<ContactPerson>>> {
        const result = this.api.getContactContactPersonWithHttpInfo(companySlug, contactId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves contact person(s) for a specified contact. 
     * @param companySlug Slug of company to retrieve
     * @param contactId 
     */
    public getContactContactPerson(companySlug: string, contactId: number, _options?: Configuration): Promise<Array<ContactPerson>> {
        const result = this.api.getContactContactPerson(companySlug, contactId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves specified contact person 
     * @param companySlug Slug of company to retrieve
     * @param contactId 
     * @param contactPersonId 
     */
    public getContactPersonWithHttpInfo(companySlug: string, contactId: number, contactPersonId: number, _options?: Configuration): Promise<HttpInfo<ContactPerson>> {
        const result = this.api.getContactPersonWithHttpInfo(companySlug, contactId, contactPersonId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves specified contact person 
     * @param companySlug Slug of company to retrieve
     * @param contactId 
     * @param contactPersonId 
     */
    public getContactPerson(companySlug: string, contactId: number, contactPersonId: number, _options?: Configuration): Promise<ContactPerson> {
        const result = this.api.getContactPerson(companySlug, contactId, contactPersonId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves all contacts for the specified company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @param lastModified Filter based on date of last modification. Returns results that were last modified on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedLe Returns results that have been last modified before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedLt Returns results that have been last modified strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedGe Returns results that have been last modified after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedGt Returns results that have been last modified strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDate Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDateLe Returns results that were created before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDateLt Returns results that were created strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDateGe Returns results that were created after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDateGt Returns results that were created strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param supplierNumber Find all results with the supplier number equal to the specified parameter.
     * @param customerNumber Find all results with the customer number equal to the specified parameter.
     * @param memberNumber Find all results with the member number equal to the specified parameter.
     * @param name Find all results with the name equal to the specified parameter.
     * @param organizationNumber Find all results with the organization number equal to the specified parameter.
     * @param email Find all results with the email equal to the specified parameter.
     * @param customer Returns all contacts that are customers. If filter is set for both supplier and customer &#x3D; true, only contacts that are both supplier and customer will be returned.
     * @param supplier Returns all contacts that are suppliers. If filter is set for both supplier and customer &#x3D; true, only contacts that are both supplier and customer will be returned.
     * @param inactive Return all active contacts (false) or all inactive contacts (true).
     * @param group Return contacts in contact group, exact match only. Groups are only used for customers, not suppliers.
     * @param sortBy 
     * @param phoneNumber Find all results with the phone number equal to the specified parameter.
     */
    public getContactsWithHttpInfo(companySlug: string, page?: number, pageSize?: number, lastModified?: string, lastModifiedLe?: string, lastModifiedLt?: string, lastModifiedGe?: string, lastModifiedGt?: string, createdDate?: string, createdDateLe?: string, createdDateLt?: string, createdDateGe?: string, createdDateGt?: string, supplierNumber?: number, customerNumber?: number, memberNumber?: number, name?: string, organizationNumber?: string, email?: string, customer?: boolean, supplier?: boolean, inactive?: boolean, group?: string, sortBy?: 'lastModified asc' | 'lastModified desc' | 'createdDate asc' | 'createdDate desc', phoneNumber?: string, _options?: Configuration): Promise<HttpInfo<Array<Contact>>> {
        const result = this.api.getContactsWithHttpInfo(companySlug, page, pageSize, lastModified, lastModifiedLe, lastModifiedLt, lastModifiedGe, lastModifiedGt, createdDate, createdDateLe, createdDateLt, createdDateGe, createdDateGt, supplierNumber, customerNumber, memberNumber, name, organizationNumber, email, customer, supplier, inactive, group, sortBy, phoneNumber, _options);
        return result.toPromise();
    }

    /**
     * Retrieves all contacts for the specified company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @param lastModified Filter based on date of last modification. Returns results that were last modified on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedLe Returns results that have been last modified before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedLt Returns results that have been last modified strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedGe Returns results that have been last modified after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedGt Returns results that have been last modified strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDate Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDateLe Returns results that were created before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDateLt Returns results that were created strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDateGe Returns results that were created after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDateGt Returns results that were created strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param supplierNumber Find all results with the supplier number equal to the specified parameter.
     * @param customerNumber Find all results with the customer number equal to the specified parameter.
     * @param memberNumber Find all results with the member number equal to the specified parameter.
     * @param name Find all results with the name equal to the specified parameter.
     * @param organizationNumber Find all results with the organization number equal to the specified parameter.
     * @param email Find all results with the email equal to the specified parameter.
     * @param customer Returns all contacts that are customers. If filter is set for both supplier and customer &#x3D; true, only contacts that are both supplier and customer will be returned.
     * @param supplier Returns all contacts that are suppliers. If filter is set for both supplier and customer &#x3D; true, only contacts that are both supplier and customer will be returned.
     * @param inactive Return all active contacts (false) or all inactive contacts (true).
     * @param group Return contacts in contact group, exact match only. Groups are only used for customers, not suppliers.
     * @param sortBy 
     * @param phoneNumber Find all results with the phone number equal to the specified parameter.
     */
    public getContacts(companySlug: string, page?: number, pageSize?: number, lastModified?: string, lastModifiedLe?: string, lastModifiedLt?: string, lastModifiedGe?: string, lastModifiedGt?: string, createdDate?: string, createdDateLe?: string, createdDateLt?: string, createdDateGe?: string, createdDateGt?: string, supplierNumber?: number, customerNumber?: number, memberNumber?: number, name?: string, organizationNumber?: string, email?: string, customer?: boolean, supplier?: boolean, inactive?: boolean, group?: string, sortBy?: 'lastModified asc' | 'lastModified desc' | 'createdDate asc' | 'createdDate desc', phoneNumber?: string, _options?: Configuration): Promise<Array<Contact>> {
        const result = this.api.getContacts(companySlug, page, pageSize, lastModified, lastModifiedLe, lastModifiedLt, lastModifiedGe, lastModifiedGt, createdDate, createdDateLe, createdDateLt, createdDateGe, createdDateGt, supplierNumber, customerNumber, memberNumber, name, organizationNumber, email, customer, supplier, inactive, group, sortBy, phoneNumber, _options);
        return result.toPromise();
    }

    /**
     * Updates an existing contact.
     * @param companySlug Slug of company to retrieve
     * @param contactId 
     * @param contact 
     */
    public updateContactWithHttpInfo(companySlug: string, contactId: number, contact: Contact, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.updateContactWithHttpInfo(companySlug, contactId, contact, _options);
        return result.toPromise();
    }

    /**
     * Updates an existing contact.
     * @param companySlug Slug of company to retrieve
     * @param contactId 
     * @param contact 
     */
    public updateContact(companySlug: string, contactId: number, contact: Contact, _options?: Configuration): Promise<void> {
        const result = this.api.updateContact(companySlug, contactId, contact, _options);
        return result.toPromise();
    }

    /**
     * Updates an existing contact person.
     * @param companySlug Slug of company to retrieve
     * @param contactId 
     * @param contactPersonId 
     * @param contactPerson 
     */
    public updateContactContactPersonWithHttpInfo(companySlug: string, contactId: number, contactPersonId: number, contactPerson: ContactPerson, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.updateContactContactPersonWithHttpInfo(companySlug, contactId, contactPersonId, contactPerson, _options);
        return result.toPromise();
    }

    /**
     * Updates an existing contact person.
     * @param companySlug Slug of company to retrieve
     * @param contactId 
     * @param contactPersonId 
     * @param contactPerson 
     */
    public updateContactContactPerson(companySlug: string, contactId: number, contactPersonId: number, contactPerson: ContactPerson, _options?: Configuration): Promise<void> {
        const result = this.api.updateContactContactPerson(companySlug, contactId, contactPersonId, contactPerson, _options);
        return result.toPromise();
    }


}



import { ObservableCreditNotesApi } from './ObservableAPI';

import { CreditNotesApiRequestFactory, CreditNotesApiResponseProcessor} from "../apis/CreditNotesApi";
export class PromiseCreditNotesApi {
    private api: ObservableCreditNotesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: CreditNotesApiRequestFactory,
        responseProcessor?: CreditNotesApiResponseProcessor
    ) {
        this.api = new ObservableCreditNotesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates and adds a new attachment to a credit note draft
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param filename Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param comment Not required.
     * @param file 
     */
    public addAttachmentToCreditNoteDraftWithHttpInfo(companySlug: string, draftId: number, filename?: string, comment?: string, file?: HttpFile, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.addAttachmentToCreditNoteDraftWithHttpInfo(companySlug, draftId, filename, comment, file, _options);
        return result.toPromise();
    }

    /**
     * Creates and adds a new attachment to a credit note draft
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param filename Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param comment Not required.
     * @param file 
     */
    public addAttachmentToCreditNoteDraft(companySlug: string, draftId: number, filename?: string, comment?: string, file?: HttpFile, _options?: Configuration): Promise<void> {
        const result = this.api.addAttachmentToCreditNoteDraft(companySlug, draftId, filename, comment, file, _options);
        return result.toPromise();
    }

    /**
     * Creates the first credit note number which is then increased by one with every new credit note. By sending an empty request body the default is base number 10000 (the first credit note number will thus be 10001), but can be specified to another starting value.
     * @param companySlug Slug of company to retrieve
     * @param counter 
     */
    public createCreditNoteCounterWithHttpInfo(companySlug: string, counter?: Counter, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createCreditNoteCounterWithHttpInfo(companySlug, counter, _options);
        return result.toPromise();
    }

    /**
     * Creates the first credit note number which is then increased by one with every new credit note. By sending an empty request body the default is base number 10000 (the first credit note number will thus be 10001), but can be specified to another starting value.
     * @param companySlug Slug of company to retrieve
     * @param counter 
     */
    public createCreditNoteCounter(companySlug: string, counter?: Counter, _options?: Configuration): Promise<void> {
        const result = this.api.createCreditNoteCounter(companySlug, counter, _options);
        return result.toPromise();
    }

    /**
     * Creates a credit note draft. This draft corresponds to a draft for an \"uavhengig kreditnota\" in Fiken.
     * @param companySlug Slug of company to retrieve
     * @param invoiceishDraftRequest 
     */
    public createCreditNoteDraftWithHttpInfo(companySlug: string, invoiceishDraftRequest: InvoiceishDraftRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createCreditNoteDraftWithHttpInfo(companySlug, invoiceishDraftRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a credit note draft. This draft corresponds to a draft for an \"uavhengig kreditnota\" in Fiken.
     * @param companySlug Slug of company to retrieve
     * @param invoiceishDraftRequest 
     */
    public createCreditNoteDraft(companySlug: string, invoiceishDraftRequest: InvoiceishDraftRequest, _options?: Configuration): Promise<void> {
        const result = this.api.createCreditNoteDraft(companySlug, invoiceishDraftRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a credit note from an already created draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public createCreditNoteFromDraftWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createCreditNoteFromDraftWithHttpInfo(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Creates a credit note from an already created draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public createCreditNoteFromDraft(companySlug: string, draftId: number, _options?: Configuration): Promise<void> {
        const result = this.api.createCreditNoteFromDraft(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Creates a new credit note that covers the full amount of the associated invoice.
     * @param companySlug Slug of company to retrieve
     * @param fullCreditNoteRequest 
     */
    public createFullCreditNoteWithHttpInfo(companySlug: string, fullCreditNoteRequest: FullCreditNoteRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createFullCreditNoteWithHttpInfo(companySlug, fullCreditNoteRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a new credit note that covers the full amount of the associated invoice.
     * @param companySlug Slug of company to retrieve
     * @param fullCreditNoteRequest 
     */
    public createFullCreditNote(companySlug: string, fullCreditNoteRequest: FullCreditNoteRequest, _options?: Configuration): Promise<void> {
        const result = this.api.createFullCreditNote(companySlug, fullCreditNoteRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a new credit note that doesn\'t fully cover the total amount of the associated invoice.
     * @param companySlug Slug of company to retrieve
     * @param partialCreditNoteRequest 
     */
    public createPartialCreditNoteWithHttpInfo(companySlug: string, partialCreditNoteRequest: PartialCreditNoteRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createPartialCreditNoteWithHttpInfo(companySlug, partialCreditNoteRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a new credit note that doesn\'t fully cover the total amount of the associated invoice.
     * @param companySlug Slug of company to retrieve
     * @param partialCreditNoteRequest 
     */
    public createPartialCreditNote(companySlug: string, partialCreditNoteRequest: PartialCreditNoteRequest, _options?: Configuration): Promise<void> {
        const result = this.api.createPartialCreditNote(companySlug, partialCreditNoteRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete credit note draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public deleteCreditNoteDraftWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteCreditNoteDraftWithHttpInfo(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Delete credit note draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public deleteCreditNoteDraft(companySlug: string, draftId: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteCreditNoteDraft(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Returns credit note with specified id.
     * @param companySlug Slug of company to retrieve
     * @param creditNoteId The creditNoteId (primary key of the returned object) is returned as the first field in the GET all credit notes call; not to be confused with creditNoteNumber 
     */
    public getCreditNoteWithHttpInfo(companySlug: string, creditNoteId: string, _options?: Configuration): Promise<HttpInfo<CreditNoteResult>> {
        const result = this.api.getCreditNoteWithHttpInfo(companySlug, creditNoteId, _options);
        return result.toPromise();
    }

    /**
     * Returns credit note with specified id.
     * @param companySlug Slug of company to retrieve
     * @param creditNoteId The creditNoteId (primary key of the returned object) is returned as the first field in the GET all credit notes call; not to be confused with creditNoteNumber 
     */
    public getCreditNote(companySlug: string, creditNoteId: string, _options?: Configuration): Promise<CreditNoteResult> {
        const result = this.api.getCreditNote(companySlug, creditNoteId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the counter for credit notes if it has been created 
     * @param companySlug Slug of company to retrieve
     */
    public getCreditNoteCounterWithHttpInfo(companySlug: string, _options?: Configuration): Promise<HttpInfo<Counter>> {
        const result = this.api.getCreditNoteCounterWithHttpInfo(companySlug, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the counter for credit notes if it has been created 
     * @param companySlug Slug of company to retrieve
     */
    public getCreditNoteCounter(companySlug: string, _options?: Configuration): Promise<Counter> {
        const result = this.api.getCreditNoteCounter(companySlug, _options);
        return result.toPromise();
    }

    /**
     * Returns credit note draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getCreditNoteDraftWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Promise<HttpInfo<InvoiceishDraftResult>> {
        const result = this.api.getCreditNoteDraftWithHttpInfo(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Returns credit note draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getCreditNoteDraft(companySlug: string, draftId: number, _options?: Configuration): Promise<InvoiceishDraftResult> {
        const result = this.api.getCreditNoteDraft(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Returns all attachments for specified draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getCreditNoteDraftAttachmentsWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Promise<HttpInfo<Array<Attachment>>> {
        const result = this.api.getCreditNoteDraftAttachmentsWithHttpInfo(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Returns all attachments for specified draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getCreditNoteDraftAttachments(companySlug: string, draftId: number, _options?: Configuration): Promise<Array<Attachment>> {
        const result = this.api.getCreditNoteDraftAttachments(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Returns all credit note drafts for given company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     */
    public getCreditNoteDraftsWithHttpInfo(companySlug: string, page?: number, pageSize?: number, _options?: Configuration): Promise<HttpInfo<Array<InvoiceishDraftResult>>> {
        const result = this.api.getCreditNoteDraftsWithHttpInfo(companySlug, page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Returns all credit note drafts for given company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     */
    public getCreditNoteDrafts(companySlug: string, page?: number, pageSize?: number, _options?: Configuration): Promise<Array<InvoiceishDraftResult>> {
        const result = this.api.getCreditNoteDrafts(companySlug, page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Returns all credit notes for given company
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @param issueDate Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param issueDateLe Filter based on date less than or equal to parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param issueDateLt Filter based on date strictly less than parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param issueDateGe Filter based on date greater than or equal to parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param issueDateGt Filter based on date strictly greater than parameter value Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param customerId Returns only credit notes sent to specified customer. Must be the contactId provided by a GET contacts call. 
     * @param settled When set to true, returns only credit notes that have been settled. Otherwise false returns all credit notes that have not been fully settled. 
     * @param creditNoteDraftUuid Filter based on the UUID of the credit note draft that was used to create a given invoice. Applies only to \&quot;uavhengig kreditnotaer\&quot;.
     */
    public getCreditNotesWithHttpInfo(companySlug: string, page?: number, pageSize?: number, issueDate?: string, issueDateLe?: string, issueDateLt?: string, issueDateGe?: string, issueDateGt?: string, customerId?: number, settled?: boolean, creditNoteDraftUuid?: string, _options?: Configuration): Promise<HttpInfo<Array<CreditNoteResult>>> {
        const result = this.api.getCreditNotesWithHttpInfo(companySlug, page, pageSize, issueDate, issueDateLe, issueDateLt, issueDateGe, issueDateGt, customerId, settled, creditNoteDraftUuid, _options);
        return result.toPromise();
    }

    /**
     * Returns all credit notes for given company
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @param issueDate Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param issueDateLe Filter based on date less than or equal to parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param issueDateLt Filter based on date strictly less than parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param issueDateGe Filter based on date greater than or equal to parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param issueDateGt Filter based on date strictly greater than parameter value Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param customerId Returns only credit notes sent to specified customer. Must be the contactId provided by a GET contacts call. 
     * @param settled When set to true, returns only credit notes that have been settled. Otherwise false returns all credit notes that have not been fully settled. 
     * @param creditNoteDraftUuid Filter based on the UUID of the credit note draft that was used to create a given invoice. Applies only to \&quot;uavhengig kreditnotaer\&quot;.
     */
    public getCreditNotes(companySlug: string, page?: number, pageSize?: number, issueDate?: string, issueDateLe?: string, issueDateLt?: string, issueDateGe?: string, issueDateGt?: string, customerId?: number, settled?: boolean, creditNoteDraftUuid?: string, _options?: Configuration): Promise<Array<CreditNoteResult>> {
        const result = this.api.getCreditNotes(companySlug, page, pageSize, issueDate, issueDateLe, issueDateLt, issueDateGe, issueDateGt, customerId, settled, creditNoteDraftUuid, _options);
        return result.toPromise();
    }

    /**
     * Sends the specified document
     * @param companySlug Slug of company to retrieve
     * @param sendCreditNoteRequest 
     */
    public sendCreditNoteWithHttpInfo(companySlug: string, sendCreditNoteRequest: SendCreditNoteRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.sendCreditNoteWithHttpInfo(companySlug, sendCreditNoteRequest, _options);
        return result.toPromise();
    }

    /**
     * Sends the specified document
     * @param companySlug Slug of company to retrieve
     * @param sendCreditNoteRequest 
     */
    public sendCreditNote(companySlug: string, sendCreditNoteRequest: SendCreditNoteRequest, _options?: Configuration): Promise<void> {
        const result = this.api.sendCreditNote(companySlug, sendCreditNoteRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates credit note draft with provided id. 
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param invoiceishDraftRequest 
     */
    public updateCreditNoteDraftWithHttpInfo(companySlug: string, draftId: number, invoiceishDraftRequest: InvoiceishDraftRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.updateCreditNoteDraftWithHttpInfo(companySlug, draftId, invoiceishDraftRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates credit note draft with provided id. 
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param invoiceishDraftRequest 
     */
    public updateCreditNoteDraft(companySlug: string, draftId: number, invoiceishDraftRequest: InvoiceishDraftRequest, _options?: Configuration): Promise<void> {
        const result = this.api.updateCreditNoteDraft(companySlug, draftId, invoiceishDraftRequest, _options);
        return result.toPromise();
    }


}



import { ObservableGroupsApi } from './ObservableAPI';

import { GroupsApiRequestFactory, GroupsApiResponseProcessor} from "../apis/GroupsApi";
export class PromiseGroupsApi {
    private api: ObservableGroupsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: GroupsApiRequestFactory,
        responseProcessor?: GroupsApiResponseProcessor
    ) {
        this.api = new ObservableGroupsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns all customer groups for given company
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     */
    public getGroupsWithHttpInfo(companySlug: string, page?: number, pageSize?: number, _options?: Configuration): Promise<HttpInfo<Array<string>>> {
        const result = this.api.getGroupsWithHttpInfo(companySlug, page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Returns all customer groups for given company
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     */
    public getGroups(companySlug: string, page?: number, pageSize?: number, _options?: Configuration): Promise<Array<string>> {
        const result = this.api.getGroups(companySlug, page, pageSize, _options);
        return result.toPromise();
    }


}



import { ObservableInboxApi } from './ObservableAPI';

import { InboxApiRequestFactory, InboxApiResponseProcessor} from "../apis/InboxApi";
export class PromiseInboxApi {
    private api: ObservableInboxApi

    public constructor(
        configuration: Configuration,
        requestFactory?: InboxApiRequestFactory,
        responseProcessor?: InboxApiResponseProcessor
    ) {
        this.api = new ObservableInboxApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Upload a document to the inbox
     * @param companySlug Slug of company to retrieve
     * @param name The name of the inbox document, usually the same as the filename
     * @param filename The filename of the file uploaded
     * @param description Additional description of the inbox document
     * @param file 
     */
    public createInboxDocumentWithHttpInfo(companySlug: string, name?: string, filename?: string, description?: string, file?: HttpFile, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createInboxDocumentWithHttpInfo(companySlug, name, filename, description, file, _options);
        return result.toPromise();
    }

    /**
     * Upload a document to the inbox
     * @param companySlug Slug of company to retrieve
     * @param name The name of the inbox document, usually the same as the filename
     * @param filename The filename of the file uploaded
     * @param description Additional description of the inbox document
     * @param file 
     */
    public createInboxDocument(companySlug: string, name?: string, filename?: string, description?: string, file?: HttpFile, _options?: Configuration): Promise<void> {
        const result = this.api.createInboxDocument(companySlug, name, filename, description, file, _options);
        return result.toPromise();
    }

    /**
     * Returns the contents of the inbox for given company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @param sortBy Sorts results in either ascending (asc) or descending (desc) order based on the parameter value.
     * @param status 
     * @param name Filter documents based on their name, case-insensitive substring match.
     */
    public getInboxWithHttpInfo(companySlug: string, page?: number, pageSize?: number, sortBy?: 'createdDate asc' | 'createdDate desc' | 'name asc' | 'name desc', status?: 'all' | 'unused' | 'used', name?: string, _options?: Configuration): Promise<HttpInfo<Array<InboxResult>>> {
        const result = this.api.getInboxWithHttpInfo(companySlug, page, pageSize, sortBy, status, name, _options);
        return result.toPromise();
    }

    /**
     * Returns the contents of the inbox for given company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @param sortBy Sorts results in either ascending (asc) or descending (desc) order based on the parameter value.
     * @param status 
     * @param name Filter documents based on their name, case-insensitive substring match.
     */
    public getInbox(companySlug: string, page?: number, pageSize?: number, sortBy?: 'createdDate asc' | 'createdDate desc' | 'name asc' | 'name desc', status?: 'all' | 'unused' | 'used', name?: string, _options?: Configuration): Promise<Array<InboxResult>> {
        const result = this.api.getInbox(companySlug, page, pageSize, sortBy, status, name, _options);
        return result.toPromise();
    }

    /**
     * Returns the inbox document with specified id
     * @param companySlug Slug of company to retrieve
     * @param inboxDocumentId 
     */
    public getInboxDocumentWithHttpInfo(companySlug: string, inboxDocumentId: number, _options?: Configuration): Promise<HttpInfo<InboxResult>> {
        const result = this.api.getInboxDocumentWithHttpInfo(companySlug, inboxDocumentId, _options);
        return result.toPromise();
    }

    /**
     * Returns the inbox document with specified id
     * @param companySlug Slug of company to retrieve
     * @param inboxDocumentId 
     */
    public getInboxDocument(companySlug: string, inboxDocumentId: number, _options?: Configuration): Promise<InboxResult> {
        const result = this.api.getInboxDocument(companySlug, inboxDocumentId, _options);
        return result.toPromise();
    }


}



import { ObservableInvoicesApi } from './ObservableAPI';

import { InvoicesApiRequestFactory, InvoicesApiResponseProcessor} from "../apis/InvoicesApi";
export class PromiseInvoicesApi {
    private api: ObservableInvoicesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: InvoicesApiRequestFactory,
        responseProcessor?: InvoicesApiResponseProcessor
    ) {
        this.api = new ObservableInvoicesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates and adds a new attachment to an Invoice
     * @param companySlug Slug of company to retrieve
     * @param invoiceId The invoiceId (primary key of the returned object) is returned in the GET all invoices call; not to be confused with invoiceNumber 
     * @param filename The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param file 
     */
    public addAttachmentToInvoiceWithHttpInfo(companySlug: string, invoiceId: number, filename?: string, file?: HttpFile, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.addAttachmentToInvoiceWithHttpInfo(companySlug, invoiceId, filename, file, _options);
        return result.toPromise();
    }

    /**
     * Creates and adds a new attachment to an Invoice
     * @param companySlug Slug of company to retrieve
     * @param invoiceId The invoiceId (primary key of the returned object) is returned in the GET all invoices call; not to be confused with invoiceNumber 
     * @param filename The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param file 
     */
    public addAttachmentToInvoice(companySlug: string, invoiceId: number, filename?: string, file?: HttpFile, _options?: Configuration): Promise<void> {
        const result = this.api.addAttachmentToInvoice(companySlug, invoiceId, filename, file, _options);
        return result.toPromise();
    }

    /**
     * Creates and adds a new attachment to an invoice draft
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param filename Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param comment Not required.
     * @param file 
     */
    public addAttachmentToInvoiceDraftWithHttpInfo(companySlug: string, draftId: number, filename?: string, comment?: string, file?: HttpFile, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.addAttachmentToInvoiceDraftWithHttpInfo(companySlug, draftId, filename, comment, file, _options);
        return result.toPromise();
    }

    /**
     * Creates and adds a new attachment to an invoice draft
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param filename Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param comment Not required.
     * @param file 
     */
    public addAttachmentToInvoiceDraft(companySlug: string, draftId: number, filename?: string, comment?: string, file?: HttpFile, _options?: Configuration): Promise<void> {
        const result = this.api.addAttachmentToInvoiceDraft(companySlug, draftId, filename, comment, file, _options);
        return result.toPromise();
    }

    /**
     * Creates an invoice. This corresponds to \"Ny faktura\" in Fiken. There are two types of invoice lines that can be added to an invoice line: product line or free text line. Provide a product Id if you are invoicing a product. All information regarding the price and VAT for this product will be added to the invoice. It is however also possible to override the unit amount by sending information in both fields \"productId\" and \"unitAmount\". An invoice line can also be a free text line meaning that no existing product will be associated with the invoiced line. In this case all information regarding the price and VAT of the product or service to be invoiced must be provided. 
     * @param companySlug Slug of company to retrieve
     * @param invoiceRequest 
     */
    public createInvoiceWithHttpInfo(companySlug: string, invoiceRequest: InvoiceRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createInvoiceWithHttpInfo(companySlug, invoiceRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates an invoice. This corresponds to \"Ny faktura\" in Fiken. There are two types of invoice lines that can be added to an invoice line: product line or free text line. Provide a product Id if you are invoicing a product. All information regarding the price and VAT for this product will be added to the invoice. It is however also possible to override the unit amount by sending information in both fields \"productId\" and \"unitAmount\". An invoice line can also be a free text line meaning that no existing product will be associated with the invoiced line. In this case all information regarding the price and VAT of the product or service to be invoiced must be provided. 
     * @param companySlug Slug of company to retrieve
     * @param invoiceRequest 
     */
    public createInvoice(companySlug: string, invoiceRequest: InvoiceRequest, _options?: Configuration): Promise<void> {
        const result = this.api.createInvoice(companySlug, invoiceRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates the first invoice number which is then increased by one with every new invoice. By sending an empty request body the default is base number 10000 (the first invoice number will thus be 10001), but can be specified to another starting value.
     * @param companySlug Slug of company to retrieve
     * @param counter 
     */
    public createInvoiceCounterWithHttpInfo(companySlug: string, counter?: Counter, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createInvoiceCounterWithHttpInfo(companySlug, counter, _options);
        return result.toPromise();
    }

    /**
     * Creates the first invoice number which is then increased by one with every new invoice. By sending an empty request body the default is base number 10000 (the first invoice number will thus be 10001), but can be specified to another starting value.
     * @param companySlug Slug of company to retrieve
     * @param counter 
     */
    public createInvoiceCounter(companySlug: string, counter?: Counter, _options?: Configuration): Promise<void> {
        const result = this.api.createInvoiceCounter(companySlug, counter, _options);
        return result.toPromise();
    }

    /**
     * Creates an invoice draft.
     * @param companySlug Slug of company to retrieve
     * @param invoiceishDraftRequest 
     */
    public createInvoiceDraftWithHttpInfo(companySlug: string, invoiceishDraftRequest: InvoiceishDraftRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createInvoiceDraftWithHttpInfo(companySlug, invoiceishDraftRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates an invoice draft.
     * @param companySlug Slug of company to retrieve
     * @param invoiceishDraftRequest 
     */
    public createInvoiceDraft(companySlug: string, invoiceishDraftRequest: InvoiceishDraftRequest, _options?: Configuration): Promise<void> {
        const result = this.api.createInvoiceDraft(companySlug, invoiceishDraftRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates an invoice from an already created draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public createInvoiceFromDraftWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createInvoiceFromDraftWithHttpInfo(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Creates an invoice from an already created draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public createInvoiceFromDraft(companySlug: string, draftId: number, _options?: Configuration): Promise<void> {
        const result = this.api.createInvoiceFromDraft(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Delete invoice draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public deleteInvoiceDraftWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteInvoiceDraftWithHttpInfo(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Delete invoice draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public deleteInvoiceDraft(companySlug: string, draftId: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteInvoiceDraft(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Returns invoice with specified id.
     * @param companySlug Slug of company to retrieve
     * @param invoiceId The invoiceId (primary key of the returned object) is returned in the GET all invoices call; not to be confused with invoiceNumber 
     */
    public getInvoiceWithHttpInfo(companySlug: string, invoiceId: number, _options?: Configuration): Promise<HttpInfo<InvoiceResult>> {
        const result = this.api.getInvoiceWithHttpInfo(companySlug, invoiceId, _options);
        return result.toPromise();
    }

    /**
     * Returns invoice with specified id.
     * @param companySlug Slug of company to retrieve
     * @param invoiceId The invoiceId (primary key of the returned object) is returned in the GET all invoices call; not to be confused with invoiceNumber 
     */
    public getInvoice(companySlug: string, invoiceId: number, _options?: Configuration): Promise<InvoiceResult> {
        const result = this.api.getInvoice(companySlug, invoiceId, _options);
        return result.toPromise();
    }

    /**
     * Returns all attachments for a given Invoice
     * @param companySlug Slug of company to retrieve
     * @param invoiceId The invoiceId (primary key of the returned object) is returned in the GET all invoices call; not to be confused with invoiceNumber 
     */
    public getInvoiceAttachmentsWithHttpInfo(companySlug: string, invoiceId: number, _options?: Configuration): Promise<HttpInfo<Array<Attachment>>> {
        const result = this.api.getInvoiceAttachmentsWithHttpInfo(companySlug, invoiceId, _options);
        return result.toPromise();
    }

    /**
     * Returns all attachments for a given Invoice
     * @param companySlug Slug of company to retrieve
     * @param invoiceId The invoiceId (primary key of the returned object) is returned in the GET all invoices call; not to be confused with invoiceNumber 
     */
    public getInvoiceAttachments(companySlug: string, invoiceId: number, _options?: Configuration): Promise<Array<Attachment>> {
        const result = this.api.getInvoiceAttachments(companySlug, invoiceId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the counter for invoices if it has been created 
     * @param companySlug Slug of company to retrieve
     */
    public getInvoiceCounterWithHttpInfo(companySlug: string, _options?: Configuration): Promise<HttpInfo<Counter>> {
        const result = this.api.getInvoiceCounterWithHttpInfo(companySlug, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the counter for invoices if it has been created 
     * @param companySlug Slug of company to retrieve
     */
    public getInvoiceCounter(companySlug: string, _options?: Configuration): Promise<Counter> {
        const result = this.api.getInvoiceCounter(companySlug, _options);
        return result.toPromise();
    }

    /**
     * Returns invoice draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getInvoiceDraftWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Promise<HttpInfo<InvoiceishDraftResult>> {
        const result = this.api.getInvoiceDraftWithHttpInfo(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Returns invoice draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getInvoiceDraft(companySlug: string, draftId: number, _options?: Configuration): Promise<InvoiceishDraftResult> {
        const result = this.api.getInvoiceDraft(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Returns all attachments for specified draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getInvoiceDraftAttachmentsWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Promise<HttpInfo<Array<Attachment>>> {
        const result = this.api.getInvoiceDraftAttachmentsWithHttpInfo(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Returns all attachments for specified draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getInvoiceDraftAttachments(companySlug: string, draftId: number, _options?: Configuration): Promise<Array<Attachment>> {
        const result = this.api.getInvoiceDraftAttachments(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Returns all invoice drafts for given company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @param orderReference Filter based on order reference for a given invoice draft
     * @param uuid Filter based on the UUID of the draft.
     */
    public getInvoiceDraftsWithHttpInfo(companySlug: string, page?: number, pageSize?: number, orderReference?: string, uuid?: string, _options?: Configuration): Promise<HttpInfo<Array<InvoiceishDraftResult>>> {
        const result = this.api.getInvoiceDraftsWithHttpInfo(companySlug, page, pageSize, orderReference, uuid, _options);
        return result.toPromise();
    }

    /**
     * Returns all invoice drafts for given company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @param orderReference Filter based on order reference for a given invoice draft
     * @param uuid Filter based on the UUID of the draft.
     */
    public getInvoiceDrafts(companySlug: string, page?: number, pageSize?: number, orderReference?: string, uuid?: string, _options?: Configuration): Promise<Array<InvoiceishDraftResult>> {
        const result = this.api.getInvoiceDrafts(companySlug, page, pageSize, orderReference, uuid, _options);
        return result.toPromise();
    }

    /**
     * Returns all invoices for given company. You can filter based on issue date, last modified date, customer ID, and if the invoice is settled or not.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @param issueDate Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param issueDateLe Filter based on date less than or equal to parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param issueDateLt Filter based on date strictly less than parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param issueDateGe Filter based on date greater than or equal to parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param issueDateGt Filter based on date strictly greater than parameter value Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModified Filter based on date of last modification. Returns results that were last modified on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedLe Returns results that have been last modified before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedLt Returns results that have been last modified strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedGe Returns results that have been last modified after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedGt Returns results that have been last modified strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param customerId Returns only invoices sent to specified customer. Must be the contactId provided by a GET contacts call. 
     * @param settled When set to true, returns only invoices that have been settled. Otherwise false returns all invoices that have not been fully settled. 
     * @param orderReference Filter based on order reference for a given invoice
     * @param invoiceDraftUuid Filter based on the UUID of the invoice draft that was used to create a given invoice
     * @param invoiceNumber 
     */
    public getInvoicesWithHttpInfo(companySlug: string, page?: number, pageSize?: number, issueDate?: string, issueDateLe?: string, issueDateLt?: string, issueDateGe?: string, issueDateGt?: string, lastModified?: string, lastModifiedLe?: string, lastModifiedLt?: string, lastModifiedGe?: string, lastModifiedGt?: string, customerId?: number, settled?: boolean, orderReference?: string, invoiceDraftUuid?: string, invoiceNumber?: string, _options?: Configuration): Promise<HttpInfo<Array<InvoiceResult>>> {
        const result = this.api.getInvoicesWithHttpInfo(companySlug, page, pageSize, issueDate, issueDateLe, issueDateLt, issueDateGe, issueDateGt, lastModified, lastModifiedLe, lastModifiedLt, lastModifiedGe, lastModifiedGt, customerId, settled, orderReference, invoiceDraftUuid, invoiceNumber, _options);
        return result.toPromise();
    }

    /**
     * Returns all invoices for given company. You can filter based on issue date, last modified date, customer ID, and if the invoice is settled or not.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @param issueDate Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param issueDateLe Filter based on date less than or equal to parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param issueDateLt Filter based on date strictly less than parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param issueDateGe Filter based on date greater than or equal to parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param issueDateGt Filter based on date strictly greater than parameter value Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModified Filter based on date of last modification. Returns results that were last modified on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedLe Returns results that have been last modified before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedLt Returns results that have been last modified strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedGe Returns results that have been last modified after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedGt Returns results that have been last modified strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param customerId Returns only invoices sent to specified customer. Must be the contactId provided by a GET contacts call. 
     * @param settled When set to true, returns only invoices that have been settled. Otherwise false returns all invoices that have not been fully settled. 
     * @param orderReference Filter based on order reference for a given invoice
     * @param invoiceDraftUuid Filter based on the UUID of the invoice draft that was used to create a given invoice
     * @param invoiceNumber 
     */
    public getInvoices(companySlug: string, page?: number, pageSize?: number, issueDate?: string, issueDateLe?: string, issueDateLt?: string, issueDateGe?: string, issueDateGt?: string, lastModified?: string, lastModifiedLe?: string, lastModifiedLt?: string, lastModifiedGe?: string, lastModifiedGt?: string, customerId?: number, settled?: boolean, orderReference?: string, invoiceDraftUuid?: string, invoiceNumber?: string, _options?: Configuration): Promise<Array<InvoiceResult>> {
        const result = this.api.getInvoices(companySlug, page, pageSize, issueDate, issueDateLe, issueDateLt, issueDateGe, issueDateGt, lastModified, lastModifiedLe, lastModifiedLt, lastModifiedGe, lastModifiedGt, customerId, settled, orderReference, invoiceDraftUuid, invoiceNumber, _options);
        return result.toPromise();
    }

    /**
     * Sends the specified document
     * @param companySlug Slug of company to retrieve
     * @param sendInvoiceRequest 
     */
    public sendInvoiceWithHttpInfo(companySlug: string, sendInvoiceRequest: SendInvoiceRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.sendInvoiceWithHttpInfo(companySlug, sendInvoiceRequest, _options);
        return result.toPromise();
    }

    /**
     * Sends the specified document
     * @param companySlug Slug of company to retrieve
     * @param sendInvoiceRequest 
     */
    public sendInvoice(companySlug: string, sendInvoiceRequest: SendInvoiceRequest, _options?: Configuration): Promise<void> {
        const result = this.api.sendInvoice(companySlug, sendInvoiceRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates invoice with provided id. It is possible to update the due date of an invoice as well as if the invoice was sent manually, outside of Fiken. 
     * @param companySlug Slug of company to retrieve
     * @param invoiceId The invoiceId (primary key of the returned object) is returned in the GET all invoices call; not to be confused with invoiceNumber 
     * @param updateInvoiceRequest 
     */
    public updateInvoiceWithHttpInfo(companySlug: string, invoiceId: number, updateInvoiceRequest: UpdateInvoiceRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.updateInvoiceWithHttpInfo(companySlug, invoiceId, updateInvoiceRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates invoice with provided id. It is possible to update the due date of an invoice as well as if the invoice was sent manually, outside of Fiken. 
     * @param companySlug Slug of company to retrieve
     * @param invoiceId The invoiceId (primary key of the returned object) is returned in the GET all invoices call; not to be confused with invoiceNumber 
     * @param updateInvoiceRequest 
     */
    public updateInvoice(companySlug: string, invoiceId: number, updateInvoiceRequest: UpdateInvoiceRequest, _options?: Configuration): Promise<void> {
        const result = this.api.updateInvoice(companySlug, invoiceId, updateInvoiceRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates invoice draft with provided id. 
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param invoiceishDraftRequest 
     */
    public updateInvoiceDraftWithHttpInfo(companySlug: string, draftId: number, invoiceishDraftRequest: InvoiceishDraftRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.updateInvoiceDraftWithHttpInfo(companySlug, draftId, invoiceishDraftRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates invoice draft with provided id. 
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param invoiceishDraftRequest 
     */
    public updateInvoiceDraft(companySlug: string, draftId: number, invoiceishDraftRequest: InvoiceishDraftRequest, _options?: Configuration): Promise<void> {
        const result = this.api.updateInvoiceDraft(companySlug, draftId, invoiceishDraftRequest, _options);
        return result.toPromise();
    }


}



import { ObservableJournalEntriesApi } from './ObservableAPI';

import { JournalEntriesApiRequestFactory, JournalEntriesApiResponseProcessor} from "../apis/JournalEntriesApi";
export class PromiseJournalEntriesApi {
    private api: ObservableJournalEntriesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: JournalEntriesApiRequestFactory,
        responseProcessor?: JournalEntriesApiResponseProcessor
    ) {
        this.api = new ObservableJournalEntriesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates and adds a new attachment to a Journal Entry
     * @param companySlug Slug of company to retrieve
     * @param journalEntryId 
     * @param filename Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param file 
     */
    public addAttachmentToJournalEntryWithHttpInfo(companySlug: string, journalEntryId: number, filename?: string, file?: HttpFile, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.addAttachmentToJournalEntryWithHttpInfo(companySlug, journalEntryId, filename, file, _options);
        return result.toPromise();
    }

    /**
     * Creates and adds a new attachment to a Journal Entry
     * @param companySlug Slug of company to retrieve
     * @param journalEntryId 
     * @param filename Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param file 
     */
    public addAttachmentToJournalEntry(companySlug: string, journalEntryId: number, filename?: string, file?: HttpFile, _options?: Configuration): Promise<void> {
        const result = this.api.addAttachmentToJournalEntry(companySlug, journalEntryId, filename, file, _options);
        return result.toPromise();
    }

    /**
     * Creates a new general journal entry (fri postering).
     * @param companySlug Slug of company to retrieve
     * @param generalJournalEntryRequest 
     */
    public createGeneralJournalEntryWithHttpInfo(companySlug: string, generalJournalEntryRequest: GeneralJournalEntryRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createGeneralJournalEntryWithHttpInfo(companySlug, generalJournalEntryRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a new general journal entry (fri postering).
     * @param companySlug Slug of company to retrieve
     * @param generalJournalEntryRequest 
     */
    public createGeneralJournalEntry(companySlug: string, generalJournalEntryRequest: GeneralJournalEntryRequest, _options?: Configuration): Promise<void> {
        const result = this.api.createGeneralJournalEntry(companySlug, generalJournalEntryRequest, _options);
        return result.toPromise();
    }

    /**
     * Returns all general journal entries (posteringer) for the specified company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @param date Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param dateLe Filter based on date less than or equal to parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param dateLt Filter based on date strictly less than parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param dateGe Filter based on date greater than or equal to parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param dateGt Filter based on date strictly greater than parameter value Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModified Filter based on date of last modification. Returns results that were last modified on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedLe Returns results that have been last modified before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedLt Returns results that have been last modified strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedGe Returns results that have been last modified after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedGt Returns results that have been last modified strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDate Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDateLe Returns results that were created before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDateLt Returns results that were created strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDateGe Returns results that were created after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDateGt Returns results that were created strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     */
    public getJournalEntriesWithHttpInfo(companySlug: string, page?: number, pageSize?: number, date?: string, dateLe?: string, dateLt?: string, dateGe?: string, dateGt?: string, lastModified?: string, lastModifiedLe?: string, lastModifiedLt?: string, lastModifiedGe?: string, lastModifiedGt?: string, createdDate?: string, createdDateLe?: string, createdDateLt?: string, createdDateGe?: string, createdDateGt?: string, _options?: Configuration): Promise<HttpInfo<Array<JournalEntry>>> {
        const result = this.api.getJournalEntriesWithHttpInfo(companySlug, page, pageSize, date, dateLe, dateLt, dateGe, dateGt, lastModified, lastModifiedLe, lastModifiedLt, lastModifiedGe, lastModifiedGt, createdDate, createdDateLe, createdDateLt, createdDateGe, createdDateGt, _options);
        return result.toPromise();
    }

    /**
     * Returns all general journal entries (posteringer) for the specified company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @param date Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param dateLe Filter based on date less than or equal to parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param dateLt Filter based on date strictly less than parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param dateGe Filter based on date greater than or equal to parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param dateGt Filter based on date strictly greater than parameter value Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModified Filter based on date of last modification. Returns results that were last modified on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedLe Returns results that have been last modified before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedLt Returns results that have been last modified strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedGe Returns results that have been last modified after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedGt Returns results that have been last modified strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDate Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDateLe Returns results that were created before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDateLt Returns results that were created strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDateGe Returns results that were created after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDateGt Returns results that were created strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     */
    public getJournalEntries(companySlug: string, page?: number, pageSize?: number, date?: string, dateLe?: string, dateLt?: string, dateGe?: string, dateGt?: string, lastModified?: string, lastModifiedLe?: string, lastModifiedLt?: string, lastModifiedGe?: string, lastModifiedGt?: string, createdDate?: string, createdDateLe?: string, createdDateLt?: string, createdDateGe?: string, createdDateGt?: string, _options?: Configuration): Promise<Array<JournalEntry>> {
        const result = this.api.getJournalEntries(companySlug, page, pageSize, date, dateLe, dateLt, dateGe, dateGt, lastModified, lastModifiedLe, lastModifiedLt, lastModifiedGe, lastModifiedGt, createdDate, createdDateLe, createdDateLt, createdDateGe, createdDateGt, _options);
        return result.toPromise();
    }

    /**
     * Returns all journal entries within a given company\'s Journal Entry Service
     * @param companySlug Slug of company to retrieve
     * @param journalEntryId 
     */
    public getJournalEntryWithHttpInfo(companySlug: string, journalEntryId: number, _options?: Configuration): Promise<HttpInfo<JournalEntry>> {
        const result = this.api.getJournalEntryWithHttpInfo(companySlug, journalEntryId, _options);
        return result.toPromise();
    }

    /**
     * Returns all journal entries within a given company\'s Journal Entry Service
     * @param companySlug Slug of company to retrieve
     * @param journalEntryId 
     */
    public getJournalEntry(companySlug: string, journalEntryId: number, _options?: Configuration): Promise<JournalEntry> {
        const result = this.api.getJournalEntry(companySlug, journalEntryId, _options);
        return result.toPromise();
    }

    /**
     * Returns all attachments for a given Journal Entry
     * @param companySlug Slug of company to retrieve
     * @param journalEntryId 
     */
    public getJournalEntryAttachmentsWithHttpInfo(companySlug: string, journalEntryId: number, _options?: Configuration): Promise<HttpInfo<Array<Attachment>>> {
        const result = this.api.getJournalEntryAttachmentsWithHttpInfo(companySlug, journalEntryId, _options);
        return result.toPromise();
    }

    /**
     * Returns all attachments for a given Journal Entry
     * @param companySlug Slug of company to retrieve
     * @param journalEntryId 
     */
    public getJournalEntryAttachments(companySlug: string, journalEntryId: number, _options?: Configuration): Promise<Array<Attachment>> {
        const result = this.api.getJournalEntryAttachments(companySlug, journalEntryId, _options);
        return result.toPromise();
    }


}



import { ObservableOffersApi } from './ObservableAPI';

import { OffersApiRequestFactory, OffersApiResponseProcessor} from "../apis/OffersApi";
export class PromiseOffersApi {
    private api: ObservableOffersApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OffersApiRequestFactory,
        responseProcessor?: OffersApiResponseProcessor
    ) {
        this.api = new ObservableOffersApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates and adds a new attachment to an offer draft
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param filename Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param comment Not required.
     * @param file 
     */
    public addAttachmentToOfferDraftWithHttpInfo(companySlug: string, draftId: number, filename?: string, comment?: string, file?: HttpFile, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.addAttachmentToOfferDraftWithHttpInfo(companySlug, draftId, filename, comment, file, _options);
        return result.toPromise();
    }

    /**
     * Creates and adds a new attachment to an offer draft
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param filename Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param comment Not required.
     * @param file 
     */
    public addAttachmentToOfferDraft(companySlug: string, draftId: number, filename?: string, comment?: string, file?: HttpFile, _options?: Configuration): Promise<void> {
        const result = this.api.addAttachmentToOfferDraft(companySlug, draftId, filename, comment, file, _options);
        return result.toPromise();
    }

    /**
     * Creates the first offer number which is then increased by one with every new offer. By sending an empty request body the default is base number (the first offer number will thus be 10001), but can be specified to another starting value.
     * @param companySlug Slug of company to retrieve
     * @param counter 
     */
    public createOfferCounterWithHttpInfo(companySlug: string, counter?: Counter, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createOfferCounterWithHttpInfo(companySlug, counter, _options);
        return result.toPromise();
    }

    /**
     * Creates the first offer number which is then increased by one with every new offer. By sending an empty request body the default is base number (the first offer number will thus be 10001), but can be specified to another starting value.
     * @param companySlug Slug of company to retrieve
     * @param counter 
     */
    public createOfferCounter(companySlug: string, counter?: Counter, _options?: Configuration): Promise<void> {
        const result = this.api.createOfferCounter(companySlug, counter, _options);
        return result.toPromise();
    }

    /**
     * Creates an offer draft.
     * @param companySlug Slug of company to retrieve
     * @param invoiceishDraftRequest 
     */
    public createOfferDraftWithHttpInfo(companySlug: string, invoiceishDraftRequest: InvoiceishDraftRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createOfferDraftWithHttpInfo(companySlug, invoiceishDraftRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates an offer draft.
     * @param companySlug Slug of company to retrieve
     * @param invoiceishDraftRequest 
     */
    public createOfferDraft(companySlug: string, invoiceishDraftRequest: InvoiceishDraftRequest, _options?: Configuration): Promise<void> {
        const result = this.api.createOfferDraft(companySlug, invoiceishDraftRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates an offer from an already created draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public createOfferFromDraftWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createOfferFromDraftWithHttpInfo(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Creates an offer from an already created draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public createOfferFromDraft(companySlug: string, draftId: number, _options?: Configuration): Promise<void> {
        const result = this.api.createOfferFromDraft(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Delete offer draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public deleteOfferDraftWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteOfferDraftWithHttpInfo(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Delete offer draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public deleteOfferDraft(companySlug: string, draftId: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteOfferDraft(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Returns offer with specified id.
     * @param companySlug Slug of company to retrieve
     * @param offerId The offerId (primary key of the returned object) is returned as the first field in the GET all offers call 
     */
    public getOfferWithHttpInfo(companySlug: string, offerId: string, _options?: Configuration): Promise<HttpInfo<Offer>> {
        const result = this.api.getOfferWithHttpInfo(companySlug, offerId, _options);
        return result.toPromise();
    }

    /**
     * Returns offer with specified id.
     * @param companySlug Slug of company to retrieve
     * @param offerId The offerId (primary key of the returned object) is returned as the first field in the GET all offers call 
     */
    public getOffer(companySlug: string, offerId: string, _options?: Configuration): Promise<Offer> {
        const result = this.api.getOffer(companySlug, offerId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the counter for offers if it has been created 
     * @param companySlug Slug of company to retrieve
     */
    public getOfferCounterWithHttpInfo(companySlug: string, _options?: Configuration): Promise<HttpInfo<Counter>> {
        const result = this.api.getOfferCounterWithHttpInfo(companySlug, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the counter for offers if it has been created 
     * @param companySlug Slug of company to retrieve
     */
    public getOfferCounter(companySlug: string, _options?: Configuration): Promise<Counter> {
        const result = this.api.getOfferCounter(companySlug, _options);
        return result.toPromise();
    }

    /**
     * Returns offer draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getOfferDraftWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Promise<HttpInfo<InvoiceishDraftResult>> {
        const result = this.api.getOfferDraftWithHttpInfo(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Returns offer draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getOfferDraft(companySlug: string, draftId: number, _options?: Configuration): Promise<InvoiceishDraftResult> {
        const result = this.api.getOfferDraft(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Returns all attachments for specified draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getOfferDraftAttachmentsWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Promise<HttpInfo<Array<Attachment>>> {
        const result = this.api.getOfferDraftAttachmentsWithHttpInfo(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Returns all attachments for specified draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getOfferDraftAttachments(companySlug: string, draftId: number, _options?: Configuration): Promise<Array<Attachment>> {
        const result = this.api.getOfferDraftAttachments(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Returns all offer drafts for given company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     */
    public getOfferDraftsWithHttpInfo(companySlug: string, page?: number, pageSize?: number, _options?: Configuration): Promise<HttpInfo<Array<InvoiceishDraftResult>>> {
        const result = this.api.getOfferDraftsWithHttpInfo(companySlug, page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Returns all offer drafts for given company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     */
    public getOfferDrafts(companySlug: string, page?: number, pageSize?: number, _options?: Configuration): Promise<Array<InvoiceishDraftResult>> {
        const result = this.api.getOfferDrafts(companySlug, page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Returns all offers for given company
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     */
    public getOffersWithHttpInfo(companySlug: string, page?: number, pageSize?: number, _options?: Configuration): Promise<HttpInfo<Array<Offer>>> {
        const result = this.api.getOffersWithHttpInfo(companySlug, page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Returns all offers for given company
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     */
    public getOffers(companySlug: string, page?: number, pageSize?: number, _options?: Configuration): Promise<Array<Offer>> {
        const result = this.api.getOffers(companySlug, page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Updates offer draft with provided id. 
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param invoiceishDraftRequest 
     */
    public updateOfferDraftWithHttpInfo(companySlug: string, draftId: number, invoiceishDraftRequest: InvoiceishDraftRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.updateOfferDraftWithHttpInfo(companySlug, draftId, invoiceishDraftRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates offer draft with provided id. 
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param invoiceishDraftRequest 
     */
    public updateOfferDraft(companySlug: string, draftId: number, invoiceishDraftRequest: InvoiceishDraftRequest, _options?: Configuration): Promise<void> {
        const result = this.api.updateOfferDraft(companySlug, draftId, invoiceishDraftRequest, _options);
        return result.toPromise();
    }


}



import { ObservableOrderConfirmationsApi } from './ObservableAPI';

import { OrderConfirmationsApiRequestFactory, OrderConfirmationsApiResponseProcessor} from "../apis/OrderConfirmationsApi";
export class PromiseOrderConfirmationsApi {
    private api: ObservableOrderConfirmationsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: OrderConfirmationsApiRequestFactory,
        responseProcessor?: OrderConfirmationsApiResponseProcessor
    ) {
        this.api = new ObservableOrderConfirmationsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates and adds a new attachment to an order confirmation draft
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param filename Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param comment Not required.
     * @param file 
     */
    public addAttachmentToOrderConfirmationDraftWithHttpInfo(companySlug: string, draftId: number, filename?: string, comment?: string, file?: HttpFile, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.addAttachmentToOrderConfirmationDraftWithHttpInfo(companySlug, draftId, filename, comment, file, _options);
        return result.toPromise();
    }

    /**
     * Creates and adds a new attachment to an order confirmation draft
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param filename Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param comment Not required.
     * @param file 
     */
    public addAttachmentToOrderConfirmationDraft(companySlug: string, draftId: number, filename?: string, comment?: string, file?: HttpFile, _options?: Configuration): Promise<void> {
        const result = this.api.addAttachmentToOrderConfirmationDraft(companySlug, draftId, filename, comment, file, _options);
        return result.toPromise();
    }

    /**
     * Creates an invoice draft from an order confirmation
     * @param companySlug Slug of company to retrieve
     * @param confirmationId The confirmationId (primary key of the returned object) is returned as the first field in the GET all order confirmations call 
     */
    public createInvoiceDraftFromOrderConfirmationWithHttpInfo(companySlug: string, confirmationId: string, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createInvoiceDraftFromOrderConfirmationWithHttpInfo(companySlug, confirmationId, _options);
        return result.toPromise();
    }

    /**
     * Creates an invoice draft from an order confirmation
     * @param companySlug Slug of company to retrieve
     * @param confirmationId The confirmationId (primary key of the returned object) is returned as the first field in the GET all order confirmations call 
     */
    public createInvoiceDraftFromOrderConfirmation(companySlug: string, confirmationId: string, _options?: Configuration): Promise<void> {
        const result = this.api.createInvoiceDraftFromOrderConfirmation(companySlug, confirmationId, _options);
        return result.toPromise();
    }

    /**
     * Creates the first order confirmation number which is then increased by one with every new order confirmation. By sending an empty request body the default is base number (the first order confirmation number will thus be 10001), but can be specified to another starting value.
     * @param companySlug Slug of company to retrieve
     * @param counter 
     */
    public createOrderConfirmationCounterWithHttpInfo(companySlug: string, counter?: Counter, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createOrderConfirmationCounterWithHttpInfo(companySlug, counter, _options);
        return result.toPromise();
    }

    /**
     * Creates the first order confirmation number which is then increased by one with every new order confirmation. By sending an empty request body the default is base number (the first order confirmation number will thus be 10001), but can be specified to another starting value.
     * @param companySlug Slug of company to retrieve
     * @param counter 
     */
    public createOrderConfirmationCounter(companySlug: string, counter?: Counter, _options?: Configuration): Promise<void> {
        const result = this.api.createOrderConfirmationCounter(companySlug, counter, _options);
        return result.toPromise();
    }

    /**
     * Creates an order confirmation draft.
     * @param companySlug Slug of company to retrieve
     * @param invoiceishDraftRequest 
     */
    public createOrderConfirmationDraftWithHttpInfo(companySlug: string, invoiceishDraftRequest: InvoiceishDraftRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createOrderConfirmationDraftWithHttpInfo(companySlug, invoiceishDraftRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates an order confirmation draft.
     * @param companySlug Slug of company to retrieve
     * @param invoiceishDraftRequest 
     */
    public createOrderConfirmationDraft(companySlug: string, invoiceishDraftRequest: InvoiceishDraftRequest, _options?: Configuration): Promise<void> {
        const result = this.api.createOrderConfirmationDraft(companySlug, invoiceishDraftRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates an order confirmation from an already created draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public createOrderConfirmationFromDraftWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createOrderConfirmationFromDraftWithHttpInfo(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Creates an order confirmation from an already created draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public createOrderConfirmationFromDraft(companySlug: string, draftId: number, _options?: Configuration): Promise<void> {
        const result = this.api.createOrderConfirmationFromDraft(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Delete order confirmation draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public deleteOrderConfirmationDraftWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteOrderConfirmationDraftWithHttpInfo(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Delete order confirmation draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public deleteOrderConfirmationDraft(companySlug: string, draftId: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteOrderConfirmationDraft(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Returns order confirmation with specified id.
     * @param companySlug Slug of company to retrieve
     * @param confirmationId The confirmationId (primary key of the returned object) is returned as the first field in the GET all order confirmations call 
     */
    public getOrderConfirmationWithHttpInfo(companySlug: string, confirmationId: string, _options?: Configuration): Promise<HttpInfo<OrderConfirmation>> {
        const result = this.api.getOrderConfirmationWithHttpInfo(companySlug, confirmationId, _options);
        return result.toPromise();
    }

    /**
     * Returns order confirmation with specified id.
     * @param companySlug Slug of company to retrieve
     * @param confirmationId The confirmationId (primary key of the returned object) is returned as the first field in the GET all order confirmations call 
     */
    public getOrderConfirmation(companySlug: string, confirmationId: string, _options?: Configuration): Promise<OrderConfirmation> {
        const result = this.api.getOrderConfirmation(companySlug, confirmationId, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the counter for order confirmations if it has been created 
     * @param companySlug Slug of company to retrieve
     */
    public getOrderConfirmationCounterWithHttpInfo(companySlug: string, _options?: Configuration): Promise<HttpInfo<Counter>> {
        const result = this.api.getOrderConfirmationCounterWithHttpInfo(companySlug, _options);
        return result.toPromise();
    }

    /**
     * Retrieves the counter for order confirmations if it has been created 
     * @param companySlug Slug of company to retrieve
     */
    public getOrderConfirmationCounter(companySlug: string, _options?: Configuration): Promise<Counter> {
        const result = this.api.getOrderConfirmationCounter(companySlug, _options);
        return result.toPromise();
    }

    /**
     * Returns order confirmation draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getOrderConfirmationDraftWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Promise<HttpInfo<InvoiceishDraftResult>> {
        const result = this.api.getOrderConfirmationDraftWithHttpInfo(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Returns order confirmation draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getOrderConfirmationDraft(companySlug: string, draftId: number, _options?: Configuration): Promise<InvoiceishDraftResult> {
        const result = this.api.getOrderConfirmationDraft(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Returns all attachments for specified draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getOrderConfirmationDraftAttachmentsWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Promise<HttpInfo<Array<Attachment>>> {
        const result = this.api.getOrderConfirmationDraftAttachmentsWithHttpInfo(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Returns all attachments for specified draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getOrderConfirmationDraftAttachments(companySlug: string, draftId: number, _options?: Configuration): Promise<Array<Attachment>> {
        const result = this.api.getOrderConfirmationDraftAttachments(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Returns all order confirmation drafts for given company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     */
    public getOrderConfirmationDraftsWithHttpInfo(companySlug: string, page?: number, pageSize?: number, _options?: Configuration): Promise<HttpInfo<Array<InvoiceishDraftResult>>> {
        const result = this.api.getOrderConfirmationDraftsWithHttpInfo(companySlug, page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Returns all order confirmation drafts for given company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     */
    public getOrderConfirmationDrafts(companySlug: string, page?: number, pageSize?: number, _options?: Configuration): Promise<Array<InvoiceishDraftResult>> {
        const result = this.api.getOrderConfirmationDrafts(companySlug, page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Returns all order confirmations for given company
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     */
    public getOrderConfirmationsWithHttpInfo(companySlug: string, page?: number, pageSize?: number, _options?: Configuration): Promise<HttpInfo<Array<OrderConfirmation>>> {
        const result = this.api.getOrderConfirmationsWithHttpInfo(companySlug, page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Returns all order confirmations for given company
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     */
    public getOrderConfirmations(companySlug: string, page?: number, pageSize?: number, _options?: Configuration): Promise<Array<OrderConfirmation>> {
        const result = this.api.getOrderConfirmations(companySlug, page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Updates order confirmation draft with provided id. 
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param invoiceishDraftRequest 
     */
    public updateOrderConfirmationDraftWithHttpInfo(companySlug: string, draftId: number, invoiceishDraftRequest: InvoiceishDraftRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.updateOrderConfirmationDraftWithHttpInfo(companySlug, draftId, invoiceishDraftRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates order confirmation draft with provided id. 
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param invoiceishDraftRequest 
     */
    public updateOrderConfirmationDraft(companySlug: string, draftId: number, invoiceishDraftRequest: InvoiceishDraftRequest, _options?: Configuration): Promise<void> {
        const result = this.api.updateOrderConfirmationDraft(companySlug, draftId, invoiceishDraftRequest, _options);
        return result.toPromise();
    }


}



import { ObservableProductsApi } from './ObservableAPI';

import { ProductsApiRequestFactory, ProductsApiResponseProcessor} from "../apis/ProductsApi";
export class PromiseProductsApi {
    private api: ObservableProductsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductsApiRequestFactory,
        responseProcessor?: ProductsApiResponseProcessor
    ) {
        this.api = new ObservableProductsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new product.
     * @param companySlug Slug of company to retrieve
     * @param product 
     */
    public createProductWithHttpInfo(companySlug: string, product: Product, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createProductWithHttpInfo(companySlug, product, _options);
        return result.toPromise();
    }

    /**
     * Creates a new product.
     * @param companySlug Slug of company to retrieve
     * @param product 
     */
    public createProduct(companySlug: string, product: Product, _options?: Configuration): Promise<void> {
        const result = this.api.createProduct(companySlug, product, _options);
        return result.toPromise();
    }

    /**
     * Creates a report based on provided specifications.
     * @param companySlug Slug of company to retrieve
     * @param productSalesReportRequest 
     */
    public createProductSalesReportWithHttpInfo(companySlug: string, productSalesReportRequest: ProductSalesReportRequest, _options?: Configuration): Promise<HttpInfo<Array<ProductSalesReportResult>>> {
        const result = this.api.createProductSalesReportWithHttpInfo(companySlug, productSalesReportRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a report based on provided specifications.
     * @param companySlug Slug of company to retrieve
     * @param productSalesReportRequest 
     */
    public createProductSalesReport(companySlug: string, productSalesReportRequest: ProductSalesReportRequest, _options?: Configuration): Promise<Array<ProductSalesReportResult>> {
        const result = this.api.createProductSalesReport(companySlug, productSalesReportRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete product with specified id.
     * @param companySlug Slug of company to retrieve
     * @param productId The productId (primary key of the returned object) is returned in the GET all products call; not to be confused with productNumber. 
     */
    public deleteProductWithHttpInfo(companySlug: string, productId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteProductWithHttpInfo(companySlug, productId, _options);
        return result.toPromise();
    }

    /**
     * Delete product with specified id.
     * @param companySlug Slug of company to retrieve
     * @param productId The productId (primary key of the returned object) is returned in the GET all products call; not to be confused with productNumber. 
     */
    public deleteProduct(companySlug: string, productId: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteProduct(companySlug, productId, _options);
        return result.toPromise();
    }

    /**
     * Returns product with specified id.
     * @param companySlug Slug of company to retrieve
     * @param productId The productId (primary key of the returned object) is returned in the GET all products call; not to be confused with productNumber. 
     */
    public getProductWithHttpInfo(companySlug: string, productId: number, _options?: Configuration): Promise<HttpInfo<Product>> {
        const result = this.api.getProductWithHttpInfo(companySlug, productId, _options);
        return result.toPromise();
    }

    /**
     * Returns product with specified id.
     * @param companySlug Slug of company to retrieve
     * @param productId The productId (primary key of the returned object) is returned in the GET all products call; not to be confused with productNumber. 
     */
    public getProduct(companySlug: string, productId: number, _options?: Configuration): Promise<Product> {
        const result = this.api.getProduct(companySlug, productId, _options);
        return result.toPromise();
    }

    /**
     * Returns all products for given company
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @param createdDate Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDateLe Returns results that were created before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDateLt Returns results that were created strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDateGe Returns results that were created after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDateGt Returns results that were created strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModified Filter based on date of last modification. Returns results that were last modified on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedLe Returns results that have been last modified before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedLt Returns results that have been last modified strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedGe Returns results that have been last modified after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedGt Returns results that have been last modified strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param name Find all results with product name equal to the specified parameter.
     * @param productNumber Find all results with product number (varenummer) equal to the specified parameter.
     * @param active Returns active (true) or inactive (false) products.
     */
    public getProductsWithHttpInfo(companySlug: string, page?: number, pageSize?: number, createdDate?: string, createdDateLe?: string, createdDateLt?: string, createdDateGe?: string, createdDateGt?: string, lastModified?: string, lastModifiedLe?: string, lastModifiedLt?: string, lastModifiedGe?: string, lastModifiedGt?: string, name?: string, productNumber?: string, active?: boolean, _options?: Configuration): Promise<HttpInfo<Array<Product>>> {
        const result = this.api.getProductsWithHttpInfo(companySlug, page, pageSize, createdDate, createdDateLe, createdDateLt, createdDateGe, createdDateGt, lastModified, lastModifiedLe, lastModifiedLt, lastModifiedGe, lastModifiedGt, name, productNumber, active, _options);
        return result.toPromise();
    }

    /**
     * Returns all products for given company
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @param createdDate Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDateLe Returns results that were created before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDateLt Returns results that were created strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDateGe Returns results that were created after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDateGt Returns results that were created strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModified Filter based on date of last modification. Returns results that were last modified on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedLe Returns results that have been last modified before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedLt Returns results that have been last modified strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedGe Returns results that have been last modified after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedGt Returns results that have been last modified strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param name Find all results with product name equal to the specified parameter.
     * @param productNumber Find all results with product number (varenummer) equal to the specified parameter.
     * @param active Returns active (true) or inactive (false) products.
     */
    public getProducts(companySlug: string, page?: number, pageSize?: number, createdDate?: string, createdDateLe?: string, createdDateLt?: string, createdDateGe?: string, createdDateGt?: string, lastModified?: string, lastModifiedLe?: string, lastModifiedLt?: string, lastModifiedGe?: string, lastModifiedGt?: string, name?: string, productNumber?: string, active?: boolean, _options?: Configuration): Promise<Array<Product>> {
        const result = this.api.getProducts(companySlug, page, pageSize, createdDate, createdDateLe, createdDateLt, createdDateGe, createdDateGt, lastModified, lastModifiedLe, lastModifiedLt, lastModifiedGe, lastModifiedGt, name, productNumber, active, _options);
        return result.toPromise();
    }

    /**
     * Updates an existing product.
     * @param companySlug Slug of company to retrieve
     * @param productId The productId (primary key of the returned object) is returned in the GET all products call; not to be confused with productNumber. 
     * @param product 
     */
    public updateProductWithHttpInfo(companySlug: string, productId: number, product: Product, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.updateProductWithHttpInfo(companySlug, productId, product, _options);
        return result.toPromise();
    }

    /**
     * Updates an existing product.
     * @param companySlug Slug of company to retrieve
     * @param productId The productId (primary key of the returned object) is returned in the GET all products call; not to be confused with productNumber. 
     * @param product 
     */
    public updateProduct(companySlug: string, productId: number, product: Product, _options?: Configuration): Promise<void> {
        const result = this.api.updateProduct(companySlug, productId, product, _options);
        return result.toPromise();
    }


}



import { ObservableProjectsApi } from './ObservableAPI';

import { ProjectsApiRequestFactory, ProjectsApiResponseProcessor} from "../apis/ProjectsApi";
export class PromiseProjectsApi {
    private api: ObservableProjectsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: ProjectsApiRequestFactory,
        responseProcessor?: ProjectsApiResponseProcessor
    ) {
        this.api = new ObservableProjectsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates a new project
     * @param companySlug Slug of company to retrieve
     * @param projectRequest 
     */
    public createProjectWithHttpInfo(companySlug: string, projectRequest: ProjectRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createProjectWithHttpInfo(companySlug, projectRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a new project
     * @param companySlug Slug of company to retrieve
     * @param projectRequest 
     */
    public createProject(companySlug: string, projectRequest: ProjectRequest, _options?: Configuration): Promise<void> {
        const result = this.api.createProject(companySlug, projectRequest, _options);
        return result.toPromise();
    }

    /**
     * Delete project with specified id.
     * @param companySlug Slug of company to retrieve
     * @param projectId 
     */
    public deleteProjectWithHttpInfo(companySlug: string, projectId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteProjectWithHttpInfo(companySlug, projectId, _options);
        return result.toPromise();
    }

    /**
     * Delete project with specified id.
     * @param companySlug Slug of company to retrieve
     * @param projectId 
     */
    public deleteProject(companySlug: string, projectId: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteProject(companySlug, projectId, _options);
        return result.toPromise();
    }

    /**
     * Returns project with specified id.
     * @param companySlug Slug of company to retrieve
     * @param projectId 
     */
    public getProjectWithHttpInfo(companySlug: string, projectId: number, _options?: Configuration): Promise<HttpInfo<ProjectResult>> {
        const result = this.api.getProjectWithHttpInfo(companySlug, projectId, _options);
        return result.toPromise();
    }

    /**
     * Returns project with specified id.
     * @param companySlug Slug of company to retrieve
     * @param projectId 
     */
    public getProject(companySlug: string, projectId: number, _options?: Configuration): Promise<ProjectResult> {
        const result = this.api.getProject(companySlug, projectId, _options);
        return result.toPromise();
    }

    /**
     * Returns all projects for given company
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @param completed Filter results based on completed / not completed.
     * @param name Filter results based on name of the project.
     * @param number Filter results based on number of the project.
     */
    public getProjectsWithHttpInfo(companySlug: string, page?: number, pageSize?: number, completed?: boolean, name?: string, number?: string, _options?: Configuration): Promise<HttpInfo<Array<ProjectResult>>> {
        const result = this.api.getProjectsWithHttpInfo(companySlug, page, pageSize, completed, name, number, _options);
        return result.toPromise();
    }

    /**
     * Returns all projects for given company
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @param completed Filter results based on completed / not completed.
     * @param name Filter results based on name of the project.
     * @param number Filter results based on number of the project.
     */
    public getProjects(companySlug: string, page?: number, pageSize?: number, completed?: boolean, name?: string, number?: string, _options?: Configuration): Promise<Array<ProjectResult>> {
        const result = this.api.getProjects(companySlug, page, pageSize, completed, name, number, _options);
        return result.toPromise();
    }

    /**
     * Updates project with provided id. 
     * @param companySlug Slug of company to retrieve
     * @param projectId 
     * @param updateProjectRequest 
     */
    public updateProjectWithHttpInfo(companySlug: string, projectId: number, updateProjectRequest: UpdateProjectRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.updateProjectWithHttpInfo(companySlug, projectId, updateProjectRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates project with provided id. 
     * @param companySlug Slug of company to retrieve
     * @param projectId 
     * @param updateProjectRequest 
     */
    public updateProject(companySlug: string, projectId: number, updateProjectRequest: UpdateProjectRequest, _options?: Configuration): Promise<void> {
        const result = this.api.updateProject(companySlug, projectId, updateProjectRequest, _options);
        return result.toPromise();
    }


}



import { ObservablePurchasesApi } from './ObservableAPI';

import { PurchasesApiRequestFactory, PurchasesApiResponseProcessor} from "../apis/PurchasesApi";
export class PromisePurchasesApi {
    private api: ObservablePurchasesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: PurchasesApiRequestFactory,
        responseProcessor?: PurchasesApiResponseProcessor
    ) {
        this.api = new ObservablePurchasesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates and adds a new attachment to a Purchase
     * @param companySlug Slug of company to retrieve
     * @param purchaseId 
     * @param filename The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param attachToPayment True if this attachment may document the payment (i.e. transaction receipt from credit card/payment company, export from bank, etc.). Default value is false if not specified. At least one of attachToPayment and attachToSale must be true.
     * @param attachToSale True if this attachment may document the sale (i.e. invoice, etc). Default value is false if not specified. At least one of attachToPayment and attachToSale must be true.
     * @param file 
     */
    public addAttachmentToPurchaseWithHttpInfo(companySlug: string, purchaseId: number, filename?: string, attachToPayment?: boolean, attachToSale?: boolean, file?: HttpFile, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.addAttachmentToPurchaseWithHttpInfo(companySlug, purchaseId, filename, attachToPayment, attachToSale, file, _options);
        return result.toPromise();
    }

    /**
     * Creates and adds a new attachment to a Purchase
     * @param companySlug Slug of company to retrieve
     * @param purchaseId 
     * @param filename The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param attachToPayment True if this attachment may document the payment (i.e. transaction receipt from credit card/payment company, export from bank, etc.). Default value is false if not specified. At least one of attachToPayment and attachToSale must be true.
     * @param attachToSale True if this attachment may document the sale (i.e. invoice, etc). Default value is false if not specified. At least one of attachToPayment and attachToSale must be true.
     * @param file 
     */
    public addAttachmentToPurchase(companySlug: string, purchaseId: number, filename?: string, attachToPayment?: boolean, attachToSale?: boolean, file?: HttpFile, _options?: Configuration): Promise<void> {
        const result = this.api.addAttachmentToPurchase(companySlug, purchaseId, filename, attachToPayment, attachToSale, file, _options);
        return result.toPromise();
    }

    /**
     * Creates and adds a new attachment to a draft
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param filename Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param file 
     */
    public addAttachmentToPurchaseDraftWithHttpInfo(companySlug: string, draftId: number, filename?: string, file?: HttpFile, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.addAttachmentToPurchaseDraftWithHttpInfo(companySlug, draftId, filename, file, _options);
        return result.toPromise();
    }

    /**
     * Creates and adds a new attachment to a draft
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param filename Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param file 
     */
    public addAttachmentToPurchaseDraft(companySlug: string, draftId: number, filename?: string, file?: HttpFile, _options?: Configuration): Promise<void> {
        const result = this.api.addAttachmentToPurchaseDraft(companySlug, draftId, filename, file, _options);
        return result.toPromise();
    }

    /**
     * Creates a new purchase.
     * @param companySlug Slug of company to retrieve
     * @param purchaseRequest 
     */
    public createPurchaseWithHttpInfo(companySlug: string, purchaseRequest: PurchaseRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createPurchaseWithHttpInfo(companySlug, purchaseRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a new purchase.
     * @param companySlug Slug of company to retrieve
     * @param purchaseRequest 
     */
    public createPurchase(companySlug: string, purchaseRequest: PurchaseRequest, _options?: Configuration): Promise<void> {
        const result = this.api.createPurchase(companySlug, purchaseRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a purchase draft.
     * @param companySlug Slug of company to retrieve
     * @param draftRequest 
     */
    public createPurchaseDraftWithHttpInfo(companySlug: string, draftRequest: DraftRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createPurchaseDraftWithHttpInfo(companySlug, draftRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a purchase draft.
     * @param companySlug Slug of company to retrieve
     * @param draftRequest 
     */
    public createPurchaseDraft(companySlug: string, draftRequest: DraftRequest, _options?: Configuration): Promise<void> {
        const result = this.api.createPurchaseDraft(companySlug, draftRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a purchase from an already created draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public createPurchaseFromDraftWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createPurchaseFromDraftWithHttpInfo(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Creates a purchase from an already created draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public createPurchaseFromDraft(companySlug: string, draftId: number, _options?: Configuration): Promise<void> {
        const result = this.api.createPurchaseFromDraft(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Creates a new payment for a purchase
     * @param companySlug Slug of company to retrieve
     * @param purchaseId 
     * @param payment 
     */
    public createPurchasePaymentWithHttpInfo(companySlug: string, purchaseId: number, payment: Payment, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createPurchasePaymentWithHttpInfo(companySlug, purchaseId, payment, _options);
        return result.toPromise();
    }

    /**
     * Creates a new payment for a purchase
     * @param companySlug Slug of company to retrieve
     * @param purchaseId 
     * @param payment 
     */
    public createPurchasePayment(companySlug: string, purchaseId: number, payment: Payment, _options?: Configuration): Promise<void> {
        const result = this.api.createPurchasePayment(companySlug, purchaseId, payment, _options);
        return result.toPromise();
    }

    /**
     * Sets the deleted flag for a purchase. The purchase is not deleted, but a reverse transaction is created and the \"deleted\" property is set to true.
     * @param companySlug Slug of company to retrieve
     * @param purchaseId 
     * @param description Required description for deleting the purchase
     */
    public deletePurchaseWithHttpInfo(companySlug: string, purchaseId: number, description: string, _options?: Configuration): Promise<HttpInfo<PurchaseResult>> {
        const result = this.api.deletePurchaseWithHttpInfo(companySlug, purchaseId, description, _options);
        return result.toPromise();
    }

    /**
     * Sets the deleted flag for a purchase. The purchase is not deleted, but a reverse transaction is created and the \"deleted\" property is set to true.
     * @param companySlug Slug of company to retrieve
     * @param purchaseId 
     * @param description Required description for deleting the purchase
     */
    public deletePurchase(companySlug: string, purchaseId: number, description: string, _options?: Configuration): Promise<PurchaseResult> {
        const result = this.api.deletePurchase(companySlug, purchaseId, description, _options);
        return result.toPromise();
    }

    /**
     * Delete draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public deletePurchaseDraftWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deletePurchaseDraftWithHttpInfo(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Delete draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public deletePurchaseDraft(companySlug: string, draftId: number, _options?: Configuration): Promise<void> {
        const result = this.api.deletePurchaseDraft(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Returns purchase with specified id.
     * @param companySlug Slug of company to retrieve
     * @param purchaseId 
     */
    public getPurchaseWithHttpInfo(companySlug: string, purchaseId: number, _options?: Configuration): Promise<HttpInfo<PurchaseResult>> {
        const result = this.api.getPurchaseWithHttpInfo(companySlug, purchaseId, _options);
        return result.toPromise();
    }

    /**
     * Returns purchase with specified id.
     * @param companySlug Slug of company to retrieve
     * @param purchaseId 
     */
    public getPurchase(companySlug: string, purchaseId: number, _options?: Configuration): Promise<PurchaseResult> {
        const result = this.api.getPurchase(companySlug, purchaseId, _options);
        return result.toPromise();
    }

    /**
     * Returns all attachments for specified purchase.
     * @param companySlug Slug of company to retrieve
     * @param purchaseId 
     */
    public getPurchaseAttachmentsWithHttpInfo(companySlug: string, purchaseId: number, _options?: Configuration): Promise<HttpInfo<Array<Attachment>>> {
        const result = this.api.getPurchaseAttachmentsWithHttpInfo(companySlug, purchaseId, _options);
        return result.toPromise();
    }

    /**
     * Returns all attachments for specified purchase.
     * @param companySlug Slug of company to retrieve
     * @param purchaseId 
     */
    public getPurchaseAttachments(companySlug: string, purchaseId: number, _options?: Configuration): Promise<Array<Attachment>> {
        const result = this.api.getPurchaseAttachments(companySlug, purchaseId, _options);
        return result.toPromise();
    }

    /**
     * Returns draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getPurchaseDraftWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Promise<HttpInfo<DraftResult>> {
        const result = this.api.getPurchaseDraftWithHttpInfo(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Returns draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getPurchaseDraft(companySlug: string, draftId: number, _options?: Configuration): Promise<DraftResult> {
        const result = this.api.getPurchaseDraft(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Returns all attachments for specified draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getPurchaseDraftAttachmentsWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Promise<HttpInfo<Array<Attachment>>> {
        const result = this.api.getPurchaseDraftAttachmentsWithHttpInfo(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Returns all attachments for specified draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getPurchaseDraftAttachments(companySlug: string, draftId: number, _options?: Configuration): Promise<Array<Attachment>> {
        const result = this.api.getPurchaseDraftAttachments(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Returns all purchase drafts for given company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     */
    public getPurchaseDraftsWithHttpInfo(companySlug: string, page?: number, pageSize?: number, _options?: Configuration): Promise<HttpInfo<Array<DraftResult>>> {
        const result = this.api.getPurchaseDraftsWithHttpInfo(companySlug, page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Returns all purchase drafts for given company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     */
    public getPurchaseDrafts(companySlug: string, page?: number, pageSize?: number, _options?: Configuration): Promise<Array<DraftResult>> {
        const result = this.api.getPurchaseDrafts(companySlug, page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Returns given payment for specified purchase
     * @param companySlug Slug of company to retrieve
     * @param purchaseId 
     * @param paymentId 
     */
    public getPurchasePaymentWithHttpInfo(companySlug: string, purchaseId: number, paymentId: number, _options?: Configuration): Promise<HttpInfo<Payment>> {
        const result = this.api.getPurchasePaymentWithHttpInfo(companySlug, purchaseId, paymentId, _options);
        return result.toPromise();
    }

    /**
     * Returns given payment for specified purchase
     * @param companySlug Slug of company to retrieve
     * @param purchaseId 
     * @param paymentId 
     */
    public getPurchasePayment(companySlug: string, purchaseId: number, paymentId: number, _options?: Configuration): Promise<Payment> {
        const result = this.api.getPurchasePayment(companySlug, purchaseId, paymentId, _options);
        return result.toPromise();
    }

    /**
     * Returns all purchases for given company
     * @param companySlug Slug of company to retrieve
     * @param purchaseId 
     */
    public getPurchasePaymentsWithHttpInfo(companySlug: string, purchaseId: number, _options?: Configuration): Promise<HttpInfo<Array<Payment>>> {
        const result = this.api.getPurchasePaymentsWithHttpInfo(companySlug, purchaseId, _options);
        return result.toPromise();
    }

    /**
     * Returns all purchases for given company
     * @param companySlug Slug of company to retrieve
     * @param purchaseId 
     */
    public getPurchasePayments(companySlug: string, purchaseId: number, _options?: Configuration): Promise<Array<Payment>> {
        const result = this.api.getPurchasePayments(companySlug, purchaseId, _options);
        return result.toPromise();
    }

    /**
     * Returns all purchases for given company
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @param date Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param dateLe Filter based on date less than or equal to parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param dateLt Filter based on date strictly less than parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param dateGe Filter based on date greater than or equal to parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param dateGt Filter based on date strictly greater than parameter value Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param sortBy Sorts results in either ascending (asc) or descending (desc) order based on the parameter value.
     * @param paid When set to true, returns only purchases that have been paid. Otherwise false returns all purchases that have not been fully settled. 
     */
    public getPurchasesWithHttpInfo(companySlug: string, page?: number, pageSize?: number, date?: string, dateLe?: string, dateLt?: string, dateGe?: string, dateGt?: string, sortBy?: 'date asc' | 'date desc', paid?: boolean, _options?: Configuration): Promise<HttpInfo<Array<PurchaseResult>>> {
        const result = this.api.getPurchasesWithHttpInfo(companySlug, page, pageSize, date, dateLe, dateLt, dateGe, dateGt, sortBy, paid, _options);
        return result.toPromise();
    }

    /**
     * Returns all purchases for given company
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @param date Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param dateLe Filter based on date less than or equal to parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param dateLt Filter based on date strictly less than parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param dateGe Filter based on date greater than or equal to parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param dateGt Filter based on date strictly greater than parameter value Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param sortBy Sorts results in either ascending (asc) or descending (desc) order based on the parameter value.
     * @param paid When set to true, returns only purchases that have been paid. Otherwise false returns all purchases that have not been fully settled. 
     */
    public getPurchases(companySlug: string, page?: number, pageSize?: number, date?: string, dateLe?: string, dateLt?: string, dateGe?: string, dateGt?: string, sortBy?: 'date asc' | 'date desc', paid?: boolean, _options?: Configuration): Promise<Array<PurchaseResult>> {
        const result = this.api.getPurchases(companySlug, page, pageSize, date, dateLe, dateLt, dateGe, dateGt, sortBy, paid, _options);
        return result.toPromise();
    }

    /**
     * Updates draft with provided id. 
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param draftRequest 
     */
    public updatePurchaseDraftWithHttpInfo(companySlug: string, draftId: number, draftRequest: DraftRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.updatePurchaseDraftWithHttpInfo(companySlug, draftId, draftRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates draft with provided id. 
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param draftRequest 
     */
    public updatePurchaseDraft(companySlug: string, draftId: number, draftRequest: DraftRequest, _options?: Configuration): Promise<void> {
        const result = this.api.updatePurchaseDraft(companySlug, draftId, draftRequest, _options);
        return result.toPromise();
    }


}



import { ObservableSalesApi } from './ObservableAPI';

import { SalesApiRequestFactory, SalesApiResponseProcessor} from "../apis/SalesApi";
export class PromiseSalesApi {
    private api: ObservableSalesApi

    public constructor(
        configuration: Configuration,
        requestFactory?: SalesApiRequestFactory,
        responseProcessor?: SalesApiResponseProcessor
    ) {
        this.api = new ObservableSalesApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Creates and adds a new attachment to a Sale
     * @param companySlug Slug of company to retrieve
     * @param saleId 
     * @param filename The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param attachToPayment True if this attachment may document the payment (i.e. transaction receipt from credit card/payment company, export from bank, etc.). Default value is false if not specified. At least one of attachToPayment and attachToSale must be true.
     * @param attachToSale True if this attachment may document the sale (i.e. invoice, etc). Default value is false if not specified. At least one of attachToPayment and attachToSale must be true.
     * @param file 
     */
    public addAttachmentToSaleWithHttpInfo(companySlug: string, saleId: number, filename?: string, attachToPayment?: boolean, attachToSale?: boolean, file?: HttpFile, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.addAttachmentToSaleWithHttpInfo(companySlug, saleId, filename, attachToPayment, attachToSale, file, _options);
        return result.toPromise();
    }

    /**
     * Creates and adds a new attachment to a Sale
     * @param companySlug Slug of company to retrieve
     * @param saleId 
     * @param filename The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param attachToPayment True if this attachment may document the payment (i.e. transaction receipt from credit card/payment company, export from bank, etc.). Default value is false if not specified. At least one of attachToPayment and attachToSale must be true.
     * @param attachToSale True if this attachment may document the sale (i.e. invoice, etc). Default value is false if not specified. At least one of attachToPayment and attachToSale must be true.
     * @param file 
     */
    public addAttachmentToSale(companySlug: string, saleId: number, filename?: string, attachToPayment?: boolean, attachToSale?: boolean, file?: HttpFile, _options?: Configuration): Promise<void> {
        const result = this.api.addAttachmentToSale(companySlug, saleId, filename, attachToPayment, attachToSale, file, _options);
        return result.toPromise();
    }

    /**
     * Creates and adds a new attachment to a draft
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param filename Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param file 
     */
    public addAttachmentToSaleDraftWithHttpInfo(companySlug: string, draftId: number, filename?: string, file?: HttpFile, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.addAttachmentToSaleDraftWithHttpInfo(companySlug, draftId, filename, file, _options);
        return result.toPromise();
    }

    /**
     * Creates and adds a new attachment to a draft
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param filename Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param file 
     */
    public addAttachmentToSaleDraft(companySlug: string, draftId: number, filename?: string, file?: HttpFile, _options?: Configuration): Promise<void> {
        const result = this.api.addAttachmentToSaleDraft(companySlug, draftId, filename, file, _options);
        return result.toPromise();
    }

    /**
     * Creates a new sale. This corresponds to \"Annet salg\" in Fiken and should be used when the invoice document and invoice number have been created outside Fiken. Otherwise the invoices-endpoints should be used.
     * @param companySlug Slug of company to retrieve
     * @param saleRequest 
     */
    public createSaleWithHttpInfo(companySlug: string, saleRequest: SaleRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createSaleWithHttpInfo(companySlug, saleRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a new sale. This corresponds to \"Annet salg\" in Fiken and should be used when the invoice document and invoice number have been created outside Fiken. Otherwise the invoices-endpoints should be used.
     * @param companySlug Slug of company to retrieve
     * @param saleRequest 
     */
    public createSale(companySlug: string, saleRequest: SaleRequest, _options?: Configuration): Promise<void> {
        const result = this.api.createSale(companySlug, saleRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a sale draft.
     * @param companySlug Slug of company to retrieve
     * @param draftRequest 
     */
    public createSaleDraftWithHttpInfo(companySlug: string, draftRequest: DraftRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createSaleDraftWithHttpInfo(companySlug, draftRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a sale draft.
     * @param companySlug Slug of company to retrieve
     * @param draftRequest 
     */
    public createSaleDraft(companySlug: string, draftRequest: DraftRequest, _options?: Configuration): Promise<void> {
        const result = this.api.createSaleDraft(companySlug, draftRequest, _options);
        return result.toPromise();
    }

    /**
     * Creates a sale from an already created draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public createSaleFromDraftWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createSaleFromDraftWithHttpInfo(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Creates a sale from an already created draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public createSaleFromDraft(companySlug: string, draftId: number, _options?: Configuration): Promise<void> {
        const result = this.api.createSaleFromDraft(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Creates a new payment for a given sale.
     * @param companySlug Slug of company to retrieve
     * @param saleId 
     * @param payment 
     */
    public createSalePaymentWithHttpInfo(companySlug: string, saleId: number, payment: Payment, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.createSalePaymentWithHttpInfo(companySlug, saleId, payment, _options);
        return result.toPromise();
    }

    /**
     * Creates a new payment for a given sale.
     * @param companySlug Slug of company to retrieve
     * @param saleId 
     * @param payment 
     */
    public createSalePayment(companySlug: string, saleId: number, payment: Payment, _options?: Configuration): Promise<void> {
        const result = this.api.createSalePayment(companySlug, saleId, payment, _options);
        return result.toPromise();
    }

    /**
     * Sets the deleted flag for a sale. The sale is not deleted, but a reverse transaction is created and the \"deleted\" property is set to true.
     * @param companySlug Slug of company to retrieve
     * @param saleId 
     * @param description Required description for deleting the sale
     */
    public deleteSaleWithHttpInfo(companySlug: string, saleId: number, description: string, _options?: Configuration): Promise<HttpInfo<SaleResult>> {
        const result = this.api.deleteSaleWithHttpInfo(companySlug, saleId, description, _options);
        return result.toPromise();
    }

    /**
     * Sets the deleted flag for a sale. The sale is not deleted, but a reverse transaction is created and the \"deleted\" property is set to true.
     * @param companySlug Slug of company to retrieve
     * @param saleId 
     * @param description Required description for deleting the sale
     */
    public deleteSale(companySlug: string, saleId: number, description: string, _options?: Configuration): Promise<SaleResult> {
        const result = this.api.deleteSale(companySlug, saleId, description, _options);
        return result.toPromise();
    }

    /**
     * Delete draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public deleteSaleDraftWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.deleteSaleDraftWithHttpInfo(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Delete draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public deleteSaleDraft(companySlug: string, draftId: number, _options?: Configuration): Promise<void> {
        const result = this.api.deleteSaleDraft(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Returns sale with specified id.
     * @param companySlug Slug of company to retrieve
     * @param saleId 
     */
    public getSaleWithHttpInfo(companySlug: string, saleId: number, _options?: Configuration): Promise<HttpInfo<SaleResult>> {
        const result = this.api.getSaleWithHttpInfo(companySlug, saleId, _options);
        return result.toPromise();
    }

    /**
     * Returns sale with specified id.
     * @param companySlug Slug of company to retrieve
     * @param saleId 
     */
    public getSale(companySlug: string, saleId: number, _options?: Configuration): Promise<SaleResult> {
        const result = this.api.getSale(companySlug, saleId, _options);
        return result.toPromise();
    }

    /**
     * Returns all attachments for specified sale.
     * @param companySlug Slug of company to retrieve
     * @param saleId 
     */
    public getSaleAttachmentsWithHttpInfo(companySlug: string, saleId: number, _options?: Configuration): Promise<HttpInfo<Array<Attachment>>> {
        const result = this.api.getSaleAttachmentsWithHttpInfo(companySlug, saleId, _options);
        return result.toPromise();
    }

    /**
     * Returns all attachments for specified sale.
     * @param companySlug Slug of company to retrieve
     * @param saleId 
     */
    public getSaleAttachments(companySlug: string, saleId: number, _options?: Configuration): Promise<Array<Attachment>> {
        const result = this.api.getSaleAttachments(companySlug, saleId, _options);
        return result.toPromise();
    }

    /**
     * Returns draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getSaleDraftWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Promise<HttpInfo<DraftResult>> {
        const result = this.api.getSaleDraftWithHttpInfo(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Returns draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getSaleDraft(companySlug: string, draftId: number, _options?: Configuration): Promise<DraftResult> {
        const result = this.api.getSaleDraft(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Returns all attachments for specified draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getSaleDraftAttachmentsWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Promise<HttpInfo<Array<Attachment>>> {
        const result = this.api.getSaleDraftAttachmentsWithHttpInfo(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Returns all attachments for specified draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getSaleDraftAttachments(companySlug: string, draftId: number, _options?: Configuration): Promise<Array<Attachment>> {
        const result = this.api.getSaleDraftAttachments(companySlug, draftId, _options);
        return result.toPromise();
    }

    /**
     * Returns all sale drafts for given company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     */
    public getSaleDraftsWithHttpInfo(companySlug: string, page?: number, pageSize?: number, _options?: Configuration): Promise<HttpInfo<Array<DraftResult>>> {
        const result = this.api.getSaleDraftsWithHttpInfo(companySlug, page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Returns all sale drafts for given company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     */
    public getSaleDrafts(companySlug: string, page?: number, pageSize?: number, _options?: Configuration): Promise<Array<DraftResult>> {
        const result = this.api.getSaleDrafts(companySlug, page, pageSize, _options);
        return result.toPromise();
    }

    /**
     * Returns payment with specified id.
     * @param companySlug Slug of company to retrieve
     * @param saleId 
     * @param paymentId 
     */
    public getSalePaymentWithHttpInfo(companySlug: string, saleId: number, paymentId: number, _options?: Configuration): Promise<HttpInfo<Payment>> {
        const result = this.api.getSalePaymentWithHttpInfo(companySlug, saleId, paymentId, _options);
        return result.toPromise();
    }

    /**
     * Returns payment with specified id.
     * @param companySlug Slug of company to retrieve
     * @param saleId 
     * @param paymentId 
     */
    public getSalePayment(companySlug: string, saleId: number, paymentId: number, _options?: Configuration): Promise<Payment> {
        const result = this.api.getSalePayment(companySlug, saleId, paymentId, _options);
        return result.toPromise();
    }

    /**
     * Returns all payments for given sale
     * @param companySlug Slug of company to retrieve
     * @param saleId 
     */
    public getSalePaymentsWithHttpInfo(companySlug: string, saleId: number, _options?: Configuration): Promise<HttpInfo<Array<Payment>>> {
        const result = this.api.getSalePaymentsWithHttpInfo(companySlug, saleId, _options);
        return result.toPromise();
    }

    /**
     * Returns all payments for given sale
     * @param companySlug Slug of company to retrieve
     * @param saleId 
     */
    public getSalePayments(companySlug: string, saleId: number, _options?: Configuration): Promise<Array<Payment>> {
        const result = this.api.getSalePayments(companySlug, saleId, _options);
        return result.toPromise();
    }

    /**
     * Returns all sales for given company
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @param date Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param dateLe Filter based on date less than or equal to parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param dateLt Filter based on date strictly less than parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param dateGe Filter based on date greater than or equal to parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param dateGt Filter based on date strictly greater than parameter value Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModified Filter based on date of last modification. Returns results that were last modified on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedLe Returns results that have been last modified before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedLt Returns results that have been last modified strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedGe Returns results that have been last modified after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedGt Returns results that have been last modified strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param saleNumber Find all results with the sale number equal to the specified parameter.
     * @param settled When set to true, returns only sales that have been settled. Otherwise false returns all sales that have not been fully settled. 
     */
    public getSalesWithHttpInfo(companySlug: string, page?: number, pageSize?: number, date?: string, dateLe?: string, dateLt?: string, dateGe?: string, dateGt?: string, lastModified?: string, lastModifiedLe?: string, lastModifiedLt?: string, lastModifiedGe?: string, lastModifiedGt?: string, saleNumber?: string, settled?: boolean, _options?: Configuration): Promise<HttpInfo<Array<SaleResult>>> {
        const result = this.api.getSalesWithHttpInfo(companySlug, page, pageSize, date, dateLe, dateLt, dateGe, dateGt, lastModified, lastModifiedLe, lastModifiedLt, lastModifiedGe, lastModifiedGt, saleNumber, settled, _options);
        return result.toPromise();
    }

    /**
     * Returns all sales for given company
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @param date Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param dateLe Filter based on date less than or equal to parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param dateLt Filter based on date strictly less than parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param dateGe Filter based on date greater than or equal to parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param dateGt Filter based on date strictly greater than parameter value Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModified Filter based on date of last modification. Returns results that were last modified on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedLe Returns results that have been last modified before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedLt Returns results that have been last modified strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedGe Returns results that have been last modified after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedGt Returns results that have been last modified strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param saleNumber Find all results with the sale number equal to the specified parameter.
     * @param settled When set to true, returns only sales that have been settled. Otherwise false returns all sales that have not been fully settled. 
     */
    public getSales(companySlug: string, page?: number, pageSize?: number, date?: string, dateLe?: string, dateLt?: string, dateGe?: string, dateGt?: string, lastModified?: string, lastModifiedLe?: string, lastModifiedLt?: string, lastModifiedGe?: string, lastModifiedGt?: string, saleNumber?: string, settled?: boolean, _options?: Configuration): Promise<Array<SaleResult>> {
        const result = this.api.getSales(companySlug, page, pageSize, date, dateLe, dateLt, dateGe, dateGt, lastModified, lastModifiedLe, lastModifiedLt, lastModifiedGe, lastModifiedGt, saleNumber, settled, _options);
        return result.toPromise();
    }

    /**
     * Marks the sale as settled without payment. This is synonymous with \"sett til oppgjort uten betaling\" in the GUI. It is possible to change the date of settlement by sending a new settledDate.
     * @param companySlug Slug of company to retrieve
     * @param saleId 
     * @param settledDate Date that the sale is settled
     */
    public settledSaleWithHttpInfo(companySlug: string, saleId: number, settledDate: string, _options?: Configuration): Promise<HttpInfo<SaleResult>> {
        const result = this.api.settledSaleWithHttpInfo(companySlug, saleId, settledDate, _options);
        return result.toPromise();
    }

    /**
     * Marks the sale as settled without payment. This is synonymous with \"sett til oppgjort uten betaling\" in the GUI. It is possible to change the date of settlement by sending a new settledDate.
     * @param companySlug Slug of company to retrieve
     * @param saleId 
     * @param settledDate Date that the sale is settled
     */
    public settledSale(companySlug: string, saleId: number, settledDate: string, _options?: Configuration): Promise<SaleResult> {
        const result = this.api.settledSale(companySlug, saleId, settledDate, _options);
        return result.toPromise();
    }

    /**
     * Updates draft with provided id. 
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param draftRequest 
     */
    public updateSaleDraftWithHttpInfo(companySlug: string, draftId: number, draftRequest: DraftRequest, _options?: Configuration): Promise<HttpInfo<void>> {
        const result = this.api.updateSaleDraftWithHttpInfo(companySlug, draftId, draftRequest, _options);
        return result.toPromise();
    }

    /**
     * Updates draft with provided id. 
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param draftRequest 
     */
    public updateSaleDraft(companySlug: string, draftId: number, draftRequest: DraftRequest, _options?: Configuration): Promise<void> {
        const result = this.api.updateSaleDraft(companySlug, draftId, draftRequest, _options);
        return result.toPromise();
    }


}



import { ObservableTransactionsApi } from './ObservableAPI';

import { TransactionsApiRequestFactory, TransactionsApiResponseProcessor} from "../apis/TransactionsApi";
export class PromiseTransactionsApi {
    private api: ObservableTransactionsApi

    public constructor(
        configuration: Configuration,
        requestFactory?: TransactionsApiRequestFactory,
        responseProcessor?: TransactionsApiResponseProcessor
    ) {
        this.api = new ObservableTransactionsApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns given transaction with associated id. Transaction id is returned in GET calls for sales, purchases, and journal entries. 
     * @param companySlug Slug of company to retrieve
     * @param transactionId 
     */
    public getTransactionWithHttpInfo(companySlug: string, transactionId: number, _options?: Configuration): Promise<HttpInfo<Transaction>> {
        const result = this.api.getTransactionWithHttpInfo(companySlug, transactionId, _options);
        return result.toPromise();
    }

    /**
     * Returns given transaction with associated id. Transaction id is returned in GET calls for sales, purchases, and journal entries. 
     * @param companySlug Slug of company to retrieve
     * @param transactionId 
     */
    public getTransaction(companySlug: string, transactionId: number, _options?: Configuration): Promise<Transaction> {
        const result = this.api.getTransaction(companySlug, transactionId, _options);
        return result.toPromise();
    }

    /**
     * Returns all transactions for the specified company
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @param lastModified Filter based on date of last modification. Returns results that were last modified on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedLe Returns results that have been last modified before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedLt Returns results that have been last modified strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedGe Returns results that have been last modified after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedGt Returns results that have been last modified strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDate Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDateLe Returns results that were created before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDateLt Returns results that were created strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDateGe Returns results that were created after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDateGt Returns results that were created strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     */
    public getTransactionsWithHttpInfo(companySlug: string, page?: number, pageSize?: number, lastModified?: string, lastModifiedLe?: string, lastModifiedLt?: string, lastModifiedGe?: string, lastModifiedGt?: string, createdDate?: string, createdDateLe?: string, createdDateLt?: string, createdDateGe?: string, createdDateGt?: string, _options?: Configuration): Promise<HttpInfo<Array<Transaction>>> {
        const result = this.api.getTransactionsWithHttpInfo(companySlug, page, pageSize, lastModified, lastModifiedLe, lastModifiedLt, lastModifiedGe, lastModifiedGt, createdDate, createdDateLe, createdDateLt, createdDateGe, createdDateGt, _options);
        return result.toPromise();
    }

    /**
     * Returns all transactions for the specified company
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @param lastModified Filter based on date of last modification. Returns results that were last modified on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedLe Returns results that have been last modified before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedLt Returns results that have been last modified strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedGe Returns results that have been last modified after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param lastModifiedGt Returns results that have been last modified strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDate Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDateLe Returns results that were created before or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDateLt Returns results that were created strictly before the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDateGe Returns results that were created after or on the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     * @param createdDateGt Returns results that were created strictly after the date provided as a parameter value. Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     */
    public getTransactions(companySlug: string, page?: number, pageSize?: number, lastModified?: string, lastModifiedLe?: string, lastModifiedLt?: string, lastModifiedGe?: string, lastModifiedGt?: string, createdDate?: string, createdDateLe?: string, createdDateLt?: string, createdDateGe?: string, createdDateGt?: string, _options?: Configuration): Promise<Array<Transaction>> {
        const result = this.api.getTransactions(companySlug, page, pageSize, lastModified, lastModifiedLe, lastModifiedLt, lastModifiedGe, lastModifiedGt, createdDate, createdDateLe, createdDateLt, createdDateGe, createdDateGt, _options);
        return result.toPromise();
    }


}



import { ObservableUserApi } from './ObservableAPI';

import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";
export class PromiseUserApi {
    private api: ObservableUserApi

    public constructor(
        configuration: Configuration,
        requestFactory?: UserApiRequestFactory,
        responseProcessor?: UserApiResponseProcessor
    ) {
        this.api = new ObservableUserApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * Returns information about the user
     */
    public getUserWithHttpInfo(_options?: Configuration): Promise<HttpInfo<Userinfo>> {
        const result = this.api.getUserWithHttpInfo(_options);
        return result.toPromise();
    }

    /**
     * Returns information about the user
     */
    public getUser(_options?: Configuration): Promise<Userinfo> {
        const result = this.api.getUser(_options);
        return result.toPromise();
    }


}



