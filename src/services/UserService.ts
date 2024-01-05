/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { userinfo } from '../models/userinfo';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {

    /**
     * Returns information about the user
     * @returns userinfo OK
     * @throws ApiError
     */
    public static getUser(): CancelablePromise<userinfo> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/user',
        });
    }

}
