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
 * @interface GenericAttr
 */
export interface GenericAttr {
    /**
     * 
     * @type {string}
     * @memberof GenericAttr
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof GenericAttr
     */
    extraId?: string;
    /**
     * 
     * @type {string}
     * @memberof GenericAttr
     */
    name: string;
}

/**
 * Check if a given object implements the GenericAttr interface.
 */
export function instanceOfGenericAttr(value: object): value is GenericAttr {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function GenericAttrFromJSON(json: any): GenericAttr {
    return GenericAttrFromJSONTyped(json, false);
}

export function GenericAttrFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenericAttr {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'extraId': json['extra_id'] == null ? undefined : json['extra_id'],
        'name': json['name'],
    };
}

export function GenericAttrToJSON(value?: GenericAttr | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'extra_id': value['extraId'],
        'name': value['name'],
    };
}

