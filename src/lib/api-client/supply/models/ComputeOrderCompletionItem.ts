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
 * @interface ComputeOrderCompletionItem
 */
export interface ComputeOrderCompletionItem {
    /**
     * 
     * @type {string}
     * @memberof ComputeOrderCompletionItem
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof ComputeOrderCompletionItem
     */
    extraId?: string;
    /**
     * 
     * @type {string}
     * @memberof ComputeOrderCompletionItem
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof ComputeOrderCompletionItem
     */
    uom: string;
    /**
     * 
     * @type {number}
     * @memberof ComputeOrderCompletionItem
     */
    expected: number;
    /**
     * 
     * @type {number}
     * @memberof ComputeOrderCompletionItem
     */
    delivered: number;
}

/**
 * Check if a given object implements the ComputeOrderCompletionItem interface.
 */
export function instanceOfComputeOrderCompletionItem(value: object): value is ComputeOrderCompletionItem {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('uom' in value) || value['uom'] === undefined) return false;
    if (!('expected' in value) || value['expected'] === undefined) return false;
    if (!('delivered' in value) || value['delivered'] === undefined) return false;
    return true;
}

export function ComputeOrderCompletionItemFromJSON(json: any): ComputeOrderCompletionItem {
    return ComputeOrderCompletionItemFromJSONTyped(json, false);
}

export function ComputeOrderCompletionItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComputeOrderCompletionItem {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'extraId': json['extra_id'] == null ? undefined : json['extra_id'],
        'id': json['id'],
        'uom': json['uom'],
        'expected': json['expected'],
        'delivered': json['delivered'],
    };
}

export function ComputeOrderCompletionItemToJSON(value?: ComputeOrderCompletionItem | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'extra_id': value['extraId'],
        'id': value['id'],
        'uom': value['uom'],
        'expected': value['expected'],
        'delivered': value['delivered'],
    };
}

