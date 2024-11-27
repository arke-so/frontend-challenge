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
 * @interface SendOrderCommand
 */
export interface SendOrderCommand {
    /**
     * 
     * @type {string}
     * @memberof SendOrderCommand
     */
    recipient?: string;
    /**
     * 
     * @type {string}
     * @memberof SendOrderCommand
     */
    emailBody?: string;
    /**
     * 
     * @type {boolean}
     * @memberof SendOrderCommand
     */
    dryRun: boolean;
}

/**
 * Check if a given object implements the SendOrderCommand interface.
 */
export function instanceOfSendOrderCommand(value: object): value is SendOrderCommand {
    if (!('dryRun' in value) || value['dryRun'] === undefined) return false;
    return true;
}

export function SendOrderCommandFromJSON(json: any): SendOrderCommand {
    return SendOrderCommandFromJSONTyped(json, false);
}

export function SendOrderCommandFromJSONTyped(json: any, ignoreDiscriminator: boolean): SendOrderCommand {
    if (json == null) {
        return json;
    }
    return {
        
        'recipient': json['recipient'] == null ? undefined : json['recipient'],
        'emailBody': json['email_body'] == null ? undefined : json['email_body'],
        'dryRun': json['dry_run'],
    };
}

export function SendOrderCommandToJSON(value?: SendOrderCommand | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'recipient': value['recipient'],
        'email_body': value['emailBody'],
        'dry_run': value['dryRun'],
    };
}
