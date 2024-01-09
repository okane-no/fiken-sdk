/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { company } from '../models/company';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CompaniesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Returns all companies from the system that the user has access to
     * @returns company OK
     * @throws ApiError
     */
    public getCompanies({
        page,
        pageSize = 25,
        sortBy = 'name asc',
    }: {
        /**
         * Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages.
         * Default value is 0.
         *
         */
        page?: number,
        /**
         * Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100.
         * Default value is 25.
         *
         */
        pageSize?: number,
        sortBy?: 'createdDate asc' | 'createdDate desc' | 'name asc' | 'name desc' | 'organizationNumber asc' | 'organizationNumber desc',
    }): CancelablePromise<Array<company>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies',
            query: {
                'page': page,
                'pageSize': pageSize,
                'sortBy': sortBy,
            },
        });
    }

    /**
     * Returns company associated with slug.
     * @returns company OK
     * @throws ApiError
     */
    public getCompany({
        companySlug,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
    }): CancelablePromise<company> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}',
            path: {
                'companySlug': companySlug,
            },
        });
    }

}
