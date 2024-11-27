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
import type { UserAttr } from './UserAttr';
import {
    UserAttrFromJSON,
    UserAttrFromJSONTyped,
    UserAttrToJSON,
} from './UserAttr';

/**
 * 
 * @export
 * @interface DateAttr
 */
export interface DateAttr {
    /**
     * 
     * @type {Date}
     * @memberof DateAttr
     */
    at: Date;
    /**
     * 
     * @type {UserAttr}
     * @memberof DateAttr
     */
    by: UserAttr;
}

/**
 * Check if a given object implements the DateAttr interface.
 */
export function instanceOfDateAttr(value: object): value is DateAttr {
    if (!('at' in value) || value['at'] === undefined) return false;
    if (!('by' in value) || value['by'] === undefined) return false;
    return true;
}

export function DateAttrFromJSON(json: any): DateAttr {
    return DateAttrFromJSONTyped(json, false);
}

export function DateAttrFromJSONTyped(json: any, ignoreDiscriminator: boolean): DateAttr {
    if (json == null) {
        return json;
    }
    return {
        
        'at': (new Date(json['at'])),
        'by': UserAttrFromJSON(json['by']),
    };
}

export function DateAttrToJSON(value?: DateAttr | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'at': ((value['at']).toISOString()),
        'by': UserAttrToJSON(value['by']),
    };
}
