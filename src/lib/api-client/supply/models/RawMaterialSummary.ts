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
import type { PricesAttr } from './PricesAttr';
import {
    PricesAttrFromJSON,
    PricesAttrFromJSONTyped,
    PricesAttrToJSON,
} from './PricesAttr';
import type { CompanyAttr } from './CompanyAttr';
import {
    CompanyAttrFromJSON,
    CompanyAttrFromJSONTyped,
    CompanyAttrToJSON,
} from './CompanyAttr';

/**
 * 
 * @export
 * @interface RawMaterialSummary
 */
export interface RawMaterialSummary {
    /**
     * 
     * @type {string}
     * @memberof RawMaterialSummary
     */
    supplierId: string;
    /**
     * 
     * @type {string}
     * @memberof RawMaterialSummary
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof RawMaterialSummary
     */
    externalId: string;
    /**
     * 
     * @type {string}
     * @memberof RawMaterialSummary
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof RawMaterialSummary
     */
    description?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof RawMaterialSummary
     */
    categories: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof RawMaterialSummary
     */
    uom: string;
    /**
     * 
     * @type {CompanyAttr}
     * @memberof RawMaterialSummary
     */
    supplierAttr?: CompanyAttr;
    /**
     * 
     * @type {string}
     * @memberof RawMaterialSummary
     */
    aggregateOfId?: string;
    /**
     * 
     * @type {RawMaterialSummary}
     * @memberof RawMaterialSummary
     */
    aggregateOf?: RawMaterialSummary;
    /**
     * 
     * @type {number}
     * @memberof RawMaterialSummary
     */
    aggregateQuantity?: number;
    /**
     * 
     * @type {DateAttr}
     * @memberof RawMaterialSummary
     */
    created?: DateAttr;
    /**
     * 
     * @type {PricesAttr}
     * @memberof RawMaterialSummary
     */
    prices?: PricesAttr;
}

/**
 * Check if a given object implements the RawMaterialSummary interface.
 */
export function instanceOfRawMaterialSummary(value: object): value is RawMaterialSummary {
    if (!('supplierId' in value) || value['supplierId'] === undefined) return false;
    if (!('externalId' in value) || value['externalId'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('categories' in value) || value['categories'] === undefined) return false;
    if (!('uom' in value) || value['uom'] === undefined) return false;
    return true;
}

export function RawMaterialSummaryFromJSON(json: any): RawMaterialSummary {
    return RawMaterialSummaryFromJSONTyped(json, false);
}

export function RawMaterialSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): RawMaterialSummary {
    if (json == null) {
        return json;
    }
    return {
        
        'supplierId': json['supplier_id'],
        'id': json['id'] == null ? undefined : json['id'],
        'externalId': json['external_id'],
        'name': json['name'],
        'description': json['description'] == null ? undefined : json['description'],
        'categories': json['categories'],
        'uom': json['uom'],
        'supplierAttr': json['supplier_attr'] == null ? undefined : CompanyAttrFromJSON(json['supplier_attr']),
        'aggregateOfId': json['aggregate_of_id'] == null ? undefined : json['aggregate_of_id'],
        'aggregateOf': json['aggregate_of'] == null ? undefined : RawMaterialSummaryFromJSON(json['aggregate_of']),
        'aggregateQuantity': json['aggregate_quantity'] == null ? undefined : json['aggregate_quantity'],
        'created': json['created'] == null ? undefined : DateAttrFromJSON(json['created']),
        'prices': json['prices'] == null ? undefined : PricesAttrFromJSON(json['prices']),
    };
}

export function RawMaterialSummaryToJSON(value?: RawMaterialSummary | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'supplier_id': value['supplierId'],
        'id': value['id'],
        'external_id': value['externalId'],
        'name': value['name'],
        'description': value['description'],
        'categories': value['categories'],
        'uom': value['uom'],
        'supplier_attr': CompanyAttrToJSON(value['supplierAttr']),
        'aggregate_of_id': value['aggregateOfId'],
        'aggregate_of': RawMaterialSummaryToJSON(value['aggregateOf']),
        'aggregate_quantity': value['aggregateQuantity'],
        'created': DateAttrToJSON(value['created']),
        'prices': PricesAttrToJSON(value['prices']),
    };
}

