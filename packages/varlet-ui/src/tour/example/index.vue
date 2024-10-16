<script setup lang="ts">
import { watchLang, onThemeChange } from '@varlet/cli/client'
import { ref } from 'vue'
import { t, use } from './locale'

const open = ref(false)
const current = ref(0)
const ref1 = ref()
const ref2 = ref()
const ref3 = ref()

watchLang(use)
onThemeChange()
</script>

<template>
  <var-button type="primary" @click="open = true">Begin Tour</var-button>

  <var-divider />

  <var-space>
    <var-button ref="ref1">Upload</var-button>
    <var-button ref="ref2" type="primary">Save</var-button>
    <var-button ref="ref3">More</var-button>
  </var-space>

  <var-tour v-model:open="open" v-model:current="current">
    <var-tour-step :target="ref1?.$el" title="Upload File">
      <img style="width: 240px" src="https://varletjs.org/varlet_icon.png" alt="tour.png" />
      <div>Put you files here.</div>
    </var-tour-step>
    <var-tour-step :target="ref2?.$el" title="Save" description="Save your changes" />
    <var-tour-step :target="ref3?.$el" title="Other Actions" description="Click to see other" />
  </var-tour>
</template>
