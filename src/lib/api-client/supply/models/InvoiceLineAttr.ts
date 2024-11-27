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
 * @interface InvoiceLineAttr
 */
export interface InvoiceLineAttr {
    /**
     * 
     * @type {string}
     * @memberof InvoiceLineAttr
     */
    externalId?: string;
    /**
     * 
     * @type {string}
     * @memberof InvoiceLineAttr
     */
    id?: string;
    /**
     * 
     * @type {string}
     * @memberof InvoiceLineAttr
     */
    name: string;
    /**
     * 
     * @type {number}
     * @memberof InvoiceLineAttr
     */
    quantity: number;
    /**
     * 
     * @type {number}
     * @memberof InvoiceLineAttr
     */
    unitPrice: number;
    /**
     * 
     * @type {string}
     * @memberof InvoiceLineAttr
     */
    discount?: string;
    /**
     * 
     * @type {number}
     * @memberof InvoiceLineAttr
     */
    vat: number;
    /**
     * 
     * @type {number}
     * @memberof InvoiceLineAttr
     */
    total: number;
    /**
     * 
     * @type {number}
     * @memberof InvoiceLineAttr
     */
    totalVatIncl: number;
}

/**
 * Check if a given object implements the InvoiceLineAttr interface.
 */
export function instanceOfInvoiceLineAttr(value: object): value is InvoiceLineAttr {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('quantity' in value) || value['quantity'] === undefined) return false;
    if (!('unitPrice' in value) || value['unitPrice'] === undefined) return false;
    if (!('vat' in value) || value['vat'] === undefined) return false;
    if (!('total' in value) || value['total'] === undefined) return false;
    if (!('totalVatIncl' in value) || value['totalVatIncl'] === undefined) return false;
    return true;
}

export function InvoiceLineAttrFromJSON(json: any): InvoiceLineAttr {
    return InvoiceLineAttrFromJSONTyped(json, false);
}

export function InvoiceLineAttrFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvoiceLineAttr {
    if (json == null) {
        return json;
    }
    return {
        
        'externalId': json['external_id'] == null ? undefined : json['external_id'],
        'id': json['id'] == null ? undefined : json['id'],
        'name': json['name'],
        'quantity': json['quantity'],
        'unitPrice': json['unit_price'],
        'discount': json['discount'] == null ? undefined : json['discount'],
        'vat': json['vat'],
        'total': json['total'],
        'totalVatIncl': json['total_vat_incl'],
    };
}

export function InvoiceLineAttrToJSON(value?: InvoiceLineAttr | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'external_id': value['externalId'],
        'id': value['id'],
        'name': value['name'],
        'quantity': value['quantity'],
        'unit_price': value['unitPrice'],
        'discount': value['discount'],
        'vat': value['vat'],
        'total': value['total'],
        'total_vat_incl': value['totalVatIncl'],
    };
}
