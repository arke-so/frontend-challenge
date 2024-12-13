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
import type { UserAttr } from './UserAttr';
import {
    UserAttrFromJSON,
    UserAttrFromJSONTyped,
    UserAttrToJSON,
} from './UserAttr';

/**
 * 
 * @export
 * @interface RawMaterialInventoryEventDetails
 */
export interface RawMaterialInventoryEventDetails {
    /**
     * 
     * @type {string}
     * @memberof RawMaterialInventoryEventDetails
     */
    id?: string;
    /**
     * 
     * @type {Date}
     * @memberof RawMaterialInventoryEventDetails
     */
    time: Date;
    /**
     * 
     * @type {string}
     * @memberof RawMaterialInventoryEventDetails
     */
    fromBucket: RawMaterialInventoryEventDetailsFromBucketEnum;
    /**
     * 
     * @type {string}
     * @memberof RawMaterialInventoryEventDetails
     */
    toBucket: RawMaterialInventoryEventDetailsToBucketEnum;
    /**
     * 
     * @type {string}
     * @memberof RawMaterialInventoryEventDetails
     */
    rawMaterialName: string;
    /**
     * 
     * @type {string}
     * @memberof RawMaterialInventoryEventDetails
     */
    reasonType: string;
    /**
     * 
     * @type {number}
     * @memberof RawMaterialInventoryEventDetails
     */
    quantity: number;
    /**
     * 
     * @type {string}
     * @memberof RawMaterialInventoryEventDetails
     */
    rawMaterialId: string;
    /**
     * 
     * @type {string}
     * @memberof RawMaterialInventoryEventDetails
     */
    rawMaterialItemId?: string;
    /**
     * 
     * @type {string}
     * @memberof RawMaterialInventoryEventDetails
     */
    reasonId?: string;
    /**
     * 
     * @type {UserAttr}
     * @memberof RawMaterialInventoryEventDetails
     */
    operator?: UserAttr;
}


/**
 * @export
 */
export const RawMaterialInventoryEventDetailsFromBucketEnum = {
    Empty: '',
    Inbound: 'inbound',
    InStock: 'in_stock',
    InUse: 'in_use'
} as const;
export type RawMaterialInventoryEventDetailsFromBucketEnum = typeof RawMaterialInventoryEventDetailsFromBucketEnum[keyof typeof RawMaterialInventoryEventDetailsFromBucketEnum];

/**
 * @export
 */
export const RawMaterialInventoryEventDetailsToBucketEnum = {
    Empty: '',
    Inbound: 'inbound',
    InStock: 'in_stock',
    InUse: 'in_use',
    ReasonType: 'reason_type'
} as const;
export type RawMaterialInventoryEventDetailsToBucketEnum = typeof RawMaterialInventoryEventDetailsToBucketEnum[keyof typeof RawMaterialInventoryEventDetailsToBucketEnum];


/**
 * Check if a given object implements the RawMaterialInventoryEventDetails interface.
 */
export function instanceOfRawMaterialInventoryEventDetails(value: object): value is RawMaterialInventoryEventDetails {
    if (!('time' in value) || value['time'] === undefined) return false;
    if (!('fromBucket' in value) || value['fromBucket'] === undefined) return false;
    if (!('toBucket' in value) || value['toBucket'] === undefined) return false;
    if (!('rawMaterialName' in value) || value['rawMaterialName'] === undefined) return false;
    if (!('reasonType' in value) || value['reasonType'] === undefined) return false;
    if (!('quantity' in value) || value['quantity'] === undefined) return false;
    if (!('rawMaterialId' in value) || value['rawMaterialId'] === undefined) return false;
    return true;
}

export function RawMaterialInventoryEventDetailsFromJSON(json: any): RawMaterialInventoryEventDetails {
    return RawMaterialInventoryEventDetailsFromJSONTyped(json, false);
}

export function RawMaterialInventoryEventDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RawMaterialInventoryEventDetails {
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
        'rawMaterialId': json['raw_material_id'],
        'rawMaterialItemId': json['raw_material_item_id'] == null ? undefined : json['raw_material_item_id'],
        'reasonId': json['reason_id'] == null ? undefined : json['reason_id'],
        'operator': json['operator'] == null ? undefined : UserAttrFromJSON(json['operator']),
    };
}

export function RawMaterialInventoryEventDetailsToJSON(value?: RawMaterialInventoryEventDetails | null): any {
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
        'raw_material_id': value['rawMaterialId'],
        'raw_material_item_id': value['rawMaterialItemId'],
        'reason_id': value['reasonId'],
        'operator': UserAttrToJSON(value['operator']),
    };
}

