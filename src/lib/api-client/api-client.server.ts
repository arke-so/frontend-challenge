import { env } from '$env/dynamic/private'

export const API_BASE_URL = '/api'

export const ApiClientID = Object.freeze({
  Iam: 'iam',
  Supply: 'supply',
  Product: 'product',
  Sales: 'sales',
  Infra: 'infra',
})

/**
 * @typedef ApiClientConfig
 * @type {Object}
 * @property {string} input - Path to the OpenAPI spec file
 * @property {string} output - Path to the generated client
 * @property {string} serviceBaseURL - Base URL of the service
 * @property {string} internalPath - Internal path of the service
 * 
 * @typedef {Object.<string, ApiClientConfig>} ApiClientConfigMap
 * 
 * @typedef Configuration
 * @type {Object}
 * @property {ApiClientConfigMap} clients - Configuration for each client
 * 
 * @returns {Configuration}
 */
export function getConfiguration() {
  return {
    clients: {
      [ApiClientID.Iam]: {
        input: '../../arke-repos/iam/spec/openapi.yaml',
        output: 'src/lib/api-client/iam',
        serviceBaseURL: env?.IAM_SERVICE_BASE || 'http://arke.localhost.me:8080/api/v1',
        internalPath: `${API_BASE_URL}/iam`,
      },
      [ApiClientID.Supply]: {
        input: '../../arke-repos/supply/spec/openapi.yaml',
        output: 'src/lib/api-client/supply',
        serviceBaseURL: env?.SUPPLY_SERVICE_BASE || 'http://arke.localhost.me:8081/api/v1',
        internalPath: `${API_BASE_URL}/supply`,
      },
      [ApiClientID.Product]: {
        input: '../../arke-repos/product/spec/openapi.yaml',
        output: 'src/lib/api-client/product',
        serviceBaseURL: env?.PRODUCT_SERVICE_BASE || 'http://arke.localhost.me:8082/api/v1',
        internalPath: `${API_BASE_URL}/product`,
      },
      [ApiClientID.Sales]: {
        input: '../../arke-repos/sales/spec/openapi.yaml',
        output: 'src/lib/api-client/sales',
        serviceBaseURL: env?.SALES_SERVICE_BASE || 'http://arke.localhost.me:8083/api/v1',
        internalPath: `${API_BASE_URL}/sales`,
      },
      [ApiClientID.Infra]: {
        input: '../../arke-repos/infra/spec/openapi.yaml',
        output: 'src/lib/api-client/infra',
        serviceBaseURL: env?.INFRA_SERVICE_BASE || 'http://arke.localhost.me:8084/api/v1',
        internalPath: `${API_BASE_URL}/infra`,
      },
    },
  }
}