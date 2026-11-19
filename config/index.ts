import type { AppInfo } from '@/types/app'

// Only public, non-secret values belong in this shared module.
export const APP_ID = 'opility-catalog-ai'
export const APP_INFO: AppInfo = {
  title: 'Opility Catalog AI',
  description: 'Meet Ella, your multilingual e-commerce product listing and localization specialist, powered by Opility.',
  copyright: 'Opility',
  privacy_policy: '',
  default_language: 'en',
  disable_session_same_site: false,
}
export const isShowPrompt = false
export const promptTemplate = ''
export const API_PREFIX = '/api'
export const LOCALE_COOKIE_NAME = 'locale'
export const DEFAULT_VALUE_MAX_LEN = 48
