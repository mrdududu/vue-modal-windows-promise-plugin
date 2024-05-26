<script setup lang="ts">
import { useModalsPlugin } from '@/plugins/vue-modal-windows-promise-plugin'
import DefaultModalWrapper from '@/plugins/vue-modal-windows-promise-plugin/components/DefaultModalWrapper.vue'
import SampleModal from '@/components/SampleModal.vue'
import MyButton from '@/components/MyButton.vue'

const modalsPlugin = useModalsPlugin(DefaultModalWrapper)
const handleShowModal = async () => {
  const modalResult = await modalsPlugin.showModal(SampleModal, {})
  console.log('handleShowModal', { modalResult })
}
</script>

<template>
  <div>
    <div>
      <MyButton @click="handleShowModal">Show modal</MyButton>
    </div>
    <ModalsPlugin />
  </div>
</template>
