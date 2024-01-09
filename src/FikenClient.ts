/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';

import { AccountBalancesService } from './services/AccountBalancesService';
import { AccountsService } from './services/AccountsService';
import { BankAccountsService } from './services/BankAccountsService';
import { CompaniesService } from './services/CompaniesService';
import { ContactsService } from './services/ContactsService';
import { CreditNotesService } from './services/CreditNotesService';
import { GroupsService } from './services/GroupsService';
import { InboxService } from './services/InboxService';
import { InvoicesService } from './services/InvoicesService';
import { JournalEntriesService } from './services/JournalEntriesService';
import { OffersService } from './services/OffersService';
import { OrderConfirmationsService } from './services/OrderConfirmationsService';
import { ProductsService } from './services/ProductsService';
import { ProjectsService } from './services/ProjectsService';
import { PurchasesService } from './services/PurchasesService';
import { SalesService } from './services/SalesService';
import { TransactionsService } from './services/TransactionsService';
import { UserService } from './services/UserService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class FikenClient {

    public readonly accountBalances: AccountBalancesService;
    public readonly accounts: AccountsService;
    public readonly bankAccounts: BankAccountsService;
    public readonly companies: CompaniesService;
    public readonly contacts: ContactsService;
    public readonly creditNotes: CreditNotesService;
    public readonly groups: GroupsService;
    public readonly inbox: InboxService;
    public readonly invoices: InvoicesService;
    public readonly journalEntries: JournalEntriesService;
    public readonly offers: OffersService;
    public readonly orderConfirmations: OrderConfirmationsService;
    public readonly products: ProductsService;
    public readonly projects: ProjectsService;
    public readonly purchases: PurchasesService;
    public readonly sales: SalesService;
    public readonly transactions: TransactionsService;
    public readonly user: UserService;

    public readonly request: BaseHttpRequest;

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://api.fiken.no/api/v2',
            VERSION: config?.VERSION ?? '2.0.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.accountBalances = new AccountBalancesService(this.request);
        this.accounts = new AccountsService(this.request);
        this.bankAccounts = new BankAccountsService(this.request);
        this.companies = new CompaniesService(this.request);
        this.contacts = new ContactsService(this.request);
        this.creditNotes = new CreditNotesService(this.request);
        this.groups = new GroupsService(this.request);
        this.inbox = new InboxService(this.request);
        this.invoices = new InvoicesService(this.request);
        this.journalEntries = new JournalEntriesService(this.request);
        this.offers = new OffersService(this.request);
        this.orderConfirmations = new OrderConfirmationsService(this.request);
        this.products = new ProductsService(this.request);
        this.projects = new ProjectsService(this.request);
        this.purchases = new PurchasesService(this.request);
        this.sales = new SalesService(this.request);
        this.transactions = new TransactionsService(this.request);
        this.user = new UserService(this.request);
    }
}

