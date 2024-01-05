/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { product } from './product';
import type { productSalesLineInfo } from './productSalesLineInfo';

export type productSalesReportResult = {
    product?: product;
    sold?: productSalesLineInfo;
    credited?: productSalesLineInfo;
    sum?: productSalesLineInfo;
};

