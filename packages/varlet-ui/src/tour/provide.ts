import { useChildren } from '@varlet/use'
import { type StepProvider } from '../tour-step/provide'

export interface TourProvider {}

export const TOUR_BIND_STEP_KEY = Symbol('TOUR_BIND_STEP_KEY')

export function useStep() {
  const { bindChildren, childProviders } = useChildren<TourProvider, StepProvider>(TOUR_BIND_STEP_KEY)

  return {
    step: childProviders,
    bindStep: bindChildren,
  }
}
