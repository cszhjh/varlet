import { type PropType } from 'vue'

export const props = {
  target: [String, Object] as PropType<string | HTMLElement>,
  title: String,
  description: String,
}
