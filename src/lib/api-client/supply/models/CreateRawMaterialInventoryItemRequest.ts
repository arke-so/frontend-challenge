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
 * @interface CreateRawMaterialInventoryItemRequest
 */
export interface CreateRawMaterialInventoryItemRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateRawMaterialInventoryItemRequest
     */
    rawMaterialId: string;
    /**
     * 
     * @type {string}
     * @memberof CreateRawMaterialInventoryItemRequest
     */
    orderId?: string;
}

/**
 * Check if a given object implements the CreateRawMaterialInventoryItemRequest interface.
 */
export function instanceOfCreateRawMaterialInventoryItemRequest(value: object): value is CreateRawMaterialInventoryItemRequest {
    if (!('rawMaterialId' in value) || value['rawMaterialId'] === undefined) return false;
    return true;
}

export function CreateRawMaterialInventoryItemRequestFromJSON(json: any): CreateRawMaterialInventoryItemRequest {
    return CreateRawMaterialInventoryItemRequestFromJSONTyped(json, false);
}

export function CreateRawMaterialInventoryItemRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateRawMaterialInventoryItemRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'rawMaterialId': json['raw_material_id'],
        'orderId': json['order_id'] == null ? undefined : json['order_id'],
    };
}

export function CreateRawMaterialInventoryItemRequestToJSON(value?: CreateRawMaterialInventoryItemRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'raw_material_id': value['rawMaterialId'],
        'order_id': value['orderId'],
    };
}

