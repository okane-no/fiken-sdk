/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { userinfo } from '../models/userinfo';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UserService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Returns information about the user
     * @returns userinfo OK
     * @throws ApiError
     */
    public getUser(): CancelablePromise<userinfo> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/user',
        });
    }

}
