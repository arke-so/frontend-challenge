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

import type { RawMaterialSummary, SupplierDetails, SupplierSummary } from '../models/index'
import { SupplierDetailsFromJSON, SupplierDetailsToJSON } from '../models/index'
import * as runtime from '../runtime'

export interface CreateSupplierRequest {
  supplierDetails?: SupplierDetails
}

export interface ListRawMaterialsBySupplierRequest {
  supplierId?: string
  limit?: number
  offset?: number
  search?: string
  archived?: string
}

export interface ListSuppliersRequest {
  limit?: number
  offset?: number
  search?: string
  archived?: string
}

export interface ShowSupplierRequest {
  supplierId: string
}

export interface UpdateSupplierRequest {
  supplierId: string
  supplierDetails?: SupplierDetails
}

/**
 *
 */
export class SuppliersApi extends runtime.BaseAPI {
  /**
   * creates a new supplier
   */
  async createSupplierRaw(
    requestParameters: CreateSupplierRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<SupplierDetails>> {
    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    const response = await this.request(
      {
        path: `/supplier`,
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: SupplierDetailsToJSON(requestParameters['supplierDetails']),
      },
      initOverrides,
    )

    return new runtime.JSONApiResponse(response, jsonValue => SupplierDetailsFromJSON(jsonValue))
  }

  /**
   * creates a new supplier
   */
  async createSupplier(
    requestParameters: CreateSupplierRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<SupplierDetails> {
    const response = await this.createSupplierRaw(requestParameters, initOverrides)
    return await response.value()
  }

  /**
   * lists the raw material definitions for a given supplier
   */
  async listRawMaterialsBySupplier(
    requestParameters: ListRawMaterialsBySupplierRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<RawMaterialSummary>> {
    await new Promise(resolve => setTimeout(resolve, 500))
    return []
  }

  /**
   * lists the suppliers
   */
  async listSuppliers(
    requestParameters: ListSuppliersRequest = {},
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<Array<SupplierSummary>> {
    return [
      {
        id: '1',
        name: 'Supplier 1',
        phone: '123456789',
        vatNo: '123456789',
        categories: ['category1', 'category2'],
        defaultCurrency: 'EUR',
        emails: [
          {
            email: 'supplier1@email.com',
            name: 'Sales',
          },
        ],
      },
      {
        id: '2',
        name: 'Supplier 2',
        phone: '987654321',
        vatNo: '987654321',
        categories: ['category3', 'category4'],
        defaultCurrency: 'USD',
        emails: [
          {
            email: 'contact@supplier2.com',
            name: 'Support',
          },
          {
            email: 'billing@supplier2.com',
            name: 'Billing',
          },
        ],
      },
      {
        id: '3',
        name: 'Supplier 3',
        phone: '555666777',
        vatNo: '112233445',
        categories: ['category1'],
        defaultCurrency: 'GBP',
        emails: [
          {
            email: 'info@supplier3.net',
            name: 'General Inquiry',
          },
        ],
      },
      {
        id: '4',
        name: 'Supplier 4',
        phone: '444555666',
        vatNo: '223344556',
        categories: ['category2', 'category5'],
        defaultCurrency: 'AUD',
        emails: [
          {
            email: 'sales@supplier4.org',
            name: 'Sales',
          },
          {
            email: 'support@supplier4.org',
            name: 'Customer Support',
          },
        ],
      },
      {
        id: '5',
        name: 'Supplier 5',
        phone: '333222111',
        vatNo: '334455667',
        categories: ['category3', 'category4', 'category6'],
        defaultCurrency: 'CAD',
        emails: [
          {
            email: 'info@supplier5.com',
            name: 'General Inquiry',
          },
        ],
      },
      {
        id: '6',
        name: 'Supplier 6',
        phone: '777888999',
        vatNo: '445566778',
        categories: ['category1'],
        defaultCurrency: 'EUR',
        emails: [
          {
            email: 'contact@supplier6.com',
            name: 'Customer Support',
          },
        ],
      },
      {
        id: '7',
        name: 'Supplier 7',
        phone: '888999000',
        vatNo: '556677889',
        categories: ['category5', 'category6'],
        defaultCurrency: 'USD',
        emails: [
          {
            email: 'supplier7@domain.com',
            name: 'Sales',
          },
          {
            email: 'billing@domain.com',
            name: 'Billing',
          },
        ],
      },
      {
        id: '8',
        name: 'Supplier 8',
        phone: '222111333',
        vatNo: '667788990',
        categories: ['category2'],
        defaultCurrency: 'GBP',
        emails: [
          {
            email: 'info@supplier8.co.uk',
            name: 'Info',
          },
        ],
      },
      {
        id: '9',
        name: 'Supplier 9',
        phone: '999888777',
        vatNo: '778899001',
        categories: ['category3', 'category4', 'category5'],
        defaultCurrency: 'JPY',
        emails: [
          {
            email: 'support@supplier9.jp',
            name: 'Technical Support',
          },
        ],
      },
      {
        id: '10',
        name: 'Supplier 10',
        phone: '111222333',
        vatNo: '889900112',
        categories: ['category6'],
        defaultCurrency: 'CHF',
        emails: [
          {
            email: 'help@supplier10.ch',
            name: 'Customer Service',
          },
          {
            email: 'admin@supplier10.ch',
            name: 'Admin',
          },
        ],
      },
    ]
  }

  async showSupplier(
    requestParameters: ShowSupplierRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<SupplierDetails> {
    return {
      name: 'Supplier 1',
      phone: '123456789',
      vatNo: '123456789',
      addresses: [
        {
          address: '123 Main St',
          name: 'Main Office',
          country: 'USA',
        },
      ],
      bank: {
        iban: 'US123456789',
        name: 'Bank of America',
        swift: 'BOFAUS3N',
      },
      categories: ['category1', 'category2'],
      defaultCurrency: 'EUR',
      emails: [
        {
          email: 'supplier@email.com',
          name: 'Sales',
        },
      ],
      version: 1,
      paymentMethod: 'bank_transfer',
      website: 'https://supplier.com',
      description: 'Supplier 1 description here with some details about the supplier',
      notes: 'Some notes about the supplier',
    }
  }

  /**
   * updates a supplier
   */
  async updateSupplierRaw(
    requestParameters: UpdateSupplierRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<runtime.ApiResponse<SupplierDetails>> {
    if (requestParameters['supplierId'] == null) {
      throw new runtime.RequiredError(
        'supplierId',
        'Required parameter "supplierId" was null or undefined when calling updateSupplier().',
      )
    }

    const queryParameters: any = {}

    const headerParameters: runtime.HTTPHeaders = {}

    headerParameters['Content-Type'] = 'application/json'

    const response = await this.request(
      {
        path: `/supplier/{supplierId}`.replace(
          `{${'supplierId'}}`,
          encodeURIComponent(String(requestParameters['supplierId'])),
        ),
        method: 'PUT',
        headers: headerParameters,
        query: queryParameters,
        body: SupplierDetailsToJSON(requestParameters['supplierDetails']),
      },
      initOverrides,
    )

    return new runtime.JSONApiResponse(response, jsonValue => SupplierDetailsFromJSON(jsonValue))
  }

  /**
   * updates a supplier
   */
  async updateSupplier(
    requestParameters: UpdateSupplierRequest,
    initOverrides?: RequestInit | runtime.InitOverrideFunction,
  ): Promise<SupplierDetails> {
    const response = await this.updateSupplierRaw(requestParameters, initOverrides)
    return await response.value()
  }
}
