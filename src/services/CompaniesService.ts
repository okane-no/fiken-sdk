/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { company } from '../models/company';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class CompaniesService {

    /**
     * Returns all companies from the system that the user has access to
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages.
     * Default value is 0.
     *
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100.
     * Default value is 25.
     *
     * @param sortBy
     * @returns company OK
     * @throws ApiError
     */
    public static getCompanies(
        page?: number,
        pageSize: number = 25,
        sortBy: 'createdDate asc' | 'createdDate desc' | 'name asc' | 'name desc' | 'organizationNumber asc' | 'organizationNumber desc' = 'name asc',
    ): CancelablePromise<Array<company>> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @returns company OK
     * @throws ApiError
     */
    public static getCompany(
        companySlug: string,
    ): CancelablePromise<company> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/companies/{companySlug}',
            path: {
                'companySlug': companySlug,
            },
        });
    }

}
