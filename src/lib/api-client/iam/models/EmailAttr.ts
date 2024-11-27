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
/**
 * 
 * @export
 * @interface EmailAttr
 */
export interface EmailAttr {
    /**
     * 
     * @type {string}
     * @memberof EmailAttr
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof EmailAttr
     */
    email: string;
}

/**
 * Check if a given object implements the EmailAttr interface.
 */
export function instanceOfEmailAttr(value: object): value is EmailAttr {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('email' in value) || value['email'] === undefined) return false;
    return true;
}

export function EmailAttrFromJSON(json: any): EmailAttr {
    return EmailAttrFromJSONTyped(json, false);
}

export function EmailAttrFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailAttr {
    if (json == null) {
        return json;
    }
    return {
        
        'name': json['name'],
        'email': json['email'],
    };
}

export function EmailAttrToJSON(value?: EmailAttr | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'name': value['name'],
        'email': value['email'],
    };
}
