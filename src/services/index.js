import * as SC from './soundcloud'
import * as SCLocal from './soundcloud.local'

export const Soundcloud = {
  ...SC,
  ...(process.env.NODE_ENV !== 'production' ? SCLocal : {})
}
