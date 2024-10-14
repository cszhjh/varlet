import { defineListenerProp } from '../utils/components'

export const props = {
  open: Boolean,
  current: Number,
  onClose: defineListenerProp<() => void>(),
  onFinish: defineListenerProp<() => void>(),
  onChange: defineListenerProp<(current: number) => void>(),
}
