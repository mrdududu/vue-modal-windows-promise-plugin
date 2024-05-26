<script setup lang="ts">
import { inject } from 'vue'
import { type Modals } from '../modalsSingleton'

const _modals = inject<Modals>('modals')

const handelResolve = (value: any) => {
  if (_modals) {
    const resolve = _modals.hideModal()
    resolve(value)
  }
}
</script>
<template>
  <div v-if="_modals">
    <template
      v-for="({ comp, compProps, wrapperComp }, index) in _modals.modals.value"
      :key="index"
    >
      <component :is="wrapperComp">
        <component :is="comp" v-bind="compProps" @resolve="handelResolve" />
      </component>
    </template>
  </div>
</template>
