import type { JWTUser } from '$utils/auth'
// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
  namespace App {
    interface Error {
      message: string
    }
    interface Locals {
      token: string | undefined
      user: JWTUser | undefined
      language: string | undefined
      scheme: 'dark' | 'light' | undefined
    }
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {}
