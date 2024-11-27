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
 * @interface UserAttr
 */
export interface UserAttr {
    /**
     * 
     * @type {string}
     * @memberof UserAttr
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof UserAttr
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof UserAttr
     */
    fullName: string;
}

/**
 * Check if a given object implements the UserAttr interface.
 */
export function instanceOfUserAttr(value: object): value is UserAttr {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('username' in value) || value['username'] === undefined) return false;
    if (!('fullName' in value) || value['fullName'] === undefined) return false;
    return true;
}

export function UserAttrFromJSON(json: any): UserAttr {
    return UserAttrFromJSONTyped(json, false);
}

export function UserAttrFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserAttr {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'username': json['username'],
        'fullName': json['full_name'],
    };
}

export function UserAttrToJSON(value?: UserAttr | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'username': value['username'],
        'full_name': value['fullName'],
    };
}
