/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { projectRequest } from '../models/projectRequest';
import type { projectResult } from '../models/projectResult';
import type { updateProjectRequest } from '../models/updateProjectRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProjectsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Returns all projects for given company
     * @returns projectResult OK
     * @throws ApiError
     */
    public getProjects({
        companySlug,
        page,
        pageSize = 25,
        completed,
        name,
        number,
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
        /**
         * Filter results based on completed / not completed.
         */
        completed?: boolean,
        /**
         * Filter results based on name of the project.
         */
        name?: string,
        /**
         * Filter results based on number of the project.
         */
        number?: string,
    }): CancelablePromise<Array<projectResult>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/projects',
            path: {
                'companySlug': companySlug,
            },
            query: {
                'page': page,
                'pageSize': pageSize,
                'completed': completed,
                'name': name,
                'number': number,
            },
        });
    }

    /**
     * Creates a new project
     * @returns string Created
     * @throws ApiError
     */
    public createProject({
        companySlug,
        requestBody,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        requestBody: projectRequest,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/companies/{companySlug}/projects',
            path: {
                'companySlug': companySlug,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
        });
    }

    /**
     * Returns project with specified id.
     * @returns projectResult OK
     * @throws ApiError
     */
    public getProject({
        companySlug,
        projectId,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        projectId: number,
    }): CancelablePromise<projectResult> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/companies/{companySlug}/projects/{projectId}',
            path: {
                'companySlug': companySlug,
                'projectId': projectId,
            },
        });
    }

    /**
     * Updates project with provided id.
     *
     * @returns string Created
     * @throws ApiError
     */
    public updateProject({
        companySlug,
        projectId,
        requestBody,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        projectId: number,
        requestBody: updateProjectRequest,
    }): CancelablePromise<string> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/companies/{companySlug}/projects/{projectId}',
            path: {
                'companySlug': companySlug,
                'projectId': projectId,
            },
            body: requestBody,
            mediaType: 'application/json',
            responseHeader: 'Location',
        });
    }

    /**
     * Delete project with specified id.
     * @returns void
     * @throws ApiError
     */
    public deleteProject({
        companySlug,
        projectId,
    }: {
        /**
         * Slug of company to retrieve
         */
        companySlug: string,
        projectId: number,
    }): CancelablePromise<void> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/companies/{companySlug}/projects/{projectId}',
            path: {
                'companySlug': companySlug,
                'projectId': projectId,
            },
        });
    }

}
