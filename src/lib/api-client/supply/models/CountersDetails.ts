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

/**
 * 
 * @export
 * @interface CountersDetails
 */
export interface CountersDetails {
    /**
     * 
     * @type {DateAttr}
     * @memberof CountersDetails
     */
    created?: DateAttr;
    /**
     * 
     * @type {DateAttr}
     * @memberof CountersDetails
     */
    updated?: DateAttr;
    /**
     * 
     * @type {number}
     * @memberof CountersDetails
     */
    version: number;
    /**
     * 
     * @type {boolean}
     * @memberof CountersDetails
     */
    archived?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CountersDetails
     */
    notes?: string;
    /**
     * 
     * @type {number}
     * @memberof CountersDetails
     */
    globalCounter: number;
    /**
     * 
     * @type {number}
     * @memberof CountersDetails
     */
    poCounter: number;
    /**
     * 
     * @type {number}
     * @memberof CountersDetails
     */
    year: number;
}

/**
 * Check if a given object implements the CountersDetails interface.
 */
export function instanceOfCountersDetails(value: object): value is CountersDetails {
    if (!('version' in value) || value['version'] === undefined) return false;
    if (!('globalCounter' in value) || value['globalCounter'] === undefined) return false;
    if (!('poCounter' in value) || value['poCounter'] === undefined) return false;
    if (!('year' in value) || value['year'] === undefined) return false;
    return true;
}

export function CountersDetailsFromJSON(json: any): CountersDetails {
    return CountersDetailsFromJSONTyped(json, false);
}

export function CountersDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CountersDetails {
    if (json == null) {
        return json;
    }
    return {
        
        'created': json['created'] == null ? undefined : DateAttrFromJSON(json['created']),
        'updated': json['updated'] == null ? undefined : DateAttrFromJSON(json['updated']),
        'version': json['version'],
        'archived': json['archived'] == null ? undefined : json['archived'],
        'notes': json['notes'] == null ? undefined : json['notes'],
        'globalCounter': json['global_counter'],
        'poCounter': json['po_counter'],
        'year': json['year'],
    };
}

export function CountersDetailsToJSON(value?: CountersDetails | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'created': DateAttrToJSON(value['created']),
        'updated': DateAttrToJSON(value['updated']),
        'version': value['version'],
        'archived': value['archived'],
        'notes': value['notes'],
        'global_counter': value['globalCounter'],
        'po_counter': value['poCounter'],
        'year': value['year'],
    };
}

