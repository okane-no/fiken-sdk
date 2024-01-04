export * from './accountBalancesApi';
import { AccountBalancesApi } from './accountBalancesApi';
export * from './accountsApi';
import { AccountsApi } from './accountsApi';
export * from './bankAccountsApi';
import { BankAccountsApi } from './bankAccountsApi';
export * from './companiesApi';
import { CompaniesApi } from './companiesApi';
export * from './contactsApi';
import { ContactsApi } from './contactsApi';
export * from './creditNotesApi';
import { CreditNotesApi } from './creditNotesApi';
export * from './groupsApi';
import { GroupsApi } from './groupsApi';
export * from './inboxApi';
import { InboxApi } from './inboxApi';
export * from './invoicesApi';
import { InvoicesApi } from './invoicesApi';
export * from './journalEntriesApi';
import { JournalEntriesApi } from './journalEntriesApi';
export * from './offersApi';
import { OffersApi } from './offersApi';
export * from './orderConfirmationsApi';
import { OrderConfirmationsApi } from './orderConfirmationsApi';
export * from './productsApi';
import { ProductsApi } from './productsApi';
export * from './projectsApi';
import { ProjectsApi } from './projectsApi';
export * from './purchasesApi';
import { PurchasesApi } from './purchasesApi';
export * from './salesApi';
import { SalesApi } from './salesApi';
export * from './transactionsApi';
import { TransactionsApi } from './transactionsApi';
export * from './userApi';
import { UserApi } from './userApi';
import * as http from 'http';

export class HttpError extends Error {
    constructor (public response: http.IncomingMessage, public body: any, public statusCode?: number) {
        super('HTTP request failed');
        this.name = 'HttpError';
    }
}

export { RequestFile } from '../model/models';

export const APIS = [AccountBalancesApi, AccountsApi, BankAccountsApi, CompaniesApi, ContactsApi, CreditNotesApi, GroupsApi, InboxApi, InvoicesApi, JournalEntriesApi, OffersApi, OrderConfirmationsApi, ProductsApi, ProjectsApi, PurchasesApi, SalesApi, TransactionsApi, UserApi];
