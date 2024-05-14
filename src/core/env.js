import Constants from 'expo-constants'

/**
 *  @type {typeof import('../../env.js').ClientEnv}
 */
export const Env = Constants.expoConfig?.extra ?? {}
