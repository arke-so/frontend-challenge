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
import type { ComputeOrderCompletionItem } from './ComputeOrderCompletionItem';
import {
    ComputeOrderCompletionItemFromJSON,
    ComputeOrderCompletionItemFromJSONTyped,
    ComputeOrderCompletionItemToJSON,
} from './ComputeOrderCompletionItem';

/**
 * 
 * @export
 * @interface ComputeOrderCompletionDetails
 */
export interface ComputeOrderCompletionDetails {
    /**
     * 
     * @type {Array<ComputeOrderCompletionItem>}
     * @memberof ComputeOrderCompletionDetails
     */
    rawMaterials: Array<ComputeOrderCompletionItem>;
}

/**
 * Check if a given object implements the ComputeOrderCompletionDetails interface.
 */
export function instanceOfComputeOrderCompletionDetails(value: object): value is ComputeOrderCompletionDetails {
    if (!('rawMaterials' in value) || value['rawMaterials'] === undefined) return false;
    return true;
}

export function ComputeOrderCompletionDetailsFromJSON(json: any): ComputeOrderCompletionDetails {
    return ComputeOrderCompletionDetailsFromJSONTyped(json, false);
}

export function ComputeOrderCompletionDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ComputeOrderCompletionDetails {
    if (json == null) {
        return json;
    }
    return {
        
        'rawMaterials': ((json['raw_materials'] as Array<any>).map(ComputeOrderCompletionItemFromJSON)),
    };
}

export function ComputeOrderCompletionDetailsToJSON(value?: ComputeOrderCompletionDetails | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'raw_materials': ((value['rawMaterials'] as Array<any>).map(ComputeOrderCompletionItemToJSON)),
    };
}
