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

import { mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface RawMaterialInventoryBuckets
 */
export interface RawMaterialInventoryBuckets {
    /**
     * 
     * @type {number}
     * @memberof RawMaterialInventoryBuckets
     */
    inbound?: number;
    /**
     * 
     * @type {number}
     * @memberof RawMaterialInventoryBuckets
     */
    inStock?: number;
    /**
     * 
     * @type {number}
     * @memberof RawMaterialInventoryBuckets
     */
    inUse?: number;
}

/**
 * Check if a given object implements the RawMaterialInventoryBuckets interface.
 */
export function instanceOfRawMaterialInventoryBuckets(value: object): value is RawMaterialInventoryBuckets {
    return true;
}

export function RawMaterialInventoryBucketsFromJSON(json: any): RawMaterialInventoryBuckets {
    return RawMaterialInventoryBucketsFromJSONTyped(json, false);
}

export function RawMaterialInventoryBucketsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RawMaterialInventoryBuckets {
    if (json == null) {
        return json;
    }
    return {
        
        'inbound': json['inbound'] == null ? undefined : json['inbound'],
        'inStock': json['in_stock'] == null ? undefined : json['in_stock'],
        'inUse': json['in_use'] == null ? undefined : json['in_use'],
    };
}

export function RawMaterialInventoryBucketsToJSON(value?: RawMaterialInventoryBuckets | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'inbound': value['inbound'],
        'in_stock': value['inStock'],
        'in_use': value['inUse'],
    };
}

