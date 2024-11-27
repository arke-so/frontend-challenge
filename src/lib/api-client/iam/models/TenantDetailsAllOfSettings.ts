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
import type { EmailAttr } from './EmailAttr';
import {
    EmailAttrFromJSON,
    EmailAttrFromJSONTyped,
    EmailAttrToJSON,
} from './EmailAttr';
import type { AddressAttr } from './AddressAttr';
import {
    AddressAttrFromJSON,
    AddressAttrFromJSONTyped,
    AddressAttrToJSON,
} from './AddressAttr';

/**
 * 
 * @export
 * @interface TenantDetailsAllOfSettings
 */
export interface TenantDetailsAllOfSettings {
    /**
     * 
     * @type {Array<string>}
     * @memberof TenantDetailsAllOfSettings
     */
    uom: Array<string>;
    /**
     * 
     * @type {Array<AddressAttr>}
     * @memberof TenantDetailsAllOfSettings
     */
    addresses: Array<AddressAttr>;
    /**
     * 
     * @type {Array<EmailAttr>}
     * @memberof TenantDetailsAllOfSettings
     */
    emails: Array<EmailAttr>;
    /**
     * 
     * @type {string}
     * @memberof TenantDetailsAllOfSettings
     */
    vat: string;
}

/**
 * Check if a given object implements the TenantDetailsAllOfSettings interface.
 */
export function instanceOfTenantDetailsAllOfSettings(value: object): value is TenantDetailsAllOfSettings {
    if (!('uom' in value) || value['uom'] === undefined) return false;
    if (!('addresses' in value) || value['addresses'] === undefined) return false;
    if (!('emails' in value) || value['emails'] === undefined) return false;
    if (!('vat' in value) || value['vat'] === undefined) return false;
    return true;
}

export function TenantDetailsAllOfSettingsFromJSON(json: any): TenantDetailsAllOfSettings {
    return TenantDetailsAllOfSettingsFromJSONTyped(json, false);
}

export function TenantDetailsAllOfSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TenantDetailsAllOfSettings {
    if (json == null) {
        return json;
    }
    return {
        
        'uom': json['uom'],
        'addresses': ((json['addresses'] as Array<any>).map(AddressAttrFromJSON)),
        'emails': ((json['emails'] as Array<any>).map(EmailAttrFromJSON)),
        'vat': json['vat'],
    };
}

export function TenantDetailsAllOfSettingsToJSON(value?: TenantDetailsAllOfSettings | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'uom': value['uom'],
        'addresses': ((value['addresses'] as Array<any>).map(AddressAttrToJSON)),
        'emails': ((value['emails'] as Array<any>).map(EmailAttrToJSON)),
        'vat': value['vat'],
    };
}

