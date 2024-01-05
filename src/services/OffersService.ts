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
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class OffersService {

    /**
     * Returns all offers for given company
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages.
     * Default value is 0.
     *
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100.
     * Default value is 25.
     *
     * @returns offer OK
     * @throws ApiError
     */
    public static getOffers(
        companySlug: string,
        page?: number,
        pageSize: number = 25,
    ): CancelablePromise<Array<offer>> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param offerId The offerId (primary key of the returned object) is returned as the first field in the GET all
     * offers call
     *
     * @returns offer OK
     * @throws ApiError
     */
    public static getOffer(
        companySlug: string,
        offerId: string,
    ): CancelablePromise<offer> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @returns counter OK
     * @throws ApiError
     */
    public static getOfferCounter(
        companySlug: string,
    ): CancelablePromise<counter> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/companies/{companySlug}/offers/counter',
            path: {
                'companySlug': companySlug,
            },
        });
    }

    /**
     * Creates the first offer number which is then increased by one with every new offer. By sending an empty request body the default is base number (the first offer number will thus be 10001), but can be specified to another starting value.
     * @param companySlug Slug of company to retrieve
     * @param requestBody
     * @returns any Created
     * @throws ApiError
     */
    public static createOfferCounter(
        companySlug: string,
        requestBody?: counter,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages.
     * Default value is 0.
     *
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100.
     * Default value is 25.
     *
     * @returns invoiceishDraftResult OK
     * @throws ApiError
     */
    public static getOfferDrafts(
        companySlug: string,
        page?: number,
        pageSize: number = 25,
    ): CancelablePromise<Array<invoiceishDraftResult>> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param requestBody
     * @returns string Created
     * @throws ApiError
     */
    public static createOfferDraft(
        companySlug: string,
        requestBody: invoiceishDraftRequest,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call.
     *
     * @returns invoiceishDraftResult OK
     * @throws ApiError
     */
    public static getOfferDraft(
        companySlug: string,
        draftId: number,
    ): CancelablePromise<invoiceishDraftResult> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call.
     *
     * @param requestBody
     * @returns string Created
     * @throws ApiError
     */
    public static updateOfferDraft(
        companySlug: string,
        draftId: number,
        requestBody: invoiceishDraftRequest,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call.
     *
     * @returns void
     * @throws ApiError
     */
    public static deleteOfferDraft(
        companySlug: string,
        draftId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call.
     *
     * @returns attachment OK
     * @throws ApiError
     */
    public static getOfferDraftAttachments(
        companySlug: string,
        draftId: number,
    ): CancelablePromise<Array<attachment>> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call.
     *
     * @param formData
     * @returns string Created
     * @throws ApiError
     */
    public static addAttachmentToOfferDraft(
        companySlug: string,
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
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param draftId The draftId (primary key of the returned object) is returned in the GET all drafts call.
     *
     * @returns string Created
     * @throws ApiError
     */
    public static createOfferFromDraft(
        companySlug: string,
        draftId: number,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
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
