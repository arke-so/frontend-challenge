import { createAuthenticationConfig } from '$api/clients-utils/supply-client'
import { UsersApi } from '$api/iam'

/** @type {import('./$types').PageServerLoad} */
export async function load(event) {
  const usersApi = new UsersApi(createAuthenticationConfig(event))
  const users = await usersApi.listUsers()

  return {
    users,
  }
}
