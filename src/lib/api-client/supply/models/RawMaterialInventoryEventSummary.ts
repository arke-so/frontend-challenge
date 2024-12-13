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
 * @interface RawMaterialInventoryEventSummary
 */
export interface RawMaterialInventoryEventSummary {
    /**
     * 
     * @type {string}
     * @memberof RawMaterialInventoryEventSummary
     */
    id?: string;
    /**
     * 
     * @type {Date}
     * @memberof RawMaterialInventoryEventSummary
     */
    time: Date;
    /**
     * 
     * @type {string}
     * @memberof RawMaterialInventoryEventSummary
     */
    fromBucket: RawMaterialInventoryEventSummaryFromBucketEnum;
    /**
     * 
     * @type {string}
     * @memberof RawMaterialInventoryEventSummary
     */
    toBucket: RawMaterialInventoryEventSummaryToBucketEnum;
    /**
     * 
     * @type {string}
     * @memberof RawMaterialInventoryEventSummary
     */
    rawMaterialName: string;
    /**
     * 
     * @type {string}
     * @memberof RawMaterialInventoryEventSummary
     */
    reasonType: string;
    /**
     * 
     * @type {number}
     * @memberof RawMaterialInventoryEventSummary
     */
    quantity: number;
}


/**
 * @export
 */
export const RawMaterialInventoryEventSummaryFromBucketEnum = {
    Empty: '',
    Inbound: 'inbound',
    InStock: 'in_stock',
    InUse: 'in_use'
} as const;
export type RawMaterialInventoryEventSummaryFromBucketEnum = typeof RawMaterialInventoryEventSummaryFromBucketEnum[keyof typeof RawMaterialInventoryEventSummaryFromBucketEnum];

/**
 * @export
 */
export const RawMaterialInventoryEventSummaryToBucketEnum = {
    Empty: '',
    Inbound: 'inbound',
    InStock: 'in_stock',
    InUse: 'in_use',
    ReasonType: 'reason_type'
} as const;
export type RawMaterialInventoryEventSummaryToBucketEnum = typeof RawMaterialInventoryEventSummaryToBucketEnum[keyof typeof RawMaterialInventoryEventSummaryToBucketEnum];


/**
 * Check if a given object implements the RawMaterialInventoryEventSummary interface.
 */
export function instanceOfRawMaterialInventoryEventSummary(value: object): value is RawMaterialInventoryEventSummary {
    if (!('time' in value) || value['time'] === undefined) return false;
    if (!('fromBucket' in value) || value['fromBucket'] === undefined) return false;
    if (!('toBucket' in value) || value['toBucket'] === undefined) return false;
    if (!('rawMaterialName' in value) || value['rawMaterialName'] === undefined) return false;
    if (!('reasonType' in value) || value['reasonType'] === undefined) return false;
    if (!('quantity' in value) || value['quantity'] === undefined) return false;
    return true;
}

export function RawMaterialInventoryEventSummaryFromJSON(json: any): RawMaterialInventoryEventSummary {
    return RawMaterialInventoryEventSummaryFromJSONTyped(json, false);
}

export function RawMaterialInventoryEventSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): RawMaterialInventoryEventSummary {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'] == null ? undefined : json['id'],
        'time': (new Date(json['time'])),
        'fromBucket': json['from_bucket'],
        'toBucket': json['to_bucket'],
        'rawMaterialName': json['raw_material_name'],
        'reasonType': json['reason_type'],
        'quantity': json['quantity'],
    };
}

export function RawMaterialInventoryEventSummaryToJSON(value?: RawMaterialInventoryEventSummary | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'time': ((value['time']).toISOString()),
        'from_bucket': value['fromBucket'],
        'to_bucket': value['toBucket'],
        'raw_material_name': value['rawMaterialName'],
        'reason_type': value['reasonType'],
        'quantity': value['quantity'],
    };
}

