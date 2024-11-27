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
import type { DateAttr } from './DateAttr';
import {
    DateAttrFromJSON,
    DateAttrFromJSONTyped,
    DateAttrToJSON,
} from './DateAttr';
import type { PricesAttr } from './PricesAttr';
import {
    PricesAttrFromJSON,
    PricesAttrFromJSONTyped,
    PricesAttrToJSON,
} from './PricesAttr';
import type { RawMaterialInventoryBuckets } from './RawMaterialInventoryBuckets';
import {
    RawMaterialInventoryBucketsFromJSON,
    RawMaterialInventoryBucketsFromJSONTyped,
    RawMaterialInventoryBucketsToJSON,
} from './RawMaterialInventoryBuckets';

/**
 * 
 * @export
 * @interface RawMaterialInventoryItemDetails
 */
export interface RawMaterialInventoryItemDetails {
    /**
     * 
     * @type {DateAttr}
     * @memberof RawMaterialInventoryItemDetails
     */
    created?: DateAttr;
    /**
     * 
     * @type {DateAttr}
     * @memberof RawMaterialInventoryItemDetails
     */
    updated?: DateAttr;
    /**
     * 
     * @type {number}
     * @memberof RawMaterialInventoryItemDetails
     */
    version: number;
    /**
     * 
     * @type {boolean}
     * @memberof RawMaterialInventoryItemDetails
     */
    archived?: boolean;
    /**
     * 
     * @type {string}
     * @memberof RawMaterialInventoryItemDetails
     */
    notes?: string;
    /**
     * 
     * @type {string}
     * @memberof RawMaterialInventoryItemDetails
     */
    id?: string;
    /**
     * 
     * @type {RawMaterialInventoryBuckets}
     * @memberof RawMaterialInventoryItemDetails
     */
    buckets?: RawMaterialInventoryBuckets;
    /**
     * 
     * @type {string}
     * @memberof RawMaterialInventoryItemDetails
     */
    rawMaterialId: string;
    /**
     * 
     * @type {string}
     * @memberof RawMaterialInventoryItemDetails
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof RawMaterialInventoryItemDetails
     */
    externalId: string;
    /**
     * 
     * @type {string}
     * @memberof RawMaterialInventoryItemDetails
     */
    orderId?: string;
    /**
     * 
     * @type {PricesAttr}
     * @memberof RawMaterialInventoryItemDetails
     */
    prices: PricesAttr;
}

/**
 * Check if a given object implements the RawMaterialInventoryItemDetails interface.
 */
export function instanceOfRawMaterialInventoryItemDetails(value: object): value is RawMaterialInventoryItemDetails {
    if (!('version' in value) || value['version'] === undefined) return false;
    if (!('rawMaterialId' in value) || value['rawMaterialId'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('externalId' in value) || value['externalId'] === undefined) return false;
    if (!('prices' in value) || value['prices'] === undefined) return false;
    return true;
}

export function RawMaterialInventoryItemDetailsFromJSON(json: any): RawMaterialInventoryItemDetails {
    return RawMaterialInventoryItemDetailsFromJSONTyped(json, false);
}

export function RawMaterialInventoryItemDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RawMaterialInventoryItemDetails {
    if (json == null) {
        return json;
    }
    return {
        
        'created': json['created'] == null ? undefined : DateAttrFromJSON(json['created']),
        'updated': json['updated'] == null ? undefined : DateAttrFromJSON(json['updated']),
        'version': json['version'],
        'archived': json['archived'] == null ? undefined : json['archived'],
        'notes': json['notes'] == null ? undefined : json['notes'],
        'id': json['id'] == null ? undefined : json['id'],
        'buckets': json['buckets'] == null ? undefined : RawMaterialInventoryBucketsFromJSON(json['buckets']),
        'rawMaterialId': json['raw_material_id'],
        'name': json['name'],
        'externalId': json['external_id'],
        'orderId': json['order_id'] == null ? undefined : json['order_id'],
        'prices': PricesAttrFromJSON(json['prices']),
    };
}

export function RawMaterialInventoryItemDetailsToJSON(value?: RawMaterialInventoryItemDetails | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'created': DateAttrToJSON(value['created']),
        'updated': DateAttrToJSON(value['updated']),
        'version': value['version'],
        'archived': value['archived'],
        'notes': value['notes'],
        'id': value['id'],
        'buckets': RawMaterialInventoryBucketsToJSON(value['buckets']),
        'raw_material_id': value['rawMaterialId'],
        'name': value['name'],
        'external_id': value['externalId'],
        'order_id': value['orderId'],
        'prices': PricesAttrToJSON(value['prices']),
    };
}

