import { type ComputedRef } from 'vue'
import { useParent } from '@varlet/use'
import { error } from '../utils/logger'
import { type TourProvider, TOUR_BIND_STEP_KEY } from '../tour/provide'

export interface StepProvider {
  index: ComputedRef<number>
}

export function useTour() {
  const { parentProvider, index, bindParent } = useParent<TourProvider, StepProvider>(TOUR_BIND_STEP_KEY)

  if (!bindParent) {
    error('Tour', '<tour-step/> must in <tour>')
  }

  return {
    index,
    tour: parentProvider,
    bindTour: bindParent,
  }
}
