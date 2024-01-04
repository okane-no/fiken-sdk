import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration} from '../configuration'
import { Observable, of, from } from '../rxjsStub';
import {mergeMap, map} from  '../rxjsStub';
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

import { AccountBalancesApiRequestFactory, AccountBalancesApiResponseProcessor} from "../apis/AccountBalancesApi";
export class ObservableAccountBalancesApi {
    private requestFactory: AccountBalancesApiRequestFactory;
    private responseProcessor: AccountBalancesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountBalancesApiRequestFactory,
        responseProcessor?: AccountBalancesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AccountBalancesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AccountBalancesApiResponseProcessor();
    }

    /**
     * Retrieves the specified bookkeping account and balance for a given date.
     * @param companySlug Slug of company to retrieve
     * @param accountCode Code number of the bookkeeping account to retrieve
     * @param date Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     */
    public getAccountBalanceWithHttpInfo(companySlug: string, accountCode: string, date: string, _options?: Configuration): Observable<HttpInfo<AccountBalance>> {
        const requestContextPromise = this.requestFactory.getAccountBalance(companySlug, accountCode, date, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAccountBalanceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the specified bookkeping account and balance for a given date.
     * @param companySlug Slug of company to retrieve
     * @param accountCode Code number of the bookkeeping account to retrieve
     * @param date Dates are represented as strings formatted as YYYY-MM-DD. Example: January 1st, 1970: \&quot;1970-01-01\&quot; 
     */
    public getAccountBalance(companySlug: string, accountCode: string, date: string, _options?: Configuration): Observable<AccountBalance> {
        return this.getAccountBalanceWithHttpInfo(companySlug, accountCode, date, _options).pipe(map((apiResponse: HttpInfo<AccountBalance>) => apiResponse.data));
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
    public getAccountBalancesWithHttpInfo(companySlug: string, date: string, fromAccount?: number, toAccount?: number, page?: number, pageSize?: number, _options?: Configuration): Observable<HttpInfo<Array<AccountBalance>>> {
        const requestContextPromise = this.requestFactory.getAccountBalances(companySlug, date, fromAccount, toAccount, page, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAccountBalancesWithHttpInfo(rsp)));
            }));
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
    public getAccountBalances(companySlug: string, date: string, fromAccount?: number, toAccount?: number, page?: number, pageSize?: number, _options?: Configuration): Observable<Array<AccountBalance>> {
        return this.getAccountBalancesWithHttpInfo(companySlug, date, fromAccount, toAccount, page, pageSize, _options).pipe(map((apiResponse: HttpInfo<Array<AccountBalance>>) => apiResponse.data));
    }

}

import { AccountsApiRequestFactory, AccountsApiResponseProcessor} from "../apis/AccountsApi";
export class ObservableAccountsApi {
    private requestFactory: AccountsApiRequestFactory;
    private responseProcessor: AccountsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: AccountsApiRequestFactory,
        responseProcessor?: AccountsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new AccountsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new AccountsApiResponseProcessor();
    }

    /**
     * Retrieves the specified bookkeping account. An account is a string with either four digits, or four digits, a colon and five digits (\"reskontro\").       Examples:       3020 and 1500:10001 
     * @param companySlug Slug of company to retrieve
     * @param accountCode Code number of the bookkeeping account to retrieve for the current year.
     */
    public getAccountWithHttpInfo(companySlug: string, accountCode: string, _options?: Configuration): Observable<HttpInfo<Account>> {
        const requestContextPromise = this.requestFactory.getAccount(companySlug, accountCode, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAccountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the specified bookkeping account. An account is a string with either four digits, or four digits, a colon and five digits (\"reskontro\").       Examples:       3020 and 1500:10001 
     * @param companySlug Slug of company to retrieve
     * @param accountCode Code number of the bookkeeping account to retrieve for the current year.
     */
    public getAccount(companySlug: string, accountCode: string, _options?: Configuration): Observable<Account> {
        return this.getAccountWithHttpInfo(companySlug, accountCode, _options).pipe(map((apiResponse: HttpInfo<Account>) => apiResponse.data));
    }

    /**
     * Retrieves the bookkeeping accounts for the current year 
     * @param companySlug Slug of company to retrieve
     * @param fromAccount Filter parameter specifying which account numbers to return. Specify using the from and to parameters (excluding subaccount).
     * @param toAccount Filter parameter specifying which account numbers to return. Specify using the from and to parameters (excluding subaccount).
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     */
    public getAccountsWithHttpInfo(companySlug: string, fromAccount?: number, toAccount?: number, page?: number, pageSize?: number, _options?: Configuration): Observable<HttpInfo<Array<Account>>> {
        const requestContextPromise = this.requestFactory.getAccounts(companySlug, fromAccount, toAccount, page, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getAccountsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the bookkeeping accounts for the current year 
     * @param companySlug Slug of company to retrieve
     * @param fromAccount Filter parameter specifying which account numbers to return. Specify using the from and to parameters (excluding subaccount).
     * @param toAccount Filter parameter specifying which account numbers to return. Specify using the from and to parameters (excluding subaccount).
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     */
    public getAccounts(companySlug: string, fromAccount?: number, toAccount?: number, page?: number, pageSize?: number, _options?: Configuration): Observable<Array<Account>> {
        return this.getAccountsWithHttpInfo(companySlug, fromAccount, toAccount, page, pageSize, _options).pipe(map((apiResponse: HttpInfo<Array<Account>>) => apiResponse.data));
    }

}

import { BankAccountsApiRequestFactory, BankAccountsApiResponseProcessor} from "../apis/BankAccountsApi";
export class ObservableBankAccountsApi {
    private requestFactory: BankAccountsApiRequestFactory;
    private responseProcessor: BankAccountsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: BankAccountsApiRequestFactory,
        responseProcessor?: BankAccountsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new BankAccountsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new BankAccountsApiResponseProcessor();
    }

    /**
     * Creates a new bank account. The Location response header returns the URL of the newly created bank account. Possible types of bank accounts are NORMAL, TAX_DEDUCTION, FOREIGN, and CREDIT_CARD. The field \"foreignService\" should only be filled out for accounts of type FOREIGN. 
     * @param companySlug Slug of company to retrieve
     * @param bankAccountRequest 
     */
    public createBankAccountWithHttpInfo(companySlug: string, bankAccountRequest: BankAccountRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createBankAccount(companySlug, bankAccountRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createBankAccountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new bank account. The Location response header returns the URL of the newly created bank account. Possible types of bank accounts are NORMAL, TAX_DEDUCTION, FOREIGN, and CREDIT_CARD. The field \"foreignService\" should only be filled out for accounts of type FOREIGN. 
     * @param companySlug Slug of company to retrieve
     * @param bankAccountRequest 
     */
    public createBankAccount(companySlug: string, bankAccountRequest: BankAccountRequest, _options?: Configuration): Observable<void> {
        return this.createBankAccountWithHttpInfo(companySlug, bankAccountRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves specified bank account.
     * @param companySlug Slug of company to retrieve
     * @param bankAccountId 
     */
    public getBankAccountWithHttpInfo(companySlug: string, bankAccountId: number, _options?: Configuration): Observable<HttpInfo<BankAccountResult>> {
        const requestContextPromise = this.requestFactory.getBankAccount(companySlug, bankAccountId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBankAccountWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves specified bank account.
     * @param companySlug Slug of company to retrieve
     * @param bankAccountId 
     */
    public getBankAccount(companySlug: string, bankAccountId: number, _options?: Configuration): Observable<BankAccountResult> {
        return this.getBankAccountWithHttpInfo(companySlug, bankAccountId, _options).pipe(map((apiResponse: HttpInfo<BankAccountResult>) => apiResponse.data));
    }

    /**
     * Retrieves all bank accounts associated with the company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @param inactive Return all active bank accounts (false) or all inactive bank accounts (true).
     */
    public getBankAccountsWithHttpInfo(companySlug: string, page?: number, pageSize?: number, inactive?: boolean, _options?: Configuration): Observable<HttpInfo<Array<BankAccountResult>>> {
        const requestContextPromise = this.requestFactory.getBankAccounts(companySlug, page, pageSize, inactive, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getBankAccountsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves all bank accounts associated with the company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @param inactive Return all active bank accounts (false) or all inactive bank accounts (true).
     */
    public getBankAccounts(companySlug: string, page?: number, pageSize?: number, inactive?: boolean, _options?: Configuration): Observable<Array<BankAccountResult>> {
        return this.getBankAccountsWithHttpInfo(companySlug, page, pageSize, inactive, _options).pipe(map((apiResponse: HttpInfo<Array<BankAccountResult>>) => apiResponse.data));
    }

}

import { CompaniesApiRequestFactory, CompaniesApiResponseProcessor} from "../apis/CompaniesApi";
export class ObservableCompaniesApi {
    private requestFactory: CompaniesApiRequestFactory;
    private responseProcessor: CompaniesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CompaniesApiRequestFactory,
        responseProcessor?: CompaniesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CompaniesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CompaniesApiResponseProcessor();
    }

    /**
     * Returns all companies from the system that the user has access to
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @param sortBy 
     */
    public getCompaniesWithHttpInfo(page?: number, pageSize?: number, sortBy?: 'createdDate asc' | 'createdDate desc' | 'name asc' | 'name desc' | 'organizationNumber asc' | 'organizationNumber desc', _options?: Configuration): Observable<HttpInfo<Array<Company>>> {
        const requestContextPromise = this.requestFactory.getCompanies(page, pageSize, sortBy, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCompaniesWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all companies from the system that the user has access to
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @param sortBy 
     */
    public getCompanies(page?: number, pageSize?: number, sortBy?: 'createdDate asc' | 'createdDate desc' | 'name asc' | 'name desc' | 'organizationNumber asc' | 'organizationNumber desc', _options?: Configuration): Observable<Array<Company>> {
        return this.getCompaniesWithHttpInfo(page, pageSize, sortBy, _options).pipe(map((apiResponse: HttpInfo<Array<Company>>) => apiResponse.data));
    }

    /**
     * Returns company associated with slug.
     * @param companySlug Slug of company to retrieve
     */
    public getCompanyWithHttpInfo(companySlug: string, _options?: Configuration): Observable<HttpInfo<Company>> {
        const requestContextPromise = this.requestFactory.getCompany(companySlug, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCompanyWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns company associated with slug.
     * @param companySlug Slug of company to retrieve
     */
    public getCompany(companySlug: string, _options?: Configuration): Observable<Company> {
        return this.getCompanyWithHttpInfo(companySlug, _options).pipe(map((apiResponse: HttpInfo<Company>) => apiResponse.data));
    }

}

import { ContactsApiRequestFactory, ContactsApiResponseProcessor} from "../apis/ContactsApi";
export class ObservableContactsApi {
    private requestFactory: ContactsApiRequestFactory;
    private responseProcessor: ContactsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ContactsApiRequestFactory,
        responseProcessor?: ContactsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ContactsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ContactsApiResponseProcessor();
    }

    /**
     * Creates and adds a new attachment/document to a contact
     * @param companySlug Slug of company to retrieve
     * @param contactId 
     * @param filename Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param comment Not required.
     * @param file 
     */
    public addAttachmentToContactWithHttpInfo(companySlug: string, contactId: number, filename?: string, comment?: string, file?: HttpFile, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.addAttachmentToContact(companySlug, contactId, filename, comment, file, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addAttachmentToContactWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates and adds a new attachment/document to a contact
     * @param companySlug Slug of company to retrieve
     * @param contactId 
     * @param filename Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param comment Not required.
     * @param file 
     */
    public addAttachmentToContact(companySlug: string, contactId: number, filename?: string, comment?: string, file?: HttpFile, _options?: Configuration): Observable<void> {
        return this.addAttachmentToContactWithHttpInfo(companySlug, contactId, filename, comment, file, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Adds a new contact person to a contact
     * @param companySlug Slug of company to retrieve
     * @param contactId 
     * @param contactPerson 
     */
    public addContactPersonToContactWithHttpInfo(companySlug: string, contactId: number, contactPerson: ContactPerson, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.addContactPersonToContact(companySlug, contactId, contactPerson, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addContactPersonToContactWithHttpInfo(rsp)));
            }));
    }

    /**
     * Adds a new contact person to a contact
     * @param companySlug Slug of company to retrieve
     * @param contactId 
     * @param contactPerson 
     */
    public addContactPersonToContact(companySlug: string, contactId: number, contactPerson: ContactPerson, _options?: Configuration): Observable<void> {
        return this.addContactPersonToContactWithHttpInfo(companySlug, contactId, contactPerson, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates a new contact. The Location response header returns the URL of the newly created contact.
     * @param companySlug Slug of company to retrieve
     * @param contact 
     */
    public createContactWithHttpInfo(companySlug: string, contact: Contact, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createContact(companySlug, contact, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createContactWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new contact. The Location response header returns the URL of the newly created contact.
     * @param companySlug Slug of company to retrieve
     * @param contact 
     */
    public createContact(companySlug: string, contact: Contact, _options?: Configuration): Observable<void> {
        return this.createContactWithHttpInfo(companySlug, contact, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete a contact\'s contact person.
     * @param companySlug Slug of company to retrieve
     * @param contactId 
     * @param contactPersonId 
     */
    public deleteContactContactPersonWithHttpInfo(companySlug: string, contactId: number, contactPersonId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteContactContactPerson(companySlug, contactId, contactPersonId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteContactContactPersonWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete a contact\'s contact person.
     * @param companySlug Slug of company to retrieve
     * @param contactId 
     * @param contactPersonId 
     */
    public deleteContactContactPerson(companySlug: string, contactId: number, contactPersonId: number, _options?: Configuration): Observable<void> {
        return this.deleteContactContactPersonWithHttpInfo(companySlug, contactId, contactPersonId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Retrieves specified contact. ContactId is returned with a GET contacts call as the first returned field. ContactId is returned in the Location response header for POST contact. 
     * @param companySlug Slug of company to retrieve
     * @param contactId 
     */
    public getContactWithHttpInfo(companySlug: string, contactId: number, _options?: Configuration): Observable<HttpInfo<Contact>> {
        const requestContextPromise = this.requestFactory.getContact(companySlug, contactId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getContactWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves specified contact. ContactId is returned with a GET contacts call as the first returned field. ContactId is returned in the Location response header for POST contact. 
     * @param companySlug Slug of company to retrieve
     * @param contactId 
     */
    public getContact(companySlug: string, contactId: number, _options?: Configuration): Observable<Contact> {
        return this.getContactWithHttpInfo(companySlug, contactId, _options).pipe(map((apiResponse: HttpInfo<Contact>) => apiResponse.data));
    }

    /**
     * Retrieves contact person(s) for a specified contact. 
     * @param companySlug Slug of company to retrieve
     * @param contactId 
     */
    public getContactContactPersonWithHttpInfo(companySlug: string, contactId: number, _options?: Configuration): Observable<HttpInfo<Array<ContactPerson>>> {
        const requestContextPromise = this.requestFactory.getContactContactPerson(companySlug, contactId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getContactContactPersonWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves contact person(s) for a specified contact. 
     * @param companySlug Slug of company to retrieve
     * @param contactId 
     */
    public getContactContactPerson(companySlug: string, contactId: number, _options?: Configuration): Observable<Array<ContactPerson>> {
        return this.getContactContactPersonWithHttpInfo(companySlug, contactId, _options).pipe(map((apiResponse: HttpInfo<Array<ContactPerson>>) => apiResponse.data));
    }

    /**
     * Retrieves specified contact person 
     * @param companySlug Slug of company to retrieve
     * @param contactId 
     * @param contactPersonId 
     */
    public getContactPersonWithHttpInfo(companySlug: string, contactId: number, contactPersonId: number, _options?: Configuration): Observable<HttpInfo<ContactPerson>> {
        const requestContextPromise = this.requestFactory.getContactPerson(companySlug, contactId, contactPersonId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getContactPersonWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves specified contact person 
     * @param companySlug Slug of company to retrieve
     * @param contactId 
     * @param contactPersonId 
     */
    public getContactPerson(companySlug: string, contactId: number, contactPersonId: number, _options?: Configuration): Observable<ContactPerson> {
        return this.getContactPersonWithHttpInfo(companySlug, contactId, contactPersonId, _options).pipe(map((apiResponse: HttpInfo<ContactPerson>) => apiResponse.data));
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
    public getContactsWithHttpInfo(companySlug: string, page?: number, pageSize?: number, lastModified?: string, lastModifiedLe?: string, lastModifiedLt?: string, lastModifiedGe?: string, lastModifiedGt?: string, createdDate?: string, createdDateLe?: string, createdDateLt?: string, createdDateGe?: string, createdDateGt?: string, supplierNumber?: number, customerNumber?: number, memberNumber?: number, name?: string, organizationNumber?: string, email?: string, customer?: boolean, supplier?: boolean, inactive?: boolean, group?: string, sortBy?: 'lastModified asc' | 'lastModified desc' | 'createdDate asc' | 'createdDate desc', phoneNumber?: string, _options?: Configuration): Observable<HttpInfo<Array<Contact>>> {
        const requestContextPromise = this.requestFactory.getContacts(companySlug, page, pageSize, lastModified, lastModifiedLe, lastModifiedLt, lastModifiedGe, lastModifiedGt, createdDate, createdDateLe, createdDateLt, createdDateGe, createdDateGt, supplierNumber, customerNumber, memberNumber, name, organizationNumber, email, customer, supplier, inactive, group, sortBy, phoneNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getContactsWithHttpInfo(rsp)));
            }));
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
    public getContacts(companySlug: string, page?: number, pageSize?: number, lastModified?: string, lastModifiedLe?: string, lastModifiedLt?: string, lastModifiedGe?: string, lastModifiedGt?: string, createdDate?: string, createdDateLe?: string, createdDateLt?: string, createdDateGe?: string, createdDateGt?: string, supplierNumber?: number, customerNumber?: number, memberNumber?: number, name?: string, organizationNumber?: string, email?: string, customer?: boolean, supplier?: boolean, inactive?: boolean, group?: string, sortBy?: 'lastModified asc' | 'lastModified desc' | 'createdDate asc' | 'createdDate desc', phoneNumber?: string, _options?: Configuration): Observable<Array<Contact>> {
        return this.getContactsWithHttpInfo(companySlug, page, pageSize, lastModified, lastModifiedLe, lastModifiedLt, lastModifiedGe, lastModifiedGt, createdDate, createdDateLe, createdDateLt, createdDateGe, createdDateGt, supplierNumber, customerNumber, memberNumber, name, organizationNumber, email, customer, supplier, inactive, group, sortBy, phoneNumber, _options).pipe(map((apiResponse: HttpInfo<Array<Contact>>) => apiResponse.data));
    }

    /**
     * Updates an existing contact.
     * @param companySlug Slug of company to retrieve
     * @param contactId 
     * @param contact 
     */
    public updateContactWithHttpInfo(companySlug: string, contactId: number, contact: Contact, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateContact(companySlug, contactId, contact, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateContactWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates an existing contact.
     * @param companySlug Slug of company to retrieve
     * @param contactId 
     * @param contact 
     */
    public updateContact(companySlug: string, contactId: number, contact: Contact, _options?: Configuration): Observable<void> {
        return this.updateContactWithHttpInfo(companySlug, contactId, contact, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Updates an existing contact person.
     * @param companySlug Slug of company to retrieve
     * @param contactId 
     * @param contactPersonId 
     * @param contactPerson 
     */
    public updateContactContactPersonWithHttpInfo(companySlug: string, contactId: number, contactPersonId: number, contactPerson: ContactPerson, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateContactContactPerson(companySlug, contactId, contactPersonId, contactPerson, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateContactContactPersonWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates an existing contact person.
     * @param companySlug Slug of company to retrieve
     * @param contactId 
     * @param contactPersonId 
     * @param contactPerson 
     */
    public updateContactContactPerson(companySlug: string, contactId: number, contactPersonId: number, contactPerson: ContactPerson, _options?: Configuration): Observable<void> {
        return this.updateContactContactPersonWithHttpInfo(companySlug, contactId, contactPersonId, contactPerson, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { CreditNotesApiRequestFactory, CreditNotesApiResponseProcessor} from "../apis/CreditNotesApi";
export class ObservableCreditNotesApi {
    private requestFactory: CreditNotesApiRequestFactory;
    private responseProcessor: CreditNotesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: CreditNotesApiRequestFactory,
        responseProcessor?: CreditNotesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new CreditNotesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new CreditNotesApiResponseProcessor();
    }

    /**
     * Creates and adds a new attachment to a credit note draft
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param filename Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param comment Not required.
     * @param file 
     */
    public addAttachmentToCreditNoteDraftWithHttpInfo(companySlug: string, draftId: number, filename?: string, comment?: string, file?: HttpFile, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.addAttachmentToCreditNoteDraft(companySlug, draftId, filename, comment, file, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addAttachmentToCreditNoteDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates and adds a new attachment to a credit note draft
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param filename Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param comment Not required.
     * @param file 
     */
    public addAttachmentToCreditNoteDraft(companySlug: string, draftId: number, filename?: string, comment?: string, file?: HttpFile, _options?: Configuration): Observable<void> {
        return this.addAttachmentToCreditNoteDraftWithHttpInfo(companySlug, draftId, filename, comment, file, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates the first credit note number which is then increased by one with every new credit note. By sending an empty request body the default is base number 10000 (the first credit note number will thus be 10001), but can be specified to another starting value.
     * @param companySlug Slug of company to retrieve
     * @param counter 
     */
    public createCreditNoteCounterWithHttpInfo(companySlug: string, counter?: Counter, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createCreditNoteCounter(companySlug, counter, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCreditNoteCounterWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates the first credit note number which is then increased by one with every new credit note. By sending an empty request body the default is base number 10000 (the first credit note number will thus be 10001), but can be specified to another starting value.
     * @param companySlug Slug of company to retrieve
     * @param counter 
     */
    public createCreditNoteCounter(companySlug: string, counter?: Counter, _options?: Configuration): Observable<void> {
        return this.createCreditNoteCounterWithHttpInfo(companySlug, counter, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates a credit note draft. This draft corresponds to a draft for an \"uavhengig kreditnota\" in Fiken.
     * @param companySlug Slug of company to retrieve
     * @param invoiceishDraftRequest 
     */
    public createCreditNoteDraftWithHttpInfo(companySlug: string, invoiceishDraftRequest: InvoiceishDraftRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createCreditNoteDraft(companySlug, invoiceishDraftRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCreditNoteDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a credit note draft. This draft corresponds to a draft for an \"uavhengig kreditnota\" in Fiken.
     * @param companySlug Slug of company to retrieve
     * @param invoiceishDraftRequest 
     */
    public createCreditNoteDraft(companySlug: string, invoiceishDraftRequest: InvoiceishDraftRequest, _options?: Configuration): Observable<void> {
        return this.createCreditNoteDraftWithHttpInfo(companySlug, invoiceishDraftRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates a credit note from an already created draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public createCreditNoteFromDraftWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createCreditNoteFromDraft(companySlug, draftId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createCreditNoteFromDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a credit note from an already created draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public createCreditNoteFromDraft(companySlug: string, draftId: number, _options?: Configuration): Observable<void> {
        return this.createCreditNoteFromDraftWithHttpInfo(companySlug, draftId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates a new credit note that covers the full amount of the associated invoice.
     * @param companySlug Slug of company to retrieve
     * @param fullCreditNoteRequest 
     */
    public createFullCreditNoteWithHttpInfo(companySlug: string, fullCreditNoteRequest: FullCreditNoteRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createFullCreditNote(companySlug, fullCreditNoteRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createFullCreditNoteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new credit note that covers the full amount of the associated invoice.
     * @param companySlug Slug of company to retrieve
     * @param fullCreditNoteRequest 
     */
    public createFullCreditNote(companySlug: string, fullCreditNoteRequest: FullCreditNoteRequest, _options?: Configuration): Observable<void> {
        return this.createFullCreditNoteWithHttpInfo(companySlug, fullCreditNoteRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates a new credit note that doesn\'t fully cover the total amount of the associated invoice.
     * @param companySlug Slug of company to retrieve
     * @param partialCreditNoteRequest 
     */
    public createPartialCreditNoteWithHttpInfo(companySlug: string, partialCreditNoteRequest: PartialCreditNoteRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createPartialCreditNote(companySlug, partialCreditNoteRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPartialCreditNoteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new credit note that doesn\'t fully cover the total amount of the associated invoice.
     * @param companySlug Slug of company to retrieve
     * @param partialCreditNoteRequest 
     */
    public createPartialCreditNote(companySlug: string, partialCreditNoteRequest: PartialCreditNoteRequest, _options?: Configuration): Observable<void> {
        return this.createPartialCreditNoteWithHttpInfo(companySlug, partialCreditNoteRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete credit note draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public deleteCreditNoteDraftWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteCreditNoteDraft(companySlug, draftId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteCreditNoteDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete credit note draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public deleteCreditNoteDraft(companySlug: string, draftId: number, _options?: Configuration): Observable<void> {
        return this.deleteCreditNoteDraftWithHttpInfo(companySlug, draftId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Returns credit note with specified id.
     * @param companySlug Slug of company to retrieve
     * @param creditNoteId The creditNoteId (primary key of the returned object) is returned as the first field in the GET all credit notes call; not to be confused with creditNoteNumber 
     */
    public getCreditNoteWithHttpInfo(companySlug: string, creditNoteId: string, _options?: Configuration): Observable<HttpInfo<CreditNoteResult>> {
        const requestContextPromise = this.requestFactory.getCreditNote(companySlug, creditNoteId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCreditNoteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns credit note with specified id.
     * @param companySlug Slug of company to retrieve
     * @param creditNoteId The creditNoteId (primary key of the returned object) is returned as the first field in the GET all credit notes call; not to be confused with creditNoteNumber 
     */
    public getCreditNote(companySlug: string, creditNoteId: string, _options?: Configuration): Observable<CreditNoteResult> {
        return this.getCreditNoteWithHttpInfo(companySlug, creditNoteId, _options).pipe(map((apiResponse: HttpInfo<CreditNoteResult>) => apiResponse.data));
    }

    /**
     * Retrieves the counter for credit notes if it has been created 
     * @param companySlug Slug of company to retrieve
     */
    public getCreditNoteCounterWithHttpInfo(companySlug: string, _options?: Configuration): Observable<HttpInfo<Counter>> {
        const requestContextPromise = this.requestFactory.getCreditNoteCounter(companySlug, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCreditNoteCounterWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the counter for credit notes if it has been created 
     * @param companySlug Slug of company to retrieve
     */
    public getCreditNoteCounter(companySlug: string, _options?: Configuration): Observable<Counter> {
        return this.getCreditNoteCounterWithHttpInfo(companySlug, _options).pipe(map((apiResponse: HttpInfo<Counter>) => apiResponse.data));
    }

    /**
     * Returns credit note draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getCreditNoteDraftWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Observable<HttpInfo<InvoiceishDraftResult>> {
        const requestContextPromise = this.requestFactory.getCreditNoteDraft(companySlug, draftId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCreditNoteDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns credit note draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getCreditNoteDraft(companySlug: string, draftId: number, _options?: Configuration): Observable<InvoiceishDraftResult> {
        return this.getCreditNoteDraftWithHttpInfo(companySlug, draftId, _options).pipe(map((apiResponse: HttpInfo<InvoiceishDraftResult>) => apiResponse.data));
    }

    /**
     * Returns all attachments for specified draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getCreditNoteDraftAttachmentsWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Observable<HttpInfo<Array<Attachment>>> {
        const requestContextPromise = this.requestFactory.getCreditNoteDraftAttachments(companySlug, draftId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCreditNoteDraftAttachmentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all attachments for specified draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getCreditNoteDraftAttachments(companySlug: string, draftId: number, _options?: Configuration): Observable<Array<Attachment>> {
        return this.getCreditNoteDraftAttachmentsWithHttpInfo(companySlug, draftId, _options).pipe(map((apiResponse: HttpInfo<Array<Attachment>>) => apiResponse.data));
    }

    /**
     * Returns all credit note drafts for given company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     */
    public getCreditNoteDraftsWithHttpInfo(companySlug: string, page?: number, pageSize?: number, _options?: Configuration): Observable<HttpInfo<Array<InvoiceishDraftResult>>> {
        const requestContextPromise = this.requestFactory.getCreditNoteDrafts(companySlug, page, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCreditNoteDraftsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all credit note drafts for given company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     */
    public getCreditNoteDrafts(companySlug: string, page?: number, pageSize?: number, _options?: Configuration): Observable<Array<InvoiceishDraftResult>> {
        return this.getCreditNoteDraftsWithHttpInfo(companySlug, page, pageSize, _options).pipe(map((apiResponse: HttpInfo<Array<InvoiceishDraftResult>>) => apiResponse.data));
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
    public getCreditNotesWithHttpInfo(companySlug: string, page?: number, pageSize?: number, issueDate?: string, issueDateLe?: string, issueDateLt?: string, issueDateGe?: string, issueDateGt?: string, customerId?: number, settled?: boolean, creditNoteDraftUuid?: string, _options?: Configuration): Observable<HttpInfo<Array<CreditNoteResult>>> {
        const requestContextPromise = this.requestFactory.getCreditNotes(companySlug, page, pageSize, issueDate, issueDateLe, issueDateLt, issueDateGe, issueDateGt, customerId, settled, creditNoteDraftUuid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getCreditNotesWithHttpInfo(rsp)));
            }));
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
    public getCreditNotes(companySlug: string, page?: number, pageSize?: number, issueDate?: string, issueDateLe?: string, issueDateLt?: string, issueDateGe?: string, issueDateGt?: string, customerId?: number, settled?: boolean, creditNoteDraftUuid?: string, _options?: Configuration): Observable<Array<CreditNoteResult>> {
        return this.getCreditNotesWithHttpInfo(companySlug, page, pageSize, issueDate, issueDateLe, issueDateLt, issueDateGe, issueDateGt, customerId, settled, creditNoteDraftUuid, _options).pipe(map((apiResponse: HttpInfo<Array<CreditNoteResult>>) => apiResponse.data));
    }

    /**
     * Sends the specified document
     * @param companySlug Slug of company to retrieve
     * @param sendCreditNoteRequest 
     */
    public sendCreditNoteWithHttpInfo(companySlug: string, sendCreditNoteRequest: SendCreditNoteRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.sendCreditNote(companySlug, sendCreditNoteRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendCreditNoteWithHttpInfo(rsp)));
            }));
    }

    /**
     * Sends the specified document
     * @param companySlug Slug of company to retrieve
     * @param sendCreditNoteRequest 
     */
    public sendCreditNote(companySlug: string, sendCreditNoteRequest: SendCreditNoteRequest, _options?: Configuration): Observable<void> {
        return this.sendCreditNoteWithHttpInfo(companySlug, sendCreditNoteRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Updates credit note draft with provided id. 
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param invoiceishDraftRequest 
     */
    public updateCreditNoteDraftWithHttpInfo(companySlug: string, draftId: number, invoiceishDraftRequest: InvoiceishDraftRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateCreditNoteDraft(companySlug, draftId, invoiceishDraftRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateCreditNoteDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates credit note draft with provided id. 
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param invoiceishDraftRequest 
     */
    public updateCreditNoteDraft(companySlug: string, draftId: number, invoiceishDraftRequest: InvoiceishDraftRequest, _options?: Configuration): Observable<void> {
        return this.updateCreditNoteDraftWithHttpInfo(companySlug, draftId, invoiceishDraftRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { GroupsApiRequestFactory, GroupsApiResponseProcessor} from "../apis/GroupsApi";
export class ObservableGroupsApi {
    private requestFactory: GroupsApiRequestFactory;
    private responseProcessor: GroupsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: GroupsApiRequestFactory,
        responseProcessor?: GroupsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new GroupsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new GroupsApiResponseProcessor();
    }

    /**
     * Returns all customer groups for given company
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     */
    public getGroupsWithHttpInfo(companySlug: string, page?: number, pageSize?: number, _options?: Configuration): Observable<HttpInfo<Array<string>>> {
        const requestContextPromise = this.requestFactory.getGroups(companySlug, page, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getGroupsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all customer groups for given company
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     */
    public getGroups(companySlug: string, page?: number, pageSize?: number, _options?: Configuration): Observable<Array<string>> {
        return this.getGroupsWithHttpInfo(companySlug, page, pageSize, _options).pipe(map((apiResponse: HttpInfo<Array<string>>) => apiResponse.data));
    }

}

import { InboxApiRequestFactory, InboxApiResponseProcessor} from "../apis/InboxApi";
export class ObservableInboxApi {
    private requestFactory: InboxApiRequestFactory;
    private responseProcessor: InboxApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: InboxApiRequestFactory,
        responseProcessor?: InboxApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new InboxApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new InboxApiResponseProcessor();
    }

    /**
     * Upload a document to the inbox
     * @param companySlug Slug of company to retrieve
     * @param name The name of the inbox document, usually the same as the filename
     * @param filename The filename of the file uploaded
     * @param description Additional description of the inbox document
     * @param file 
     */
    public createInboxDocumentWithHttpInfo(companySlug: string, name?: string, filename?: string, description?: string, file?: HttpFile, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createInboxDocument(companySlug, name, filename, description, file, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createInboxDocumentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Upload a document to the inbox
     * @param companySlug Slug of company to retrieve
     * @param name The name of the inbox document, usually the same as the filename
     * @param filename The filename of the file uploaded
     * @param description Additional description of the inbox document
     * @param file 
     */
    public createInboxDocument(companySlug: string, name?: string, filename?: string, description?: string, file?: HttpFile, _options?: Configuration): Observable<void> {
        return this.createInboxDocumentWithHttpInfo(companySlug, name, filename, description, file, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
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
    public getInboxWithHttpInfo(companySlug: string, page?: number, pageSize?: number, sortBy?: 'createdDate asc' | 'createdDate desc' | 'name asc' | 'name desc', status?: 'all' | 'unused' | 'used', name?: string, _options?: Configuration): Observable<HttpInfo<Array<InboxResult>>> {
        const requestContextPromise = this.requestFactory.getInbox(companySlug, page, pageSize, sortBy, status, name, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxWithHttpInfo(rsp)));
            }));
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
    public getInbox(companySlug: string, page?: number, pageSize?: number, sortBy?: 'createdDate asc' | 'createdDate desc' | 'name asc' | 'name desc', status?: 'all' | 'unused' | 'used', name?: string, _options?: Configuration): Observable<Array<InboxResult>> {
        return this.getInboxWithHttpInfo(companySlug, page, pageSize, sortBy, status, name, _options).pipe(map((apiResponse: HttpInfo<Array<InboxResult>>) => apiResponse.data));
    }

    /**
     * Returns the inbox document with specified id
     * @param companySlug Slug of company to retrieve
     * @param inboxDocumentId 
     */
    public getInboxDocumentWithHttpInfo(companySlug: string, inboxDocumentId: number, _options?: Configuration): Observable<HttpInfo<InboxResult>> {
        const requestContextPromise = this.requestFactory.getInboxDocument(companySlug, inboxDocumentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInboxDocumentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns the inbox document with specified id
     * @param companySlug Slug of company to retrieve
     * @param inboxDocumentId 
     */
    public getInboxDocument(companySlug: string, inboxDocumentId: number, _options?: Configuration): Observable<InboxResult> {
        return this.getInboxDocumentWithHttpInfo(companySlug, inboxDocumentId, _options).pipe(map((apiResponse: HttpInfo<InboxResult>) => apiResponse.data));
    }

}

import { InvoicesApiRequestFactory, InvoicesApiResponseProcessor} from "../apis/InvoicesApi";
export class ObservableInvoicesApi {
    private requestFactory: InvoicesApiRequestFactory;
    private responseProcessor: InvoicesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: InvoicesApiRequestFactory,
        responseProcessor?: InvoicesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new InvoicesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new InvoicesApiResponseProcessor();
    }

    /**
     * Creates and adds a new attachment to an Invoice
     * @param companySlug Slug of company to retrieve
     * @param invoiceId The invoiceId (primary key of the returned object) is returned in the GET all invoices call; not to be confused with invoiceNumber 
     * @param filename The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param file 
     */
    public addAttachmentToInvoiceWithHttpInfo(companySlug: string, invoiceId: number, filename?: string, file?: HttpFile, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.addAttachmentToInvoice(companySlug, invoiceId, filename, file, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addAttachmentToInvoiceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates and adds a new attachment to an Invoice
     * @param companySlug Slug of company to retrieve
     * @param invoiceId The invoiceId (primary key of the returned object) is returned in the GET all invoices call; not to be confused with invoiceNumber 
     * @param filename The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param file 
     */
    public addAttachmentToInvoice(companySlug: string, invoiceId: number, filename?: string, file?: HttpFile, _options?: Configuration): Observable<void> {
        return this.addAttachmentToInvoiceWithHttpInfo(companySlug, invoiceId, filename, file, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates and adds a new attachment to an invoice draft
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param filename Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param comment Not required.
     * @param file 
     */
    public addAttachmentToInvoiceDraftWithHttpInfo(companySlug: string, draftId: number, filename?: string, comment?: string, file?: HttpFile, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.addAttachmentToInvoiceDraft(companySlug, draftId, filename, comment, file, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addAttachmentToInvoiceDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates and adds a new attachment to an invoice draft
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param filename Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param comment Not required.
     * @param file 
     */
    public addAttachmentToInvoiceDraft(companySlug: string, draftId: number, filename?: string, comment?: string, file?: HttpFile, _options?: Configuration): Observable<void> {
        return this.addAttachmentToInvoiceDraftWithHttpInfo(companySlug, draftId, filename, comment, file, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates an invoice. This corresponds to \"Ny faktura\" in Fiken. There are two types of invoice lines that can be added to an invoice line: product line or free text line. Provide a product Id if you are invoicing a product. All information regarding the price and VAT for this product will be added to the invoice. It is however also possible to override the unit amount by sending information in both fields \"productId\" and \"unitAmount\". An invoice line can also be a free text line meaning that no existing product will be associated with the invoiced line. In this case all information regarding the price and VAT of the product or service to be invoiced must be provided. 
     * @param companySlug Slug of company to retrieve
     * @param invoiceRequest 
     */
    public createInvoiceWithHttpInfo(companySlug: string, invoiceRequest: InvoiceRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createInvoice(companySlug, invoiceRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createInvoiceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates an invoice. This corresponds to \"Ny faktura\" in Fiken. There are two types of invoice lines that can be added to an invoice line: product line or free text line. Provide a product Id if you are invoicing a product. All information regarding the price and VAT for this product will be added to the invoice. It is however also possible to override the unit amount by sending information in both fields \"productId\" and \"unitAmount\". An invoice line can also be a free text line meaning that no existing product will be associated with the invoiced line. In this case all information regarding the price and VAT of the product or service to be invoiced must be provided. 
     * @param companySlug Slug of company to retrieve
     * @param invoiceRequest 
     */
    public createInvoice(companySlug: string, invoiceRequest: InvoiceRequest, _options?: Configuration): Observable<void> {
        return this.createInvoiceWithHttpInfo(companySlug, invoiceRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates the first invoice number which is then increased by one with every new invoice. By sending an empty request body the default is base number 10000 (the first invoice number will thus be 10001), but can be specified to another starting value.
     * @param companySlug Slug of company to retrieve
     * @param counter 
     */
    public createInvoiceCounterWithHttpInfo(companySlug: string, counter?: Counter, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createInvoiceCounter(companySlug, counter, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createInvoiceCounterWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates the first invoice number which is then increased by one with every new invoice. By sending an empty request body the default is base number 10000 (the first invoice number will thus be 10001), but can be specified to another starting value.
     * @param companySlug Slug of company to retrieve
     * @param counter 
     */
    public createInvoiceCounter(companySlug: string, counter?: Counter, _options?: Configuration): Observable<void> {
        return this.createInvoiceCounterWithHttpInfo(companySlug, counter, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates an invoice draft.
     * @param companySlug Slug of company to retrieve
     * @param invoiceishDraftRequest 
     */
    public createInvoiceDraftWithHttpInfo(companySlug: string, invoiceishDraftRequest: InvoiceishDraftRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createInvoiceDraft(companySlug, invoiceishDraftRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createInvoiceDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates an invoice draft.
     * @param companySlug Slug of company to retrieve
     * @param invoiceishDraftRequest 
     */
    public createInvoiceDraft(companySlug: string, invoiceishDraftRequest: InvoiceishDraftRequest, _options?: Configuration): Observable<void> {
        return this.createInvoiceDraftWithHttpInfo(companySlug, invoiceishDraftRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates an invoice from an already created draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public createInvoiceFromDraftWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createInvoiceFromDraft(companySlug, draftId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createInvoiceFromDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates an invoice from an already created draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public createInvoiceFromDraft(companySlug: string, draftId: number, _options?: Configuration): Observable<void> {
        return this.createInvoiceFromDraftWithHttpInfo(companySlug, draftId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete invoice draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public deleteInvoiceDraftWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteInvoiceDraft(companySlug, draftId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteInvoiceDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete invoice draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public deleteInvoiceDraft(companySlug: string, draftId: number, _options?: Configuration): Observable<void> {
        return this.deleteInvoiceDraftWithHttpInfo(companySlug, draftId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Returns invoice with specified id.
     * @param companySlug Slug of company to retrieve
     * @param invoiceId The invoiceId (primary key of the returned object) is returned in the GET all invoices call; not to be confused with invoiceNumber 
     */
    public getInvoiceWithHttpInfo(companySlug: string, invoiceId: number, _options?: Configuration): Observable<HttpInfo<InvoiceResult>> {
        const requestContextPromise = this.requestFactory.getInvoice(companySlug, invoiceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInvoiceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns invoice with specified id.
     * @param companySlug Slug of company to retrieve
     * @param invoiceId The invoiceId (primary key of the returned object) is returned in the GET all invoices call; not to be confused with invoiceNumber 
     */
    public getInvoice(companySlug: string, invoiceId: number, _options?: Configuration): Observable<InvoiceResult> {
        return this.getInvoiceWithHttpInfo(companySlug, invoiceId, _options).pipe(map((apiResponse: HttpInfo<InvoiceResult>) => apiResponse.data));
    }

    /**
     * Returns all attachments for a given Invoice
     * @param companySlug Slug of company to retrieve
     * @param invoiceId The invoiceId (primary key of the returned object) is returned in the GET all invoices call; not to be confused with invoiceNumber 
     */
    public getInvoiceAttachmentsWithHttpInfo(companySlug: string, invoiceId: number, _options?: Configuration): Observable<HttpInfo<Array<Attachment>>> {
        const requestContextPromise = this.requestFactory.getInvoiceAttachments(companySlug, invoiceId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInvoiceAttachmentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all attachments for a given Invoice
     * @param companySlug Slug of company to retrieve
     * @param invoiceId The invoiceId (primary key of the returned object) is returned in the GET all invoices call; not to be confused with invoiceNumber 
     */
    public getInvoiceAttachments(companySlug: string, invoiceId: number, _options?: Configuration): Observable<Array<Attachment>> {
        return this.getInvoiceAttachmentsWithHttpInfo(companySlug, invoiceId, _options).pipe(map((apiResponse: HttpInfo<Array<Attachment>>) => apiResponse.data));
    }

    /**
     * Retrieves the counter for invoices if it has been created 
     * @param companySlug Slug of company to retrieve
     */
    public getInvoiceCounterWithHttpInfo(companySlug: string, _options?: Configuration): Observable<HttpInfo<Counter>> {
        const requestContextPromise = this.requestFactory.getInvoiceCounter(companySlug, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInvoiceCounterWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the counter for invoices if it has been created 
     * @param companySlug Slug of company to retrieve
     */
    public getInvoiceCounter(companySlug: string, _options?: Configuration): Observable<Counter> {
        return this.getInvoiceCounterWithHttpInfo(companySlug, _options).pipe(map((apiResponse: HttpInfo<Counter>) => apiResponse.data));
    }

    /**
     * Returns invoice draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getInvoiceDraftWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Observable<HttpInfo<InvoiceishDraftResult>> {
        const requestContextPromise = this.requestFactory.getInvoiceDraft(companySlug, draftId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInvoiceDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns invoice draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getInvoiceDraft(companySlug: string, draftId: number, _options?: Configuration): Observable<InvoiceishDraftResult> {
        return this.getInvoiceDraftWithHttpInfo(companySlug, draftId, _options).pipe(map((apiResponse: HttpInfo<InvoiceishDraftResult>) => apiResponse.data));
    }

    /**
     * Returns all attachments for specified draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getInvoiceDraftAttachmentsWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Observable<HttpInfo<Array<Attachment>>> {
        const requestContextPromise = this.requestFactory.getInvoiceDraftAttachments(companySlug, draftId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInvoiceDraftAttachmentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all attachments for specified draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getInvoiceDraftAttachments(companySlug: string, draftId: number, _options?: Configuration): Observable<Array<Attachment>> {
        return this.getInvoiceDraftAttachmentsWithHttpInfo(companySlug, draftId, _options).pipe(map((apiResponse: HttpInfo<Array<Attachment>>) => apiResponse.data));
    }

    /**
     * Returns all invoice drafts for given company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @param orderReference Filter based on order reference for a given invoice draft
     * @param uuid Filter based on the UUID of the draft.
     */
    public getInvoiceDraftsWithHttpInfo(companySlug: string, page?: number, pageSize?: number, orderReference?: string, uuid?: string, _options?: Configuration): Observable<HttpInfo<Array<InvoiceishDraftResult>>> {
        const requestContextPromise = this.requestFactory.getInvoiceDrafts(companySlug, page, pageSize, orderReference, uuid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInvoiceDraftsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all invoice drafts for given company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     * @param orderReference Filter based on order reference for a given invoice draft
     * @param uuid Filter based on the UUID of the draft.
     */
    public getInvoiceDrafts(companySlug: string, page?: number, pageSize?: number, orderReference?: string, uuid?: string, _options?: Configuration): Observable<Array<InvoiceishDraftResult>> {
        return this.getInvoiceDraftsWithHttpInfo(companySlug, page, pageSize, orderReference, uuid, _options).pipe(map((apiResponse: HttpInfo<Array<InvoiceishDraftResult>>) => apiResponse.data));
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
    public getInvoicesWithHttpInfo(companySlug: string, page?: number, pageSize?: number, issueDate?: string, issueDateLe?: string, issueDateLt?: string, issueDateGe?: string, issueDateGt?: string, lastModified?: string, lastModifiedLe?: string, lastModifiedLt?: string, lastModifiedGe?: string, lastModifiedGt?: string, customerId?: number, settled?: boolean, orderReference?: string, invoiceDraftUuid?: string, invoiceNumber?: string, _options?: Configuration): Observable<HttpInfo<Array<InvoiceResult>>> {
        const requestContextPromise = this.requestFactory.getInvoices(companySlug, page, pageSize, issueDate, issueDateLe, issueDateLt, issueDateGe, issueDateGt, lastModified, lastModifiedLe, lastModifiedLt, lastModifiedGe, lastModifiedGt, customerId, settled, orderReference, invoiceDraftUuid, invoiceNumber, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getInvoicesWithHttpInfo(rsp)));
            }));
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
    public getInvoices(companySlug: string, page?: number, pageSize?: number, issueDate?: string, issueDateLe?: string, issueDateLt?: string, issueDateGe?: string, issueDateGt?: string, lastModified?: string, lastModifiedLe?: string, lastModifiedLt?: string, lastModifiedGe?: string, lastModifiedGt?: string, customerId?: number, settled?: boolean, orderReference?: string, invoiceDraftUuid?: string, invoiceNumber?: string, _options?: Configuration): Observable<Array<InvoiceResult>> {
        return this.getInvoicesWithHttpInfo(companySlug, page, pageSize, issueDate, issueDateLe, issueDateLt, issueDateGe, issueDateGt, lastModified, lastModifiedLe, lastModifiedLt, lastModifiedGe, lastModifiedGt, customerId, settled, orderReference, invoiceDraftUuid, invoiceNumber, _options).pipe(map((apiResponse: HttpInfo<Array<InvoiceResult>>) => apiResponse.data));
    }

    /**
     * Sends the specified document
     * @param companySlug Slug of company to retrieve
     * @param sendInvoiceRequest 
     */
    public sendInvoiceWithHttpInfo(companySlug: string, sendInvoiceRequest: SendInvoiceRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.sendInvoice(companySlug, sendInvoiceRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.sendInvoiceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Sends the specified document
     * @param companySlug Slug of company to retrieve
     * @param sendInvoiceRequest 
     */
    public sendInvoice(companySlug: string, sendInvoiceRequest: SendInvoiceRequest, _options?: Configuration): Observable<void> {
        return this.sendInvoiceWithHttpInfo(companySlug, sendInvoiceRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Updates invoice with provided id. It is possible to update the due date of an invoice as well as if the invoice was sent manually, outside of Fiken. 
     * @param companySlug Slug of company to retrieve
     * @param invoiceId The invoiceId (primary key of the returned object) is returned in the GET all invoices call; not to be confused with invoiceNumber 
     * @param updateInvoiceRequest 
     */
    public updateInvoiceWithHttpInfo(companySlug: string, invoiceId: number, updateInvoiceRequest: UpdateInvoiceRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateInvoice(companySlug, invoiceId, updateInvoiceRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateInvoiceWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates invoice with provided id. It is possible to update the due date of an invoice as well as if the invoice was sent manually, outside of Fiken. 
     * @param companySlug Slug of company to retrieve
     * @param invoiceId The invoiceId (primary key of the returned object) is returned in the GET all invoices call; not to be confused with invoiceNumber 
     * @param updateInvoiceRequest 
     */
    public updateInvoice(companySlug: string, invoiceId: number, updateInvoiceRequest: UpdateInvoiceRequest, _options?: Configuration): Observable<void> {
        return this.updateInvoiceWithHttpInfo(companySlug, invoiceId, updateInvoiceRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Updates invoice draft with provided id. 
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param invoiceishDraftRequest 
     */
    public updateInvoiceDraftWithHttpInfo(companySlug: string, draftId: number, invoiceishDraftRequest: InvoiceishDraftRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateInvoiceDraft(companySlug, draftId, invoiceishDraftRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateInvoiceDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates invoice draft with provided id. 
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param invoiceishDraftRequest 
     */
    public updateInvoiceDraft(companySlug: string, draftId: number, invoiceishDraftRequest: InvoiceishDraftRequest, _options?: Configuration): Observable<void> {
        return this.updateInvoiceDraftWithHttpInfo(companySlug, draftId, invoiceishDraftRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { JournalEntriesApiRequestFactory, JournalEntriesApiResponseProcessor} from "../apis/JournalEntriesApi";
export class ObservableJournalEntriesApi {
    private requestFactory: JournalEntriesApiRequestFactory;
    private responseProcessor: JournalEntriesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: JournalEntriesApiRequestFactory,
        responseProcessor?: JournalEntriesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new JournalEntriesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new JournalEntriesApiResponseProcessor();
    }

    /**
     * Creates and adds a new attachment to a Journal Entry
     * @param companySlug Slug of company to retrieve
     * @param journalEntryId 
     * @param filename Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param file 
     */
    public addAttachmentToJournalEntryWithHttpInfo(companySlug: string, journalEntryId: number, filename?: string, file?: HttpFile, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.addAttachmentToJournalEntry(companySlug, journalEntryId, filename, file, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addAttachmentToJournalEntryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates and adds a new attachment to a Journal Entry
     * @param companySlug Slug of company to retrieve
     * @param journalEntryId 
     * @param filename Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param file 
     */
    public addAttachmentToJournalEntry(companySlug: string, journalEntryId: number, filename?: string, file?: HttpFile, _options?: Configuration): Observable<void> {
        return this.addAttachmentToJournalEntryWithHttpInfo(companySlug, journalEntryId, filename, file, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates a new general journal entry (fri postering).
     * @param companySlug Slug of company to retrieve
     * @param generalJournalEntryRequest 
     */
    public createGeneralJournalEntryWithHttpInfo(companySlug: string, generalJournalEntryRequest: GeneralJournalEntryRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createGeneralJournalEntry(companySlug, generalJournalEntryRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createGeneralJournalEntryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new general journal entry (fri postering).
     * @param companySlug Slug of company to retrieve
     * @param generalJournalEntryRequest 
     */
    public createGeneralJournalEntry(companySlug: string, generalJournalEntryRequest: GeneralJournalEntryRequest, _options?: Configuration): Observable<void> {
        return this.createGeneralJournalEntryWithHttpInfo(companySlug, generalJournalEntryRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
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
    public getJournalEntriesWithHttpInfo(companySlug: string, page?: number, pageSize?: number, date?: string, dateLe?: string, dateLt?: string, dateGe?: string, dateGt?: string, lastModified?: string, lastModifiedLe?: string, lastModifiedLt?: string, lastModifiedGe?: string, lastModifiedGt?: string, createdDate?: string, createdDateLe?: string, createdDateLt?: string, createdDateGe?: string, createdDateGt?: string, _options?: Configuration): Observable<HttpInfo<Array<JournalEntry>>> {
        const requestContextPromise = this.requestFactory.getJournalEntries(companySlug, page, pageSize, date, dateLe, dateLt, dateGe, dateGt, lastModified, lastModifiedLe, lastModifiedLt, lastModifiedGe, lastModifiedGt, createdDate, createdDateLe, createdDateLt, createdDateGe, createdDateGt, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getJournalEntriesWithHttpInfo(rsp)));
            }));
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
    public getJournalEntries(companySlug: string, page?: number, pageSize?: number, date?: string, dateLe?: string, dateLt?: string, dateGe?: string, dateGt?: string, lastModified?: string, lastModifiedLe?: string, lastModifiedLt?: string, lastModifiedGe?: string, lastModifiedGt?: string, createdDate?: string, createdDateLe?: string, createdDateLt?: string, createdDateGe?: string, createdDateGt?: string, _options?: Configuration): Observable<Array<JournalEntry>> {
        return this.getJournalEntriesWithHttpInfo(companySlug, page, pageSize, date, dateLe, dateLt, dateGe, dateGt, lastModified, lastModifiedLe, lastModifiedLt, lastModifiedGe, lastModifiedGt, createdDate, createdDateLe, createdDateLt, createdDateGe, createdDateGt, _options).pipe(map((apiResponse: HttpInfo<Array<JournalEntry>>) => apiResponse.data));
    }

    /**
     * Returns all journal entries within a given company\'s Journal Entry Service
     * @param companySlug Slug of company to retrieve
     * @param journalEntryId 
     */
    public getJournalEntryWithHttpInfo(companySlug: string, journalEntryId: number, _options?: Configuration): Observable<HttpInfo<JournalEntry>> {
        const requestContextPromise = this.requestFactory.getJournalEntry(companySlug, journalEntryId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getJournalEntryWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all journal entries within a given company\'s Journal Entry Service
     * @param companySlug Slug of company to retrieve
     * @param journalEntryId 
     */
    public getJournalEntry(companySlug: string, journalEntryId: number, _options?: Configuration): Observable<JournalEntry> {
        return this.getJournalEntryWithHttpInfo(companySlug, journalEntryId, _options).pipe(map((apiResponse: HttpInfo<JournalEntry>) => apiResponse.data));
    }

    /**
     * Returns all attachments for a given Journal Entry
     * @param companySlug Slug of company to retrieve
     * @param journalEntryId 
     */
    public getJournalEntryAttachmentsWithHttpInfo(companySlug: string, journalEntryId: number, _options?: Configuration): Observable<HttpInfo<Array<Attachment>>> {
        const requestContextPromise = this.requestFactory.getJournalEntryAttachments(companySlug, journalEntryId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getJournalEntryAttachmentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all attachments for a given Journal Entry
     * @param companySlug Slug of company to retrieve
     * @param journalEntryId 
     */
    public getJournalEntryAttachments(companySlug: string, journalEntryId: number, _options?: Configuration): Observable<Array<Attachment>> {
        return this.getJournalEntryAttachmentsWithHttpInfo(companySlug, journalEntryId, _options).pipe(map((apiResponse: HttpInfo<Array<Attachment>>) => apiResponse.data));
    }

}

import { OffersApiRequestFactory, OffersApiResponseProcessor} from "../apis/OffersApi";
export class ObservableOffersApi {
    private requestFactory: OffersApiRequestFactory;
    private responseProcessor: OffersApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OffersApiRequestFactory,
        responseProcessor?: OffersApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OffersApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OffersApiResponseProcessor();
    }

    /**
     * Creates and adds a new attachment to an offer draft
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param filename Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param comment Not required.
     * @param file 
     */
    public addAttachmentToOfferDraftWithHttpInfo(companySlug: string, draftId: number, filename?: string, comment?: string, file?: HttpFile, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.addAttachmentToOfferDraft(companySlug, draftId, filename, comment, file, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addAttachmentToOfferDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates and adds a new attachment to an offer draft
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param filename Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param comment Not required.
     * @param file 
     */
    public addAttachmentToOfferDraft(companySlug: string, draftId: number, filename?: string, comment?: string, file?: HttpFile, _options?: Configuration): Observable<void> {
        return this.addAttachmentToOfferDraftWithHttpInfo(companySlug, draftId, filename, comment, file, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates the first offer number which is then increased by one with every new offer. By sending an empty request body the default is base number (the first offer number will thus be 10001), but can be specified to another starting value.
     * @param companySlug Slug of company to retrieve
     * @param counter 
     */
    public createOfferCounterWithHttpInfo(companySlug: string, counter?: Counter, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createOfferCounter(companySlug, counter, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOfferCounterWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates the first offer number which is then increased by one with every new offer. By sending an empty request body the default is base number (the first offer number will thus be 10001), but can be specified to another starting value.
     * @param companySlug Slug of company to retrieve
     * @param counter 
     */
    public createOfferCounter(companySlug: string, counter?: Counter, _options?: Configuration): Observable<void> {
        return this.createOfferCounterWithHttpInfo(companySlug, counter, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates an offer draft.
     * @param companySlug Slug of company to retrieve
     * @param invoiceishDraftRequest 
     */
    public createOfferDraftWithHttpInfo(companySlug: string, invoiceishDraftRequest: InvoiceishDraftRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createOfferDraft(companySlug, invoiceishDraftRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOfferDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates an offer draft.
     * @param companySlug Slug of company to retrieve
     * @param invoiceishDraftRequest 
     */
    public createOfferDraft(companySlug: string, invoiceishDraftRequest: InvoiceishDraftRequest, _options?: Configuration): Observable<void> {
        return this.createOfferDraftWithHttpInfo(companySlug, invoiceishDraftRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates an offer from an already created draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public createOfferFromDraftWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createOfferFromDraft(companySlug, draftId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOfferFromDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates an offer from an already created draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public createOfferFromDraft(companySlug: string, draftId: number, _options?: Configuration): Observable<void> {
        return this.createOfferFromDraftWithHttpInfo(companySlug, draftId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete offer draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public deleteOfferDraftWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteOfferDraft(companySlug, draftId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOfferDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete offer draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public deleteOfferDraft(companySlug: string, draftId: number, _options?: Configuration): Observable<void> {
        return this.deleteOfferDraftWithHttpInfo(companySlug, draftId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Returns offer with specified id.
     * @param companySlug Slug of company to retrieve
     * @param offerId The offerId (primary key of the returned object) is returned as the first field in the GET all offers call 
     */
    public getOfferWithHttpInfo(companySlug: string, offerId: string, _options?: Configuration): Observable<HttpInfo<Offer>> {
        const requestContextPromise = this.requestFactory.getOffer(companySlug, offerId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOfferWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns offer with specified id.
     * @param companySlug Slug of company to retrieve
     * @param offerId The offerId (primary key of the returned object) is returned as the first field in the GET all offers call 
     */
    public getOffer(companySlug: string, offerId: string, _options?: Configuration): Observable<Offer> {
        return this.getOfferWithHttpInfo(companySlug, offerId, _options).pipe(map((apiResponse: HttpInfo<Offer>) => apiResponse.data));
    }

    /**
     * Retrieves the counter for offers if it has been created 
     * @param companySlug Slug of company to retrieve
     */
    public getOfferCounterWithHttpInfo(companySlug: string, _options?: Configuration): Observable<HttpInfo<Counter>> {
        const requestContextPromise = this.requestFactory.getOfferCounter(companySlug, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOfferCounterWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the counter for offers if it has been created 
     * @param companySlug Slug of company to retrieve
     */
    public getOfferCounter(companySlug: string, _options?: Configuration): Observable<Counter> {
        return this.getOfferCounterWithHttpInfo(companySlug, _options).pipe(map((apiResponse: HttpInfo<Counter>) => apiResponse.data));
    }

    /**
     * Returns offer draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getOfferDraftWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Observable<HttpInfo<InvoiceishDraftResult>> {
        const requestContextPromise = this.requestFactory.getOfferDraft(companySlug, draftId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOfferDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns offer draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getOfferDraft(companySlug: string, draftId: number, _options?: Configuration): Observable<InvoiceishDraftResult> {
        return this.getOfferDraftWithHttpInfo(companySlug, draftId, _options).pipe(map((apiResponse: HttpInfo<InvoiceishDraftResult>) => apiResponse.data));
    }

    /**
     * Returns all attachments for specified draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getOfferDraftAttachmentsWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Observable<HttpInfo<Array<Attachment>>> {
        const requestContextPromise = this.requestFactory.getOfferDraftAttachments(companySlug, draftId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOfferDraftAttachmentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all attachments for specified draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getOfferDraftAttachments(companySlug: string, draftId: number, _options?: Configuration): Observable<Array<Attachment>> {
        return this.getOfferDraftAttachmentsWithHttpInfo(companySlug, draftId, _options).pipe(map((apiResponse: HttpInfo<Array<Attachment>>) => apiResponse.data));
    }

    /**
     * Returns all offer drafts for given company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     */
    public getOfferDraftsWithHttpInfo(companySlug: string, page?: number, pageSize?: number, _options?: Configuration): Observable<HttpInfo<Array<InvoiceishDraftResult>>> {
        const requestContextPromise = this.requestFactory.getOfferDrafts(companySlug, page, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOfferDraftsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all offer drafts for given company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     */
    public getOfferDrafts(companySlug: string, page?: number, pageSize?: number, _options?: Configuration): Observable<Array<InvoiceishDraftResult>> {
        return this.getOfferDraftsWithHttpInfo(companySlug, page, pageSize, _options).pipe(map((apiResponse: HttpInfo<Array<InvoiceishDraftResult>>) => apiResponse.data));
    }

    /**
     * Returns all offers for given company
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     */
    public getOffersWithHttpInfo(companySlug: string, page?: number, pageSize?: number, _options?: Configuration): Observable<HttpInfo<Array<Offer>>> {
        const requestContextPromise = this.requestFactory.getOffers(companySlug, page, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOffersWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all offers for given company
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     */
    public getOffers(companySlug: string, page?: number, pageSize?: number, _options?: Configuration): Observable<Array<Offer>> {
        return this.getOffersWithHttpInfo(companySlug, page, pageSize, _options).pipe(map((apiResponse: HttpInfo<Array<Offer>>) => apiResponse.data));
    }

    /**
     * Updates offer draft with provided id. 
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param invoiceishDraftRequest 
     */
    public updateOfferDraftWithHttpInfo(companySlug: string, draftId: number, invoiceishDraftRequest: InvoiceishDraftRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateOfferDraft(companySlug, draftId, invoiceishDraftRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateOfferDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates offer draft with provided id. 
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param invoiceishDraftRequest 
     */
    public updateOfferDraft(companySlug: string, draftId: number, invoiceishDraftRequest: InvoiceishDraftRequest, _options?: Configuration): Observable<void> {
        return this.updateOfferDraftWithHttpInfo(companySlug, draftId, invoiceishDraftRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { OrderConfirmationsApiRequestFactory, OrderConfirmationsApiResponseProcessor} from "../apis/OrderConfirmationsApi";
export class ObservableOrderConfirmationsApi {
    private requestFactory: OrderConfirmationsApiRequestFactory;
    private responseProcessor: OrderConfirmationsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: OrderConfirmationsApiRequestFactory,
        responseProcessor?: OrderConfirmationsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new OrderConfirmationsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new OrderConfirmationsApiResponseProcessor();
    }

    /**
     * Creates and adds a new attachment to an order confirmation draft
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param filename Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param comment Not required.
     * @param file 
     */
    public addAttachmentToOrderConfirmationDraftWithHttpInfo(companySlug: string, draftId: number, filename?: string, comment?: string, file?: HttpFile, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.addAttachmentToOrderConfirmationDraft(companySlug, draftId, filename, comment, file, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addAttachmentToOrderConfirmationDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates and adds a new attachment to an order confirmation draft
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param filename Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param comment Not required.
     * @param file 
     */
    public addAttachmentToOrderConfirmationDraft(companySlug: string, draftId: number, filename?: string, comment?: string, file?: HttpFile, _options?: Configuration): Observable<void> {
        return this.addAttachmentToOrderConfirmationDraftWithHttpInfo(companySlug, draftId, filename, comment, file, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates an invoice draft from an order confirmation
     * @param companySlug Slug of company to retrieve
     * @param confirmationId The confirmationId (primary key of the returned object) is returned as the first field in the GET all order confirmations call 
     */
    public createInvoiceDraftFromOrderConfirmationWithHttpInfo(companySlug: string, confirmationId: string, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createInvoiceDraftFromOrderConfirmation(companySlug, confirmationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createInvoiceDraftFromOrderConfirmationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates an invoice draft from an order confirmation
     * @param companySlug Slug of company to retrieve
     * @param confirmationId The confirmationId (primary key of the returned object) is returned as the first field in the GET all order confirmations call 
     */
    public createInvoiceDraftFromOrderConfirmation(companySlug: string, confirmationId: string, _options?: Configuration): Observable<void> {
        return this.createInvoiceDraftFromOrderConfirmationWithHttpInfo(companySlug, confirmationId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates the first order confirmation number which is then increased by one with every new order confirmation. By sending an empty request body the default is base number (the first order confirmation number will thus be 10001), but can be specified to another starting value.
     * @param companySlug Slug of company to retrieve
     * @param counter 
     */
    public createOrderConfirmationCounterWithHttpInfo(companySlug: string, counter?: Counter, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createOrderConfirmationCounter(companySlug, counter, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOrderConfirmationCounterWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates the first order confirmation number which is then increased by one with every new order confirmation. By sending an empty request body the default is base number (the first order confirmation number will thus be 10001), but can be specified to another starting value.
     * @param companySlug Slug of company to retrieve
     * @param counter 
     */
    public createOrderConfirmationCounter(companySlug: string, counter?: Counter, _options?: Configuration): Observable<void> {
        return this.createOrderConfirmationCounterWithHttpInfo(companySlug, counter, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates an order confirmation draft.
     * @param companySlug Slug of company to retrieve
     * @param invoiceishDraftRequest 
     */
    public createOrderConfirmationDraftWithHttpInfo(companySlug: string, invoiceishDraftRequest: InvoiceishDraftRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createOrderConfirmationDraft(companySlug, invoiceishDraftRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOrderConfirmationDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates an order confirmation draft.
     * @param companySlug Slug of company to retrieve
     * @param invoiceishDraftRequest 
     */
    public createOrderConfirmationDraft(companySlug: string, invoiceishDraftRequest: InvoiceishDraftRequest, _options?: Configuration): Observable<void> {
        return this.createOrderConfirmationDraftWithHttpInfo(companySlug, invoiceishDraftRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates an order confirmation from an already created draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public createOrderConfirmationFromDraftWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createOrderConfirmationFromDraft(companySlug, draftId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createOrderConfirmationFromDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates an order confirmation from an already created draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public createOrderConfirmationFromDraft(companySlug: string, draftId: number, _options?: Configuration): Observable<void> {
        return this.createOrderConfirmationFromDraftWithHttpInfo(companySlug, draftId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete order confirmation draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public deleteOrderConfirmationDraftWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteOrderConfirmationDraft(companySlug, draftId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteOrderConfirmationDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete order confirmation draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public deleteOrderConfirmationDraft(companySlug: string, draftId: number, _options?: Configuration): Observable<void> {
        return this.deleteOrderConfirmationDraftWithHttpInfo(companySlug, draftId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Returns order confirmation with specified id.
     * @param companySlug Slug of company to retrieve
     * @param confirmationId The confirmationId (primary key of the returned object) is returned as the first field in the GET all order confirmations call 
     */
    public getOrderConfirmationWithHttpInfo(companySlug: string, confirmationId: string, _options?: Configuration): Observable<HttpInfo<OrderConfirmation>> {
        const requestContextPromise = this.requestFactory.getOrderConfirmation(companySlug, confirmationId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrderConfirmationWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns order confirmation with specified id.
     * @param companySlug Slug of company to retrieve
     * @param confirmationId The confirmationId (primary key of the returned object) is returned as the first field in the GET all order confirmations call 
     */
    public getOrderConfirmation(companySlug: string, confirmationId: string, _options?: Configuration): Observable<OrderConfirmation> {
        return this.getOrderConfirmationWithHttpInfo(companySlug, confirmationId, _options).pipe(map((apiResponse: HttpInfo<OrderConfirmation>) => apiResponse.data));
    }

    /**
     * Retrieves the counter for order confirmations if it has been created 
     * @param companySlug Slug of company to retrieve
     */
    public getOrderConfirmationCounterWithHttpInfo(companySlug: string, _options?: Configuration): Observable<HttpInfo<Counter>> {
        const requestContextPromise = this.requestFactory.getOrderConfirmationCounter(companySlug, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrderConfirmationCounterWithHttpInfo(rsp)));
            }));
    }

    /**
     * Retrieves the counter for order confirmations if it has been created 
     * @param companySlug Slug of company to retrieve
     */
    public getOrderConfirmationCounter(companySlug: string, _options?: Configuration): Observable<Counter> {
        return this.getOrderConfirmationCounterWithHttpInfo(companySlug, _options).pipe(map((apiResponse: HttpInfo<Counter>) => apiResponse.data));
    }

    /**
     * Returns order confirmation draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getOrderConfirmationDraftWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Observable<HttpInfo<InvoiceishDraftResult>> {
        const requestContextPromise = this.requestFactory.getOrderConfirmationDraft(companySlug, draftId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrderConfirmationDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns order confirmation draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getOrderConfirmationDraft(companySlug: string, draftId: number, _options?: Configuration): Observable<InvoiceishDraftResult> {
        return this.getOrderConfirmationDraftWithHttpInfo(companySlug, draftId, _options).pipe(map((apiResponse: HttpInfo<InvoiceishDraftResult>) => apiResponse.data));
    }

    /**
     * Returns all attachments for specified draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getOrderConfirmationDraftAttachmentsWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Observable<HttpInfo<Array<Attachment>>> {
        const requestContextPromise = this.requestFactory.getOrderConfirmationDraftAttachments(companySlug, draftId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrderConfirmationDraftAttachmentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all attachments for specified draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getOrderConfirmationDraftAttachments(companySlug: string, draftId: number, _options?: Configuration): Observable<Array<Attachment>> {
        return this.getOrderConfirmationDraftAttachmentsWithHttpInfo(companySlug, draftId, _options).pipe(map((apiResponse: HttpInfo<Array<Attachment>>) => apiResponse.data));
    }

    /**
     * Returns all order confirmation drafts for given company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     */
    public getOrderConfirmationDraftsWithHttpInfo(companySlug: string, page?: number, pageSize?: number, _options?: Configuration): Observable<HttpInfo<Array<InvoiceishDraftResult>>> {
        const requestContextPromise = this.requestFactory.getOrderConfirmationDrafts(companySlug, page, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrderConfirmationDraftsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all order confirmation drafts for given company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     */
    public getOrderConfirmationDrafts(companySlug: string, page?: number, pageSize?: number, _options?: Configuration): Observable<Array<InvoiceishDraftResult>> {
        return this.getOrderConfirmationDraftsWithHttpInfo(companySlug, page, pageSize, _options).pipe(map((apiResponse: HttpInfo<Array<InvoiceishDraftResult>>) => apiResponse.data));
    }

    /**
     * Returns all order confirmations for given company
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     */
    public getOrderConfirmationsWithHttpInfo(companySlug: string, page?: number, pageSize?: number, _options?: Configuration): Observable<HttpInfo<Array<OrderConfirmation>>> {
        const requestContextPromise = this.requestFactory.getOrderConfirmations(companySlug, page, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getOrderConfirmationsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all order confirmations for given company
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     */
    public getOrderConfirmations(companySlug: string, page?: number, pageSize?: number, _options?: Configuration): Observable<Array<OrderConfirmation>> {
        return this.getOrderConfirmationsWithHttpInfo(companySlug, page, pageSize, _options).pipe(map((apiResponse: HttpInfo<Array<OrderConfirmation>>) => apiResponse.data));
    }

    /**
     * Updates order confirmation draft with provided id. 
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param invoiceishDraftRequest 
     */
    public updateOrderConfirmationDraftWithHttpInfo(companySlug: string, draftId: number, invoiceishDraftRequest: InvoiceishDraftRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateOrderConfirmationDraft(companySlug, draftId, invoiceishDraftRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateOrderConfirmationDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates order confirmation draft with provided id. 
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param invoiceishDraftRequest 
     */
    public updateOrderConfirmationDraft(companySlug: string, draftId: number, invoiceishDraftRequest: InvoiceishDraftRequest, _options?: Configuration): Observable<void> {
        return this.updateOrderConfirmationDraftWithHttpInfo(companySlug, draftId, invoiceishDraftRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { ProductsApiRequestFactory, ProductsApiResponseProcessor} from "../apis/ProductsApi";
export class ObservableProductsApi {
    private requestFactory: ProductsApiRequestFactory;
    private responseProcessor: ProductsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProductsApiRequestFactory,
        responseProcessor?: ProductsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProductsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProductsApiResponseProcessor();
    }

    /**
     * Creates a new product.
     * @param companySlug Slug of company to retrieve
     * @param product 
     */
    public createProductWithHttpInfo(companySlug: string, product: Product, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createProduct(companySlug, product, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new product.
     * @param companySlug Slug of company to retrieve
     * @param product 
     */
    public createProduct(companySlug: string, product: Product, _options?: Configuration): Observable<void> {
        return this.createProductWithHttpInfo(companySlug, product, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates a report based on provided specifications.
     * @param companySlug Slug of company to retrieve
     * @param productSalesReportRequest 
     */
    public createProductSalesReportWithHttpInfo(companySlug: string, productSalesReportRequest: ProductSalesReportRequest, _options?: Configuration): Observable<HttpInfo<Array<ProductSalesReportResult>>> {
        const requestContextPromise = this.requestFactory.createProductSalesReport(companySlug, productSalesReportRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createProductSalesReportWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a report based on provided specifications.
     * @param companySlug Slug of company to retrieve
     * @param productSalesReportRequest 
     */
    public createProductSalesReport(companySlug: string, productSalesReportRequest: ProductSalesReportRequest, _options?: Configuration): Observable<Array<ProductSalesReportResult>> {
        return this.createProductSalesReportWithHttpInfo(companySlug, productSalesReportRequest, _options).pipe(map((apiResponse: HttpInfo<Array<ProductSalesReportResult>>) => apiResponse.data));
    }

    /**
     * Delete product with specified id.
     * @param companySlug Slug of company to retrieve
     * @param productId The productId (primary key of the returned object) is returned in the GET all products call; not to be confused with productNumber. 
     */
    public deleteProductWithHttpInfo(companySlug: string, productId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteProduct(companySlug, productId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete product with specified id.
     * @param companySlug Slug of company to retrieve
     * @param productId The productId (primary key of the returned object) is returned in the GET all products call; not to be confused with productNumber. 
     */
    public deleteProduct(companySlug: string, productId: number, _options?: Configuration): Observable<void> {
        return this.deleteProductWithHttpInfo(companySlug, productId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Returns product with specified id.
     * @param companySlug Slug of company to retrieve
     * @param productId The productId (primary key of the returned object) is returned in the GET all products call; not to be confused with productNumber. 
     */
    public getProductWithHttpInfo(companySlug: string, productId: number, _options?: Configuration): Observable<HttpInfo<Product>> {
        const requestContextPromise = this.requestFactory.getProduct(companySlug, productId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns product with specified id.
     * @param companySlug Slug of company to retrieve
     * @param productId The productId (primary key of the returned object) is returned in the GET all products call; not to be confused with productNumber. 
     */
    public getProduct(companySlug: string, productId: number, _options?: Configuration): Observable<Product> {
        return this.getProductWithHttpInfo(companySlug, productId, _options).pipe(map((apiResponse: HttpInfo<Product>) => apiResponse.data));
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
    public getProductsWithHttpInfo(companySlug: string, page?: number, pageSize?: number, createdDate?: string, createdDateLe?: string, createdDateLt?: string, createdDateGe?: string, createdDateGt?: string, lastModified?: string, lastModifiedLe?: string, lastModifiedLt?: string, lastModifiedGe?: string, lastModifiedGt?: string, name?: string, productNumber?: string, active?: boolean, _options?: Configuration): Observable<HttpInfo<Array<Product>>> {
        const requestContextPromise = this.requestFactory.getProducts(companySlug, page, pageSize, createdDate, createdDateLe, createdDateLt, createdDateGe, createdDateGt, lastModified, lastModifiedLe, lastModifiedLt, lastModifiedGe, lastModifiedGt, name, productNumber, active, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProductsWithHttpInfo(rsp)));
            }));
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
    public getProducts(companySlug: string, page?: number, pageSize?: number, createdDate?: string, createdDateLe?: string, createdDateLt?: string, createdDateGe?: string, createdDateGt?: string, lastModified?: string, lastModifiedLe?: string, lastModifiedLt?: string, lastModifiedGe?: string, lastModifiedGt?: string, name?: string, productNumber?: string, active?: boolean, _options?: Configuration): Observable<Array<Product>> {
        return this.getProductsWithHttpInfo(companySlug, page, pageSize, createdDate, createdDateLe, createdDateLt, createdDateGe, createdDateGt, lastModified, lastModifiedLe, lastModifiedLt, lastModifiedGe, lastModifiedGt, name, productNumber, active, _options).pipe(map((apiResponse: HttpInfo<Array<Product>>) => apiResponse.data));
    }

    /**
     * Updates an existing product.
     * @param companySlug Slug of company to retrieve
     * @param productId The productId (primary key of the returned object) is returned in the GET all products call; not to be confused with productNumber. 
     * @param product 
     */
    public updateProductWithHttpInfo(companySlug: string, productId: number, product: Product, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateProduct(companySlug, productId, product, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateProductWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates an existing product.
     * @param companySlug Slug of company to retrieve
     * @param productId The productId (primary key of the returned object) is returned in the GET all products call; not to be confused with productNumber. 
     * @param product 
     */
    public updateProduct(companySlug: string, productId: number, product: Product, _options?: Configuration): Observable<void> {
        return this.updateProductWithHttpInfo(companySlug, productId, product, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { ProjectsApiRequestFactory, ProjectsApiResponseProcessor} from "../apis/ProjectsApi";
export class ObservableProjectsApi {
    private requestFactory: ProjectsApiRequestFactory;
    private responseProcessor: ProjectsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: ProjectsApiRequestFactory,
        responseProcessor?: ProjectsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new ProjectsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new ProjectsApiResponseProcessor();
    }

    /**
     * Creates a new project
     * @param companySlug Slug of company to retrieve
     * @param projectRequest 
     */
    public createProjectWithHttpInfo(companySlug: string, projectRequest: ProjectRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createProject(companySlug, projectRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createProjectWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new project
     * @param companySlug Slug of company to retrieve
     * @param projectRequest 
     */
    public createProject(companySlug: string, projectRequest: ProjectRequest, _options?: Configuration): Observable<void> {
        return this.createProjectWithHttpInfo(companySlug, projectRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Delete project with specified id.
     * @param companySlug Slug of company to retrieve
     * @param projectId 
     */
    public deleteProjectWithHttpInfo(companySlug: string, projectId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteProject(companySlug, projectId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteProjectWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete project with specified id.
     * @param companySlug Slug of company to retrieve
     * @param projectId 
     */
    public deleteProject(companySlug: string, projectId: number, _options?: Configuration): Observable<void> {
        return this.deleteProjectWithHttpInfo(companySlug, projectId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Returns project with specified id.
     * @param companySlug Slug of company to retrieve
     * @param projectId 
     */
    public getProjectWithHttpInfo(companySlug: string, projectId: number, _options?: Configuration): Observable<HttpInfo<ProjectResult>> {
        const requestContextPromise = this.requestFactory.getProject(companySlug, projectId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProjectWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns project with specified id.
     * @param companySlug Slug of company to retrieve
     * @param projectId 
     */
    public getProject(companySlug: string, projectId: number, _options?: Configuration): Observable<ProjectResult> {
        return this.getProjectWithHttpInfo(companySlug, projectId, _options).pipe(map((apiResponse: HttpInfo<ProjectResult>) => apiResponse.data));
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
    public getProjectsWithHttpInfo(companySlug: string, page?: number, pageSize?: number, completed?: boolean, name?: string, number?: string, _options?: Configuration): Observable<HttpInfo<Array<ProjectResult>>> {
        const requestContextPromise = this.requestFactory.getProjects(companySlug, page, pageSize, completed, name, number, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getProjectsWithHttpInfo(rsp)));
            }));
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
    public getProjects(companySlug: string, page?: number, pageSize?: number, completed?: boolean, name?: string, number?: string, _options?: Configuration): Observable<Array<ProjectResult>> {
        return this.getProjectsWithHttpInfo(companySlug, page, pageSize, completed, name, number, _options).pipe(map((apiResponse: HttpInfo<Array<ProjectResult>>) => apiResponse.data));
    }

    /**
     * Updates project with provided id. 
     * @param companySlug Slug of company to retrieve
     * @param projectId 
     * @param updateProjectRequest 
     */
    public updateProjectWithHttpInfo(companySlug: string, projectId: number, updateProjectRequest: UpdateProjectRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateProject(companySlug, projectId, updateProjectRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateProjectWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates project with provided id. 
     * @param companySlug Slug of company to retrieve
     * @param projectId 
     * @param updateProjectRequest 
     */
    public updateProject(companySlug: string, projectId: number, updateProjectRequest: UpdateProjectRequest, _options?: Configuration): Observable<void> {
        return this.updateProjectWithHttpInfo(companySlug, projectId, updateProjectRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { PurchasesApiRequestFactory, PurchasesApiResponseProcessor} from "../apis/PurchasesApi";
export class ObservablePurchasesApi {
    private requestFactory: PurchasesApiRequestFactory;
    private responseProcessor: PurchasesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: PurchasesApiRequestFactory,
        responseProcessor?: PurchasesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new PurchasesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new PurchasesApiResponseProcessor();
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
    public addAttachmentToPurchaseWithHttpInfo(companySlug: string, purchaseId: number, filename?: string, attachToPayment?: boolean, attachToSale?: boolean, file?: HttpFile, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.addAttachmentToPurchase(companySlug, purchaseId, filename, attachToPayment, attachToSale, file, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addAttachmentToPurchaseWithHttpInfo(rsp)));
            }));
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
    public addAttachmentToPurchase(companySlug: string, purchaseId: number, filename?: string, attachToPayment?: boolean, attachToSale?: boolean, file?: HttpFile, _options?: Configuration): Observable<void> {
        return this.addAttachmentToPurchaseWithHttpInfo(companySlug, purchaseId, filename, attachToPayment, attachToSale, file, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates and adds a new attachment to a draft
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param filename Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param file 
     */
    public addAttachmentToPurchaseDraftWithHttpInfo(companySlug: string, draftId: number, filename?: string, file?: HttpFile, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.addAttachmentToPurchaseDraft(companySlug, draftId, filename, file, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addAttachmentToPurchaseDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates and adds a new attachment to a draft
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param filename Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param file 
     */
    public addAttachmentToPurchaseDraft(companySlug: string, draftId: number, filename?: string, file?: HttpFile, _options?: Configuration): Observable<void> {
        return this.addAttachmentToPurchaseDraftWithHttpInfo(companySlug, draftId, filename, file, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates a new purchase.
     * @param companySlug Slug of company to retrieve
     * @param purchaseRequest 
     */
    public createPurchaseWithHttpInfo(companySlug: string, purchaseRequest: PurchaseRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createPurchase(companySlug, purchaseRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPurchaseWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new purchase.
     * @param companySlug Slug of company to retrieve
     * @param purchaseRequest 
     */
    public createPurchase(companySlug: string, purchaseRequest: PurchaseRequest, _options?: Configuration): Observable<void> {
        return this.createPurchaseWithHttpInfo(companySlug, purchaseRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates a purchase draft.
     * @param companySlug Slug of company to retrieve
     * @param draftRequest 
     */
    public createPurchaseDraftWithHttpInfo(companySlug: string, draftRequest: DraftRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createPurchaseDraft(companySlug, draftRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPurchaseDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a purchase draft.
     * @param companySlug Slug of company to retrieve
     * @param draftRequest 
     */
    public createPurchaseDraft(companySlug: string, draftRequest: DraftRequest, _options?: Configuration): Observable<void> {
        return this.createPurchaseDraftWithHttpInfo(companySlug, draftRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates a purchase from an already created draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public createPurchaseFromDraftWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createPurchaseFromDraft(companySlug, draftId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPurchaseFromDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a purchase from an already created draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public createPurchaseFromDraft(companySlug: string, draftId: number, _options?: Configuration): Observable<void> {
        return this.createPurchaseFromDraftWithHttpInfo(companySlug, draftId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates a new payment for a purchase
     * @param companySlug Slug of company to retrieve
     * @param purchaseId 
     * @param payment 
     */
    public createPurchasePaymentWithHttpInfo(companySlug: string, purchaseId: number, payment: Payment, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createPurchasePayment(companySlug, purchaseId, payment, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createPurchasePaymentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new payment for a purchase
     * @param companySlug Slug of company to retrieve
     * @param purchaseId 
     * @param payment 
     */
    public createPurchasePayment(companySlug: string, purchaseId: number, payment: Payment, _options?: Configuration): Observable<void> {
        return this.createPurchasePaymentWithHttpInfo(companySlug, purchaseId, payment, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Sets the deleted flag for a purchase. The purchase is not deleted, but a reverse transaction is created and the \"deleted\" property is set to true.
     * @param companySlug Slug of company to retrieve
     * @param purchaseId 
     * @param description Required description for deleting the purchase
     */
    public deletePurchaseWithHttpInfo(companySlug: string, purchaseId: number, description: string, _options?: Configuration): Observable<HttpInfo<PurchaseResult>> {
        const requestContextPromise = this.requestFactory.deletePurchase(companySlug, purchaseId, description, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deletePurchaseWithHttpInfo(rsp)));
            }));
    }

    /**
     * Sets the deleted flag for a purchase. The purchase is not deleted, but a reverse transaction is created and the \"deleted\" property is set to true.
     * @param companySlug Slug of company to retrieve
     * @param purchaseId 
     * @param description Required description for deleting the purchase
     */
    public deletePurchase(companySlug: string, purchaseId: number, description: string, _options?: Configuration): Observable<PurchaseResult> {
        return this.deletePurchaseWithHttpInfo(companySlug, purchaseId, description, _options).pipe(map((apiResponse: HttpInfo<PurchaseResult>) => apiResponse.data));
    }

    /**
     * Delete draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public deletePurchaseDraftWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deletePurchaseDraft(companySlug, draftId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deletePurchaseDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public deletePurchaseDraft(companySlug: string, draftId: number, _options?: Configuration): Observable<void> {
        return this.deletePurchaseDraftWithHttpInfo(companySlug, draftId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Returns purchase with specified id.
     * @param companySlug Slug of company to retrieve
     * @param purchaseId 
     */
    public getPurchaseWithHttpInfo(companySlug: string, purchaseId: number, _options?: Configuration): Observable<HttpInfo<PurchaseResult>> {
        const requestContextPromise = this.requestFactory.getPurchase(companySlug, purchaseId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPurchaseWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns purchase with specified id.
     * @param companySlug Slug of company to retrieve
     * @param purchaseId 
     */
    public getPurchase(companySlug: string, purchaseId: number, _options?: Configuration): Observable<PurchaseResult> {
        return this.getPurchaseWithHttpInfo(companySlug, purchaseId, _options).pipe(map((apiResponse: HttpInfo<PurchaseResult>) => apiResponse.data));
    }

    /**
     * Returns all attachments for specified purchase.
     * @param companySlug Slug of company to retrieve
     * @param purchaseId 
     */
    public getPurchaseAttachmentsWithHttpInfo(companySlug: string, purchaseId: number, _options?: Configuration): Observable<HttpInfo<Array<Attachment>>> {
        const requestContextPromise = this.requestFactory.getPurchaseAttachments(companySlug, purchaseId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPurchaseAttachmentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all attachments for specified purchase.
     * @param companySlug Slug of company to retrieve
     * @param purchaseId 
     */
    public getPurchaseAttachments(companySlug: string, purchaseId: number, _options?: Configuration): Observable<Array<Attachment>> {
        return this.getPurchaseAttachmentsWithHttpInfo(companySlug, purchaseId, _options).pipe(map((apiResponse: HttpInfo<Array<Attachment>>) => apiResponse.data));
    }

    /**
     * Returns draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getPurchaseDraftWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Observable<HttpInfo<DraftResult>> {
        const requestContextPromise = this.requestFactory.getPurchaseDraft(companySlug, draftId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPurchaseDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getPurchaseDraft(companySlug: string, draftId: number, _options?: Configuration): Observable<DraftResult> {
        return this.getPurchaseDraftWithHttpInfo(companySlug, draftId, _options).pipe(map((apiResponse: HttpInfo<DraftResult>) => apiResponse.data));
    }

    /**
     * Returns all attachments for specified draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getPurchaseDraftAttachmentsWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Observable<HttpInfo<Array<Attachment>>> {
        const requestContextPromise = this.requestFactory.getPurchaseDraftAttachments(companySlug, draftId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPurchaseDraftAttachmentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all attachments for specified draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getPurchaseDraftAttachments(companySlug: string, draftId: number, _options?: Configuration): Observable<Array<Attachment>> {
        return this.getPurchaseDraftAttachmentsWithHttpInfo(companySlug, draftId, _options).pipe(map((apiResponse: HttpInfo<Array<Attachment>>) => apiResponse.data));
    }

    /**
     * Returns all purchase drafts for given company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     */
    public getPurchaseDraftsWithHttpInfo(companySlug: string, page?: number, pageSize?: number, _options?: Configuration): Observable<HttpInfo<Array<DraftResult>>> {
        const requestContextPromise = this.requestFactory.getPurchaseDrafts(companySlug, page, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPurchaseDraftsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all purchase drafts for given company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     */
    public getPurchaseDrafts(companySlug: string, page?: number, pageSize?: number, _options?: Configuration): Observable<Array<DraftResult>> {
        return this.getPurchaseDraftsWithHttpInfo(companySlug, page, pageSize, _options).pipe(map((apiResponse: HttpInfo<Array<DraftResult>>) => apiResponse.data));
    }

    /**
     * Returns given payment for specified purchase
     * @param companySlug Slug of company to retrieve
     * @param purchaseId 
     * @param paymentId 
     */
    public getPurchasePaymentWithHttpInfo(companySlug: string, purchaseId: number, paymentId: number, _options?: Configuration): Observable<HttpInfo<Payment>> {
        const requestContextPromise = this.requestFactory.getPurchasePayment(companySlug, purchaseId, paymentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPurchasePaymentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns given payment for specified purchase
     * @param companySlug Slug of company to retrieve
     * @param purchaseId 
     * @param paymentId 
     */
    public getPurchasePayment(companySlug: string, purchaseId: number, paymentId: number, _options?: Configuration): Observable<Payment> {
        return this.getPurchasePaymentWithHttpInfo(companySlug, purchaseId, paymentId, _options).pipe(map((apiResponse: HttpInfo<Payment>) => apiResponse.data));
    }

    /**
     * Returns all purchases for given company
     * @param companySlug Slug of company to retrieve
     * @param purchaseId 
     */
    public getPurchasePaymentsWithHttpInfo(companySlug: string, purchaseId: number, _options?: Configuration): Observable<HttpInfo<Array<Payment>>> {
        const requestContextPromise = this.requestFactory.getPurchasePayments(companySlug, purchaseId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPurchasePaymentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all purchases for given company
     * @param companySlug Slug of company to retrieve
     * @param purchaseId 
     */
    public getPurchasePayments(companySlug: string, purchaseId: number, _options?: Configuration): Observable<Array<Payment>> {
        return this.getPurchasePaymentsWithHttpInfo(companySlug, purchaseId, _options).pipe(map((apiResponse: HttpInfo<Array<Payment>>) => apiResponse.data));
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
    public getPurchasesWithHttpInfo(companySlug: string, page?: number, pageSize?: number, date?: string, dateLe?: string, dateLt?: string, dateGe?: string, dateGt?: string, sortBy?: 'date asc' | 'date desc', paid?: boolean, _options?: Configuration): Observable<HttpInfo<Array<PurchaseResult>>> {
        const requestContextPromise = this.requestFactory.getPurchases(companySlug, page, pageSize, date, dateLe, dateLt, dateGe, dateGt, sortBy, paid, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getPurchasesWithHttpInfo(rsp)));
            }));
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
    public getPurchases(companySlug: string, page?: number, pageSize?: number, date?: string, dateLe?: string, dateLt?: string, dateGe?: string, dateGt?: string, sortBy?: 'date asc' | 'date desc', paid?: boolean, _options?: Configuration): Observable<Array<PurchaseResult>> {
        return this.getPurchasesWithHttpInfo(companySlug, page, pageSize, date, dateLe, dateLt, dateGe, dateGt, sortBy, paid, _options).pipe(map((apiResponse: HttpInfo<Array<PurchaseResult>>) => apiResponse.data));
    }

    /**
     * Updates draft with provided id. 
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param draftRequest 
     */
    public updatePurchaseDraftWithHttpInfo(companySlug: string, draftId: number, draftRequest: DraftRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updatePurchaseDraft(companySlug, draftId, draftRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updatePurchaseDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates draft with provided id. 
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param draftRequest 
     */
    public updatePurchaseDraft(companySlug: string, draftId: number, draftRequest: DraftRequest, _options?: Configuration): Observable<void> {
        return this.updatePurchaseDraftWithHttpInfo(companySlug, draftId, draftRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { SalesApiRequestFactory, SalesApiResponseProcessor} from "../apis/SalesApi";
export class ObservableSalesApi {
    private requestFactory: SalesApiRequestFactory;
    private responseProcessor: SalesApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: SalesApiRequestFactory,
        responseProcessor?: SalesApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new SalesApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new SalesApiResponseProcessor();
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
    public addAttachmentToSaleWithHttpInfo(companySlug: string, saleId: number, filename?: string, attachToPayment?: boolean, attachToSale?: boolean, file?: HttpFile, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.addAttachmentToSale(companySlug, saleId, filename, attachToPayment, attachToSale, file, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addAttachmentToSaleWithHttpInfo(rsp)));
            }));
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
    public addAttachmentToSale(companySlug: string, saleId: number, filename?: string, attachToPayment?: boolean, attachToSale?: boolean, file?: HttpFile, _options?: Configuration): Observable<void> {
        return this.addAttachmentToSaleWithHttpInfo(companySlug, saleId, filename, attachToPayment, attachToSale, file, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates and adds a new attachment to a draft
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param filename Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param file 
     */
    public addAttachmentToSaleDraftWithHttpInfo(companySlug: string, draftId: number, filename?: string, file?: HttpFile, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.addAttachmentToSaleDraft(companySlug, draftId, filename, file, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.addAttachmentToSaleDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates and adds a new attachment to a draft
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param filename Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
     * @param file 
     */
    public addAttachmentToSaleDraft(companySlug: string, draftId: number, filename?: string, file?: HttpFile, _options?: Configuration): Observable<void> {
        return this.addAttachmentToSaleDraftWithHttpInfo(companySlug, draftId, filename, file, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates a new sale. This corresponds to \"Annet salg\" in Fiken and should be used when the invoice document and invoice number have been created outside Fiken. Otherwise the invoices-endpoints should be used.
     * @param companySlug Slug of company to retrieve
     * @param saleRequest 
     */
    public createSaleWithHttpInfo(companySlug: string, saleRequest: SaleRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createSale(companySlug, saleRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSaleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new sale. This corresponds to \"Annet salg\" in Fiken and should be used when the invoice document and invoice number have been created outside Fiken. Otherwise the invoices-endpoints should be used.
     * @param companySlug Slug of company to retrieve
     * @param saleRequest 
     */
    public createSale(companySlug: string, saleRequest: SaleRequest, _options?: Configuration): Observable<void> {
        return this.createSaleWithHttpInfo(companySlug, saleRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates a sale draft.
     * @param companySlug Slug of company to retrieve
     * @param draftRequest 
     */
    public createSaleDraftWithHttpInfo(companySlug: string, draftRequest: DraftRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createSaleDraft(companySlug, draftRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSaleDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a sale draft.
     * @param companySlug Slug of company to retrieve
     * @param draftRequest 
     */
    public createSaleDraft(companySlug: string, draftRequest: DraftRequest, _options?: Configuration): Observable<void> {
        return this.createSaleDraftWithHttpInfo(companySlug, draftRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates a sale from an already created draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public createSaleFromDraftWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createSaleFromDraft(companySlug, draftId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSaleFromDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a sale from an already created draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public createSaleFromDraft(companySlug: string, draftId: number, _options?: Configuration): Observable<void> {
        return this.createSaleFromDraftWithHttpInfo(companySlug, draftId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Creates a new payment for a given sale.
     * @param companySlug Slug of company to retrieve
     * @param saleId 
     * @param payment 
     */
    public createSalePaymentWithHttpInfo(companySlug: string, saleId: number, payment: Payment, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.createSalePayment(companySlug, saleId, payment, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.createSalePaymentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Creates a new payment for a given sale.
     * @param companySlug Slug of company to retrieve
     * @param saleId 
     * @param payment 
     */
    public createSalePayment(companySlug: string, saleId: number, payment: Payment, _options?: Configuration): Observable<void> {
        return this.createSalePaymentWithHttpInfo(companySlug, saleId, payment, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Sets the deleted flag for a sale. The sale is not deleted, but a reverse transaction is created and the \"deleted\" property is set to true.
     * @param companySlug Slug of company to retrieve
     * @param saleId 
     * @param description Required description for deleting the sale
     */
    public deleteSaleWithHttpInfo(companySlug: string, saleId: number, description: string, _options?: Configuration): Observable<HttpInfo<SaleResult>> {
        const requestContextPromise = this.requestFactory.deleteSale(companySlug, saleId, description, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteSaleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Sets the deleted flag for a sale. The sale is not deleted, but a reverse transaction is created and the \"deleted\" property is set to true.
     * @param companySlug Slug of company to retrieve
     * @param saleId 
     * @param description Required description for deleting the sale
     */
    public deleteSale(companySlug: string, saleId: number, description: string, _options?: Configuration): Observable<SaleResult> {
        return this.deleteSaleWithHttpInfo(companySlug, saleId, description, _options).pipe(map((apiResponse: HttpInfo<SaleResult>) => apiResponse.data));
    }

    /**
     * Delete draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public deleteSaleDraftWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.deleteSaleDraft(companySlug, draftId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.deleteSaleDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Delete draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public deleteSaleDraft(companySlug: string, draftId: number, _options?: Configuration): Observable<void> {
        return this.deleteSaleDraftWithHttpInfo(companySlug, draftId, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

    /**
     * Returns sale with specified id.
     * @param companySlug Slug of company to retrieve
     * @param saleId 
     */
    public getSaleWithHttpInfo(companySlug: string, saleId: number, _options?: Configuration): Observable<HttpInfo<SaleResult>> {
        const requestContextPromise = this.requestFactory.getSale(companySlug, saleId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSaleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns sale with specified id.
     * @param companySlug Slug of company to retrieve
     * @param saleId 
     */
    public getSale(companySlug: string, saleId: number, _options?: Configuration): Observable<SaleResult> {
        return this.getSaleWithHttpInfo(companySlug, saleId, _options).pipe(map((apiResponse: HttpInfo<SaleResult>) => apiResponse.data));
    }

    /**
     * Returns all attachments for specified sale.
     * @param companySlug Slug of company to retrieve
     * @param saleId 
     */
    public getSaleAttachmentsWithHttpInfo(companySlug: string, saleId: number, _options?: Configuration): Observable<HttpInfo<Array<Attachment>>> {
        const requestContextPromise = this.requestFactory.getSaleAttachments(companySlug, saleId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSaleAttachmentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all attachments for specified sale.
     * @param companySlug Slug of company to retrieve
     * @param saleId 
     */
    public getSaleAttachments(companySlug: string, saleId: number, _options?: Configuration): Observable<Array<Attachment>> {
        return this.getSaleAttachmentsWithHttpInfo(companySlug, saleId, _options).pipe(map((apiResponse: HttpInfo<Array<Attachment>>) => apiResponse.data));
    }

    /**
     * Returns draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getSaleDraftWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Observable<HttpInfo<DraftResult>> {
        const requestContextPromise = this.requestFactory.getSaleDraft(companySlug, draftId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSaleDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns draft with specified id.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getSaleDraft(companySlug: string, draftId: number, _options?: Configuration): Observable<DraftResult> {
        return this.getSaleDraftWithHttpInfo(companySlug, draftId, _options).pipe(map((apiResponse: HttpInfo<DraftResult>) => apiResponse.data));
    }

    /**
     * Returns all attachments for specified draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getSaleDraftAttachmentsWithHttpInfo(companySlug: string, draftId: number, _options?: Configuration): Observable<HttpInfo<Array<Attachment>>> {
        const requestContextPromise = this.requestFactory.getSaleDraftAttachments(companySlug, draftId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSaleDraftAttachmentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all attachments for specified draft.
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     */
    public getSaleDraftAttachments(companySlug: string, draftId: number, _options?: Configuration): Observable<Array<Attachment>> {
        return this.getSaleDraftAttachmentsWithHttpInfo(companySlug, draftId, _options).pipe(map((apiResponse: HttpInfo<Array<Attachment>>) => apiResponse.data));
    }

    /**
     * Returns all sale drafts for given company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     */
    public getSaleDraftsWithHttpInfo(companySlug: string, page?: number, pageSize?: number, _options?: Configuration): Observable<HttpInfo<Array<DraftResult>>> {
        const requestContextPromise = this.requestFactory.getSaleDrafts(companySlug, page, pageSize, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSaleDraftsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all sale drafts for given company.
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages. Default value is 0. 
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100. Default value is 25. 
     */
    public getSaleDrafts(companySlug: string, page?: number, pageSize?: number, _options?: Configuration): Observable<Array<DraftResult>> {
        return this.getSaleDraftsWithHttpInfo(companySlug, page, pageSize, _options).pipe(map((apiResponse: HttpInfo<Array<DraftResult>>) => apiResponse.data));
    }

    /**
     * Returns payment with specified id.
     * @param companySlug Slug of company to retrieve
     * @param saleId 
     * @param paymentId 
     */
    public getSalePaymentWithHttpInfo(companySlug: string, saleId: number, paymentId: number, _options?: Configuration): Observable<HttpInfo<Payment>> {
        const requestContextPromise = this.requestFactory.getSalePayment(companySlug, saleId, paymentId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSalePaymentWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns payment with specified id.
     * @param companySlug Slug of company to retrieve
     * @param saleId 
     * @param paymentId 
     */
    public getSalePayment(companySlug: string, saleId: number, paymentId: number, _options?: Configuration): Observable<Payment> {
        return this.getSalePaymentWithHttpInfo(companySlug, saleId, paymentId, _options).pipe(map((apiResponse: HttpInfo<Payment>) => apiResponse.data));
    }

    /**
     * Returns all payments for given sale
     * @param companySlug Slug of company to retrieve
     * @param saleId 
     */
    public getSalePaymentsWithHttpInfo(companySlug: string, saleId: number, _options?: Configuration): Observable<HttpInfo<Array<Payment>>> {
        const requestContextPromise = this.requestFactory.getSalePayments(companySlug, saleId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSalePaymentsWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns all payments for given sale
     * @param companySlug Slug of company to retrieve
     * @param saleId 
     */
    public getSalePayments(companySlug: string, saleId: number, _options?: Configuration): Observable<Array<Payment>> {
        return this.getSalePaymentsWithHttpInfo(companySlug, saleId, _options).pipe(map((apiResponse: HttpInfo<Array<Payment>>) => apiResponse.data));
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
    public getSalesWithHttpInfo(companySlug: string, page?: number, pageSize?: number, date?: string, dateLe?: string, dateLt?: string, dateGe?: string, dateGt?: string, lastModified?: string, lastModifiedLe?: string, lastModifiedLt?: string, lastModifiedGe?: string, lastModifiedGt?: string, saleNumber?: string, settled?: boolean, _options?: Configuration): Observable<HttpInfo<Array<SaleResult>>> {
        const requestContextPromise = this.requestFactory.getSales(companySlug, page, pageSize, date, dateLe, dateLt, dateGe, dateGt, lastModified, lastModifiedLe, lastModifiedLt, lastModifiedGe, lastModifiedGt, saleNumber, settled, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getSalesWithHttpInfo(rsp)));
            }));
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
    public getSales(companySlug: string, page?: number, pageSize?: number, date?: string, dateLe?: string, dateLt?: string, dateGe?: string, dateGt?: string, lastModified?: string, lastModifiedLe?: string, lastModifiedLt?: string, lastModifiedGe?: string, lastModifiedGt?: string, saleNumber?: string, settled?: boolean, _options?: Configuration): Observable<Array<SaleResult>> {
        return this.getSalesWithHttpInfo(companySlug, page, pageSize, date, dateLe, dateLt, dateGe, dateGt, lastModified, lastModifiedLe, lastModifiedLt, lastModifiedGe, lastModifiedGt, saleNumber, settled, _options).pipe(map((apiResponse: HttpInfo<Array<SaleResult>>) => apiResponse.data));
    }

    /**
     * Marks the sale as settled without payment. This is synonymous with \"sett til oppgjort uten betaling\" in the GUI. It is possible to change the date of settlement by sending a new settledDate.
     * @param companySlug Slug of company to retrieve
     * @param saleId 
     * @param settledDate Date that the sale is settled
     */
    public settledSaleWithHttpInfo(companySlug: string, saleId: number, settledDate: string, _options?: Configuration): Observable<HttpInfo<SaleResult>> {
        const requestContextPromise = this.requestFactory.settledSale(companySlug, saleId, settledDate, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.settledSaleWithHttpInfo(rsp)));
            }));
    }

    /**
     * Marks the sale as settled without payment. This is synonymous with \"sett til oppgjort uten betaling\" in the GUI. It is possible to change the date of settlement by sending a new settledDate.
     * @param companySlug Slug of company to retrieve
     * @param saleId 
     * @param settledDate Date that the sale is settled
     */
    public settledSale(companySlug: string, saleId: number, settledDate: string, _options?: Configuration): Observable<SaleResult> {
        return this.settledSaleWithHttpInfo(companySlug, saleId, settledDate, _options).pipe(map((apiResponse: HttpInfo<SaleResult>) => apiResponse.data));
    }

    /**
     * Updates draft with provided id. 
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param draftRequest 
     */
    public updateSaleDraftWithHttpInfo(companySlug: string, draftId: number, draftRequest: DraftRequest, _options?: Configuration): Observable<HttpInfo<void>> {
        const requestContextPromise = this.requestFactory.updateSaleDraft(companySlug, draftId, draftRequest, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.updateSaleDraftWithHttpInfo(rsp)));
            }));
    }

    /**
     * Updates draft with provided id. 
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call. 
     * @param draftRequest 
     */
    public updateSaleDraft(companySlug: string, draftId: number, draftRequest: DraftRequest, _options?: Configuration): Observable<void> {
        return this.updateSaleDraftWithHttpInfo(companySlug, draftId, draftRequest, _options).pipe(map((apiResponse: HttpInfo<void>) => apiResponse.data));
    }

}

import { TransactionsApiRequestFactory, TransactionsApiResponseProcessor} from "../apis/TransactionsApi";
export class ObservableTransactionsApi {
    private requestFactory: TransactionsApiRequestFactory;
    private responseProcessor: TransactionsApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: TransactionsApiRequestFactory,
        responseProcessor?: TransactionsApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new TransactionsApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new TransactionsApiResponseProcessor();
    }

    /**
     * Returns given transaction with associated id. Transaction id is returned in GET calls for sales, purchases, and journal entries. 
     * @param companySlug Slug of company to retrieve
     * @param transactionId 
     */
    public getTransactionWithHttpInfo(companySlug: string, transactionId: number, _options?: Configuration): Observable<HttpInfo<Transaction>> {
        const requestContextPromise = this.requestFactory.getTransaction(companySlug, transactionId, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTransactionWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns given transaction with associated id. Transaction id is returned in GET calls for sales, purchases, and journal entries. 
     * @param companySlug Slug of company to retrieve
     * @param transactionId 
     */
    public getTransaction(companySlug: string, transactionId: number, _options?: Configuration): Observable<Transaction> {
        return this.getTransactionWithHttpInfo(companySlug, transactionId, _options).pipe(map((apiResponse: HttpInfo<Transaction>) => apiResponse.data));
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
    public getTransactionsWithHttpInfo(companySlug: string, page?: number, pageSize?: number, lastModified?: string, lastModifiedLe?: string, lastModifiedLt?: string, lastModifiedGe?: string, lastModifiedGt?: string, createdDate?: string, createdDateLe?: string, createdDateLt?: string, createdDateGe?: string, createdDateGt?: string, _options?: Configuration): Observable<HttpInfo<Array<Transaction>>> {
        const requestContextPromise = this.requestFactory.getTransactions(companySlug, page, pageSize, lastModified, lastModifiedLe, lastModifiedLt, lastModifiedGe, lastModifiedGt, createdDate, createdDateLe, createdDateLt, createdDateGe, createdDateGt, _options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getTransactionsWithHttpInfo(rsp)));
            }));
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
    public getTransactions(companySlug: string, page?: number, pageSize?: number, lastModified?: string, lastModifiedLe?: string, lastModifiedLt?: string, lastModifiedGe?: string, lastModifiedGt?: string, createdDate?: string, createdDateLe?: string, createdDateLt?: string, createdDateGe?: string, createdDateGt?: string, _options?: Configuration): Observable<Array<Transaction>> {
        return this.getTransactionsWithHttpInfo(companySlug, page, pageSize, lastModified, lastModifiedLe, lastModifiedLt, lastModifiedGe, lastModifiedGt, createdDate, createdDateLe, createdDateLt, createdDateGe, createdDateGt, _options).pipe(map((apiResponse: HttpInfo<Array<Transaction>>) => apiResponse.data));
    }

}

import { UserApiRequestFactory, UserApiResponseProcessor} from "../apis/UserApi";
export class ObservableUserApi {
    private requestFactory: UserApiRequestFactory;
    private responseProcessor: UserApiResponseProcessor;
    private configuration: Configuration;

    public constructor(
        configuration: Configuration,
        requestFactory?: UserApiRequestFactory,
        responseProcessor?: UserApiResponseProcessor
    ) {
        this.configuration = configuration;
        this.requestFactory = requestFactory || new UserApiRequestFactory(configuration);
        this.responseProcessor = responseProcessor || new UserApiResponseProcessor();
    }

    /**
     * Returns information about the user
     */
    public getUserWithHttpInfo(_options?: Configuration): Observable<HttpInfo<Userinfo>> {
        const requestContextPromise = this.requestFactory.getUser(_options);

        // build promise chain
        let middlewarePreObservable = from<RequestContext>(requestContextPromise);
        for (let middleware of this.configuration.middleware) {
            middlewarePreObservable = middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => middleware.pre(ctx)));
        }

        return middlewarePreObservable.pipe(mergeMap((ctx: RequestContext) => this.configuration.httpApi.send(ctx))).
            pipe(mergeMap((response: ResponseContext) => {
                let middlewarePostObservable = of(response);
                for (let middleware of this.configuration.middleware) {
                    middlewarePostObservable = middlewarePostObservable.pipe(mergeMap((rsp: ResponseContext) => middleware.post(rsp)));
                }
                return middlewarePostObservable.pipe(map((rsp: ResponseContext) => this.responseProcessor.getUserWithHttpInfo(rsp)));
            }));
    }

    /**
     * Returns information about the user
     */
    public getUser(_options?: Configuration): Observable<Userinfo> {
        return this.getUserWithHttpInfo(_options).pipe(map((apiResponse: HttpInfo<Userinfo>) => apiResponse.data));
    }

}
