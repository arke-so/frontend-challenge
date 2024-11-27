/* tslint:disable */
/* eslint-disable */
/**
 * Arke Supply API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  RawMaterialDetails,
  RawMaterialInventoryItemSummary,
  RawMaterialSummary,
} from '../models/index';
import {
    RawMaterialDetailsFromJSON,
    RawMaterialDetailsToJSON,
    RawMaterialInventoryItemSummaryFromJSON,
    RawMaterialInventoryItemSummaryToJSON,
    RawMaterialSummaryFromJSON,
    RawMaterialSummaryToJSON,
} from '../models/index';

export interface ArchiveRawMaterialRequest {
    rawMaterialId: string;
}

export interface CreateRawMaterialRequest {
    rawMaterialDetails?: RawMaterialDetails;
}

export interface ListRawMaterialInventoryItemsByRawMaterialRequest {
    rawMaterialId: string;
    limit?: number;
    offset?: number;
    search?: string;
}

export interface ListRawMaterialsRequest {
    limit?: number;
    offset?: number;
    search?: string;
    archived?: string;
}

export interface ListRawMaterialsBySupplierRequest {
    supplierId?: string;
    limit?: number;
    offset?: number;
    search?: string;
    archived?: string;
}

export interface ShowRawMaterialRequest {
    rawMaterialId: string;
}

export interface UpdateRawMaterialRequest {
    rawMaterialId: string;
    rawMaterialDetails?: RawMaterialDetails;
}

/**
 * 
 */
export class RawMaterialsApi extends runtime.BaseAPI {

    /**
     */
    async archiveRawMaterialRaw(requestParameters: ArchiveRawMaterialRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['rawMaterialId'] == null) {
            throw new runtime.RequiredError(
                'rawMaterialId',
                'Required parameter "rawMaterialId" was null or undefined when calling archiveRawMaterial().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/raw-material/{rawMaterialId}`.replace(`{${"rawMaterialId"}}`, encodeURIComponent(String(requestParameters['rawMaterialId']))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async archiveRawMaterial(requestParameters: ArchiveRawMaterialRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.archiveRawMaterialRaw(requestParameters, initOverrides);
    }

    /**
     * creates a raw material
     */
    async createRawMaterialRaw(requestParameters: CreateRawMaterialRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RawMaterialDetails>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/raw-material`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: RawMaterialDetailsToJSON(requestParameters['rawMaterialDetails']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RawMaterialDetailsFromJSON(jsonValue));
    }

    /**
     * creates a raw material
     */
    async createRawMaterial(requestParameters: CreateRawMaterialRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RawMaterialDetails> {
        const response = await this.createRawMaterialRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async listRawMaterialCategoriesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<string>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/raw-material/_categories`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse<any>(response);
    }

    /**
     */
    async listRawMaterialCategories(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<string>> {
        const response = await this.listRawMaterialCategoriesRaw(initOverrides);
        return await response.value();
    }

    /**
     * shows the inventory for a given raw material
     */
    async listRawMaterialInventoryItemsByRawMaterialRaw(requestParameters: ListRawMaterialInventoryItemsByRawMaterialRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<RawMaterialInventoryItemSummary>>> {
        if (requestParameters['rawMaterialId'] == null) {
            throw new runtime.RequiredError(
                'rawMaterialId',
                'Required parameter "rawMaterialId" was null or undefined when calling listRawMaterialInventoryItemsByRawMaterial().'
            );
        }

        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['search'] != null) {
            queryParameters['search'] = requestParameters['search'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/raw-material/{rawMaterialId}/inventory`.replace(`{${"rawMaterialId"}}`, encodeURIComponent(String(requestParameters['rawMaterialId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(RawMaterialInventoryItemSummaryFromJSON));
    }

    /**
     * shows the inventory for a given raw material
     */
    async listRawMaterialInventoryItemsByRawMaterial(requestParameters: ListRawMaterialInventoryItemsByRawMaterialRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<RawMaterialInventoryItemSummary>> {
        const response = await this.listRawMaterialInventoryItemsByRawMaterialRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * lists the raw materials
     */
    async listRawMaterialsRaw(requestParameters: ListRawMaterialsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<RawMaterialSummary>>> {
        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['search'] != null) {
            queryParameters['search'] = requestParameters['search'];
        }

        if (requestParameters['archived'] != null) {
            queryParameters['archived'] = requestParameters['archived'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/raw-material`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(RawMaterialSummaryFromJSON));
    }

    /**
     * lists the raw materials
     */
    async listRawMaterials(requestParameters: ListRawMaterialsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<RawMaterialSummary>> {
        const response = await this.listRawMaterialsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * lists the raw material definitions for a given supplier
     */
    async listRawMaterialsBySupplierRaw(requestParameters: ListRawMaterialsBySupplierRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<RawMaterialSummary>>> {
        const queryParameters: any = {};

        if (requestParameters['limit'] != null) {
            queryParameters['limit'] = requestParameters['limit'];
        }

        if (requestParameters['offset'] != null) {
            queryParameters['offset'] = requestParameters['offset'];
        }

        if (requestParameters['search'] != null) {
            queryParameters['search'] = requestParameters['search'];
        }

        if (requestParameters['archived'] != null) {
            queryParameters['archived'] = requestParameters['archived'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/supplier/{supplierId}/raw-material`.replace(`{${"supplierId"}}`, encodeURIComponent(String(requestParameters['supplierId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(RawMaterialSummaryFromJSON));
    }

    /**
     * lists the raw material definitions for a given supplier
     */
    async listRawMaterialsBySupplier(requestParameters: ListRawMaterialsBySupplierRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<RawMaterialSummary>> {
        const response = await this.listRawMaterialsBySupplierRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * shows a raw material
     */
    async showRawMaterialRaw(requestParameters: ShowRawMaterialRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RawMaterialDetails>> {
        if (requestParameters['rawMaterialId'] == null) {
            throw new runtime.RequiredError(
                'rawMaterialId',
                'Required parameter "rawMaterialId" was null or undefined when calling showRawMaterial().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/raw-material/{rawMaterialId}`.replace(`{${"rawMaterialId"}}`, encodeURIComponent(String(requestParameters['rawMaterialId']))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RawMaterialDetailsFromJSON(jsonValue));
    }

    /**
     * shows a raw material
     */
    async showRawMaterial(requestParameters: ShowRawMaterialRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RawMaterialDetails> {
        const response = await this.showRawMaterialRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * updates a raw material
     */
    async updateRawMaterialRaw(requestParameters: UpdateRawMaterialRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<RawMaterialDetails>> {
        if (requestParameters['rawMaterialId'] == null) {
            throw new runtime.RequiredError(
                'rawMaterialId',
                'Required parameter "rawMaterialId" was null or undefined when calling updateRawMaterial().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/raw-material/{rawMaterialId}`.replace(`{${"rawMaterialId"}}`, encodeURIComponent(String(requestParameters['rawMaterialId']))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: RawMaterialDetailsToJSON(requestParameters['rawMaterialDetails']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RawMaterialDetailsFromJSON(jsonValue));
    }

    /**
     * updates a raw material
     */
    async updateRawMaterial(requestParameters: UpdateRawMaterialRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<RawMaterialDetails> {
        const response = await this.updateRawMaterialRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
