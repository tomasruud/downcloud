import {track, user} from './soundcloud.mock'

const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const withTimeout = async (res) => {
  const ms = Math.random() * (1000 - 500) + 500
  await timeout(ms)
  return res
}

export const authenticate = async () => withTimeout('this-is-541-a-34-token')
export const getTracks = async () => withTimeout(new Array(10).fill(track))
export const getMe = async () => withTimeout(user)
