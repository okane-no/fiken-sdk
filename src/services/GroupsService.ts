/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class GroupsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Returns all customer groups for given company
     * @returns string OK
     * @throws ApiError
     */
    public getGroups({
        companySlug,
        page,
        pageSize = 25,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
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
    }): CancelablePromise<Array<string>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/groups',
            path: {
                'companySlug': companySlug,
            },
            query: {
                'page': page,
                'pageSize': pageSize,
            },
        });
    }

}
