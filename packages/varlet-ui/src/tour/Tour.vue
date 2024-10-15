<template>
  <Teleport :to="teleport === false ? undefined : teleport" :disabled="disabled || teleport === false">
    <div :class="n()" v-if="open">
      <slot />
      <div :class="n('mask')" v-if="showMask"></div>
    </div>
  </Teleport>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useStep, type TourProvider } from './provide'
import { props } from './props'
import { createNamespace, useTeleport } from '../utils/components'
import { call } from '@varlet/shared'

const { name, n, classes } = createNamespace('tour')

export default defineComponent({
  name,
  props,
  setup(props) {
    const open = computed(() => props.open)
    const current = computed(() => props.current)
    const showMask = computed(() => open.value && props.mask)
    const { disabled } = useTeleport()
    const { bindStep } = useStep()

    const tourProvider: TourProvider = {
      current,
      clickStep,
    }

    bindStep(tourProvider)

    function clickStep(index: number) {
      call(props.onChange, index)
    }

    return { disabled, showMask, n, classes }
  },
})
</script>

<style lang="less">
@import '../styles/common';
</style>
