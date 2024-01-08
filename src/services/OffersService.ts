/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { attachment } from '../models/attachment';
import type { counter } from '../models/counter';
import type { invoiceishDraftRequest } from '../models/invoiceishDraftRequest';
import type { invoiceishDraftResult } from '../models/invoiceishDraftResult';
import type { offer } from '../models/offer';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OffersService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Returns all offers for given company
     * @returns offer OK
     * @throws ApiError
     */
    public getOffers({
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
    }): CancelablePromise<Array<offer>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/offers',
            path: {
                'companySlug': companySlug,
            },
            query: {
                'page': page,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * Returns offer with specified id.
     * @returns offer OK
     * @throws ApiError
     */
    public getOffer({
        companySlug,
        offerId,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        /**
         * The offerId (primary key of the returned object) is returned as the first field in the GET all
         * offers call
         *
         */
        offerId: string,
    }): CancelablePromise<offer> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/offers/{offerId}',
            path: {
                'companySlug': companySlug,
                'offerId': offerId,
            },
        });
    }

    /**
     * Retrieves the counter for offers if it has been created
     *
     * @returns counter OK
     * @throws ApiError
     */
    public getOfferCounter({
        companySlug,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
    }): CancelablePromise<counter> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/offers/counter',
            path: {
                'companySlug': companySlug,
            },
        });
    }

    /**
     * Creates the first offer number which is then increased by one with every new offer. By sending an empty request body the default is base number (the first offer number will thus be 10001), but can be specified to another starting value.
     * @returns any Created
     * @throws ApiError
     */
    public createOfferCounter({
        companySlug,
        requestBody,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        requestBody?: counter,
    }): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/companies/{companySlug}/offers/counter',
            path: {
                'companySlug': companySlug,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Returns all offer drafts for given company.
     * @returns invoiceishDraftResult OK
     * @throws ApiError
     */
    public getOfferDrafts({
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
    }): CancelablePromise<Array<invoiceishDraftResult>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/offers/drafts',
            path: {
                'companySlug': companySlug,
            },
            query: {
                'page': page,
                'pageSize': pageSize,
            },
        });
    }

    /**
     * Creates an offer draft.
     * @returns string Created
     * @throws ApiError
     */
    public createOfferDraft({
        companySlug,
        requestBody,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        requestBody: invoiceishDraftRequest,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/companies/{companySlug}/offers/drafts',
            path: {
                'companySlug': companySlug,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
        });
    }

    /**
     * Returns offer draft with specified id.
     * @returns invoiceishDraftResult OK
     * @throws ApiError
     */
    public getOfferDraft({
        companySlug,
        draftId,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        /**
         * The draftId (primary key of the returned object) is returned in the GET all drafts call.
         *
         */
        draftId: number,
    }): CancelablePromise<invoiceishDraftResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/offers/drafts/{draftId}',
            path: {
                'companySlug': companySlug,
                'draftId': draftId,
            },
        });
    }

    /**
     * Updates offer draft with provided id.
     *
     * @returns string Created
     * @throws ApiError
     */
    public updateOfferDraft({
        companySlug,
        draftId,
        requestBody,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        /**
         * The draftId (primary key of the returned object) is returned in the GET all drafts call.
         *
         */
        draftId: number,
        requestBody: invoiceishDraftRequest,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/companies/{companySlug}/offers/drafts/{draftId}',
            path: {
                'companySlug': companySlug,
                'draftId': draftId,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
        });
    }

    /**
     * Delete offer draft with specified id.
     * @returns void
     * @throws ApiError
     */
    public deleteOfferDraft({
        companySlug,
        draftId,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        /**
         * The draftId (primary key of the returned object) is returned in the GET all drafts call.
         *
         */
        draftId: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/companies/{companySlug}/offers/drafts/{draftId}',
            path: {
                'companySlug': companySlug,
                'draftId': draftId,
            },
        });
    }

    /**
     * Returns all attachments for specified draft.
     * @returns attachment OK
     * @throws ApiError
     */
    public getOfferDraftAttachments({
        companySlug,
        draftId,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        /**
         * The draftId (primary key of the returned object) is returned in the GET all drafts call.
         *
         */
        draftId: number,
    }): CancelablePromise<Array<attachment>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/offers/drafts/{draftId}/attachments',
            path: {
                'companySlug': companySlug,
                'draftId': draftId,
            },
        });
    }

    /**
     * Creates and adds a new attachment to an offer draft
     * @returns string Created
     * @throws ApiError
     */
    public addAttachmentToOfferDraft({
        companySlug,
        draftId,
        formData,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        /**
         * The draftId (primary key of the returned object) is returned in the GET all drafts call.
         *
         */
        draftId: number,
        formData?: {
            /**
             * Required. The filename. Must end with either .png, .jpeg, .jpg, .gif or .pdf
             */
            filename?: string;
            /**
             * Not required.
             */
            comment?: string;
            file?: Blob;
        },
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/companies/{companySlug}/offers/drafts/{draftId}/attachments',
            path: {
                'companySlug': companySlug,
                'draftId': draftId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            responseHeader: 'Location',
        });
    }

    /**
     * Creates an offer from an already created draft.
     * @returns string Created
     * @throws ApiError
     */
    public createOfferFromDraft({
        companySlug,
        draftId,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        /**
         * The draftId (primary key of the returned object) is returned in the GET all drafts call.
         *
         */
        draftId: number,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/companies/{companySlug}/offers/drafts/{draftId}/createOffer',
            path: {
                'companySlug': companySlug,
                'draftId': draftId,
            },
            responseHeader: 'Location',
        });
    }

}
