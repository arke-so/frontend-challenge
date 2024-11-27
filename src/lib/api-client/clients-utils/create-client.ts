import type { ConfigurationParameters } from '$api/iam'
import type { PageServerLoad } from '@sveltejs/kit'

export function createGenericAuthenticationConfig(
  ConfigurationBuilder: any,
  event: PageServerLoad,
  defaults: Partial<ConfigurationParameters>,
  overrides: Partial<ConfigurationParameters> = {},
) {
  const ipAddress = event?.request?.headers?.get('x-forwarded-for') || event.getClientAddress()
  const host = event?.request?.headers?.get('host')
  const additionalHeaders = {
    'X-Forwarded-For': ipAddress,
    'X-Forwarded-Host': host,
  }

  return new ConfigurationBuilder({
    ...defaults,
    ...{
      headers: {
        Authorization: `Bearer ${event.locals.token}`,
        ...additionalHeaders,
        ...(overrides?.headers || {}),
      },
      ...overrides,
    },
  })
}
