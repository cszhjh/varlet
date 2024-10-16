import TourStep from './TourStep.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as tourStepProps } from './props'

withInstall(TourStep)
withPropsDefaultsSetter(TourStep, tourStepProps)

export { tourStepProps }

export const _TourStepComponent = TourStep

export default TourStep
