import { defineListenerProp } from '../utils/components'
import { type PropType, type TeleportProps } from 'vue'

export const props = {
  open: Boolean,
  current: {
    type: Number,
    default: 0,
  },
  mask: {
    type: Boolean,
    default: true,
  },
  teleport: {
    type: [String, Object, Boolean] as PropType<TeleportProps['to'] | false>,
    default: 'body',
  },
  onClose: defineListenerProp<() => void>(),
  onFinish: defineListenerProp<() => void>(),
  onChange: defineListenerProp<(current: number) => void>(),
  'onUpdate:open': defineListenerProp<(open: boolean) => void>(),
  'onUpdate:current': defineListenerProp<(current: number) => void>(),
}
