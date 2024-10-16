import Tour from './Tour.vue'
import { withInstall, withPropsDefaultsSetter } from '../utils/components'
import { props as tourProps } from './props'

withInstall(Tour)
withPropsDefaultsSetter(Tour, tourProps)

export { tourProps }

export const _TourComponent = Tour

export default Tour
