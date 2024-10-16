import { type ComputedRef } from 'vue'
import { useChildren } from '@varlet/use'
import { type StepProvider } from '../tour-step/provide'

export interface TourProvider {
  current: ComputedRef<number>
  total: ComputedRef<number>
  clickStep: (index: number) => void
  finish: () => void
}

export const TOUR_BIND_STEP_KEY = Symbol('TOUR_BIND_STEP_KEY')

export function useStep() {
  const { childProviders, length, bindChildren } = useChildren<TourProvider, StepProvider>(TOUR_BIND_STEP_KEY)

  return {
    step: childProviders,
    total: length,
    bindStep: bindChildren,
  }
}
