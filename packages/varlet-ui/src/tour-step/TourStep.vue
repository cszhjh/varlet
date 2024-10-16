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
      <div :class="n('indicators')">
        <span v-for="item in total" :key="item"></span>
      </div>
      <div :class="n('buttons')">
        <var-button
          v-if="index > 0"
          :class="classes(n('button'), n('previous-button'))"
          outline
          size="small"
          @click="handlePrev"
        >
          Previous
        </var-button>
        <var-button
          v-if="index <= total - 1"
          :class="classes(n('button'), n('next-button'))"
          type="primary"
          size="small"
          @click="handleNext"
        >
          {{ index === total - 1 ? 'Finish' : 'Next' }}
        </var-button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import VarButton from '../button'
import { computed, defineComponent, type ComputedRef } from 'vue'
import { props } from './props'
import { useTour, type StepProvider } from './provide'
import { createNamespace } from '../utils/components'

const { name, n, classes } = createNamespace('tour-step')

export default defineComponent({
  name,
  components: {
    VarButton,
  },
  props,
  setup() {
    const { index, tour, bindTour } = useTour()
    const { current, total, clickStep, finish } = tour
    const isCurrent: ComputedRef<boolean> = computed(() => current.value === index.value)

    const stepProvider: StepProvider = { index }

    bindTour(stepProvider)

    function handlePrev() {
      clickStep(index.value - 1)
    }

    function handleNext() {
      if (index.value === total.value - 1) {
        finish()
      } else {
        clickStep(index.value + 1)
      }
    }

    return { index, total, isCurrent, n, classes, handlePrev, handleNext }
  },
})
</script>

<style lang="less">
@import '../styles/common';
@import './tourStep';
</style>
