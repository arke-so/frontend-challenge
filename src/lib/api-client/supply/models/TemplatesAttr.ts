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
 * @interface TemplatesAttr
 */
export interface TemplatesAttr {
    /**
     * 
     * @type {string}
     * @memberof TemplatesAttr
     */
    purchaseOrderIdTemplate: string;
}

/**
 * Check if a given object implements the TemplatesAttr interface.
 */
export function instanceOfTemplatesAttr(value: object): value is TemplatesAttr {
    if (!('purchaseOrderIdTemplate' in value) || value['purchaseOrderIdTemplate'] === undefined) return false;
    return true;
}

export function TemplatesAttrFromJSON(json: any): TemplatesAttr {
    return TemplatesAttrFromJSONTyped(json, false);
}

export function TemplatesAttrFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplatesAttr {
    if (json == null) {
        return json;
    }
    return {
        
        'purchaseOrderIdTemplate': json['purchase_order_id_template'],
    };
}

export function TemplatesAttrToJSON(value?: TemplatesAttr | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'purchase_order_id_template': value['purchaseOrderIdTemplate'],
    };
}
