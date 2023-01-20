// For more information about this file see https://dove.feathersjs.com/guides/cli/hook.html
import type { HookContext } from '../declarations'

export const timestamp = async (context: HookContext) => {
  context.data.timestamp = new Date().getTime()
  console.log(`Running hook timestamp on ${context.path}.${context.method}`)
}
