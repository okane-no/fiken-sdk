/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { projectRequest } from '../models/projectRequest';
import type { projectResult } from '../models/projectResult';
import type { updateProjectRequest } from '../models/updateProjectRequest';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ProjectsService {

    /**
     * Returns all projects for given company
     * @param companySlug Slug of company to retrieve
     * @param page Returns the number of the page to return. Valid page values are integers from 0 to the total number of pages.
     * Default value is 0.
     *
     * @param pageSize Defines the number of entries to return on each page. Maximum number of results that can be returned at one time are 100.
     * Default value is 25.
     *
     * @param completed Filter results based on completed / not completed.
     * @param name Filter results based on name of the project.
     * @param number Filter results based on number of the project.
     * @returns projectResult OK
     * @throws ApiError
     */
    public static getProjects(
        companySlug: string,
        page?: number,
        pageSize: number = 25,
        completed?: boolean,
        name?: string,
        number?: string,
    ): CancelablePromise<Array<projectResult>> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param requestBody
     * @returns string Created
     * @throws ApiError
     */
    public static createProject(
        companySlug: string,
        requestBody: projectRequest,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param projectId
     * @returns projectResult OK
     * @throws ApiError
     */
    public static getProject(
        companySlug: string,
        projectId: number,
    ): CancelablePromise<projectResult> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param projectId
     * @param requestBody
     * @returns string Created
     * @throws ApiError
     */
    public static updateProject(
        companySlug: string,
        projectId: number,
        requestBody: updateProjectRequest,
    ): CancelablePromise<string> {
        return __request(OpenAPI, {
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
     * @param companySlug Slug of company to retrieve
     * @param projectId
     * @returns void
     * @throws ApiError
     */
    public static deleteProject(
        companySlug: string,
        projectId: number,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/companies/{companySlug}/projects/{projectId}',
            path: {
                'companySlug': companySlug,
                'projectId': projectId,
            },
        });
    }

}
