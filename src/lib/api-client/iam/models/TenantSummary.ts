/* tslint:disable */
/* eslint-disable */
/**
 * Arke IAM API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TenantSummary
 */
export interface TenantSummary {
    /**
     * 
     * @type {string}
     * @memberof TenantSummary
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof TenantSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof TenantSummary
     */
    vanity: string;
    /**
     * 
     * @type {boolean}
     * @memberof TenantSummary
     */
    enabled: boolean;
}

/**
 * Check if a given object implements the TenantSummary interface.
 */
export function instanceOfTenantSummary(value: object): value is TenantSummary {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('vanity' in value) || value['vanity'] === undefined) return false;
    if (!('enabled' in value) || value['enabled'] === undefined) return false;
    return true;
}

export function TenantSummaryFromJSON(json: any): TenantSummary {
    return TenantSummaryFromJSONTyped(json, false);
}

export function TenantSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): TenantSummary {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'],
        'vanity': json['vanity'],
        'enabled': json['enabled'],
    };
}

export function TenantSummaryToJSON(value?: TenantSummary | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'name': value['name'],
        'vanity': value['vanity'],
        'enabled': value['enabled'],
    };
}

