<template>
  <Teleport :to="teleport === false ? undefined : teleport" :disabled="disabled || teleport === false">
    <div :class="n()" v-if="open">
      <div :class="n('content')"><slot /></div>
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
    const { total, bindStep } = useStep()

    const tourProvider: TourProvider = {
      current,
      total,
      clickStep,
      finish,
    }

    bindStep(tourProvider)

    function clickStep(index: number) {
      call(props['onUpdate:current'], index)
      call(props.onChange, index)
    }

    function finish() {
      call(props['onUpdate:open'], false)
      call(props.onFinish)
    }

    return { disabled, showMask, n, classes }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './tour';
</style>
