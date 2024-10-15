<template>
  <div :class="n()" v-if="isCurrent">
    <slot name="content">
      <div :class="n('content')">
        <div :class="n('title')" v-if="title || $slots['title']">
          <slot name="title">{{ title }}</slot>
        </div>
        <div :class="n('description')" v-if="description || $slots['default']">
          <slot>{{ description }}</slot>
        </div>
      </div>
    </slot>
    <div :class="n('footer')">
      <div :class="n('indicators')"></div>
      <div :class="n('buttons')"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, type ComputedRef } from 'vue'
import { props } from './props'
import { useTour, type StepProvider } from './provide'
import { createNamespace } from '../utils/components'

const { name, n, classes } = createNamespace('tour-step')

export default defineComponent({
  name,
  props,
  setup(props) {
    const { index, tour, bindTour } = useTour()
    const { current, clickStep } = tour
    const isCurrent: ComputedRef<boolean> = computed(() => current.value === index.value)

    const stepProvider: StepProvider = { index }

    bindTour(stepProvider)

    function click() {
      return clickStep(index.value)
    }

    return { index, isCurrent, n, classes, click }
  },
})
</script>

<style lang="less">
@import '../styles/common';
</style>
